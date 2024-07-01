---
title: "Reason: CORS preflight channel did not succeed"
slug: Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed
---

{{HTTPSidebar}}

## 원인

```plain
원인: CORS preflight 연결에 성공하지 못했습니다.
```

## 무엇이 문제인가요?

{{Glossary("CORS")}} 요청에 preflight가 필요하며 preflight를 수행할 수 없습니다. preflight가 실패할 수 있는 몇 가지 이유가 있습니다.

- 이전에 이미 preflight를 수행한 교차 사이트 요청이 수행되었으며 preflight를 다시 수행하는 것은 허용되지 않습니다. 코드가 연결당 한 번씩만 preflight를 수행하는지 확인하십시오.
- 실행 전 요청에 일반적으로 발생할 수 있는 모든 종류의 네트워킹 오류가 발생했습니다.

## 더보기

- [CORS 에러](/ko/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS 소개](/ko/docs/Web/HTTP/CORS)
