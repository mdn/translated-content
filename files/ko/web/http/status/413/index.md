---
title: 413 Payload Too Large
slug: Web/HTTP/Status/413
---

{{HTTPSidebar}}HTTP 413 Payload Too Large 응답 상태 코드는 요청 엔터티가 서버에 의해 정의된 제한보다 크다는 것을 나타낸다. 서버가 연결을 닫거나 헤더 필드({{HTTPHeader("Retry-After")}})를 반환할 수 있다.

## 상태

```
413 Payload Too Large
```

## 정의

| 정의                                                | 제목                                                          |
| --------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "413 Payload Too Large" , "6.5.11")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## 참조

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Retry-After")}}
