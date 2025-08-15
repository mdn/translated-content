---
title: 408 Request Timeout
slug: Web/HTTP/Reference/Status/408
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

HTTP **`408 Request Timeout`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示伺服器希望關閉這個未使用的連接。408 在一些伺服器上發送，_即使用戶端沒有任何先前的請求也會這樣_。

在回應中伺服器應該發送 {{HTTPHeader("Connection", "Connection: close")}} 標頭欄位，因為 `408` 表示伺服器決定關閉連接，而不是繼續等待。

自從一些瀏覽器（如 Chrome、Firefox）使用 HTTP 預連接機制來加速瀏覽以來，這個回應被更多地使用。

> [!NOTE]
> 一些伺服器將關閉連接而不發送此訊息。

## 狀態

```http
408 Request Timeout
```

## 範例

### 表單提交的超時

以下範例顯示了當 [`<input type="file">`](/zh-TW/docs/Web/HTML/Reference/Elements/input/file) 元素使用圖片並且表單以 `method="post"` 提交時，用戶端可能發送的內容：

```http
POST /upload HTTP/1.1
Host: example.com
Content-Type: multipart/form-data; boundary=----Boundary1234
Content-Length: 4012345

------Boundary1234
Content-Disposition: form-data; name="file"; filename="myImage.jpg"
Content-Type: image/jpeg

\xFF\xD8\xFF\xE0\x00...（二進位資料）
------Boundary1234--
```

如果由於網路問題或延遲導致數據未能完全接收，伺服器可能會超時連接。用戶端可以重試請求，並且會使用新的連接：

```http
HTTP/1.1 408 Request Timeout
Content-Type: text/html

<html>
<head>
  <title>408 Request Timeout</title>
</head>
<body>
  <h1>408 Request Timeout</h1>
  <p>無法及時處理請求。請重新嘗試。</p>
</body>
</html>
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
