---
title: EventSource.onerror
slug: Web/API/EventSource/error_event
---

{{APIRef('WebSockets API')}}

当与事件源（event source）的连接无法打开时，会触发 {{domxref("EventSource")}} API 的（[`error`](/zh-CN/docs/Web/API/HTMLElement/error_event)）事件。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## 示例

```js
evtSource.onerror = function () {
  console.log("EventSource failed.");
};
```

> [!NOTE]
> 你可以在 Github 上查看这个完整例子： [Simple SSE demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("EventSource")}}
