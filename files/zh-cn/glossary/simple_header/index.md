---
title: 简单头部
slug: Glossary/Simple_header
original_slug: Glossary/简单头部
---

以下的 [HTTP headers](/zh-CN/docs/Web/HTTP/Headers)都可以被认为是简单头部：

- {{HTTPHeader("Accept")}},
- {{HTTPHeader("Accept-Language")}},
- {{HTTPHeader("Content-Language")}},
- {{HTTPHeader("Content-Type")}}并且值是 `application/x-www-form-urlencoded`, `multipart/form-data`, 或者 `text/plain之一的（忽略参数）`.

或者以下客户端头部之一的也可以被认为是简单头部：

- {{HTTPHeader("DPR")}}
- {{HTTPHeader("Downlink")}}
- {{HTTPHeader("Save-Data")}}
- {{HTTPHeader("Viewport-Width")}}
- {{HTTPHeader("Width")}}

当只包含简单头部时，一个请求则被视为简单请求并且在[CORS](/zh-CN/docs/Glossary/CORS)中不需要发送{{glossary("preflight request")}}。

## Learn more

- [HTTP 头部](/zh-CN/docs/Web/HTTP/Headers)
- {{Glossary("Simple response header")}}
- {{Glossary("Forbidden header name")}}
- {{Glossary("Request header")}}
