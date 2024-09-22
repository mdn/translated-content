---
title: 307 Temporary Redirect
slug: Web/HTTP/Status/307
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

{{Glossary("HTTP")}} **`307 Temporary Redirect`** 重新導向狀態碼表示所請求的資源已暫時移至由 {{HTTPHeader("Location")}} 標頭指定的 URL。

原始請求的方法和主體將被重用以執行重新導向的請求。在希望使用的方法更改為 {{HTTPMethod("GET")}} 的情況下，請改用 {{HTTPStatus("303", "303 See Other")}}。這在你希望對不是上傳的資源（如「你成功上傳了 XYZ」之類的確認消息）給出回答時很有用。

`307` 和 {{HTTPStatus("302")}} 之間唯一的區別是，`307` 保證在執行重新導向的請求時不會更改方法和主體。對於 `302`，一些舊的用戶端錯誤地將方法更改為 {{HTTPMethod("GET")}}：因此在 Web 上，非 `GET` 方法和 `302` 的行為是不可預測的，而使用 `307` 則是可預測的。對於 `GET` 請求，它們的行為是相同的。

## 狀態

```http
307 Temporary Redirect
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPStatus("302", "302 Found")}}，這個狀態碼的等效碼，但在不是 {{HTTPMethod("GET")}} 時可能會更改所使用的方法。
- {{HTTPStatus("303", "303 See Other")}}，將使用的方法更改為 {{HTTPMethod("GET")}} 的臨時重新導向。
- {{HTTPStatus("301", "301 Moved Permanently")}}，永久重新導向。
