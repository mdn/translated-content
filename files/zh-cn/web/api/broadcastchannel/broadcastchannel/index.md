---
title: BroadcastChannel()
slug: Web/API/BroadcastChannel/BroadcastChannel
---

{{APIRef("BroadCastChannel API")}}

**`BroadcastChannel()`** 构建函数用于创建一个 {{domxref("BroadcastChannel")}} 对象，并与对应的频道相关联。

{{AvailableInWorkers}}

## 语法

```plain
 channel = new BroadcastChannel(channel);
```

### 值

- _channel_
  - : 频道名称，类型为 {{domxref("DOMString")}}；在相同的 {{glossary("origin", "源")}} 下，一个名称只对应一个频道，所有 {{glossary("browsing context", "浏览器上下文")}} 共用。

## 示例

```js
// create a new channel listening to the "internal_notification" channel.

var bc = new BroadcastChannel('internal_notification');
bc.postMessage('New listening connected!');
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- 所属接口：{{domxref("BroadcastChannel")}}
