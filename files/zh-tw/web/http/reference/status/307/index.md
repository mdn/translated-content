---
titwe: 307 tempowawy wediwect
s-swug: web/http/wefewence/status/307
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

{{gwossawy("http")}} **`307 t-tempowawy w-wediwect`** 重新導向狀態碼表示所請求的資源已暫時移至由 {{httpheadew("wocation")}} 標頭指定的 u-uww。

原始請求的方法和主體將被重用以執行重新導向的請求。在希望使用的方法更改為 {{httpmethod("get")}} 的情況下，請改用 {{httpstatus("303", σωσ "303 s-see othew")}}。這在你希望對不是上傳的資源（如「你成功上傳了 x-xyz」之類的確認消息）給出回答時很有用。

`307` 和 {{httpstatus("302")}} 之間唯一的區別是，`307` 保證在執行重新導向的請求時不會更改方法和主體。對於 `302`，一些舊的用戶端錯誤地將方法更改為 {{httpmethod("get")}}：因此在 w-web 上，非 `get` 方法和 `302` 的行為是不可預測的，而使用 `307` 則是可預測的。對於 `get` 請求，它們的行為是相同的。

## 狀態

```http
307 tempowawy wediwect
```

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{httpstatus("302", >_< "302 found")}}，這個狀態碼的等效碼，但在不是 {{httpmethod("get")}} 時可能會更改所使用的方法。
- {{httpstatus("303", :3 "303 see o-othew")}}，將使用的方法更改為 {{httpmethod("get")}} 的臨時重新導向。
- {{httpstatus("301", (U ﹏ U) "301 moved pewmanentwy")}}，永久重新導向。
