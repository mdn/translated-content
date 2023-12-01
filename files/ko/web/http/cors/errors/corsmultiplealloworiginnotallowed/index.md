---
title: "Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed"
slug: Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed
---

{{HTTPSidebar}}

## 이유

```plain
Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed
```

## 무엇이 잘못되었는가?

둘 이상의 {{HTTPHeader("Access-Control-Allow-Origin")}} 헤더가 서버에서 전송되었습니다. 이것은 허용되지 않습니다.

서버에 접근할 수 있는 경우 `Access-Control-Allow-Origin` 헤더의 오리진을 다시 보낼 수 있도록 구현을 변경할 수 있습니다. 브라우저는 하나의 오리진 또는 null 값만 허용하므로 오리진 목록을 보낼 수 없습니다.

## 같이보기

- [CORS 에러](/ko/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS 소개](/ko/docs/Web/HTTP/CORS)
- [CORS 사용: 내 서버에 CORS를 추가하고 싶다면](https://enable-cors.org/server.html)
