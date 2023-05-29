---
title: 禁止修改的标头
slug: Glossary/Forbidden_header_name
---

**禁止修改的标头**指的是不能在代码中通过编程的方式进行修改的 [HTTP 标头](/zh-CN/docs/Web/HTTP/Headers)，具体指 HTTP **请求**标头（和{{Glossary("Forbidden response header name", "禁止修改的响应标头")}}形成对比）。

因为用户代理保留对此类标头的完全控制，所以它们被禁止修改。保留以 `Sec-` 开头的名称，以用于在使用 [fetch 算法](https://fetch.spec.whatwg.org/#concept-fetch)的请求中创建安全的新标头，这些 {{glossary("API")}} 授予开发人员对标头的控制权，例如：{{domxref("XMLHttpRequest")}}。

禁止修改的标头包括以 `Proxy-` 和 `Sec-` 开头的标头，以及下面列出的标头：

- {{HTTPHeader("Accept-Charset")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Cookie")}}
- {{HTTPHeader("Date")}}
- {{HTTPHeader("DNT")}}
- {{HTTPHeader("Expect")}}
- {{HTTPHeader("Permissions-Policy")}}
- {{HTTPHeader("Host")}}
- {{HTTPHeader("Keep-Alive")}}
- {{HTTPHeader("Origin")}}
- `Proxy-`
- `Sec-`
- {{HTTPHeader("Referer")}}
- {{HTTPHeader("TE")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Upgrade")}}
- {{HTTPHeader("Via")}}

> **备注：** [根据规范](https://fetch.spec.whatwg.org/#terminology-headers)中的禁止修改的标头列表（Firefox 43 中实现了它），{{HTTPHeader("User-Agent")}} 标头不再被禁止，现在可以设置在 Fetch 的 [Headers](/zh-CN/docs/Web/API/Headers) 对象中，或者通过 `XMLHttpRequest` 的 [setRequestHeader()](/zh-CN/docs/Web/API/XMLHttpRequest/setRequestHeader) 方法设置。但是，Chrome 会不做提示地从 Fetch 请求中丢弃这个标头（请参阅 [Chromium bug 571722](https://bugs.chromium.org/p/chromium/issues/detail?id=571722)）。

## 参见

{{Glossary("Forbidden response header name", "禁止修改的响应标头")}}（术语表）
