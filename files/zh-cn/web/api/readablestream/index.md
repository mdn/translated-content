---
title: ReadableStream
slug: Web/API/ReadableStream
---

{{APIRef("Streams")}}

[Stream API](/zh-CN/docs/Web/API/Streams_API) 中的 `ReadableStream` 接口表示可读的字节数据流。[Fetch API](/zh-CN/docs/Web/API/Fetch_API) 通过 {{domxref("Response")}} 的属性 {{domxref("Body.body", "body")}} 提供了一个具体的 `ReadableStream` 对象。

## 构造函数

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}
  - : 创建并从给定的处理程序返回一个可读流对象。

## 实例属性

- {{domxref("ReadableStream.locked")}} {{readonlyInline}}
  - : `locked` 返回该可读流是否被锁定到一个 reader。

## 实例方法

- {{domxref("ReadableStream.cancel()")}}
  - : 取消读取流，读取方发出一个信号，表示对这束流失去兴趣。可以传入 reason 参数表示取消原因，这个原因将传回给调用方。
- {{domxref("ReadableStream.getReader()")}}
  - : 创建一个读取器并将流锁定于其上。一旦流被锁定，其他读取器将不能读取它，直到它被释放。
- {{domxref("ReadableStream.pipeThrough()")}}
  - : 提供将当前流管道输出到一个转换（transform）流或可写/可读流对的链式方法。
- {{domxref("ReadableStream.pipeTo()")}}
  - : 将当前 ReadableStream 管道输出到给定的 {{domxref("WritableStream")}}，并返回一个 promise，该 promise 在输出过程成功完成时兑现，在发生错误时拒绝。
- {{domxref("ReadableStream.tee()")}}
  - : `tee` 方法[拷贝](https://streams.spec.whatwg.org/#tee-a-readable-stream)了可读流，返回包含两个 {{domxref("ReadableStream")}} 实例分支的数组，每个元素接收了相同的传输数据。

## 示例

### Fetch 流

下面的例子，创建了一个智能的 {{domxref("Response")}} 将从另一个资源获取的 HTML 片段流式的传输到浏览器。

它演示了 {{domxref("ReadableStream")}} 与 {{domxref("Uint8Array")}} 的协同用法。

```js
fetch("https://www.example.org")
  .then((response) => response.body)
  .then((rb) => {
    const reader = rb.getReader();
    return new ReadableStream({
      start(controller) {
        // The following function handles each data chunk
        function push() {
          // "done" is a Boolean and value a "Uint8Array"
          reader.read().then(({ done, value }) => {
            // If there is no more data to read
            if (done) {
              console.log("done", done);
              controller.close();
              return;
            }
            // Get the data and send it to the browser via the controller
            controller.enqueue(value);
            // Check chunks by logging to the console
            console.log(done, value);
            push();
          });
        }
        push();
      },
    });
  })
  .then((stream) =>
    // Respond with our stream
    new Response(stream, { headers: { "Content-Type": "text/html" } }).text(),
  )
  .then((result) => {
    // Do things with result
    console.log(result);
  });
```

### 转换异步迭代器到流

将[（异步）迭代器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)转换为可读流：

```js
function iteratorToStream(iterator) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();
      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
  });
}
```

这适用于异步和非异步的迭代器。

### 使用 for await...of 对流进行异步迭代

此示例展示了如何使用 [`for await...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of) 循环来迭代到达的分块，以处理 `fetch()` 响应。

```js
const response = await fetch("https://www.example.org");
let total = 0;

// Iterate response.body (a ReadableStream) asynchronously
for await (const chunk of response.body) {
  // Do something with each chunk
  // Here we just accumulate the size of the response.
  total += chunk.length;
}

// Do something with the total
console.log(total);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Stream API 概念](/zh-CN/docs/Web/API/Streams_API)
- [使用可读流](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams)
- [使用可读字节流](/zh-CN/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [WHATWG Stream Visualiser](https://whatwg-stream-visualizer.glitch.me/)，用于可读、可写和转换流的基本可视化。
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) 或 [sd-streams](https://github.com/stardazed/sd-streams)——polyfill
