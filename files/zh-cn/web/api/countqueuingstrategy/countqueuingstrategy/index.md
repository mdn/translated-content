---
title: CountQueuingStrategy()
slug: Web/API/CountQueuingStrategy/CountQueuingStrategy
---

{{APIRef("Streams")}}

**`CountQueuingStrategy()`** 构造函数创建并返回一个 `CountQueuingStrategy` 对象实例。

## 语法

```js-nolint
new CountQueuingStrategy(highWaterMark)
```

### 参数

- `highWaterMark`
  - : 一个包含 `highWaterMark` 属性的对象。这个属性是一个非负整数，定义了在应用背压之前内部队列包含的分块的总数。

### 返回值

一个 {{domxref("CountQueuingStrategy")}} 对象实例。

### 异常

无。

## 示例

```js
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

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
  queuingStrategy,
);

const size = queuingStrategy.size();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CountQueuingStrategy")}}
