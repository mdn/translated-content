---
title: 服务器发送事件
slug: Web/API/Server-sent_events
---

{{DefaultAPISidebar("Server Sent Events")}}

通常来说，一个网页获取新的数据通常需要发送一个请求到服务器，也就是向服务器请求的页面。使用服务器发送事件，服务器可以随时向我们的 Web 页面推送数据和信息。这些被推送进来的信息可以在这个页面上作为 _[事件](/zh-CN/docs/DOM/event) + 数据_ 的形式来处理。

{{AvailableInWorkers}}

> **备注：** Firefox 不能在 service worker 正常支持服务端事件（但支持在 Dedicated Worker 和 Shared Worker 中使用）。参见 [Firefox bug 1681218](https://bugzil.la/1681218)。

## 概念与使用

可以前往我们这篇文章《[使用“服务器发送事件”](/zh-CN/docs/Web/API/Server-sent_events/Using_server-sent_events)》学习怎么使用服务器发送事件。

## 接口

- {{domxref("EventSource")}}
  - : 定义了所有处理与服务器连接、接收事件/数据、处理错误、关闭连接等功能的特性。

## 示例

- [使用 PHP 语言的简单 SSE 示例](https://github.com/mdn/dom-examples/tree/main/server-sent-events)

## 规范

{{Specifications}}

## 参见

### 工具

- [EventSource polyfill for Node.js](https://github.com/EventSource/eventsource)
- Remy Sharp's [EventSource polyfill](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffle’s [EventSource polyfill](https://github.com/Yaffle/EventSource)
- Rick Waldron's [jquery plugin](https://github.com/rwldrn/jquery.eventsource)
- intercooler.js [declarative SSE support](http://intercoolerjs.org/docs.html#sse)

### 相关话题

- [AJAX](/zh-CN/docs/Web/Guide/AJAX)
- [JavaScript](/zh-CN/docs/Web/JavaScript)
- [WebSocket](/zh-CN/docs/Web/API/WebSockets_API)

### 其他资源

- 一个使用服务器发送事件的、类似 [Twitter](http://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/) 的应用程序，代码存放在这里：[Github](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline)。
- [HTML5 和服务器发送事件](http://dsheiko.com/weblog/html5-and-server-sent-events)
- 使用 [Asp.Net](http://rajudasa.blogspot.in/2012/05/html5-server-sent-events-using-aspnet.html) 的 [Server-sent events](http://rajudasa.blogspot.in/2012/05/html5-server-sent-events-using-aspnet.html) 的指南
