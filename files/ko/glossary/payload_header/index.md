---
title: 페이로드 헤더 (Payload header)
slug: Glossary/Payload_header
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**페이로드 헤더(payload header)** 는 하나 이상의 메시지에서 원래 리소스 {{Glossary("Representation header", "표현")}}의 안전한 전송 및 재구성과 관련된 페이로드 정보를 설명하는 {{Glossary("HTTP_header", "HTTP 헤더")}}입니다. 페이로드 헤더에는 메시지 페이로드의 길이, 이 페이로드에 전달되는 리소스 부분(다중 부분 메시지의 경우), 전송에 적용되는 인코딩, 메시지 무결성 검사 등과 같은 정보가 포함됩니다.

페이로드 헤더는 HTTP 요청 및 응답 메시지 모두(즉, 페이로드 데이터를 전달하는 모든 메시지)에 존재할 수 있습니다.

페이로드 헤더는 {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("Trailer")}} 및 {{HTTPHeader("Transfer-Encoding")}}을 포함합니다.

## 같이 보기

- [모든 HTTP 헤더 목록](/ko/docs/Web/HTTP/Headers)

  - {{HTTPHeader("Content-Length")}}
  - {{HTTPHeader("Content-Range")}}
  - {{HTTPHeader("Trailer")}}
  - {{HTTPHeader("Transfer-Encoding")}}
  - {{Glossary("Representation header")}}

- [RFC 7231, section 3.3: Payload semantics](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
