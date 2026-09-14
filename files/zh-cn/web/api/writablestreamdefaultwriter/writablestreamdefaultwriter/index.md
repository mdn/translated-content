---
title: WritableStreamDefaultWriter：WritableStreamDefaultWriter() 构造函数
short-title: WritableStreamDefaultWriter()
slug: Web/API/WritableStreamDefaultWriter/WritableStreamDefaultWriter
l10n:
  sourceCommit: 1fdb14f1bc00789a1dc8bf347b08b5b94d717f0c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

**`WritableStreamDefaultWriter()`** 构造函数用于创建一个新的 {{domxref("WritableStreamDefaultWriter")}} 对象实例。

> [!NOTE]
> 通常情况下，你不会手动使用此构造函数；而是通过调用 {{domxref("WritableStream.getWriter()")}} 方法来获取。

## 语法

```js-nolint
new WritableStreamDefaultWriter(stream)
```

### 参数

- `stream`
  - : 要写入的 {{domxref("WritableStream")}} 对象。

### 返回值

一个 {{domxref("WritableStreamDefaultWriter")}} 对象的实例。

### 异常

- {{jsxref("TypeError")}}
  - : 当传入的 `stream` 值不是 {{domxref("WritableStream")}}，或者该流已被其他写入器锁定时，会抛出此异常。

## 示例

下面的示例展示了如何创建一个带有自定义接收器和由 API 提供的队列策略的 `WritableStream`。然后调用一个名为 `sendMessage()` 的函数，将新创建的流和一个字符串作为参数传入。在该函数内部，通过调用流的 `getWriter()` 方法获取一个 {{domxref("WritableStreamDefaultWriter")}} 实例。接着使用 `forEach()` 方法将字符串的每个片段写入流中。最后，`write()` 和 `close()` 方法会返回 promise，用于处理数据块或整个流写入操作的成功或失败结果。

```js
const list = document.querySelector("ul");

function sendMessage(message, writableStream) {
  // defaultWriter 的类型是 WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message);
  encoded.forEach((chunk) => {
    defaultWriter.ready
      .then(() => defaultWriter.write(chunk))
      .then(() => {
        console.log("分块已写入接收器。");
      })
      .catch((err) => {
        console.log("分块出错：", err);
      });
  });
  // 再次调用 ready，确保所有分块在关闭 writer 之前都已写入。
  defaultWriter.ready
    .then(() => {
      defaultWriter.close();
    })
    .then(() => {
      console.log("所有分块已写入完成");
    })
    .catch((err) => {
      console.log("流错误：", err);
    });
}

const decoder = new TextDecoder("utf-8");
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });
let result = "";
const writableStream = new WritableStream(
  {
    // 实现接收器
    write(chunk) {
      return new Promise((resolve, reject) => {
        const buffer = new ArrayBuffer(1);
        const view = new Uint8Array(buffer);
        view[0] = chunk;
        const decoded = decoder.decode(view, { stream: true });
        const listItem = document.createElement("li");
        listItem.textContent = `分块解码结果：${decoded}`;
        list.appendChild(listItem);
        result += decoded;
        resolve();
      });
    },
    close() {
      const listItem = document.createElement("li");
      listItem.textContent = `[消息已接收] ${result}`;
      list.appendChild(listItem);
    },
    abort(err) {
      console.log("接收器出错：", err);
    },
  },
  queuingStrategy,
);

sendMessage("Hello, world.", writableStream);
```

完整代码示例可参见我们的[简单 writer 示例](https://mdn.github.io/dom-examples/streams/simple-writer/)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
