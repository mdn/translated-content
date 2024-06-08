---
title: WebSocket.onopen
slug: Web/API/WebSocket/open_event
---

{{APIRef("WebSockets API")}}

**`WebSocket.onopen`**属性定义一个事件处理程序，当{{domxref("WebSocket")}} 的连接状态{{domxref("WebSocket.readyState","readyState")}} 变为{{domxref("WebSocket.readyState","1")}}时调用;这意味着当前连接已经准备好发送和接受数据。这个事件处理程序通过 {{domxref("事件")}}（建立连接时）触发。

## 语法

```plain
aWebSocket.onopen = function(event) {
  console.log("WebSocket is open now.");
};
```

## 返回值

An {{domxref("EventListener")}}.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
