---
title: HTTP
slug: Glossary/HTTP
l10n:
  sourceCommit: 409978ee3d2edd2b045adfbe39769b2dae6f31ea
---

{{GlossarySidebar}}

超文本传输协议（**HTTP**，HyperText Transfer Protocol）是用于在 {{glossary("World Wide Web", "Web")}} 上传输超媒体文件的底层网络{{glossary("protocol", "协议")}}，通常的是在浏览器和服务器之间传递数据，以供人们浏览。现行的 HTTP 标准的版本是 {{glossary("HTTP_2", "HTTP/2")}}。

"http://" 称为 schema，是 {{glossary("URI")}} 的组成部分，一般位于网络地址的开头。以 `https://developer.mozilla.org` 为例，该地址说明请求文档时使用 HTTP 协议，但是是在一个安全的 {{glossary("TLS")}} 通道上传输的。

HTTP 是基于文本的 (所有的通信都以纯文本的形式进行) 以及无状态的 (当前通信状态不会发现以前的通信状态)，该特性极大方便了在 Web 上浏览网页的人。除此之外，HTTP 也可以用于构建服务器之间交互的 {{glossary("REST")}} Web 服务，以及使得网站内容更加动态化的 {{domxref("fetch()")}}} 请求。

## 补充知识

- 在 MDN 上的 [HTTP](/zh-CN/docs/Web/HTTP)
- 在维基百科上的 [HTTP](https://zh.wikipedia.org/wiki/超文本传输协议)
