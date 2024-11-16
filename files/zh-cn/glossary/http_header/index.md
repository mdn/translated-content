---
title: HTTP 标头
slug: Glossary/HTTP_header
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**HTTP 标头**是用于 HTTP 请求或响应的字段，它传递关于请求或者响应的额外上下文和元数据。例如，请求消息可以使用标头表明它首选的媒体格式，而响应可以使用标头表明返回主体的媒体格式。标头是不区分大小写，开始于行首，后面紧跟着一个 `':'` 和与之相关的值。字段值在一个换行符（CRLF）前或者整个消息的末尾结束。

HTTP 和 Fetch 规范涉及许多标头类别，包括：

- {{Glossary("Request header", "请求标头")}}：该标头包含要获取的资源或者客户端自身的更多信息。
- {{Glossary("Response header", "响应标头")}}：该标头包含有关响应的额外信息，例如它的位置或者关于服务器自身的信息（名字、版本...）。
- {{Glossary("Representation header", "表示标头")}}：该标头包含消息主体中资源的元数据（例如，编码、媒体类型等）。
- {{Glossary("Fetch metadata request header", "Fetch 元数据请求标头")}}：该标头关于消息主体中资源等元数据（例如，编码、媒体类型等）。

带有一个标头的基本请求：

```http
GET /example.html HTTP/1.1
Host: example.com
```

重定向请求中必须包含的标头（{{HTTPHeader("Location")}}）：

```http
302 Found
Location: /NewPage.html
```

一些典型的标头集合：

```http
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

> [!NOTE]
> 规范的旧版本还提及了：
>
> - {{Glossary("General header", "通用标头")}}：该标头同时适用于请求和响应，但是与在主体中传输的数据无关。
> - {{Glossary("Entity header", "实体标头")}}: 该标头含有与消息主体相关的附加信息，比如长度或者 MIME 类型（这是现在被称为表示（Representation）元数据标头的超集）。

## 参见

- [HTTP 标头列表](/zh-CN/docs/Web/HTTP/Headers)
- HTTP 规范中[标头](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2)的语法
- [术语](/zh-CN/docs/Glossary)

  - {{Glossary("HTTP header", "HTTP 标头")}}
  - {{Glossary("Request header", "请求标头")}}
  - {{Glossary("Response header", "响应标头")}}
  - {{Glossary("Representation header", "表示标头")}}
  - {{Glossary("Fetch metadata request header", "Fetch 元数据请求标头")}}
  - {{Glossary("Forbidden header name", "禁止修改的标头")}}
  - {{Glossary("Forbidden response header name", "禁止修改的响应标头")}}
  - {{Glossary("CORS-safelisted request header", "CORS 安全列出的请求标头的名称")}}
  - {{Glossary("CORS-safelisted response header", "CORS 安全列出的响应标头的名称")}}
