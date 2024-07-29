---
title: CORS 허용 목록에 있는 응답 헤더 (CORS-safelisted response header)
slug: Glossary/CORS-safelisted_response_header
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

'CORS 허용 목록에 있는 응답 헤더 (CORS-safelisted response header)'는 클라이언트 스크립트에 노출되어도 '안전'하다고 생각되는 [CORS](/ko/docs/Web/HTTP/CORS) 응답의 [HTTP 헤더](/ko/docs/Web/HTTP/Headers)입니다. 허용된 응답 헤더만 웹페이지에서 사용할 수 있습니다.

기본적으로, 허용 목록에는 다음과 같은 응답 헤더가 포함됩니다.

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

{{HTTPHeader("Access-Control-Expose-Headers")}}를 사용하여 허용 목록에 부가적인 헤더를 추가할 수 있습니다.

> **참고:** {{HTTPHeader("Content-Length")}}헤더는 허용된 원래 응답 헤더 집합의 일부가 아닙니다. \[[ref](https://github.com/whatwg/fetch/pull/626)]를 참고해주세요.

## 예제

### 허용 목록의 확장

{{HTTPHeader("Access-Control-Expose-Headers")}} 헤더를 사용하여 CORS 허용 목록에 있는 응답 헤더 목록을 확장할 수 있습니다.

```http
Access-Control-Expose-Headers: X-Custom-Header, Content-Encoding
```

## 같이 보기

- [HTTP](/ko/docs/Web/HTTP)
- [HTTP headers](/ko/docs/Web/HTTP/Headers)
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- [용어사전](/ko/docs/Glossary)

  - {{Glossary("CORS")}}
  - {{Glossary("CORS-safelisted_request_header", "CORS 허용 목록에 있는 요청 헤더")}}
  - {{Glossary("Forbidden header name", "금지된 헤더 이름")}}
  - {{Glossary("Request header", "요청 헤더")}}
