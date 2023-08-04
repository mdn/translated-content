---
title: Response.bodyUsed
slug: Web/API/Response/bodyUsed
---

{{APIRef("Fetch")}}{{ SeeCompatTable }}

**`bodyUsed`** 是 {{domxref("Response")}} mixin 中的一个只读属性。用以表示该 body 是否被使用过。

## 语法

```js
var myBodyUsed = response.bodyUsed;
```

### 可能的值

{{domxref("Boolean")}}.

## 示例

在以下[fetch 请求示例](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-request)（运行 [fetch request live](http://mdn.github.io/fetch-examples/fetch-request/)）。通过{{domxref("Request.Request")}}构造器创建了一个 fetch 请求，来获得一张 JPG 图片。当 fetch 成功后，通过{{domxref("Blob")}} 来使用了 fetch 返回的资源--{{domxref("URL.createObjectURL")}}创建该资源的 URL，并作为 {{htmlelement("img")}}元素的 src 源来显示图片。

注意：在 `response.blob()` 被调用前后，输出 `response.bodyUsed` 的差异。

### HTML Content

```html
<img
  class="my-image"
  src="https://wikipedia.org/static/images/project-logos/frwiki-1.5x.png" />
```

### JS Content

```js
var myImage = document.querySelector(".my-image");
fetch("https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg")
  .then(function (response) {
    console.log(response.bodyUsed);
    var res = response.blob();
    console.log(response.bodyUsed);
    return res;
  })
  .then(function (response) {
    var objectURL = URL.createObjectURL(response);
    myImage.src = objectURL;
  });
```

{{EmbedLiveSample('示例', '100%', '250px')}}

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
