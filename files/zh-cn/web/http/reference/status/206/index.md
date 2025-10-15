---
title: 206 Partial Content
slug: Web/HTTP/Reference/Status/206
---

HTTP **`206 Partial Content`** 成功状态响应代码表示请求已成功，并且主体包含所请求的数据区间，该数据区间是在请求的 {{HTTPHeader("Range")}} 首部指定的。

如果只包含一个数据区间，那么整个响应的 {{HTTPHeader("Content-Type")}} 首部的值为所请求的文件的类型，同时包含 {{HTTPHeader("Content-Range")}} 首部。

如果包含多个数据区间，那么整个响应的 {{HTTPHeader("Content-Type")}} 首部的值为 `multipart/byteranges` ，其中一个片段对应一个数据区间，并提供 {{HTTPHeader("Content-Range")}} 和 {{HTTPHeader("Content-Type")}} 描述信息。

## 状态

```plain
206 Partial Content
```

## 示例

只包含一个数据区间的响应：

```plain
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif

... 26012 bytes of partial image data ...
```

包含多个数据区间的响应：

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

## 规范

{{Specifications}}

## 参见

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
