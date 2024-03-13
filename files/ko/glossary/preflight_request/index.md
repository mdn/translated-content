---
title: 사전 요청
slug: Glossary/Preflight_request
l10n:
  sourceCommit: 8fb278667457c5c56f21b2851e9ab82937b46a75
---

{{GlossarySidebar}}

교차 출처 리소스 공유 사전 요청은 본격적인 교차 출처 HTTP 요청 전에 서버 측에서 그 요청의 메서드와 헤더에 대해 인식하고 있는지를 확인하는 {{Glossary("CORS")}} 요청입니다.

이것은 {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Origin")}}, 선택적으로 {{HTTPHeader("Access-Control-Request-Headers")}} 헤더 구성으로 2가지 또는 3가지의 HTTP request headers를 사용하는 {{HTTPMethod("OPTIONS")}} 요청입니다.

사전 요청은 일반적인 상황에서는 브라우저에서 자동으로 발생됩니다. 그러므로 프런트엔드 개발자가 이 요청을 직접 작성할 필요는 없습니다. [단순 요청](/ko/docs/Web/HTTP/CORS#simple_requests)의 경우 [사전 실행 요청](/ko/docs/Web/HTTP/CORS#preflighted_requests)이 생략됩니다.

예를 들어, 클라이언트는 `DELETE` 요청을 하기 전에 사전 요청을 통해 서버가 {{HTTPMethod("DELETE")}}을 허용하는지 물어볼 수 있습니다.

```http
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: origin, x-requested-with
Origin: https://foo.bar.org
```

서버가 허용하는 경우, {{HTTPHeader("Access-Control-Allow-Methods")}} 헤더 값에 `DELETE`를 포함하여 사전 요청에 응답합니다.

```http
HTTP/1.1 204 No Content
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Max-Age: 86400
```

위의 예와 같이, {{HTTPHeader("Access-Control-Max-Age")}} 헤더를 사용하여 동일한 {{Glossary("URL")}}을 사용하는 요청에 대해 사전 응답을 선택적으로 캐시할 수 있습니다. 사전 응답을 캐시하기 위해, 브라우저는 브라우저가 관리하는 일반 HTTP 캐시와 별개인 특정 캐시를 사용합니다. 사전 응답은 브라우저의 일반 HTTP 캐시에 저장되지 않습니다.

## 같이 보기

- {{Glossary("CORS")}}
- {{HTTPMethod("OPTIONS")}}
