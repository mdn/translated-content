---
title: 408 Request Timeout
slug: Web/HTTP/Status/408
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`408 Request Timeout`** 回應狀態碼表示伺服器希望關閉這個未使用的連接。它在一些伺服器上發送，_即使用戶端沒有任何先前的請求也會這樣_。

在回應中伺服器應該在 {{HTTPHeader("Connection")}} 標頭欄位中發送「close」，因為 `408` 表示伺服器決定關閉連接，而不是繼續等待。

自從一些瀏覽器（如 Chrome、Firefox 27+ 和 IE9）使用 HTTP 預連接機制來加速瀏覽以來，這個回應被更多地使用。

> [!NOTE]
> 一些伺服器僅關閉連接而不發送此訊息。

## 狀態

```http
408 Request Timeout
```

## 規範

{{Specifications}}

## 參見

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
