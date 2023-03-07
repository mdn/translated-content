---
title: HTTP
slug: Web/HTTP
---

{{HTTPSidebar}}

**_超文本传输协议_**（HTTP）是一个用于传输超媒体文档（例如 HTML）的[应用层](https://zh.wikipedia.org/wiki/应用层)协议。它是为 Web 浏览器与 Web 服务器之间的通信而设计的，但也可以用于其它目的。HTTP 遵循经典的[客户端—服务端模型](https://zh.wikipedia.org/wiki/主從式架構)，客户端打开一个连接以发出请求，然后等待直到收到服务器端响应。HTTP 是[无状态协议](http://zh.wikipedia.org/wiki/无状态协议)，这意味着服务器不会在两个请求之间保留任何数据（状态）。

## 教程

通过以下指南和教程来学习如何使用 HTTP。

- [HTTP 概述](/zh-CN/docs/Web/HTTP/Overview)
  - : 介绍了客户端 - 服务器端协议的基本特征：它能够做什么以及它的设计意图。
- [HTTP 缓存](/zh-CN/docs/Web/HTTP/Caching)
  - : 缓存对高速 Web 站点来说是非常重要。这篇文章阐述了不同种类的缓存以及如何配置 HTTP 标头来控制它们。
- [HTTP Cookie](/zh-CN/docs/Web/HTTP/Cookies)
  - : [RFC 6265](https://tools.ietf.org/html/rfc6265) 定义了 cookie 的工作方式。在处理 HTTP 请求时，服务器可以发送带有响应的 `Set-Cookie` 标头。然后，对于同一服务器发起的每一个请求，客户端都会在 HTTP 请求标头中以字段 `Cookie` 的形式将 cookie 的值发送过去。也可以将 cookie 设置为在特定日期过期，或限制为特定的域和路径。
- [跨域资源共享（CORS）](/zh-CN/docs/Web/HTTP/CORS)
  - : **跨站点 HTTP 请求**就是从**另一个域**，而不是资源所在的域发起的 HTTP 请求。举例来说，在域 A（`http://domaina.example/`）的 HTML 页面上通过 `img` 元素来请求域 B（`http://domainb.foo/image.jpg`）上的图片资源。这在当今的 Web 页面上是很常见的——加载跨站点资源，包括 CSS 样式表、图片、脚本和其它资源。CORS 允许 Web 开发人员控制其站点对跨站点请求的反应。
- [HTTP 客户端提示（Client Hints）](/en-US/docs/Web/HTTP/Client_hints)
  - : **客户端提示**是一组响应标头，服务器可以使用它来主动从客户端请求关于设备、网络、用户以及用户代理指定的首选项的信息。然后，服务器可以根据客户端选择提供的信息来确定发送哪些资源。
- [HTTP 的演变](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : 简单描述了从早期版本的 HTTP 到现代 HTTP/2，新兴的 HTTP/3 以及未来版本的 HTTP 这个过程中发生的变更。
- [Mozilla Web 安全准则](https://wiki.mozilla.org/Security/Guidelines/Web_Security)
  - : 一系列用于帮助运营团队创建安全的 Web 应用程序的技巧。
- [HTTP 消息](/zh-CN/docs/Web/HTTP/Messages)
  - : 描述了 HTTP/1.x 和 HTTP/2 中不同种类消息的类型和结构。
- [典型的 HTTP 会话](/zh-CN/docs/Web/HTTP/Session)
  - : 展现并解释了一个常见 HTTP 会话的流程。
- [HTTP/1.x 中的连接管理](/zh-CN/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : 描述了在 HTTP/1.x 中的三种连接管理模型，以及它们的优点和缺点。

## 参考

浏览详细的 HTTP 参考文档。

- [HTTP 标头](/zh-CN/docs/Web/HTTP/Headers)
  - : HTTP 消息标头用于描述资源或服务器或客户端的行为。标头字段保存在 [IANA 注册表](https://www.iana.org/assignments/message-headers/message-headers.xhtml#perm-headers)中。IANA 也维护一个[建议的新 HTTP 消息标头的注册表](https://www.iana.org/assignments/message-headers/message-headers.xhtml#prov-headers)。
- [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Methods)
  - : 可以使用 HTTP：{{HTTPMethod("GET")}}、{{HTTPMethod("POST")}} 方法来完成不同操作，或是一些不太常见的请求方式，像是：{{HTTPMethod("OPTIONS")}}、{{HTTPMethod("DELETE")}} 或 {{HTTPMethod("TRACE")}}。
- [HTTP 状态码](/zh-CN/docs/Web/HTTP/Status)
  - : HTTP 状态码用来表示指定的 HTTP 请求是否已成功完成。响应分为五类：信息响应、成功响应，重定向、客户端错误和服务器错误。
- [CSP 指令](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy)
  - : {{HTTPHeader("Content-Security-Policy")}} 响应标头字段允许网站管理员控制页面上哪些资源能够被用户代理程序加载。除了少数例外，此策略主要涉及指定服务器来源和脚本终端。

## 工具与资源

有助于了解和调试 HTTP 的工具和资源。

- [Firefox 开发者工具](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [网络监视器](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [Mozilla Observatory](https://observatory.mozilla.org/)
  - : 一个旨在帮助开发人员，系统管理员和安全专业人员安全地配置其站点的项目。
- [RedBot](https://redbot.org/)
  - : 用于检查与缓存相关的 HTTP 标头的工具。
- [浏览器的工作原理（2011）](https://web.dev/howbrowserswork/)
  - : 一篇非常全面的关于浏览器内部实现与通过 HTTP 协议的请求流的文章。可以说是所有 Web 开发者的必读内容。
