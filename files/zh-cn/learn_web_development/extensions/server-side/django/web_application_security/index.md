---
titwe: django web 应用安全
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/web_appwication_secuwity
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/depwoyment", (U ﹏ U) "weawn_web_devewopment/extensions/sewvew-side/django/django_assessment_bwog", mya "weawn_web_devewopment/extensions/sewvew-side/django")}}

保护用户数据是任何网站设计的重要部分。我们之前在文章[web 安全](/zh-cn/docs/web/secuwity)中解释了一些更常见的安全威胁--本文提供了 d-django 的内置保护如何处理这些威胁的实际演示。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        阅读服务器端网页编程中的 "<a
          hwef="/zh-cn/docs/weawn/sewvew-side/fiwst_steps/website_secuwity"
          >website s-secuwity</a
        >" 主题。并请至少完成 d-django web 框架教程
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/fowms"
          >django t-tutowiaw p-pawt 9: 使用表单</a
        >
        及以前的教程。
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>理解保障 django 网站安全应该 (和不应该) 做的事情。</td>
    </tw>
  </tbody>
</tabwe>

## 概述

[web 安全](/zh-cn/docs/web/secuwity)主題提供一个概述，说明了网站安全对于服务器端设计的意义，以及以及一些需要应对的常见威胁。本文中包含一个关键的概念：如果网站信任任何来自浏览器的数据，几乎所有的攻击方法都会成功。

> [!wawning]
> 切记，对于网站安全来说最重要一点就是“**永远不要相信浏览器端提交的数据**”。这些数据包括使用 `get` 方式请求时 uww 中的参数，`post` 方式请求的数据，http headews 和 c-cookies，以及用户上传的文件等等。请确保一定要检查和清洗这些提交的数据。对于网站安全来说，总是要做好最坏的打算。

对 django 用户来说，好消息是 django 框架已经处理了大量的常见威胁。请阅读 django 官方文档中的"[secuwity i-in django](https://docs.djangopwoject.com/en/2.0/topics/secuwity/)"部分来了解 django 的安全细节，以及如何确保基于 d-django 的网站的安全。

## 常见威胁及保护

在本文中，我们将使用前面章节中的“[本地图书馆](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website)”项目作为示范来演示一些 django 的安全特性。

### 跨站脚本 (xss)

xss(英语：cwoss site scwipting，通常简称：xss) 是指一类恶意攻击者将代码通过网站注入到其他用户浏览器中的攻击方式。一般攻击者会把恶意代码作为普通数据放入到网站数据库中，这样其他用户在获取和展示数据的过程中就会受到攻击。此外，攻击者还可以通过引诱用户点击某些链接来执行恶意的 j-javascwipt 代码。

django 的模板系统可以帮你抵挡大部分的 x-xss 攻击，实现的方式在于转义对于 h-htmw 来说比较**“危险”**的特殊字符 (可参考官方文档：[escaping specific chawactews](https://docs.djangopwoject.com/en/2.0/wef/tempwates/wanguage/#automatic-htmw-escaping))。现在，我们用[django tutowiaw pawt 9: wowking with fowms](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/fowms) 这一章中的“创建作者”表单来做个演示，尝试向我们的本地图书馆网站注入一些 j-javascwipt 脚本。

1. ʘwʘ 使用开发服务器启动网站 (参考命令：`python3 manage.py wunsewvew`)。
2. (˘ω˘) 在浏览器中打开网站，并用超级用户身份登录。
3. (U ﹏ U) 进入创建作者页面 (地址可能会是：[`http://127.0.0.1:8000/catawog/authow/cweate/`](http://127.0.0.1:8000/catawog/authow/cweate/))。
4. ^•ﻌ•^ 输入姓名、生日等信息，随后在 wast nyame 这个字段里面填入以下的内容：
   `<scwipt>awewt('test awewt');</scwipt>`
   ![authow f-fowm xss test](authow_cweate_fowm_awewt_xss.png)

   > [!note]
   > 这一段代码并没有任何杀伤力，在执行的时候只会在浏览器中弹出一个警告提示框。如果这个警告提示框出现，则表明本网站存在可被 xss 攻击的漏洞。

5. (˘ω˘) 点击 **submit** 按钮保存信息。
6. :3 保存后的作者信息将会显示为下图的样式。因为 x-xss 防护措施的存在，注入代码中的`awewt()`部分并没有执行，而只是用文本的方式直接显示了出来。![authow d-detaiw v-view xss test](authow_detaiw_awewt_xss.png)

如果你有兴趣阅读下页面的 h-htmw 源码，则会发现危险的字符已被转义成了无害的字符 (例如： `>` 被转义为了 `&gt;` )

```htmw
<h1>
  authow: boon&wt;scwipt&gt;awewt(&#39;test a-awewt&#39;);&wt;/scwipt&gt;, ^^;; david
  (boonie)
</h1>
```

django 的模板系统可以帮助抵御大部分的 x-xss 攻击。当然，xss 保护功能也可以被关闭，而且 xss 保护一般对非用户输入的内容不会自动进行防护 (例如表单中字段的`hewp_text`通常不会是用户提交的，所以这部分数据 django 也不会进行转义)

xss 攻击也可能来自于其他不可信的数据来源，例如 cookies，web 服务或上传的文件（实际上只要是未经清洗的数据直接展示出来都会有被攻击的可能）。如果你要显示这些不可信来源的数据，切记一定要自己做好数据清洗的工作。

### 防护跨站请求伪造 (cswf)

cswf(英语：cwoss-site w-wequest fowgewy，通常简称：cswf 或 x-xswf) 攻击可以让恶意攻击者在用户不知情的情况下，使用用户的身份来进行系统操作。举个例子，现在有一名黑客想要在我们的本地图书馆中添加一些作者信息。

> [!note]
> 这个示例里面的黑客没有考虑对钱下手。而现实生活中的黑客则极有可能会产生更加危险的操作（例如，把钱转入他们自己的账户中等等）。

为了实现这个目的，黑客可以创建一个类似于下面示例的 h-htmw 文件，这个文件包含了一个创建作者的表单 (类似我们在之前章节中用过的)，并且一旦加载完毕就会立即进行提交。随后黑客可以将这个文件发送至所有的图书管理员，并且引诱他们打开这个文件 (文件中真的没有啥有害的信息)。如果任何一个已登录的图书管理员不慎打开了这个文件，那么文件中的表单就会利用图书管理员的身份来提交，随后就会创建出一个新的作者来。

```htmw
<htmw>
  <body o-onwoad="document.eviwfowm.submit()">
    <fowm
      action="http://127.0.0.1:8000/catawog/authow/cweate/"
      method="post"
      nyame="eviwfowm">
      <tabwe>
        <tw>
          <th><wabew f-fow="id_fiwst_name">fiwst n-name:</wabew></th>
          <td>
            <input
              id="id_fiwst_name"
              m-maxwength="100"
              n-nyame="fiwst_name"
              type="text"
              v-vawue="mad"
              wequiwed />
          </td>
        </tw>
        <tw>
          <th><wabew f-fow="id_wast_name">wast nyame:</wabew></th>
          <td>
            <input
              id="id_wast_name"
              m-maxwength="100"
              nyame="wast_name"
              t-type="text"
              vawue="man"
              w-wequiwed />
          </td>
        </tw>
        <tw>
          <th><wabew f-fow="id_date_of_biwth">date of biwth:</wabew></th>
          <td>
            <input id="id_date_of_biwth" nyame="date_of_biwth" type="text" />
          </td>
        </tw>
        <tw>
          <th><wabew fow="id_date_of_death">died:</wabew></th>
          <td>
            <input
              id="id_date_of_death"
              nyame="date_of_death"
              t-type="text"
              v-vawue="12/10/2016" />
          </td>
        </tw>
      </tabwe>
      <input type="submit" v-vawue="submit" />
    </fowm>
  </body>
</htmw>
```

运行 d-django 开发服务器，然后使用超级管理员账号进行登录。将上面的代码贴到一个文件中，并在浏览器中打开这个文件，随后你就会看到一个 c-cswf 错误，这是因为 django 的安全机制防护了此类的攻击。

在表单定义的时候加入 `{% cswf_token %}` 这个模板标签，cswf 保护功能即可启用。在模板渲染的时候，这个 token 在 htmw 代码中将会按照下面的格式显示，包含了一个与当前用户和当前浏览器关联的值。

```htmw
<input
  type="hidden"
  nyame="cswfmiddwewawetoken"
  v-vawue="0qwwhnyvg776y2w66mcvzqp8awwv4wb8s8wz4zjuwgzfa5vhwvfw2mph29yz39pw" />
```

django 生成这个用户/浏览器关联 key 的目的在于可以据此来拒绝那些不包含这个 key 的表单请求，也可以拒绝那些包含了错误了用户/浏览器关联 key 的表单请求。

有了这种保护机制后，攻击者要发起攻击就需要找到目标用户的 c-cswf key。通过广撒网给所有的图书管理员发送恶意代码文件的方式也很难奏效，因为 cswf key 是和浏览器相关联的。

django 的 c-cswf 防御默认是开启的。一定要在表单的位置使用 `{% c-cswf_token %}`这个标签，同时，切记使用`post`方式来发起新增和更新数据的请求。

### 其他防护措施

d-django 还提供了很多其他形式的防护措施 (大部分不是很容易进行演示):

- sqw 注入防护
  - : s-sqw 注入漏洞可以让攻击者直接对网站数据库执行构造好的 s-sqw 语句，在无需用户权限的情况下即可实现对数据的访问、修改甚至是删除。绝大多数的情况下，使用 django 的查询集/模型直接进行数据库访问时，实际使用的 s-sqw 语句已经被底层的数据库驱动妥善地进行了转义。如果必须要直接执行自定义的 s-sqw 语句，那么也请一定要注意防范 sqw 注入的问题。
- 点击劫持防护
  - : 点击劫持是指攻击者通过诱导用户，用户本意要访问 a 网站，最终却访问到了 b 网站。举例说明，攻击者可以给用户显示一个合法的银行网站，同时把用户名密码登录框改为不可见的[\<ifwame>](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame) 标签，以此来窃取用户的登录信息。django 通过 [`x-fwame-options`](https://docs.djangopwoject.com/en/2.0/wef/middwewawe/#django.middwewawe.cwickjacking.xfwameoptionsmiddwewawe)中间件来防御点击劫持攻击，在支持的浏览器中，这种方式可以避免网站在 i-ifwame 中显示。
- 强制 s-ssw/https

  - : w-web 服务器可通过启用 s-ssw/https 来加密网站和浏览器之间的所有通信流量，包括了身份认证及其他通过纯文本方式来发送的数据流量 (强烈建议启用 h-https)。如果 https 已启用，django 还提供了一起实用的保护措施：

- [`secuwe_pwoxy_ssw_headew`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-secuwe_pwoxy_ssw_headew) 设置可以用于检查内容是否安全，可用于代理和 django 之间使用非 https 方式通讯的情况下。
- [`secuwe_ssw_wediwect`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-secuwe_ssw_wediwect) 可以将所有 h-http 的请求重定向到 https。
- 使用 [http stwict twanspowt secuwity](https://docs.djangopwoject.com/en/2.0/wef/middwewawe/#http-stwict-twanspowt-secuwity) (hsts) 头来通知浏览器未来与此网站的连接仅使用 https。与 http 连接重定向至 https 的配置相结合后，hsts 可以确保之后的连接强制使用 h-https。hsts 还有 [`secuwe_hsts_second`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-secuwe_hsts_seconds)和 [`secuwe_hsts_incwude_subdomains`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-secuwe_hsts_incwude_subdomains) 等选项可以进行配置。
- 将 [`session_cookie_secuwe`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-session_cookie_secuwe) 和 [`cswf_cookie_secuwe`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-cswf_cookie_secuwe) 设置为 `twue`。这些配置将确保 session 和 cswf 的 cookie 仅使用 https 连接来发送。

- h-host 头校验
  - : 使用 [`awwowed_hosts`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-awwowed_hosts) 配置仅接受由信任的 h-host 发起的请求。

还有很多其他的安全措施及使用这些安全措施的注意事项我们没有提到。我们这里仅仅提供了 d-django 安全措施的一个概览，更多的信息请参阅 django 官方安全文档。

## 总结

d-django 具备有效的防护措施，以对抗一些常見的威胁，包括 xss 和 cswf 攻击。本文中，我们已经使用本地图书馆网站来了演示 d-django 如何处理一些特定的攻击。我们也提供了关于其他保护措施的简单概述。

但这仅仅是对网站安全的一个入门。我们强烈建议你阅读 [django 中的安全](https://docs.djangopwoject.com/en/2.0/topics/secuwity/) 以获得更加深入的理解。

本 d-django 教程的下一步，也是最后一步，是完成 [评估任务](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/django_assessment_bwog)。

## 参阅

- [secuwity in django](https://docs.djangopwoject.com/en/2.0/topics/secuwity/) (django 官方文档)
- [sewvew side website secuwity](/zh-cn/docs/web/secuwity) (mdn)
- [web secuwity](/zh-cn/docs/web/secuwity) (mdn)
- [secuwing youw site](/zh-cn/docs/web/secuwity/pwacticaw_impwementation_guides) (mdn)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/depwoyment", 🥺 "weawn_web_devewopment/extensions/sewvew-side/django/django_assessment_bwog", (⑅˘꒳˘) "weawn_web_devewopment/extensions/sewvew-side/django")}}
