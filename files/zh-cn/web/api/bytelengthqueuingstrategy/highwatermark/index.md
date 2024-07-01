---
title: ByteLengthQueuingStrategy：highWaterMark 属性
slug: Web/API/ByteLengthQueuingStrategy/highWaterMark
---

{{APIRef("Streams")}}

只读属性 **`ByteLengthQueuingStrategy.highWaterMark`** 返回在应用[背压](/zh-CN/docs/Web/API/Streams_API/Concepts#背压)之前，内置队列可以包含的字节总数。

> **备注：** 与 [`CountQueuingStrategy()`](/zh-CN/docs/Web/API/CountQueuingStrategy/CountQueuingStrategy) 不同，后者的 `highWaterMark` 指定了分块的数量，`ByteLengthQueuingStrategy()` 的 `highWaterMark` 参数则指定了*字节*数量——具体地说，给定一个分块流，在应用背压之前，内部队列可以包含这些分块的字节数（而不是这些分块的数量）。

## 值

一个整数。

## 示例

```js
const queuingStrategy = new ByteLengthQueuingStrategy({
  highWaterMark: 1 * 1024,
});

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
console.log(`highWaterMark value: ${queuingStrategy.highWaterMark}$`);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}} 构造函数
