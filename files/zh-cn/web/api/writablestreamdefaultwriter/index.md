---
title: WritableStreamDefaultWriter
slug: Web/API/WritableStreamDefaultWriter
---

{{APIRef("Streams")}}

[Stream API](/zh-CN/docs/Web/API/Streams_API) 的 **`WritableStreamDefaultWriter`** 接口是由 {{domxref("WritableStream.getWriter()")}} 返回的对象，并且一旦创建就会将 writer 锁定到 `WritableStream`，确保没有其他流可以写入底层 sink。

## 构造函数

- {{domxref("WritableStreamDefaultWriter.WritableStreamDefaultWriter", "WritableStreamDefaultWriter()")}}
  - : 创建一个新的 `WritableStreamDefaultWriter` 对象实例。

## 实例属性

- {{domxref("WritableStreamDefaultWriter.closed")}}{{readonlyinline}}
  - : 允许你编写当流结束时执行的代码。返回一个流关闭时兑现的 promise，或者在抛出错误或者 writer 的锁释放时被拒绝。
- {{domxref("WritableStreamDefaultWriter.desiredSize")}}{{readonlyinline}}
  - : 返回填充满流的内部队列所需要的大小。
- {{domxref("WritableStreamDefaultWriter.ready")}}{{readonlyinline}}
  - : 返回一个 {{jsxref("Promise")}}，当流填充内部队列的所需大小从非正数变为正数时兑现，表明它不再应用背压。

## 实例方法

- {{domxref("WritableStreamDefaultWriter.abort()")}}
  - : 中止流，表示生产者不能再向流写入数据（会立刻返回一个错误状态），并丢弃所有已入队的数据。
- {{domxref("WritableStreamDefaultWriter.close()")}}
  - : 关闭关联的可写流。
- {{domxref("WritableStreamDefaultWriter.releaseLock()")}}
  - : 释放 writer 对相应流的锁定。释放锁后，writer 将不再处于锁定状态。如果释放锁时关联流出错，writer 随后也会以同样的方式发生错误；此外，writer 将关闭。
- {{domxref("WritableStreamDefaultWriter.write()")}}
  - : 将传递的数据块写入 {{domxref("WritableStream")}} 和它的底层接收器，然后返回一个 {{jsxref("Promise")}}，promise 的状态由写入操作是否成功来决定。

## 示例

下面的例子说明了这个接口的几个功能。它展示了使用自定义接收器和由 API 提供的队列策略创建的 `WritableStream`。然后它调用一个 `sendMessage()` 的函数，传递新创建的流和一个字符串。在这个函数内部，它调用流的 `getWriter()` 方法，该方法返回一个 {{domxref("WritableStreamDefaultWriter")}} 实例。`forEach()` 用于将字符串的每个分块写入流。最后，`write()` 和 `close()` 方法都会返回 promise，promise 的状态由对应的操作是否成功来决定。

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
