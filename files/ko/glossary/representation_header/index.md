---
title: 표현 헤더 (Representation header)
slug: Glossary/Representation_header
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**표현 헤더 (representation header)** 는 HTTP 메시지 본문으로 전송된 리소스의 특정 '표현'을 설명하는 {{glossary("HTTP_header", "HTTP 헤더")}}입니다.

표현은 특정 리소스의 다양한 형태입니다.
예를 들어, 동일한 데이터가 XML 또는 JSON과 같은 특정 미디어 타입으로 형식화되거나, 작성된 언어 또는 지리적 지역으로 지역화되거나, 전송을 위해 압축되거나 인코딩될 수 있습니다.
기본 리소스는 각 경우에 동일하지만, 표현은 다릅니다.

클라이언트는 [콘텐츠 협상(content negotiation)](/ko/docs/Web/HTTP/Guides/Content_negotiation) (`Accept-*` 헤더 사용) 중에 전송되기를 선호하는 형식을 지정하고, 표현 헤더는 실제로 수신한 '선택된 표현'의 형식을 클라이언트에게 알려줍니다.

표현 헤더는 HTTP 요청과 응답 메시지 모두에 존재할 수 있습니다. `HEAD` 요청에 대한 응답으로 전송되면, 리소스가 실제로 요청된 경우 '선택될' 본문 컨텐츠를 설명합니다.

표현 헤더는 {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Language")}} 및 {{HTTPHeader("Content-Location")}}를 포함합니다.

## 같이 보기

- [RFC 9110, section 3.2: Representations](https://httpwg.org/specs/rfc9110.html#representations)
- [모든 HTTP 헤더의 목록](/ko/docs/Web/HTTP/Reference/Headers)
- {{Glossary("Payload header")}}
- {{glossary("Entity header")}}
- {{HTTPHeader("Digest")}}/ {{HTTPHeader("Want-Digest")}}
