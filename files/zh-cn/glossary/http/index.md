---
title: HTTP
slug: Glossary/HTTP
l10n:
  sourceCommit: 409978ee3d2edd2b045adfbe39769b2dae6f31ea
---

{{GlossarySidebar}}

超文本传输协议（**HTTP**，HyperText Transfer Protocol）是用于在 {{glossary("World Wide Web", "Web")}} 上传输超媒体文件的底层网络{{glossary("protocol", "协议")}}，通常的是在浏览器和服务器之间传递数据，以供人们浏览。现行的 HTTP 标准的版本是 {{glossary("HTTP_2", "HTTP/2")}}。

作为 {{glossary("URI")}} 的一部分，`http://example.com/` 中的“http”被称为“方案（scheme）”。使用“http”方案的资源通常使用 HTTP 协议通过未加密连接传输。“https”方案（如 `https://developer.mozilla.org`）表示资源是使用 HTTP 协议，但通过安全的 {{glossary("TLS")}} 通道传输。

HTTP 是基于文本的 (所有的通信都以纯文本的形式进行) 以及无状态的 (某一次通信与前述的通信都无关)，该特性极大方便了在 Web 上浏览网页的人。除此之外，HTTP 也可以作为服务器之间的 {{glossary("REST")}} Web 服务、网站间的 {{domxref("fetch()")}} 请求的基础，以让网站变得更加丰富。

## 参见

- 在 MDN 上的 [HTTP](/zh-CN/docs/Web/HTTP)
- 在维基百科上的 [HTTP](https://zh.wikipedia.org/wiki/超文本传输协议)
