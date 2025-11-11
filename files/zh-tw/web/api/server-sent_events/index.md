---
title: Server-sent events
slug: Web/API/Server-sent_events
---

{{DefaultAPISidebar("Server Sent Events")}}

網頁一般來說是由客戶端向伺服器請求資料. 藉由 server-sent 事件, 伺服器在任何時候都可以向客戶端推送資料. 即將推送進來的訊息可以自客戶端上做 _[Events](/zh-TW/docs/Web/API/Event) + data_ 處理.

## 文件

- 使用 [server-sent events](/zh-TW/docs/Web/API/Server-sent_events/Using_server-sent_events)
  - : 有關如何在伺服器端和客戶端使用 server-sent 事件的教學文章.
- 參考 [EventSource](/zh-TW/docs/Web/API/EventSource)
  - : 關於客戶端的 EventSource API.

## 工具

- Remy Sharp's [EventSource polyfill](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffle's [EventSource polyfill](https://github.com/Yaffle/EventSource)
- Rick Waldron's [jquery plugin](https://github.com/rwaldron/jquery.eventsource)

## 相關主題

- [AJAX](/zh-TW/docs/Learn_web_development/Core/Scripting/Network_requests), [JavaScript](/zh-TW/docs/Web/JavaScript), [WebSockets](/zh-TW/docs/Web/API/WebSockets_API)

## 規範

{{Specifications}}

## 參見

- A [Twitter like application](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/) powered by server-sent events and [its code on Github](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
- [HTML5 and Server-sent events](https://dsheiko.com/weblog/html5-and-server-sent-events/)
