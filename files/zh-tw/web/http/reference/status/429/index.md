---
title: 429 Too Many Requests
slug: Web/HTTP/Reference/Status/429
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`429 Too Many Requests`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示用戶端在一定時間內發送了太多請求。要求用戶端降低請求頻率的這種機制通常被稱為「{{glossary("rate limit", "速率限制")}}」。

此回應可能包含一個 {{HTTPHeader("Retry-After")}} 標頭，用以指示用戶端應等待多長時間後才能重新發送請求。

速率限制的實作方式各有不同；限制可能是針對整個伺服器或特定資源。通常，速率限制是根據用戶端的 IP 設定，但若請求經過驗證或包含 {{Glossary("cookie")}}，也可能針對特定用戶或授權應用程式實施限制。

## 狀態

```http
429 Too Many Requests
```

## 範例

### 包含 Retry-After 標頭的回應

以下請求由配置錯誤的用戶端在迴圈中不斷發送：

```http
GET /reports/mdn HTTP/1.1
Host: example.com
```

在此例中，當用戶端每分鐘的請求數量超過設定的閾值時，將啟動全伺服器的速率限制。伺服器返回 429 回應，並附帶一個 {{HTTPHeader("Retry-After")}} 標頭，指示該用戶端在 60 分鐘後即可再次發送請求：

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
  <p>你的請求過於頻繁！請稍後再試。</p>
</body>
</html>
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Retry-After")}}
- Python 解決方案：[如何避免 HTTP 錯誤 429 python](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
