---
title: 응답 헤더
slug: Glossary/Response_header
---

**응답 헤더**는 HTTP 응답에서 사용될 수 있는 {{glossary("header", "HTTP 헤더")}}이며, 메시지의 컨텐츠와는 관련이 없습니다. {{HTTPHeader("Age")}}, {{HTTPHeader("Location")}} 또는 {{HTTPHeader("Server")}}와 같은 응답 헤더는 더 상세한 응답의 컨텍스트를 제공하기위해 사용됩니다.

응답에 나타나는 모든 헤더가 *응답 헤더*인것은 아닙니다. 예를 들어, {{HTTPHeader("Content-Length")}} 헤더는 응답 메시지 바디의 크기를 참조하는 {{glossary("entity header")}}입니다. 그러나 이러한 엔티티 요청은 보통 컨텍스트에서 응답 헤더로 불립니다.

다음은 {{HTTPMethod("GET")}} 요청 이후의 몇 가지 응답 헤더를 보여줍니다. 엄밀히 말하면, {{HTTPHeader("Content-Encoding")}}과 {{HTTPHeader("Content-Type")}} 헤더는 {{glossary("entity header")}}임을 유의하세요.

```
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

## 더 알아보기

### 기술적 지식

- [모든 HTTP 헤더 목록](/ko/docs/Web/HTTP/Headers)
