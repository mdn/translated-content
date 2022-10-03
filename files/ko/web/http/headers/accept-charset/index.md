---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
translation_of: Web/HTTP/Headers/Accept-Charset
---
{{HTTPSidebar}}

**`Accept-Charset`** 요청 HTTP 헤더는 클라이언트가 이해할 수 있는 캐릭터셋이 무엇인지를 알려줍니다. [컨텐츠 협상](/ko/docs/Web/HTTP/Content_negotiation)을 사용하여, 서버는 제안된 것 중 하나를 선택하고, 사용하며 {{HTTPHeader("Content-Type")}} 응답 헤더를 통해 선택된 캐릭터셋을 클라이언트에게 알려줍니다. 브라우저들은 각각의 컨텐츠 타입에 대한 기본 값이 일반적으로 정확하고 그것을 전송하는 것이 더 쉽게 행적을 남기게 될 가능성이 있으므로 이 헤더를 설정하지 않습니다.

서버가 일치하는 캐릭터셋을 서브하지 못할 경우, 이론적으로 {{HTTPStatus("406")}} (Not Acceptable) 오류 코드를 회신할 수 있습니다. 그러나, 더 나은 사용자 경험을 위해, 그런 경우는 드물며 더 일반적인 방법은 이런 경우 `Accept-Charset` 헤더를 무시하는 겁니다.

> **참고:** HTTP/1.1 초기 버전에서는, 기본 캐릭터셋(`ISO-8859-1`)이 정의됐었습니다. 더 이상 실제로 그렇지 않으며 이제 각각의 컨텐츠 타입이 기본 값을 가지고 있을 수도 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 문법

```
Accept-Charset: <charset> // Multiple types, weighted with the {{glossary("quality values", "quality value")}} syntax: Accept-Charset: utf-8, iso-8859-1;q=0.5
```

## 디렉티브

- `<charset>`
  - : `utf-8` 혹은 `iso-8859-15`와 같은 캐릭터셋.
- `*`
  - : 헤더 내 다른 곳에서 언급되지 않은 모든 캐릭터셋; 와일드카드로 사용되는`'*'.`
- `;q=` (q-인자 가중치)
  - : *weight*라고 불리는 상대적 [품질 값](/ko/docs/Glossary/Quality_values)을 사용해 표현되는 선호도에 따라 대체되는 값.

## 예제

```
Accept-Charset: iso-8859-1

Accept-Charset: utf-8, iso-8859-1;q=0.5

Accept-Language: utf-8, iso-8859-1;q=0.5, *;q=0.1
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- HTTP [컨텐츠 협상](/ko/docs/Web/HTTP/Content_negotiation)
- 컨텐츠 협상 결과를 이용하는 헤더: {{HTTPHeader("Content-Type")}}
- 다른 유사한 헤더들: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}
