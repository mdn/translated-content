---
title: EventSource.onopen
slug: Web/API/EventSource/open_event
---

{{APIRef('WebSockets API')}}

{{domxref("EventSource")}}接口的 **`onopen`** 属性是一个事件处理器，它在收到 `open` 事件时被调用，在那时，连接刚被打开。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("open", (event) => {});

onopen = (event) => {};
```

## 示例

```js
evtSource.onopen = function () {
  console.log("Connection to server opened.");
};
```

> [!NOTE]
> 你可以在 GitHub 上看到一个完整的示例— 请看 [使用 php 的 SSE(服务器发送事件)demo。](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("EventSource")}}
