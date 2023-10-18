---
title: "Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'"
slug: Web/HTTP/CORS/Errors/CORSMethodNotFound
l10n:
  sourceCommit: e50be9e58b13348d09d4003c2ff4bf599fb1a486
---

{{HTTPSidebar}}

## 이유

```plain
Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'
```

## 무엇이 문제인가요?

{{Glossary("CORS")}} 요청에서 사용 중인 HTTP 메서드는 응답 {{HTTPHeader("Access-Control-Allow-Methods")}} 헤더에 의해 지정된 메서드 목록에 포함되어 있지 않습니다. 이 헤더는 CORS를 사용하여 요청에 지정된 URL에 접근할 때 사용할 수 있는 HTTP 메서드의 쉼표로 구분되는 목록입니다. 요청이 다른 메소드를 사용하는 경우에, 이 오류가 발생합니다.

예를 들어, 응답에 다음이 포함된 경우

```http
Access-Control-Allow-Methods: GET,HEAD,POST
```

{{HTTPMethod("PUT")}} 요청을 사용하려고 하면 이 오류와 함께 실패합니다.

서비스에 접근할 때 코드가 허용된 HTTP 메서드만 사용하는지 확인하세요.

> **참고:** 서버의 `Access-Control-Allow-methods` 헤더에 인식되지 않거나 정의되지 않은 메서드 이름이 포함된 경우, 다른 오류가 발생합니다. [`Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'`](/ko/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod).

## See also

- [CORS 에러](/ko/docs/Web/HTTP/CORS/Errors)
- 용어 사전: {{Glossary("CORS")}}
- [CORS 소개](/ko/docs/Web/HTTP/CORS)
- [HTTP 요청 메서드](/ko/docs/Web/HTTP/Methods)
