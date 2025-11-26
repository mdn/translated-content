---
title: AudioEncoder：dequeue 事件
short-title: dequeue
slug: Web/API/AudioEncoder/dequeue_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

{{domxref("AudioEncoder")}} 接口的 **`dequeue`** 事件会在 {{domxref("AudioEncoder.encodeQueueSize")}} 减少时触发。

这避免了开发者使用 {{domxref("Window.setTimeout", "setTimeout()")}} 轮询以确定队列何时减少以将更多工作加入队列的需求。

## 语法

在例如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("dequeue", (event) => { })

ondequeue = (event) => { }
```

## 示例

```js
audioEncoder.addEventListener("dequeue", (event) => {
  // 入队更多编码工作
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
