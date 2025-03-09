---
title: 408 Request Timeout
slug: Web/HTTP/Status/408
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`408 Request Timeout`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Status#用戶端錯誤回應)狀態碼表示伺服器希望關閉這個未使用的連接。408 在一些伺服器上發送，_即使用戶端沒有任何先前的請求也會這樣_。

在回應中伺服器應該發送 {{HTTPHeader("Connection", "Connection: close")}} 標頭欄位，因為 `408` 表示伺服器決定關閉連接，而不是繼續等待。

自從一些瀏覽器（如 Chrome、Firefox）使用 HTTP 預連接機制來加速瀏覽以來，這個回應被更多地使用。

> [!NOTE]
> 一些伺服器將關閉連接而不發送此訊息。

## 狀態

```http
408 Request Timeout
```

## Examples

### Timeout in form submission

The following example shows what a client may send when an [`<input type="file">`](/zh-TW/docs/Web/HTML/Element/input/file) element uses an image on form submission with `method="post"`:

```http
POST /upload HTTP/1.1
Host: example.com
Content-Type: multipart/form-data; boundary=----Boundary1234
Content-Length: 4012345

------Boundary1234
Content-Disposition: form-data; name="file"; filename="myImage.jpg"
Content-Type: image/jpeg

\xFF\xD8\xFF\xE0\x00...(binary data)
------Boundary1234--
```

If the data is not received in full due to network issues or latency, the server may timeout the connection.
Clients may repeat the request again, and a new connection will be used:

```http
HTTP/1.1 408 Request Timeout
Content-Type: text/html

<html>
<head>
  <title>408 Request Timeout</title>
</head>
<body>
  <h1>408 Request Timeout</h1>
  <p>Failed to process request in time. Please try again.</p>
</body>
</html>
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Status)
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
