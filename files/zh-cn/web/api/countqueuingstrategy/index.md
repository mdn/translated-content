---
title: CountQueuingStrategy
slug: Web/API/CountQueuingStrategy
---

{{APIRef("Streams")}}

[Streams API](/zh-CN/docs/Web/API/Streams_API) 的 **`CountQueuingStrategy`** 接口提供了一个内置的、用于对分块进行计数的队列策略，可以在构造流的时候使用。

## 构造函数

- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}}
  - : 创建一个新的 `CountQueuingStrategy` 对象实例。

## 实例属性

- {{domxref("CountQueuingStrategy.highWaterMark")}} {{ReadOnlyInline}}
  - : 在应用[背压](/zh-CN/docs/Web/API/Streams_API/Concepts#背压)之前，内部队列可以包含的分块总数。

## 实例方法

- {{domxref("CountQueuingStrategy.size()")}}
  - : 返回 `1`。

## 示例

```js
const queueingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

const writableStream = new WritableStream(
  {
    // Implement the sink
    write(chunk) {
      // …
    },
    close() {
      // …
    },
    abort(err) {
      console.log("Sink error:", err);
    },
  },
  queueingStrategy,
);

const size = queueingStrategy.size();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Streams API", "Stream API", "", 1)}}
- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}} 构造函数
- [内置队列和队列策略](/zh-CN/docs/Web/API/Streams_API/Concepts#内置队列和队列策略)
