---
title: 500 Internal Server Error
slug: Web/HTTP/Reference/Status/500
original_slug: Web/HTTP/Status/500
---

하이퍼텍스트 전송 프로토콜 (HTTP) **`500 Internal Server Error`** 서버 에러 응답 코드는 요청을 처리하는
과정에서 서버가 예상하지 못한 상황에 놓였다는 것을 나타냅니다.

이 에러 응답은 "서버 에러를 총칭하는"(catch-all) 일반적인 응답입니다. 보통 이는 서버가 응답할 좀 더 좋은 5xx 에러 코드를
못 찾은 것을 의미합니다. 종종 서버 관리자들은 미래에 같은 에러를 발생하는 것을 방지하기 위해 500 상태 코드 같은 에러 응답들에
더 많은 자세한 내용을 남겨 둡니다.

## 상태

```http
500 Internal Server Error
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
