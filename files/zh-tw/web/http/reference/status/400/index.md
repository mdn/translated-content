---
title: 400 Bad Request
slug: Web/HTTP/Reference/Status/400
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`400 Bad Request`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示伺服器因為認為存在用戶端錯誤而無法處理請求。`400` 回應的原因通常是由於請求語法格式錯誤、無效的請求訊息框架，或是請求路由錯誤。

收到 `400` 回應的用戶端應該預期，若不對請求進行修改，重試請求將會以相同的錯誤失敗。

## 狀態

```http
400 Bad Request
```

## 範例

### 錯誤的請求語法

假設存在一個 {{Glossary("REST")}} API，該 API 有一個端點用於管理 `http://example.com/users` 的使用者，並且一個 `POST` 請求的請求主體如下，試圖創建一個使用者，但使用了無效的 JSON 格式，並且換行符號未被轉義：

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json
Content-Length: 38

{
  "email": "b@example.com
",
  "username": "b.smith"
}
```

如果{{Glossary("HTTP Content", "內容")}}是有效格式，我們預期會收到 {{HTTPStatus("201", "201 Created")}} 回應或其他成功訊息，但伺服器卻回應 `400`，並且回應主體中包含 `message` 欄位，提供一些上下文資訊，讓用戶端能夠重新發送格式正確的請求：

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: 71

{
  "error": "Bad request",
  "message": "請求主體無法正確讀取。",
}
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- [HTTP 狀態碼定義](https://httpwg.org/specs/rfc9110.html#status.400)
