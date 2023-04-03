---
title: 请求标头（Request header）
slug: Glossary/Request_header
---

**请求标头**是一种 {{glossary("header", "HTTP 标头")}}，它可在 HTTP 请求中使用，其提供有关请求上下文的信息，以便服务器可以定制响应。例如，{{HTTPHeader("Accept", "Accept-*")}} 标头表示响应允许的条件和首选的格式。其他标头可以提供身份验证凭据（例如 {{HTTPHeader("Authorization")}}），控制缓存，或者获取有关用户代理（user agent）或 referrer 的信息等。

根据规范，并非所有可以出现在请求中的标头都称为请求标头。例如，{{HTTPHeader("Content-Type")}} 标头被成为{{glossary("representation header", "表示标头")}}。

此外，[跨源资源共享（CORS）](/zh-CN/docs/Glossary/CORS)定义了一个叫做 {{glossary('simple header', 'simple header')}} 的集合，它是请求头集合的一个子集。如果某次请求是只包含 {{glossary('simple header', '简单标头')}} 的话，则被认为是简单请求，不会触发{{glossary("preflight request", "预检")}}请求。

以下展示了 HTTP 消息在 {{HTTPMethod("GET")}} 请求之后的请求标头：

```http
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```

## 参见

- [所有 HTTP 标头列表](/zh-CN/docs/Web/HTTP/Headers)
- [RFC 9110, section 6.3: Header Fields](https://httpwg.org/specs/rfc9110.html#header.fields)
