---
title: URI
slug: Web/URI
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

**统一资源标识符**（URI）用于标识 Web 上的“资源”。URI 通常用作 [HTTP](/zh-CN/docs/Web/HTTP) 请求的目标，在这种情况下，URI 代表物理资源的位置，如文档、照片、二进制数据。最常见的 URI 类型是统一资源定位符（{{glossary("URL")}}），它被称为 _Web 地址_。

URI 在其他地方使用时，如 HTML `<a>` 链接的 [`href`](/zh-CN/docs/Web/HTML/Reference/Elements/a#href)，可用于触发获取资源以外的行为，包括打开电子邮件客户端、发送文本信息或执行 JavaScript。

## URL 和 URN

### URL

在浏览器地址栏中输入以下任何 URL，就可以让浏览器加载相关文档（资源）：

```url
https://developer.mozilla.org
https://developer.mozilla.org/zh-CN/docs/Learn_web_development/
https://developer.mozilla.org/zh-CN/search?q=URL
```

一个 URL 由不同的部分组成，有些是必须的，有些是可选的。一个更复杂的例子可能是这样的：

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### URN

统一资源名称（URN）是一个在特定命名空间中通过名称标识资源的 URI。

```url
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

两个 URN 分别代表

- 书籍：《一九八四》（乔治·奥威尔）
- IETF 规范 7230《超文本传输协议》（HTTP/1.1）：消息语法和路由。

## 统一资源标识符（URI）的语法

我们将以下 URL 分解为不同的部分：

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### 方案

![协议](mdn-url-protocol@x2.png)

`http://` 是 URL 的[_方案_](/zh-CN/docs/Web/URI/Reference/Schemes)，表示浏览器必须使用的协议。通常是 HTTP 协议或其安全版本 HTTPS。Web 要求使用这两种协议之一，但浏览器也知道如何处理其他协议，如 `mailto:`（打开邮件客户端）或 `ftp:`（处理文件传输）。[方案](/zh-CN/docs/Web/URI/Reference/Schemes)参考资料提供了最常见的协议列表以及其中一些协议的文档。

在 {{Glossary("HTML")}} 内容中使用 URL 时，一般只应使用其中几种 URL 方案。在引用子资源（即作为较大文档的一部分加载的文件）时，只能使用 HTTP 和 HTTPS 方案。出于安全考虑，越来越多的浏览器不再支持使用 FTP 加载子资源。

虽然某些浏览器可能会委托其他应用程序加载 FTP 内容，但在最高级别（如直接在浏览器的 URL 栏中键入，或作为链接的目标），FTP 仍然是可以接受的。

### 权威

URI 的[_权威_](/zh-CN/docs/Web/URI/Reference/Authority) 由用户信息（可选，通常未指定）、主机名和端口组成。

![域名](mdn-url-domain@x2.png)

`www.example.com` 是 URI 的*主机名*，表示正在请求哪个 Web 服务器。在这里，我们使用的是域名。也可以直接使用 {{Glossary("IP Address", "IP 地址")}}，但由于不太方便，除非服务器没有注册域名，否则很少有人这样做。

![端口](mdn-url-port@x2.png)

`:80` 是 URL 的*端口*，表示用于访问 Web 服务器资源的技术上的“大门”。如果 Web 服务器使用 HTTP 协议的标准端口（HTTP 为 80，HTTPS 为 443）授权访问其资源，则通常省略该端口。否则，端口必须指定。

### 路径

![到文件的路径](mdn-url-path@x2.png)

`/path/to/myfile.html` 是 URL 的*路径*，表示资源在 Web 服务器上的位置。在 Web 发展初期，这是指向 Web 服务器上某个物理位置的实际目录路径。如今，Web 服务器通常会将其抽象为一个任意位置。

### 查询

![参数](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` 是 URL 的*查询*，是提供给 Web 服务器的额外参数。参数是以 `?` 符号为前缀、以 `&` 符号分隔的键/值对列表。这些参数可用于提供所请求资源的附加上下文。每个资源位置都可能有自己的参数规则，要知道特定参数是如何处理的，唯一可靠的方法就是询问服务器的所有者，例如阅读其文档。

### 片段

![锚点](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` 是 URL 的[_片段_](/zh-CN/docs/Web/URI/Reference/Fragment)，是指向资源本身另一部分的锚点。锚点代表资源内部的一种“书签”，为浏览器提供了显示位于该“书签”位置的内容的方向。例如，在 HTML 文档中，浏览器会滚动到定义了锚点的位置；在视频或音频文档中，浏览器会尝试转到锚点所代表的时间。值得注意的是，# 后面的部分（也称为片段标识符）永远不会随请求发送到服务器。

有一种特殊的[文本片段](/zh-CN/docs/Web/URI/Reference/Fragment/Text_fragments)特性，可以链接到网页中由文本内容标识的特定部分。

## 示例

```url
https://developer.mozilla.org/zh-CN/docs/Learn
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
mailto:help@supercyberhelpdesk.info
```

## 规范

{{Specifications}}

## 参见

- [什么是 URL？](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
