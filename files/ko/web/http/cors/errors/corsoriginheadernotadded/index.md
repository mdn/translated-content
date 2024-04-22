---
title: "Reason: CORS header 'Origin' cannot be added"
slug: Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded
---

{{HTTPSidebar}}

## 이유

```plain
Reason: CORS header 'Origin' cannot be added
```

## 무엇이 잘못되었는가?

사용자 에이전트({{Glossary("user agent")}})가 필요한 {{HTTPHeader("Origin")}}
헤더를 {{Glossary("HTTP")}} 요청에 추가할 수 없습니다. 모든 CORS 요청에는 `Origin` 헤더가 있어야 합니다.

예를 들어, JavaScript 코드가 여러 도메인의 콘텐츠에 접근할 수 있는 향상된 권한으로 실행되는 경우에 발생할 수 있습니다.

## 같이 보기

- [CORS 에러](/ko/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS 소개](/ko/docs/Web/HTTP/CORS)
