---
title: 501 Not Implemented
slug: Web/HTTP/Status/501
---

{{HTTPSidebar}}

하이퍼텍스트 전송 프로토콜(HTTP) **`501 Not Implemented`** 서버 응답 코드는
**요청을 수행할 수 있는 기능을 서버가 지원하지 않는다**는 것을 의미합니다.

서버에서 추후 기능이 지원된다면 요청자에게 다시 확인해볼 수 있는 시점을 알려줄 수 있도록
{{HTTPHeader("Retry-After")}} 헤더를 전송해줄 수 있습니다.

`501` 은 서버가 요청 방법을 이해하지 못하거나 어떤 리소스를 지원하지 않은 경우에 적절합니다. 서버가 필수적으로 지원하는 메서드에는
{{HTTPMethod("GET")}} 와 {{HTTPMethod("HEAD")}}가 있습니다.

서버가 메서드를 이해하지만 고의적으로 지원하지 않는 경우에는 {{HTTPStatus(405, "405 Method Not Allowed")}}
응답이 적합합니다.

> **참고:**
>
> - 501 오류는 사용자가 수정할 수 없고 접근하려는 서버에서 수정이 필요합니다.
> - 캐시 헤더가 달리 지시가 있지 않는 이상, 501 응답은 기본적으로 캐시할 수 있습니다.

## 상태

```http
501 Not Implemented
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
