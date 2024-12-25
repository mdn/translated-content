---
title: ReadableStreamDefaultReader
slug: Web/API/ReadableStreamDefaultReader
---

{{APIRef("Streams")}}

[Stream API](/zh-CN/docs/Web/API/Streams_API) 的 **ReadableStreamDefaultReader** 接口表示一个用于读取来自网络提供的流数据（例如 fetch 请求）的默认 reader。

`ReadableStreamDefaultReader` 可以用于读取底层为任意类型源的 {{domxref("ReadableStream")}}（这与 {{domxref("ReadableStreamBYOBReader")}} 不同，后者仅可以和*底层为字节源*的可读流一起使用）。

然而，请注意，零拷贝传输仅支持自动分配缓冲区的底层字节源这一种底层源。换句话说，流必须同时指定[构造函数](/zh-CN/docs/Web/API/ReadableStream/ReadableStream)中的 [`type="bytes"`](/zh-CN/docs/Web/API/ReadableStream/ReadableStream#type) 和 [`autoAllocateChunkSize`](/zh-CN/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize)。对于任何其他底层源，流将始终使用来自内置队列的数据满足读取请求。

## 构造函数

- [`ReadableStreamDefaultReader()`](/zh-CN/docs/Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader)
  - : 创建和返回一个 `ReadableStreamDefaultReader()` 对象实例。

## 实例属性

- [`ReadableStreamDefaultReader.closed`](/zh-CN/docs/Web/API/ReadableStreamDefaultReader/closed)

  - : 返回一个 promise，该 promise 在流关闭时兑现，如果流抛出错误或 reader 的锁被释放，则拒绝。此属性使你能够编写响应流过程结束时执行的代码。

## 实例方法

- [`ReadableStreamDefaultReader.cancel()`](/zh-CN/docs/Web/API/ReadableStreamDefaultReader/cancel)
  - : 返回一个 {{jsxref("Promise")}}，当流被取消时兑现。调用该方法表示消费者对该流失去兴趣。提供的 `reason` 参数将会传递给底层源，其可能使用它，也可能不使用它。
- [`ReadableStreamDefaultReader.read()`](/zh-CN/docs/Web/API/ReadableStreamDefaultReader/read)
  - : 返回一个 promise，提供对流内部队列中下一个分块的访问权限。
- [`ReadableStreamDefaultReader.releaseLock()`](/zh-CN/docs/Web/API/ReadableStreamDefaultReader/releaseLock)
  - : 释放读取这个 stream 的锁。

## 示例

在下面的示例中，创建自定义 {{domxref("Response")}}，将从其他资源获取的 HTML 片段流式传输到浏览器。

它展示了一个 {{domxref("ReadableStream")}} 和一个 [`Uint8Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) 组合使用的例子。

```js
fetch("https://www.example.org/").then((response) => {
  const reader = response.body.getReader();
  const stream = new ReadableStream({
    start(controller) {
      // The following function handles each data chunk
      function push() {
        // "done" is a Boolean and value a "Uint8Array"
        return reader.read().then(({ done, value }) => {
          // Is there no more data to read?
          if (done) {
            // Tell the browser that we have finished sending data
            controller.close();
            return;
          }

          // Get the data and send it to the browser via the controller
          controller.enqueue(value);
          push();
        });
      }

      push();
    },
  });

  return new Response(stream, { headers: { "Content-Type": "text/html" } });
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Stream API 概念](/zh-CN/docs/Web/API/Streams_API)
- [使用可读流](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams)
- {{domxref("ReadableStream")}}
- [WHATWG Stream Visualiser](https://whatwg-stream-visualizer.glitch.me/)，用于可读、可写和转换流的基本可视化。
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) 或 [sd-streams](https://github.com/stardazed/sd-streams)——polyfill
