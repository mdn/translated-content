---
title: 204 No Content
slug: Web/HTTP/Status/204
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`204 No Content`** 成功回應碼表示請求已成功，但用戶端不需要離開當前頁面。

例如，在為維基站實現「保存並繼續編輯」功能時可能會使用這個狀態碼。在這種情況下，會使用 {{HTTPMethod("PUT")}} 請求保存頁面，並發送 `204 No Content` 回應以指示編輯器不應該被其他頁面替換。

默認情況下，204 回應是可緩存的（這樣的回應中包含了 {{HTTPHeader("ETag")}} 標頭）。

## 狀態

```http
204 No Content
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

### 相容性注意事項

- 雖然這個狀態碼旨在描述沒有主體的回應，但伺服器可能錯誤地在標頭後包含資料。協議允許用戶端代理程式在處理這類回應時有所不同（[有關此規範文本的討論可在此找到](https://github.com/httpwg/http-core/issues/26)）。這在持久連接中是可觀察到的，無效的主體可能包含對後續請求的不同回應。Apple Safari 拒絕任何這樣的資料。Google Chrome 和 Microsoft Edge 會丟棄一個有效回應之前的最多四個無效位元組。Firefox 在有效回應之前允許超過一千位元組的無效資料。

## 參見

- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Methods)
