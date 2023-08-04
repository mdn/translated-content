---
title: Server-sent events
slug: Web/API/Server-sent_events
---

{{DefaultAPISidebar("Server Sent Events")}}

전통적으로 웹페이지는 새로운 데이터를 받기 위해 서버로 요청을 보내야만 합니다; 서버로 데이터를 요청하는 방식입니다. 하지만 Server-Sent Events 방식으로 웹페이지의 요청 없이도 언제든지 서버가 새로운 데이터를 보내는 것이 가능합니다. 이렇게 보내진 메시지는 웹페이지 안에서 *[Events](/ko/docs/DOM/event) + 데이터*로 다룰 수 있습니다.

## 기본 & 사용하기

Server-Sent Events를 배우려면 다음 글을 읽어보세요: [Server-Sent Events 사용하기](/ko/docs/Web/API/Server-sent_events/Using_server-sent_events).

## 인터페이스

- {{domxref("EventSource")}}
  - : 서버와의 연결, 이벤트/데이터, 에러 받아오기, 연결 종료하기 등을 다루는 모든 기능을 정의하고 있습니다.

## 예제

- [PHP를 이용하여 구현한 간단한 SSE 데모](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## 명세

{{Specifications}}

## 더 찾아보기

### 도구

- [Node.js를 위한 EventSource 폴리필](https://github.com/EventSource/eventsource)
- Remy Sharp의 [EventSource 폴리필](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffle의 [EventSource 폴리필](https://github.com/Yaffle/EventSource)
- Rick Waldron [jquery 플러그인](https://github.com/rwldrn/jquery.eventsource)
- [선언적인 SSE를 지원하는](http://intercoolerjs.org/docs.html#sse) intercooler.js

### 관련 주제

- [AJAX](/ko/docs/AJAX)
- [JavaScript](/ko/docs/JavaScript)
- [WebSockets](/ko/docs/WebSockets)

### 그 외 자료

- SSE로 구현된 [Twitter 어플리케이션](http://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/)과 [깃허브에 공개된 소스코드](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
- [HTML5와 Server-sent events](http://dsheiko.com/weblog/html5-and-server-sent-events)
- [Asp.net을 이용한 Server-Sent Events](http://rajudasa.blogspot.in/2012/05/html5-server-sent-events-using-aspnet.html)
