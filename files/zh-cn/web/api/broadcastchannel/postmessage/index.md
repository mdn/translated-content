---
title: BroadcastChannel：postMessage() 方法
slug: Web/API/BroadcastChannel/postMessage
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

{{domxref("BroadcastChannel")}} 接口的 **`postMessage()`** 方法向任何{{glossary("browsing context", "浏览上下文")}}中具有相同的{{glossary("origin", "源")}}的每个侦听器发送一条消息，该消息可以是任何类型的 {{jsxref("Object")}}。该消息以 {{domxref("BroadcastChannel/message_event", "message")}} 事件的形式传输，该事件针对绑定到频道的每个 {{domxref("BroadcastChannel")}}。

## 语法

```js-nolint
postMessage(message)
```

### 参数

- `message`
  - : 要发送到其他窗口的数据。数据使用[结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)进行序列化。这意味着你可以将各种数据对象安全地传递到目标窗口，而无需自己对其进行序列化。

### 返回值

无。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果 {{domxref("BroadcastChannel")}} 已关闭，则抛出此异常。
- `DataCloneError` {{domxref("DOMException")}}
  - : 如果输入数据的任何部分不可序列化，则抛出此异常。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属接口：{{domxref("BroadcastChannel")}}
