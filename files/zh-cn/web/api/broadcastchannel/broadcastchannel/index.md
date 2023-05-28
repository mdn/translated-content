---
title: BroadcastChannel()
slug: Web/API/BroadcastChannel/BroadcastChannel
---

{{APIRef("BroadCastChannel API")}}

**`BroadcastChannel()`** 构造函数用于创建一个 {{domxref("BroadcastChannel")}} 对象，并与对应的频道相关联。

{{AvailableInWorkers}}

## 语法

```js
new BroadcastChannel(channelName)
```

### 参数

- `channelName`
  - : 频道名称，类型为 {{domxref("DOMString")}}；在相同的 {{glossary("origin", "源")}} 下，一个名称只对应一个频道，所有 {{glossary("browsing context", "浏览器上下文")}} 共用。

## 示例

```js
// 创建一个监听 "internal_notification" 频道的新频道。

var bc = new BroadcastChannel('internal_notification');
bc.postMessage('New listening connected!');
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- 所属接口：{{domxref("BroadcastChannel")}}
