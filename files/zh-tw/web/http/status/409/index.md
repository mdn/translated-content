---
title: 409 Conflict
slug: Web/HTTP/Status/409
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`409 Conflict`** 回應狀態碼表示請求與目標資源的當前狀態存在衝突。

衝突最有可能發生在對 {{HTTPMethod("PUT")}} 請求的回應中。例如在上傳比伺服器上現有檔案更舊的檔案時，可能會收到 409 回應，導致版本控制衝突。

## 狀態

```http
409 Conflict
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPMethod("PUT")}}
