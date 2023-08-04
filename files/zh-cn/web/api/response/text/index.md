---
title: Response.text()
slug: Web/API/Response/text
---

{{APIRef("Fetch")}}

{{domxref("Response")}} mixin 的 **`text()`** 方法提供了一个可供读取的“返回流”（{{domxref("Response")}} stream），并将它读取完。它返回一个包含 {{domxref("USVString")}} 对象（也就是文本）的 Promise 对象，返回结果的编码*永远是* UTF-8。

## 语法

```js
response.text().then(function (text) {
  // do something with the text response
});
```

### 参数

无。

### 返回值

A promise that resolves with a {{domxref("USVString")}}.

## 示例

在我们 [fetch text example](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-text) (运行 [fetch text live](http://mdn.github.io/fetch-examples/fetch-text/)) 的案例中，我们有一个 {{htmlelement("article")}} 元素和三个链接（储存在 `myLinks` 数组中），首先，遍历 `myLinks` 数组，并且给数组中的所有元素添加 `onclick` 事件监听器，当按钮被点击的时候，链接的 `data-page` 标识作为会参数传入 `getData()` 中。

当进入 `getData()` 函数，我们使用 {{domxref("Request.Request","Request()")}} 构造函数创建了一个请求（Request）对象，然后，使用它获取指定的`.txt`的文件，当 fetch 函数执行成功，我们使用 `text()` 函数来返回一个{{jsxref("USVString")}} (text) 对象，将它设置到 {{htmlelement("article")}} 对象的{{domxref("Element.innerHTML","innerHTML")}}（元素文本）中。

```js
const myArticle = document.querySelector("article");
const myLinks = document.querySelectorAll("ul a");

for (i = 0; i <= myLinks.length - 1; i++) {
  myLinks[i].onclick = function (e) {
    e.preventDefault();
    var linkData = e.target.getAttribute("data-page");
    getData(linkData);
  };
}

function getData(pageId) {
  console.log(pageId);
  const myRequest = new Request(pageId + ".txt");
  fetch(myRequest).then(function (response) {
    return response.text().then(function (text) {
      myArticle.innerHTML = text;
    });
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
