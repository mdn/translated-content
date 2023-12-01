---
title: Blob：arrayBuffer() 方法
slug: Web/API/Blob/arrayBuffer
---

{{APIRef("File API")}}

{{domxref("Blob")}} 接口的 **`arrayBuffer()`** 方法返回一个 {{jsxref("Promise")}}，其会兑现一个包含 blob 二进制数据内容的 {{jsxref("ArrayBuffer")}}。

## 语法

```js-nolint
arrayBuffer()
```

### 参数

无。

### 返回值

返回一个 promise 对象，在 resolved 状态中以二进制的形式包含 blob 中的数据，并呈现在 {{domxref("ArrayBuffer")}} 中。

### 异常

当执行这个方法没有抛出异常时，它可能会出现在 promise 的 reject 状态中。这是可能发生的，比如说在用于获取 blob 数据的一段代码抛出异常的时候。在读取数据时抛出的任何异常都会被放入 reject 状态中。

## 使用说明

{{domxref("FileReader.readAsArrayBuffer()")}} 这个方法与之类似，但 `arrayBuffer()` 返回一个 promise 对象，而不是像 `FileReader` 接口的方法一样返回一个基于事件的 API。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Response.arrayBuffer()")}}
- [Streams API](/zh-CN/docs/Web/API/Streams_API)
- {{domxref("FileReader.readAsArrayBuffer()")}}
