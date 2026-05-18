---
title: TransformStreamDefaultController
slug: Web/API/TransformStreamDefaultController
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

[流 API](/zh-CN/docs/Web/API/Streams_API) 的 **`TransformStreamDefaultController`** 接口提供了操作关联的 {{domxref("ReadableStream")}} 和 {{domxref("WritableStream")}} 的方法。

当构造 {{domxref("TransformStream")}} 时，会创建一个 `TransformStreamDefaultController`。因此它没有构造函数。获取 `TransformStreamDefaultController` 实例的方式是通过 {{domxref("TransformStream.TransformStream", "TransformStream()")}} 的回调方法。

## 实例属性

- {{domxref("TransformStreamDefaultController.desiredSize")}} {{ReadOnlyInline}}
  - : 返回填充满流内部队列的可读端所需要的大小。

## 实例方法

- {{domxref("TransformStreamDefaultController.enqueue()")}}
  - : 将一个分块（单个数据单元）加入流的可读端队列。
- {{domxref("TransformStreamDefaultController.error()")}}
  - : 使转换流的可写端和可读端都报告错误。
- {{domxref("TransformStreamDefaultController.terminate()")}}
  - : 关闭流的可读端，并使流的可写端报告错误。

## 示例

在下面的示例中，一个转换流接收所有的分块将其转换为 {{jsxref("Uint8Array")}} 值，使用了 {{domxref("TransformStreamDefaultController.error()","error()")}} 和 {{domxref("TransformStreamDefaultController.enqueue()","enqueue()")}} 方法。

```js
const transformContent = {
  start() {}, // 必需
  async transform(chunk, controller) {
    chunk = await chunk;
    switch (typeof chunk) {
      case "object":
        // 流大概结束了
        if (chunk === null) {
          controller.terminate();
        } else if (ArrayBuffer.isView(chunk)) {
          controller.enqueue(
            new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength),
          );
        } else if (
          Array.isArray(chunk) &&
          chunk.every((value) => typeof value === "number")
        ) {
          controller.enqueue(new Uint8Array(chunk));
        } else if (
          typeof chunk.valueOf === "function" &&
          chunk.valueOf() !== chunk
        ) {
          this.transform(chunk.valueOf(), controller); // hack
        } else if ("toJSON" in chunk) {
          this.transform(JSON.stringify(chunk), controller);
        }
        break;
      case "symbol":
        controller.error("无法将 Symbol 作为分块部分发送");
        break;
      case "undefined":
        controller.error("无法将 undefined 作为分块部分发送");
        break;
      default:
        controller.enqueue(this.textencoder.encode(String(chunk)));
        break;
    }
  },
  flush() {
    /* 做一些清理工作 */
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
