---
title: 206 Partial Content
slug: Web/HTTP/Status/206
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`206 Partial Content`** 成功回應碼表示請求已成功，並且主體包含了請求中描述的數據範圍，這些範圍由請求的 {{HTTPHeader("Range")}} 標頭描述。

如果只有一個範圍，則整個回應的 {{HTTPHeader("Content-Type")}} 設置為文件的類型，並提供了一個 {{HTTPHeader("Content-Range")}}。

如果返回了多個範圍，則 {{HTTPHeader("Content-Type")}} 設置為 `multipart/byteranges`，每個片段都覆蓋一個範圍，並使用 {{HTTPHeader("Content-Range")}} 和 {{HTTPHeader("Content-Type")}} 描述它。

## 狀態

```http
206 Partial Content
```

## 範例

包含單一範圍的回應：

```http
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif

# 26012 bytes of partial image data…
```

包含多個範圍的回應：

```http
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Length: 1741
Content-Type: multipart/byteranges; boundary=String_separator

--String_separator
Content-Type: application/pdf
Content-Range: bytes 234-639/8000

# the first range
--String_separator
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000

# the second range
--String_separator--
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
