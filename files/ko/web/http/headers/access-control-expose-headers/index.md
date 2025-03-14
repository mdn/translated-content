---
title: Access-Control-Expose-Headers
slug: Web/HTTP/Headers/Access-Control-Expose-Headers
---

{{HTTPSidebar}}

**`Access-Control-Expose-Headers`** 헤더를 통해 서버는 교차-출처 요청 (cross-origin request)에 대한 응답으로 브라우저에서 실행 중인 스크립트가 사용할 수 있는 응답 헤더를 지정할 수 있습니다.

기본적으로 {{Glossary("CORS-safelisted response header", "CORS 안전 목록 응답 헤더")}}만 노출됩니다. 클라이언트가 다른 헤더에 접근할 수 있도록 하려면 서버는 `Access-Control-Expose-Headers` 헤더를 사용하여 헤더를 나열해야 합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>{{Glossary("Response header", "응답 헤더")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "금지된 헤더 이름")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 문법

```http
Access-Control-Expose-Headers: [<header-name>[, <header-name>]*]
Access-Control-Expose-Headers: *
```

## 지침

- `<header-name>`
  - : 클라이언트가 응답에서 접근할 수 있는 헤더 이름 목록이며, 0개 이상의 콤마로 구분됩니다. {{Glossary("CORS-safelisted response header", "CORS 안전 목록 응답 헤더")}}에 추가 됩니다.
- `*` (와일드카드)
  - : `*`는 자격 증명이 없는 요청 ([HTTP 쿠키](/ko/docs/Web/HTTP/Cookies)나 HTTP 인증 정보가 없는 요청)에 대한 특별한 와일드카드 값으로 취급됩니다. 자격 증명이 있는 요청에서는 특별한 의미 없이 문자 그대로 헤더 이름 `*`로 취급됩니다.

## 예제

{{Glossary("CORS-safelisted response header", "CORS 안전 목록 응답 헤더")}}는 다음과 같습니다. {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, {{HTTPHeader("Last-Modified")}}, {{HTTPHeader("Pragma")}}.

{{Glossary("CORS-safelisted response header", "CORS 안전 목록 응답 헤더")}}에 없는 응답 헤더를 노출하려면 다음과 같이 지정할 수 있습니다.

```http
Access-Control-Expose-Headers: Content-Encoding
```

`Kuma-Revision`과 같은 사용자 지정 헤더를 추가로 표시하려면 여러 헤더를 콤마로 구분하여 지정할 수 있습니다.

```http
Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision
```

자격 증명이 없는 요청의 경우 서버는 와일드카드 값을 사용하여 응답하기도 합니다.

```http
Access-Control-Expose-Headers: *
```

하지만, {{HTTPHeader("Authorization")}} 헤더는 와일드카드로 지정할 수 없기 때문에 명시적으로 지정해야 합니다.

```http
Access-Control-Expose-Headers: *, Authorization
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
