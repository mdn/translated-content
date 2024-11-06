---
title: CountQueuingStrategy：highWaterMark 属性
slug: Web/API/CountQueuingStrategy/highWaterMark
---

{{APIRef("Streams")}}

只读属性 **`CountQueuingStrategy.highWaterMark`** 返回在应用[背压](/zh-CN/docs/Web/API/Streams_API/Concepts#背压)之前，内置队列可以包含的分块总数。

## 值

一个整数，表示分块的数量。

## 示例

```js
const queueingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

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

- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}} 构造函数
