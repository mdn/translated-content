---
title: ReadableStream.ReadableStream()
slug: Web/API/ReadableStream/ReadableStream
---

{{APIRef("Streams")}}

**`ReadableStream()`** 构造函数创建并从给定的处理程序返回一个可读的流对象。

## 语法

```js-nolint
new ReadableStream()
new ReadableStream(underlyingSource)
new ReadableStream(underlyingSource, queuingStrategy)
```

### 参数

- `underlyingSource` {{optional_inline}}

  - : 一个包含定义了构造流行为方法和属性的对象。`underlyingSource` 包括：

    - `start` (controller) {{optional_inline}}
      - : 这是一个当对象被构造时立刻调用的方法。此方法的内容由开发人员定义，并应着眼于访问流，并执行其他任何必需的设置流功能。如果这个过程是异步完成的，它可以返回一个
        promise，表明成功或失败。传递给这个方法的 `controller` 是一个 {{domxref("ReadableStreamDefaultController")}} 或 {{domxref("ReadableByteStreamController")}}，具体取决于 `type` 属性的值。开发人员可以使用此方法在设立期间控制流。
    - `pull` (controller) {{optional_inline}}
      - : 这个方法，也是由开发人员定义的，当流的内部队列不满时，会重复调用这个方法，直到队列补满。如果 `pull()` 返回一个 promise，那么它将不会再被调用，直到 promise 完成;如果 promise 失败，该流将会出现错误。传递给此方法的 `controller` 参数是 {{domxref("ReadableStreamDefaultController")}} 或 {{domxref("ReadableByteStreamController")}}，具体取决于 `type` 属性的值。由于更多的块被获取，这个方法可以被开发人员用来控制流。
    - `cancel` (reason) {{optional_inline}}
      - : 如果应用程序表示该流将被取消（例如，调用了 {{domxref("ReadableStream.cancel()")}}，则将调用此方法，该方法也由开发人员定义。该方法应该做任何必要的事情来释放对流的访问。
        如果这个过程是异步的，它可以返回一个 promise，表明成功或失败。原因参数包含一个 {{domxref("DOMString")}}，它描述了流被取消的原因。
    - `type` {{optional_inline}}
      - : 该属性控制正在处理的可读类型的流。如果它包含一个设置为 `bytes` 的值，则传递的控制器对象将是一个 {{domxref("ReadableByteStreamController")}}，能够处理 BYOB（带你自己的缓冲区）/字节流。如果未包含，则传递的控制器将为 {{domxref("ReadableStreamDefaultController")}}。
    - `autoAllocateChunkSize` {{optional_inline}}
      - : 对于字节流，开发人员可以使用正整数值设置 `autoAllocateChunkSize` 以打开流的自动分配功能。启用此功能后，流实现将自动分配一个具有给定整数大小的 {{domxref("ArrayBuffer")}}，并调用底层源代码，就好像消费者正在使用 BYOB reader 一样。

- `queuingStrategy` {{optional_inline}}

  - : 一个可选择定义流的队列策略的对象。这需要两个参数：

    - `highWaterMark`
      - : 非负整数 - 这定义了在应用背压之前可以包含在内部队列中的块的总数。
    - `size(chunk)`
      - : 包含参数 `chunk` 的方法——这表示每个分块使用的大小（以字节为单位）。

    > **备注：** 你可以自定义 `queuingStrategy`，或者使用 {{domxref("ByteLengthQueueingStrategy")}} 或 {{domxref("CountQueueingStrategy")}} 的示例作为对象的值。如果 没有提供 `queuingStrategy`，则默认值与 highWaterMark 为 1 的 `CountQueuingStrategy` 相同。

### 返回值

{{domxref("ReadableStream")}} 对象的实例。

### 异常

- RangeError
  - : 提供的值既不是 `"bytes"` 也不是 `undefined`。

## 示例

在下面的简单示例中，使用构造函数创建了一个自定义的 `ReadableStream`（完整代码请参见我们的[简单随机流示例](https://mdn.github.io/dom-examples/streams/simple-random-stream/)）。`start()` 函数每秒生成一个随机的文本字符串并将它排入流中。如果因为任何原因调用 {{domxref("ReadableStream.cancel()")}}，该 `cancel()` 函数也可以停止生成字符串。

按下按钮，将停止生成字符串，使用 {{domxref("ReadableStreamDefaultController.close()")}} 关闭流，并且将运行另一个函数，从流中读取数据。

```js
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      let string = randomChars();

      // Add the string to the stream
      controller.enqueue(string);

      // show it on the screen
      let listItem = document.createElement("li");
      listItem.textContent = string;
      list1.appendChild(listItem);
    }, 1000);

    button.addEventListener("click", function () {
      clearInterval(interval);
      fetchStream();
      controller.close();
    });
  },
  pull(controller) {
    // We don't really need a pull in this example
  },
  cancel() {
    // This is called if the reader cancels,
    // so we should stop generating strings
    clearInterval(interval);
  },
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("ReadableStream")}}
- {{domxref("ReadableByteStreamController")}}
- {{domxref("ReadableStreamDefaultController")}}
- [使用可读流](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams)
