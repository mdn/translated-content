---
title: Origin
slug: Web/HTTP/Reference/Headers/Origin
original_slug: Web/HTTP/Headers/Origin
---

**`Origin`** request 헤더는 fetch가 시작되는 위치입니다. 경로 정보는 포함하지 않고 서버 이름만 포함합니다. {{HTTPMethod("POST")}} requests에 포함되는 것처럼, {{Glossary("CORS")}} requests 와 함께 전송합니다. {{HTTPHeader("Referer")}} 헤더와 비슷하지만, origin 헤더는 전체 경로를 공개하지 않습니다.

> [!NOTE]
> **주의**: {{HTTPMethod("HEAD")}} 와 {{HTTPMethod("GET")}} 메서드를 통해 {{domxref("fetch()")}}를 사용할 때 {{httpheader("Origin")}} 헤더가 설정되지 않았습니다. (이 문제는 Firefox 65에서 수정되었습니다 — [Firefox bug 1508661](https://bugzil.la/1508661)참조).

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
Origin: null
Origin: <scheme> "://" <hostname> [ ":" <port> ]
```

## 지시

- \<scheme>
  - : 사용하는 프로토콜. 일반적으로 HTTP 프로토콜 혹은 보안 버전인 HTTPS를 사용합니다.
- \<hostname>
  - : 서버(가상 호스팅)의 이름 또는 IP 입니다.
- \<port> {{optional_inline}}
  - : 서버와 연결을 맺기 위한 TCP 포트 번호. 포트번호를 입력하지 않으면, 요청한 서비스의 기본 포트(HTTP의 경우 "80")가 사용됩니다.

## 예제

```
Origin: https://developer.mozilla.org
```

## 명세

{{Specifications}}

## 브라우저 적합성

{{Compat}}

## See also

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Referer")}}
- [Same-origin policy](/ko/docs/Web/Security/Same-origin_policy)
