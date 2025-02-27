---
title: Fetch 元数据请求标头
slug: Glossary/Fetch_metadata_request_header
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{GlossarySidebar}}

**fetch 元数据请求标头**是一个 {{Glossary("Request header", "HTTP 请求标头")}}，其提供有关来自请求上下文的额外信息。这允许服务器根据请求的来源和将要使用的方式，决定是否允许该请求。

有了这些信息，服务器可以实现{{Glossary("resource isolation policy", "资源隔离策略")}}，允许额外的站点仅请求用于共享的资源并且适当的使用资源。这些方法可以帮助缓解常见的跨站点网络漏洞，例如 {{Glossary("CSRF")}}、跨站点脚本攻击（“XSSI”）、定时攻击和跨源消息攻击。

这些标头有 `Sec-` 前缀，因此有{{Glossary("Forbidden header name", "禁止修改的标头")}}。因此，它们不能通过 JavaScript 进行修改。

fetch 元数据请求标头：

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

以下请求标头不是*严格意义上*的“fetch 元数据请求标头”，因为它们不在同一规范中，但同样提供有关资源使用方式的上下文信息。服务器可能会使用它们来修改其缓存行为，或返回的信息：

- {{HTTPHeader("Sec-Purpose")}} {{Experimental_Inline}}
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}

## 参见

- [使用 Fetch 元数据保护你的资源免受网络攻击](https://web.developers.google.cn/articles/fetch-metadata)（web.developers.google.cn）
- [Fetch 元数据请求标头的 playground](https://secmetadata.appspot.com/)（secmetadata.appspot.com）
- [所有 HTTP 标头列表](/zh-CN/docs/Web/HTTP/Headers)
- [所有 HTTP 标头列表 > Fetch 元数据请求标头](/zh-CN/docs/Web/HTTP/Headers#fetch_元数据请求标头)
- [术语](/zh-CN/docs/Glossary)

  - {{Glossary("Representation header", "表示标头")}}
  - {{Glossary("HTTP_header","HTTP 标头")}}
  - {{Glossary("Response header", "响应标头")}}
  - {{Glossary("Request header", "请求标头")}}
