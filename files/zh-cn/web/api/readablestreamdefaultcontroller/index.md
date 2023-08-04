---
title: ReadableStreamDefaultController
slug: Web/API/ReadableStreamDefaultController
---

{{APIRef("Streams")}}

[Stream API](/zh-CN/docs/Web/API/Streams_API) 中的 **`ReadableStreamDefaultController`** 接口是一个控制器，该控制器允许控制 {{domxref("ReadableStream")}} 的状态和内部队列。默认控制器用于不是字节流的流。

## 构造函数

无。`ReadableStreamDefaultController` 实例会在构造 `ReadableStream` 时被自动创造。

## 实例属性

- {{domxref("ReadableStreamDefaultController.desiredSize")}} {{readonlyInline}}
  - : 返回填充满流的内部队列所需要的大小。

## 实例方法

- {{domxref("ReadableStreamDefaultController.close()")}}
  - : 关闭关联的流。
- {{domxref("ReadableStreamDefaultController.enqueue()")}}
  - : 将给定的块排入关联的流。
- {{domxref("ReadableStreamDefaultController.error()")}}
  - : 导致未来任何与关联流交互都会出错。

## 示例

在下面的简单示例中，使用构造函数创建一个自定义的 `ReadableStream` （有关完整代码，参见我们的[简单随机流展示](https://mdn.github.io/dom-examples/streams/simple-random-stream/)）。`start()` 函数每秒生成一个随机字符串并且将他们送入流中。`cancel()` 函数用于在 {{domxref("ReadableStream.cancel()")}} 被调用时停止随机字符串的生成。

请注意，{{domxref("ReadableStreamDefaultController")}} 对象应作为参数传递给 `start()` 和 `pull()` 函数。

当按下按钮时，将停止生成，使用 {{domxref("ReadableStreamDefaultController.close()")}} 关闭流，并运行另一个将数据读回流中的函数。

```js
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      let string = randomChars();
      // 将随机字符串添加到流
      controller.enqueue(string);
      // 在屏幕上展示
      let listItem = document.createElement("li");
      listItem.textContent = string;
      list1.appendChild(listItem);
    }, 1000);
    button.addEventListener("click", function () {
      clearInterval(interval);
      fetchStream();
      controller.close();
    });
  },
  pull(controller) {
    // 在这个例子中不使用 pull
  },
  cancel() {
    // 如果取消了 reader，则会调用该函数，
    // 所以我们应该在这里停止生成字符串
    clearInterval(interval);
  },
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Stream API 概念](/zh-CN/docs/Web/API/Streams_API)
- [使用可读流](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams)
- {{domxref("ReadableStream")}}
- [WHATWG Stream Visualiser](https://whatwg-stream-visualizer.glitch.me/)，用于可读、可写和转换流的基本可视化。
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) 或 [sd-streams](https://github.com/stardazed/sd-streams)——polyfill
