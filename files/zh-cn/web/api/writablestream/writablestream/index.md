---
title: WritableStream()
slug: Web/API/WritableStream/WritableStream
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Reference
  - Streams
  - WritableStream
translation_of: Web/API/WritableStream/WritableStream
---
{{APIRef("Streams")}}

**`WritableStream()`** 构造函数创建一个新的 {{domxref("WritableStream")}} 对象实例。

## 语法

```js
new WritableStream(underlyingSink)
new WritableStream(underlyingSink, queuingStrategy)
```

### 参数

- `underlyingSink` {{optional_inline}}

  - : 一个包含方法和属性的对象，这些方法和属性定义了构造的流的实例的具体行为。`underlyingSource` 可以包括：

    - `start(controller)` {{optional_inline}}
      - : 这是一个当对象被构造时立刻调用的方法。此方法的内容由开发人员定义，并应着眼于访问流，并执行其他任何必需的设置流功能。如果这个过程是异步完成的，它可以返回一个 promise，以表明异步操作成功或失败。传递给这个方法的 `controller` 参数是一个 {{domxref("WritableStreamDefaultController")}}。开发人员可以在设置时使用它来控制流。
    - `write(chunk, controller)` {{optional_inline}}
      - : 当一个新的数据块（指定为 `chunk` 参数传入）准备好写入底层 sink 时，将调用此方法，该方法也由开发人员定义。它可以返回一个 promise 来表示写入操作的成功或者失败。传递给这个方法的 `controller` 参数是一个 {{domxref("WritableStreamDefaultController")}}，当提交了更多的块进行写入时，开发人员可以使用它来控制流。这个方法仅在上一次写入成功后才会被再次调用，并且永远不会在流关闭或者中止后被调用（见下文）。
    - `close(controller)` {{optional_inline}}
      - : 如果应用程序发出已经完成了所有分块的写入的信号，将调用此方法，该方法也是由开发人员定义。其应该完成向底层 sink 的数据写入，然后释放对它的访问。如果这个过程是异步完成的，它可以返回一个 promise，以表明操作成功或失败。这个方法只有在所有等待的写入操作都成功后才会被调用。传递给这个方法的 `controller` 参数是一个 {{domxref("WritableStreamDefaultController")}}，可用于写入结束时控制流。
    - `abort(reason)` {{optional_inline}}
      - : 如果应用程序发出希望立即关闭流并且将其移至错误状态的信号，将调用此方法，该方法也是由开发人员定义。它可以清理任何被占用的资源，就像 `close()` 一样，但是即使存在等待的写入操作，`abort()` 也将被调用——那些分块将被丢弃。如果这个过程是异步完成的，它可以返回一个 promise，以表明操作成功或失败。`reason` 参数包含一个字符串，用于指定流被中止的原因。

- `queuingStrategy` {{optional_inline}}
  - : 一个可选的定义流的队列策略的对象。这需要两个参数：
    - `highWaterMark`
      - : 非负整数——这定义了在应用背压之前可以包含在内部队列中的分块的最大数量。
    - `size(chunk)`
      - : 包含参数 chunk 的方法——这表示每个分块所需要使用的字节数。

    > **备注：** 你可以定义一个自己的 `queuingStrategy`，或者为这个对象值使用 {{domxref("ByteLengthQueuingStrategy")}} 或 {{domxref("CountQueuingStrategy")}} 的实例。如果没有提供 `queuingStrategy`，则使用的默认值与 `CountQueuingStrategy` 相同，其 highWaterMark 为 1。

### 返回值

{{domxref("WritableStream")}} 对象的一个实例。

## 示例

下面的例子说明了这个接口的几个功能。它展示了使用自定义 sink 和由 API 提供的队列策略创建的 `WritableStream`。然后它调用一个 `sendMessage()` 的函数，传递新创建的流和一个字符串。在这个函数内部，它调用流的 `getWriter()` 方法，该方法返回一个 {{domxref("WritableStreamDefaultWriter")}} 实例。`forEach()` 用于将字符串的每个分块写入流。最后，`write()` 和 `close()` 方法都会返回 promise，promise 的状态由对应的操作是否成功来决定。

```js
const list = document.querySelector('ul');

function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message, { stream: true });
  encoded.forEach((chunk) => {
    defaultWriter.ready
      .then(() => {
        return defaultWriter.write(chunk);
      })
      .then(() => {
        console.log("Chunk written to sink.");
      })
      .catch((err) => {
        console.log("Chunk error:", err);
      });
  });
  // Call ready again to ensure that all chunks are written
  //   before closing the writer.
  defaultWriter.ready
    .then(() => {
      defaultWriter.close();
    })
    .then(() => {
      console.log("All chunks written");
    })
    .catch((err) => {
      console.log("Stream error:", err);
    });
}

const decoder = new TextDecoder("utf-8");
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });
let result = "";
const writableStream = new WritableStream({
  // Implement the sink
  write(chunk) {
    return new Promise((resolve, reject) => {
      var buffer = new ArrayBuffer(1);
      var view = new Uint8Array(buffer);
      view[0] = chunk;
      var decoded = decoder.decode(view, { stream: true });
      var listItem = document.createElement('li');
      listItem.textContent = "Chunk decoded: " + decoded;
      list.appendChild(listItem);
      result += decoded;
      resolve();
    });
  },
  close() {
    var listItem = document.createElement('li');
    listItem.textContent = "[MESSAGE RECEIVED] " + result;
    list.appendChild(listItem);
  },
  abort(err) {
    console.log("Sink error:", err);
  }
}, queuingStrategy);
sendMessage("Hello, world.", writableStream);
```

你可以在我们的[简单的 writer 示例](https://mdn.github.io/dom-examples/streams/simple-writer/)找到完整代码。

### 背压

由于 API 支持背压的方式（其在代码中的实现）可能不太明显。要了解背压是如何实现的，请注意以下三点:

- 为创建计数策略（第 35 行）而设置的 `highWaterMark` 属性，其用于设置 `WritableStream` 实例处理单个 `write()` 操作时可接受的最大数据量。在该示例中，它是可以传递给 `defaultWriter.write()` 的最大数据量（第 11 行）。
- `defaultWriter.ready` 属性返回一个当 sink（`WritableStream` 构造函数的第一个属性）完成写入数据时兑现的 promise。数据源可以写入更多的数据（第 9 行）或者调用 `close()`（第 24 行）。过早调用 close() 会阻止数据写入。这就是示例调用 `defaultWriter.ready` 两次的原因（第 9 行和第 22 行）。
- sink 的 `write()` 方法（第 40 行）返回的 {{jsxref("Promise")}} 告诉 `WritableStream` 和它的 writer 何时去兑现 `defaultWriter.ready`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
