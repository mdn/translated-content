---
title: WritableStream
slug: Web/API/WritableStream
---

{{APIRef("Streams")}}

[Stream API](/zh-CN/docs/Web/API/Streams_API) 的 **`WritableStream`** 接口为将流数据写入目的地（称为接收器）提供了一个标准的抽象。该对象带有内置的背压和队列。

`WritableStream` 是一个[可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)。

## 构造函数

- {{domxref("WritableStream.WritableStream", "WritableStream()")}}
  - : 创造一个新的 `WritableStream` 对象。

## 实例属性

- {{domxref("WritableStream.locked")}} {{readonlyinline}}
  - : 一个布尔值，表示 `WritableStream` 是否锁定到一个 writer。

## 实例方法

- {{domxref("WritableStream.abort()")}}
  - : 中止流，使得生产者不能再成功向流写入数据（会立刻返回一个错误状态），并丢弃所有已入队的数据。
- {{domxref("WritableStream.close()")}}
  - : 关闭流。
- {{domxref("WritableStream.getWriter()")}}
  - : 返回一个新的 {{domxref("WritableStreamDefaultWriter")}} 实例并且将流锁定到该实例。当流被锁定时，直到这个流被释放之前，不能获取其他 writer。

## 示例

下面的例子说明了这个接口的几个功能。它展示了使用自定义 sink 和由 API 提供的队列策略创建的 `WritableStream`。然后它调用一个 `sendMessage()` 的函数，传递新创建的流和一个字符串。在这个函数内部，它调用流的 `getWriter()` 方法，该方法返回一个 {{domxref("WritableStreamDefaultWriter")}} 实例。`forEach()` 用于将字符串的每个分块写入流。最后，`write()` 和 `close()` 方法都会返回 promise，promise 的状态由对应的操作是否成功来决定。

```js
const list = document.querySelector("ul");

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
const writableStream = new WritableStream(
  {
    // Implement the sink
    write(chunk) {
      return new Promise((resolve, reject) => {
        var buffer = new ArrayBuffer(1);
        var view = new Uint8Array(buffer);
        view[0] = chunk;
        var decoded = decoder.decode(view, { stream: true });
        var listItem = document.createElement("li");
        listItem.textContent = "Chunk decoded: " + decoded;
        list.appendChild(listItem);
        result += decoded;
        resolve();
      });
    },
    close() {
      var listItem = document.createElement("li");
      listItem.textContent = "[MESSAGE RECEIVED] " + result;
      list.appendChild(listItem);
    },
    abort(err) {
      console.log("Sink error:", err);
    },
  },
  queuingStrategy,
);
sendMessage("Hello, world.", writableStream);
```

你可以在我们的[简单的 writer 示例](https://mdn.github.io/dom-examples/streams/simple-writer/)找到完整代码。

### 背压

由于 API 支持[背压](/zh-CN/docs/Web/API/Streams_API/Concepts#backpressure)的方式（其在代码中的实现）可能不太明显。要了解背压是如何实现的，请注意以下三点：

- 为创建计数策略（第 35 行）而设置的 `highWaterMark` 属性，其用于设置 `WritableStream` 实例处理单个 `write()` 操作时可接受的最大数据量。在该示例中，它是可以传递给 `defaultWriter.write()` 的最大数据量（第 11 行）。
- `defaultWriter.ready` 属性返回一个当 sink（`WritableStream` 构造函数的第一个属性）完成写入数据时兑现的 promise。数据源可以写入更多的数据（第 9 行）或者调用 `close()`（第 24 行）。过早调用 close() 会阻止数据写入。这就是示例调用 `defaultWriter.ready` 两次的原因（第 9 行和第 22 行）。
- 接收器的 `write()` 方法（第 40 行）返回的 {{jsxref("Promise")}} 告诉 `WritableStream` 和它的 writer 何时去兑现 `defaultWriter.ready`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/)，用于可读、可写和转换流的基本可视化。
