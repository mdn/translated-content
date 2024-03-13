---
title: 使用可读流
slug: Web/API/Streams_API/Using_readable_streams
---

{{DefaultAPISidebar("Streams")}}

作为一个 JavaScript 开发者，以编程的方式逐块地读取和操作从网络上获取的数据是非常实用的！但是你要如何使用 Stream API 的可读流功能呢？可以在这篇文章看到基本介绍。

> **备注：** 本文要求你已理解可读流相关知识，并了解相关的高级概念，如果还不了解，建议你先查看[流的概念和简介](/zh-CN/docs/Web/API/Streams_API#概念和用法)以及掌握 [Stream API 概念](/zh-CN/docs/Web/API/Streams_API/Concepts)然后再阅读此文。

> **备注：** 如果你正在查询关于可写流的信息，你可以尝试阅读[使用可写流](/zh-CN/docs/Web/API/Streams_API/Using_writable_streams)。

## 寻找一些示例

我们将在这篇文章中看到各种示例，它们取自我们的 [dom-examples/streams](https://github.com/mdn/dom-examples/tree/master/streams) 仓库。你可以在那里发现各种源代码，以及关联的示例。

## 使用流的方式处理 Fetch

[Fetch API](/zh-CN/docs/Web/API/Fetch_API) 允许你跨网络获取资源，它提供了现代化的 API 去替代 [XHR](/zh-CN/docs/Web/API/XMLHttpRequest)。它有一系列的优点，真正好的是，浏览器最近增加了将 fetch 响应作为可读流使用的能力。

{{domxref("Request.body")}} 和 {{domxref("Response.body")}} 属性也是这样，它们将主体内容暴露作为一个可读流的 getter。

正如我们的[简单流式读取](https://github.com/mdn/dom-examples/tree/master/streams/simple-pump)示例所展示的（[也可以参见在线演示](https://mdn.github.io/dom-examples/streams/simple-pump/)），暴露它仅是需要访问响应的 `body` 属性：

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body);
```

这为我们提供了 {{domxref("ReadableStream")}} 对象。

### 附着一个 reader

现在我们已经获取到我们流的主体，读取流需要给它附着一个 reader。使用 {{domxref("ReadableStream.getReader()")}} 方法完成：

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body)
  .then((body) => {
    const reader = body.getReader();
    // …
  });
```

调用这个方法创建一个 reader 并且用它锁定这个流——直到释放这个 reader（即通过调用 {{domxref("ReadableStreamDefaultReader.releaseLock()")}}），没有其他 reader 能读这个流。

另请注意，先前的示例可以减少一步，由于 `response.body` 是同步的，所以不需要 promise：

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => {
    const reader = response.body.getReader();
    // …
  });
```

### 读取流

现在你已经附着了你的 reader，你可以使用 {{domxref("ReadableStreamDefaultReader.read()")}} 方法从流中读取数据分块。你从流中读出分块后，可以做你喜欢的事。例如，我们的简单流式读取示例将分块送入新的自定义 `ReadableStream` 中（我们将在下一节发现更多信息），然后从中创建一个新的响应，将它作为 {{domxref("Blob")}} 使用，然后通过 {{domxref("URL.createObjectURL()")}} 从该 blob 创建一个对象 URL，并将其显示在屏幕上的 {{htmlelement("img")}} 元素中，有效地创建了我们最初获取的图像的副本。

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => {
    const reader = response.body.getReader();
    return new ReadableStream({
      start(controller) {
        return pump();
        function pump() {
          return reader.read().then(({ done, value }) => {
            // When no more data needs to be consumed, close the stream
            if (done) {
              controller.close();
              return;
            }
            // Enqueue the next data chunk into our target stream
            controller.enqueue(value);
            return pump();
          });
        }
      },
    });
  })
  // Create a new response out of the stream
  .then((stream) => new Response(stream))
  // Create an object URL for the response
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  // Update image
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

让我们详细看看如何使用 `read()`。在 `pump()` 函数中，我们首先调用 `read()`，其返回一个包含对象的 promise——这里有我们要读去的结果，其形式为 `{ done, value }`：

```js
reader.read().then(({ done, value }) => {
  /* … */
});
```

这个结果可能是三种不同的类型之一：

- 如果有分块可用，则 promise 将使用 `{ value: theChunk, done: false }` 形式的对象来兑现。
- 如果流已经关闭，则 promise 将使用 `{ value: undefined, done: true }` 形式的对象来兑现。
- 如果流发生错误，则 promise 将因相关错误被拒绝。

其次，我们检查 `done` 是否为 `true`。如果是，则没有更多的分块要读取（value 的值是 `undefined`），所以我们退出这个函数并且使用 {{domxref("ReadableStreamDefaultController.close()")}} 关闭自定义的流：

```js
if (done) {
  controller.close();
  return;
}
```

> **备注：** `close()` 是新自定义流的一部分，而不是我们在这个讨论的一部分。我们将在下一节阐述更多关于自定义流的内容。

如果 `done` 为 `true`，我们处理已经读取的新分块（包含在结果对象的 `value` 属性），然后再次调用 `pump()` 函数去读取下一个分块。

```js
// Enqueue the next data chunk into our target stream
controller.enqueue(value);
return pump();
```

这是当你在使用流的 reader 时，将看见的标准的模式：

1. 编写一个从流的读取开始的函数。
2. 如果流中没有更多的分块要读取，你需要退出这个函数。
3. 如果流中有更多的分块要读取，你可以处理当前的分块后，再次运行该函数。
4. 你继续链接 `pipe` 函数，直到没有更多流要读取，在这种情况下，请遵循步骤 2。

> **备注：** 该函数看起来像 `pump()` 调用自己并且导致一个潜在的深度递归。然而，因为 `pump` 是异步的并且每次调用 `pump()` 都是在 promise 处理程序的末尾，事实上，它类似于 promise 处理程序的链式结构。

## 创建你自定义的可读流

我们在本文中一直在研究简单流式读取示例，包括第二部分——一旦我们从 fetch 主体中以分块的形式读取图片，我们就可以将它们排入另一个我们自定义的流中。我们该如何创建 `ReadableStream()` 构造函数？

### ReadableStream() 构造函数

当浏览器为你提供流时，可以很容易的读取，正如 Fetch 的情况一样，但是有时候你需要创建一个自定义流并且用你自己的分块填充它。{{domxref("ReadableStream.ReadableStream","ReadableStream()")}} 构造函数允许你通过最初看起来很复杂的语法创建它，但是这确实不是最糟糕的。

通用的语法框架像这样：

```js
const stream = new ReadableStream(
  {
    start(controller) {},
    pull(controller) {},
    cancel() {},
    type,
    autoAllocateChunkSize,
  },
  {
    highWaterMark: 3,
    size: () => 1,
  },
);
```

构造函数需要两个对象作为参数。第一个对象时必需的，并在 JavaScript 中创建一个正在读取数据的底层源模型。第二个对象是可选的，并且允许你去指定一个[自定义的队列策略](/zh-CN/docs/Web/API/Streams_API/Concepts#内置队列和队列策略)用于自己的流。你将很少这么做，所以我们现在只要专注于第一个。

第一个对象包含着五个成员，仅有第一个是必要的：

1. `start(controller)`——一个在 `ReadableStream` 构建后，立即被调用一次的方法。在这个方法中，你应该包含设置流功能的代码，例如开始生成数据或者以其他的方式访问资源时。
2. `pull(controller)`——一个方法，当被包含时，它会被重复的调用直到填满流的内置队列。当排入更多的分块时，这可以用于控制流。
3. `cancel()`——一个方法，当被包含时，如果应用发出流将被取消的信号，它将被调用（例如，调用 {{domxref("ReadableStream.cancel()")}}）。内容应该采取任何必要的措施释放对流源的访问。
4. `type` 和 `autoAllocateChunkSize`——当它们被包含时，会被用来表示流将是一个字节流。字节流将在未来的教程中单独涵盖，因为它们在目的和用例上与常规的（默认的）流有些不同。它们也未在任何地方实施。

再次看我们的简单示例代码，你可以看见我们的构造函数 `ReadableStream()` 仅包含一个单独的方法——`start()`，它用于读取我们 fetch 流中的所有的数据。

```js
// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => {
    const reader = response.body.getReader();
    return new ReadableStream({
      start(controller) {
        return pump();
        function pump() {
          return reader.read().then(({ done, value }) => {
            // When no more data needs to be consumed, close the stream
            if (done) {
              controller.close();
              return;
            }
            // Enqueue the next data chunk into our target stream
            controller.enqueue(value);
            return pump();
          });
        }
      },
    });
  });
```

### ReadableStream controller

你将注意到传递给 `ReadableStream` 构造函数的 `start()` 和 `pull()` 方法指定了 `controller` 参数——这些是 {{domxref("ReadableStreamDefaultController")}} 类的实例，它可以用于控制你的流。

在我们的示例中，当读取 fetch 主体后，使用 controller 的 {{domxref("ReadableStreamDefaultController.enqueue","enqueue()")}} 方法去将 value 排入自定义的流中。

另外，当我们完成读取 fetch 主体，我们使用 controller 的 {{domxref("ReadableStreamDefaultController.close","close()")}} 方法去关闭自定义流——任何先前排入的分块仍然可以从中读取，但是不会排入更多的分块，并且当读取结束时流被关闭。

### 读取自定义流

在我们的简单流式读取示例中，我们将其传递到 {{domxref("Response.Response", "Response")}} 构造函数中来消费自定义的可读流，然后我们将它作为 `blob()` 来使用。

```js
readableStream
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

但是一个自定义流仍然是 `ReadableStream` 实例，意味着你可以给它附着一个 reader。例如，看看我们的[简单随机流示例](https://github.com/mdn/dom-examples/blob/master/streams/simple-random-stream/index.html)（[也可以参见在线演示](https://mdn.github.io/dom-examples/streams/simple-random-stream/)），其创建了一个自定义的流，排入了一些随机的字符串，然后在按下 _Stop string generation_ 的按钮后，再次从流中读取数据。

> **备注：** 为了使用 {{domxref("FetchEvent.respondWith()")}} 消费流，排入的流内容的类型必须是 {{jsxref("Uint8Array")}}；例如使用 {{domxref("TextEncoder")}} 进行编码。

自定义流的构造函数有一个 `start()` 方法，该方法使用 {{domxref("setInterval()")}} 去指定每秒生成一个随机的字符串。然后使用 {{domxref("ReadableStreamDefaultController.enqueue()")}} 将它排入流。当按下按钮，取消 interval，并调用名为 `readStream()` 函数再次将数据从流中读取回来。由于我们一直停止排入分块，所以我们也要关闭流。

```js
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      const string = randomChars();
      // Add the string to the stream
      controller.enqueue(string);
      // show it on the screen
      const listItem = document.createElement("li");
      listItem.textContent = string;
      list1.appendChild(listItem);
    }, 1000);
    button.addEventListener("click", () => {
      clearInterval(interval);
      readStream();
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

在 `readStream()` 函数中，我们使用 {{domxref("ReadableStream.getReader()")}} 将 reader 锁定到该流，然后遵循我们之前看到的相同的模式——使用 `reader` 读取每个分块，在再次运行 `read()` 方法之前，检查 `done` 是否为 `true`，如果是 true，处理结束，如果是 false，读取下一个分块并且处理它。

```js
function readStream() {
  const reader = stream.getReader();
  let charsReceived = 0;
  let result = "";

  // read() returns a promise that resolves
  // when a value has been received
  reader.read().then(function processText({ done, value }) {
    // Result objects contain two properties:
    // done  - true if the stream has already given you all its data.
    // value - some data. Always undefined when done is true.
    if (done) {
      console.log("Stream complete");
      para.textContent = result;
      return;
    }

    charsReceived += value.length;
    const chunk = value;
    const listItem = document.createElement("li");
    listItem.textContent = `Read ${charsReceived} characters so far. Current chunk = ${chunk}`;
    list2.appendChild(listItem);

    result += chunk;

    // Read some more, and call this function again
    return reader.read().then(processText);
  });
}
```

### 关闭并取消流

我们已经展示了使用 {{domxref("ReadableStreamDefaultController.close()")}} 去关闭 reader 的示例。正如我们之前说的那样，任意排入队的分块将仍然被读取，但是因为它被关闭了，不会再有更多的分块入队。

如果你想要完全的摆脱流并且丢弃所有入队的分块，你应该使用 {{domxref("ReadableStream.cancel()")}} 或 {{domxref("ReadableStreamDefaultReader.cancel()")}}。

## 拷贝流

有时候你可能想要同时读取两次流。该过程由调用 {{domxref("ReadableStream.tee()")}} 实现——它返回一个数组，包含对原始可读流的两个相同的副本可读流，然后可以独立的使用不同的 reader 读取。

举例而言，你在 [ServiceWorker](/zh-CN/docs/Web/API/Service_Worker_API) 中可能会用到该方法，当你从服务器 fetch 资源，得到一个响应的可读流，你可能会想把这个流拆分成两个，一个流入到浏览器，另一个流入到 ServiceWorker 的缓存。由于响应的主体无法被消费两次，以及可读流无法被两个 reader 同时读取，你会需要两个可读流副本来实现需求。

我们提供了一个示例，在我们的[简单拷贝示例](https://github.com/mdn/dom-examples/blob/master/streams/simple-tee-example/index.html)（[也可以参见在线演示](https://mdn.github.io/dom-examples/streams/simple-tee-example/)）。这个示例与我们的简单随机流示例的工作方式大致相同，只是当按钮按下停止生产随机字符串时，将采取自定义流并拷贝流，并且读取这两个生成的流：

```js
function teeStream() {
  const teedOff = stream.tee();
  readStream(teedOff[0], list2);
  readStream(teedOff[1], list3);
}
```

## 链式管道传输

流的另一特征是通过管道的方式从一个流输出到另一个（称为[链式管道传输](/zh-CN/docs/Web/API/Streams_API/Concepts#链式管道传输)）。这会调用两个方法——{{domxref("ReadableStream.pipeThrough()")}}，它将可读流管道输出至拥有一对 writer/reader 的流中，并将一种数据转换成另一种；{{domxref("ReadableStream.pipeTo()")}} 将可读流管道传输至作为链式管道传输终点的 writer。

我们有一个简单的示例，叫做[解压 PNG 分块](https://github.com/mdn/dom-examples/tree/master/streams/png-transform-stream)（[也可以参见在线演示](https://mdn.github.io/dom-examples/streams/png-transform-stream/)）。此示例将图像作为流来获取，然后将它传输到自定义的 PNG 转换流，该流将从二进制数据流中检索 PNG 分块。

```js
// Fetch the original image
fetch("png-logo.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body)
  // Create a gray-scaled PNG stream out of the original
  .then((rs) => logReadableStream("Fetch Response Stream", rs))
  .then((body) => body.pipeThrough(new PNGTransformStream()))
  .then((rs) => logReadableStream("PNG Chunk Stream", rs));
```

我们仍然没有使用 {{domxref("TransformStream")}} 的例子。

## 总结

这解释了“默认”可读流的知识。

关于如何使用可读*字节*流的信息，参见[使用可读字节流](/zh-CN/docs/Web/API/Streams_API/Using_readable_byte_streams)：具有底层字节源的流，可以向消费者执行高效的零复制传输，绕过流的内部队列。
