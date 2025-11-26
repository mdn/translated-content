---
title: Access-Control-Request-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Request-Headers
original_slug: Web/HTTP/Headers/Access-Control-Request-Headers
---

요청 헤더 **`Access-Control-Request-Headers`** 는 실제 요청이 만들어질 때 클라이언트가 보낼 수도 있는 [HTTP headers](/ko/docs/Web/HTTP/Reference/Headers)를 서버에게 알리기 위해 브라우저가 {{glossary("preflight request")}}를 발급(issue)할 때 사용됩니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 구문

```
Access-Control-Request-Headers: <header-name>, <header-name>, ...
```

## 지시어

- `<header-name>`
  - : 요청에 포함 된 [HTTP headers](/ko/docs/Web/HTTP/Reference/Headers)의 쉼표로 구분 한 목록.

## 예제

```
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더보기

- {{HTTPHeader("Access-Control-Request-Method")}}
