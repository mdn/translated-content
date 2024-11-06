---
title: 响应标头
slug: Glossary/Response_header
l10n:
  sourceCommit: 659d8ae39e05a7a9f260f1194bb325438cea5d34
---

{{GlossarySidebar}}

**响应标头**是一种与响应消息主体无关的 {{glossary("HTTP header","HTTP 标头")}}，可以用于 HTTP 响应。像 {{HTTPHeader("Age")}}、{{HTTPHeader("Location")}} 或 {{HTTPHeader("Server")}} 都属于响应标头，被用于提供更详细的响应上下文。

并非所有出现在响应中的标头都根据规范将其归类为*响应标头*。例如，{{HTTPHeader("Content-Type")}} 标头就是一个{{glossary("representation header", "表示标头")}}，在应用 {{HTTPHeader("Content-Encoding")}} 表示标头中的编码前指示响应信息正文中的原始数据类型。然而，“会话式”的所有标头通常在响应消息中称为响应标头。

以下展示了 {{HTTPMethod("GET")}} 请求后的一些响应和表示标头。

```http
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
Etag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: mykey=myvalue; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY
```

## 参见

- [所有 HTTP 标头列表](/zh-CN/docs/Web/HTTP/Headers)
- [术语](/zh-CN/docs/Glossary)

  - {{Glossary("Representation header", "表示标头")}}
  - {{Glossary("HTTP header", "HTTP 标头")}}
  - {{Glossary("Request header", "请求标头")}}
