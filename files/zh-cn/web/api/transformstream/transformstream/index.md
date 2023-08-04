---
title: TransformStream()
slug: Web/API/TransformStream/TransformStream
---

{{APIRef("Streams")}}

**`TransformStream()`** 构造函数创建一个新的 {{domxref("TransformStream")}} 对象，该对象表示一对流：一个 {{domxref("WritableStream")}} 表示可写端，和一个 {{domxref("ReadableStream")}} 表示可读端。

## 语法

```js-nolint
new TransformStream()
new TransformStream(transformer)
new TransformStream(transformer, writableStrategy)
new TransformStream(transformer, writableStrategy, readableStrategy)
```

### 参数

- `transformer`{{Optional_Inline}}

  - : 一个表示 `transformer` 的对象。如果未提供，则生成的流将是一个**恒等变换流**，它将所有写入可写端的分块转发到可读端，不会有任何改变。

    transformer 对象可以包含以下任何方法。每个方法的 `controller` 都是一个 {{domxref("TransformStreamDefaultController")}} 实例。

    - `start(controller)`
      - : 当 `TransformStream` 被构造时调用。它通常用于使用 {{domxref("TransformStreamDefaultController.enqueue()")}} 对分块进行排队。
    - `transform(chunk, controller)`
      - : 当一个写入可写端的分块准备好转换时调用，并且执行转换流的工作。如果没有提供 `transform()` 方法，则使用恒等变换，并且分块将在没有更改的情况下排队。
    - `flush(controller)`
      - : 当所有写入可写端的分块成功转换后被调用，并且可写端将会关闭。

- `writableStrategy`{{Optional_Inline}}

  - : 一个定义了队列策略的可选对象。它需要两个参数：

    - `highWaterMark`
      - : 一个非负整数。它定义了在应用背压之前内部队列包含的分块的总数。
    - `size(chunk)`
      - : 一个包含参数 `chunk` 的方法。它表示用于每一个块的大小，以字节为单位。

- `readableStrategy`{{Optional_Inline}}

  - : 一个定义了队列策略的可选对象。它需要两个参数：

    - `highWaterMark`
      - : 一个非负整数。它定义了在应用背压之前内部队列包含的分块的总数。
    - `size(chunk)`
      - : 一个包含参数 `chunk` 的方法。它表示用于每一个块的大小，以字节为单位。

> **备注：** 你可以自定义 `readableStrategy` 或 `writableStrategy`，或者使用 {{domxref("ByteLengthQueuingStrategy")}} 或 {{domxref("CountQueuingStrategy")}} 的实例作为对象的值。

## 示例

### 将文本转换为大写

以下示例将文本逐块转换为大写。这个示例来自 [Streams—The Definitive Guide](https://web.dev/streams/)，它有关于不同类型流的一些示例。

```js
function upperCaseStream() {
  return new TransformStream({
    transform(chunk, controller) {
      controller.enqueue(chunk.toUpperCase());
    },
  });
}

function appendToDOMStream(el) {
  return new WritableStream({
    write(chunk) {
      el.append(chunk);
    },
  });
}

fetch("./lorem-ipsum.txt").then((response) =>
  response.body
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(upperCaseStream())
    .pipeTo(appendToDOMStream(document.body)),
);
```

### 创建一个恒等变换流

如果没有提供 `transformer` 参数，那么结果将是一个恒等流，它将所有写入可写端的分块转发到可读端，并且不做任何改变。在以下示例中，一个恒等转换流被用于向一个管道添加缓冲。

```js
const writableStrategy = new ByteLengthQueuingStrategy({
  highWaterMark: 1024 * 1024,
});
readableStream
  .pipeThrough(new TransformStream(undefined, writableStrategy))
  .pipeTo(writableStream);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
