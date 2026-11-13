---
title: Response：json() 方法
short-title: json()
slug: Web/API/Response/json
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

{{DOMxRef("Response")}} 接口的 **`json()`** 方法将 {{DOMxRef("Response")}} 流读取至结束。它返回一个 promise，会兑现将响应体文本解析为 {{JSxRef("JSON")}} 的结果。

注意，尽管方法名为 `json()`，结果并不是 JSON，而是将 JSON 作为输入解析后得到的 JavaScript 对象。

## 语法

```js-nolint
json()
```

### 参数

无。

### 返回值

一个 {{jsxref("Promise")}}，会兑现为 JavaScript 对象。该对象可以是 JSON 能表示的任何值——对象、数组、字符串、数字……

### 异常

- `AbortError` {{domxref("DOMException")}}
  - : 请求已被[中止](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch#取消请求)。
- {{jsxref("TypeError")}}
  - : 由于以下原因之一而抛出：
    - 响应体[已被扰乱或锁定](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch#锁定和扰乱的流)。
    - 解码响应体内容时出错（例如，因为 {{httpheader("Content-Encoding")}} 标头不正确）。
- {{jsxref("SyntaxError")}}
  - : 响应体无法解析为 JSON。

## 示例

在我们的 [fetch JSON 示例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-json)（[在线运行 fetch JSON](https://mdn.github.io/dom-examples/fetch/fetch-json/)）中，我们使用 {{DOMxRef("Request.Request", "Request()")}} 构造函数创建新请求，然后用它来获取一个 `.json` 文件。获取成功后，我们使用 `json()` 读取并解析数据，再从得到的对象中按预期读取值，并插入列表项以展示商品数据。

```js
const myList = document.querySelector("ul");
const myRequest = new Request("products.json");

fetch(myRequest)
  .then((response) => response.json())
  .then((data) => {
    for (const product of data.products) {
      const listItem = document.createElement("li");
      listItem.appendChild(document.createElement("strong")).textContent =
        product.Name;
      listItem.append(` 可在 ${product.Location} 找到。价格：`);
      listItem.appendChild(document.createElement("strong")).textContent =
        `£${product.Price}`;
      myList.appendChild(listItem);
    }
  })
  .catch(console.error);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
