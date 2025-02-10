---
title: 505 HTTP Version Not Supported
slug: Web/HTTP/Status/505
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`505 HTTP Version Not Supported`** [伺服器錯誤回應](/zh-TW/docs/Web/HTTP/Status#伺服器錯誤回應)狀態碼表示伺服器不支援請求中使用的 HTTP 版本。

It's common to see this error when a request line is improperly formed such as `GET /path to resource HTTP/1.1` or with `\n` terminating the request line instead of `\r\n`. For example, intermediaries such as load balancers may not handle request lines of a forwarded request as illustrated in the example below.

## 狀態

```http
505 HTTP Version Not Supported
```

## Examples

### A 505 due to malformed request-line

In the following example, a client requests `example.com/dog%20trainers`, but due to incorrect load balancer configuration, the {{Glossary("Percent-encoding", "percent encoding")}} in the URL is not handled properly.
In this case, the origin server sees `trainers` instead of the HTTP version, and a `505` response is returned instead.
A request identifier is contained in the response body for illustration of a way that may help server administrators narrow down the root cause of the problem:

```http
GET /dog trainers HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 505 HTTP Version Not Supported
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="en">
<head>
<title>505 HTTP Version Not Supported</title>
</head>
<body>
<h1>505 HTTP Version Not Supported</h1>
<p>If this problem persists, please <a href="https://example.com/support">contact support</a>.</p>
<p>Server logs contain details of this error with request ID: ABC-123.</p>
</body>
</html>
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Upgrade")}} 標頭
