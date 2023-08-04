---
title: TransformStreamDefaultController
slug: Web/API/TransformStreamDefaultController
---

{{DefaultAPISidebar("Streams API")}}

[Stream API](/zh-CN/docs/Web/API/Streams_API) 的 **`TransformStreamDefaultController`** 接口提供了操作关联的 {{domxref("ReadableStream")}} 和 {{domxref("WritableStream")}} 的方法。

当构造 {{domxref("TransformStream")}} 时，会创建一个 `TransformStreamDefaultController`。因此它没有构造函数。获取 `TransformStreamDefaultController` 实例的方式是通过 {{domxref("TransformStream.TransformStream", "TransformStream()")}} 的回调方法。

## 实例属性

- {{domxref("TransformStreamDefaultController.desiredSize")}}{{readonlyinline}}
  - : 返回填充满流内部队列的可读端所需要的大小。

## 实例方法

- {{domxref("TransformStreamDefaultController.enqueue()")}}
  - : 排入一个分块（单个数据）到流的可读端。
- {{domxref("TransformStreamDefaultController.error()")}}
  - : 转换流的可写端和可读端都出现错误。
- {{domxref("TransformStreamDefaultController.terminate()")}}
  - : 关闭流的可读端并且流的可写端出错。

## 示例

在下面的示例中，一个转换流接收所有的分块将其转换为 {{jsxref("Uint8Array")}}，使用了 {{domxref("TransformStreamDefaultController.error()","error()")}} 和 {{domxref("TransformStreamDefaultController.enqueue()","enqueue()")}} 方法。

```js
const transformContent = {
  start() {}, // required.
  async transform(chunk, controller) {
    chunk = await chunk;
    switch (typeof chunk) {
      case "object":
        // just say the stream is done I guess
        if (chunk === null) controller.terminate();
        else if (ArrayBuffer.isView(chunk))
          controller.enqueue(
            new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength),
          );
        else if (
          Array.isArray(chunk) &&
          chunk.every((value) => typeof value === "number")
        )
          controller.enqueue(new Uint8Array(chunk));
        else if (
          "function" === typeof chunk.valueOf &&
          chunk.valueOf() !== chunk
        )
          this.transform(chunk.valueOf(), controller); // hack
        else if ("toJSON" in chunk)
          this.transform(JSON.stringify(chunk), controller);
        break;
      case "symbol":
        controller.error("Cannot send a symbol as a chunk part");
        break;
      case "undefined":
        controller.error("Cannot send undefined as a chunk part");
        break;
      default:
        controller.enqueue(this.textencoder.encode(String(chunk)));
        break;
    }
  },
  flush() {
    /* do any destructor work here */
  },
};

class AnyToU8Stream extends TransformStream {
  constructor() {
    super({ ...transformContent, textencoder: new TextEncoder() });
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
