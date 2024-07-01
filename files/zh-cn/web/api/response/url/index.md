---
title: Response：url 属性
slug: Web/API/Response/url
---

{{APIRef("Fetch API")}}

{{domxref("Response")}} 接口的只读属性 **`url`** 包含了响应的 URL 地址。`url` 属性值为经过重定向后最终获得的 URL 地址。

## 值

一个字符串。

## 示例

在 [Fetch Response 示例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) 中（请参见 [Fetch Response 实时演示](https://mdn.github.io/dom-examples/fetch/fetch-response/)），我们使用 {{domxref("Request.Request", "Request()")}} 构造函数创建了一个新的 {{domxref("Request")}} 对象，并向其传递了 JPG 的路径。然后，我们使用 {{domxref("fetch()")}} 获取该请求，使用 {{domxref("Response.blob")}} 从响应中提取一个 blob，使用 {{domxref("URL.createObjectURL")}} 从中创建一个对象 URL，并将其显示在 {{htmlelement("img")}} 中。

请注意，在 `fetch()` 块的顶部，我们会将响应 `URL` 记录到控制台。

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    console.log("response.url =", response.url); // response.url = https://mdn.github.io/dom-examples/fetch/fetch-response/flowers.jpg
    return response.blob();
  })
  .then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
