---
title: Server-sent events
slug: Web/API/Server-sent_events
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{DefaultAPISidebar("Server Sent Events")}} {{AvailableInWorkers}}

전통적으로 웹페이지는 새로운 데이터를 받기 위해 서버로 요청을 보내야만 합니다; 서버로 데이터를 요청하는 방식입니다. 하지만 Server-Sent Events 방식으로 웹페이지의 요청 없이도 언제든지 서버가 새로운 데이터를 보내는 것이 가능합니다. 이렇게 보내진 메시지는 웹페이지 안에서 *[Events](/ko/docs/Web/API/Event) + 데이터*로 다룰 수 있습니다.

> [!NOTE]
> 현재 Firefox는 서비스 워커에서 server-sent events 의 사용을 지원하지 않습니다 (전용 및 공유 워커에서는 지원됩니다). [Firefox bug 1681218](https://bugzil.la/1681218)를 참고하세요.

## 개념 및 사용법

server-sent events의 사용법을 배우기 위해서는 [server-sent events 사용하기](/ko/docs/Web/API/Server-sent_events/Using_server-sent_events) 를 참고하세요.

## 인터페이스

- {{domxref("EventSource")}}
  - : 서버와의 연결, 이벤트/데이터, 에러 받아오기, 연결 종료하기 등을 다루는 모든 기능을 정의하고 있습니다.

## 예제

- [PHP를 이용하여 구현한 간단한 SSE 데모](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## 명세

{{Specifications}}

## 더 찾아보기

### 도구

- [Mercure: SSE 기반의 실시간 통신 프로토콜 (발행-구독)](https://mercure.rocks)
- [Node.js를 위한 EventSource 폴리필](https://github.com/EventSource/eventsource)
- Remy Sharp의 [EventSource 폴리필](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffle의 [EventSource 폴리필](https://github.com/Yaffle/EventSource)
- Rick Waldron [jquery 플러그인](https://github.com/rwldrn/jquery.eventsource)
- [선언적인 SSE를 지원하는](https://intercoolerjs.org/docs.html#sse) intercooler.js

### 관련 주제

- [서버로부터 데이터 페칭하기](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [JavaScript](/ko/docs/Web/JavaScript)
- [WebSockets](/ko/docs/Web/API/WebSockets_API)

### 그 외 자료

- server-sent events와 함께 동작하는 [담벼락/피드 소셜 어플리케이션 제작](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/)에 대한 글과 [GitHub에 있는 코드](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline)입니다.
