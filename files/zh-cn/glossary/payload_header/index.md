---
title: 有效负载标头
slug: Glossary/Payload_header
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

**有效负载标头**是一种 {{Glossary("HTTP_header", "HTTP 标头")}}，从一个或多个消息中描述与安全传输和原始资源{{Glossary("Representation header", "表示")}}重建的相关的有效负载信息。这包括了如消息有效负载的长度、（对于多部分的消息而言）此有效负载中承载了资源的哪部分、应用于传输的任意的编码、消息完整性检查等。

有效负载标头可能存在于 HTTP 请求和响应消息中（即在任何携带有效载荷数据的消息中）。

有效负载标头包括：{{HTTPHeader("Content-Length")}}、{{HTTPHeader("Content-Range")}}、{{HTTPHeader("Trailer")}} 和 {{HTTPHeader("Transfer-Encoding")}}。

## 参见

- [所有 HTTP 标头的列表](/zh-CN/docs/Web/HTTP/Reference/Headers)
  - {{HTTPHeader("Content-Length")}}
  - {{HTTPHeader("Content-Range")}}
  - {{HTTPHeader("Trailer")}}
  - {{HTTPHeader("Transfer-Encoding")}}
  - {{Glossary("Representation header", "表示标头")}}

- [RFC 7231，3.3 节：负载语义](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
