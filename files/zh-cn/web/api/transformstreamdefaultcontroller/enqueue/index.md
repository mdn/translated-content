---
title: TransformStreamDefaultController.enqueue()
slug: Web/API/TransformStreamDefaultController/enqueue
---

{{DefaultAPISidebar("Streams API")}}

{{domxref("TransformStreamDefaultController")}} 接口的 **`enqueue()`** 方法将给定的分块排入流的可读端。

有关可读流和分块的更多信息，请参见[使用可读流](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams)。

## 语法

```js-nolint
enqueue(chunk)
```

### 参数

- `chunk`
  - : 正在排入的分块。一个分块是一个数据片段。它可以是任何数据类型，并且一个流可以包含不同类型的分块。

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
