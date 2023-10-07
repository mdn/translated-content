---
title: "Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'"
slug: Web/HTTP/CORS/Errors/CORSMIssingAllowCredentials
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

## 이유

```plain
Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'
```

## 무엇이 문제인가요?

{{Glossary("CORS")}} 요청은 서버가 자격 증명 사용을 허용하도록 요구하지만, 서버의 {{HTTPHeader("Access-Control-Allow-Credentials")}} 헤더의 값이 `true`로 설정되지 않아 사용할 수 없습니다.

클라이언트 측에서 이 문제를 해결하려면, 자격 증명 사용을 요청하지 않도록 코드를 수정하세요.

- {{domxref("XMLHttpRequest")}}를 통해서 요청을 생성하는 경우, {{domxref("XMLHttpRequest.withCredentials", "withCredentials")}}를 `true`로 설정하지 않았는지 확인합니다.
- [서버 전송 이벤트](/ko/docs/Web/API/Server-sent_events)를 사용하는 경우, {{domxref("EventSource.withCredentials")}}이 `false`인지 확인합니다(기본값입니다).
- [Fetch API](/ko/docs/Web/API/Fetch_API)를 사용하는 경우, {{domxref("Request.credentials")}} 가 `"omit"`인지 확인합니다.

서버의 구성을 변경하여 이 오류를 제거하려면, 서버의 `Access-Control-Allow-Credentials` 헤더 값을 `true`로 설정합니다.

## 함께 보기

- [CORS 에러](/ko/docs/Web/HTTP/CORS/Errors)
- 용어 사전: {{Glossary("CORS")}}
- [CORS 소개](/ko/docs/Web/HTTP/CORS)
