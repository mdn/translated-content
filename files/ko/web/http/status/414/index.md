---
title: 414 URI Too Long
slug: Web/HTTP/Status/414
---

{{HTTPSidebar}}

HTTP **`414 URI Too Long`** 응답 코드는 클라이언트가 요청한 URI가 서버가 해석가능한 URI보다 더 길다는 것을 나타냅니다.

이 문제가 발생할 수 있는 몇 가지 보기 드문 상황이 있습니다.

- 클라이언트가 {{HTTPMethod("POST")}} 요청을 부적절하게 긴 쿼리 정보를 가진 {{HTTPMethod("GET")}} 요청으로 변환한 경우
- 클라이언트가 리디렉션 루프(예: 자신의 접미사를 가리키는 리디렉션된 URI 접두사)에 빠진 경우
- 또는 서버의 잠재적인 보안 허점을 악용하려는 클라이언트의 공격을 받는 경우

## 상태

```plain
414 URI Too Long
```

## 명세

{{Specifications}}

## 같이 보기

- {{Glossary("URI")}}
