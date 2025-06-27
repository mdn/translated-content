---
title: 메타데이터 가져오기 요청 헤더 (Fetch metadata request header)
slug: Glossary/Fetch_metadata_request_header
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**메타데이터 가져오기 요청 헤더**는 요청이 시작된 맥락에 대한 추가 정보를 제공하는 {{Glossary("Request header", "HTTP 요청 헤더")}}입니다. 이를 통해 서버는 요청이 어디서 왔는지와 리소스를 어떻게 사용하는지에 따라 요청을 허용할지 여부를 결정할 수 있습니다.

이 정보를 사용하여 서버는 {{Glossary("resource isolation policy", "리소스 격리 정책")}}을 구현할 수 있고, 이를 통해 외부 사이트에서는 공유하기로 의도된, 적절하게 사용되는 리소스만 요청할 수 있습니다. 이 접근 방식은 {{Glossary("CSRF")}}, 교차 사이트 스크립트 포함(Cross-site Script Inclusion, 'XSSI'), 타이밍 공격 및 교차 출처 정보 유출(cross-origin information leaks)과 같이, 일반적인 교차 사이트 웹 취약점을 완화하는 데 도움이 될 수 있습니다.

이 헤더에는 `Sec-` 접두사가 붙어서, {{Glossary("Forbidden header name", "금지 헤더 목록")}}이 있습니다. 따라서 금지 헤더 목록은 JavaScript가 수정할 수 없습니다.

메타데이터 가져오기 요청 헤더는 아래와 같습니다.

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

아래 요청 헤더는 동일한 명세서에 있지 않기 때문에, 엄격히 '메타데이터 가져오기 요청 헤더'는 아니지만, 비슷하게 리소스가 사용되는 방식에 대한 맥락 정보를 제공합니다.
서버는 이를 사용하여 캐싱 동작 및 반환되는 정보를 수정할 수 있습니다.

- {{HTTPHeader("Sec-Purpose")}} {{Experimental_Inline}}
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}

## 같이 보기

- web.dev의[메타데이터 가져오기를 사용해 웹 공격으로부터 리소스를 보호하세요](https://web.dev/fetch-metadata/)
- [메타데이터 가져오기 요청 헤더 플레이그라운드](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
- [모든 HTTP 헤더 목록](/ko/docs/Web/HTTP/Reference/Headers)
- [모든 HTTP 헤더 > 메타데이터 가져오기 요청 헤더 목록](/ko/docs/Web/HTTP/Reference/Headers#fetch_metadata_request_headers)
- [용어사전](/ko/docs/Glossary)
  - {{Glossary("Representation header", "Representation 헤더")}}
  - {{Glossary("HTTP_header","HTTP 헤더")}}
  - {{Glossary("Response header", "Response 헤더")}}
  - {{Glossary("Request header", "Request 헤더")}}
