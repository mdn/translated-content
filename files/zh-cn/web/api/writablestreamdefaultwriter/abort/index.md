---
title: WritableStreamDefaultWriter.abort()
slug: Web/API/WritableStreamDefaultWriter/abort
page-type: web-api-instance-method
tags:
  - API
  - Experimental
  - Method
  - Reference
  - Streams
  - WritableStreamDefaultWriter
  - abort
translation_of: Web/API/WritableStreamDefaultWriter/abort
---
{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("WritableStreamDefaultWriter")}} 接口的 **`abort()`** 方法用于中止流，表示生产者不能再向流写入数据（会立刻返回一个错误状态），并丢弃所有已入队的数据。

如果 writer 处于活动状态，则 `abort()` 方法的行为与关联流（{{domxref("WritableStream.abort()")}}）的行为相同。如果不是，则返回一个被拒绝的 promise。

## 语法

```js
abort()
abort(reason)
```

### 参数

- `reason` {{optional_inline}}
  - : 一个字符串，用于提供人类可读的中止原因。

### 返回值

一个 {{jsxref("Promise")}}，会在成功时用给定的 reason 参数兑现。

### 异常

- {{jsxref("TypeError")}}
  - : 它尝试中止的流不是一个 {{domxref("WritableStream")}}，或者它已被锁定。

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

// abort the stream when desired
writer.abort.then((reason) => {
  console.log(reason);
})
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
