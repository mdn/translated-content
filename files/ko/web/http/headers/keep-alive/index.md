---
title: Keep-Alive
slug: Web/HTTP/Headers/Keep-Alive
---

{{HTTPSidebar}}{{Non-standard_header}}

**`Keep-Alive`** 일반 헤더는 송신자가 연결에 대한 타임아웃과 요청 최대 개수를 어떻게 정했는지에 대해 알려줍니다.

> **참고:** {{HTTPHeader("Connection")}} 헤더는 이 헤더를 위해 어떤 의미든 갖도록 "keep-alive"로 설정되어야 합니다. 또한, {{HTTPHeader("Connection")}}과 {{HTTPHeader("Keep-Alive")}}는 HTTP/2에서 무시됩니다; 연결 관리는 해당 프로토콜 내에서 다른 메커니즘에 의해 처리됩니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("General header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 문법

```
Keep-Alive: parameters
```

## 디렉티브

- _파라메터_

  - : 쉼표로 구분된 파라메터 목록으로, 각각 등호('=')로 구분되는 식별자와 값으로 구성됩니다. 다음은 사용 가능한 식별자들입니다:

    - `timeout`: 유휴 연결이 계속 열려 있어야 하는 _최소한의_ 시간(초 단위)을 가르킵니다. keep-alive TCP 메시지가 전송 계층에 설정되지 않는다면 TCP 타임아웃 이상의 타임아웃은 무시된다는 것을 알아두시기 바랍니다.
    - `max`: 연결이 닫히기 이전에 전송될 수 있는 최대 요청 수를 가리킵니다. 만약 `0`이 아니라면, 해당 값은 다음 응답 내에서 다른 요청이 전송될 것이므로 비-파이프라인 연결의 경우 무시됩니다. HTTP 파이프라인은 파이프라이닝을 제한하는 용도로 해당 값을 사용할 수 있습니다.

## 예제

Keep-Alive 헤더를 포함하는 응답:

```
HTTP/1.1 200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Thu, 11 Aug 2016 15:23:13 GMT
Keep-Alive: timeout=5, max=1000
Last-Modified: Mon, 25 Jul 2016 04:32:39 GMT
Server: Apache

(body)
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPHeader("Connection")}}
- [Connection management in HTTP/1.x](/ko/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
