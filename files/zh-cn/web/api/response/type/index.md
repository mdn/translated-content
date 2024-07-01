---
title: Response.type
slug: Web/API/Response/type
---

{{APIRef("Fetch")}}

{{domxref("Response")}} 接口的 **`type`** 只读属性包含一种响应的类型。它可以是以下某一种值：

- `basic`：标准值，同源响应，暴露除了“Set-Cookie”之外的所有标头。
- `cors`：从有效的跨源请求接收到响应。[某些标头和主体](https://fetch.spec.whatwg.org/#concept-filtered-response-cors)可以被访问。
- `error`：网络错误。没有有用的描述错误的信息。响应的状态为 0，header 为空且不可变。这是从 `Response.error()` 中获得的响应的类型。
- `opaque`：对跨源资源的“no-cors”请求的响应。[严格限制](https://fetch.spec.whatwg.org/#concept-filtered-response-opaque)。
- `opaqueredirect`：fetch 请求是通过 `redirect: "manual"` 发出的。响应的状态是 0，标头是空的，主体是 null，trailer 是空的。

> **备注：** “错误”响应从来没有真正暴露于脚本：这样的响应，{{domxref("GlobalFetch.fetch","fetch()")}} 将被 promise 拒绝。

## 值

`ResponseType` 字符串表示响应的类型。

## 示例

在我们的 [Fetch 响应示例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response)中（参见 [Fetch 响应在线演示](https://mdn.github.io/dom-examples/fetch/fetch-response/)），我们使用 {{domxref("Request.Request","Request()")}} 构造函数创建了一个新的 {{domxref("Request")}} 对象，并向其传递了一个 JPG 路径。然后，我们使用
{{domxref("fetch()")}} 获取到这个请求，使用 {{domxref("Response.blob")}} 从响应中提取到 blob，使用 {{domxref("URL.createObjectURL")}} 从中创建一个对象的 URL，并将其显示在 {{htmlelement("img")}} 中。

注意，在 `fetch()` 代码块的顶部，我们将响应的 `type` 记录在控制台。

```js
const myImage = document.querySelector("img");
const myRequest = new Request("flowers.jpg");
fetch(myRequest).then((response) => {
  console.log(response.type); // returns basic by default
  response.blob().then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
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
