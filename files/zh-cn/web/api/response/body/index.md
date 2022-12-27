---
title: Response.body
slug: Web/API/Response/body
---

{{APIRef("Fetch")}}

{{domxref("Response")}} mixin 的只读 getter 属性 **`body`** 用于暴露其 body 内容的{{domxref("ReadableStream")}}（流读取）。

## 语法

```js
var stream = responseInstance.body;
```

### Value

一个 {{domxref("ReadableStream")}}.

## 例程

在我们的 [simple stream pump](https://mdn.github.io/dom-examples/streams/simple-pump.html) 例程中我们 fetch 一个图片地址，使用`response.body`暴露响应的流，用{{domxref("Response.getReader()", "ReadableStream.getReader()")}}创建一个读取器，然后将其置入第二个自定义读取流中——有效的创建了一个完全相同的图片副本。

```js
const image = document.getElementById('target');

// 请求原始图片
fetch('./tortoise.png')
// 取出 body
.then(response => response.body)
.then(body => {
  const reader = Response.getReader();

  return new ReadableStream({
    start(controller) {
      return pump();

      function pump() {
        return reader.read().then(({ done, value }) => {
          // 读不到更多数据就关闭流
          if (done) {
            controller.close();
            return;
          }

          // 将下一个数据块置入流中
          controller.enqueue(value);
          return pump();
        });
      }
    }
  })
})
.then(stream => new Response(stream))
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
.then(url => console.log(image.src = url))
.catch(err => console.error(err));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
- [Streams API](/zh-CN/docs/Web/API/Streams_API)
- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
