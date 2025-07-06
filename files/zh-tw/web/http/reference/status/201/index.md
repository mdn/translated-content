---
title: 201 Created
slug: Web/HTTP/Reference/Status/201
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`201 Created`** [成功回應](/zh-TW/docs/Web/HTTP/Reference/Status#成功回應)狀態碼表示 HTTP 請求成功並導致資源的建立。這個狀態碼常見於 {{HTTPMethod("POST")}} 請求的結果。

新資源或對新資源的描述與連結會在回應發送前建立。新建立的項目會在消息主體中返回，位置為**初始請求的 URL**，或是回應中 {{HTTPHeader("Location")}} 標頭所指定的 URL。

## 狀態

```http
201 Created
```

## 範例

### 接收到表示使用者建立成功的回應

假設有一個用於管理使用者的 REST API，端點位於 `http://example.com/users`。在這個例子中，我們傳送以下 `POST` 請求以建立一位使用者：

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "firstName": "Brian",
  "lastName": "Smith",
  "email": "brian.smith@example.com"
}
```

在成功建立使用者後，伺服器會回傳如下的 `201 Created` 回應：

```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: http://example.com/users/123

{
  "message": "建立新使用者",
  "user": {
    "id": 123,
    "firstName": "Brian",
    "lastName": "Smith",
    "email": "brian.smith@example.com"
  }
}
```

## 規範

{{Specifications}}

## 參見

- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Reference/Methods)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
