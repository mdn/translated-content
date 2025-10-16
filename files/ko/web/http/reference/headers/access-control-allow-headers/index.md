---
title: Access-Control-Allow-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Headers
original_slug: Web/HTTP/Headers/Access-Control-Allow-Headers
---

**`Access-Control-Allow-Headers`** 는 {{HTTPHeader("Access-Control-Request-Headers")}}를 포함하는 {{glossary("preflight request")}}의 응답에 사용되는 헤더로, 실제 요청때 사용할 수 있는 HTTP 헤더의 목록을 나열합니다.

요청에 {{HTTPHeader("Access-Control-Request-Headers")}} 헤더가 포함되어 있을 경우, 이 헤더를 포함하여야 합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 구문

```
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
Access-Control-Allow-Headers: *
```

## 지시자

- `<header-name>`
  - : 지원하는 헤더의 이름입니다. 쉼표로 구분하여 원하는 만큼 헤더를 나열할 수 있습니다.
- `*` (와일드카드)
  - : "`*`" 값은 자격 증명이 없는 요청([쿠키](/ko/docs/Web/HTTP/Guides/Cookies) 혹은 HTTP 인증 정보가 없는 요청)일 경우 특수한 와일드 카드로 처리됩니다. 자격증명을 포함하는 경우 단순히 "`*`"라는 이름을 갖는 특별한 의미가 없는 헤더로 취급됩니다. 단, {{HTTPHeader("Authorization")}} 헤더는 와일드카드에 포함되지 않으며 명시적으로 나열해야 합니다.

## 예제

### 사용자 정의 헤더

다음은 `Access-Control-Allow-Headers` 헤더가 어떤 식으로 작성되는지에 대한 예시입니다. {{glossary("CORS-safelisted_request_header", "CORS에서 안전한 헤더")}}외에도 X-Custom-Header라는 사용자 정의 헤더가 서버에 대한 CORS 요청에 의해 지원됨을 나타냅니다.

```
Access-Control-Allow-Headers: X-Custom-Header
```

### 여러 개의 헤더

이 예시는 여러 개의 헤더를 지정할 때 Access-Control-Allow-Headers가 어떤 식으로 작성되는지 보여줍니다.

```
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### Preflight 요청 예시

사전 요청에서 `Access-Control-Allow-Headers` 이 사용된 경우의 예제를 보도록 합시다.

#### 요청

이 Preflight 요청은 Preflight 요청 헤더인 {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}} 및 {{HTTPHeader("Origin")}}, 이 세가지 Preflight 요청 헤더를 포함하는 {{HTTPMethod("OPTIONS")}} 요청입니다.

```
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: origin, x-requested-with
Origin: https://foo.bar.org
```

#### 응답

만약 서버가 {{HTTPMethod("DELETE")}} 메소드에 CORS 요청을 허용한다면 {{HTTPHeader("Access-Control-Allow-Methods")}}에 DELETE, 그리고 다른 지원하는 메소드를 포함하여 응답합니다.

```
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Max-Age: 86400
```

요청된 메소드가 지원되지 않으면 서버는 오류로 응답합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
