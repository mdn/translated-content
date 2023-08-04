---
title: EventSource.onopen
slug: Web/API/EventSource/open_event
---

{{APIRef('WebSockets API')}}

{{domxref("EventSource")}}接口的 **`onopen`** 属性是一个事件处理器，它在收到 `open` 事件时被调用，在那时，连接刚被打开。

## 语法

```
eventSource.onopen = function
```

## 示例

```js
evtSource.onopen = function () {
  console.log("Connection to server opened.");
};
```

> **备注：** 你可以在 GitHub 上看到一个完整的示例— 请看 [使用 php 的 SSE(服务器发送事件)demo。](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("EventSource")}}
