---
title: WebSocket
slug: Web/API/WebSocket
---

{{APIRef("Web Sockets API")}}

`WebSocket` 对象提供了用于创建和管理 [WebSocket](/zh-CN/docs/Web/API/WebSockets_API) 连接，以及可以通过该连接发送和接收数据的 API。

使用 [`WebSocket()`](/zh-CN/docs/Web/API/WebSocket/WebSocket) 构造函数来构造一个 `WebSocket`。

## 构造函数

- {{domxref("WebSocket.WebSocket", "WebSocket(url[, protocols])")}}
  - : 返回一个 `WebSocket` 对象。

## 常量

| **Constant**           | **Value** |
| ---------------------- | --------- |
| `WebSocket.CONNECTING` | `0`       |
| `WebSocket.OPEN`       | `1`       |
| `WebSocket.CLOSING`    | `2`       |
| `WebSocket.CLOSED`     | `3`       |

## 属性

- {{domxref("WebSocket.binaryType")}}
  - : 使用二进制的数据类型连接。
- {{domxref("WebSocket.bufferedAmount")}} {{readonlyinline}}
  - : 未发送至服务器的字节数。
- {{domxref("WebSocket.extensions")}} {{readonlyinline}}
  - : 服务器选择的扩展。
- {{domxref("WebSocket.onclose")}}
  - : 用于指定连接关闭后的回调函数。
- {{domxref("WebSocket.onerror")}}
  - : 用于指定连接失败后的回调函数。
- {{domxref("WebSocket.onmessage")}}
  - : 用于指定当从服务器接受到信息时的回调函数。
- {{domxref("WebSocket.onopen")}}
  - : 用于指定连接成功后的回调函数。
- {{domxref("WebSocket.protocol")}} {{readonlyinline}}
  - : 服务器选择的下属协议。
- {{domxref("WebSocket.readyState")}} {{readonlyinline}}
  - : 当前的链接状态。
- {{domxref("WebSocket.url")}} {{readonlyinline}}
  - : WebSocket 的绝对路径。

## 方法

- {{domxref("WebSocket.close", "WebSocket.close([code[, reason]])")}}
  - : 关闭当前链接。
- {{domxref("WebSocket.send", "WebSocket.send(data)")}}
  - : 对要传输的数据进行排队。

## 事件

使用 `addEventListener()` 或将一个事件监听器赋值给本接口的 `oneventname` 属性，来监听下面的事件。

- {{domxref("WebSocket/close_event", "close")}}
  - : 当一个 `WebSocket` 连接被关闭时触发。
    也可以通过 {{domxref("WebSocket/onclose", "onclose")}} 属性来设置。
- {{domxref("WebSocket/error_event", "error")}}
  - : 当一个 `WebSocket` 连接因错误而关闭时触发，例如无法发送数据时。
    也可以通过 {{domxref("WebSocket/onerror", "onerror")}} 属性来设置。
- {{domxref("WebSocket/message_event", "message")}}
  - : 当通过 `WebSocket` 收到数据时触发。
    也可以通过 {{domxref("WebSocket/onmessage", "onmessage")}} 属性来设置。
- {{domxref("WebSocket/open_event", "open")}}
  - : 当一个 `WebSocket` 连接成功时触发。
    也可以通过 {{domxref("WebSocket/onopen", "onopen")}} 属性来设置。

## 示例

```js
// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener("open", function (event) {
  socket.send("Hello Server!");
});

// Listen for messages
socket.addEventListener("message", function (event) {
  console.log("Message from server ", event.data);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Writing WebSocket client applications](/zh-CN/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
