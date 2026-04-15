---
title: WebSocket
slug: Web/API/WebSocket
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

`WebSocket` 对象提供了用于创建和管理与服务器的 [WebSocket](/zh-CN/docs/Web/API/WebSockets_API) 连接，以及可以通过该连接发送和接收数据的 API。

使用 [`WebSocket()`](/zh-CN/docs/Web/API/WebSocket/WebSocket) 构造函数来构造一个 `WebSocket`。

> [!NOTE]
> `WebSocket` API 无法应用[背压](/zh-CN/docs/Web/API/Streams_API/Concepts#背压（backpressure）)，因此当消息到达速度超过应用程序的处理速度时，应用程序要么因缓冲这些消息而耗尽设备内存，要么因 100% CPU 使用率而变得无响应，甚至可能同时出现这两种情况。如需一种能提供自动背压的替代方案，请参阅 {{domxref("WebSocketStream")}}。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("WebSocket.WebSocket", "WebSocket()")}}
  - : 返回一个新创建的 `WebSocket` 对象。

## 实例属性

- {{domxref("WebSocket.binaryType")}}
  - : 使用二进制的数据类型连接。
- {{domxref("WebSocket.bufferedAmount")}} {{ReadOnlyInline}}
  - : 未发送至服务器的字节数。
- {{domxref("WebSocket.extensions")}} {{ReadOnlyInline}}
  - : 服务器选择的扩展。
- {{domxref("WebSocket.protocol")}} {{ReadOnlyInline}}
  - : 服务器选择的子协议。
- {{domxref("WebSocket.readyState")}} {{ReadOnlyInline}}
  - : 连接的当前状态。
- {{domxref("WebSocket.url")}} {{ReadOnlyInline}}
  - : WebSocket 的绝对路径。

## 实例方法

- {{domxref("WebSocket.close()")}}
  - : 关闭连接。
- {{domxref("WebSocket.send()")}}
  - : 将待传输的数据加入队列。

## 事件

使用 `addEventListener()` 或将一个事件监听器赋值给本接口的 `oneventname` 属性，来监听下面的事件。

- {{domxref("WebSocket/close_event", "close")}}
  - : 当一个 `WebSocket` 连接被关闭时触发。也可以通过 `onclose` 属性使用。
- {{domxref("WebSocket/error_event", "error")}}
  - : 当一个 `WebSocket` 连接因错误而关闭时触发，例如无法发送数据时。也可以通过 `onerror` 属性使用。
- {{domxref("WebSocket/message_event", "message")}}
  - : 当通过 `WebSocket` 收到数据时触发。也可以通过 `onmessage` 属性使用。
- {{domxref("WebSocket/open_event", "open")}}
  - : 当一个 `WebSocket` 连接成功时触发。也可以通过 `onopen` 属性使用。

## 示例

```js
// 创建 WebSocket 连接。
const socket = new WebSocket("ws://localhost:8080");

// 连接打开
socket.addEventListener("open", (event) => {
  socket.send("Hello Server!");
});

// 监听消息
socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [编写 WebSocket 客户端应用](/zh-CN/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
