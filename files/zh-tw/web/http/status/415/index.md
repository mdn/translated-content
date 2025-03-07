---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`415 Unsupported Media Type`** [用戶端錯誤回應](/en-US/docs/Web/HTTP/Status#用戶端錯誤回應)狀態碼表示伺服器拒絕接受請求，因為訊息{{Glossary("HTTP Content", "內容")}}是不受支援的。

格式問題可能是由於請求中指定的 {{HTTPHeader("Content-Type")}} 或 {{HTTPHeader("Content-Encoding")}}，或處理請求訊息內容導致的。Some servers may be strict about the expected `Content-Type` of requests.For example, sending `UTF8` instead of `UTF-8` to specify the {{glossary("UTF-8")}} charset may cause the server to consider the media type invalid.

## 狀態

```http
415 Unsupported Media Type
```

## Examples

### Missing content type

In the following example, the {{HTTPHeader("Content-Type")}} header is missing entirely:

```http
POST /comments HTTP/1.1
Host: example.com
Content-Length: 23

{
"user": "belgin",
"comment": "LGTM!"
}
```

If the server implementation expects at least a MIME type `Content-Type: application/json;` for the request at that endpoint, it may send the following response:

```http
HTTP/1.1 415 Unsupported Media Type
Date: Fri, 28 Jun 2024 12:00:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Accept-Post: application/json; charset=UTF-8
Content-Length: 0
```

### Invalid content type

In the following example, the {{HTTPHeader("Content-Type")}} header is incorrectly set to URL-encoded form data when the {{Glossary("HTTP Content", "content")}} is in the request body instead:

```http
POST /comments HTTP/1.1
Host: example.com
Content-Length: 23
Content-Type: application/x-www-form-urlencoded

{
"user": "belgin",
"comment": "LGTM!"
}
```

In this case, the server responds with a 415, with the required content type for the request in the {{HTTPHeader("Accept-Post")}} header:

```http
HTTP/1.1 415 Unsupported Media Type
Date: Fri, 28 Jun 2024 12:00:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Accept-Post: application/json; charset=UTF-8
Content-Length: 0
```

## 規範

{{Specifications}}

## 參見

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept-Post")}}
