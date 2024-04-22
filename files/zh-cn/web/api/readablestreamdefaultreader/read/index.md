---
title: ReadableStreamDefaultReader.read()
slug: Web/API/ReadableStreamDefaultReader/read
---

{{APIRef("Streams")}}

{{domxref("ReadableStreamDefaultReader")}} 接口的 **`read()`** 方法返回一个 {{jsxref("Promise")}}，这个 promise 提供流的内部队列中下一个分块（以供访问）。

## 语法

```js-nolint
read()
```

### 参数

无。

### 返回值

一个 {{jsxref("Promise")}}，其兑现/拒绝的结果取决于流的状态。不同的可能性如下：

- 如果有分块可用，则 promise 将使用 `{ value: theChunk, done: false }` 形式的对象来兑现。
- 如果流已经关闭，则 promise 将使用 `{ value: undefined, done: true }` 形式的对象来兑现。
- 如果流发生错误，promise 将因相关错误被拒绝。

### 异常

- {{jsxref("TypeError")}}
  - : 源对象不是 `ReadableStreamDefaultReader`，或者流没有所有者。

## 示例

### 示例 1——简单的例子

这个例子展示了基本的 API 使用方法，但是其不会尝试处理一些复杂的问题，如流中的分块不在行的末尾结束。

在此示例中 `stream` 是一个先前创建的自定义 `ReadableStream`。它使用 `getReader()` 创建的 {{domxref("ReadableStreamDefaultReader")}} 读取。（有关完整代码请参见[简单随机流演示](https://mdn.github.io/dom-examples/streams/simple-random-stream/)）。每个块按顺序读取并作为 UTF-8 字节数组输出到 UI，直到流完成读取，此时我们退出递归函数并将整个流打印到 UI 的另一部分。

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

### 示例 2——逐行处理文本

这个示例向你展示如何获取一个文本文件并以流的形式处理文本中的每一行。它能够处理分块不在行的末尾结束的情况，并将 Uint8Array 转换为字符串。

```js
async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder("utf-8");
  let response = await fetch(fileURL);
  let reader = response.body.getReader();
  let { value: chunk, done: readerDone } = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk, { stream: true }) : "";
  let re = /\r\n|\n|\r/gm;
  let startIndex = 0;
  for (;;) {
    let result = re.exec(chunk);
    if (!result) {
      if (readerDone) {
        break;
      }
      let remainder = chunk.substr(startIndex);
      ({ value: chunk, done: readerDone } = await reader.read());
      chunk =
        remainder + (chunk ? utf8Decoder.decode(chunk, { stream: true }) : "");
      startIndex = re.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = re.lastIndex;
  }
  if (startIndex < chunk.length) {
    // last line didn't end in a newline char
    yield chunk.substr(startIndex);
  }
}
for await (let line of makeTextFileLineIterator(urlOfFile)) {
  processLine(line);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}} 构造函数
- [使用可读流](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams)
