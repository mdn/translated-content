---
title: 302 Found
slug: Web/HTTP/Status/302
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{HTTPSidebar}}

HTTP **`302 Found`** 重新導向回應碼表示所請求的資源已暫時移動到由 {{HTTPHeader("Location")}} 標頭給出的 URL。瀏覽器將重新導向到此頁面，但搜索引擎不會更新對該資源的連結（在 SEO 術語中，這意味著「連結權重」不會傳送到新的 URL）。

即使規範要求在執行重新導向時不應更改方法（和主體），但並非所有用戶代理都符合此處——你仍然可以在某些軟體中找到這類有問題的軟體。因此，建議僅將 `302` 狀態碼設置為 {{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}} 方法的回應，並改用 {{HTTPStatus("307", "307 Temporary Redirect")}}，因為在這種情況下明確禁止更改方法。

在想要將使用的方法更改為 {{HTTPMethod("GET")}} 的情況下，請改用 {{HTTPStatus("303", "303 See Other")}}。當你想要對 {{HTTPMethod("PUT")}} 方法給出一個回應，但不是上傳的資源，而是一條確認消息時，這很有用，例如：「你已成功上傳 XYZ」。

## 狀態

```http
302 Found
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPStatus("307", "307 Temporary Redirect")}}，這個狀態碼的等效之處在於使用的方法永遠不會改變。
- {{HTTPStatus("303", "303 See Other")}}，臨時重新導向，改變了使用的方法為 {{HTTPMethod("GET")}}。
- {{HTTPStatus("301", "301 Moved Permanently")}}，永久重新導向。
