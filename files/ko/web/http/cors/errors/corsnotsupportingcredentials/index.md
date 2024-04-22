---
title: "Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'"
slug: Web/HTTP/CORS/Errors/CORSNotSupportingCredentials
---

{{HTTPSidebar}}

## 원인

```plain
원인: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'
```

## 무엇이 문제인가요?

자격 증명 플래그가 설정된 상태에서 {{Glossary("CORS")}}요청이 시도되었지만 서버는 자격 증명 사용을 허용하지 않는 {{HTTPHeader("Access-Control-Allow-Origin")}}값으로 와일드카드(`"*"`)를 사용하여 구성됩니다.

클라이언트 측에서 이 문제를 해결하려면 CORS 요청을 발행할 때 자격 증명 플래그의 값이 `false`인지 확인하십시오.

- {{domxref("XMLHttpRequest")}}를 사용하여 이슈가 발생하는 경우 {{domxref("XMLHttpRequest.withCredentials", "withCredentials")}}를 `true`로 설정하지 않았는지 확인하십시오.
- [Server-sent events](/ko/docs/Web/API/Server-sent_events)를 사용하는 경우 {{domxref("EventSource.withCredentials")}}가 (기본값) `false`인지 확인하십시오.
- [Fetch API](/ko/docs/Web/API/Fetch_API)를 사용하는 경우 {{domxref("Request.credentials")}}가 `"omit"`인지 확인하십시오.

대신 서버의 동작을 조정해야 하는 경우 클라이언트가 로드되는 원본에 대한 액세스 권한을 부여하도록 `Access-Control-Allow-Origin`값을 변경해야 합니다.

## 같이 보기

- [CORS 에러](/ko/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS 소개](/ko/docs/Web/HTTP/CORS)
