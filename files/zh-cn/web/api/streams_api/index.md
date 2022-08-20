---
title: Streams API
slug: Web/API/Streams_API
---
{{SeeCompatTable}}{{APIRef("Streams")}}

Streams API 允许 JavaScript 以编程的方式访问通过网络接收的数据流，并根据开发人员的需要处理它们。

## 概念和用法

流将你希望通过网络接收的资源拆分成小块，然后按位处理它。这正是浏览器在接收用于显示 web 页面的资源时做的事情——视频缓冲区和更多的内容可以逐渐播放，有时候随着内容的加载，你可以看到图像逐渐地显示。

但曾经这些对于 JavaScript 是不可用的。以前，如果我们想要处理某种资源（如视频、文本文件等），我们必须下载完整的文件，等待它反序列化成适当的格式，然后在完整地接收到所有的内容后再进行处理。

随着流在 JavaScript 中的使用，一切发生了改变——只要原始数据在客户端可用，你就可以使用 JavaScript 按位处理它，而不再需要缓冲区、字符串或 blob。

![](concept.png)

还有更多的优点——你可以检测流何时开始或结束，将流链接在一起，根据需要处理错误和取消流，并对流的读取速度做出反应。

流的基础应用围绕着使响应可以被流处理展开。例如，一个成功的 [fetch request](/zh-CN/docs/Web/API/fetch) 响应 {{domxref("Body")}} 会暴露为 {{domxref("ReadableStream")}}，之后你就可以使用 {{domxref("ReadableStream.getReader()")}} 建立的 reader 读取它，使用 {{domxref("ReadableStream.cancel()")}} 取消它等等。

更复杂的应用包括使用 {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} 创建你自己的流，比如在 [service worker](/zh-CN/docs/Web/API/Service_Worker_API) 中处理数据。

你还可以使用 {{domxref("WritableStream")}} 将数据写入流中。

> **备注：** 你可以在这些文章中找到关于流理论的更多细节和实践 — [Streams API concepts](/zh-CN/docs/Web/API/Streams_API/Concepts), [Using readable streams](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams)，以及 [Using writable streams](/zh-CN/docs/Web/API/Streams_API/Using_writable_streams)。

## Stream 接口

### Readable streams

- {{domxref("ReadableStream")}}
  - : 表示数据的可读流。用于处理 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 返回的响应，或者开发者自定义的流（例如通过 {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} 构造的流）。
- {{domxref("ReadableStreamDefaultReader")}}
  - : 表示默认阅读器，用于阅读来自网络的数据流（例如 fetch 请求）。
- {{domxref("ReadableStreamDefaultController")}}
  - : 表示控制器，用于控制 {{domxref("ReadableStream")}} 的状态及内部队列。默认的控制器用于处理非字节流。

### Writable streams

- {{domxref("WritableStream")}}
  - : 提供了将流写入目标这个过程的标准抽象表示，称为 sink。内置了背压和队列机制。
- {{domxref("WritableStreamDefaultWriter")}}
  - : 表示默认写入器，用于将小块的数据写入可写流中。
- {{domxref("WritableStreamDefaultController")}}
  - : 表示控制器，用于控制 {{domxref("WritableStream")}} 的状态。当创建一个 `WritableStream` 时，对应的 `WritableStreamDefaultController` 实例会被提供给底层的 sink 供其操作。

### 流相关的 API 及操作

- {{domxref("ByteLengthQueuingStrategy")}}
  - : 提供建立流时所需的内置字节队列策略。
- {{domxref("CountQueuingStrategy")}}
  - : 提供建立流时所需的块计数队列策略。

### 扩展

- {{domxref("Request")}}
  - : 当构造一个新的 `Request` 对象后，你可以给它的 `RequestInit` 中的 `body` 属性传入一个 {{domxref("ReadableStream")}}。这个 `Request` 对象就可以被传入 {{domxref("fetch()")}} 中，开始接收流。
- {{domxref("Body")}}
  - : 一个成功的 [fetch request](/zh-CN/docs/Web/API/fetch) 响应 {{domxref("Body")}} 会默认暴露为 {{domxref("ReadableStream")}}，从而可以采用相应的阅读器来处理等。

### 字节流相关接口

> **警告：** 下面的 API 并没有在所有浏览器中都实现，关于规范细节是否处于完成状态可供实现还存在疑问。它们可能随时会改变。

- {{domxref("ReadableStreamBYOBReader")}}
  - : 表示 BYOB（"bring your own buffer"）阅读器，用于阅读开发者提供的流数据（如自定义的 {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}）。
- {{domxref("ReadableByteStreamController")}}
  - : 表示控制器，用于控制 {{domxref("ReadableStream")}} 的状态及内部队列。字节控制器用于处理字节流。
- {{domxref("ReadableStreamBYOBRequest")}}
  - : 表示 {{domxref("ReadableByteStreamController")}} 中的 BYOB pull request。

## Examples

We have created a directory of examples to go along with the Streams API documentation — see [mdn/dom-examples/streams](https://github.com/mdn/dom-examples/tree/master/streams). The examples are as follows:

- [Simple stream pump](http://mdn.github.io/dom-examples/streams/simple-pump/): This example shows how to consume a ReadableStream and pass its data to another.
- [Grayscale a PNG](http://mdn.github.io/dom-examples/streams/grayscale-png/): This example shows how a ReadableStream of a PNG can be turned into grayscale.
- [Simple random stream](http://mdn.github.io/dom-examples/streams/simple-random-stream/): This example shows how to use a custom stream to generate random strings, enqueue them as chunks, and then read them back out again.
- [Simple tee example](http://mdn.github.io/dom-examples/streams/simple-tee-example/): This example extends the Simple random stream example, showing how a stream can be teed and both resulting streams can be read independently.
- [Simple writer](http://mdn.github.io/dom-examples/streams/simple-writer/): This example shows how to to write to a writable stream, then decode the stream and write the contents to the UI.
- [Unpack chunks of a PNG](http://mdn.github.io/dom-examples/streams/png-transform-stream/): This example shows how [`pipeThrough()`](/zh-CN/docs/Web/API/ReadableStream/pipeThrough) can be used to transform a ReadableStream into a stream of other data types by transforming a data of a PNG file into a stream of PNG chunks.

Examples from other developers:

- [Progress Indicators with Streams, Service Workers, & Fetch](https://fetch-progress.anthum.com/).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Streams API concepts](/zh-CN/docs/Web/API/Streams_API/Concepts)
- [Using readable streams](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams)
- [Using writable streams](/zh-CN/docs/Web/API/Streams_API/Using_writable_streams)
