---
title: Worker：messageerror 事件
slug: Web/API/Worker/messageerror_event
---

{{APIRef}}

当 {{domxref('Worker')}} 对象接收到一条无法被反序列化的消息时，将在该对象上触发 `messageerror` 事件。

此事件不能取消，也不会冒泡。

## 语法

在如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("messageerror", (event) => {});

onmessageerror = (event) => {};
```

## 事件类型

{{domxref("MessageEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("MessageEvent")}}

## 事件属性

此接口也从其父接口 {{domxref("Event")}} 继承属性。

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

创建一个 worker，使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 监听 `message` 和 `messageerror` 事件：

```js
// main.js

const worker = new Worker("static/scripts/worker.js");

worker.addEventListener("message", (event) => {
  console.error(`Received message from worker: ${event}`);
});

worker.addEventListener("messageerror", (event) => {
  console.error(`Error receiving message from worker: ${event}`);
});
```

同样，可以使用 `onmessageerror` 事件处理器属性监听事件：

```js
// main.js

const worker = new Worker("static/scripts/worker.js");

worker.onmessage = (event) => {
  console.error(`Received message from worker: ${event}`);
};

worker.onmessageerror = (event) => {
  console.error(`Error receiving message from worker: ${event}`);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`Worker.postMessage()`](/zh-CN/docs/Web/API/Worker/postMessage)
- 相关事件：[`message`](/zh-CN/docs/Web/API/Worker/message_event)
