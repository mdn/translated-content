---
title: ReadableStream.getReader()
slug: Web/API/ReadableStream/getReader
tags:
  - API
  - getReader
  - 参考
  - 可读取流
  - 方法
  - 流
translation_of: Web/API/ReadableStream/getReader
---
{{APIRef("Streams")}}

{{domxref("ReadableStream")}} 接口的 **`getReader()`** 方法会创建一个 `reader`，并将流锁定。只有当前 `reader` 将流释放后，其他 `reader` 才能使用。

## 语法

```js
getReader()
getReader(mode)
```

### 参数

- `mode` {{optional_inline}}
  - : 具有 `mode` 参数的对象，值为 {{domxref("DOMString")}} 类型 ,用来指定要创建的阅读器的类型。其值可以是：
    - `"byob"`，结果为 {{domxref("ReadableStreamBYOBReader")}} 类型，可读取可读字节流。
    - `undefined`（或不指定——缺省值），返回 {{domxref("ReadableStreamDefaultReader")}}，可以从流中返回单个块。

### 返回值

{{domxref("ReadableStreamDefaultReader")}} 类型或 {{domxref("ReadableStreamBYOBReader")}} 类型的实例，取决于 `mode` 值。

### 异常

- {{jsxref("RangeError")}}
  - : 提供的 mode 值 既不是 `"byob"` 也不是 `undefined`。
- {{jsxref("TypeError")}}
  - : 尝试创建阅读器的流不是 {{domxref("ReadableStream")}} 类型。

## 示例

下面是个简单的例子，在读取 `ReadableStream` 前，使用 `getReader()` 创建一个 {{domxref("ReadableStreamDefaultReader")}}。（查看全部代码：[Simple random stream example](https://mdn.github.io/dom-examples/streams/simple-random-stream/)）。按顺序读取每个块，并传递给 UI，当整个流被读取完毕后，从递归方法中退出，并在 UI 的另一部分输出整个流。

```js
function fetchStream() {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() 返回了一个 promise
  // 当数据被接收时 resolve
  reader.read().then(function processText({ done, value }) {
    // Result 对象包含了两个属性：
    // done  - 当 stream 传完所有数据时则变成 true
    // value - 数据片段。当 done 为 true 时始终为 undefined
    if (done) {
      console.log("Stream complete");
      para.textContent = value;
      return;
    }

    // value for fetch streams is a Uint8Array
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement('li');
    listItem.textContent = 'Received ' + charsReceived + ' characters so far. Current chunk = ' + chunk;
    list2.appendChild(listItem);

    result += chunk;

    // 再次调用这个函数以读取更多数据
    return reader.read().then(processText);
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
