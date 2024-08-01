---
title: Upgrade
slug: Web/HTTP/Headers/Upgrade
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{HTTPSidebar}}

HTTP 1.1 전용 `Upgrade` 헤더는 이미 설정된 클라이언트/서버 연결을 다른 프로토콜로 업그레이드하는데 사용할 수 있습니다. 예를 들어서 클라이언트가 HTTP 1.1에서 HTTP 2.0으로 업그레이드하는데 사용하거나, HTTP 또는 HTTPS 연결을 웹소켓으로 업그레이드하는데 사용할 수 있습니다.

> [!WARNING]
> HTTP/2는 이 메커니즘의 사용을 명시적으로 허용하지 않고, HTTP/1.1에서만 명시적으로 허용합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>
        {{Glossary("Request header", "요청 헤더")}},
        {{Glossary("Response header", "응답 헤더")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "금지된 헤더 이름")}}</th>
      <td>예</td>
    </tr>
  </tbody>
</table>

## 개요

`Upgrade` 헤더 필드는 클라이언트가 서버에게 우선순위가 내림차순으로 나열된 프로토콜 중 하나로 전환할 것을 요청하는데 사용됩니다.

예를 들어 클라이언트는 전환할 선호 프로토콜(아래는 "example/1"과 "foo/2"인 경우)을 나열하여 다음과 같이 `GET` 요청을 보낼 수 있습니다.

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

> **참조:** `Upgrade`를 전송할 때마다 `Connection: upgrade`를 설정해야 합니다.

서버는 어떤 이유로든 요청을 무시하도록 선택할 수 있으며, 이 경우 {{HTTPStatus(200, "200 OK")}}와 같이 업그레이드 헤더가 전송되지 않은 것처럼 응답해야 합니다.

만약 서버가 연결을 업그레이드하기로 결정했으면 반드시 업그레이드해야 합니다.

1. 전환할 프로토콜을 명시하는 `Upgrade` 헤더와 함께 {{HTTPStatus(101, "101 Switching Protocols")}}를 반환합니다.

   ```http
   HTTP/1.1 101 Switching Protocols
   Upgrade: foo/2
   Connection: Upgrade
   ```

2. 새로운 프로토콜을 사용하여 원래 요청에 대한 응답을 보냅니다. 서버는 원래 요청을 완료할 수 있는 프로토콜로만 전환할 수 있습니다.

서버는 {{HTTPStatus("426")}} `Upgrade Required` 응답의 일부로 이 헤더를 보낼 수도 있으며, 이것은 서버가 현재 프로토콜을 사용하여 요청을 수행하지 않지만, 프로토콜이 변경되면 수행할 수 있음을 나타냅니다. 클라이언트는 위 프로세스를 사용하여 프로토콜 변경을 요청할 수 있습니다.

자세힌 내용과 예제는 [프로토콜 업그레이드 메커니즘](/ko/docs/Web/HTTP/Protocol_upgrade_mechanism) 항목에서 제공합니다.

## 구문

```http
Connection: upgrade
Upgrade: protocol_name[/protocol_version]
```

참조

- {{HTTPHeader("Connection")}} 헤더의 `upgrade` 유형은 항상 `Upgrade` 헤더와 함께 전송되어야 합니다.
- 프로토콜은 쉼표로 구분하여 선호도 기준 내림차순으로 나열됩니다. 프로토콜 버전은 선택사항입니다.

```http
Connection: upgrade
Upgrade: a_protocol/1, example, another_protocol/2.2
```

## 지시어

- 쉼표로 구분한 프로토콜 이름 목록 (선택적으로 버전 포함)
  - : 하나 이상의 프로토콜 이름과 버전(이름과 버전은 "/"로 구분). 프로토콜은 선호도 기준 내림차순으로 나열합니다.

## 예제

```http
Connection: upgrade
Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
```

```http
Connection: Upgrade
Upgrade: websocket
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [프로토콜 업그레이드 메커니즘](/ko/docs/Web/HTTP/Protocol_upgrade_mechanism)
- {{HTTPStatus("101")}} `Switching Protocol`
- {{HTTPStatus("426")}} `Upgrade Required`
- {{HTTPHeader("Connection")}}
