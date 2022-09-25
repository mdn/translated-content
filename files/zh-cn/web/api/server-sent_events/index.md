---
title: Server-sent events
slug: Web/API/Server-sent_events
---

{{DefaultAPISidebar("Server Sent Events")}}

一个网页获取新的数据通常需要发送一个请求到服务器，也就是向服务器请求的页面。使用 server-sent 事件，服务器可以在任何时刻向我们的 Web 页面推送数据和信息。这些被推送进来的信息可以在这个页面上作为 _[Events](/zh-CN/docs/DOM/event) + data_ 的形式来处理。

## 概念与使用

可以前往我们这篇文章 《[使用“server-sent event”](/zh-CN/docs/Web/API/Server-sent_events/Using_server-sent_events)》学习怎么使用 server-sent 事件。

## 接口

- {{domxref("EventSource")}}
  - : Defines all the features that handle connecting to a server, receiving events/data, errors, closing a connection, etc.

## 示例

- [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## 规范

{{Specifications}}

## 参见

### Tools

- [EventSource polyfill for Node.js](https://github.com/EventSource/eventsource)
- Remy Sharp’s [EventSource polyfill](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffle’s [EventSource polyfill](https://github.com/Yaffle/EventSource)
- Rick Waldron’s [jquery plugin](https://github.com/rwldrn/jquery.eventsource)
- intercooler.js [declarative SSE support](http://intercoolerjs.org/docs.html#sse)

### 相关话题

- [AJAX](/zh-CN/docs/AJAX)
- [JavaScript](/zh-CN/docs/JavaScript)
- [WebSockets](/zh-CN/docs/WebSockets)

### 其他资源

- 一个使用 server-sent events 的、类似 [Twitter](http://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/) 的应用程序，代码存放在这里：[Github](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
- [HTML5 和 Server-sent events](http://dsheiko.com/weblog/html5-and-server-sent-events)
- 使用[Asp.Net](http://rajudasa.blogspot.in/2012/05/html5-server-sent-events-using-aspnet.html) 的 [Server-sent events](http://rajudasa.blogspot.in/2012/05/html5-server-sent-events-using-aspnet.html) 的指南
