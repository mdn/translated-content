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

当完全结束流并且不再需要来自它的任何数据时使用 cancel，即使仍有排队等待的数据块。调用 cancel 后该数据丢失，并且流不再可读。为了仍然可以读这些数据块并且而不完全摆脱流，你应该使用 {{domxref("ReadableStreamDefaultController.close()")}}。

> **备注：**如果 reader 是激活状态，`cancel()` 方法的行为和关联流 ({{domxref("ReadableStream.cancel()")}}) 的行为相同。

## 语法

```js
cancel()
cancel(reason)
```

### 参数

- `reason` {{optional_inline}}
  - : 人类可读的取消原因。底层源代码可能使用它，也可能不使用它。

### 返回值

一个 {{jsxref("Promise")}}，会在结束时使用给定的 `reason` 参数兑现。

### 异常

- {{jsxref("TypeError")}}
  - : 源对象不是`ReadableStreamDefaultReader`，或者流没有所有者。

## 示例

在下面的简单示例中，使用 `getReader()` 创建的 {{domxref("ReadableStreamDefaultReader")}} 读取先前自定义的`ReadableStream`。(有关完整代码[简单随机流演示](https://mdn.github.io/dom-examples/streams/simple-random-stream/))。直到流完成读取，每一个块都按顺序读取并输出到 UI，此时我们退出递归函数并且将整个流打印到 UI 的另一部分。

```js
function fetchStream() {
  const reader = stream.getReader();
  let charsReceived = 0;
  // 当一个指已经被接受
  // read() 返回一个兑现的 promise
  reader.read().then(function processText({ done, value }) {
    // 结果包含两个属性:
    // done  - 如果为 true，表示流已经给你所有的数据.
    // value - 一些数据，当 done 为 true，始终为 undefined.
    if (done) {
      console.log("Stream complete");
      para.textContent = result;
      return;
    }
    // 取得的流是一个 Uint8Array
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement('li');
    listItem.textContent = 'Received ' + charsReceived + ' characters so far. Current chunk = ' + chunk;
    list2.appendChild(listItem);
    result += chunk;
    // 再次读取，并且再次调用该函数
    return reader.read().then(processText);
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
