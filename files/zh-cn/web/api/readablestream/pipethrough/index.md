---
title: ReadableStream.pipeThrough()
slug: Web/API/ReadableStream/pipeThrough
tags:
  - API
  - Method
  - ReadableStream
  - Reference
  - Streams
  - pipeThrough
translation_of: Web/API/ReadableStream/pipeThrough
---
{{APIRef("Streams")}}

{{domxref("ReadableStream")}} 接口的 **`pipeThrough()`** 方法提供了一种链式的方式，将当前流通过转换流或者任何其他可写/可读流进行管道传输。

管道流通常在管道持续时间锁定他，阻止其他 reader 锁定它。

## 语法

```js
pipeThrough(transformStream)
pipeThrough(transformStream, options)
```

### 参数

- `transformStream`
  - : 一个由可读流和可写流组成的 {{domxref("TransformStream")}} (或者结构为 `{writable, readable}` 的对象)，他们共同工作将一些数据转化为另一些数据。 `writable` 写入的数据在某些状态下可以被 `readable` 读取。例如， {{domxref("TextDecoder")}} 从中写入字节并读取字符串，而视频解码器写入编码字节，并从中读取未压缩的视频帧。

- `options` {{optional_inline}}

  - : 管道至 `writable` 应该被使用的选项。可用选项是:

    - `preventClose`

      - : 如果设置为 `true`，关闭源 `ReadableStream` 将不再导致目标 `WritableStream` 关闭。一旦此过程完成，该方法将返回一个兑现的 promise，除非在关闭目标时遇到错误，在这种情况下下，它将因为该错误被拒绝。

    - `preventAbort`

      - : 如果设置为 `true`，源 `ReadableStream` 中的错误将不再中止目标 `WritableStream`。该方法将会返回一个被拒绝的 promise，该 promise 因源错误或者任何在中止目标期间的错误而被拒绝。

    - `preventCancel`

      - : 如果设置为 `true`，目标 `WritableStream` 的错误将不在取消源 `ReadableStream`。在这种情况下，该方法将会返回被拒绝的 promise，其中包含源的错误或者任何在中止目标期间的错误。此外，如果目标可读流开始关闭或者正在关闭，则源可读流将不再被取消。在这种情况下，方法将返回一个被拒绝的 promise，并显示一个错误，表示在取消源期间发生的任何错误导致管道关闭失败。

    - `signal`

      - : 如果设置一个 [`AbortSignal`](/zh-CN/docs/Web/API/AbortSignal) 对象，然后可以通过相应的 [`AbortController`](/zh-CN/docs/Web/API/AbortController) 中止正在进行的管道操作。

### 返回值

`transformStream` 的 `readable` 端。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `transformStream` 的 `writable` 和/或 `readable` 属性未定义，则抛出异常。

## 示例

在下面的例子中(有关实时运行的完整代码，参见 [解压缩 PNG](https://mdn.github.io/dom-examples/streams/png-transform-stream/)，有关源代码，参见 [png-transform-stream](https://github.com/mdn/dom-examples/tree/master/streams/png-transform-stream))，获取图像并将它的 body 属性修正为 {{domxref("ReadableStream")}}。

接下来，我们记录可读流的内容，并且使用 `pipeThrough()` 将它发动到一个创建灰度版本流的新函数，并且也记录新流的内容。

```js
// 获取原始图像
fetch('png-logo.png')
// 取回响应的 body 属性，该属性继续 ReadableStream
.then(response => response.body)
.then(rs => logReadableStream('Fetch Response Stream', rs))
// 从原始图像创造一个灰阶 PNG 流
.then(body => body.pipeThrough(new PNGTransformStream()))
.then(rs => logReadableStream('PNG Chunk Stream', rs))
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
