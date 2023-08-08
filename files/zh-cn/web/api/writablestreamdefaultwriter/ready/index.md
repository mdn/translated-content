---
title: WritableStreamDefaultWriter.ready
slug: Web/API/WritableStreamDefaultWriter/ready
---

{{APIRef("Streams")}}

{{domxref("WritableStreamDefaultWriter")}} 接口的只读属性 **`ready`** 返回一个 {{jsxref("Promise")}}，当流填充内部队列的所需大小从非正数变为正数时兑现，表明它不再应用背压。

## 值

一个 {{jsxref("Promise")}}。

## 示例

以下示例使用了 `ready` 属性的两种用法。第一种使用 `ready` 来确保 `WritableStream` 已完成写入，因此能够保证其已经准备好接收新的数据。第二种也检查 `WritableStream` 是否完成写入，但是这一次是因为写入操作必须在 writer 关闭之前完成。

```js
function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  var defaultWriter = writableStream.getWriter();
  var encoder = new TextEncoder();
  var encoded = encoder.encode(message, { stream: true });
  encoded.forEach(function (chunk) {
    // Make sure the stream and its writer are able to
    //   receive data.
    defaultWriter.ready.then(function () {
      defaultWriter
        .write(chunk)
        .then(function () {
          console.log("Chunk written to sink.");
        })
        .catch(function (err) {
          console.log("Chunk error: " + err);
        });
    });
    // Call ready again to ensure that all chunks are written
    //   before closing the writer.
    defaultWriter.ready.then(function () {
      defaultWriter
        .close()
        .then(function () {
          console.log("All chunks written");
        })
        .catch(function (err) {
          console.log("Stream error: " + err);
        });
    });
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
