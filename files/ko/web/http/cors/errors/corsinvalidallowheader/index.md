---
title: "Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'"
slug: Web/HTTP/CORS/Errors/CORSInvalidAllowHeader
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

## 이유

```plain
Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'
```

## 무엇이 문제인가요?

서버에서 보낸 {{Glossary("CORS")}} 요청에 대한 응답에는 유효하지 않은 헤더 이름이 하나 이상 포함된 {{HTTPHeader("Access-Control-Allow-Headers")}} 헤더가 포함되어 있습니다.

`Access-Control-Allow-Headers` 헤더는 {{Glossary("preflight request")}}에 대한 응답으로 서버에서 전송됩니다. 이를 통해 클라이언트는 CORS 요청에서 허용되는 [HTTP headers](/ko/docs/Web/HTTP/Headers)를 알 수 있습니다. 클라이언트 {{Glossary("user agent")}}가 헤더에서 제공하는 쉼표로 구분된 값 중에서 인식하지 못하는 헤더 이름을 찾으면 오류가 발생합니다.

이것은 `Access-Control-Allow-Headers` 헤더와 함께 유효하지 않거나 알 수 없는 헤더 이름을 더 이상 보내지 않도록 서버 구성을 수정하여 서버 측에서만 수정할 수 있는 문제입니다. 클라이언트에서 사용 중인 사용자 에이전트 또는 HTTP 라이브러리가 최신인지 확인하는 것도 가치가 있을 수 있습니다.

## 같이 보기

- [CORS 에러](/ko/docs/Web/HTTP/CORS/Errors)
- 용어 사전: {{Glossary("CORS")}}
- [CORS 소개](/ko/docs/Web/HTTP/CORS)
- [HTTP 헤더](/ko/docs/Web/HTTP/Headers)
