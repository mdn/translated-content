---
title: 307 Temporary Redirect
slug: Web/HTTP/Reference/Status/307
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`307 Temporary Redirect`** [重新導向回應](/zh-TW/docs/Web/HTTP/Reference/Status#重新導向訊息)狀態碼表示所請求的資源已暫時移至由 {{HTTPHeader("Location")}} 標頭指定的 URL。

當瀏覽器收到此狀態碼時，會自動請求 `Location` 標頭提供的 URL 所在的資源，將使用者重新導向到新的頁面。搜尋引擎在收到此回應時，不會將指向原始 URL 的連結歸屬於新資源，這表示 SEO 值不會轉移到新的 URL。

原始請求的方法和主體將被重用以執行重新導向的請求。在希望請求方法更改為 {{HTTPMethod("GET")}} 的情況下，請改用 {{HTTPStatus("303", "303 See Other")}}。這在你希望對成功的 {{HTTPMethod("PUT")}} 請求提供回應（如狀態監控或確認訊息「你成功上傳了 XYZ」）時很有用。

`307` 和 {{HTTPStatus("302")}} 之間的區別在於，`307` 保證**用戶端不會更改**重新導向請求的方法與主體。而 `302` 則會使舊版用戶端錯誤地將方法改為 {{HTTPMethod("GET")}}。當請求方法是 {{HTTPMethod("GET")}} 時，`307` 和 `302` 回應是相同的。

## 狀態

```http
307 Temporary Redirect
```

## 範例

### 已移動資源的 307 回應

以下的 {{HTTPMethod("GET")}} 請求是針對具有 307 重新導向的資源發出的。{{HTTPHeader("Location")}} 標頭提供了重新導向資源的 URL。

```http
GET /zh-TW/docs/AJAX HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/2 307
location: /zh-TW/docs/Learn_web_development/Core/Scripting/Network_requests
content-type: text/plain; charset=utf-8
date: Fri, 19 Jul 2024 12:57:17 GMT
```

## 規格

{{Specifications}}

## 參見

- [HTTP 重新導向](/zh-TW/docs/Web/HTTP/Guides/Redirections)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("302", "302 Found")}}，等效於 `307`，但可能會修改非 {{HTTPMethod("GET")}} 方法。
- {{HTTPStatus("303", "303 See Other")}}，將請求方法修改為 {{HTTPMethod("GET")}} 的臨時重新導向。
- {{HTTPStatus("301", "301 Moved Permanently")}}，永久重新導向。
