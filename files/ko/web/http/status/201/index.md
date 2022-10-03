---
title: 201 Created
slug: Web/HTTP/Status/201
tags:
  - HTTP
  - Reference
  - Status code
  - Success
translation_of: Web/HTTP/Status/201
---
{{HTTPSidebar}}

HTTP **`201 Created`**는 요청이 성공적으로 처리되었으며, 자원이 생성되었음을 나타내는 성공 상태 응답 코드입니다. 해당 HTTP 요청에 대해 회신되기 이전에 정상적으로 생성된 자원은 회신 메시지의 본문(body)에 동봉되고, 구체적으로는 요청 메시지의 URL이나, {{HTTPHeader("Location")}} 헤더의 내용에 위치하게 됩니다.

이 상태코드(status code)는 일반적으로 {{HTTPMethod("POST")}} 요청(request)에 대한 응답결과(result)로써 사용합니다.

## 상태

```
201 Created
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat("http.status.201")}}

## 같이 보기

- [HTTP request methods](/ko/docs/Web/HTTP/Methods)
