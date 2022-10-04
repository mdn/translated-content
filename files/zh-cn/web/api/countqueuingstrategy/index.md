---
title: CountQueuingStrategy
slug: Web/API/CountQueuingStrategy
---

{{APIRef("Streams")}}

[Streams API](/zh-CN/docs/Web/API/Streams_API) 的 **`CountQueuingStrategy`** 接口提供了一个内置的、用于对分块进行计数的队列策略，可以在构造流的时候使用。

## 构造函数

- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}}
  - : 创建一个新的 `CountQueuingStrategy` 对象实例。

## 属性

无。

## 方法

- {{domxref("CountQueuingStrategy.size()")}}
  - : 返回 `1`。

## 示例

```js
const queueingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

const writableStream = new WritableStream({
  // Implement the sink
  write(chunk) {
    // …
  },
  close() {
    // …
  },
  abort(err) {
    console.log("Sink error:", err);
  }
}, queueingStrategy);

const size = queueingStrategy.size();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
