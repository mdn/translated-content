---
title: ReadableStream.tee()
slug: Web/API/ReadableStream/tee
---

{{APIRef("Streams")}}

{{domxref("ReadableStream")}} 接口的 **`tee()`** 方法对当前的可读流进行[拷贝（tee）](https://streams.spec.whatwg.org/#tee-a-readable-stream)，返回包含两个 {{domxref("ReadableStream")}} 实例分支的数组。

这对于两个 reader 顺序的读取或者同时读取流有很大用处（可能以不同的速度）。例如，如果你想要从服务器获取一个响应，然后流式的传输到浏览器，并且也将它流式的传输到 ServiceWorker 缓存中，你可以在 ServiceWorker 执行此操作。由于响应体不能多次使用，你需要两个副本才能这么做。

一个被拷贝的（teed）流将发出两个 `ReadableStream` 分支中其中较*快*速率的消费者控制背压，并且内部队列中未读的数据在 `ReadableStream` 上被较慢的消费，没有任何限制或者背压。因此，当两个内部分支*都*有一个未读的元素时，原来的 `ReadableStream` 的控制器的内部队列将开始填充满，并且当它的 {{domxref("ReadableStreamDefaultController.desiredSize", "desiredSize")}} ≤ 0 或字节流控制器 {{domxref("ReadableByteStreamController.desiredSize", "desiredSize")}} ≤ 0，然后控制器将停止在底层源上调用 `pull(controller)`，并且传递给 {{domxref("ReadableStream.ReadableStream", "new ReadableStream()")}}。如果仅有一个分支被消费，那么主体将会在内存中排队。因此，你不应该使用内置的 `tee()` 去以不同的速度并行读取非常大的流。相反，搜寻一个完全背压到以较*慢*速度消耗分支的实现。

要取消流，需要去取消两个生成的分支。正在被拷贝的流通常会在持续时间内被锁定，阻止其他的 reader 锁定它。

## 语法

```js-nolint
tee()
```

### 参数

无。

### 返回值

一个包含两个 {{domxref("ReadableStream")}} 实例的 {{jsxref("Array")}}。

### 异常

- {{jsxref("TypeError")}}
  - : 如果源流不是一个 `ReadableStream` 则抛出。

## 示例

在下面的简单示例中，一个先前生成的流被拷贝（tee），然后将两个生成的流（包含在生成的数组的两个成员中）传递给一个函数，该函数将从两个流中读取数据并且将每个流的分块按顺序打印到不同的 UI 部分。完整代码参见[简单 tee 示例](https://mdn.github.io/dom-examples/streams/simple-tee-example/)。

```js
function teeStream() {
  const teedOff = stream.tee();
  fetchStream(teedOff[0], list2);
  fetchStream(teedOff[1], list3);
}

function fetchStream(stream, list) {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() returns a promise that resolves
  // when a value has been received
  reader.read().then(function processText({ done, value }) {
    // Result objects contain two properties:
    // done  - true if the stream has already given you all its data.
    // value - some data. Always undefined when done is true.
    if (done) {
      console.log("Stream complete");
      return;
    }

    // value for fetch streams is a Uint8Array
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement("li");
    listItem.textContent =
      "Read " + charsReceived + " characters so far. Current chunk = " + chunk;
    list.appendChild(listItem);

    // Read some more, and call this function again
    return reader.read().then(processText);
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} 构造函数
- [拷贝流](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams#拷贝流)
