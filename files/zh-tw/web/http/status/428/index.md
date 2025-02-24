---
title: 428 Precondition Required
slug: Web/HTTP/Status/428
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`428 Precondition Required`** [用戶端錯誤回應](/en-US/docs/Web/HTTP/Status#用戶端錯誤回應)狀態碼表示伺服器要求請求是[有條件的](/zh-TW/docs/Web/HTTP/Conditional_requests)。

通常 428 回應意味著必要的先決條件標頭（例如 {{HTTPHeader("If-Match")}}）的**缺失**。當先決條件標頭與伺服器端狀態**不匹配**時，回應應為 {{HTTPStatus("412", "412 Precondition Failed")}}。

## 狀態

```http
428 Precondition Required
```

## Examples

### Missing precondition in request

A client has fetched a resource `my-document` from the server, updated it locally, and then tries to send the updated document back to the server:

```http
PUT /docs/my-document HTTP/1.1
Host: example.com
Content-Type: application/json

{
[…]
```

The server implementation requires that all {{HTTPMethod("PUT")}} requests for the specific path or type of documents must be conditional and sends a 428 response:

```http
HTTP/1.1 428 Precondition Required
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
"code": "MissingPrecondition",
"message": "Updating documents requires a precondition header.",
}
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/en-US/docs/Web/HTTP/Status)
- [HTTP 條件請求](/zh-TW/docs/Web/HTTP/Conditional_requests)
- 條件標頭：{{HTTPHeader("If-Match")}}、{{HTTPHeader("If-None-Match")}}、{{HTTPHeader("If-Modified-Since")}}、{{HTTPHeader("If-Unmodified-Since")}}、{{HTTPHeader("If-Range")}}
- {{HTTPStatus(412)}}
