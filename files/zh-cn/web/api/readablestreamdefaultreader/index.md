---
title: ReadableStreamDefaultReader
slug: Web/API/ReadableStreamDefaultReader
---

{{APIRef("Streams")}}

[Streams API](/zh-CN/docs/Web/API/Streams_API) 的 **ReadableStreamDefaultReader** 的接口 表示一个可被用于读取来自网络提供的流数据 (例如 fetch 请求) 的默认读取器

## 构造方法

- [`ReadableStreamDefaultReader()`](/zh-CN/docs/Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader)
  - : 创建 和 返回 一个 `ReadableStreamDefaultReader()` 对象实例。

## 属性

- [`ReadableStreamDefaultReader.closed`](/zh-CN/docs/Web/API/ReadableStreamDefaultReader/closed)

  - : 允许你编写 当 stream 结束时 执行的代码 . 如果这个 stream 变成关闭状态或者 reader 的锁 (lock) 被释放 则返回一个状态是 fulfills 的 promise，如果这个 stream 报错则返回 rejects 的 promise.

## 方法

- [`ReadableStreamDefaultReader.cancel()`](/zh-CN/docs/Web/API/ReadableStreamDefaultReader/cancel)
  - : 取消这个 stream，表示对这个 stream 失去了兴趣。提供的参数将传递给源 source，可能会也可能不会用到这些参数。
- [`ReadableStreamDefaultReader.read()`](/zh-CN/docs/Web/API/ReadableStreamDefaultReader/read)
  - : 返回一个 promise，提供对 stream 内部队列中下一个块 (chunk) 访问的 promise.
- [`ReadableStreamDefaultReader.releaseLock()`](/zh-CN/docs/Web/API/ReadableStreamDefaultReader/releaseLock)
  - : 释放读取这个 stream 的锁。

## 例子

在下面的例子中，{{domxref("Response")}} 被创建为流 HTML 片段 fetched 来自其他源。

它展示了一个 {{domxref("ReadableStream")}} 和一个 [`Uint8Array`](/zh-CN/docs/Web/API/Uint8Array)组合使用的例子。

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
        }).then(push);
      };

      push();
    }
  });

  return new Response(stream, { headers: { "Content-Type": "text/html" } });
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
