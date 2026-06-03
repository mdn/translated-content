---
title: 表示标头
slug: Glossary/Representation_header
l10n:
  sourceCommit: a8f881645d776d1303a0a25bd884f95e1b2805e1
---

**表示标头**（representation header，或“表示元数据”）是一种用于描述 HTTP 消息主体中发送资源的特定的*表示*形式的 {{glossary("HTTP_header", "HTTP 标头")}}。

例如，特定消息中的内容可能被编码以进行传输，整个资源可能被格式化为特定的媒体类型（例如 XML、JSON、HTML 或 Markdown），被本地化为特定的书面语言或者地理区域，或者通过特定算法被压缩。表示标头允许提取和理解底层数据。底层资源在每种情况下的语义都是一样的，但是它的表示形式是不同的。

虽然表示是资源的不同形式，但表示本身也可以以各种形式传输：HTTP 消息帧（例如，HTTP/1.1 的 {{HTTPHeader("Transfer-Encoding")}}）、从*选定的表示*派生的特定的八位字节流（例如，{{HTTPHeader("Content-Range")}}）。

客户端指定它们希望在[内容协商](/zh-CN/docs/Web/HTTP/Guides/Content_negotiation)期间发送的格式（使用 `Accept-*` 标头），并且表示标头将实际收到的*选定的表示形式*传达给客户端。

表示标头可能同时出现在 HTTP 请求和响应消息中。如果它们是作为 `HEAD` 请求的响应发送的，它们会描述在使用 `GET` 请求资源时，*将*选择的主体内容表示。

表示标头包括：

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Content-Language")}}

- 用在[条件请求](/zh-CN/docs/Web/HTTP/Guides/Conditional_requests)中的验证器，例如：
  - {{HTTPHeader("Last-Modified")}}
  - {{HTTPHeader("ETag")}}

表示标头与{{Glossary("Content header", "内容标头")}}并不互斥。

## 参见

- 相关属于：
  - {{Glossary("Content header", "内容标头")}}
- [RFC 9110，3.2 节：表示](https://httpwg.org/specs/rfc9110.html#representations)
- [所有 HTTP 标头列表](/zh-CN/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Repr-Digest")}}、{{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("Content-Digest")}}、{{HTTPHeader("Want-Content-Digest")}}
