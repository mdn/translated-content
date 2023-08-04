---
title: EventSource.onerror
slug: Web/API/EventSource/error_event
---

{{APIRef('WebSockets API')}}

{{domxref("EventSource")}} 的属性 **`onerror`** 是当发生错误且这个错误事件（[`error`](/zh-CN/docs/Web/API/Element/error_event)）被 EventSource 触发时调用的一个事件处理函数。

## 语法

```
eventSource.onerror = function
```

## 例子

```js
evtSource.onerror = function () {
  console.log("EventSource failed.");
};
```

> **备注：** 你可以在 Github 上查看这个完整例子： [Simple SSE demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("EventSource")}}
