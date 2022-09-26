---
title: ByteLengthQueuingStrategy
slug: Web/API/ByteLengthQueuingStrategy
---

{{APIRef("Streams")}}

[Streams API](/zh-CN/docs/Web/API/Streams_API) 的 **`ByteLengthQueuingStrategy`** 接口提供了一个队列策略，该队列策略提供了内置的字节长度并且可以在构造流的时候使用。

## 构造函数

- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}}
  - : 创建一个新的 `ByteLengthQueuingStrategy` 对象实例。

## 属性

无。

## 方法

- {{domxref("ByteLengthQueuingStrategy.size()")}}
  - : 返回给定分块的 `byteLength` 属性。

## 示例

```js
const queueingStrategy = new ByteLengthQueuingStrategy({ highWaterMark: 1 });

const readableStream = new ReadableStream({
  start(controller) {
    // …
  },
  pull(controller) {
    // …
  },
  cancel(err) {
    console.log("stream error:", err);
  }
}, queueingStrategy);

const size = queueingStrategy.size(chunk);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
