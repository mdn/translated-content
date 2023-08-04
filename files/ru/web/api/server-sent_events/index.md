---
title: Server-sent events
slug: Web/API/Server-sent_events
---

{{DefaultAPISidebar("Server Sent Events")}}

По традиции, web-страница должна отправить запрос на сервер, чтобы получить новые данные; это то, как страница получает данные с сервера. Server-sent events дают возможность серверу отправлять новые данные web-странице в любое время, отсылая сообщения web-странице. Такие входящие сообщения могут расцениваться как _[Events](/ru/docs/DOM/event) + data_ внутри web-страницы.

## Понятия и применение

Чтобы изучить, как использовать server-sent events, обратитесь к статье [Using server-sent events](/ru/docs/Web/API/Server-sent_events/Using_server-sent_events).

## Interfaces

- {{domxref("EventSource")}}
  - : Defines all the features that handle connecting to a server, receiving events/data, errors, closing a connection, etc.

## Examples

- [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

### Tools

- [EventSource polyfill for Node.js](https://github.com/EventSource/eventsource)
- Remy Sharp's [EventSource polyfill](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffle's [EventSource polyfill](https://github.com/Yaffle/EventSource)
- Rick Waldron's [jquery plugin](https://github.com/rwldrn/jquery.eventsource)
- intercooler.js [declarative SSE support](http://intercoolerjs.org/docs.html#sse)

### Related Topics

- [AJAX](/ru/docs/AJAX)
- [JavaScript](/ru/docs/JavaScript)
- [WebSockets](/ru/docs/WebSockets)

### Other resources

- A [Twitter like application](http://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/) powered by server-sent events and [its code on Github](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
- [HTML5 and Server-sent events](http://dsheiko.com/weblog/html5-and-server-sent-events)
- [Server-sent events using Asp.Net](http://rajudasa.blogspot.in/2012/05/html5-server-sent-events-using-aspnet.html)
