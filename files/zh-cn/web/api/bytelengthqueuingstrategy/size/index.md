---
title: ByteLengthQueuingStrategy.size()
slug: Web/API/ByteLengthQueuingStrategy/size
---

{{APIRef("Streams")}}

{{domxref("ByteLengthQueuingStrategy")}} 接口的 **`size()`** 方法返回给定分块的 `byteLength` 属性。

## 语法

```js-nolint
size(chunk)
```

### 参数

- `chunk`
  - : 一个通过流传递的数据分块。

### 返回值

一个整数，表示给定分块的字节长度。

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

const size = queueingStrategy.size(chunk);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}} 构造函数
