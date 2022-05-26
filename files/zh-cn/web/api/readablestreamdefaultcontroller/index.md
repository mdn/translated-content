---
title: ReadableStreamDefaultController
slug: Web/API/ReadableStreamDefaultController
tags:
  - API
  - Fetch
  - Interface
  - ReadableStreamDefaultController
  - Reference
  - Streams
browser-compat: api.ReadableStreamDefaultController
---
{{APIRef("Streams")}}

[流操作 API](/en-US/docs/Web/API/Streams_API) 中的 **`ReadableStreamDefaultController`** 接口是一个控制器，该控制器允许控制 {{domxref("ReadableStream")}} 的状态和内部队列。 默认控制器用于不是字节流的流。

## 构造函数

没有。 在 `ReadableStream` 构造函数中， `ReadableStreamDefaultController` 实例被自动创造。

## 属性

- {{domxref("ReadableStreamDefaultController.desiredSize")}} {{只读}}
  - : 返回填充满流的内部队列所需要的大小。

## 方法

- {{domxref("ReadableStreamDefaultController.close()")}}
  - : 关闭关联的流。
- {{domxref("ReadableStreamDefaultController.enqueue()")}}
  - : 将给定的块排入关联的流。
- {{domxref("ReadableStreamDefaultController.error()")}}
  - : 导致任何未来与关联流交互都会出错。

## Examples

在下面的简单示例中， 使用 `ReadableStream` 自定义构造函数创建一个 (有关完整代码， 参见我们的 [简单随即流展示](https://mdn.github.io/dom-examples/streams/simple-random-stream/))。 `start()` 函数每秒生成一个随机文本字符串并且将他们排入流中。 `cancel()` 函数被用来停止生成出于任何原因调用的 {{domxref("ReadableStream.cancel()")}} 。

请注意， {{domxref("ReadableStreamDefaultController")}} 对象作为参数提供给 `start()` 和 `pull()` 函数。

当按下按钮时， 将停止生成， 使用 {{domxref("ReadableStreamDefaultController.close()")}} 关闭流， 并运行另一个将数据读回流中的函数。

```js
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      let string = randomChars();
      // 将自负床添加到流
      controller.enqueue(string);
      // show it on the screen
      let listItem = document.createElement('li');
      listItem.textContent = string;
      list1.appendChild(listItem);
    }, 1000);
    button.addEventListener('click', function() {
      clearInterval(interval);
      fetchStream();
      controller.close();
    })
  },
  pull(controller) {
    // 在这个例子中不使用pull
  },
  cancel() {
    // 如果读取器取消,将会调用该函数,
    // 所以我们将停止生成字符串
    clearInterval(interval);
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
