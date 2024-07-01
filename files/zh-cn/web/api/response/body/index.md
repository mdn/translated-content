---
title: Response.body
slug: Web/API/Response/body
---

{{APIRef("Fetch")}}

{{domxref("Response")}} 接口的只读属性 **`body`** 是暴露响应体内容的 {{domxref("ReadableStream")}}。

## 值

一个 {{domxref("ReadableStream")}}，或者对于使用空的 [`body`](/zh-CN/docs/Web/API/Response/Response#body) 属性构建的任意的 `Response` 对象，或没有任何[主体](/zh-CN/docs/Web/HTTP/Messages#body_2)的实际 [HTTP 响应](/zh-CN/docs/Web/HTTP/Messages#http_响应)，则为 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

> **备注：** 对于没有主体的响应（例如，对 [`HEAD`](/zh-CN/docs/Web/HTTP/Methods/HEAD) 请求的响应或 [`204 No Content`](/zh-CN/docs/Web/HTTP/Status/204)），当前的浏览器实际上不符合将 `body` 属性设置为 `null` 的规范要求。

## 示例

在我们的[简单 pump 流](https://mdn.github.io/dom-examples/streams/simple-pump.html)示例中，我们获取一个图片，使用 `response.body` 暴露响应的流，用 {{domxref("ReadableStream.getReader()", "ReadableStream.getReader()")}} 创建一个 reader，然后将其置入第二个自定义读取流中——有效的创建了一个完全相同的图片副本。

```js
const image = document.getElementById("target");

// 请求原始图片
fetch("./tortoise.png")
  // 取出 body
  .then((response) => response.body)
  .then((body) => {
    const reader = body.getReader();

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
      },
    });
  })
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
- [Stream API](/zh-CN/docs/Web/API/Streams_API)
- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
