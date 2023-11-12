---
title: ReadableStreamDefaultReader()
slug: Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader
---

{{APIRef("Streams")}}

**`ReadableStreamDefaultReader()`** 构造函数创建并返回一个 `ReadableStreamDefaultReader` 实例对象。

> **备注：** 你通常不需要手动创建，可以使用 {{domxref("ReadableStream.getReader()")}} 方法代替。

## 语法

```js-nolint
new ReadableStreamDefaultReader(stream)
```

### 参数

- `stream`
  - : 将被读取的 {{domxref("ReadableStream")}}。

### 返回值

一个 {{domxref("ReadableStreamDefaultReader")}} 实例对象。

### 异常

- {{jsxref("TypeError")}}
  - : 如果提供的 `stream` 参数不是一个 {{domxref("ReadableStream")}}，或者它已经被另一个 reader 锁定则抛出异常。

## 示例

在下面的简单示例中，使用 `getReader()` 创建的 {{domxref("ReadableStreamDefaultReader")}} 读取先前自定义的 `ReadableStream`。（有关完整代码[简单随机流演示](https://mdn.github.io/dom-examples/streams/simple-random-stream/)）。直到流完成读取，每一个块都按顺序读取并输出到 UI，此时我们退出递归函数并且将整个流打印到 UI 的另一部分。

```js
function fetchStream() {
  const reader = stream.getReader();
  let charsReceived = 0;
  // read() 返回一个 promise，其会在接收到数据时被兑现
  reader.read().then(function processText({ done, value }) {
    // 结果包含两个属性：
    // done  - 如果为 true，表示流已经返回所有的数据。
    // value - 一些数据，done 为 true 时，其值始终为 undefined。
    if (done) {
      console.log("Stream complete");
      para.textContent = result;
      return;
    }
    // 从流中获取的数据是一个 Uint8Array
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement("li");
    listItem.textContent =
      "Received " +
      charsReceived +
      " characters so far. Current chunk = " +
      chunk;
    list2.appendChild(listItem);
    result += chunk;
    // 再次调用该函数以读取更多数据
    return reader.read().then(processText);
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Stream API 概念](/zh-CN/docs/Web/API/Streams_API)
- [使用可读流](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams)
- {{domxref("ReadableStream")}}
- {{domxref("ReadableStreamDefaultController")}}
