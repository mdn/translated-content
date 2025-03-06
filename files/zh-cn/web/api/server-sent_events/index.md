---
title: 服务器发送事件
slug: Web/API/Server-sent_events
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{DefaultAPISidebar("Server Sent Events")}}
{{AvailableInWorkers}}

通常来说，一个网页获取新的数据通常需要发送一个请求到服务器，也就是向服务器请求的页面。使用服务器发送事件，服务器可以随时向我们的 Web 页面推送数据和信息。这些被推送进来的信息可以在这个页面上以[_事件_](/zh-CN/docs/Web/API/Event)*+数据*的形式来处理。

> [!NOTE]
> Firefox 不能在 service worker 正常支持服务器发送事件（但支持在 Dedicated Worker 和 Shared Worker 中使用）。参见 [Firefox bug 1681218](https://bugzil.la/1681218)。

## 概念与使用

要了解如何使用服务器发送事件，请参阅我们的文章[使用服务器发送事件](/zh-CN/docs/Web/API/Server-sent_events/Using_server-sent_events)。

## 接口

- {{domxref("EventSource")}}
  - : 定义了所有处理与服务器连接、接收事件/数据、处理错误、关闭连接等功能的特性。

## 示例

- [使用 PHP 语言的简单 SSE 示例](https://github.com/mdn/dom-examples/tree/main/server-sent-events)

## 规范

{{Specifications}}

## 参见

### 工具

- [Mercure：一个建立在 SSE 之上的实时通信（发布——订阅）协议](https://mercure.rocks)
- [用于 Node.js 的 EventSource polyfill](https://github.com/EventSource/eventsource)
- Remy Sharp 的 [EventSource polyfill](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffle 的 [EventSource polyfill](https://github.com/Yaffle/EventSource)
- Rick Waldron 的 [jquery 插件](https://github.com/rwaldron/jquery.eventsource)
- intercooler.js [声明性的 SSE 支持](https://intercoolerjs.org/docs.html#sse)

### 相关主题

- [从服务器获取数据](/zh-CN/docs/Learn_web_development/Core/Scripting/Network_requests)
- [JavaScript](/zh-CN/docs/Web/JavaScript)
- [WebSocket](/zh-CN/docs/Web/API/WebSockets_API)

### 其他资源

- 使用服务器发送事件[创建一个墙推社交应用程序](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/)，代码存放在这里：[Github](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline)。
