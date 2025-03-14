---
title: Accept-Language
slug: Web/HTTP/Headers/Accept-Language
---

{{HTTPSidebar}}

**`Accept-Language`** 요청 HTTP 헤더는 어떤 언어를 클라이언트가 이해할 수 있는지, 그리고 지역 설정 중 어떤 것이 더 선호되는지를 알려줍니다. (여기서 언어란 프로그래밍 언어가 아니라 영어같은 자연 언어를 의미합니다.) [컨텐츠 협상](/ko/docs/Web/HTTP/Content_negotiation)을 사용하여, 서버는 제안 중 하나를 선택한 뒤, 그것을 사용하고 {{HTTPHeader("Content-Language")}} 응답 헤더와 함께 선택된 내용을 클라이언트에게 알려줍니다. 브라우저는 사용자 인터페이스 언어에 따라 해당 헤더에 적절한 값을 설정하며 사용자가 사용자 인터페이스 언어를 변경한 경우조차도, 헤더의 값이 변경되는 일은 거의 없습니다(그리고 그런 일이 일어나게 되면 흔적이 남으므로 눈살을 찌프리게 됩니다).

이 헤더는 서버가 언어를 결정할 다른 방도(명시적인 사용자 결정에 의한 구체적인 URL과 같은)를 찾지 못한 경우 사용되는 힌트입니다. 서버는 명시적인 결정을 결코 재정의해서는 안됩니다. `Accept-Language`의 내용은 대게 사용자에 의해 좌지우지되지 못합니다(다른 나라의 인터넷 카페를 방문하여 사용하는 경우처럼); 사용자는 그들의 사용자 인터페이스의 로케일과는 다른 언어로 된 페이지에 방문하고 싶어 할 수도 있습니다.

서버가 일치되는 어떤 언어로 서브할 수 없는 경우, 이론적으로 {{HTTPStatus("406")}} (Not Acceptable) 오류 코드를 회신하게 됩니다. 그러나, 좀 더 나은 사용자 경험을 위해, 이런 경우는 드물며 그런 경우에 가장 흔한 방법은 `Accept-Language` 헤더를 무시하는 것입니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 유형</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple header", "CORS-safelisted request-header")}}
      </th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 문법

```
Accept-Language: <language>
Accept-Language: <locale>
Accept-Language: *

// Multiple types, weighted with the {{glossary("quality values", "quality value")}} syntax:
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

## 디렉티브

- `<language>`
  - : 2개 혹은 3개 문자로 이루어진 문자열로 표현되는 언어
- `<locale>`
  - : 전체적인 언어 태그. language 그 자체에 추가로, `'-'`뒤에 추가적인 내용을 담을 수도 있습니다. 가장 일반적인 추가 정보는 ('en-US'와 같은) 국가 변수값(variant) 혹은 사용을 위한 (`'sr-Lat'`와 같은) 알파벳 유형이 있습니다. 철자법 타입과 같은 다른 변형들(`'de-DE-1996'`)은 보통 이 헤더의 맥락에서는 사용되지 않습니다. Other variants like the type of orthography (`'de-DE-1996'`)
- `*`
  - : 어떤 언어든지 상관없음; 와일드카드처럼 사용되는 `'*'`.
- `;q=` (q-인자 가중치)
  - : *weight*라고 불리는 상대적 [품질 값](/ko/docs/Glossary/Quality_values)을 사용해 표현되는 선호도에 따라 대체되는 값.

## 예제

```
Accept-Language: de

Accept-Language: de-CH

Accept-Language: en-US,en;q=0.5
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- HTTP [컨텐츠 협상](/ko/docs/Web/HTTP/Content_negotiation)
- 컨텐츠 협상의 결과로 나오는 헤더: {{HTTPHeader("Content-Language")}}
- 다른 유사한 헤더들: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept")}}
