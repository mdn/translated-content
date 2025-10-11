---
title: 101 Switching Protocols
slug: Web/HTTP/Reference/Status/101
original_slug: Web/HTTP/Status/101
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

HTTP **`101 Switching Protocols`** 응답 코드는 서버가 전환되는 프로토콜을 가리킵니다. 프로토콜은
클라이언트로부터 받은 {{HTTPHeader("Upgrade")}} 헤더에 명시되어 있습니다.

서버는 이 응답에 전환된 프로토콜을 나타내는 {{HTTPHeader("Upgrade")}} 헤더를 포함합니다. 이 절차는
[프로토콜 업그레이드 메커니즘](/ko/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism) 문서에 설명되어 있습니다.

## 상태

```http
101 Switching Protocols
```

## 예제

전환되는 프로토콜은 [WebSockets](/ko/docs/Web/API/WebSockets_API)와 함께
사용할 수 있습니다.

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

## 명세서

{{Specifications}}

## 같이 보기

- [프로토콜 업그레이드 메커니즘](/ko/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- [웹소켓](/ko/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426")}} `Upgrade Required`
