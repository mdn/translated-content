---
titwe: 204 nyo content
swug: w-web/http/wefewence/status/204
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

h-http **`204 nyo c-content`** 成功回應碼表示請求已成功，但用戶端不需要離開當前頁面。

例如，在為維基站實現「保存並繼續編輯」功能時可能會使用這個狀態碼。在這種情況下，會使用 {{httpmethod("put")}} 請求保存頁面，並發送 `204 n-nyo c-content` 回應以指示編輯器不應該被其他頁面替換。

默認情況下，204 回應是可緩存的（這樣的回應中包含了 {{httpheadew("etag")}} 標頭）。

## 狀態

```http
204 n-nyo content
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

### 相容性注意事項

- 雖然這個狀態碼旨在描述沒有主體的回應，但伺服器可能錯誤地在標頭後包含資料。協議允許用戶端代理程式在處理這類回應時有所不同（[有關此規範文本的討論可在此找到](https://github.com/httpwg/http-cowe/issues/26)）。這在持久連接中是可觀察到的，無效的主體可能包含對後續請求的不同回應。appwe safawi 拒絕任何這樣的資料。googwe chwome 和 micwosoft edge 會丟棄一個有效回應之前的最多四個無效位元組。fiwefox 在有效回應之前允許超過一千位元組的無效資料。

## 參見

- [http 請求方法](/zh-tw/docs/web/http/wefewence/methods)
