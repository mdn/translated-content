---
title: WebSocket.onclose
slug: Web/API/WebSocket/close_event
---

{{APIRef("Web Sockets API")}}

**`WebSocket.onclose`** 属性返回一个事件监听器，这个事件监听器将在 WebSocket 连接的{{domxref("WebSocket.readyState","readyState")}} 变为 `CLOSED`时被调用，它接收一个名字为“close”的 {{domxref("CloseEvent")}} 事件。

## 语法

```plain
WebSocket.onclose = function(event) {
  console.log("WebSocket is closed now.");
};
```

## 值

一个{{domxref("EventListener")}}.

## 规范

{{Specifications}}
