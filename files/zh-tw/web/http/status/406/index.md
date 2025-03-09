---
title: 406 Not Acceptable
slug: Web/HTTP/Status/406
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`406 Not Acceptable`** [用戶端錯誤回應](/en-US/docs/Web/HTTP/Status#用戶端錯誤回應)狀態碼表示伺服器無法產生與請求的[主動內容協商](/en-US/docs/Web/HTTP/Content_negotiation#服務器驅動的內容協商)標頭中定義的可接受值清單匹配的回應，並且伺服器不願意提供默認表示。

主動內容協商標頭包括：

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}

A server may return responses that differ from the request's accept headers.
In such cases, a {{HTTPStatus("200")}} response with a default resource that doesn't match the client's list of acceptable content negotiation values may be preferable to sending a 406 response.

If a server returns a 406, the body of the message should contain the list of available representations for the resource, allowing the user to choose, although no standard way for this is defined.

## 狀態

```http
406 Not Acceptable
```

## Examples

### Content type not available

The following request assumes that `www.example.com/docs/doc1` supports sending a document back as `application/rtf`:

```http
GET /docs/doc1 HTTP/1.1
Host: example.com
Accept: application/rtf;
```

In this example, the server implementation does not fallback to a default content type like `text/html` or `application/json`, but returns a 406 instead:

```http
HTTP/1.1 406 Not Acceptable
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "code": "UnsupportedType",
  "message": "Only 'text/html' or 'application/json' content types supported.",
}
```

## 規範

{{Specifications}}

## 參見

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}
- HTTP [內容協商](/zh-TW/docs/Web/HTTP/Content_negotiation)
