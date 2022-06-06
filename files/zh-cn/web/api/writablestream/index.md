---
title: WritableStream
slug: Web/API/WritableStream
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - Streams
  - WritableStream
translation_of: Web/API/WritableStream
---
{{APIRef("Streams")}}

[流操作 API](/zh-CN/docs/Web/API/Streams_API)的 **`WritableStream`** 接口为将流数据写入目的地（称为 sink）提供了一个标准的抽象概念。该对象带有内置的背压和队列。

`WritableStream` 是一个 {{glossary("Transferable objects","transferable object")}}。

## 构造函数

- {{domxref("WritableStream.WritableStream", "WritableStream()")}}
  - : 创造一个新的 `WritableStream` 对象。

## 属性

- {{domxref("WritableStream.locked")}} {{readonlyinline}}
  - : 一个布尔值，表示 `WritableStream` 是否锁定到一个 writer。

## 方法

- {{domxref("WritableStream.abort()")}}
  - : 中止流，表示生产者不能再成功地写入流并且将立刻移至一个错误状态，并丢弃所有已排入的数据。
- {{domxref("WritableStream.close()")}}
  - : 关闭流。
- {{domxref("WritableStream.getWriter()")}}
  - : 返回 {{domxref("WritableStreamDefaultWriter")}} 新实例并且将流锁定到该实例。当流被锁定时，直到这个流被释放之前，不能获取其他 writer。

## 示例

下面的例子说明了这个接口的几个特征。它展示了使用自定义 sink 和 API 提供的排队策略创建的 `WritableStream`。然后它调用一个 `sendMessage()` 的函数，传递新创建的流和一个字符串。在这个函数内部，它调用流的 `getWriter()` 方法，该方法返回一个 {{domxref("WritableStreamDefaultWriter")}} 实例。`forEach()` 用于将字符串的每个块写入流。最后， `write()` 和 `close()` 返回 promise，该 promise 由处理后的块和流是否成功决定。

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

由于 API 中支持[背压](/zh-CN/docs/Web/API/Streams_API/Concepts#backpressure)，其在代码中的执行可能不太明显。为了明白背压是如何执行的，请查看三件事情:

- 在创建计数策略（第 35 行）时设置的 `highWaterMark` 属性，用于设置 `WritableStream` 实例操作单个 `write()` 时处理的最大数据量。在该示例中，它是可以发送到 `defaultWriter.write()` 的最大数据量（第 11 行）。
- `defaultWriter.ready` 属性返回一个当 sink（`WritableStream` 构造函数的第一个属性）完成写入数据时兑现的 promise。数据源可以写入更多的数据（第 9 行）或者调用 `close()`（第 24 行）。过早调用 close() 会阻止数据写入。这就是示例调用 `defaultWriter.ready` 两次的原因（第 9 行和第 22 行）。
- sink 的 `write()` 方法（第 40 行）返回的 {{jsxref("Promise")}} 告诉 `WritableStream` 和它的 writer 何时去兑现 `defaultWriter.ready`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/)，用于可读、可写和转换流的基本可视化。
