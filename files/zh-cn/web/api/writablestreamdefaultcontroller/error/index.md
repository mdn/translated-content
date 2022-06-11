---
title: WritableStreamDefaultController.error()
slug: Web/API/WritableStreamDefaultController/error
page-type: web-api-instance-method
tags:
  - API
  - Error
  - Method
  - Reference
  - Streams
  - WritableStreamDefaultController
translation_of: Web/API/WritableStreamDefaultController/error
---
{{APIRef("Streams")}}

{{domxref("WritableStreamDefaultController")}} 接口的 **`error()`** 方法会导致未来任何与关联的流的交互出错。

这个方法很少被使用，因为通常从底层 sink 的一个方法返回一个拒绝的 promise 足矣。但是，在响应与底层 sink 交互的正常生命周期之外的事件中，使用 error() 来立即关闭一个流则会很有用。

## 语法

```js
error(message)
```

### 参数

- `message`
  - : 一个字符串，表示你希望在调用该方法以后的交互所应该抛出的错误。

### 返回值

无 ({{jsxref("undefined")}})。

### 异常

- {{jsxref("TypeError")}}
  - : 你尝试调用 error 方法的流不是一个 {{domxref("WritableStream")}}。

## 示例

```js
const writableStream = new WritableStream({
  start(controller) {
    // do stuff with controller
    // error stream if necessary
    controller.error('My error is broken');
  },
  write(chunk, controller) {
    ...
  },
  close(controller) {
    ...
  },
  abort(err) {
    ...
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
