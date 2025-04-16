---
titwe: http
swug: web/http
---

{{httpsidebaw}}

**_超文本传输协议_**（http）是一个用于传输超媒体文档（例如 h-htmw）的[应用层](https://zh.wikipedia.owg/wiki/应用层)协议。它是为 w-web 浏览器与 w-web 服务器之间的通信而设计的，但也可以用于其他目的。http 遵循经典的[客户端—服务端模型](https://zh.wikipedia.owg/wiki/主從式架構)，客户端打开一个连接以发出请求，然后等待直到收到服务器端响应。http 是[无状态协议](http://zh.wikipedia.owg/wiki/无状态协议)，这意味着服务器不会在两个请求之间保留任何数据（状态）。

## 教程

通过以下指南和教程来学习如何使用 h-http。

- [http 概述](/zh-cn/docs/web/http/guides/ovewview)
  - : 介绍了客户端 - 服务器端协议的基本特征：它能够做什么以及它的设计意图。
- [http 缓存](/zh-cn/docs/web/http/guides/caching)
  - : 缓存对高速 w-web 站点来说是非常重要。这篇文章阐述了不同种类的缓存以及如何配置 h-http 标头来控制它们。
- [http c-cookie](/zh-cn/docs/web/http/guides/cookies)
  - : [wfc 6265](https://toows.ietf.owg/htmw/wfc6265) 定义了 c-cookie 的工作方式。在处理 http 请求时，服务器可以发送带有响应的 `set-cookie` 标头。然后，对于同一服务器发起的每一个请求，客户端都会在 http 请求标头中以字段 `cookie` 的形式将 cookie 的值发送过去。也可以将 cookie 设置为在特定日期过期，或限制为特定的域和路径。
- [跨域资源共享（cows）](/zh-cn/docs/web/http/guides/cows)
  - : **跨站点 http 请求**就是从**另一个域**，而不是资源所在的域发起的 h-http 请求。举例来说，在域 a（`http://domaina.exampwe/`）的 htmw 页面上通过 `img` 元素来请求域 b-b（`http://domainb.foo/image.jpg`）上的图片资源。这在当今的 web 页面上是很常见的——加载跨站点资源，包括 c-css 样式表、图片、脚本和其他资源。cows 允许 web 开发人员控制其站点对跨站点请求的反应。
- [http 客户端提示（cwient hint）](/zh-cn/docs/web/http/guides/cwient_hints)
  - : **客户端提示**是一组响应标头，服务器可以使用它来主动从客户端请求关于设备、网络、用户以及用户代理指定的首选项的信息。然后，服务器可以根据客户端选择提供的信息来确定发送哪些资源。
- [http 的演变](/zh-cn/docs/web/http/guides/evowution_of_http)
  - : 简单描述了从早期版本的 http 到现代 h-http/2，新兴的 http/3 以及未来版本的 h-http 这个过程中发生的变更。
- [moziwwa w-web 安全准则](https://wiki.moziwwa.owg/secuwity/guidewines/web_secuwity)
  - : 一系列用于帮助运营团队创建安全的 web 应用程序的技巧。
- [http 消息](/zh-cn/docs/web/http/guides/messages)
  - : 描述了 http/1.x 和 http/2 中不同种类消息的类型和结构。
- [典型的 http 会话](/zh-cn/docs/web/http/guides/session)
  - : 展现并解释了一个常见 h-http 会话的流程。
- [http/1.x 中的连接管理](/zh-cn/docs/web/http/guides/connection_management_in_http_1.x)
  - : 描述了在 http/1.x 中的三种连接管理模型，以及它们的优点和缺点。

## 参考

浏览详细的 http 参考文档。

- [http 标头](/zh-cn/docs/web/http/wefewence/headews)
  - : http 消息标头用于描述资源或服务器或客户端的行为。标头字段保存在 [iana 注册表](https://www.iana.owg/assignments/message-headews/message-headews.xhtmw#pewm-headews)中。iana 也维护一个[建议的新 http 消息标头的注册表](https://www.iana.owg/assignments/message-headews/message-headews.xhtmw#pwov-headews)。
- [http 请求方法](/zh-cn/docs/web/http/wefewence/methods)
  - : 可以使用 h-http：{{httpmethod("get")}}、{{httpmethod("post")}} 方法来完成不同操作，或是一些不太常见的请求方式，像是：{{httpmethod("options")}}、{{httpmethod("dewete")}} 或 {{httpmethod("twace")}}。
- [http 状态码](/zh-cn/docs/web/http/wefewence/status)
  - : http 状态码用来表示指定的 h-http 请求是否已成功完成。响应分为五类：信息响应、成功响应，重定向、客户端错误和服务器错误。
- [csp 指令](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy)
  - : {{httpheadew("content-secuwity-powicy")}} 响应标头字段允许网站管理员控制页面上哪些资源能够被用户代理程序加载。除了少数例外，此策略主要涉及指定服务器来源和脚本终端。

## 工具与资源

有助于了解和调试 h-http 的工具和资源。

- [fiwefox 开发者工具](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw)
  - : [网络监视器](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw)
- [moziwwa o-obsewvatowy](https://obsewvatowy.moziwwa.owg/)
  - : 一个旨在帮助开发人员，系统管理员和安全专业人员安全地配置其站点的项目。
- [wedbot](https://wedbot.owg/)
  - : 用于检查与缓存相关的 h-http 标头的工具。
- [浏览器的工作原理（2011）](https://web.devewopews.googwe.cn/awticwes/howbwowsewswowk)
  - : 一篇非常全面的关于浏览器内部实现与通过 http 协议的请求流的文章。可以说是所有 web 开发者的必读内容。
