---
title: WebSockets
slug: Web/API/WebSockets_API
---

{{DefaultAPISidebar("Websockets API")}}

**WebSockets** 是一种先进的技术。它可以在用户的浏览器和服务器之间打开交互式通信会话。使用此 API，您可以向服务器发送消息并接收事件驱动的响应，而无需通过轮询服务器的方式以获得响应。

## 接口

- [`WebSocket`](/zh-CN/docs/Web/API/WebSocket)
  - : 用于连接 WebSocket 服务器的主要接口，之后可以在这个连接上发送 和接受数据。
- [`CloseEvent`](/zh-CN/docs/Web/API/CloseEvent)
  - : 连接关闭时 WebSocket 对象发送的事件。
- [`MessageEvent`](/zh-CN/docs/Web/API/MessageEvent)
  - : 当从服务器获取到消息的时候 WebSocket 对象触发的事件。

## 工具

- [HumbleNet](https://hacks.mozilla.org/2017/06/introducing-humblenet-a-cross-platform-networking-library-that-works-in-the-browser/): 一个在浏览器中工作的跨平台网络库。它由一个围绕 websocket 和 WebRTC 的 C 包装器组成，抽象了跨浏览器的差异，方便了为游戏和其它应用程序创建多用户网络功能。
- [µWebSockets](https://github.com/uWebSockets/uWebSockets):由 [C++11](https://isocpp.org/) 和 [Node.js](https://nodejs.org/) 实现的高度可扩展的 WebSocket 服务器和客户端.。
- [ClusterWS](https://github.com/ClusterWS/ClusterWS): 轻量级、快速和强大的框架，用于在 [Node.js](https://nodejs.org/) 中构建可伸缩的 WebSocket 应用程序。
- [Socket.IO](https://socket.io): 一个基于长轮询/WebSocket 的 [Node.js](https://nodejs.org) 第三方传输协议。
- [SocketCluster](https://socketcluster.io/): 一个用于[Node.js](https://nodejs.org)的 pub/sub 专注于可伸缩 WebSocket 框架。
- [WebSocket-Node](https://github.com/Worlize/WebSocket-Node): 一个用 [Node.js](https://nodejs.org/)实现 WebSocket 服务器 API。
- [Total.js](https://www.totaljs.com/):一个用[Node.js](http://www.nodejs.org/) 实现的的 Web 应用程序框架（例如:WebSocket 聊天）。
- [Faye](https://www.npmjs.com/package/faye-websocket): 一个 [Node.js](https://nodejs.org/) 的 [WebSocket](/zh-CN/docs/Web/API/WebSockets_API)（双向连接）和 [EventSource](/zh-CN/docs/Web/API/EventSource)（单向连接）的服务器和客户端。
- [SignalR](https://dotnet.microsoft.com/zh-cn/apps/aspnet/signalr): SignalR 在可用时将隐藏使用 WebSockets，在不可用时将优雅地使用其他技术和技术，而应用程序代码保持不变。
- [Caddy](https://caddyserver.com/docs/websocket): 能够将任意命令（stdin/stdout）代理为 websocket 的 web 服务器。
- [ws](https://github.com/websockets/ws): 一个流行的 WebSocket 客户端和服务器 [Node.js](https://nodejs.org/)库。
- [jsonrpc-bidirectional](https://github.com/bigstepinc/jsonrpc-bidirectional): 易于使用异步 RPC 库，通过单个 WebSocket 或 RTCDataChannel (WebRTC) 连接支持双向调用。TCP / SCTP /等。客户端和服务器可以各自承载自己的 JSONRPC 和服务器端点。
- [rpc-websockets](https://github.com/elpheria/rpc-websockets): JSON-RPC 2.0 在 websocket 上实现 Node.js 和 JavaScript。

## 相关话题

- [AJAX](/zh-CN/docs/Web/Guide/AJAX)
- [JavaScript](/zh-CN/docs/Web/JavaScript)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [RFC 6455 — The WebSocket Protocol](https://tools.ietf.org/html/rfc6455)
- [WebSocket API Specification](https://www.w3.org/TR/websockets/)
- [Server-Sent Events](/zh-CN/docs/Web/API/Server-sent_events)
