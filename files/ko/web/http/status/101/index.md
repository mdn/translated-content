---
title: 101 Switching Protocols
slug: Web/HTTP/Status/101
tags:
  - HTTP
  - HTTP Status Code
  - Informational
  - Reference
  - WebSockets
translation_of: Web/HTTP/Status/101
---
{{HTTPSidebar}}

HTTP **`101 Switching Protocols`**는 클라이언트가 {{HTTPHeader("Upgrade")}} 헤더를 통해 요청한 것에 따라 서버가 프로토콜을 바꾼다는 것을 알려주는 응답 코드입니다.

서버는 어떤 프로토콜로 바꾸는지를 응답의 {{HTTPHeader("Upgrade")}} 헤더에 담습니다. 구체적인 절차는 [프로토콜 업데이트 메커니즘](/ko/docs/Web/HTTP/Protocol_upgrade_mechanism)에 기술되어 있습니다.

## 상태

```
101 Switching Protocols
```

## 예제

**`101 Switching Protocols`**는 [WebSockets](/ko/docs/Web/API/WebSockets_API)와 함께 사용할 수 있습니다.

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

## 명세

{{Specifications}}

## 같이 보기

- [Protocol upgrade mechanism](/ko/docs/Web/HTTP/Protocol_upgrade_mechanism)
- [WebSockets](/ko/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426")}} `Upgrade Required`
