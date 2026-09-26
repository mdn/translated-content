---
title: Response：text() 方法
short-title: text()
slug: Web/API/Response/text
l10n:
  sourceCommit: 2845a346b971d6d0415bf24e53084cd4d7aab1e0
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

{{domxref("Response")}} 接口的 **`text()`** 方法将 {{domxref("Response")}} 流读取至结束。它返回一个会兑现 {{jsxref("String")}} 的 promise。响应*始终*使用 UTF-8 解码。

## 语法

```js-nolint
text()
```

### 参数

无。

### 返回值

一个 promise，会兑现一个 {{jsxref("String")}}。

### 异常

- `AbortError` {{domxref("DOMException")}}
  - : 请求已被[中止](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch#取消请求)。
- {{jsxref("TypeError")}}
  - : 由于以下原因之一而抛出：
    - 响应体[已被扰乱或锁定](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch#锁定和扰乱的流)。
    - 解码响应体内容时出错（例如，因为 {{httpheader("Content-Encoding")}} 标头不正确）。

## 示例

在我们的 [fetch 文本示例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-text)（[在线运行 fetch 文本](https://mdn.github.io/dom-examples/fetch/fetch-text/)）中，我们有一个 {{htmlelement("article")}} 元素和三个链接（存储在 `myLinks` 数组中）。首先，我们遍历所有这些链接，并为每一个设置 `onclick` 事件处理器，这样在点击某个链接时会运行 `getData()` 函数——并将该链接的 `data-page` 标识符作为参数传入。

当运行 `getData()` 时，我们使用 {{domxref("Request.Request","Request()")}} 构造函数创建新请求，然后用它来获取特定的 `.txt` 文件。获取成功后，我们使用 `text()` 从响应中读取字符串，再把 {{htmlelement("article")}} 元素的 {{domxref("HTMLElement.innerText","innerText")}} 设为该文本对象。

```js
const myArticle = document.querySelector("article");
const myLinks = document.querySelectorAll("ul a");

for (const link of myLinks) {
  link.onclick = (e) => {
    e.preventDefault();
    const linkData = e.target.getAttribute("data-page");
    getData(linkData);
  };
}

function getData(pageId) {
  console.log(pageId);
  const myRequest = new Request(`${pageId}.txt`);
  fetch(myRequest)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 错误，状态 = ${response.status}`);
      }
      return response.text();
    })
    .then((text) => {
      myArticle.innerText = text;
    })
    .catch((error) => {
      myArticle.innerText = `错误：${error.message}`;
    });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
