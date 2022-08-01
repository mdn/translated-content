---
title: WebSocket()
slug: Web/API/WebSocket/WebSocket
tags:
  - API
  - Constructor
  - Reference
  - Web API
  - WebSocket
browser-compat: api.WebSocket.WebSocket
translation_of: Web/API/WebSocket/WebSocket
---
{{APIRef("Web Sockets API")}}

**`WebSocket()`** 생성자는 새로운 {{domxref("WebSocket")}} 객체를 반환합니다.

## 구문

```js
new WebSocket(url)
new WebSocket(url, protocols)
```

### 매개변수

- `url`
  - : 연결할 URL입니다. WebSocket 서버가 응답할 URL이어야 합니다.
- `protocols` {{optional_inline}}
  - : 하나의 프로토콜 문자열, 또는 프로토콜 문자열로 구성된 배열입니다. 하나의 서버가 다수의 WebSocket 하위 프로토콜을 구현할 수 있도록, 사용할 하위 프로토콜을 가리키기 위한 값입니다. (예를 들어, 지정한 `protocol`에 따라 하나의 서버로 서로 다른 유형의 상호작용을 처리하길 바랄 때 사용할 수 있습니다)

      생략할 때의 기본 값은 빈 배열, 즉 `[]` 입니다.

### 예외

- `SyntaxError` {{domxref("DOMException")}}
  - : 아래의 경우 발생합니다.
    - [`url`](#url)을 파싱할 수 없음
    - [`url`](#url)의 스킴이 `ws`와 `wss` 중 하나가 아님
    - [`url`](#url)에 [프래그먼트](/ko/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#프래그먼트)가 있음
    - [`protocols`](#protocols) 배열의 값들이 고유하지 않거나, WebSocket Protocol 명세가 정의한 [`Sec-WebSocket-Protocol`](/ko/docs/Web/HTTP/Protocol_upgrade_mechanism#sec-websocket-protocol)의 필드 값을 구성하는 요소들의 요구사항에 맞지 않음

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (WebSocket Protocol 명세)
