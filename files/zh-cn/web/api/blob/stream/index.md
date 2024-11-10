---
title: Blob：stream() 方法
slug: Web/API/Blob/stream
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("Blob")}} 接口的 **`stream()`** 方法返回一个 {{domxref("ReadableStream")}} 对象，读取它将返回包含在 `Blob` 中的数据。

## 语法

```js-nolint
stream()
```

### 参数

无。

### 返回值

一个 {{domxref("ReadableStream")}} 对象，读取后返回 `Blob` 的内容。

## 使用说明

使用 `stream()` 函数与其返回的 {{domxref("ReadableStream")}} 对象，你将得到一些有趣的能力：

- 调用方法 {{domxref("ReadableStream.getReader", "getReader()")}}，在返回的 stream 上获取一个对象，通过 {{domxref("ReadableStreamDefaultReader")}} 接口提供的 {{domxref("ReadableStreamDefaultReader.read", "read()")}} 方法读取 blob 对象的方法。
- 调用返回 stream 对象的 {{domxref("ReadableStream.pipeTo", "pipeTo()")}} 方法将 blob 对象的数据传输到可写流。
- 调用返回 stream 对象的 {{domxref("ReadableStream.tee", "tee()")}} 方法以准备可读流。该方法会返回一个数组，该数组包含两个新的 `ReadableStream` 对象，每个对象都会返回 `Blob` 的内容。
- 调用返回 stream 对象的 {{domxref("ReadableStream.pipeThrough", "pipeThrough()")}} 方法，通过一个 {{domxref("TransformStream")}} 对象或其他任意可读可写对传输流对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Response.body")}}
- [Streams API](/zh-CN/docs/Web/API/Streams_API)
