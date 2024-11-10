---
title: WebSocket API
slug: Web/API/WebSockets_API
l10n:
  sourceCommit: a67b9956163a6a3bace6bea8d223d048f089675f
---

{{DefaultAPISidebar("WebSockets API")}}

**WebSocket API** 是一种先进的技术，可在用户浏览器和服务器之间开启双向交互式通信会话。利用该 API，可以向服务器发送信息，并接收事件驱动的响应，而无需轮询服务器以获得回复。

> [!NOTE]
> 虽然 WebSocket 连接在功能上与标准 Unix 风格的 socket 有些类似，但两者并无关联。

## 接口

- [`WebSocket`](/zh-CN/docs/Web/API/WebSocket)
  - : 用于连接 WebSocket 服务器的主要接口，之后可以在这个连接上发送和接收数据。
- [`CloseEvent`](/zh-CN/docs/Web/API/CloseEvent)
  - : 连接关闭时 WebSocket 对象触发的事件。
- [`MessageEvent`](/zh-CN/docs/Web/API/MessageEvent)
  - : 当从服务器获取到消息的时候 WebSocket 对象触发的事件。

## 指南

- [编写 WebSocket 客户端应用程序](/zh-CN/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [编写 WebSocket 服务器](/zh-CN/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [用 C# 编写 WebSocket 服务器](/zh-CN/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [用 Java 编写 WebSocket 服务器](/zh-CN/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
- [用 JavaScript（Deno）编写 WebSocket 服务器](/zh-CN/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno)

## 工具

- [AsyncAPI](https://www.asyncapi.com/)：用于描述基于 WebSocket 等协议的事件驱动架构的规范。可以使用它来描述基于 WebSocket 的 API，就像使用 OpenAPI 规范描述 REST API 一样。了解[为什么要考虑将 AsyncAPI 与 WebSocket 结合使用](https://www.asyncapi.com/blog/websocket-part1)和[如何使用](https://www.asyncapi.com/blog/websocket-part2)。
- [HumbleNet](https://hacks.mozilla.org/2017/06/introducing-humblenet-a-cross-platform-networking-library-that-works-in-the-browser/)：一个在浏览器中工作的跨平台网络库。它由 WebSocket 和 WebRTC 的 C 语言封装器组成，可抽象出跨浏览器的差异，便于为游戏和其他应用程序创建多用户网络功能。
- [µWebSockets](https://github.com/uNetworking/uWebSockets)：由 [C++11](https://isocpp.org/) 和 [Node.js](https://nodejs.org/) 实现的高度可扩展的 WebSocket 服务器和客户端。
- [Socket.IO](https://socket.io)：基于长轮询和 WebSocket 的 [Node.js](https://nodejs.org) 第三方传输协议。
- [SocketCluster](https://socketcluster.io/)：适用于 [Node.js](https://nodejs.org) 的 pub/sub WebSocket 框架，注重可扩展性。
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node)：用 [Node.js](https://nodejs.org/) 实现的 WebSocket 服务器 API。
- [Total.js](https://www.totaljs.com/)：用 [Node.js](https://nodejs.org/) 实现的 Web 应用程序框架（例如：[WebSocket 聊天](https://github.com/totaljs/examples/tree/master/websocket)）。
- [Faye](https://www.npmjs.com/package/faye-websocket)：用于 [Node.js](https://nodejs.org) 服务器和客户端的 {{DOMxRef("WebSocket")}}（双向连接）和 [EventSource](/zh-CN/docs/Web/API/EventSource)（单向连接）。
- [SignalR](https://dotnet.microsoft.com/zh-cn/apps/aspnet/signalr)：当 WebSocket 可用时，SignalR 将在覆盖范围内使用 WebSocket；当 WebSocket 不可用时，SignalR 将优雅地回退到其他技术，而应用程序代码保持不变。
- [Caddy](https://caddyserver.com/)：能够将任意命令（stdin/stdout）代理为 websocket 的 web 服务器。
- [ws](https://github.com/websockets/ws)：流行的 WebSocket 客户端和服务器 [Node.js](https://nodejs.org/) 库。
- [jsonrpc-bidirectional](https://github.com/bigstepinc/jsonrpc-bidirectional)：异步 RPC，在一个连接上，服务器和客户端可以同时导出函数（客户端可以调用服务器，服务器也可以调用客户端）。
- [cowboy](https://github.com/ninenines/cowboy)：Cowboy 是一款小型、快速、现代的 Erlang/OTP HTTP 服务器，支持 WebSocket。
- [ZeroMQ](https://zeromq.org)：ZeroMQ 是一个可嵌入的网络库，可通过进程内、IPC、TCP、UDP、TIPC、组播和 WebSocket 传输消息。
- [WebSocket King](https://websocketking.com)：帮助开发、测试和使用 WebSocket 服务器的客户端工具。
- [PHP WebSocket Server](https://github.com/napengam/phpWebSocketServer)：用 PHP 编写的服务器，用于处理通过 websocket wss\:// 或 ws\:// 以及通过 ssl:// 和 tcp\:// 的普通套接字进行的连接。
- [Channels](https://channels.readthedocs.io/en/stable/index.html)：增加了对 WebSocket（以及其他需要长时间运行异步连接的协议）的支持的 Django 库。
- [Channels](https://hexdocs.pm/phoenix/channels.html)：在 Elixir Phoenix 框架中使用 WebSocket 进行可扩展的实时通信。
- [LiveView](https://github.com/phoenixframework/phoenix_live_view)：在 Elixir Phoenix 框架中通过 WebSocket 实现实时交互式网络体验。
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/)：让 Flask 应用程序可以在客户端和服务器之间进行低延迟的双向通信。
- [Gorilla WebSocket](https://pkg.go.dev/github.com/gorilla/websocket)：Gorilla WebSocket 是 WebSocket 协议的 [Go](https://go.dev/) 实现。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [RFC 6455——WebSocket 协议](https://tools.ietf.org/html/rfc6455)
- [WebSocket API 规范](https://websockets.spec.whatwg.org/)
- [服务器发送事件](/zh-CN/docs/Web/API/Server-sent_events)
