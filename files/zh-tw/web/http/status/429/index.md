---
title: 429 Too Many Requests
slug: Web/HTTP/Status/429
l10n:
  sourceCommit: 3c29ffa78c551ea6a61bbb795a5f97a66c6868c0
---

{{HTTPSidebar}}

HTTP **`429 Too Many Requests`** 回應狀態碼表示用戶在一定時間內發送了太多請求（「速率限制」）。

可能會在此回應中包含一個 {{HTTPHeader("Retry-After")}} 標頭，指示要等待多長時間才能發送新的請求。

## 狀態

```http
429 Too Many Requests
```

## 範例

```http
HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600
```

## 規範

{{Specifications}}

## 參見

- {{HTTPHeader("Retry-After")}}
- Python 解決方案：[如何避免 HTTP 錯誤 429 python](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
