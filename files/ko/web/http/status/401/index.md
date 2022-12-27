---
title: 401 Unauthorized
slug: Web/HTTP/Status/401
tags:
  - Client error
  - HTTP
  - Reference
  - Status code
  - 클라이언트 오류
translation_of: Web/HTTP/Status/401
---
{{HTTPSidebar}}**`401 Unauthorized`** 클라이언트 오류 상태 응답 코드는 해당 리소스에 유효한 인증 자격 증명이 없기 때문에 요청이 적용되지 않았음을 나타냅니다.

이 상태는 {{HTTPHeader("WWW-Authenticate")}} 헤더와 함께 전송되며, 이 헤더는 올바르게 인증하는 방법에 대한 정보를 포함하고 있습니다.

이 상태는 {{HTTPStatus("403")}}과 비슷하지만, `401 Unauthorized`의 경우에는 인증이 가능합니다.

## 상태

```
401 Unauthorized
```

## 응답 예시

```
HTTP/1.1 401 Unauthorized
Date: Wed, 21 Oct 2015 07:28:00 GMT
WWW-Authenticate: Basic realm="Access to staging site"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat("http.status.401")}}

## 같이 보기

- [HTTP 인증](/ko/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
