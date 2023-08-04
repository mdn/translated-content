---
title: Response.json()
slug: Web/API/Response/json
---

{{APIRef("Fetch")}}{{domxref("Response")}} mixin 的 **`json()`** 方法接收一个 {{domxref("Response")}} 流，并将其读取完成。它返回一个 Promise，Promise 的解析 resolve 结果是将文本体解析为 {{jsxref("JSON")}}。

## 语法

```js
response.json().then((data) => {
  // do something with your data
});
```

### 参数

没有。

### 返回值

返回一个被解析为 [`JSON`](/zh-CN/docs/Web/API/JSON) 格式的 promise 对象，这可以是任何可以由 JSON 表示的东西 - 一个 object，一个 array，一个 string，一个 number...

## 示例

在我们的 [fetch json 示例](https://github.com/mdn/fetch-examples/tree/master/fetch-json) 中 (运行 [fetch json live](http://mdn.github.io/fetch-examples/fetch-json/)), 我们使用 {{domxref("Request.Request")}} 构造函数创建一个新的请求，然后使用它来获取一个 `.json` 文件。当获取成功时，我们使用 `json()` 读取并解析数据，然后像预期的那样从结果对象中读取值，并将其插入到列表项中以显示我们的产品数据。

```js
const myList = document.querySelector("ul");
const myRequest = new Request("products.json");

fetch(myRequest)
  .then((response) => response.json())
  .then((data) => {
    for (const product of data.products) {
      let listItem = document.createElement("li");
      listItem.appendChild(document.createElement("strong")).textContent =
        product.Name;
      listItem.append(` can be found in ${product.Location}. Cost: `);
      listItem.appendChild(
        document.createElement("strong"),
      ).textContent = `£${product.Price}`;
      myList.appendChild(listItem);
    }
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
