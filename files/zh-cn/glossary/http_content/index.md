---
title: HTTP 内容
slug: Glossary/HTTP_Content
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{GlossarySidebar}}

在 HTTP 消息中，**内容**指的是消息体（紧跟在标头部分之后的）中的“信息”（位于 HTTP/1.1 分块传输编码的消息帧之后）。在 HTTP/1.1 中这也可以指的是“负载”，但是消息“内容”与 HTTP/2 和 HTTP/3 中的帧负载有所区别，因为单个帧中的数据可以是标头数据、主体数据或其他控制信息。

HTTP 请求和响应中的消息内容的目的取决于请求方法和响应状态码。例如，在 {{HTTPMethod("PUT")}} 请求中，内容表示的是资源的期望状态，但在 {{HTTPMethod("POST")}} 请求中，内容则是要处理的信息。对于 {{HTTPMethod("GET")}} 请求的 {{HTTPStatus("200", "200 OK")}} 响应显示资源的当前状态，而错误响应描述了错误。

有些响应，例如对 {{HTTPMethod("HEAD")}} 请求的响应或 {{HTTPStatus("204", "204 No Content")}} 和 {{HTTPStatus("204", "304 Not Modified")}} 状态码的响应，根本不包含内容。

在下面的 HTTP/1.1 响应中，消息体包含内容 `Mozilla Developer Network`：

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Mozilla Developer Network
```

在下一个 HTTP/1.1 响应中，传输编码将数据编码为块。最终的内容仍然是 `Mozilla Developer Network`，但消息体包含不同的消息数据以分隔块：

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n
```

## 参见

- {{HTTPHeader("Content-Location")}}
- {{HTTPStatus("413", "413 Content Too Large")}}
- {{Glossary("Content header", "内容标头")}}
- [RFC 9110，6.4 节：内容](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4)（取代过时的 [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3) 负载语义）
  - [与 RFC 7231 的不同](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
