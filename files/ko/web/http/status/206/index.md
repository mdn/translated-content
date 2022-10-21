---
title: 206 Partial Content
slug: Web/HTTP/Status/206
tags:
  - HTTP
  - HTTP Status
  - Range Requests
  - Success
  - 성공
translation_of: Web/HTTP/Status/206
---
{{HTTPSidebar}}

HTTP **`206 Partial Content`**는 {{HTTPHeader("Range")}} 헤더에 기술된 데이터 범위에 대한 요청이 성공적으로 응답되어 바디에 해당되는 데이터를 담고 있다는 것을 알려줍니다.

만약 단일 범위 요청을 한 경우에는 응답에 포함된 데이터의 타입은 {{HTTPHeader("Content-Type")}}이며, {{HTTPHeader("Content-Range")}}가 제공될 것입니다.

만약 다중 범위 요청에 대한 응답이라면, {{HTTPHeader("Content-Type")}}는 `multipart/byteranges`로 되며 분할된 데이터의 응답은 {{HTTPHeader("Content-Range")}} 와 {{HTTPHeader("Content-Type")}}로 각각의 범위를 기술합니다.

## 상태

```
206 Partial Content
```

## 예제

응답이 단일 범위를 가지고 있는 경우:

```
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif

... 26012 bytes of partial image data ...
```

응답이 여러 범위를 가지고 있는 경우:

```
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

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat("http.status.206")}}

## 함께 참고할 내용

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
