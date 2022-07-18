---
title: WritableStreamDefaultWriter.closed
slug: Web/API/WritableStreamDefaultWriter/closed
page-type: web-api-instance-property
tags:
  - API
  - Experimental
  - Property
  - Reference
  - Streams
  - WritableStreamDefaultWriter
  - closed
translation_of: Web/API/WritableStreamDefaultWriter/closed
---
{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("WritableStreamDefaultWriter")}} 接口的只读属性 **`closed`** 返回一个 {{jsxref("Promise")}}，这个 promise 在流关闭时兑现，而在流抛出错误或者 writer 的锁被释放时拒绝。

## 值

一个 {{jsxref("Promise")}}。

## 示例

```js
const writableStream = new WritableStream({
  start(controller) {
  },
  write(chunk, controller) {
    ...
  },
  close(controller) {
    ...
  },
  abort(err) {
    ...
  }
}, queuingStrategy);

...

const writer = writableStream.getWriter();

..

// check if the stream is closed
writer.closed.then(() => {
  console.log('writer closed');
})
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
