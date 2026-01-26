---
title: 401 Unauthorized
slug: Web/HTTP/Reference/Status/401
original_slug: Web/HTTP/Status/401
l10n:
  sourceCommit: cab15d3616b63a8699e6c0cee0631a48edcec979
---

HTTP(하이퍼텍스트 전송 프로토콜) **`401 Unauthorized`** 응답 상태 코드는 요청된 리소스에 대한
유효한 인증 자격 증명이 없기 때문에 클라이언트 요청이 완료되지 않았음을 나타냅니다.

이 상태 코드는 사용자에게 인증 자격 증명을 입력하라는 메시지를 표시한 후 클라이언트가 리소스를 다시 요청할 수 있는
방법이 포함된 HTTP {{HTTPHeader("WWW-Authenticate")}} 응답 헤더와 함께 전송됩니다.

이 상태 코드는 {{HTTPStatus("403", "403 Forbidden")}} 상태 코드와 유사합니다.
다만 이 상태 코드가 발생하는 상황에서 사용자 인증을 통해 리소스에 대한 액세스를 허용할 수 있습니다.

## 상태

```http
401 Unauthorized
```

## 응답 예시

```http
HTTP/1.1 401 Unauthorized
Date: Wed, 21 Oct 2015 07:28:00 GMT
WWW-Authenticate: Basic realm="Access to staging site"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [HTTP 인증](/ko/docs/Web/HTTP/Guides/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
