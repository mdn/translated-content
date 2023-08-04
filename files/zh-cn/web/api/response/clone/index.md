---
title: Response.clone()
slug: Web/API/Response/clone
---

{{APIRef("Fetch")}}

{{domxref("Response")}} 接口的 **`clone()`** 方法创建一个响应对象的克隆，这个对象在所有方面都是相同的，但是储存在不同的变量中。

类似于底层的 {{domxref("ReadableStream.tee")}} api，克隆的 `Response` 的 {{domxref("Response.body", "body")}} 将以两个 body 的更*快*消费者的速度发出背压信号，并且未读的数据在消费较慢的 `body` 上进行内部排队，没有任何限制或者背压。背压指的是数据流消费者（如这种情况，读取响应正文的代码）让数据生产者减缓速度（如 TCP 服务器）以免在应用程序等待使用的内存中加载大量数据的机制。如果仅消费了一个克隆分支，那么整个 body 都将在内存中缓冲。因此，`clone()` 是按顺序读取两次响应的一种方式，但是你不应该在并行时以不同的速度使用它读取非常大的 body。

如果响应体已经被使用，`clone()` 抛出 {{jsxref("TypeError")}}。事实上，`clone()` 存在的主要原因是允许 body 对象可以使用多次（当它们是一次性使用时）。

## 语法

```js-nolint
clone()
```

### 参数

无。

### 返回值

一个 {{domxref("Response")}} 对象。

## 示例

在我们的 [Fetch Response 克隆示例](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-response-clone)（请参阅[在线 Fetch Response 克隆示例](http://mdn.github.io/fetch-examples/fetch-response-clone/)）我们使用 {{domxref("Request.Request","Request()")}} 构造函数创建一个新的 {{domxref("Request")}} 来传递一个 JPG 路径。然后我们使用 {{domxref("GlobalFetch.fetch","fetch()")}} 获取这个请求。当 fetch 成功兑现时，我们克隆它，使用两个 {{domxref("Body.blob")}} 调用从两个响应中提取 blob，使用 {{domxref("URL.createObjectURL")}} 从 blob 创建对象 URL，并将它们显示在两个单独的 {{htmlelement("img")}} 元素中。

```js
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

const myRequest = new Request("flowers.jpg");

fetch(myRequest).then((response) => {
  const response2 = response.clone();

  response.blob().then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    image1.src = objectURL;
  });

  response2.blob().then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    image2.src = objectURL;
  });
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
