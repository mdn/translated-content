---
title: 금지된 헤더 이름
slug: Glossary/Forbidden_request_header
original_slug: Glossary/Forbidden_header_name
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**금지된 헤더 이름**은 프로그래밍 방식으로 수정할 수 없는 [HTTP 헤더](/ko/docs/Web/HTTP/Reference/Headers)의 이름입니다. 정확히는 {{Glossary("Forbidden response header name", "금지된 응답 헤더 이름")}}과 대비되는 HTTP **요청** 헤더 이름입니다.

이러한 헤더는 사용자 에이전트가 헤더에 대한 모든 권한을 보유하므로 수정할 수 없습니다. `Sec-`로 시작하는 이름은 개발자에게 헤더에 대한 제어 권한을 부여하는 [취득 알고리즘](https://fetch.spec.whatwg.org/#concept-fetch)을 사용하는 API({{domxref("XMLHttpRequest")}} 등)로부터 안전한 새 헤더를 만들때 사용하기 위해 예약되어 있습니다.

금지된 헤더 이름은 `Proxy-` 또는 `Sec-` 로 시작하거나 아래 이름 중 하나입니다.

- {{HTTPHeader("Accept-Charset")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Cookie")}}
- {{HTTPHeader("Date")}}
- {{HTTPHeader("DNT")}}
- {{HTTPHeader("Expect")}}
- {{HTTPHeader("Host")}}
- {{HTTPHeader("Keep-Alive")}}
- {{HTTPHeader("Origin")}}
- {{HTTPHeader("Permissions-Policy")}}
- `Proxy-`
- `Sec-`
- {{HTTPHeader("Referer")}}
- {{HTTPHeader("TE")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Upgrade")}}
- {{HTTPHeader("Via")}}

> [!NOTE]
> 위 목록에 없는 {{HTTPHeader("User-Agent")}} 헤더는 금지됐었으나 [명세](https://fetch.spec.whatwg.org/#terminology-headers)에 따라 (금지된 헤더 이름 목록 참조(Firefox 43에서 구현됨))이제 사용할 수 있습니다. 따라서 Fetch API [`Headers`](/ko/docs/Web/API/Headers) 객체나 `XMLHttpRequest`의 [`setRequestHeader()`](/ko/docs/Web/API/XMLHttpRequest/setRequestHeader) 메서드로 설정 가능합니다. 그러나 Chrome은 Fetch 요청에서 `User-Agent` 헤더를 조용하게 제거하고 있습니다. [Chromium bug 571722](https://crbug.com/571722)를 참고하세요.

## 같이 보기

{{Glossary("Forbidden response header name", "금지된 응답 헤더 이름")}} (용어 사전)
