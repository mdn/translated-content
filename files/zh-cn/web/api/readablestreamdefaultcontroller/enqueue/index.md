---
title: ReadableStreamDefaultController.enqueue()
slug: Web/API/ReadableStreamDefaultController/enqueue
---

{{APIRef("Streams")}}

{{domxref("ReadableStreamDefaultController")}} 接口的 **`enqueue()`** 方法将给定数据块送入到关联的流中。

## 语法

```js-nolint
enqueue(chunk)
```

### 参数

- `chunk`
  - : 要送入的数据块。

### 返回值

无 ({{jsxref("undefined")}})。

### 异常

- {{jsxref("TypeError")}}
  - : 如果源对象不是 `ReadableStreamDefaultController` 则抛出该异常。

## 示例

在下面的简单示例中，使用构造函数创建一个自定义的 `ReadableStream` （有关完整代码，参见我们的[简单随机流展示](https://mdn.github.io/dom-examples/streams/simple-random-stream/)）。`start()` 函数每秒生成一个随机字符串并且将他们送入流中。`cancel()` 函数用于在 {{domxref("ReadableStream.cancel()")}} 被调用时停止随机字符串的生成。

当按下按钮时，将停止生成，使用 {{domxref("ReadableStreamDefaultController.close()")}} 关闭流，并运行另一个函数以读取流中的数据。

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

- [使用可读流](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams)
- {{domxref("ReadableStreamDefaultController")}}
