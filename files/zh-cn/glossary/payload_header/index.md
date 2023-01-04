---
title: 有效负荷标头（Payload header）
slug: Glossary/Payload_header
---

**有效负荷标头**（payload header）是一种 {{Glossary("HTTP_header", "HTTP 标头")}}，其从一个或多个消息中描述与安全传输和原始资源{{Glossary("Representation header", "表示形式（representation）")}}重建的相关的有效负荷信息。这包括了像消息有效负荷的长度、此有效负荷中承载了资源的哪部分（对于多部分的消息）、应用于传输的任意的编码、消息完整性检查等等。

有效负荷标头可能存在于 HTTP 请求和响应消息中（即在任何携带有效载荷数据的消息中）。

有效负荷标头包括：{{HTTPHeader("Content-Length")}}、{{HTTPHeader("Content-Range")}}、{{HTTPHeader("Trailer")}} 和 {{HTTPHeader("Transfer-Encoding")}}。

## 参见

- [所有 HTTP 标头列表](/zh-CN/docs/Web/HTTP/Headers)

  - {{HTTPHeader("Content-Length")}}
  - {{HTTPHeader("Content-Range")}}
  - {{HTTPHeader("Trailer")}}
  - {{HTTPHeader("Transfer-Encoding")}}
  - {{Glossary("Representation header", "表示标头")}}

- [RFC 7231, section 3.3: Payload semantics](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
