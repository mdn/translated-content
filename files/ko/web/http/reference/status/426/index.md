---
title: 426 Upgrade Required
slug: Web/HTTP/Reference/Status/426
original_slug: Web/HTTP/Status/426
---

HTTP **`426 Upgrade Required`** 클라이언트 에러 응답 코드는 서버가 현재 프로토콜을 사용하여 요청을 처리하는 것은
거부하지만 클라이언트가 다른 프로토콜로 업그레이드한 후에는 요청을 수행할 의향이 있음을 나타냅니다.

서버는 필요한 하나 이상의 프로토콜을 나타내기 위해 이 응답에 {{HTTPHeader("Upgrade")}} 헤더를 같이 보냅니다.

## 상태

```http
426 Upgrade Required
```

## 예제

```http
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/2.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain
This service requires use of the HTTP/2.0 protocol
```

## 명세

{{Specifications}}

## 같이 보기

- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("101")}} `Switching Protocols`
