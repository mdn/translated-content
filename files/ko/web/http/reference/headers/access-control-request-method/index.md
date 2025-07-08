---
title: Access-Control-Request-Method
slug: Web/HTTP/Reference/Headers/Access-Control-Request-Method
original_slug: Web/HTTP/Headers/Access-Control-Request-Method
---

요청 헤더 **Access-Control-Request-Method**는 실제 요청이 만들어질 때 클라이언트가 보낼 수도 있는 [HTTP headers](/ko/docs/Web/HTTP/Reference/Headers)를 서버에게 알리기 위해 브라우저가 {{glossary("preflight request")}}를 발급(issue)할 때 사용됩니다. 사전 요청(preflight request)은 항상 {{HTTPMethod("OPTIONS")}}이며 실제 요청과 동일한 메소드를 사용하지 않으므로 이 헤더가 필요합니다.

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
Access-Control-Request-Method: <method>
```

## 지시어

- `<method>`
  - : [HTTP request methods](/ko/docs/Web/HTTP/Reference/Methods) 중 하나. 예를 들어 {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, 또는 {{HTTPMethod("DELETE")}}.

## 예제

```
Access-Control-Request-Method: POST
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더보기

- {{HTTPHeader("Access-Control-Request-Headers")}}
