---
title: Response：blob() 方法
short-title: blob()
slug: Web/API/Response/blob
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

{{domxref("Response")}} 接口的 **`blob()`** 方法将 {{domxref("Response")}} 流读取至结束。它返回一个会兑现 {{domxref("Blob")}} 的 promise。

## 语法

```js-nolint
blob()
```

### 参数

无。

> [!NOTE]
> 若 {{domxref("Response")}} 的 {{domxref("Response.type")}} 为 `"opaque"`，则得到的 {{domxref("Blob")}} 的 {{domxref("Blob.size")}} 为 `0`，{{domxref("Blob.type")}} 为空字符串 `""`，这会使其对 {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} 等方法*毫无用处*。

### 返回值

一个 promise，会兑现一个 {{domxref("Blob")}}，其数据为响应体的字节，媒体类型为响应 `Content-Type` 标头的值。

### 异常

- `AbortError` {{domxref("DOMException")}}
  - : 请求已被[中止](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch#取消请求)。
- {{jsxref("TypeError")}}
  - : 由于以下原因之一而抛出：
    - 响应体[已被扰乱或锁定](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch#锁定和扰乱的流)。
    - 解码响应体内容时出错（例如，因为 {{httpheader("Content-Encoding")}} 标头不正确）。

## 示例

在我们的 [fetch 请求示例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request)（[在线运行 fetch 请求](https://mdn.github.io/dom-examples/fetch/fetch-request/)）中，我们使用 {{domxref("Request.Request","Request()")}} 构造函数创建新请求，然后用它来获取一张 JPG。获取成功后，我们使用 `blob()` 从响应中读取 {{domxref("Blob")}}，再用 {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} 将其放入对象 URL，最后把该 URL 设为 {{htmlelement("img")}} 元素的源以显示图像。

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => response.blob())
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

- [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
