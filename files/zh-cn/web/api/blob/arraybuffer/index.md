---
title: Blob.arrayBuffer()
slug: Web/API/Blob/arrayBuffer
---

{{APIRef("File API")}}

**`arrayBuffer()`** 方法返回一个 {{jsxref("Promise")}} 对象，包含 blob 中的数据，并在 {{domxref("ArrayBuffer")}} 中以二进制数据的形式呈现。

## 语法

```plain
var bufferPromise = blob.arrayBuffer();

blob.arrayBuffer().then(buffer => /* 处理 ArrayBuffer 数据的代码……*/);

var buffer = await blob.arrayBuffer();
```

### 参数

无须提供任何参数。

### 返回值

返回一个 promise 对象，在 resolved 状态中以二进制的形式包含 blob 中的数据，并呈现在 {{domxref("ArrayBuffer")}} 中。

### 异常

当执行这个方法没有提示错误时，那么它可能会出现在 promise 的 reject 状态中。这是可能发生的，比如说在用于获取 blob 数据的一段代码抛出异常的时候。在读取数据时抛出的任何异常都会被放入 reject 状态中。

## 使用须知

{{domxref("FileReader.readAsArrayBuffer()")}} 这个方法与之类似，但 `arrayBuffer()` 返回一个 promise 对象，而不是像 `FileReader` 一样返回一个基于事件的 API。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("Body.arrayBuffer()")}}
- [Streams API](/zh-CN/docs/Web/API/Streams_API)
- {{domxref("FileReader.readAsArrayBuffer()")}}
