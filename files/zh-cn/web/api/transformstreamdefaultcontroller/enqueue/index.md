---
title: TransformStreamDefaultController：enqueue() 方法
short-title: enqueue()
slug: Web/API/TransformStreamDefaultController/enqueue
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

{{domxref("TransformStreamDefaultController")}} 接口的 **`enqueue()`** 方法将给定的分块加入流的可读端队列。

有关可读流和分块的更多信息，请参见[使用可读流](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams)。

## 语法

```js-nolint
enqueue(chunk)
```

### 参数

- `chunk`
  - : 正在排队的分块。分块是指单个数据单元。它可以是任何类型的数据，且一个流可以包含不同类型的分块。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- {{jsxref("TypeError")}}
  - : 流不可读。如果流通过 `controller.error()` 发生错误，或者在没有调用它的控制器的 `controller.close()` 方法的情况下下关闭流，则可能发生这种情况。

## 示例

在此示例中，使用 `enqueue()` 方法将编码的分块传递给队列。

```js
const textEncoderStream = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(new TextEncoder().encode(chunk));
  },
  flush(controller) {
    controller.terminate();
  },
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
