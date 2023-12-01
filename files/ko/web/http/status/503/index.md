---
title: 503 Service Unavailable
slug: Web/HTTP/Status/503
---

{{HTTPSidebar}}

하이퍼텍스트 전송 프로토콜(HTTP) **`503 Service Unavailable`** 서버 에러 응답 코드는 서버가 요청을 처리할 준비가 되지 않은 것을 의미합니다.

흔하게는 서버가 점검을 위해 다운되거나 과부하 때문에 발생합니다. 이 응답은 일시적인 상황을 위해 사용되어야 하며, {{HTTPHeader("Retry-After")}} HTTP 헤더는 가능하다면 서비스 복구를 위한 예상 시간을 포함해야 합니다.

> **참고:** 이 응답(response)과 함께, 이 문제에 대해 설명하는 사용자 친화적 페이지가 전달되어야 합니다.

503 상태는 종종 일시적인 상황이며 응답은 일반적으로 캐시되지 않아야 하므로, 이 응답과 함께 전달되는 캐싱 관련 헤더들은 주의 깊게 다루어져야 합니다.

## 상태

```http
503 Service Unavailable
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPHeader("Retry-After")}}
- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
