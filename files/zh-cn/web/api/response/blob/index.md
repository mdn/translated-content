---
title: Response.blob()
slug: Web/API/Response/blob
---

{{APIRef("Fetch")}}

{{domxref("Response")}} mixin 的 **`blob()`**方法使用一个 {{domxref("Response")}} 流，并将其读取完成。它返回一个使用{{domxref("Blob")}}解决的 promise。

## 句法

```js
response.blob().then(function (myBlob) {
  // do something with myBlob
});
```

### 参数

None.

### 返回值

A promise that resolves with a {{domxref("Blob")}}.

## 例子

在我们 [fetch request example](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-request) (run [fetch request live](http://mdn.github.io/fetch-examples/fetch-request/)) 中，我们使用[Request.Request](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter)构造方法创建了一个新的 request 对象，然后使用它来获取一个 JPG 文件。当 fetch 成功的时候，我们使用 blob() 从 response 中读取一个[Blob](/zh-CN/docs/Web/API/Blob)对象，并使用[URL.createObjectURL](/zh-CN/docs/Web/API/URL/createObjectURL) 将它放入一个 object URL，然后把 URL 设置为[img](/zh-CN/docs/Web/HTML/Element/img)元素的 src 属性以显示这张图片。

```js
var myImage = document.querySelector("img");

var myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then(function (response) {
    return response.blob();
  })
  .then(function (myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
