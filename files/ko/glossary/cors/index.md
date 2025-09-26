---
title: CORS
slug: Glossary/CORS
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**CORS** (Cross-Origin Resource Sharing)는 브라우저가 프론트엔드 JavaScript 코드가 교차 출처(cross-origin)에 대한 응답에 접근하는 것을 차단하는지 여부를 결정하는 {{Glossary("HTTP_header", "HTTP headers")}} 전송으로 이루어진 시스템입니다.

[동일 출처 보안 정책](/ko/docs/Web/Security/Same-origin_policy)은 리소스에 대한 출처 간 접근을 금지합니다. 그러나 CORS는 웹 서버가 리소스에 대한 출처 간 접근을 허용하도록 선택할 수 있는 기능을 제공합니다.

## CORS 헤더

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : 응답을 공유할 수 있는지 여부를 나타냅니다.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : 자격 증명 플래그가 true일 때 요청에 대한 응답을 노출할 수 있는지 여부를 나타냅니다.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : 실제 요청을 할 때 사용할 수 있는 HTTP 헤더를 나타내기 위해 실행 전 요청에 대한 응답으로 사용됩니다.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : 실행 전 요청에 대한 응답으로 리소스에 접근할 때 허용되는 메서드를 지정합니다.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : 이름을 나열하여 응답의 일부로 노출될 수 있는 헤더를 나타냅니다.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : 실행 전 요청 결과를 캐시할 수 있는 기간을 나타냅니다.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : 실제 요청이 이루어질 때 사용될 HTTP 헤더를 서버에 알리기 위해 프리플라이트 요청을 발행할 때 사용됩니다.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : 실제 요청이 이루어질 때 어떤 [HTTP method](/ko/docs/Web/HTTP/Reference/Methods)가 사용될 것인지 서버에 알리기 위해 프리플라이트 요청을 발행할 때 사용됩니다.
- {{HTTPHeader("Origin")}}
  - : 가져오기(fetch) 요청이 시작된 위치를 나타냅니다.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : [Resource Timing API](/ko/docs/Web/API/Performance_API/Resource_timing)의 기능을 통해 검색된 속성 값을 볼 수 있는 출처를 지정합니다. 그렇지 않으면, 교차 출처 제한으로 인해 0으로 보고됩니다.

## 같이 보기

- [교차 출처 리소스 공유 (CORS)](/ko/docs/Web/HTTP/Guides/CORS) on MDN
- 위키피디아의 [교차 출처 리소스 공유](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
- [Fetch 명세](https://fetch.spec.whatwg.org)
