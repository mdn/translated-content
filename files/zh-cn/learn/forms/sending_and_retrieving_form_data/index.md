---
title: 发送表单数据
slug: Learn/Forms/Sending_and_retrieving_form_data
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Forms/The_native_form_widgets", "Learn/HTML/Forms/Form_validation", "Learn/HTML/Forms")}}

本文将讨论当用户提交表单时发生了什么——数据去了哪，以及当它到达时该如何处理？我们还研究了与发送表单数据相关的一些安全问题。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        <p>
          基本计算机素养，对<a
            href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
            >HTML 的理解</a
          >，对<a href="/zh-CN/docs/Web/HTTP/Basics_of_HTTP">HTTP</a> 和<a
            href="/zh-CN/docs/Learn/Server-side/First_steps"
            >服务器端编程</a
          >的基础知识。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        了解表单数据提交时发生了什么，包括服务器上如何处理数据的基本概念。
      </td>
    </tr>
  </tbody>
</table>

## 数据都去哪儿了？

在这里，我们将讨论在提交表单时数据会发生什么。

### 客户端/服务器体系结构

web 基于非常基本的客户端/服务器体系结构，可以总结如下:客户端(通常是 web 浏览器) 向服务器发送请求 (大多数情况下是[Apache](https://httpd.apache.org/)、[Nginx](http://nginx.com/)、[IIS](http://www.iis.net/)、[Tomcat](http://tomcat.apache.org/)等 web 服务器)，使用[HTTP 协议](/zh-CN/docs/HTTP)。服务器使用相同的协议来回答请求。

![A basic schema of the Web client/server architecture](client-server.png)

在客户端，HTML 表单只不过是一种方便的用户友好的方式，可以配置 HTTP 请求将数据发送到服务器。这使用户能够提供在 HTTP 请求中传递的信息。

> **备注：** 为了更好地了解客户端—服务器架构是如何工作的，请阅读我们的[服务器端网站编程的第一个步骤](/zh-CN/docs/Learn/Server-side/First_steps)模块。

### 在客户端：定义如何发送数据

{{HTMLElement("form")}}元素定义了如何发送数据。它的所有属性都是为了让您配置当用户点击提交按钮时发送的请求。两个最重要的属性是[`action`](/zh-CN/docs/Web/HTML/Element/form#action)和[`method`](/zh-CN/docs/Web/HTML/Element/form#method)。

#### `action` 属性

这个属性定义了发送数据要去的位置。它的值必须是一个有效的 URL。如果没有提供此属性，则数据将被发送到包含这个表单的页面的 URL。

在这个例子中，数据被发送到一个绝对 URL —— `http://foo.com`：

```html
<form action="http://foo.com">…</form>
```

这里，我们使用相对 URL——数据被发送到服务器上的不同 URL

```html
<form action="/somewhere_else">…</form>
```

在没有属性的情况下，像下面一样，{{HTMLElement("form")}}数据被发送到表单出现的相同页面上：

```html
<form>…</form>
```

许多较老的页面使用下面的符号表示数据应该被发送到包含表单的相同页面；这是必需的，因为直到 HTML5[`action`](/zh-CN/docs/Web/HTML/Element/form#action)属性都需要该符号。现在，这不再需要了。

```html
<form action="#">…</form>
```

> **备注：** 可以指定使用 HTTPS(安全 HTTP) 协议的 URL。当您这样做时，数据将与请求的其余部分一起加密，即使表单本身是托管在使用 HTTP 访问的不安全页面上。另一方面，如果表单是在安全页面上托管的，但是您指定了一个不安全的 HTTP URL，它带有[`action`](/zh-CN/docs/Web/HTML/Element/form#action)属性，所有的浏览器都会在每次尝试发送数据时向用户显示一个安全警告，因为数据不会被加密。

#### `method` 属性

该属性定义了如何发送数据。[HTTP 协议](/zh-CN/docs/HTTP)提供了几种执行请求的方法；HTML 表单数据可以通过许多不同的方法进行数据传输，其中最常见的是`GET`方法和`POST`方法。

为了理解这两种方法之间的区别，让我们回过头来看看 HTTP 是如何工作的。
每当您想要访问 Web 上的资源时，浏览器都会向 URL 发送一个请求。
HTTP 请求由两个部分组成：一个包含关于浏览器功能的全局元数据集的头部，和一个包含服务器处理特定请求所需信息的主体。

##### GET 方法

`GET`方法是浏览器使用的方法，请求服务器返回给定的资源:“嘿，服务器，我想要得到这个资源。”在这种情况下，浏览器发送一个空的主体。由于主体是空的，如果使用该方法发送一个表单，那么发送到服务器的数据将被追加到 URL。

考虑下面这个表单：

```html
<form action="http://foo.com" method="get">
  <div>
    <label for="say">What greeting do you want to say?</label>
    <input name="say" id="say" value="Hi" />
  </div>
  <div>
    <label for="to">Who do you want to say it to?</label>
    <input name="to" id="to" value="Mom" />
  </div>
  <div>
    <button>Send my greetings</button>
  </div>
</form>
```

由于已经使用了`GET`方法，当你提交表单的时候，您将看到`www.foo.com/?say=Hi&to=Mom`在浏览器地址栏里。

![](url-parameters.png)数据作为一系列的名称/值对被附加到 URL。在 URL web 地址结束之后，我们得到一个问号 (`?`)，后面跟着由一个与符号 (`&`) 互相分隔开的名称/值对。在本例中，我们将两个数据传递给服务器。

- `say`, 它有一个 `Hi`的值。
- `to`, 它有一个 `Mom`的值。

HTTP 请求如下：

```plain
GET /?say=Hi&to=Mom HTTP/2.0
Host: foo.com
```

> **备注：** 你可以在 GitHub 上看到本例子——见 [get-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/get-method.html) ([预览版](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html)).

##### POST 方法

`POST`方法略有不同。这是浏览器在询问响应时使用与服务器通信的方法，该响应考虑了 HTTP 请求正文中提供的数据:“嘿，服务器，看一下这些数据，然后给我回一个适当的结果。”如果使用该方法发送表单，则将数据追加到 HTTP 请求的主体中。

让我们来看一个例子，这是我们在上面的`GET`部分中所看到的相同的形式，但是使用[`method`](/zh-CN/docs/Web/HTML/Element/form#method)属性设置为`post`。

```html
<form action="http://foo.com" method="post">
  <div>
    <label for="say">What greeting do you want to say?</label>
    <input name="say" id="say" value="Hi" />
  </div>
  <div>
    <label for="to">Who do you want to say it to?</label>
    <input name="to" id="to" value="Mom" />
  </div>
  <div>
    <button>Send my greetings</button>
  </div>
</form>
```

当使用`POST`方法提交表单时，没有数据会附加到 URL，HTTP 请求看起来是这样的，而请求主体中包含的数据是这样的：

```plain
POST / HTTP/2.0
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

`Content-Length`数据头表示主体的大小，`Content-Type`数据头表示发送到服务器的资源类型。稍后我们将讨论这些标头。

> **备注：** 你可以在 GitHub 上看到本例—— 见 [post-method.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/post-method.html) ([预览版](https://mdn.github.io/learning-area/html/forms/sending-form-data/post-method.html)).

#### 查看 HTTP 请求

HTTP 请求永远不会显示给用户 (如果您想要看到它们，您需要使用诸如[Firefox Network Monitor](/zh-CN/docs/Tools/Network_Monitor)或[Chrome Developer Tools](https://developers.google.com/chrome-developer-tools/)之类的工具)。例如，您的表单数据将显示在 Chrome 网络选项卡中：

1. 按下 F12
2. 选择 "Network"
3. 选择 "All"
4. 在 "Name" 标签页选择 "foo.com"
5. 选择 "Headers"

你可以获得表单数据，像下图显示的那样

![](network-monitor.png)

唯一显示给用户的是被调用的 URL。正如我们上面提到的，使用`GET`请求用户将在他们的 URL 栏中看到数据，但是使用`POST`请求用户将不会看到。这一点很重要，有两个原因：

1. 如果您需要发送一个密码 (或其他敏感数据)，永远不要使用`GET`方法否则数据会在 URL 栏中显示，这将非常不安全。
2. 如果您需要发送大量的数据，那么`POST`方法是首选的，因为一些浏览器限制了 URL 的大小。此外，许多服务器限制它们接受的 URL 的长度。

### 在服务器端：检索数据

无论选择哪种 HTTP 方法，服务器都会接收一个字符串并解析，以便将数据作为键/值对序列获取。您访问这个序列的方式取决于您使用的开发平台以及您可能使用的任何特定框架。您使用的技术也决定了如何处理密钥副本；通常，最近收到的密钥的值是优先的。

#### 例如：原始 PHP

[PHP](http://php.net/)提供了一些全局对象来访问数据。假设您已经使用了`POST`方法，那么下面的示例将获取数据并将其显示给用户。当然，你对数据的处理取决于你自己。您可以显示它，将它存储到数据库中，通过电子邮件发送它，或者以其他方式处理它。

```php
<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
?>
```

这个例子显示了一个带有我们发送的数据的页面。您可以在我们的示例[php-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.html)中看到这一点——该文件包含与我们之前看到的相同的示例表单，它使用了`post`的`method`和`php-example.php`的`action`。当提交时，它将表单数据发送到[php-example.php](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/php-example.php)，其中包含了上述代码块中所见的 php 代码。当执行此代码时，浏览器中的输出是`Hi Mom`。

![](php-result.png)

> **备注：** 当您将本例加载到本地浏览器中时，这个示例将无法工作---浏览器无法解析 PHP 代码，因此当提交表单时，浏览器只会为您提供下载 PHP 文件。为了让它生效，您需要通过某种类型的 PHP 服务器运行这个示例。本地 PHP 测试的好选择有[MAMP](https://www.mamp.info/en/downloads/)(Mac 和 Windows) 和[AMPPS](http://ampps.com/download)(Mac、Windows、Linux)。

#### 例子：Python

这个例子展示了如何使用 Python 完成同样的事情——在 web 页面上显示提交的数据。
这将使用[Flask framework](http://flask.pocoo.org/)来呈现模板、处理表单数据提交等 (参见[python-example.py](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/python-example.py))。

```plain
from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def form():
    return render_template('form.html')

@app.route('/hello', methods=['GET', 'POST'])
def hello():
    return render_template('greeting.html', say=request.form['say'], to=request.form['to'])

if __name__ == "__main__":
    app.run()
```

以上代码中引用的两个模板如下：

- [form.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/form.html): 与我们在 [POST 方法](#post_方法) 小节中看到的相同的表单，但是将`action`设置为`\{{ url_for('hello') }}`。(这是一个[Jinja2](http://jinja.pocoo.org/docs/2.9/)模板，它基本上是 HTML，但是可以包含对运行包含在花括号中的 web 服务器的 Python 代码的调用。`url_for('hello')`基本上是在“提交表单时重定向到`/hello`”。
- [greeting.html](https://github.com/mdn/learning-area/blob/main/html/forms/sending-form-data/templates/greeting.html): 这个模板只包含一行，用于呈现渲染时传递给它的两个数据块。
  这是通过前面所见的`hello()`函数完成的，该函数在`/hello`URL 被导向时运行。

> **备注：** 同样，如果您只是尝试将其直接加载到浏览器中，那么这段代码将无法工作。Python 的工作方式与 PHP 略有不同——要在本地运行此代码，您需要[安装 Python/pip](/zh-CN/docs/Learn/Server-side/Django/development_environment#Installing_Python_3)，然后使用`pip3 install flask`安装 Flask。此时，您应该能够使用`python3 python-example.py`来运行这个示例，然后在浏览器中导航到`localhost:5000`。

#### 其他语言和框架

还有许多其他的服务器端技术可以用于表单处理，包括[Perl](/zh-CN/docs/)、[Java](/zh-CN/docs/)、 [.Net](http://www.microsoft.com/net)、[Ruby](/zh-CN/docs/)等。只挑你最喜欢的用就好。话虽如此，但值得注意的是，直接使用这些技术并不常见，因为这可能很棘手。更常见的是使用许多优秀的框架，这些框架使处理表单变得更容易，例如：

- [Django](/zh-CN/docs/Learn/Server-side/Django) for Python（比[Flask](http://flask.pocoo.org/)要重量级一些，但是有更多的工具和选项。）
- [Express](/zh-CN/docs/Learn/Server-side/Express_Nodejs) for Node.js
- [Laravel](https://laravel.com/) for PHP
- [Ruby On Rails](https://rubyonrails.org/) for Ruby
- [Phoenix](https://phoenixframework.org/) for Elixir

要注意的是，即使使用这些框架，使用表单也不一定很容易。但这比从头开始编写所有功能要简单得多，而且会节省很多时间。

> **备注：** 向您介绍任何服务器端语言或框架超出了本文的范围。如果你想要学习这些它们，上面的链接会给你一些帮助。

## 特殊案例：发送文件

用 HTML 表单发送文件是一个特殊的例子。文件是二进制数据——或者被认为是这样的——而所有其他数据都是文本数据。由于 HTTP 是一种文本协议，所以处理二进制数据有特殊的要求。

### `enctype` 属性

该属性允许您指定在提交表单时所生成的请求中的`Content-Type`的 HTTP 数据头的值。这个数据头非常重要，因为它告诉服务器正在发送什么样的数据。默认情况下，它的值是`application/x-www-form-urlencoded`。它的意思是：“这是已编码为 URL 参数的表单数据。”

如果你想要发送文件，你需要额外的三个步骤：

- 将[`method`](/zh-CN/docs/Web/HTML/Element/form#method)属性设置为`POST`，因为文件内容不能放入 URL 参数中。
- 将[`enctype`](/zh-CN/docs/Web/HTML/Element/form#enctype)的值设置为`multipart/form-data`，因为数据将被分成多个部分，每个文件单独占用一个部分，表单正文中包含的文本数据（如果文本也输入到表单中）占用一个部分。
- 包含一个或多个[File picker](/zh-CN/docs/Learn/HTML/Forms/The_native_form_widgets#File_picker)小部件，允许用户选择将要上传的文件。

例如：

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="file">Choose a file</label>
    <input type="file" id="file" name="myFile" />
  </div>
  <div>
    <button>Send the file</button>
  </div>
</form>
```

> **备注：** 一些浏览器支持{{HTMLElement("input")}}的[`multiple`](/zh-CN/docs/Web/HTML/Element/input#multiple)属性，它允许只用一个 `<input>` 元素选择一个以上的文件上传。服务器如何处理这些文件取决于服务器上使用的技术。如前所述，使用框架将使您的生活更轻松。

> **警告：** 为了防止滥用，许多服务器配置了文件和 HTTP 请求的大小限制。在发送文件之前，先检查服务器管理员的权限是很重要的。

## 常见的安全问题

每次向服务器发送数据时，都需要考虑安全性。到目前为止，HTML 表单是最常见的攻击路径 (可能发生攻击的地方)。这些问题从来都不是来自 HTML 表单本身，它们来自于服务器如何处理数据。

根据你所做的事情，你会遇到一些非常有名的安全问题：

### XSS 和 CSRF

跨站脚本 (XSS) 和跨站点请求伪造 (CSRF) 是常见的攻击类型，它们发生在当您将用户发送的数据显示给这个用户或另一个用户时。

XSS 允许攻击者将客户端脚本注入到其他用户查看的 Web 页面中。攻击者可以使用跨站点脚本攻击的漏洞来绕过诸如[同源策略](/zh-CN/docs/JavaScript/Same_origin_policy_for_JavaScript)之类的访问控制。这些攻击的影响可能从一个小麻烦到一个重大的安全风险。

CSRF 攻击类似于 XSS 攻击，因为它们以相同的方式开始攻击——向 Web 页面中注入客户端脚本——但它们的目标是不同的。CSRF 攻击者试图将权限升级到特权用户 (比如站点管理员) 的级别，以执行他们不应该执行的操作 (例如，将数据发送给一个不受信任的用户)。

XSS 攻击利用用户对 web 站点的信任，而 CSRF 攻击则利用网站对其用户的信任。

为了防止这些攻击，您应该始终检查用户发送给服务器的数据 (如果需要显示)，尽量不要显示用户提供的 HTML 内容。相反，您应该对用户提供的数据进行处理，这样您就不会逐字地显示它。当今市场上几乎所有的框架都实现了一个最小的过滤器，它可以从任何用户发送的数据中删除 HTML{{HTMLElement("script")}}、{{HTMLElement("iframe")}} 和{{HTMLElement("object")}} 元素。这有助于降低风险，但并不一定会消除风险。

### SQL 注入

SQL 注入是一种试图在目标 web 站点使用的数据库上执行操作的攻击类型。这通常包括发送一个 SQL 请求，希望服务器能够执行它（通常发生在应用服务器试图存储由用户发送的数据时）。这实际上是[攻击网站的主要途径之一](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)。

其后果可能是可怕的，从数据丢失到通过使用特权升级控制整个网站基础设施的攻击。这是一个非常严重的威胁，您永远不应该存储用户发送的数据，而不执行一些清理工作 (例如，在 php/mysql 基础设施上使用[`mysql_real_escape_string()`](http://www.php.net/manual/en/function.mysql-real-escape-string.php)。

### HTTP 数据头注入和电子邮件注入

这种类型的攻击出现在当您的应用程序基于表单上用户的数据输入构建 HTTP 头部或电子邮件时。这些不会直接损害您的服务器或影响您的用户，但它们会引发一个更深入的问题，例如会话劫持或网络钓鱼攻击。

这些攻击大多是无声的，并且可以将您的服务器变成[僵尸](<http://en.wikipedia.org/wiki/Zombie_(computer_science)>)。

### 偏执：永远不要相信你的用户

那么，你如何应对这些威胁呢？这是一个远远超出本指南的主题，不过有一些规则需要牢记。最重要的原则是：永远不要相信你的用户，包括你自己；即使是一个值得信赖的用户也可能被劫持。

所有到达服务器的数据都必须经过检查和消毒。总是这样。没有例外。

- 远离有潜在危险的字符转义。应该如何谨慎使用的特定字符取决于所使用的数据的上下文和所使用的服务器平台，但是所有的服务器端语言都有相应的功能。
- 限制输入的数据量，只允许有必要的数据。
- 沙箱上传文件 (将它们存储在不同的服务器上，只允许通过不同的子域访问文件，或者通过完全不同的域名访问文件更好)。

如果你遵循这三条规则，你应该避免很多问题，但是如果你想要得到一个有能力的第三方执行的安全检查，这是一个好主意。不要以为你已经看到了所有可能的问题。

> **备注：** 我们的[服务器端](/zh-CN/docs/Learn/Server-side)学习主题的[网站安全性文章](/zh-CN/docs/Learn/Server-side/First_steps/Website_security)更详细地讨论了上述威胁和潜在的解决方案。

## 结论

如您所见，发送表单数据很容易，但要确保应用程序的安全性是很棘手的。请记住，前端开发人员不是应该定义数据安全模型的人。是的，我们将看到，[执行客户端数据验证](/zh-CN/docs/HTML/Forms/Data_form_validation)是可能的，但是服务器不能信任这种验证，因为它无法真正知道客户端到底发生了什么。

## 参见

如果您想了解更多关于保护 web 应用程序的信息，您可以深入了解这些资源：

- [Server-side website programming first steps](/zh-CN/docs/Learn/Server-side/First_steps)
- [The Open Web Application Security Project (OWASP)](https://www.owasp.org/index.php/Main_Page)
- [Chris Shiflett's blog about PHP Security](http://shiflett.org/)

{{PreviousMenuNext("Learn/HTML/Forms/The_native_form_widgets", "Learn/HTML/Forms/Form_validation", "Learn/HTML/Forms")}}
