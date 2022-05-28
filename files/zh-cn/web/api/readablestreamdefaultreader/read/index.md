---
title: ReadableStreamDefaultReader.read()
slug: Web/API/ReadableStreamDefaultReader/read
tags:
  - API
  - Method
  - ReadableStreamDefaultReader
  - Reference
  - Streams
  - read
translation_of: api/ReadableStreamDefaultReader/read
---
{{APIRef("Streams")}}

{{domxref("ReadableStreamDefaultReader")}} 接口的 **`read()`** 方法返回一个 {{jsxref("Promise")}}，这个 promise 提供对流内部队列中下一个块的使用权。

## 语法

```js
read()
```

### 参数

无。

### 返回值

一个 {{jsxref("Promise")}}，兑现/拒绝的结果取决于流的状态。不同的可能性如下:

- 如果一个块可用，则 promise 将使用 `{ value: theChunk, done: false }` 形式的对象来兑现。
- 如果流关闭，则 promise 将使用 `{ value: undefined, done: true }` 形式的对象来兑现。
- 如果流发生错误，promise 将因相关错误被拒绝。

### 异常

- {{jsxref("TypeError")}}
  - : 源对象不是 `ReadableStreamDefaultReader`，或者流没有所有者。

## 示例

### 示例 1 - 简单的例子

这个例子展示了基本的 API 使用，但是不会尝试处理像流块不在边界上结束之类的情况。

在此示例中 `stream` 是一个先前创建的自定义 `ReadableStream`。它使用 `getReader()` 创建的 {{domxref("ReadableStreamDefaultReader")}} 读取。（有关完整代码[简单随机流演示](https://mdn.github.io/dom-examples/streams/simple-random-stream/)）。每个块按顺序读取并作为 UTF-8 字节数组输出到 UI，直到流完成读取，此时我们退出递归函数并将整个流打印到 UI 的另一部分。

```js
function fetchStream() {
  const reader = stream.getReader();
  let charsReceived = 0;
  // read() 返回一个 promise，其会在接收到数据时被兑现
  reader.read().then(function processText({ done, value }) {
    // 结果包含两个属性:
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
    let listItem = document.createElement('li');
    listItem.textContent = 'Received ' + charsReceived + ' characters so far. Current chunk = ' + chunk;
    list2.appendChild(listItem);
    result += chunk;
    // 再次调用该函数以读取更多数据
    return reader.read().then(processText);
  });
}
```

### 示例 2 - 逐行处理文本

这个示例向你展示如何获取一个文本文件并且将它作为文本行流处理。它处理不以行边界结束的流块并且从 Uint8Array 转换为字符串。

```js
async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder("utf-8");
  let response = await fetch(fileURL);
  let reader = response.body.getReader();
  let {value: chunk, done: readerDone} = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk, {stream: true}) : "";
  let re = /\r\n|\n|\r/gm;
  let startIndex = 0;
  for (;;) {
    let result = re.exec(chunk);
    if (!result) {
      if (readerDone) {
        break;
      }
      let remainder = chunk.substr(startIndex);
      ({value: chunk, done: readerDone} = await reader.read());
      chunk = remainder + (chunk ? utf8Decoder.decode(chunk, {stream: true}) : "");
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
