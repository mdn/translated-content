---
title: 요청 헤더
slug: Glossary/Request_header
---
**요청 헤더**는 HTTP 요청에서 사용되지만 메시지의 컨텐츠와는 관련이 없는 {{glossary("header", "HTTP 헤더")}}입니다. {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language", "Accept-*")}}, {{HTTPHeader("If-Modified-Since", "If-*")}}와 같은 요청 헤더들은 조건부 요청 수행을 허용합니다. {{HTTPHeader("Cookie")}}, {{HTTPHeader("User-Agent")}}, {{HTTPHeader("Referer")}}와 같은 다른 것들은 컨텍스트를 정확히 나타내어 서버가 응답에 맞출 수 있게합니다.

요청에 나타나는 모든 헤더가 요청 헤더인것은 아닙니다. 예를 들면, {{HTTPMethod("POST")}} 요청에 나타나는 {{HTTPHeader("Content-Length")}}는 실제로 요청 메시지 바디의 크기를 참조하는 {{glossary("entity header")}}입니다. 하지만, 이러한 엔티티 헤더는 종종 컨텍스트와 같은 요청 헤더라 불립니다.

부가적으로, [CORS](/ko/docs/Glossary/CORS)는 요청 헤더의 하위 집합을 {{glossary('simple header', 'simple 헤더')}}로 정의하고, 항상 인증된것으로 고려되며 {{glossary("preflight request", "preflight")}} 요청에 대한 응답에 명시적으로 나열되지않는 요청 헤더를 정의합니다.

{{HTTPMethod("GET")}} 요청 이후의 몇 가지 요청 헤더입니다.

```
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

엄밀히 말해서, 이 예시의 {{HTTPHeader("Content-Length")}} 헤더는 다른 것들처럼 요청 헤더가 아니며 {{glossary("entity header")}}입니다.

```
    POST /myform.html HTTP/1.1
    Host: developer.mozilla.org
    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
    Content-Length: 128
```

## 더 알아보기

### 기술적 지식

- [모든 HTTP 헤더 목록](/ko/docs/Web/HTTP/Headers)
