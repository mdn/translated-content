---
title: "WebSocket: 错误事件"
slug: Web/API/WebSocket/error_event
---

{{APIRef}}

当`websocket`的连接由于一些错误事件的发生 (例如无法发送一些数据) 而被关闭时，一个`error`事件将被引发。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{ domxref("WebSocket.onerror","onerror")}}</td>
    </tr>
  </tbody>
</table>

## 示例

```js
// Create WebSocket connection
// 创建一个 WebSocket 连接
const socket = new WebSocket("ws://localhost:8080");

// Listen for possible errors
// 监听可能发生的错误
socket.addEventListener("error", function (event) {
  console.log("WebSocket error: ", event);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 查看更多

- [WebSocket: close event](/zh-CN/docs/Web/API/WebSocket/close_event)
- [WebSocket: message event](/zh-CN/docs/Web/API/WebSocket/message_event)
- [WebSocket: open event](/zh-CN/docs/Web/API/WebSocket/open_event)
- [Writing WebSocket client applications](/zh-CN/docs/WebSockets/Writing_WebSocket_client_applications)
