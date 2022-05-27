---
title: ReadableStream.pipeTo()
slug: Web/API/ReadableStream/pipeTo
tags:
  - API
  - Method
  - ReadableStream
  - Reference
  - Streams
  - pipeTo
translation_of: api/ReadableStream/pipeTo
---
{{APIRef("Streams")}}

{{domxref("ReadableStream")}} 接口的 **`pipeTo()`** 方法通过管道将当前的 `ReadableStream` 输出到给定的 {{domxref("WritableStream")}} 并且当管道过程成功完成时返回一个兑现的 {{jsxref("Promise")}}，如果遇到任何错误则返回一个拒绝的 Promise。

管道流通常在管道持续时间[锁定](/zh-CN/docs/Web/API/ReadableStream/locked)它，阻止其他 reader 锁定它。

## 语法

```js
pipeTo(destination)
pipeTo(destination, options)
```

### 参数

- `destination`
  - : 充当 {{domxref("ReadableStream")}} 最终目标的 {{domxref("WritableStream")}}。

- `options` {{optional_inline}}

  - : 管道至 `writable` 应该被使用的选项。可用选项是:

    - `preventClose`
      - : 如果设置为 `true`，源 `ReadableStream` 关闭将不再导致目标 `WritableStream` 关闭。一旦进程完成，该方法将返回一个兑现的 promise，除非在关闭目标时遇到错误，在这种情况下下，它将因为该错误被拒绝。
    - `preventAbort`
      - : 如果设置为 `true`， 目标 `WritableStream` 的错误将不再取消源 `ReadableStream`。该方法将会返回一个因而被拒绝的 promise，或者任何在中止目标期间的错误。
    - `preventCancel`
      - : 如果设置为 `true`，目标 `WritableStream` 的错误将不在取消源 `ReadableStream`。在这种情况下，该方法将会返回一个因源错误而被拒绝的 promise，或者任何在中止目标期间的错误。此外，如果目标可读流开始关闭或者正在关闭，源可写流将不再被关闭。在这种情况下，方法将返回一个拒绝并带有错误的 promise，或者任何在中止目标期间的错误，来表明管道关闭失败。
    - `signal`
      - : 如果设置一个 [`AbortSignal`](/zh-CN/docs/Web/API/AbortSignal) 对象，然后可以通过相应的[`AbortController`](/zh-CN/docs/Web/API/AbortController)中止正在进行的管道操作。

### 返回值

当管道完成时返回一个兑现的 {{jsxref("Promise")}}。

### 异常

- {{jsxref("TypeError")}}
  - : `writableStream` 且/或 `readableStream` 对象不是一个可写/可读流，或者其中一个或者两个流被锁定。

## 示例

```js
// 获取原始图像
fetch('png-logo.png')
// 取回响应的 body 属性，该属性继续 ReadableStream
.then(response => response.body)
.then(body => body.pipeThrough(new PNGTransformStream()))
.then(rs => rs.pipeTo(new FinalDestinationStream()))
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
