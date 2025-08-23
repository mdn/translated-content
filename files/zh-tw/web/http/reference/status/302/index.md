---
title: 302 Found
slug: Web/HTTP/Reference/Status/302
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`302 Found`** [重新導向回應](/zh-TW/docs/Web/HTTP/Reference/Status#重新導向訊息)狀態碼表示所請求的資源已暫時移動到 {{HTTPHeader("Location")}} 標頭中的 URL。

收到此狀態的瀏覽器會自動請求 `Location` 標頭中的 URL 資源，將使用者重新導向到新的頁面。收到此回應的搜尋引擎不會將原始 URL 的連結歸屬到新的資源，這意味著沒有 {{Glossary("SEO")}} 價值會轉移到新的 URL。

> [!NOTE]
> 在 [Fetch 標準](https://fetch.spec.whatwg.org/#http-redirect-fetch)中，當使用者代理收到 `302` 作為對 {{HTTPMethod("POST")}} 請求的回應時，它會在隨後的重新導向請求中使用 {{HTTPMethod("GET")}} 方法，這是 HTTP [規範](#規範)所允許的。為避免使用者代理修改請求，應改用 {{HTTPStatus("307", "307 Temporary Redirect")}}，因為在 `307` 回應後更改方法是被禁止的。
>
> 在你想要將任何請求方法更改為 {{HTTPMethod("GET")}} 的情況下，請改用 {{HTTPStatus("303", "303 See Other")}}。當你想要對 {{HTTPMethod("PUT")}} 方法給出一個回應，但不是上傳的資源，而是一條確認訊息（例如：「你已成功上傳 XYZ」）時，這很有用。

## 狀態

```http
302 Found
```

## 範例

### 帶有新 URL 的 302 回應

```http
GET /profile HTTP/1.1
Host: [www.example.com](https://www.example.com)
```

```http
HTTP/1.1 302 Found
Location: [https://www.example.com/new-profile-url](https://www.example.com/new-profile-url)
Content-Type: text/html; charset=UTF-8
Content-Length: 0
```

## 規範

{{Specifications}}

## 參見

- [HTTP 中的重新導向](/zh-TW/docs/Web/HTTP/Guides/Redirections)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("307", "307 Temporary Redirect")}}，與 `302` 等效，但請求方法不會被修改。
- {{HTTPStatus("303", "303 See Other")}}，臨時重新導向，會將方法更改為 {{HTTPMethod("GET")}}。
- {{HTTPStatus("301", "301 Moved Permanently")}}，永久重新導向。
