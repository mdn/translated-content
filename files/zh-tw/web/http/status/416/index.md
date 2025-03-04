---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Status/416
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`416 Range Not Satisfiable`** [用戶端錯誤回應](/en-US/docs/Web/HTTP/Status#用戶端錯誤回應)狀態碼表示伺服器無法提供請求的範圍。該回應最可能的原因是文件不包含這樣的[範圍](/en-US/docs/Web/HTTP/Range_requests)，或者 {{HTTPHeader("Range")}} 標頭值雖然在語法上是正確的，但卻毫無意義。

`416` 回應消息應包含一個 {{HTTPHeader("Content-Range")}}，指示了一個不滿足的範圍（即 `'*'`），後跟一個 `'/'` 和資源的當前長度。例如 `Content-Range: bytes */12777`

當遇到這個錯誤時，瀏覽器通常會中止操作（例如下載將被視為不可恢復），或者再次請求整個文件並不指定範圍。

## 狀態

```http
416 Range Not Satisfiable
```

## Examples

### Malformed range request

The following request asks for a range of 1000-1999 bytes from a text file.
The first position unit (1000) is larger than the actual resource on the server (800 bytes):

```http
GET /files/prose.txt HTTP/1.1
Host: example.com
Range: bytes=1000-1999
```

The server supports range requests and sends back the current length of the selected representation in the {{HTTPHeader("Content-Range")}} header:

```http
HTTP/1.1 416 Range Not Satisfiable
Date: Fri, 28 Jun 2024 11:40:58 GMT
Content-Range: bytes */800
```

## Specifications

{{Specifications}}

## 參見

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("206", "206 Partial Content")}}
- [HTTP range requests](/en-US/docs/Web/HTTP/Range_requests)
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Range")}}
