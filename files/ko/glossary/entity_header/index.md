---
title: 엔티티 헤더
slug: Glossary/Entity_header
---

엔티티 헤더는 메시지 바디의 컨텐츠를 나타내는 {{glossary("header", "HTTP 헤더")}}입니다. 엔티티 헤더는 HTTP 요청 및 응답 모두에서 사용됩니다. {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Encoding")}}과 같은 헤더는 엔티티 헤더입니다.

엔티티 헤더가 요청이나 응답 헤더가 아님에도 불구하고, 이러한 용어로 종종 포함됩니다.

다음 예시에서, {{HTTPHeader("Content-Length")}}는 엔티티 헤더지만, {{HTTPHeader("Host")}}와 {{HTTPHeader("User-Agent")}}는 {{glossary("request header", "request 헤더")}}입니다:

```
    POST /myform.html HTTP/1.1
    Host: developer.mozilla.org
    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
    Content-Length: 128
```

## 더 알아보기

### 기술적 지식

- [모든 HTTP 헤더의 목록](/ko/docs/Web/HTTP/Headers)
