---
title: 303 See Other
slug: Web/HTTP/Status/303
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`303 See Other`** 重新導向回應碼表示重新導向不是指向所請求的資源本身，而是指向另一個頁面（例如確認頁面、真實世界物件的表示——請參見 [HTTP range-14](https://en.wikipedia.org/wiki/HTTPRange-14)——或上傳進度頁面）。這個回應碼通常作為 {{HTTPMethod("PUT")}} 或 {{HTTPMethod("POST")}} 的結果發送回來。用於顯示這個重新導向頁面的方法總是 {{HTTPMethod("GET")}}。

## 狀態

```http
303 See Other
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPStatus("302", "302 Found")}}，臨時重新導向
- {{HTTPStatus("307", "307 Temporary Redirect")}}，臨時重新導向，使用的方法永遠不會改變
