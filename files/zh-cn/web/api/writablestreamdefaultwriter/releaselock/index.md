---
title: WritableStreamDefaultWriter.releaseLock()
slug: Web/API/WritableStreamDefaultWriter/releaseLock
---

{{APIRef("Streams")}}

{{domxref("WritableStreamDefaultWriter")}} 接口的 **`releaseLock()`** 方法用于释放 writer 对相应流的锁定。释放锁后，writer 将不再处于锁定状态。如果释放锁时关联的流出错，writer 随后也会以同样的方式发生错误；此外，writer 将会关闭。

## 语法

```js-nolint
releaseLock()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
const writableStream = new WritableStream({
  write(chunk) {
    ...
  },
  close() {
    ...
  },
  abort(err) {
    ...
  }
}, queuingStrategy);

...

const writer = writableStream.getWriter();

...

// release writer's lock on the stream when desired
writer.releaseLock();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
