---
title: 429 Too Many Requests
slug: Web/HTTP/Status/429
l10n:
  sourceCommit: 3c29ffa78c551ea6a61bbb795a5f97a66c6868c0
---

{{HTTPSidebar}}

HTTP **`429 Too Many Requests`** [用戶端錯誤回應](/en-US/docs/Web/HTTP/Status#用戶端錯誤回應)狀態碼表示用戶端在一定時間內發送了太多請求。This mechanism of asking the client to slow down the rate of requests is commonly called "{{glossary("rate limit", "rate limiting")}}".

可能會在此回應中包含一個 {{HTTPHeader("Retry-After")}} 標頭，指示用戶端應該要等待多長時間才能重新發送請求。

Implementations of rate limiting vary; restrictions may be server-wide or per resource. Typically, rate-limiting restrictions are based on a client's IP but can be specific to users or authorized applications if requests are authenticated or contain a {{Glossary("cookie")}}.

## 狀態

```http
429 Too Many Requests
```

## 範例

### Response containing Retry-After header

The following request is being sent repeatedly in a loop by a client that is misconfigured:

```http
GET /reports/mdn HTTP/1.1
Host: example.com
```

In this example, server-wide rate limiting is active when a client exceeds a set threshold of requests per minute.
A 429 response is returned with a {{HTTPHeader("Retry-After")}} header that indicates that requests will be allowed for this client again in 60 minutes:

```http
HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600

<html>
<head>
  <title>Too Many Requests</title>
</head>
<body>
  <h1>Too Many Requests</h1>
  <p>You're doing that too often! Try again later.</p>
</body>
</html>
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Retry-After")}}
- Python 解決方案：[如何避免 HTTP 錯誤 429 python](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
