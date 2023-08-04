---
title: Properly Configuring Server MIME Types
slug: Learn/Server-side/Configuring_server_MIME_types
---

## Background

默认情况下，许多 web 服务器会为那些未知内容类型的文件配置一个默认 MIME 类型`text/plain` 或者`application/octet-stream` 。当一种新的内容类型被创造或者被添加到 web 服务器上，web 管理者在添加它到 web 服务器配置中可能会失败。主要原因是用户使用 Gecko-based 的浏览器，而这种浏览器只相信由 web 服务器和 web 应用所发布的 MIME 类型

### What are MIME types?

MIME 类型描述了邮件或者 web 服务器或者 web 应用中的媒体内容的类型，其目的是为了指导 web 浏览器对媒体内容的处理和表现。MIME 类型的示例如下：

- `text/html` 对于一般网页
- `text/plain` 对于一般文本
- `text/css` 对于级联样式表
- `text/javascript` 对于脚本
- `application/octet-stream` 意味着“下载这个文件”
- `application/x-java-applet` 对于 Java applets
- `application/pdf` 对于 PDF 文档

### Technical Background

完整的 MIME 类型列表可在 [IANA | MIME Media Types](http://www.iana.org/assignments/media-types/index.html) 查看。

在[HTTP specification](http://www.w3.org/Protocols/HTTP/1.1/spec.html) 中定义了能够描述在 web 中使用的媒体类型的 MIME 超集。

### Why are correct MIME types important?

对于某些浏览器，例如 IE，它尝试允许 web 服务器对于错误配置通过其源码猜测它可能的正确 MIME 类型。

这种做法将会避免许多由 web 管理员他们的错误。因为当内容的 MIME 类型错误，IE 将会用可能正确的 MIME 类型来继续处理内容。例如你设置一个`img`的类型为`text/plain` ,IE 可能会设置它为正确的 MIME 类型`images/*`

出于安全原因，使用正确的 MIME 类型的服务内容也是重要的；恶意内容可能会影响用户的计算机，假装它是一个安全类型文档，实际上不是。

> **备注：** 从历史角度，只要 HTML 文档请求处理 CSS 文件，Firefox 能够正常加载 CSS 即使它设置了错误的 MIME 类型。处于安全原因，Gecko 2.0 对于从请求文档不同来源加载的样式表，将不再这样做。如果 CSS 来自于不同来源，你必须设置它的正确 MIME 类型 (`text/css`).
>
> Gecko 1.9.1.11 (Firefox 3.5.11) 和 Gecko 1.9.2.5 (Firefox 3.6.5) 同样实施这种安全措施，但是提高它的实用性。如果样式表中的第一行看起来是一个很好的 CSS 构造，则存在允许加载的临时启发式算法。在 Firefox 4 中已经删除了启发式，您必须正确设置`text/css` 的 MIME 类型，才能够识别 CSS。

## 为何浏览器不应该猜测 MIME 类型

除了违返了 HTTP 规范，让浏览器去猜测正确的 MIME 类型是一个差劲的策略。原因如下

#### 失去控制

假如浏览器忽略报告的 MIME 类型，web 管理员和用户不在对内容如何进行处理有发言权了。

例如，面对 web 开发员的网址可能希望发送某些实例 HTML 文档，同时通希望能够以 `text/html`或者 `text/plain` 的 MIME 类型进行数据的处理和显示 或者 作为一个源代码。如果浏览器猜测它的正确 MIME 类型为 `text/html` 那么开发员不在有权利进行选择了。

#### 安全性

一些内容类型，例如可执行程序，本质上是不安全的。原因是经过规范化的 MIME 类型都有经过严格规定浏览器如何对这类类型的文件进行操作。一个可执行程序不能够在用户的电脑浏览器上执行，但可以通过弹出会话询问是否下载这个文件

MIME 类型猜测导致 IE 浏览器的安全漏洞（通过利用 IE 能够将错误的 MIME 类型 修改为正确的类型）。这绕过了正常的下载对话框，导致 InternetExplorer 猜测内容是可执行程序，然后在用户的计算机上运行。

## 如何确定服务器发送内容的 MIME 类型

通过开发者工具的 ContentType 查看 MIME 类型。

根据标准，通过一个 `meta` 标签来设置 MIME 类型 例如 `<meta http-equiv="Content-Type" content="text/html">` 当包含{{HTTPHeader("Content-Type")}} 时则忽略 `meta` 标签

## 如何为你的内容确定正确的 MIME 类型

这里有几种方法来确定文件的正确 MIME 类型

1. 如果你的内容是通过供应商软件应用创建的，那么你可以阅读供应商文档确认不同媒体文件的 MIME 值
2. 通过查看完整的 MIME 类型表 [IANA | MIME Media Types registry](http://www.iana.org/assignments/media-types/index.html)
3. 如果使用插件 netscape gecko 显示媒体类型，请安装插件，然后查看“帮助”>“关于插件”菜单，以查看哪些 MIME 类型与媒体类型相关联。
4. 搜索文件扩展名 [FILExt](http://filext.com/) 或者[File extensions reference](http://www.file-extensions.org/) ，确认扩展名和哪种类型的 MIME 相关联

## 如何设置服务器以发送正确的 MIME 类型

基本的方法是配置你的服务器发送正确的 HTTP `ContentType`类型给每个文档

- 如果您正在使用 Apache Web 服务器，只需将此示例.htaccess 文件复制到包含要使用正确 MIME 类型发送的文件的目录中。如果你有一个完整的文件子目录，只需将文件放在父目录中；您不需要将它放在每个子目录中。
- 如果您使用的是 Microsoft IIS, 请参阅[IANA | MIME Media Types registry](http://www.iana.org/assignments/media-types/index.html)这篇文章。
- 如果您使用服务器端脚本生成内容，通常可以在脚本顶部附近添加一行。您可以从 Perl，PHP，ASP 或 Java 提供 HTML 以外的内容 - 只需相应地更改 MIME 类型即可。

  - 对于 Perl CGI，你应该在文档其他行之前输出 `print "Content-Type: text/html\n\n";`。如果您正在使用 CGI 模块，你可以使用 `print $cgi->header('text/html');` 代替，其中 `$cgi` 是对 CGI 实例的引用。
  - 对于 PHP，你应该在文档其他行之前输出 `header('Content-Type: text/html');`。
  - 对于 ASP, 你应该在文档其他行之前输出`response.ContentType = "text/html";`。
  - 对于 Java servlet, 你需要在`doGet` 或 `doPost` 方法之前输出`response.setContentType("text/html");` ，其中 `response` 是对 `HttpServletResponse`的引用。

### Related Links

- [Incorrect MIME Type for CSS Files](/zh-CN/Incorrect_MIME_Type_for_CSS_Files)
- [IANA | MIME Media Types](http://www.iana.org/assignments/media-types/index.html)
- [Hypertext Transfer Protocol — HTTP/1.1](http://www.w3.org/Protocols/HTTP/1.1/spec.html)
- [Microsoft - 293336 - INFO: WebCast: MIME Type Handling in Microsoft Internet Explorer](http://support.microsoft.com/default.aspx?sd=msdn&scid=kb;en-us;293336)
- [Microsoft - Appendix A: MIME Type Detection in Internet Explorer](http://msdn.microsoft.com/workshop/networking/moniker/overview/appendix_a.asp)
- [Microsoft - Security Update, March 29, 2001](http://www.microsoft.com/windows/ie/downloads/critical/q290108/)
- [Microsoft - Security Update, December 13, 2001](http://www.microsoft.com/windows/ie/downloads/critical/Q313675/)
