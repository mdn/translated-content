---
title: 응답 헤더
slug: Glossary/Response_header
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**응답 헤더**는 HTTP 응답에서 사용될 수 있는 {{glossary("HTTP header", "HTTP 헤더")}}이며, 메시지의 컨텐츠와는 관련이 없습니다. {{HTTPHeader("Age")}}, {{HTTPHeader("Location")}} 또는 {{HTTPHeader("Server")}}와 같은 응답 헤더는 더 상세한 응답의 컨텍스트를 제공하기 위해 사용됩니다.

응답에 나타나는 모든 헤더가 "응답 헤더"인것은 아닙니다. 예를 들어, {{HTTPHeader("Content-Type")}} 헤더는 응답 메시지 본문({{HTTPHeader("Content-Encoding")}} 표현 헤더의 인코딩이 적용되기 전)의 원래 데이터 유형을 나타내는 {{glossary("representation header")}}입니다. 그러나, "대화적으로" 모든 헤더는 일반적으로 응답 메시지에서 응답 헤더로 참조됩니다.

다음은 {{HTTPMethod("GET")}} 요청 이후의 몇 가지 응답 헤더를 보여줍니다.

```http
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
Etag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: mykey=myvalue; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY
```

## 같이 보기

- [모든 HTTP 헤더 목록](/ko/docs/Web/HTTP/Headers)
- [용어 사전](/ko/docs/Glossary)

  - {{Glossary("Representation header")}}
  - {{Glossary("HTTP header")}}
  - {{Glossary("Response header")}}
  - {{Glossary("Fetch metadata response header")}}
  - {{Glossary("Request header")}}
