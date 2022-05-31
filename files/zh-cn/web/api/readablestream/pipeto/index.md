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
translation_of: Web/API/ReadableStream/pipeTo
---
{{APIRef("Streams")}}

{{domxref("ReadableStream")}} 接口的 **`pipeTo()`** 方法通过管道将当前的 `ReadableStream` 传递给给定的 {{domxref("WritableStream")}} 并且当传输过程成功完成时返回一个兑现的 {{jsxref("Promise")}}，如果遇到任何错误则返回一个拒绝的 Promise。

传输一个流时通常会在传输的持续时间内[锁定](/zh-CN/docs/Web/API/ReadableStream/locked)这个流，以阻止其他 reader 锁定它。

## 语法

```js
pipeTo(destination)
pipeTo(destination, options)
```

### 参数

- `destination`
  - : 充当 {{domxref("ReadableStream")}} 最终目标的 {{domxref("WritableStream")}}。

- `options` {{optional_inline}}

  - : 传输至 `writable` 应该被使用的选项。可用选项是:

    - `preventClose`
      - : 如果设置为 `true`，源 `ReadableStream` 关闭将不再导致目标 `WritableStream` 关闭。一旦此过程完成，该方法将返回一个兑现的 promise，除非在关闭目标时遇到错误，在这种情况下下，它将因为该错误被拒绝。
    - `preventAbort`
      - : 如果设置为 `true`，源 `ReadableStream` 中的错误将不再中止目标 `WritableStream`。该方法将会返回一个被拒绝的 promise，该 promise 因源错误或者任何在中止目标期间的错误而被拒绝。
    - `preventCancel`
      - : 如果设置为 `true`，目标 `WritableStream` 的错误将不再取消源 `ReadableStream`。在这种情况下，该方法将会返回一个因源错误或者在取消期间发生的任何错误而被拒绝的 promise。此外，如果目标可写流开始关闭或者正在关闭，则源可读流将不再被取消。在这种情况下，方法将返回一个因错误而被拒绝的 promise，该错误表明通往封闭流的管道失败,或者在取消源期间发生的任何错误。
    - `signal`
      - : 如果设置一个 [`AbortSignal`](/zh-CN/docs/Web/API/AbortSignal) 对象，然后可以通过相应的[`AbortController`](/zh-CN/docs/Web/API/AbortController)中止正在进行的管道操作。

### 返回值

返回一个 {{jsxref("Promise")}}，其在传输完成时兑现。

### 异常

- {{jsxref("TypeError")}}
  - : `writableStream` 且/或 `readableStream` 对象不是一个可写/可读流，或者其中一个或者两个流被锁定。

## 示例

```js
// 获取原始图像
fetch('png-logo.png')
// 取回响应的 body 属性，该属性继承 ReadableStream
.then(response => response.body)
.then(body => body.pipeThrough(new PNGTransformStream()))
.then(rs => rs.pipeTo(new FinalDestinationStream()))
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
