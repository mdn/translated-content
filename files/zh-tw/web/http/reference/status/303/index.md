---
title: 303 See Other
slug: Web/HTTP/Reference/Status/303
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`303 See Other`** [重新導向回應](/zh-TW/docs/Web/HTTP/Reference/Status#重新導向訊息)狀態碼表示瀏覽器應該根據 {{HTTPHeader("Location")}} 標頭中的 URL 進行重新導向，而不是連結到所請求的資源本身。

這個回應碼通常作為 {{HTTPMethod("PUT")}} 或 {{HTTPMethod("POST")}} 方法的結果發送回來，讓用戶端可以取得確認頁面，或查看真實世界物件的表示（參見 [HTTP range-14](https://en.wikipedia.org/wiki/HTTPRange-14)）。用於取得重新導向資源的方法總是 {{HTTPMethod("GET")}}。

## 狀態

```http
303 See Other
```

## 範例

### 表單送出時的 303 回應

此範例中，用戶端以 {{HTTPMethod("POST")}} 請求提交表單至一個通用的訂閱服務。

```http
POST /subscribe HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50

name=Brian%20Smith&email=brian.smith%40example.com
```

伺服器可能會回傳 `303` 狀態碼的回應，並在 {{HTTPHeader("Location")}} 標頭中指定確認頁面，讓使用者在收到回應後被重新導向至該頁面。

```http
HTTP/1.1 303 See Other
Location: https://www.example.com/confirmation/event/123
Content-Type: text/html; charset=UTF-8
Content-Length: 0
```

## 規範

{{Specifications}}

## 參見

- [HTTP 中的重新導向](/zh-TW/docs/Web/HTTP/Guides/Redirections)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("302", "302 Found")}}，臨時重新導向
- {{HTTPStatus("307", "307 Temporary Redirect")}}，臨時重新導向，請求方法不會被修改
