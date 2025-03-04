---
title: 417 Expectation Failed
slug: Web/HTTP/Status/417
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

HTTP **`417 Expectation Failed`** [用戶端錯誤回應](/en-US/docs/Web/HTTP/Status#用戶端錯誤回應)狀態碼表示無法滿足請求的 {{HTTPHeader("Expect")}} 標頭中給定的期望。After receiving a 417 response, a client should repeat the request without an `Expect` request header, including the file in the request body without waiting for a {{HTTPStatus("100")}} response.詳細資訊請參見 {{HTTPHeader("Expect")}} 標頭的文件。

## 狀態

```http
417 Expectation Failed
```

## Examples

### Expectations unsupported

The following PUT request sends information about an intended file upload to a server.
The client uses an `Expect: 100-continue` header and no request body to avoid sending data over the network that may result in an error such as {{HTTPStatus("405")}}, {{HTTPStatus("401")}}, or {{HTTPStatus("403")}} response:

```http
PUT /videos HTTP/1.1
Host: uploads.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

In this example server implementation, expectations are not supported and the presence of an `Expect` header with any value results in 417 responses:

```http
HTTP/1.1 417 Expectation Failed
Date: Fri, 28 Jun 2024 11:40:58 GMT
```

The client responds by making a request without expectations and with the {{Glossary("HTTP Content", "content")}} in the request body:

```http
PUT /videos HTTP/1.1
Host: uploads.example.com
Content-Type: video/h264
Content-Length: 1234567890987

[…]
```

## 規範

{{Specifications}}

## 參見

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("100", "100 Continue")}}
- {{HTTPHeader("Expect")}}
