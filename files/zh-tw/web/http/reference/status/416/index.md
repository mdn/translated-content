---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Reference/Status/416
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`416 Range Not Satisfiable`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示伺服器無法提供請求的範圍。該回應最可能的原因是文件不包含這樣的[範圍](/zh-TW/docs/Web/HTTP/Guides/Range_requests)，或者 {{HTTPHeader("Range")}} 標頭值雖然語法正確，但卻毫無意義。

`416` 回應訊息應包含一個 {{HTTPHeader("Content-Range")}} 標頭，指出一個無法滿足的範圍（即 `'*'`），後面跟著一個 `'/'` 以及資源當前的長度。例如 `Content-Range: bytes */12777`

當發生此錯誤時，瀏覽器通常會中止操作（例如，下載將被視為無法恢復），或重新請求整個文件而不指定範圍。

## 狀態

```http
416 Range Not Satisfiable
```

## 範例

### 錯誤格式的範圍請求

以下請求嘗試從文本文件中請求 1000-1999 位元組的範圍。然而，起始位置單位（1000）大於伺服器上實際資源的大小（800 位元組）：

```http
GET /files/prose.txt HTTP/1.1
Host: example.com
Range: bytes=1000-1999
```

伺服器支援範圍請求，並在 {{HTTPHeader("Content-Range")}} 標頭中返回所選表示的當前長度：

```http
HTTP/1.1 416 Range Not Satisfiable
Date: Fri, 28 Jun 2024 11:40:58 GMT
Content-Range: bytes */800
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("206", "206 Partial Content")}}
- [HTTP 範圍請求](/zh-TW/docs/Web/HTTP/Guides/Range_requests)
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Range")}}
