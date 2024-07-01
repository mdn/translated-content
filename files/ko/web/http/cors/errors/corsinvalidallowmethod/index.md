---
title: "Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'"
slug: Web/HTTP/CORS/Errors/CORSInvalidAllowMethod
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

## 이유

```plain
Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'
```

## 무엇이 잘못되었나요?

서버에서 보낸 {{Glossary("CORS")}} 요청에 대한 응답에는 하나 이상의 잘못된 메서드 이름을 포함하는 {{HTTPHeader("Access-Control-Allow-Methods")}} 헤더가 포함되어 있습니다.

`Access-Control-Allow-Methods` 헤더는 클라이언트가 CORS 요청에 대해 지원하는 [HTTP 요청 메서드](/ko/docs/Web/HTTP/Methods)를 알리기 위해 서버에서 전송됩니다. 헤더의 값은 {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}} 또는 {{HTTPMethod("HEAD")}}와 같은 HTTP 메서드 이름들의 쉼표로 구분된 문자열입니다. 클라이언트 {{Glossary("user agent")}}에서 지정된 값을 인식하지 못하는 경우, 이 오류가 발생합니다.

이것은 `Access-Control-Allow-Methods` 헤더와 함께 유효하지 않거나 알 수 없는 메서드 이름을 더 이상 보내지 않도록 서버의 구성을 수정하여 서버 측에서만 해결할 수 있는 문제입니다. 클라이언트에서 사용 중인 사용자 에이전트 또는 HTTP 라이브러리가 최신인지 확인하는 것도 의미가 있습니다.

## 같이 보기

- [CORS 오류](/ko/docs/Web/HTTP/CORS/Errors)
- 용어 사전: {{Glossary("CORS")}}
- [CORS 소개](/ko/docs/Web/HTTP/CORS)
- [HTTP 요청 메서드](/ko/docs/Web/HTTP/Methods)
