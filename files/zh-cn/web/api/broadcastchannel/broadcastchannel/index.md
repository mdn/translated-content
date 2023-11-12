---
title: BroadcastChannel()
slug: Web/API/BroadcastChannel/BroadcastChannel
---

{{APIRef("BroadCastChannel API")}}

**`BroadcastChannel()`** 构造函数用于创建一个 {{domxref("BroadcastChannel")}} 对象，并与底层的通道相关联。

{{AvailableInWorkers}}

## 语法

```js-nolint
new BroadcastChannel(channelName)
```

### 参数

- `channelName`
  - : 表示通道名称的字符串；对于相同的{{glossary("origin", "来源")}}下的所有{{glossary("browsing context", "浏览上下文")}}，一个名称只对应一个通道。

## 示例

```js
// 创建一个监听“internal_notification”通道的新通道。

const bc = new BroadcastChannel("internal_notification");
bc.postMessage("New listening connected!");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- 所属接口：{{domxref("BroadcastChannel")}}
