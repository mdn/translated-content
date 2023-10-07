---
title: 浏览器的同源策略
slug: Web/Security/Same-origin_policy
---

{{QuickLinksWithSubpages("/zh-CN/docs/Web/Security")}}

**同源策略**是一个重要的安全策略，它用于限制一个{{Glossary("origin","源")}}的文档或者它加载的脚本如何能与另一个源的资源进行交互。

它能帮助阻隔恶意文档，减少可能被攻击的媒介。例如，它可以防止互联网上的恶意网站在浏览器中运行 JS 脚本，从第三方网络邮件服务（用户已登录）或公司内网（因没有公共 IP 地址而受到保护，不会被攻击者直接访问）读取数据，并将这些数据转发给攻击者。

## 源的定义

如果两个 URL 的{{Glossary("protocol","协议")}}、{{Glossary("port","端口")}}（如果有指定的话）和{{Glossary("host","主机")}}都相同的话，则这两个 URL 是*同源*的。这个方案也被称为“协议/主机/端口元组”，或者直接是“元组”。（“元组”是指一组项目构成的整体，具有双重/三重/四重/五重等通用形式。）

下表给出了与 URL `http://store.company.com/dir/page.html` 的源进行对比的示例：

| URL                                               | 结果 | 原因                                |
| ------------------------------------------------- | ---- | ----------------------------------- |
| `http://store.company.com/dir2/other.html`        | 同源 | 只有路径不同                        |
| `http://store.company.com/dir/inner/another.html` | 同源 | 只有路径不同                        |
| `https://store.company.com/secure.html`           | 失败 | 协议不同                            |
| `http://store.company.com:81/dir/etc.html`        | 失败 | 端口不同（`http://` 默认端口是 80） |
| `http://news.company.com/dir/other.html`          | 失败 | 主机不同                            |

### 源的继承

在页面中通过 `about:blank` 或 `javascript:` URL 执行的脚本会继承打开该 URL 的文档的源，因为这些类型的 URL 没有包含源服务器的相关信息。

例如，`about:blank` 通常作为父脚本写入内容的新的空白弹出窗口的 URL（例如，通过 {{domxref("Window.open()")}}）。如果此弹出窗口也包含 JavaScript，则该脚本将从创建它的脚本那里继承对应的源。

`data:` URL 将获得一个新的、空的安全上下文。

### 文件源

现代浏览器通常将使用 `file:///` 模式加载的文件的来源视为*不透明的来源*。这意味着，假如一个文件包括来自同一文件夹的其他文件，它们不会被认为来自同一来源，并可能引发 {{Glossary("CORS")}} 错误。

请注意，[URL 规范](https://url.spec.whatwg.org/#origin)指出，文件的来源与实现有关，一些浏览器可能将同一目录或子目录下的文件视为同源文件，尽管这有[安全影响](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730)。

## 源的更改

> **警告：** 这里描述的方法（使用 {{domxref("document.domain")}} setter）已被弃用，因为它破坏了同源策略所提供的安全保护，并使浏览器中的源模型复杂化，导致互操作性问题和安全漏洞。

满足某些限制条件的情况下，页面是可以修改它的源。脚本可以将 {{domxref("document.domain")}} 的值设置为其当前域或其当前域的父域。如果将其设置为其当前域的父域，则这个较短的父域将用于后续源检查。

例如：假设 `http://store.company.com/dir/other.html` 文档中的一个脚本执行以下语句：

```js
document.domain = "company.com";
```

这条语句执行之后，页面将会成功地通过与 `http://company.com/dir/page.html` 的同源检测（假设`http://company.com/dir/page.html` 将其 `document.domain` 设置为“`company.com`”，以表明它希望允许这样做——更多有关信息，请参阅 {{domxref("document.domain")}}）。然而，`company.com` **不能**设置 `document.domain` 为 `othercompany.com`，因为它不是 `company.com` 的父域。

端口号是由浏览器另行检查的。任何对 `document.domain` 的赋值操作，包括 `document.domain = document.domain` 都会导致端口号被覆盖为 `null` 。因此 `company.com:8080` **不能**仅通过设置 `document.domain = "company.com"` 来与 `company.com` 通信。必须在它们双方中都进行赋值，以确保端口号都为 `null` 。

该机制有一些局限性。如果启用了 [`document-domain`](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy/document-domain) [`Permissions-Policy`](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy)，或该文档在沙箱 [`<iframe>`](/zh-CN/docs/Web/HTML/Element/iframe) 下，它将抛出一个“`SecurityError`” [`DOMException`](/zh-CN/docs/Web/API/DOMException)，并且用这种方法改变源并不影响 Web API 使用的源检查（例如 [`localStorage`](/zh-CN/docs/Web/API/Window/localStorage)、[`indexedDB`](/zh-CN/docs/Web/API/IndexedDB_API)、[`BroadcastChannel`](/zh-CN/docs/Web/API/BroadcastChannel)、[`SharedWorker`](/zh-CN/docs/Web/API/SharedWorker)）。更详尽的失败案例列表可以在 [Document.domain 的错误章节](/zh-CN/docs/Web/API/Document/domain#异常)找到。

> **备注：** 使用 `document.domain` 来允许子域安全访问其父域时，需要在父域和子域中设置 `document.domain` 为*相同*的值。这是必要的，即使这样做只是将父域设置回其原始值。不这样做可能会导致权限错误。

## 跨源网络访问

同源策略控制不同源之间的交互，例如在使用 {{domxref("XMLHttpRequest")}} 或 {{htmlelement("img")}} 标签时则会受到同源策略的约束。这些交互通常分为三类：

- 跨源**写操作**（Cross-origin writes）一般是被允许的。例如链接、重定向以及表单提交。特定少数的 HTTP 请求需要添加[预检请求](/zh-CN/docs/Web/HTTP/CORS#预检请求)。
- 跨源**资源嵌入**（Cross-origin embedding）一般是被允许的（后面会举例说明）。
- 跨源**读操作**（Cross-origin reads）一般是不被允许的，但常可以通过内嵌资源来巧妙的进行读取访问。例如，你可以读取嵌入图片的高度和宽度，调用内嵌脚本的方法，或[得知内嵌资源的可用性](https://bugzil.la/629094)。

以下是可能嵌入跨源的资源的一些示例：

- 使用 `<script src="…"></script>` 标签嵌入的 JavaScript 脚本。语法错误信息只能被同源脚本中捕捉到。
- 使用 `<link rel="stylesheet" href="…">` 标签嵌入的 CSS。由于 CSS 的松散的语法规则，CSS 的跨源需要一个设置正确的 `Content-Type` 标头。如果样式表是跨源的，且 MIME 类型不正确，资源不以有效的 CSS 结构开始，浏览器会阻止它的加载。
- 通过 {{htmlelement("img")}} 展示的图片。
- 通过 {{htmlelement("video")}} 和 {{htmlelement("audio")}} 播放的多媒体资源。
- 通过 {{htmlelement("object")}} 和 {{htmlelement("embed")}} 嵌入的插件。
- 通过 {{cssxref("@font-face")}} 引入的字体。一些浏览器允许跨源字体（cross-origin fonts），另一些需要同源字体（same-origin fonts）。
- 通过 {{htmlelement("iframe")}} 载入的任何资源。站点可以使用 {{HTTPHeader("X-Frame-Options")}} 标头来阻止这种形式的跨源交互。

### 如何允许跨源访问

可以使用 [CORS](/zh-CN/docs/Web/HTTP/CORS) 来允许跨源访问。CORS 是 {{Glossary("HTTP")}} 的一部分，它允许服务端来指定哪些主机可以从这个服务端加载资源。

### 如何阻止跨源访问

- 阻止跨源写操作，只要检测请求中的一个不可推测的令牌（CSRF token）即可，这个标记被称为[跨站请求伪造（CSRF）](https://owasp.org/www-community/attacks/csrf)令牌。你必须使用这个令牌来阻止页面的跨源读操作。
- 阻止资源的跨源读取，需要保证该资源是不可嵌入的。阻止嵌入行为是必须的，因为嵌入资源通常向其暴露信息。
- 阻止跨源嵌入，需要确保你的资源不能通过以上列出的可嵌入资源格式使用。浏览器可能不会遵守 `Content-Type` 头部定义的类型。例如，如果你在 HTML 文档中指定 `<script>` 标记，则浏览器将尝试将标签内部的 HTML 解析为 JavaScript。当资源不是网站的入口点时，还可以使用 CSRF 令牌来防止嵌入。

## 跨源脚本 API 访问

JavaScript 的 API 中，如 {{domxref("HTMLIFrameElement.contentWindow", "iframe.contentWindow")}}、 {{domxref("window.parent")}}、{{domxref("window.open")}} 和 {{domxref("window.opener")}} 允许文档间直接相互引用。当两个文档的源不同时，这些引用方式将对 {{domxref("Window")}} 和 {{domxref("Location")}} 对象的访问添加限制，如下两节所述。

为了能让不同源中的文档进行交流，可以使用 {{domxref("window.postMessage")}}。

规范：[HTML 现行标准 & 跨源对象](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects) 。

### Window

允许以下对 `Window` 属性的跨源访问：

| 方法                              |
| --------------------------------- |
| {{domxref("window.blur")}}        |
| {{domxref("window.close")}}       |
| {{domxref("window.focus")}}       |
| {{domxref("window.postMessage")}} |

| 属性                           |         |
| ------------------------------ | ------- |
| {{domxref("window.closed")}}   | 只读。  |
| {{domxref("window.frames")}}   | 只读。  |
| {{domxref("window.length")}}   | 只读。  |
| {{domxref("window.location")}} | 读/写。 |
| {{domxref("window.opener")}}   | 只读。  |
| {{domxref("window.parent")}}   | 只读。  |
| {{domxref("window.self")}}     | 只读。  |
| {{domxref("window.top")}}      | 只读。  |
| {{domxref("window.window")}}   | 只读。  |

某些浏览器允许访问除上述外更多的属性。

### Location

允许以下对 `Location` 属性的跨源访问：

| 方法                            |
| ------------------------------- |
| {{domxref("location.replace")}} |

| 属性                                  |        |
| ------------------------------------- | ------ |
| {{domxref("HTMLAnchorElement.href")}} | 只写。 |

某些浏览器允许访问除上述外更多的属性。

## 跨源数据存储访问

访问存储在浏览器中的数据，如 [Web Storage](/zh-CN/docs/Web/API/Web_Storage_API) 和 [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API)，是以源进行分割的。每个源都拥有自己单独的存储空间，一个源中的 JavaScript 脚本不能对属于其他源的数据进行读写操作。

{{glossary("Cookie", "Cookie")}} 使用不同的源定义方式。一个页面可以为本域和其父域设置 cookie，只要是父域不是公共后缀（public suffix）即可。Firefox 和 Chrome 使用 [Public Suffix List](https://publicsuffix.org/) 检测一个域是否是公共后缀。当你设置 cookie 时，你可以使用 `Domain`、`Path`、`Secure` 和 `HttpOnly` 标记来限定可访问性。当你读取 cookie 时，你无法知道它是在哪里被设置的。即使只使用安全的 https 连接，你所看到的任何 cookie 都有可能是使用不安全的连接进行设置的。

## 参见

- [W3C 介绍的同源策略](https://www.w3.org/Security/wiki/Same_Origin_Policy)
- [web.dev 介绍的同源策略](https://web.dev/same-origin-policy/)
- {{httpheader("Cross-Origin-Resource-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
