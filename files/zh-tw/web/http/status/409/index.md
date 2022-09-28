---
title: 409 Conflict
slug: Web/HTTP/Status/409
---

{{HTTPSidebar}}

HTTP **`409 Conflict`** 表示請求與伺服器目前狀態衝突

衝突通常發生於 {{HTTPMethod("PUT")}} 請求。如上傳一個已經有舊版本存在於伺服器的檔案而導致版本控制衝突時，會回復一個 409 錯誤。

## 狀態

```plain
409 Conflict
```

## 規範

{{Specifications}}

## 參見

- {{HTTPMethod("PUT")}}
