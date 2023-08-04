---
title: Host
slug: Web/HTTP/Headers/Host
---

{{HTTPSidebar}}

**`Host`** 요청 헤더는 (가상 호스팅을 위해) 서버의 도메인명과 서버가 리스닝하는 (부가적인) TCP 포트를 특정합니다.

포트가 주어지지 않으면, 요청된 서버의 기본 포트(예를 들어, HTTP URL은 "80")를 의미합니다.

`Host` 헤더의 필드는 모든 HTTP/1.1 요청 메시지 내에 포함되어 전송되어야 합니다. `Host` 헤더 필드가 없거나 한 개 이상의 필드를 포함하는 HTTP/1.1 요청 메시지에 대해서는 {{HTTPStatus("400")}} (Bad Request) 상태 코드가 전송될 것입니다.

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

## 문법

```
Host: <host>:<port>
```

## 디렉티브

- \<host>
  - : (가상 호스팅에 대한) 서버의 도메인 이름.
- \<port> {{optional_inline}}
  - : 서버가 리스닝하는 TCP 포트 번호.

## 예제

```
Host: developer.mozilla.org
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPStatus("400")}}
