---
title: 금지된 헤더 이름
slug: Glossary/Forbidden_header_name
---

**금지된 헤더 이름**은 프로그래밍 방식으로 수정할 수 없는 [HTTP 헤더](/ko/docs/Web/HTTP/Headers)의 이름입니다. 특히, HTTP **요청** 헤더 이름이 이에 해당합니다.({{Glossary("Forbidden response header name")}}과 대조됩니다.)

이러한 헤더는 사용자 에이전트가 헤더에 대한 모든 권한을 보유하므로 수정할 수 없습니다. `Sec-`로 시작하는 이름은 {{domxref("XMLHttpRequest")}}와 같이 개발자에게 헤더에 대한 제어 권한을 부여하는 [fetch algorithm](https://fetch.spec.whatwg.org/#concept-fetch)을 사용하여 API로부터 안전한 새 헤더를 만들기 위해 예약됩니다.

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
- {{HTTPHeader("Feature-Policy")}}
- {{HTTPHeader("Host")}}
- {{HTTPHeader("Keep-Alive")}}
- {{HTTPHeader("Origin")}}
- `Proxy-`
- `Sec-`
- {{HTTPHeader("Referer")}}
- {{HTTPHeader("TE")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Upgrade")}}
- {{HTTPHeader("Via")}}

> **Note:** {{HTTPHeader("User-Agent")}} 헤더는 [사양](https://fetch.spec.whatwg.org/#terminology-headers)(참고: 금지된 헤더 이름 목록. Firefox 43에서 구현됨)에 따라 더 이상 금지되지 않습니다. 이제 Fetch [Headers](/ko/docs/Web/API/Headers) 객체 또는 `XMLHttpRequest`의 [setRequestHeader()](/ko/docs/Web/API/XMLHttpRequest/setRequestHeader) 메소드에서 설정할 수 있습니다. 그러나 Chrome은 Fetch 요청에서 이 헤더를 자동으로 삭제합니다([Chromium bug 571722](https://bugs.chromium.org/p/chromium/issues/detail?id=571722) 참조).

## 같이 보기

{{Glossary("Forbidden response header name")}} (Glossary)
