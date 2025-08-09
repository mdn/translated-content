---
title: 206 Partial Content
slug: Web/HTTP/Reference/Status/206
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`206 Partial Content`** [成功回應](/zh-TW/docs/Web/HTTP/Reference/Status#成功回應)狀態碼是為了回應[範圍請求](/zh-TW/docs/Web/HTTP/Guides/Range_requests)而發送的。回應主體包含請求的 {{HTTPHeader("Range")}} 標頭中所指定的資料範圍。

回應的格式取決於請求的範圍數量。如果只請求了一個範圍，則整個回應的 {{HTTPHeader("Content-Type")}} 會設為文件的類型，並提供一個 {{HTTPHeader("Content-Range")}}。如果請求了多個範圍，則 {{HTTPHeader("Content-Type")}} 會設為 `multipart/byteranges`，且每個片段都涵蓋一個範圍，並帶有其各自的 {{HTTPHeader("Content-Range")}} 和 {{HTTPHeader("Content-Type")}} 標頭來描述它。

## 狀態

```http
206 Partial Content
```

## 範例

### 接收單一請求範圍的 `206` 回應

以下是請求圖片檔案的單一範圍 `21010-`（從 21010 位元組到檔案結尾）時的 `206` 回應範例。回應包含 `image/gif` 的 {{HTTPHeader("Content-Type")}}，並提供了 {{HTTPHeader("Content-Range")}}：

```http
GET /z4d4kWk.gif HTTP/1.1
Host: images.example.com
Range: bytes=21010-
```

```http
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif
ETag: "abc123"
Accept-Ranges: bytes

# 26012 位元組的部分圖片資料…
```

### 接收多個請求範圍的 `206` 回應

以下是請求 PDF 檔案的兩個範圍時的 `206` 回應範例。回應包含 `multipart/byteranges` 的 {{HTTPHeader("Content-Type")}}，並為每個範圍提供獨立的 {{HTTPHeader("Content-Type")}}（`application/pdf`）和 {{HTTPHeader("Content-Range")}}。

```http
GET /price-list.pdf HTTP/1.1
Host: example.com
Range: bytes=234-639,4590-7999
```

```http
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Length: 1741
Content-Type: multipart/byteranges; boundary=String_separator
ETag: "abc123"
Accept-Ranges: bytes

--String_separator
Content-Type: application/pdf
Content-Range: bytes 234-639/8000

# 第一個範圍的內容（406 位元組）
--String_separator
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000

# 第二個範圍的內容（3410 位元組）
--String_separator--
```

## 規範

{{Specifications}}

## 參見

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Reference/Methods)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
