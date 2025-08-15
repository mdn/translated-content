---
title: HTTP 요청 메서드
slug: Web/HTTP/Reference/Methods
original_slug: Web/HTTP/Methods
---

HTTP는 **요청 메서드**를 정의하여, 주어진 리소스에 수행하길 원하는 행동을 나타냅니다. 간혹 요청 메서드를 "HTTP 동사"라고 부르기도 합니다. 각각의 메서드는 서로 다른 의미를 구현하지만, 일부 기능은 메서드 집합 간에 서로 공유하기도 합니다. 이를테면 응답 메서드는 {{glossary("safe", "안전")}}하거나, {{glossary("cacheable", "캐시 가능")}}하거나, {{glossary("idempotent", "멱등성")}}을 가질 수 있습니다.

- {{httpmethod("GET")}}
  - : `GET` 메서드는 특정 리소스의 표시를 요청합니다. `GET`을 사용하는 요청은 오직 데이터를 받기만 합니다.
- {{httpmethod("HEAD")}}
  - : `HEAD` 메서드는 `GET` 메서드의 요청과 동일한 응답을 요구하지만, 응답 본문을 포함하지 않습니다.
- {{httpmethod("POST")}}
  - : `POST` 메서드는 특정 리소스에 엔티티를 제출할 때 쓰입니다. 이는 종종 서버의 상태의 변화나 부작용을 일으킵니다.
- {{httpmethod("PUT")}}
  - : `PUT` 메서드는 목적 리소스 모든 현재 표시를 요청 payload로 바꿉니다.
- {{httpmethod("DELETE")}}
  - : `DELETE` 메서드는 특정 리소스를 삭제합니다.
- {{httpmethod("CONNECT")}}
  - : `CONNECT` 메서드는 목적 리소스로 식별되는 서버로의 터널을 맺습니다.
- {{httpmethod("OPTIONS")}}
  - : `OPTIONS` 메서드는 목적 리소스의 통신을 설정하는 데 쓰입니다.
- {{httpmethod("TRACE")}}
  - : `TRACE` 메서드는 목적 리소스의 경로를 따라 메시지 loop-back 테스트를 합니다.
- {{httpmethod("PATCH")}}
  - : `PATCH` 메서드는 리소스의 부분만을 수정하는 데 쓰입니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [HTTP 헤더](/ko/docs/Web/HTTP/Reference/Headers)
