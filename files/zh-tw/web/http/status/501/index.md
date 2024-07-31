---
title: 501 Not Implemented
slug: Web/HTTP/Status/501
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

超文本傳輸協定（HTTP）**`501 Not Implemented`** 伺服器錯誤回應代碼表示**伺服器不支援完成請求所需的功能**。

這個狀態也可以發送 {{HTTPHeader("Retry-After")}} 標頭，告訴請求者何時檢查是否到那時支援該功能。

當伺服器不識別請求方法且無法支援任何資源時，`501` 是適當的回應。伺服器必須支援的方法（因此不得返回 `501` 的方法）是 {{HTTPMethod("GET")}} 和 {{HTTPMethod("HEAD")}}。

如果伺服器允許該方法，但故意不支援該方法，則適當的回應是 {{HTTPStatus(405, "405 Method Not Allowed")}}。

> [!NOTE]
>
> - 501 錯誤不是你可以修復的，而是需要由你嘗試訪問的網路伺服器進行修復。
> - 501 回應默認是可緩存的；也就是說，除非緩存標頭另有指示。

## 狀態

```http
501 Not Implemented
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
