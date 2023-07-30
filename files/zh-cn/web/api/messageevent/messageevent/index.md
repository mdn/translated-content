---
title: MessageEvent.MessageEvent()
slug: Web/API/MessageEvent/MessageEvent
---

{{APIRef("HTML DOM")}}

**`MessageEvent()`** 构造函数创建一个新的 {{domxref("MessageEvent")}} 对象实例。

## 语法

```js
var messageEvent = new MessageEvent(type, init);
```

### 参数

- type
  - : 要创建的 `MessageEvent` 的类型。这可能是 XXX 中的一个
- **`init`** {{optional_inline}}

  - : 可以包含以下属性的 dictionary 对象：

    - `data`: 您希望包含在 MessageEvent 中的数据。这可以是任何数据类型，如果没有指定，则默认为 null。
    - `origin`: {{domxref("USVString")}} 表示消息发送源。如果没有指定，则默认为空字符串 ("")。
    - `lastEventId`: {{domxref("DOMString")}} 表示事件的唯一 ID。如果没有指定，则默认为空字符串 ("")。
    - `source`: `MessageEventSource` (可以是 {{domxref("WindowProxy")}}, {{domxref("MessagePort")}}, 或 {{domxref("ServiceWorker")}} 对象) 表示消息发送对象。如果没有设置，则默认为 null。
    - `ports`: {{domxref("MessagePort")}} 对象数组，表示正在通过的消息通道关联的端口 (在适当的情况下，例如在通道消息传递或向共享工作者发送消息时)。如果没有指定，则默认为空数组 (\[])。

## 示例

```js
var myMessage = new MessageEvent("worker", {
  data: "hello",
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("ExtendableMessageEvent")}} — 类似于此接口，但用于需要为作者提供更多灵活性的接口。
