---
title: Streams API 概念
slug: Web/API/Streams_API/Concepts
---
{{apiref("Streams")}}

[Streams API](/zh-CN/docs/Web/API/Streams_API) 为 Web 平台提供了一组十分有用的工具，提供了一系列对象以允许 JavaScript 访问来自网络的数据流，并根据开发人员的需要对其进行处理。与流相关的一些概念和术语可能会令您感到陌生——本文将解释您需要了解的所有内容。

## Readable streams

一个可读流是一个数据源，在 JavaScript 中用一个 {{domxref("ReadableStream")}} 对象表示，数据从它的 **underlying source (底层源)** 流出 —— 底层源表示一个您希望从中获取数据的，来自网络或其他域的，某种资源。

有两种 underlying source:

- **Push sources** 会在您访问了它们之后，不断地主动推送数据。您可以自行 start, pause，或 cancel 对流的访问。例如视频流和 TCP/[Web sockets](/zh-CN/docs/Web/API/WebSockets_API) 。
- **Pull sources** 需要您在连接到它们后，显式地从它们请求数据。例如通过 [Fetch](/zh-CN/docs/Web/API/Fetch_API) 或 [XHR](/zh-CN/docs/Web/API/XMLHttpRequest/XMLHttpRequest) 请求访问一个文件。

数据被按序读入到许多小块，这些小块被称作 **chunk**。**chunk** 可以是单个字节，也可以是某种更大的数据类型，例如特定大小的 [typed array](/zh-CN/docs/Web/JavaScript/Typed_arrays) 。来自一个流的 **chunks** 可以有不同的大小和类型。

![](readable_streams.png)

已放入到流中的 chunks 称作 **enqueued** —— 这意味着它们已经准备好被读取，并等待在队列中。流的一个 **internal queue** 跟踪了那些尚未读取的块（请参阅下面的**内部队列和队列策略**部分）。

流中的 chunks 由一个 **reader** 读取 —— 该数据处理过程一次只处理一个 chunk，允许您对其执行任何类型的操作。reader 加上与它一起运行的其他处理代码合称为一个 **consumer** 。

另一个您将用到的对象叫做 **controller** —— 每个 reader 都有一个关联的 controller，用来控制流（例如，可以将流 close）。

一个流一次只能被一个 reader 读；当一个 reader 被创建并开始读一个流（an **active reader**），我们说，它被 **locked** 在该流上。如果您想让另一个 reader 读这个流，则通常需要先取消第一个 reader ，再执行其他操作。（您可以 **tee** 流，参阅下面的 Teeing 部分）

注意，有两种不同类型的可读流。除了传统的可读流之外，还有一种类型叫做字节流 —— 这是传统流的扩展版本，用于读取底层字节源。相比可读流，字节流除了 **_default reader_** ，还可以使用 **_BYOB reader _***(BYOB, or "bring your own buffer", "带上你自己的缓冲") 。*这种 reader 可以直接将流读入开发者提供的缓冲区，从而最大限度地减少所需的复制。您的代码将使用哪种底层流（以及使用哪种 reader 和 controller）取决于流最初是如何创建的（请参阅{{domxref("ReadableStream.ReadableStream","ReadableStream()")}} 构造函数页面）。

> **警告：** 字节流尚未在任何地方实现，并且规范的细节被质疑是否处于可以实现的高度完成的状态。这种情况可能会随着时间而变化。

您可以使用现成的可读流，例如来自 fetch 请求的 {{domxref("Response.body")}} ，也可以使用 {{domxref("ReadableStream.ReadableStream","ReadableStream()")}} constructor 生成您自定义的流。

## Teeing

尽管同一时刻只能有一个 reader 可以读取流，我们可以把流分割成两个相同的副本，这样它们就可以用两个独立的 reader 读取。该过程称为 **teeing** 。

在 JavaScript 中，该过程由调用 {{domxref("ReadableStream.tee()")}} 实现 —— 它返回一个数组，包含对原始可读流的两个相同的副本可读流，可以独立地被不同的 reader 读取。

举例而言，您在 [ServiceWorker](/zh-CN/docs/Web/API/Service_Worker_API) 中可能会用到该方法，当您从服务器 fetch 资源，得到一个响应的可读流，您可能会想把这个流拆分成两个，一个流入到浏览器，另一个流入到 ServiceWorker 的缓存。由于 response 的 body 无法被消费两次，以及可读流无法被两个 reader 同时读取，您会需要两个可读流副本来实现需求。

![](tee.png)

## Writable streams

一个 **Writable stream (可写流)** 是一个可以写入数据的数据终点，在 JavaScript 中以一个 {{domxref("WritableStream")}} 对象表示。这是 JavaScript 层面对 **underlying sink (底层汇)** 的抽象 —— 底层汇是某个可以写入原始数据的更低层次的 I/O 数据汇。

数据由一个 **writer** 写入流中，每次一个 chunk 。chunk 和可读流的 reader 一样可以有多种类型。您可以用任何方式生成要被写入的块；writer 加上相关的代码称为 **producer**。

When a writer is created and starts writing to a stream (an **active writer**), it is said to be **locked** to it. Only one writer can write to a writable stream at one time. If you want another writer to start writing to your stream, you typically need to abort it before you then attach another writer to it.

An **internal queue** keeps track of the chunks that have been written to the stream but not yet been processed by the underlying sink.

There is also a construct you’ll use called a controller — each writer has an associated controller that allows you to control the stream (for example, to abort it if wished).

![](writable_streams.png)

You can make use of writable streams using the {{domxref("WritableStream.WritableStream","WritableStream()")}} constructor. These currently have very limited availability in browsers.

## Pipe chains

The Streams API makes it possible to pipe streams into one another (or at least it will do when browsers implement the relevant functionality) using a structure called a **pipe chain**. There are two methods available in the spec to facilitate this:

- {{domxref("ReadableStream.pipeThrough()")}} — pipes the stream through a **transform stream**, which is a pair comprised of a writable stream that has data written to it, and a readable stream that then has the data read out of it — this acts as a kind of treadmill that constantly takes data in and transforms it to a new state. Effectively the same stream is written to, and then the same values are read. A simple example is a text decoder, where raw bytes are written, and then strings are read. You can find more useful ideas and examples in the spec — see [Transform streams](https://streams.spec.whatwg.org/#ts-model) for ideas, and [this web sockets example](https://streams.spec.whatwg.org/#example-both).
- {{domxref("ReadableStream.pipeTo()")}} — pipes to a writable stream that acts as the end point of the pipe chain.

The start of the pipe chain is called the **original source**, and the end is called the **ultimate sink**.

![](pipechain.png)

> **备注：** This functionality isn't fully thought through yet, or available in many browsers. At some point the spec writers hope to add something like a `TransformStream` class to make creating transform streams easier.

## Backpressure

流的一个重要概念是 **backpressure (背压)** —— 这是单个流或一个 pipe chain 调节读/写速度的过程。当链中后面的一个流仍然忙碌，尚未准备好接受更多的 chunks 时，它会通过链向上游的流发送一个信号，告诉上游的转换流（或原始源）适当地减慢传输速度，这样您就不会在任何地方遇到瓶颈。

要在可读流中使用 backpressure 技术，我们可以通过查询 controller 的 {{domxref("ReadableStreamDefaultController.desiredSize")}} 属性。如果该值太低或为负数，我们的 ReadableStream 可以告诉它的底层源停止往流中装载数据，然后我们沿着 stream chain 进行背压。

可读流在经历背压后，如果 consumer 再次想要接收数据，我们可以在构造可读流时提供 pull 方法来告诉底层源恢复往流中装载数据。

## Internal queues and queuing strategies

As mentioned earlier, the chunks in a stream that have not yet been processed and finished with are kept track of by an internal queue.

- In the case of readable streams, these are the chunks that have been enqueued but not yet read
- In the case of writable streams, these are chunks that have been written but not yet processed by the underlying sink.

Internal queues employ a **queuing strategy**, which dictates how to signal backpressure based on the **internal queue state.**

In general, the strategy compares the size of the chunks in the queue to a value called the **high water mark**, which is the largest total chunk size that the queue can realistically manage.

The calculation performed is

```
high water mark - total size of chunks in queue = desired size
```

The **desired size** is the size of chunks the stream can still accept to keep the stream flowing but below the high water mark in size. After the calculation is performed, chunk generation will be slowed down/sped up as appropriate to keep the stream flowing as fast as possible while keeping the desired size above zero. If the value falls to zero (or below in the case of writable streams), it means that chunks are being generated faster than the stream can cope with, which results in problems.

> **备注：** What happens in the case of zero or negative desired size hasn’t really been defined in the spec so far. Patience is a virtue.

As an example, let's take a chunk size of 1, and a high water mark of 3. This means that up to 3 chunks can be enqueued before the high water mark is reached and backpressure is applied.
