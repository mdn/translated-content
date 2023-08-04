---
title: ByteLengthQueuingStrategy()
slug: Web/API/ByteLengthQueuingStrategy/ByteLengthQueuingStrategy
---

{{APIRef("Streams")}}

**`ByteLengthQueuingStrategy()`** 构造函数创建并返回一个 `ByteLengthQueuingStrategy` 对象实例。

## 语法

```js-nolint
new ByteLengthQueuingStrategy(highWaterMark)
```

### 参数

- `highWaterMark`
  - : 一个包含 `highWaterMark` 属性的对象。这个属性是一个非负整数，定义了在应用背压之前内部队列可以包含的分块的总数。

### 返回值

一个 {{domxref("ByteLengthQueuingStrategy")}} 对象实例。

### 异常

无。

## 示例

```js
const queuingStrategy = new ByteLengthQueuingStrategy({ highWaterMark: 1 });

const readableStream = new ReadableStream(
  {
    start(controller) {
      // …
    },
    pull(controller) {
      // …
    },
    cancel(err) {
      console.log("stream error:", err);
    },
  },
  queuingStrategy,
);

const size = queuingStrategy.size(chunk);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("ByteLengthQueuingStrategy")}} 接口
