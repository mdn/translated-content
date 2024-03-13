---
title: "Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel"
slug: Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{HTTPSidebar}}

## 이유

```plain
Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel
```

## 무엇이 잘못되었나요?

`Access-Control-Allow-Headers` 헤더는 {{Glossary("CORS")}} 요청에 대해 지원하는 헤더를 알 수 있도록 서버에서 전송됩니다. `Access-Control-Allow-Headers` 값은 "`X-Custom-Information`" 또는 표준이지만 기본이 아닌 헤더 이름(항상 허용됩니다)과 같은 헤더 이름의 쉼표로 구분된 목록이어야 합니다.

이 오류는 명시적으로 허용되지 않은 헤더(즉, 서버에서 보낸 `Access-Control-Allow-Headers` 헤더에 지정된 목록에 포함되지 않는 경우에)를 사전 요청하려고 할 때 발생합니다. 이 문제를 해결하려면, 표시된 헤더를 허용하도록 서버를 갱신하거나, 해당 헤더를 사용하지 않도록 해야 합니다.

## 같이 보기

- [CORS 에러](/ko/docs/Web/HTTP/CORS/Errors)
- 용어 사전: {{Glossary("CORS")}}
- [CORS 소개](/ko/docs/Web/HTTP/CORS)
- [HTTP 헤더](/ko/docs/Web/HTTP/Headers)
