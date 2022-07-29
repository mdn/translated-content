---
title: ReadableStreamDefaultReader.cancel()
slug: Web/API/ReadableStreamDefaultReader/cancel
tags:
  - API
  - Method
  - ReadableStreamDefaultReader
  - Reference
  - Streams
  - cancel
translation_of: api/ReadableStreamDefaultReader/cancel
---
{{APIRef("Streams")}}

{{domxref("ReadableStreamDefaultReader")}} 接口的 **`cancel()`** 方法返回一个 {{jsxref("Promise")}}，这个 promise 在流被取消时兑现。消费者在流中调用该方法发出取消流的信号。

cancel 用于在不再需要来自一个流的任何数据的情况下完全结束这个流，即使仍有排队等待的数据块。调用 cancel 后该数据丢失，并且流不再可读。为了仍然可以读这些数据块而不完全结束这个流，你应该使用 {{domxref("ReadableStreamDefaultController.close()")}}。

> **备注：** 如果 reader 处于激活状态，`cancel()` 方法的行为和关联流 ({{domxref("ReadableStream.cancel()")}}) 的行为相同。

## 语法

```js
cancel()
cancel(reason)
```

### 参数

- `reason` {{optional_inline}}
  - : 人类可读的取消原因。这个值可能会被使用。

### 返回值

一个 {{jsxref("Promise")}}，会在结束时使用给定的 `reason` 参数兑现。

### 异常

- {{jsxref("TypeError")}}
  - : 源对象不是 `ReadableStreamDefaultReader`，或者流没有所有者。

## 示例

在下面的简单示例中，使用 `getReader()` 创建的 {{domxref("ReadableStreamDefaultReader")}} 读取先前自定义的 `ReadableStream`。（有关完整代码[简单随机流演示](https://mdn.github.io/dom-examples/streams/simple-random-stream/)）。直到流完成读取，每一个块都按顺序读取并输出到 UI，此时我们退出递归函数并且将整个流打印到 UI 的另一部分。

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
