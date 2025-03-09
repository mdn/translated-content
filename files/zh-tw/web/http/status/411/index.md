---
title: 411 Length Required
slug: Web/HTTP/Status/411
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`411 Length Required`** [用戶錯誤回應](/zh-TW/docs/Web/HTTP/Status#用戶錯誤回應)狀態碼表示伺服器拒絕接受沒有定義 {{HTTPHeader("Content-Length")}} 標頭的請求。

> [!NOTE]
> 在以一系列塊發送數據時，會省略 `Content-Length` 標頭，而在每個塊的開頭，當前塊的長度需要包含在十六進制格式。詳情請參見 {{HTTPHeader("Transfer-Encoding")}}。

## 狀態

```http
411 Length Required
```

## Examples

### Chunked POST request

The following request is sent chunked, which is the default method of sending data in some cases, such as when [writing to streams](https://nodejs.org/api/http.html#requestwritechunk-encoding-callback):

```http
POST /translate/de HTTP/1.1
Host: api.example.com
Content-Type: application/json
Transfer-encoding: chunked

2C
{"text": "Hurry up, Ayşe is hungry!"}
0
```

In this case, the server is expecting a request in one part with a {{HTTPHeader("Content-Length")}} header and returns a 411 response:

```http
HTTP/1.1 411 Length Required
Content-Type: application/json
Content-Length: 110

{
  "message": "Requests must have a content length header.",
  "documentation": "http://api/example.com/docs/errors",
}
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Status)
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
