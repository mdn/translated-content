---
title: 403 Forbidden
slug: Web/HTTP/Reference/Status/403
original_slug: Web/HTTP/Status/403
---

HTTP **`403 Forbidden`** 클라이언트 오류 상태 응답 코드는 서버에 요청이 전달되었지만, 권한 때문에 거절되었다는 것을 의미합니다.

이 상태는 {{HTTPStatus("401")}}과 비슷하지만, 로그인 로직(틀린 비밀번호로 로그인 행위)처럼 반응하여 재인증(re-authenticating)을 하더라도 지속적으로 접속을 거절합니다.

## 상태

```http
403 Forbidden
```

## 응답 예시

```http
HTTP/1.1 403 Forbidden
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPStatus("401")}}
- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
