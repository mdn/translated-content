---
title: 헤더
slug: Glossary/HTTP_header
---

**HTTP 헤더**는 부가적인 정보를 전달하는 HTTP 요청 또는 응답 필드로, 메시지나 바디의 의미를 변경하거나 미리 조정합니다. 헤더는 대소문자를 구별하지 않으며, 줄의 처음에서 시작하여 바로 다음에 `':'`과 헤더에 해당하는 값이 따라옵니다. 값은 다음 CR 또는 메시지의 마지막에서 끝납니다.

더 이상 어떠한 명세에도 포함되어 있지 않지만, 전통적으로, 헤더는 카테고리로 분류됩니다.

- {{Glossary("General header")}}: 요청 및 응답 모두에 적용되지만 최종적으로 바디에 전송되는 것과는 관련이 없는 헤더입니다.
- {{Glossary("Request header")}}: 페치될 리소스나 클라이언트 자체에 대한 상세 정보를 포함하는 헤더입니다.
- {{Glossary("Response header")}}: 위치나 서버 자체(이름, 버전, ...)와 같은 응답에 대한 부가적인 정보를 갖는 헤더입니다.
- {{Glossary("Entity header")}}: 컨텐츠 길이나 MIME 타입과 같은 엔티티의 바디에 대한 상세 정보를 포함하는 헤더입니다.

하나의 헤더를 갖는 기본 요청:

```
    GET /example.http HTTP/1.1
    Host: example.com
```

리다이렉트는 필수 헤더를 갖습니다({{HTTPHeader("Location")}}):

```
    302 Found
    Location: /NewPage.html
```

대표적인 헤더의 집합:

```
    304 Not Modified
    Access-Control-Allow-Origin: *
    Age: 2318192
    Cache-Control: public, max-age=315360000
    Connection: keep-alive
    Date: Mon, 18 Jul 2016 16:06:00 GMT
    Server: Apache
    Vary: Accept-Encoding
    Via: 1.1 3dc30c7222755f86e824b93feb8b5b8c.cloudfront.net (CloudFront)
    X-Amz-Cf-Id: TOl0FEm6uI4fgLdrKJx0Vao5hpkKGZULYN2TWD2gAWLtr7vlNjTvZw==
    X-Backend-Server: developer6.webapp.scl3.mozilla.com
    X-Cache: Hit from cloudfront
    X-Cache-Info: cached
```

## 더 알아보기

### 일반 지식

- HTTP 명세의 [headers](https://tools.ietf.org/html/rfc7230#section-3.2) 구문

### 기술적 지식

- [모든 HTTP 헤더의 목록](/ko/docs/Web/HTTP/Headers)
