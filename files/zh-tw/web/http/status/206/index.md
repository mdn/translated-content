---
title: 206 Partial Content
slug: Web/HTTP/Status/206
---

{{HTTPSidebar}}

HTTP **`206 Partial Content`** 成功狀態碼表明請求成功，且主體包含在請求標頭{{HTTPHeader("Range")}} 中所指定的資料區間。

若只包含一個區間，則整個回應的 {{HTTPHeader("Content-Type")}} 將會被設為該文件的類型 ，且會包含一個 {{HTTPHeader("Content-Range")}} 標頭。

若有多個區間，則整個回應的 {{HTTPHeader("Content-Type")}} 會被設為 `multipart/byteranges` ，且每個分段會對應一個區間，並有 {{HTTPHeader("Content-Range")}} 及 {{HTTPHeader("Content-Type")}} 描述各個區間。

## 狀態

```plain
206 Partial Content
```

## 範例

一個包含單一區間的回應：

```plain
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif

... 26012 bytes of partial image data ...
```

一個包含多個區間的回應：

```plain
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Length: 1741
Content-Type: multipart/byteranges; boundary=String_separator

--String_separator
Content-Type: application/pdf
Content-Range: bytes 234-639/8000

...the first range...
--String_separator
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000

...the second range
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
