---
title: 表示标头（Representation header）
slug: Glossary/Representation_header
---

**表示标头**（representation header）是一种 {{glossary("HTTP_header", "HTTP 标头")}}，用于描述 HTTP 消息主体中发送资源的特定的*表示*形式。

所谓表示（representation）就是特定的资源不同的表示形式。例如，相同的数据，其可能被格式化为例如 XML 或 JSON 等特定媒体类别的格式，被本地化为特定的书面语言或者地理区域，或者通过压缩或者其他方式编码以进行传输。底层资源在每种情况下都是一样的，但是它的表示形式是不同的。

客户端指定它们希望在[内容协商](/zh-CN/docs/Web/HTTP/Content_negotiation)期间发送的格式（使用 `Accept-*` 标头），并且表示标头将实际收到的*选定的表示形式*传达给客户端。

表示标头可能同时出现在 HTTP 请求和响应消息中。如果它们是作为 `HEAD` 请求的响应发送的，它们会描述如果实际请求资源时，*将*选择的主体内容。

表示标头包括：{{HTTPHeader("Content-Type")}}、{{HTTPHeader("Content-Encoding")}}、{{HTTPHeader("Content-Language")}} 和 {{HTTPHeader("Content-Location")}}。

## 参见

- [RFC 9110, section 3.2: Representations](https://httpwg.org/specs/rfc9110.html#representations)
- [所有 HTTP 标头列表](/zh-CN/docs/Web/HTTP/Headers)
- {{Glossary("Payload header", "有效负荷标头（Payload header）")}}
- {{glossary("Entity header", "实体标头（Entity header）")}}
- {{HTTPHeader("Digest")}}/ {{HTTPHeader("Want-Digest")}}
