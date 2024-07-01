---
title: CountQueuingStrategy.size()
slug: Web/API/CountQueuingStrategy/size
---

{{APIRef("Streams")}}

{{domxref("CountQueuingStrategy")}} 接口的 **`size()`** 方法始终返回 `1`，因此队列的总大小是队列中所有分块的数量。

## 语法

```js-nolint
size()
```

### 参数

无。

### 返回值

`1`。

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

- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}} 构造函数
