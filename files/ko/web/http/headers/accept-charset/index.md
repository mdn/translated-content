---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
---

{{HTTPSidebar}}

> **경고:** 이 헤더를 사용하지 마세요. 브라우저는 이 헤더를 생략하고 서버는 이 헤더를 무시합니다.

**`Accept-Charset`** 요청 HTTP 헤더는 클라이언트가 지원하는 {{glossary("character encoding", "문자 인코딩")}} 을 알리는 헤더였습니다. 이제는 사용되지 않습니다.

UTF-8이 가장 선호되는 문자 인코딩이며 잘 지원되고 있습니다. [구성 기반 엔트로피를 줄이고 더 나은 개인 정보 보호를 보장하기 위해](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy), 모든 브라우저는 `Accept-Charset` 헤더를 생략합니다. Chrome, Firefox, Internet Explorer, Opera, Safari는 이 헤더를 중단했습니다.

이제 `Accept-Charset`은 [금지된 헤더 이름](/en-US/docs/Glossary/Forbidden_header_name) 중 하나입니다.

| 헤더 유형 | {{Glossary("Request header")}} |
| --- | --- |
| {{Glossary("Forbidden header name")}} | yes |

## 같이 보기

- HTTP [콘텐츠 협상](/en-US/docs/Web/HTTP/Content_negotiation)
- [Accept-Charset is no more](https://hsivonen.fi/accept-charset/)
- 콘텐츠 협상 결과가 포함된 헤더: {{HTTPHeader("Content-Type")}}
- 비슷한 다른 헤더들: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}
