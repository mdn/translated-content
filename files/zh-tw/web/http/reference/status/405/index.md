---
title: 405 Method Not Allowed
slug: Web/HTTP/Reference/Status/405
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

HTTP **`405 Method Not Allowed`** [用戶端錯誤回應](/en-US/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示伺服器了解請求方法，但目標資源不支援此方法。The server **must** generate an {{HTTPHeader("Allow")}} header in a 405 response with a list of methods that the target resource currently supports.

+Improper server-side permissions set on files or directories may cause a 405  response when the request would otherwise be expected to succeed.

## 狀態

```http
405 Method Not Allowed
```

## Examples

### TRACE method not allowed

Server owners often disallow the use of the `TRACE` method due to security concerns.The following example shows a typical response where a server doesn't allow the use of `TRACE`:

```http
TRACE / HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 405 Method Not Allowed
Content-Length: 0
Date: Fri, 28 Jun 2024 14:30:31 GMT
Server: ECLF (nyd/D179)
Allow: GET, POST, HEAD
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/en-US/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Allow")}}
- {{HTTPStatus("501", "501 Not Implemented")}}、{{HTTPStatus("510", "510 Not Extended")}}
- [HTTP 狀態碼定義](https://httpwg.org/specs/rfc9110.html#status.405)
- [如何修復 405 Method Not Allowed](https://kinsta.com/blog/405-method-not-allowed-error/)
- [排除 HTTP 405](https://learn.microsoft.com/zh-tw/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)