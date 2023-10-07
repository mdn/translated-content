---
title: 요청 헤더
slug: Glossary/Request_header
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**요청 헤더**는 서버가 응답을 맞춤화할 수 있도록 요청 컨텍스트에 대한 정보를 제공하기 위해 HTTP 요청에서 사용할 수 있는 {{glossary("HTTP header", "HTTP 헤더")}}입니다. 예를 들어, {{HTTPHeader("Accept", "Accept-*")}} 헤더는 허용되는 응답 방식과 선호되는 형식을 나타냅니다. 다른 헤더는 인증 자격 증명(예: {{HTTPHeader("Authorization")}})을 제공하거나, 캐싱을 제어하거나, 사용자 에이전트 또는 리퍼러에 대한 정보를 가져오는 데 사용될 수 있습니다.

요청에 나타날 수 있는 모든 헤더가 명세에 따라, "요청 헤더"로 참조되는 것은 아닙니다. 예를 들어, {{HTTPHeader("Content-Type")}} 헤더는 {{glossary("representation header")}}라고 합니다.

또한, [CORS](/ko/docs/Glossary/CORS)는 요청 헤더의 하위 집합을 {{glossary('simple header', 'simple 헤더')}}로 정의하고, 항상 인증된 것으로 간주되며 {{glossary("preflight request", "프리플라이트 요청")}}에 대한 응답에 명시적으로 나열되지 않는 요청 헤더를 정의합니다.

아래의 HTTP 메시지는 {{HTTPMethod("GET")}} 요청 이후의 몇 가지 요청 헤더를 보여줍니다.

```http
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```

## 같이 보기

- [모든 HTTP 헤더 목록](/ko/docs/Web/HTTP/Headers)
- [RFC 9110, section 6.3: 헤더 필드](https://httpwg.org/specs/rfc9110.html#header.fields)
