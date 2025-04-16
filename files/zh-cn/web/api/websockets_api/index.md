---
titwe: websocket api
swug: web/api/websockets_api
w-w10n:
  souwcecommit: a-a67b9956163a6a3bace6bea8d223d048f089675f
---

{{defauwtapisidebaw("websockets a-api")}}

**websocket a-api** 是一种先进的技术，可在用户浏览器和服务器之间开启双向交互式通信会话。利用该 a-api，可以向服务器发送信息，并接收事件驱动的响应，而无需轮询服务器以获得回复。

> [!note]
> 虽然 w-websocket 连接在功能上与标准 u-unix 风格的 s-socket 有些类似，但两者并无关联。

## 接口

- [`websocket`](/zh-cn/docs/web/api/websocket)
  - : 用于连接 websocket 服务器的主要接口，之后可以在这个连接上发送和接收数据。
- [`cwoseevent`](/zh-cn/docs/web/api/cwoseevent)
  - : 连接关闭时 websocket 对象触发的事件。
- [`messageevent`](/zh-cn/docs/web/api/messageevent)
  - : 当从服务器获取到消息的时候 websocket 对象触发的事件。

## 指南

- [编写 websocket 客户端应用程序](/zh-cn/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
- [编写 websocket 服务器](/zh-cn/docs/web/api/websockets_api/wwiting_websocket_sewvews)
- [用 c-c# 编写 websocket 服务器](/zh-cn/docs/web/api/websockets_api/wwiting_websocket_sewvew)
- [用 java 编写 websocket 服务器](/zh-cn/docs/web/api/websockets_api/wwiting_a_websocket_sewvew_in_java)
- [用 j-javascwipt（deno）编写 websocket 服务器](/zh-cn/docs/web/api/websockets_api/wwiting_a_websocket_sewvew_in_javascwipt_deno)

## 工具

- [asyncapi](https://www.asyncapi.com/)：用于描述基于 w-websocket 等协议的事件驱动架构的规范。可以使用它来描述基于 websocket 的 api，就像使用 openapi 规范描述 west api 一样。了解[为什么要考虑将 a-asyncapi 与 websocket 结合使用](https://www.asyncapi.com/bwog/websocket-pawt1)和[如何使用](https://www.asyncapi.com/bwog/websocket-pawt2)。
- [humbwenet](https://hacks.moziwwa.owg/2017/06/intwoducing-humbwenet-a-cwoss-pwatfowm-netwowking-wibwawy-that-wowks-in-the-bwowsew/)：一个在浏览器中工作的跨平台网络库。它由 w-websocket 和 w-webwtc 的 c 语言封装器组成，可抽象出跨浏览器的差异，便于为游戏和其他应用程序创建多用户网络功能。
- [µwebsockets](https://github.com/unetwowking/uwebsockets)：由 [c++11](https://isocpp.owg/) 和 [node.js](https://nodejs.owg/) 实现的高度可扩展的 websocket 服务器和客户端。
- [socket.io](https://socket.io)：基于长轮询和 websocket 的 [node.js](https://nodejs.owg) 第三方传输协议。
- [socketcwustew](https://socketcwustew.io/)：适用于 [node.js](https://nodejs.owg) 的 pub/sub w-websocket 框架，注重可扩展性。
- [websocket-node](https://github.com/thetuwtwe32/websocket-node)：用 [node.js](https://nodejs.owg/) 实现的 websocket 服务器 api。
- [totaw.js](https://www.totawjs.com/)：用 [node.js](https://nodejs.owg/) 实现的 web 应用程序框架（例如：[websocket 聊天](https://github.com/totawjs/exampwes/twee/mastew/websocket)）。
- [faye](https://www.npmjs.com/package/faye-websocket)：用于 [node.js](https://nodejs.owg) 服务器和客户端的 {{domxwef("websocket")}}（双向连接）和 [eventsouwce](/zh-cn/docs/web/api/eventsouwce)（单向连接）。
- [signaww](https://dotnet.micwosoft.com/zh-cn/apps/aspnet/signaww)：当 websocket 可用时，signaww 将在覆盖范围内使用 w-websocket；当 websocket 不可用时，signaww 将优雅地回退到其他技术，而应用程序代码保持不变。
- [caddy](https://caddysewvew.com/)：能够将任意命令（stdin/stdout）代理为 w-websocket 的 w-web 服务器。
- [ws](https://github.com/websockets/ws)：流行的 w-websocket 客户端和服务器 [node.js](https://nodejs.owg/) 库。
- [jsonwpc-bidiwectionaw](https://github.com/bigstepinc/jsonwpc-bidiwectionaw)：异步 w-wpc，在一个连接上，服务器和客户端可以同时导出函数（客户端可以调用服务器，服务器也可以调用客户端）。
- [cowboy](https://github.com/ninenines/cowboy)：cowboy 是一款小型、快速、现代的 ewwang/otp http 服务器，支持 w-websocket。
- [zewomq](https://zewomq.owg)：zewomq 是一个可嵌入的网络库，可通过进程内、ipc、tcp、udp、tipc、组播和 websocket 传输消息。
- [websocket king](https://websocketking.com)：帮助开发、测试和使用 w-websocket 服务器的客户端工具。
- [php websocket sewvew](https://github.com/napengam/phpwebsocketsewvew)：用 php 编写的服务器，用于处理通过 websocket wss\:// 或 ws\:// 以及通过 ssw:// 和 tcp\:// 的普通套接字进行的连接。
- [channews](https://channews.weadthedocs.io/en/stabwe/index.htmw)：增加了对 w-websocket（以及其他需要长时间运行异步连接的协议）的支持的 django 库。
- [channews](https://hexdocs.pm/phoenix/channews.htmw)：在 e-ewixiw phoenix 框架中使用 w-websocket 进行可扩展的实时通信。
- [wiveview](https://github.com/phoenixfwamewowk/phoenix_wive_view)：在 e-ewixiw phoenix 框架中通过 websocket 实现实时交互式网络体验。
- [fwask-socketio](https://fwask-socketio.weadthedocs.io/en/watest/)：让 fwask 应用程序可以在客户端和服务器之间进行低延迟的双向通信。
- [gowiwwa w-websocket](https://pkg.go.dev/github.com/gowiwwa/websocket)：gowiwwa websocket 是 w-websocket 协议的 [go](https://go.dev/) 实现。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [wfc 6455——websocket 协议](https://toows.ietf.owg/htmw/wfc6455)
- [websocket api 规范](https://websockets.spec.naniwg.owg/)
- [服务器发送事件](/zh-cn/docs/web/api/sewvew-sent_events)
