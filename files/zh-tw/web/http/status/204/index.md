---
title: 204 No Content
slug: Web/HTTP/Status/204
---

{{HTTPSidebar}}

HTTP **`204 No Content`** 成功狀態碼表明請求成功，但客戶端不需要更新目前的頁面。204 回應預設是可被快取的，此類回應中會包含 {{HTTPHeader("ETag")}} 標頭。

回傳 `204` 的常見情況是作為 {{HTTPMethod("PUT")}} 請求的回應，更新一個資源且沒有更動目前顯示給使用者的頁面內容。若是有資源被建立，{{HTTPStatus("201")}} `Created` 則應該被回傳。而若頁面應該更新為新的頁面，則應使用 {{HTTPStatus("200")}} 。

## 狀態

```plain
204 No Content
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 相容性事項

- 雖然此狀態碼意圖表示不具主體的回應，伺服器仍可能錯誤地在標頭後加入資料。通訊協定允許使用者代理更動此回應的處理方式 ([關於規範的討論請參見此處](https://github.com/httpwg/http11bis/issues/26))。這在持久連接中可以被觀察到，無效的主體可能會包含後續請求的不同回應 。

  Apple Safari 拒收這些資料。Google Chrome 及 Microsoft Edge 在有效回應之前丟棄最多四個無效的位元組。Firefox 容許在有效回應之前超過 1KB 的無效資料。

## 參見

- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Methods)
