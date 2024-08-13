---
title: 503 Service Unavailable
slug: Web/HTTP/Status/503
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

超文本傳輸協定（HTTP）**`503 Service Unavailable`** 伺服器錯誤回應代碼表示伺服器尚未準備好處理請求。

常見原因是伺服器正在進行維護或超載。此回應應用於臨時情況，如果可能，{{HTTPHeader("Retry-After")}} HTTP 標頭應包含恢復服務的預估時間。

> [!NOTE]
> 伴隨此回應，應發送一個友好的頁面來解釋問題。

與此回應一起發送的與緩存相關的標頭應該被處理，因為 503 狀態通常是一個臨時條件，通常不應該將回應緩存。

## 狀態

```http
503 Service Unavailable
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("Retry-After")}}
- [HTTP 狀態碼定義](https://httpwg.org/specs/rfc9110.html#status.503)
