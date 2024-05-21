---
title: 202 Accepted
slug: Web/HTTP/Status/202
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`202 Accepted`** 成功回應碼表示請求已被接受進行處理，但處理尚未完成；實際上，處理可能尚未開始。請求可能最終會被執行，也可能在實際進行處理時被拒絕。

202 是不具承諾性的，這意味著 HTTP 無法後來發送一個異步回應來指示處理請求的結果。它用於另一個處理請求的流程或伺服器，或用於批處理。

## 狀態

```http
202 Accepted
```

## 規範

{{Specifications}}

## 參見

- {{HTTPHeader("Accept")}}
