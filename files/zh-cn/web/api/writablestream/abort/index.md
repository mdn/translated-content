---
title: WritableStream.abort()
slug: Web/API/WritableStream/abort
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Streams
  - WritableStream
  - abort
translation_of: Web/API/WritableStream/abort
---
{{APIRef("Streams")}}

{{domxref("WritableStream")}} 接口的 **`abort()`** 方法用于中止流，表示生产者不能再向流写入数据（会立刻返回一个错误状态），并丢弃所有已入队的数据。

## 语法

```js
abort(reason)
```

### 参数

- `reason`
  - : 一个字符串，用于提供人类可读的中止原因。

### 返回值

一个 {{jsxref("Promise")}}，会在成功时用给定的 `reason` 参数兑现。

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
// abort the stream later on, when required
writableStream.abort();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
