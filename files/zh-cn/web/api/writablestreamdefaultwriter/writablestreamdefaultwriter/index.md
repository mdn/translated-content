---
title: WritableStreamDefaultWriter()
slug: Web/API/WritableStreamDefaultWriter/WritableStreamDefaultWriter
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Experimental
  - Reference
  - Streams
  - WritableStreamDefaultWriter
translation_of: Web/API/WritableStreamDefaultWriter/WritableStreamDefaultWriter
---
{{SeeCompatTable}}{{APIRef("Streams")}}

**`WritableStreamDefaultWriter()`** 构造函数创建一个新的 {{domxref("WritableStreamDefaultWriter")}} 对象实例。

> **备注：** 你通常不需要手动创建，可以使用 {{domxref("WritableStream.getWriter()")}} 方法代替。

## 语法

```js
new WritableStreamDefaultWriter(stream)
```

### 参数

- `stream`
  - : 需要写入的 {{domxref("WritableStream")}}。

### 返回值

一个 {{domxref("WritableStreamDefaultWriter")}} 对象实例。

### 异常

- {{jsxref("TypeError")}}
  - : 提供的 `stream` 并不是一个 {{domxref("WritableStream")}}，或者他已经被另一个 writer 锁定。

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
