---
title: Django Web 应用安全
slug: Learn/Server-side/Django/web_application_security
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Deployment", "Learn/Server-side/Django/django_assessment_blog", "Learn/Server-side/Django")}}

保护用户数据是任何网站设计的重要部分。我们之前在文章[web 安全](/zh-CN/docs/Web/Security)中解释了一些更常见的安全威胁--本文提供了 Django 的内置保护如何处理这些威胁的实际演示。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        阅读服务器端网页编程中的 "<a
          href="/zh-CN/docs/learn/Server-side/First_steps/Website_security"
          >Website security</a
        >" 主题。并请至少完成 Django Web 框架教程
        <a href="/zh-CN/docs/Learn/Server-side/Django/Forms"
          >Django Tutorial Part 9: 使用表单</a
        >
        及以前的教程。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>理解保障 Django 网站安全应该 (和不应该) 做的事情。</td>
    </tr>
  </tbody>
</table>

## 概述

[web 安全](/zh-CN/docs/Web/Security)主題提供一个概述，说明了网站安全对于服务器端设计的意义，以及以及一些需要应对的常见威胁。本文中包含一个关键的概念：如果网站信任任何来自浏览器的数据，几乎所有的攻击方法都会成功。

> **警告：** 切记，对于网站安全来说最重要一点就是“**永远不要相信浏览器端提交的数据**”。这些数据包括使用 `GET` 方式请求时 URL 中的参数，`POST` 方式请求的数据，HTTP headers 和 cookies，以及用户上传的文件等等。请确保一定要检查和清洗这些提交的数据。对于网站安全来说，总是要做好最坏的打算。

对 Django 用户来说，好消息是 Django 框架已经处理了大量的常见威胁。请阅读 Django 官方文档中的"[Security in Django](https://docs.djangoproject.com/en/2.0/topics/security/)"部分来了解 Django 的安全细节，以及如何确保基于 Django 的网站的安全。

## 常见威胁及保护

在本文中，我们将使用前面章节中的“[本地图书馆](/zh-CN/docs/learn/Server-side/Django/Tutorial_local_library_website)”项目作为示范来演示一些 Django 的安全特性。

### 跨站脚本 (XSS)

XSS(英语：Cross site scripting，通常简称：XSS) 是指一类恶意攻击者将代码通过网站注入到其他用户浏览器中的攻击方式。一般攻击者会把恶意代码作为普通数据放入到网站数据库中，这样其他用户在获取和展示数据的过程中就会受到攻击。此外，攻击者还可以通过引诱用户点击某些链接来执行恶意的 JavaScript 代码。

Django 的模板系统可以帮您抵挡大部分的 XSS 攻击，实现的方式在于转义对于 HTML 来说比较**“危险”**的特殊字符 (可参考官方文档：[escaping specific characters](https://docs.djangoproject.com/en/2.0/ref/templates/language/#automatic-html-escaping))。现在，我们用[Django Tutorial Part 9: Working with forms](/zh-CN/docs/learn/Server-side/Django/Forms) 这一章中的“创建作者”表单来做个演示，尝试向我们的本地图书馆网站注入一些 JavaScript 脚本。

1. 使用开发服务器启动网站 (参考命令：`python3 manage.py runserver`)。
2. 在浏览器中打开网站，并用超级用户身份登录。
3. 进入创建作者页面 (地址可能会是：[`http://127.0.0.1:8000/catalog/author/create/`](http://127.0.0.1:8000/catalog/author/create/))。
4. 输入姓名、生日等信息，随后在 Last Name 这个字段里面填入以下的内容：
   `<script>alert('Test alert');</script>`
   ![Author Form XSS test](author_create_form_alert_xss.png)

   > **备注：** 这一段代码并没有任何杀伤力，在执行的时候只会在浏览器中弹出一个警告提示框。如果这个警告提示框出现，则表明本网站存在可被 XSS 攻击的漏洞。

5. 点击 **Submit** 按钮保存信息。
6. 保存后的作者信息将会显示为下图的样式。因为 XSS 防护措施的存在，注入代码中的`alert()`部分并没有执行，而只是用文本的方式直接显示了出来。![Author detail view XSS test](author_detail_alert_xss.png)

如果你有兴趣阅读下页面的 HTML 源码，则会发现危险的字符已被转义成了无害的字符 (例如： `>` 被转义为了 `&gt;` )

```html
<h1>
  Author: Boon&lt;script&gt;alert(&#39;Test alert&#39;);&lt;/script&gt;, David
  (Boonie)
</h1>
```

Django 的模板系统可以帮助抵御大部分的 XSS 攻击。当然，XSS 保护功能也可以被关闭，而且 XSS 保护一般对非用户输入的内容不会自动进行防护 (例如表单中字段的`help_text`通常不会是用户提交的，所以这部分数据 Django 也不会进行转义)

XSS 攻击也可能来自于其他不可信的数据来源，例如 cookies，Web 服务或上传的文件（实际上只要是未经清洗的数据直接展示出来都会有被攻击的可能）。如果你要显示这些不可信来源的数据，切记一定要自己做好数据清洗的工作。

### 防护跨站请求伪造 (CSRF)

CSRF(英语：Cross-site request forgery，通常简称：CSRF 或 XSRF) 攻击可以让恶意攻击者在用户不知情的情况下，使用用户的身份来进行系统操作。举个例子，现在有一名黑客想要在我们的本地图书馆中添加一些作者信息。

> **备注：** 这个示例里面的黑客没有考虑对钱下手。而现实生活中的黑客则极有可能会产生更加危险的操作（例如，把钱转入他们自己的账户中等等）。

为了实现这个目的，黑客可以创建一个类似于下面示例的 HTML 文件，这个文件包含了一个创建作者的表单 (类似我们在之前章节中用过的)，并且一旦加载完毕就会立即进行提交。随后黑客可以将这个文件发送至所有的图书管理员，并且引诱他们打开这个文件 (文件中真的没有啥有害的信息)。如果任何一个已登录的图书管理员不慎打开了这个文件，那么文件中的表单就会利用图书管理员的身份来提交，随后就会创建出一个新的作者来。

```html
<html>
  <body onload="document.EvilForm.submit()">
    <form
      action="http://127.0.0.1:8000/catalog/author/create/"
      method="post"
      name="EvilForm">
      <table>
        <tr>
          <th><label for="id_first_name">First name:</label></th>
          <td>
            <input
              id="id_first_name"
              maxlength="100"
              name="first_name"
              type="text"
              value="Mad"
              required />
          </td>
        </tr>
        <tr>
          <th><label for="id_last_name">Last name:</label></th>
          <td>
            <input
              id="id_last_name"
              maxlength="100"
              name="last_name"
              type="text"
              value="Man"
              required />
          </td>
        </tr>
        <tr>
          <th><label for="id_date_of_birth">Date of birth:</label></th>
          <td>
            <input id="id_date_of_birth" name="date_of_birth" type="text" />
          </td>
        </tr>
        <tr>
          <th><label for="id_date_of_death">Died:</label></th>
          <td>
            <input
              id="id_date_of_death"
              name="date_of_death"
              type="text"
              value="12/10/2016" />
          </td>
        </tr>
      </table>
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

运行 Django 开发服务器，然后使用超级管理员账号进行登录。将上面的代码贴到一个文件中，并在浏览器中打开这个文件，随后你就会看到一个 CSRF 错误，这是因为 Django 的安全机制防护了此类的攻击。

在表单定义的时候加入 `{% csrf_token %}` 这个模板标签，CSRF 保护功能即可启用。在模板渲染的时候，这个 token 在 HTML 代码中将会按照下面的格式显示，包含了一个与当前用户和当前浏览器关联的值。

```html
<input
  type="hidden"
  name="csrfmiddlewaretoken"
  value="0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW" />
```

Django 生成这个用户/浏览器关联 key 的目的在于可以据此来拒绝那些不包含这个 key 的表单请求，也可以拒绝那些包含了错误了用户/浏览器关联 key 的表单请求。

有了这种保护机制后，攻击者要发起攻击就需要找到目标用户的 CSRF key。通过广撒网给所有的图书管理员发送恶意代码文件的方式也很难奏效，因为 CSRF key 是和浏览器相关联的。

Django 的 CSRF 防御默认是开启的。一定要在表单的位置使用 `{% csrf_token %}`这个标签，同时，切记使用`POST`方式来发起新增和更新数据的请求。

### 其他防护措施

Django 还提供了很多其他形式的防护措施 (大部分不是很容易进行演示):

- SQL 注入防护
  - : SQL 注入漏洞可以让攻击者直接对网站数据库执行构造好的 SQL 语句，在无需用户权限的情况下即可实现对数据的访问、修改甚至是删除。绝大多数的情况下，使用 Django 的查询集/模型直接进行数据库访问时，实际使用的 SQL 语句已经被底层的数据库驱动妥善地进行了转义。如果必须要直接执行自定义的 SQL 语句，那么也请一定要注意防范 SQL 注入的问题。
- 点击劫持防护
  - : 点击劫持是指攻击者通过诱导用户，用户本意要访问 A 网站，最终却访问到了 B 网站。举例说明，攻击者可以给用户显示一个合法的银行网站，同时把用户名密码登录框改为不可见的[\<iframe>](/zh-CN/docs/Web/HTML/Element/iframe) 标签，以此来窃取用户的登录信息。Django 通过 [`X-Frame-Options`](https://docs.djangoproject.com/en/2.0/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware)中间件来防御点击劫持攻击，在支持的浏览器中，这种方式可以避免网站在 iframe 中显示。
- 强制 SSL/HTTPS

  - : web 服务器可通过启用 SSL/HTTPS 来加密网站和浏览器之间的所有通信流量，包括了身份认证及其他通过纯文本方式来发送的数据流量 (强烈建议启用 HTTPS)。如果 HTTPS 已启用，Django 还提供了一起实用的保护措施：

- [`SECURE_PROXY_SSL_HEADER`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SECURE_PROXY_SSL_HEADER) 设置可以用于检查内容是否安全，可用于代理和 Django 之间使用非 HTTPS 方式通讯的情况下。
- [`SECURE_SSL_REDIRECT`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SECURE_SSL_REDIRECT) 可以将所有 HTTP 的请求重定向到 HTTPS。
- 使用 [HTTP Strict Transport Security](https://docs.djangoproject.com/en/2.0/ref/middleware/#http-strict-transport-security) (HSTS) 头来通知浏览器未来与此网站的连接仅使用 HTTPS。与 HTTP 连接重定向至 HTTPS 的配置相结合后，HSTS 可以确保之后的连接强制使用 HTTPS。HSTS 还有 [`SECURE_HSTS_SECOND`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SECURE_HSTS_SECONDS)和 [`SECURE_HSTS_INCLUDE_SUBDOMAINS`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SECURE_HSTS_INCLUDE_SUBDOMAINS) 等选项可以进行配置。
- 将 [`SESSION_COOKIE_SECURE`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SESSION_COOKIE_SECURE) 和 [`CSRF_COOKIE_SECURE`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-CSRF_COOKIE_SECURE) 设置为 `True`。这些配置将确保 session 和 csrf 的 cookie 仅使用 HTTPS 连接来发送。

- Host 头校验
  - : 使用 [`ALLOWED_HOSTS`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-ALLOWED_HOSTS) 配置仅接受由信任的 host 发起的请求。

还有很多其他的安全措施及使用这些安全措施的注意事项我们没有提到。我们这里仅仅提供了 Django 安全措施的一个概览，更多的信息请参阅 Django 官方安全文档。

## 总结

Django 具备有效的防护措施，以对抗一些常見的威胁，包括 XSS 和 CSRF 攻击。本文中，我们已经使用本地图书馆网站来了演示 Django 如何处理一些特定的攻击。我们也提供了关于其他保护措施的简单概述。

但这仅仅是对网站安全的一个入门。我们强烈建议您阅读 [Django 中的安全](https://docs.djangoproject.com/en/2.0/topics/security/) 以获得更加深入的理解。

本 Django 教程的下一步，也是最后一步，是完成 [评估任务](/zh-CN/docs/Learn/Server-side/Django/django_assessment_blog)。

## 参阅

- [Security in Django](https://docs.djangoproject.com/en/2.0/topics/security/) (Django 官方文档)
- [Server side website security](/zh-CN/docs/Web/Security) (MDN)
- [Web security](/zh-CN/docs/Web/Security) (MDN)
- [Securing your site](/zh-CN/docs/Web/Security/Securing_your_site) (MDN)

{{PreviousMenuNext("Learn/Server-side/Django/Deployment", "Learn/Server-side/Django/django_assessment_blog", "Learn/Server-side/Django")}}
