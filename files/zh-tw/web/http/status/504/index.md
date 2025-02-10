---
title: 504 Gateway Timeout
slug: Web/HTTP/Status/504
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`504 Gateway Timeout`** [伺服器錯誤回應](/en-US/docs/Web/HTTP/Status#伺服器錯誤回應)狀態碼表示在充當閘道器或{{Glossary("Proxy_server", "代理")}}未能及時從上游伺服器獲得回應，以完成請求。This is similar to a {{HTTPStatus("502", "502 Bad Gateway")}}, except that in a `504` status, the proxy or gateway did not receive any HTTP response from the origin within a certain time.

There are many causes of `504` errors, and fixing such problems likely requires investigation and debugging by server administrators, or the site may work again at a later time.Exceptions are client networking errors, particularly if the service works for other visitors, and if clients use VPNs or other custom networking setups.In such cases, clients should check network settings, firewall setup, proxy settings, DNS configuration, etc.

## 狀態

```http
504 Gateway Timeout
```

## Examples

### 504 gateway timeout response

The following request tries to fetch a webpage, but receives a `504` response in return.
The response body contains a page describing the server state with a link to a support page for visitors.

```http
GET /highlights HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 504 Gateway Timeout
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="en">
<head>
<title>504 Gateway Timeout</title>
</head>
<body>
<h1>Gateway timeout</h1>
<p>The server did not respond in time. Please try again later.</p>
<p>If this problem persists, please <a href="https://example.com/support">contact support</a>.</p>
</body>
</html>
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("502", "502 Bad Gateway")}}
