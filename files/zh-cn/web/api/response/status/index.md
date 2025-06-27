---
title: Response：status 属性
slug: Web/API/Response/status
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

{{domxref("Response")}} 接口的 **`status`** 只读属性包含响应的 [HTTP 状态码](/zh-CN/docs/Web/HTTP/Reference/Status)。

例如，成功是 `200`，如果没有找到资源则是 `404`。

## 值

无符号短整型数。为一种 [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status)。

## 示例

在我们的 [Fetch 响应示例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response)（参见 [Fetch 响应在线示例](https://mdn.github.io/dom-examples/fetch/fetch-response/)）中，我们使用 {{domxref("Request.Request","Request()")}} 构造函数创建了一个新的 {{domxref("Request")}}，并为其传递了一个 JPG 路径。接着，我们使用 {{domxref("Window/fetch", "fetch()")}} 获取此请求，使用 {{domxref("Response.blob")}} 从响应中提取 blob，再使用 {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} 将其转换为对象 URL，最后在 {{htmlelement("img")}} 中显示它。

注意，在 `fetch()` 块的顶部，我们将响应的 `status` 值记录到控制台。

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    console.log("response.status =", response.status); // response.status = 200
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
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
