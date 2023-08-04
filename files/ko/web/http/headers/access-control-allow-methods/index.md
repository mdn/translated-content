---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Headers/Access-Control-Allow-Methods
---

{{HTTPSidebar}}

**`Access-Control-Allow-Methods`** 헤더는 {{glossary("preflight request", "사전 요청")}}에 대한 응답으로 리소스에 접근할 때 허용되는 메서드를 지정합니다.

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
Access-Control-Allow-Methods: <method>, <method>, …
Access-Control-Allow-Methods: *
```

## 디렉티브

- `<method>`
  - : 허용된 [HTTP 요청 메서드](/ko/docs/Web/HTTP/Methods)의 목록이며 콤마로 구분됩니다.
- `*` (와일드카드)
  - : `*`는 자격 증명이 없는 요청 ([쿠키](/ko/docs/Web/HTTP/Cookies)나 HTTP 인증 정보가 없는 요청)에 대해서만 특수 와일드카드 값으로 취급됩니다. 자격 증명이 있는 요청에서는 특별한 의미를 갖지 않고 단순히 "\*"라는 메서드 이름으로 취급됩니다.

## 예제

```http
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Methods: *
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
