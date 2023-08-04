---
title: Worker：message 事件
slug: Web/API/Worker/message_event
---

{{APIRef}}

当 worker 的父级接收到来自其 worker 的消息时（也就是说，当 worker 通过 [`DedicatedWorkerGlobalScope.postMessage()`](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) 发送消息时），会在 {{domxref('Worker')}} 对象上触发 `message` 事件。

此事件不能取消，也不会冒泡。

## 语法

在如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或者使用事件处理器属性。

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## 事件类型

{{domxref("MessageEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("MessageEvent")}}

## 事件属性

_此接口也从其父接口 {{domxref("Event")}} 继承属性。_

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : 消息发送者发送的数据。
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : 一个字符串，代表消息发送者的来源。
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : 一个字符串，代表事件的唯一 ID。
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : 一个 `MessageEventSource`（可以是一个 {{glossary("WindowProxy")}}、{{domxref("MessagePort")}} 或 {{domxref("ServiceWorker")}} 对象），代表消息发送者。
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : 一个 {{domxref("MessagePort")}} 对象的数组，代表与消息被发送的通道相关的端口（在适当的情况下，例如在通道消息传递或向 shared worker 发送消息时）。

## 示例

下面的代码创建了一个 worker 并使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 监听从 worker 发来的消息：

```js
const worker = new Worker("static/scripts/worker.js");

worker.addEventListener("message", (event) => {
  console.log(`Received message from worker: ${event.data}`);
});
```

另外，也可以使用 `onmessage` 事件处理器属性进行监听：

```js
const worker = new Worker("static/scripts/worker.js");

worker.onmessage = (event) => {
  console.log(`Received message from worker: ${event.data}`);
};
```

worker 使用 [`self.postMessage()`](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) 发出消息：

```js
// static/scripts/worker.js

self.postMessage("I'm alive!");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：[`messageerror`](/zh-CN/docs/Web/API/Worker/messageerror_event)。
- [`DedicatedWorkerGlobalScope.postMessage()`](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)。
