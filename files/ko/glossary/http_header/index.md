---
title: 헤더
slug: Glossary/HTTP_header
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**HTTP 헤더**는 요청이나 응답에 관해서 부가적인 정보를 전달하는 HTTP 요청 또는 응답 필드입니다. 예를 들어, 요청 메시지는 헤더를 사용하여 선호하는 미디어 형식을 나타낼 수 있는 반면, 응답은 헤더를 사용하여 반환된 본문의 미디어 형식을 나타낼 수 있습니다. 헤더는 대소문자를 구분하지 않으며, 줄의 처음에서 시작하여 바로 뒤에 `':'`과 헤더에 의존성이 있는 값이 따라옵니다. 값은 다음 CR 또는 메시지의 마지막에서 끝납니다.

HTTP 및 Fetch 명세는 다음을 포함하여 여러 header 종류를 나타냅니다.

- {{Glossary("Request header")}}: 가져올 리소스 또는 클라이언트 자체에 대한 상세 정보를 포함하는 헤더입니다.
- {{Glossary("Response header")}}: 위치나 서버 자체(이름, 버전, ...)와 같은 응답에 대한 부가적인 정보를 갖는 헤더입니다.
- {{Glossary("Representation header")}}: 메시지 본문 리소스에 대한 메타데이터 (e.g. 인코딩, 미디어 유형 등).
- {{Glossary("Fetch metadata request header")}}: 메시지 본문의 리소스에 대한 메타데이터가 포함된 헤더(e.g. 인코딩, 미디어 유형 등).

하나의 헤더를 갖는 기본 요청입니다.

```http
GET /example.html HTTP/1.1
Host: example.com
```

리다이렉트는 필수 헤더를 갖습니다({{HTTPHeader("Location")}}).

```http
302 Found
Location: /NewPage.html
```

대표적인 헤더의 집합은 아래와 같습니다.

```http
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

> [!NOTE]
> 이전 버전의 명세는 다음을 참조합니다.
>
> - {{Glossary("General header")}}: 요청과 응답 모두에 적용되지만 결국 본문에서 전송되는 데이터와 관련이 없는 헤더입니다.
> - {{Glossary("Entity header")}}: 콘텐츠 길이 또는 MIME 유형과 같은 엔터티 본문에 대한 추가 정보를 포함하는 헤더(이것은 현재 Representation metadata 헤더라고 하는 것의 상위 집합)입니다.

## 같이 보기

- [모든 HTTP headers 목록](/ko/docs/Web/HTTP/Headers)
- HTTP 명세의 [headers](https://tools.ietf.org/html/rfc7230#section-3.2) 구문
- [용어 사전](/ko/docs/Glossary)

  - {{Glossary("HTTP header")}}
  - {{Glossary("Request header")}}
  - {{Glossary("Response header")}}
  - {{Glossary("Representation header")}}
  - {{Glossary("Fetch metadata request header")}}
  - {{Glossary("Forbidden header name")}}
  - {{Glossary("Forbidden response header name")}}
  - {{Glossary("CORS-safelisted request header")}}
  - {{Glossary("CORS-safelisted response header")}}
