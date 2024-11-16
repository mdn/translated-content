---
title: 内容标头
slug: Glossary/Content_header
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{GlossarySidebar}}

**内容标头**是一组用于描述 HTTP 消息主体的内容（在移除主体中的任何消息组帧后）的 [HTTP 标头](/zh-CN/docs/Web/HTTP/Headers)。它们具体描述了特定消息在*传输*时所传递的{{Glossary("HTTP Content", "消息内容")}}的属性，例如内容的长度、传输编码、数据中携带的资源的哪一部分（对于多部分消息），以及消息完整性检查。这与描述资源的编码、媒体类型、语言和其他特性的{{Glossary("Representation header", "表示标头")}}不同，后者允许解释底层数据。

在 {{RFC("7231")}} 中，这些标头被定义为“有效负载标头”（现在则被称为“内容标头”），因为 HTTP/2 和 HTTP/3 帧有效负载中包含的数据可能是标头数据、主体数据或其他控制信息。后续的 HTTP 规范没有提到“内容标头”或扩展相关标头的列表，但语义仍然保持不变，因此这种分类标头的方式仍然有用。

> [!NOTE]
> 内容标头与{{Glossary("Representation header", "表示标头")}}之间存在一些重叠。

内容标头可能出现在 HTTP 请求和响应消息中，包括：

- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}

## 参见

- [HTTP 标头](/zh-CN/docs/Web/HTTP/Headers)
- 相关术语：
  - {{Glossary("Representation header", "表示标头")}}
  - {{Glossary("HTTP Content", "HTTP 内容")}}
- [RFC 9110，6.4.1 节：内容语义](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4.1)，特别地，[附录 B.3.：从 RFC 7231 以来的变化](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
- [RFC 7231，3.3 节：负载语义](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
