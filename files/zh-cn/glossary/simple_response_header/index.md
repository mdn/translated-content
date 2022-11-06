---
title: Simple response header
slug: Glossary/Simple_response_header
---

一个简单的响应头（或 CORS 安全列表的响应头）是一个 [HTTP 头](/zh-CN/docs/Web/HTTP/Headers)，它是以下之一：

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

These headers will not be filtered when the response is filtered by CORS, they are considered as _safe_ (as the headers listed in {{HTTPHeader("Access-Control-Expose-Headers")}}.

## Examples

### Extending the safelist

You can extend the list of CORS-safelisted response headers by using the {{HTTPHeader("Access-Control-Expose-Headers")}} header:

```
Access-Control-Expose-Headers: X-Custom-Header, Content-Length
```

## Learn more

- [HTTP](/zh-CN/docs/Web/HTTP)
- [HTTP headers](/zh-CN/docs/Web/HTTP/Headers)
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{Glossary("CORS")}}
- {{Glossary("Simple header")}}
- {{Glossary("Forbidden header name")}}
- {{Glossary("Request header")}}
