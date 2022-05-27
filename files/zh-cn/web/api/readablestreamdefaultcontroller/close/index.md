---
title: ReadableStreamDefaultController.close()
slug: Web/API/ReadableStreamDefaultController/close
tags:
  - API
  - Method
  - ReadableStreamDefaultController
  - Reference
  - Streams
  - close
translation_of: Web/API/ReadableStreamDefaultController/close
---
{{APIRef("Streams")}}

{{domxref("ReadableStreamDefaultController")}} 接口的 **`close()`** 方法用于关闭关联的流。

reader 将仍然可以从流中读取任何先前入队的块，但是一旦读取这些块，流将被关闭。如果你想完全的丢弃流并且丢弃任何排队的块，你可以使用 {{domxref("ReadableStream.cancel()")}} 或者 {{domxref("ReadableStreamDefaultReader.cancel()")}}。

## 语法

```js
close()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- {{jsxref("TypeError")}}
  - : 如果源对象不是 `ReadableStreamDefaultController` 则抛出该异常。

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
    // 如果取消了 reader，则会调用该函数，
    // 所以我们应该停止生成字符串
    clearInterval(interval);
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
