---
title: BroadcastChannel：messageerror 事件
slug: Web/API/BroadcastChannel/messageerror_event
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("BroadCastChannel API")}}{{AvailableInWorkers}}

{{domxref("BroadcastChannel")}} 接口的 **`messageerror`** 事件在无法反序列化的消息到达频道时触发。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("messageerror", (event) => { })
onmessageerror = (event) => { }
```

## 事件类型

一个 {{domxref("MessageEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("MessageEvent")}}

## 事件属性

_除了下面列出的属性之外，还可以使用父接口 {{domxref("Event")}} 的属性。_

- {{domxref("MessageEvent.data", "data")}} {{ReadOnlyInline}}
  - : 由消息发送者发送的数据。
- {{domxref("MessageEvent.origin", "origin")}} {{ReadOnlyInline}}
  - : 一个表示消息发送者来源的字符串。
- {{domxref("MessageEvent.lastEventId", "lastEventId")}} {{ReadOnlyInline}}
  - : 一个表示事件唯一 ID 的字符串。
- {{domxref("MessageEvent.source", "source")}} {{ReadOnlyInline}}
  - : 一个*消息事件源*，可以是一个用于表示消息发送者的 {{glossary("WindowProxy")}}、{{domxref("MessagePort")}} 或 {{domxref("ServiceWorker")}} 对象。
- {{domxref("MessageEvent.ports", "ports")}} {{ReadOnlyInline}}
  - : 一个与发送消息（通过频道发送消息或向 SharedWorker 发送消息）的频道相关联的 {{domxref("MessagePort")}} 对象的数组。

## 示例

此代码使用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 来监听消息和错误：

```js
const channel = new BroadcastChannel("example-channel");

channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});

channel.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

下述代码也实现了相同需求，但使用 `onmessage` 和 `onmessageerror` 事件处理器属性：

```js
const channel = new BroadcastChannel("example-channel");

channel.onmessage = (event) => {
  received.textContent = event.data;
};

channel.onmessageerror = (event) => {
  console.log(event);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：{{domxref("BroadcastChannel/message_event", "message")}}。
