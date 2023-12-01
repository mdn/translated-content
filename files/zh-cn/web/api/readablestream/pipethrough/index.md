---
title: ReadableStream.pipeThrough()
slug: Web/API/ReadableStream/pipeThrough
---

{{APIRef("Streams")}}

{{domxref("ReadableStream")}} 接口的 **`pipeThrough()`** 方法提供了一种链式的方式，将当前流通过转换流或者其他任何一对可写/可读的流进行管道传输。

传输一个流通常在管道传输的时间内锁定这个流，以阻止其他 reader 锁定它。

## 语法

```js-nolint
pipeThrough(transformStream)
pipeThrough(transformStream, options)
```

### 参数

- `transformStream`

  - : 由一对可读流和可写流组成的 {{domxref("TransformStream")}}（或者结构为 `{writable, readable}` 的对象），它们共同工作以对数据进行转换。`writable` 流写入的数据在某些状态下可以被 `readable` 流读取。例如，向 {{domxref("TextDecoder")}} 写入字节并从中读取字符串，而视频解码器则是写入编码的字节数据，并从中读取解压后的视频帧。

- `options` {{optional_inline}}

  - : 传输至 `writable` 流应该被使用的选项。可用选项是：

    - `preventClose`
      - : 如果设置为 `true`，源 `ReadableStream` 的关闭将不再导致目标 `WritableStream` 关闭。一旦此过程完成，该方法返回的 promise 将被兑现；除非在关闭目标流时遇到错误，在这种情况下，它将因为该错误被拒绝。
    - `preventAbort`
      - : 如果设置为 `true`，源 `ReadableStream` 中的错误将不再中止目标 `WritableStream`。该方法返回的 promise 将因源流的错误或者任何在中止目地流期间的错误而被拒绝。
    - `preventCancel`
      - : 如果设置为 `true`，目标 `WritableStream` 的错误将不再取消源 `ReadableStream`。在这种情况下，该方法返回的 promise 将因源流的错误或者在取消源流期间发生的任何错误而被拒绝。此外，如果目标可写流开始关闭或者正在关闭，则源可读流将不再被取消。在这种情况下，方法返回的 promise 也将被拒绝，其错误为连接到一个已关闭的流或者在取消源流期间发生的任何错误。
    - `signal`
      - : 用于设置一个 [`AbortSignal`](/zh-CN/docs/Web/API/AbortSignal) 对象，然后可以通过相应的 [`AbortController`](/zh-CN/docs/Web/API/AbortController) 中止正在进行的传输操作。

### 返回值

`transformStream` 的 `readable` 端。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `transformStream` 的 `writable` 和/或 `readable` 属性未定义，则抛出异常。

## 示例

在下面的例子中（有关运行实例的完整代码，参见[解压 PNG](https://mdn.github.io/dom-examples/streams/png-transform-stream/)，有关源代码，参见 [png-transform-stream](https://github.com/mdn/dom-examples/tree/master/streams/png-transform-stream)），使用 `fetch` 获取图像并将响应的 body 作为 {{domxref("ReadableStream")}}。

接下来，我们记录可读流的内容，并且使用 `pipeThrough()` 将它发送到一个转换灰度图的转换流，然后记录新的流中的内容。

```js
// 通过 fetch 获取原始图像
fetch("png-logo.png")
  // 将响应的 body 作为 ReadableStream
  .then((response) => response.body)
  .then((rs) => logReadableStream("Fetch Response Stream", rs))
  // 从原始图像创造一个 PNG 的灰度图像
  .then((body) => body.pipeThrough(new PNGTransformStream()))
  .then((rs) => logReadableStream("PNG Chunk Stream", rs));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} 构造函数
- [链式管道传输](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams#链式管道传输)
