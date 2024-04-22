---
title: 웹 소켓
slug: Web/API/WebSockets_API
---

웹 소켓은 사용자의 브라우저와 서버 사이의 인터액티브 통신 세션을 설정할 수 있게 하는 고급 기술입니다. 개발자는 웹 소켓 API를 통해 서버로 메시지를 보내고 서버의 응답을 위해 서버를 폴링하지 않고도 이벤트 중심 응답을 받는 것이 가능합니다.

## 인터페이스

- [`WebSocket`](/ko/docs/Web/API/WebSocket)
  - : 웹 소켓 서버로 연결하고 연결을 통해 데이터를 보내고 받는 기본 인터페이스<
- [`CloseEvent`](/ko/docs/Web/API/CloseEvent)
  - : 연결이 종료 되었을 때 웹 소켓 객체에 의해 전달된 이벤트
- [`MessageEvent`](/ko/docs/Web/API/MessageEvent)
  - : 서버로 부터 메시지가 수신 되었을 때 웹 소켓 객체에 의해 전달된 이벤트

## 도구

- [Socket.IO](http://socket.io): [Node.js](http://nodejs.org)를 위한 강력한 크로스 플랫폼 웹 소켓 API
- [WebSocket-Node](https://github.com/Worlize/WebSocket-Node): [Node.js](http://nodejs.org)를 위한 웹 소켓 서버 API 구현
- [더 많은 프레임워크, 라이브러리 보기](http://ajf.me/websocket/#libs)

## 관련 주제

- [AJAX](/ko/docs/AJAX), [JavaScript](/ko/docs/JavaScript)

## `같이 보기`

- [RFC 6455 - 웹 소켓 프로토콜](http://tools.ietf.org/html/rfc6455)
- [웹 소켓 API 규격](http://www.w3.org/TR/websockets/)
- [서버로부터의 이벤트](/ko/docs/Server-sent_events)
- [WebSocket.us](http://websocket.us/) - 웹 소켓에 대한 비영리 커뮤니티

## `브라우저 호환성`

{{Compat}}
