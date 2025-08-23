---
title: Allow
slug: Web/HTTP/Reference/Headers/Allow
original_slug: Web/HTTP/Headers/Allow
---

**`Allow`** 헤더는 리소스가 지원하는 메소드 집합을 나열합니다.

어떤 요청 메소드를 사용할 수 있는지 알리기 위해 서버가 {{HTTPStatus("405")}} `Method Not Allowed` 상태코드로 응답할 경우에 이 헤더를 반드시 보내야 합니다. 비어있는 `Allow` 헤더는 리소스가 어떤 요청 메소드도 허용하지 않음을 나타냅니다. 예를 들어, 특정 리소스에 대해 일시적으로 발생할 수도 있는 요청 메소드조차 허용하지 않음을 나타냅니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Entity header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 구문

```
Allow: <http-methods>
```

## 지시어

- \<http-methods>
  - : 쉼표로 구분한 허용된 [HTTP request methods](/ko/docs/Web/HTTP/Reference/Methods) 목록.

## 예제

```
Allow: GET, POST, HEAD
```

## 명세

{{Specifications}}

## 더보기

- {{HTTPStatus("405")}}
- {{HTTPHeader("Server")}}
