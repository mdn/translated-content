---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
---

{{HTTPSidebar}}

> **경고:** 이 헤더를 사용하지 마십시오. 브라우저는 이 헤더를 생략하고 서버는 이를 무시해야 합니다.

**`Accept-Charset`** 요청 HTTP 헤더는 클라이언트가 지원하는 {{glossary("character encoding", "문자 인코딩")}}을 알리는 헤더였습니다. 이는 더 이상 널리 사용되지 않습니다.

현재는 UTF-8이 잘 지원되고 있고 문자 인코딩을 위해 압도적으로 선호되는 선택입니다. [더 적은 설정 기반의 엔트로피(불확실성)를 통해 좀 더 나은 개인정보 보호를 보장하기 위해](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy), 모든 브라우저들은 `Accept-Charset` 헤더를 생략합니다. Chrome, Firefox, Internet Explorer, Opera, Safari는 이 헤더를 폐기했습니다.

오늘날 `Accept-Charset`은 널리 알려진 [금지된 헤더](/ko/docs/Glossary/Forbidden_header_name) 중 하나입니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>{{Glossary("Request header", "요청 헤더")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "금지된 헤더")}}</th>
      <td>예</td>
    </tr>
  </tbody>
</table>

## 함께 참고할 내용

- HTTP [컨텐츠 협상](/ko/docs/Web/HTTP/Content_negotiation)
- [Accept-Charset is no more](https://hsivonen.fi/accept-charset/)
- 컨텐츠 협상 결과를 이용하는 헤더: {{HTTPHeader("Content-Type")}}
- 다른 유사한 헤더들: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}
