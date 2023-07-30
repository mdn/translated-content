---
title: "WebSocket: message event"
slug: Web/API/WebSocket/message_event
---

{{APIRef}}

`message` 事件会在 `WebSocket` 接收到新消息时被触发。

| 起泡（Bubbles）  | 不                                              |
| ---------------- | ----------------------------------------------- |
| 可取消           | 不                                              |
| 接口             | {{domxref("MessageEvent")}}                     |
| 事件处理程序属性 | {{ domxref("WebSocket.onmessage","onmessage")}} |

## 例子

```js
// 创建一个 WebSocket 连接
const socket = new WebSocket("ws://localhost:8080");

// 监听消息
socket.addEventListener("message", function (event) {
  console.log("Message from server ", event.data);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另看

- [WebSocket: close event](/zh-CN/docs/Web/API/WebSocket/close_event)
- [WebSocket: error event](/zh-CN/docs/Web/API/WebSocket/error_event)
- [WebSocket: open event](/zh-CN/docs/Web/API/WebSocket/open_event)
- [Writing WebSocket client applications](/zh-CN/docs/WebSockets/Writing_WebSocket_client_applications)
