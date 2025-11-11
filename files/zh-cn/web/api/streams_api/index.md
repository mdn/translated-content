---
title: Stream API
slug: Web/API/Streams_API
---

{{DefaultAPISidebar("Streams")}}

Stream API 允许 JavaScript 以编程方式访问从网络接收的数据流，并且允许开发人员根据需要处理它们。

{{AvailableInWorkers}}

## 概念和用法

流会将你想要从网络接受的资源分成一个个小的分块，然后按位处理它。这正是浏览器在接收用于显示 web 页面的资源时做的事情——视频缓冲区和更多的内容可以逐渐播放，有时候随着内容的加载，你可以看到图像逐渐地显示。

但曾经这些对于 JavaScript 是不可用的。以前，如果我们想要处理某种资源（如视频、文本文件等），我们必须下载完整的文件，等待它反序列化成适当的格式，然后在完整地接收到所有的内容后再进行处理。

随着流在 JavaScript 中的使用，一切发生了改变——只要原始数据在客户端可用，你就可以使用 JavaScript 按位处理它，而不再需要缓冲区、字符串或 blob。

![](concept.png)

还有更多的优点——你可以检测流何时开始或结束，将流链接在一起，根据需要处理错误和取消流，并对流的读取速度做出反应。

流的基础应用围绕着使响应可以被流处理展开。例如，一个成功的 [fetch 请求](/zh-CN/docs/Web/API/Window/fetch)返回的响应体可以暴露为 {{domxref("ReadableStream")}}，之后你可以使用 {{domxref("ReadableStream.getReader()")}} 创建一个 reader 读取它，使用 {{domxref("ReadableStream.cancel()")}} 取消它等等。

更复杂的应用包括使用 {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} 构造函数创建你自己的流，例如进入 [service worker](/zh-CN/docs/Web/API/Service_Worker_API) 去处理流。

你也可以使用 {{domxref("WritableStream")}} 将数据写入流。

> [!NOTE]
> 你可以在这些文章中找到关于流理论的更多细节和实践——[Stream API 概念](/zh-CN/docs/Web/API/Streams_API/Concepts)、[使用可读流](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams)、[使用可读字节流](/zh-CN/docs/Web/API/Streams_API/Using_readable_byte_streams)，以及[使用可写流](/zh-CN/docs/Web/API/Streams_API/Using_writable_streams)。

## Stream 接口

### 可读流

- {{domxref("ReadableStream")}}
  - : 表示数据的可读流。用于处理 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 返回的响应，或者开发者自定义的流（例如通过 {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} 构造的流）。
- {{domxref("ReadableStreamDefaultReader")}}
  - : 表示默认 reader，用于读取来自网络的数据流（例如 fetch 请求）。
- {{domxref("ReadableStreamDefaultController")}}
  - : 表示一个 controller，用于控制 {{domxref("ReadableStream")}} 的状态及内部队列。默认的 controller 用于处理非字节流。

### 可写流

- {{domxref("WritableStream")}}
  - : 为将流写入目的地（称为接收器）的过程，提供了一个标准抽象。内置了背压和队列机制。
- {{domxref("WritableStreamDefaultWriter")}}
  - : 表示默认 writer，用于将分块的数据写入可写流中。
- {{domxref("WritableStreamDefaultController")}}
  - : 表示一个 controller，用于控制 {{domxref("WritableStream")}} 的状态。当创建一个 `WritableStream` 时，对应的 `WritableStreamDefaultController` 实例会被提供给底层的接收器供其操作。

### 转换流

- {{domxref("TransformStream")}}
  - : 表示一组可转化的数据。
- {{domxref("TransformStreamDefaultController")}}
  - : 提供操作和转换流关联的 {{domxref("ReadableStream")}} 和 {{domxref("WritableStream")}} 的方法。

### 流相关的 API 和操作

- {{domxref("ByteLengthQueuingStrategy")}}
  - : 当构建流时，提供建立流时所需的内置字节队列策略。
- {{domxref("CountQueuingStrategy")}}
  - : 当构建流时，提供建立流时所需的块计数队列策略。

### 其他 API 扩展

- {{domxref("Request")}}
  - : 当构造一个新的 `Request` 对象后，你可以给它的 `RequestInit` 中的 `body` 属性传入一个 {{domxref("ReadableStream")}}。这个 `Request` 对象就可以被传入 {{domxref("fetch()")}} 中，开始接收流。
- {{domxref("Response.body")}}
  - : 一个成功的 [fetch request](/zh-CN/docs/Web/API/Window/fetch) 响应体会默认暴露为 {{domxref("ReadableStream")}}，从而可以采用相应的 reader 来处理等。

### 字节流相关的接口

- {{domxref("ReadableStreamBYOBReader")}}
  - : 表示一个 BYOB（“带你自己的缓冲区”）reader，它可以用于读取由开发人员提供的流数据（例如一个自定义的 {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}）。
- {{domxref("ReadableByteStreamController")}}
  - : 表示一个 controller，用于控制 {{domxref("ReadableStream")}} 的状态及内部队列。字节流 controller 用于处理字节流。
- {{domxref("ReadableStreamBYOBRequest")}}
  - : 表示 {{domxref("ReadableByteStreamController")}} 中的 BYOB 拉取请求。

## 示例

我们创建了流的示例目录，以配合 Stream API 文档——参见 [mdn/dom-examples/streams](https://github.com/mdn/dom-examples/tree/master/streams)。示例如下：

- [简单的流 pump](https://mdn.github.io/dom-examples/streams/simple-pump/)：此示例展示了如何消费流并且传递它的数据进入另一个。
- [转换一个 PNG 到灰度](https://mdn.github.io/dom-examples/streams/grayscale-png/)：这个示例展示了如何使用可读流将 PNG 转换到灰度。
- [简单随机流](https://mdn.github.io/dom-examples/streams/simple-random-stream/)：这个示例展示了如何使用一个自定义流去生成随机字符串，并将将它们排入分块，然后重新读取它们。
- [简单拷贝示例](https://mdn.github.io/dom-examples/streams/simple-tee-example/)：这个示例由简单随机流扩展，展示了一个流如何被拷贝为两个并且生成的流可以被独立的读取。
- [简单 writer](https://mdn.github.io/dom-examples/streams/simple-writer/)：这个示例展示了如何写入可写流，然后解码流并将流内容写入 UI。
- [解压 PNG 分块](https://mdn.github.io/dom-examples/streams/png-transform-stream/)：此示例展示了如何使用 [`pipeThrough()`](/zh-CN/docs/Web/API/ReadableStream/pipeThrough) 通过将 PNG 文件的数据转换为 PNG 分块流来将 ReadableStream 转换为其他数据类型的流。

来自其他开发人员的示例：

- [Stream、Service Worker 以及 Fetch 进度指标](https://fetch-progress.anthum.com/).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Stream API 概念](/zh-CN/docs/Web/API/Streams_API/Concepts)
- [使用可读流](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams)
- [使用可读字节流](/zh-CN/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [使用可写流](/zh-CN/docs/Web/API/Streams_API/Using_writable_streams)
