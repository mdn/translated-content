---
title: ReadableStreamDefaultReader.closed
slug: Web/API/ReadableStreamDefaultReader/closed
tags:
  - API
  - Property
  - ReadableStreamDefaultReader
  - Reference
  - Streams
  - closed
translation_of: Web/API/ReadableStreamDefaultReader/closed
---
{{APIRef("Streams")}}

{{domxref("ReadableStreamDefaultReader")}} 接口的只读属性 **`closed`** 返回一个 {{jsxref("Promise")}}，这个 promise 在流关闭时兑现，而在流抛出错误或者 reader 的锁被释放时拒绝。该属性使你能够编写在一个流结束时响应的代码。

## 值

一个 {{jsxref("Promise")}}。

## 示例

在这个片段中，查询一个先前创建的 reader 以查看流是否被关闭。当它关闭时，promise 兑现，并在控制台输出消息。

```js
reader.closed.then(() => {
  console.log('reader closed');
})
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
