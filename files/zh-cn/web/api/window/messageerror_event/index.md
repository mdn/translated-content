---
title: Window：messageerror 事件
slug: Web/API/Window/messageerror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

当 {{domxref('Window')}} 对象接收到无法反序列化的消息时，会在该对象上触发 `messageerror` 事件。

此事件不可取消，也不会冒泡。

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

_此接口还继承了其父接口 {{domxref("Event")}} 的属性。_

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : 由消息发送者发送的数据。
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : 一个字符串，表示消息发送者的源。
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : 一个字符串，表示事件的唯一 ID。
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : 一个 `MessageEventSource`（可以是 {{glossary("WindowProxy")}}、{{domxref("MessagePort")}} 或 {{domxref("ServiceWorker")}} 对象），表示消息发送者。
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : 一个 {{domxref("MessagePort")}} 对象的数组，表示与消息所经通道关联的端口（在适当情况下，例如在通道消息传递中，或向共享 worker 发送消息时）。

## 示例

使用 {{domxref("EventTarget/addEventListener", "addEventListener()")}} 监听 `messageerror`：

```js
window.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

同样，也可以使用 `onmessageerror` 事件处理器属性：

```js
window.onmessageerror = (event) => {
  console.error(event);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.postMessage()")}}
- 相关事件：{{domxref("Window/message_event", "message")}}。
