---
title: WritableStreamDefaultController
slug: Web/API/WritableStreamDefaultController
page-type: web-api-interface
tags:
  - API
  - Experimental
  - Fetch
  - Interface
  - Reference
  - Streams
  - WritableStreamDefaultController
translation_of: Web/API/WritableStreamDefaultController
---
{{APIRef("Streams")}}

[Streams API](/zh-CN/docs/Web/API/Streams_API) 中的 **`WritableStreamDefaultController`** 接口表示一个允许控制 {{domxref("WritableStream")}} 状态的控制器。当构造 `WritableStream` 时，会为底层的 sink 提供一个相应的 `WritableStreamDefaultController` 实例以进行操作。

## 构造函数

无。`WritableStreamDefaultController` 实例会在构造 `WritableStream` 时被自动创建。

## 属性

无。

## 方法

- {{domxref("WritableStreamDefaultController.error()")}}
  - : 导致未来任何与关联的流的交互都会出错。

## 示例

```js
const writableStream = new WritableStream({
  start(controller) {
    // do stuff with controller
    // error stream if necessary
    controller.error('My stream is broken');
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
