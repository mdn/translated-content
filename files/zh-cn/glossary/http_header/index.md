---
title: HTTP header（HTTP 首部）
slug: Glossary/HTTP_header
original_slug: Glossary/Header
---

**HTTP header**（HTTP 首部，HTTP 头）表示在 HTTP 请求或响应中的用来传递附加信息的字段，修改所传递的消息（或者消息主体）的语义，或者使其更加精确。消息首部不区分大小写，开始于一行的开头，后面紧跟着一个 `':'` 和与之相关的值。字段值在一个换行符（CRLF）前或者整个消息的末尾结束。

按照惯例，可以把消息首部分为几类，尽管这种划分不存在于任何一份规范文档中：

- {{Glossary("General header")}}：可以应用于请求和响应中，但是与在消息主体中的数据无关。
- {{Glossary("Request header")}}：含有与所要获取的资源或者客户端自身相关的附加信息。
- {{Glossary("Response header")}}：含有与响应相关的附加信息，比如它的位置或者与服务器相关的信息（名称、版本号等）。
- {{Glossary("Entity header")}}: 含有与消息主体相关的附加信息，比如长度或者 MIME 类型。

一个仅包含一个首部的请求：

```
GET /example.http HTTP/1.1
Host: example.com
```

重定向请求中必须包含 ({{HTTPHeader("Location")}}) 首部：

```
302 Found
Location: /NewPage.html
```

一些典型的首部：

```
304 Not Modified
Access-Control-Allow-Origin: *
Age: 2318192
Cache-Control: public, max-age=315360000
Connection: keep-alive
Date: Mon, 18 Jul 2016 16:06:00 GMT
Server: Apache
Vary: Accept-Encoding
Via: 1.1 3dc30c7222755f86e824b93feb8b5b8c.cloudfront.net (CloudFront)
X-Amz-Cf-Id: TOl0FEm6uI4fgLdrKJx0Vao5hpkKGZULYN2TWD2gAWLtr7vlNjTvZw==
X-Backend-Server: developer6.webapp.scl3.mozilla.com
X-Cache: Hit from cloudfront
X-Cache-Info: cached
```

## 参见

- 规范

  - Syntax of [headers](https://tools.ietf.org/html/rfc7230#section-3.2) in the HTTP specification.

- 技术参考

  - [HTTP 首部列表](/zh-CN/docs/Web/HTTP/Headers)

- [术语](/zh-CN/docs/Glossary)

  - {{Glossary("HTTP header")}}
  - {{Glossary("General header")}}
  - {{Glossary("Request header")}}
  - {{Glossary("Response header")}}
  - {{Glossary("Entity header")}}
  - {{Glossary("Forbidden header name")}}
  - {{Glossary("Forbidden response header name")}}
  - {{Glossary("CORS-safelisted request header")}}
  - {{Glossary("CORS-safelisted response header")}}
