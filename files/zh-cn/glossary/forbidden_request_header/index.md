---
title: 禁止修改的请求标头
slug: Glossary/Forbidden_request_header
l10n:
  sourceCommit: 56cbe48e4426172461d9297523b68716922690e5
---

**禁止修改的请求标头**指的是不能在代码中通过编程的方式进行修改的 [HTTP 标头](/zh-CN/docs/Web/HTTP/Reference/Headers)，具体地，这是 HTTP **请求**标头名称（和{{Glossary("Forbidden response header name", "禁止修改的响应标头")}}形成对比）。

因为用户代理保留对此类标头的完全控制，所以它们被禁止修改。例如，{{HTTPHeader("Date")}} 标头是禁止修改的标头，因此代码无法设置消息的 `Date` 字段：

```js example-bad
fetch("https://httpbin.org/get", {
  headers: {
    Date: new Date().toUTCString(),
  },
});
```

保留以 `Sec-` 开头的名称，以用于创建新的，不会受到授予开发者控制标头权限的 API（如 {{domxref("Window/fetch", "fetch()")}}）的影响的标头。禁止修改的标头包括以 `Proxy-` 和 `Sec-` 开头的标头，以及下面列出的标头：

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
- `Proxy-` 标头
- `Sec-` 标头
- {{HTTPHeader("Referer")}}
- {{HTTPHeader("TE")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Upgrade")}}
- {{HTTPHeader("Via")}}

> [!NOTE]
> 根据[规范](https://fetch.spec.whatwg.org/#terminology-headers)中的禁止修改的标头列表（Firefox 43 中实现了它），{{HTTPHeader("User-Agent")}} 标头不再被禁止，现在可以设置在 Fetch 的 [Headers](/zh-CN/docs/Web/API/Headers) 对象中，或者通过 `XMLHttpRequest` 的 [setRequestHeader()](/zh-CN/docs/Web/API/XMLHttpRequest/setRequestHeader) 方法设置。但是，Chrome 会静默地从 Fetch 请求中丢弃这个标头（请参阅 [Chromium bug 571722](https://bugs.chromium.org/p/chromium/issues/detail?id=571722)）。

> [!NOTE]
> 虽然[规范](https://fetch.spec.whatwg.org/#forbidden-request-header)中将 {{HTTPHeader("Referer")}} 标头列为禁止修改的标头，但是用户代理并没有完全对其进行控制，因此可以通过编程的方式修改此标头。例如，当使用 [`fetch()`](/zh-CN/docs/Web/API/Window/fetch) 时，可以通过 [`referrer` 选项](/zh-CN/docs/Web/API/RequestInit#referrer)对 {{HTTPHeader("Referer")}} 标头进行编程修改。

## 参见

- 相关术语：
  - {{Glossary("Forbidden response header name", "禁止修改的响应标头")}}
