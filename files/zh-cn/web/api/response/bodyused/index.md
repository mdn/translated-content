---
title: Response：bodyUsed 属性
short-title: bodyUsed
slug: Web/API/Response/bodyUsed
l10n:
  sourceCommit: 77fd649b791632aec695c5c4c7ca5bc726f4d1e9
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

{{domxref("Response")}} 接口的 **`bodyUsed`** 只读属性是一个布尔值，指示主体是否已被读取。

## 值

一个布尔值。

## 示例

### 检查 `bodyUsed`

本示例说明读取响应的主体会将 `bodyUsed` 的值从 `false` 变为 `true`。

该示例包含一张空图片。

当示例的 JavaScript 运行时，我们获取一张图片，并将返回的 Promise 赋给变量 `responsePromise`。

当用户点击“使用响应”时，我们检查该响应是否已被使用。如果已使用，则打印一条消息。如果尚未使用，则读取响应主体，并用它为图片的 `src` 属性提供值。

#### HTML

```html
<p><button id="use">使用响应</button> <button id="reset">重置</button></p>
<p><img id="my-image" src="" width="150" /></p>
<pre id="log"></pre>
```

#### JavaScript

```js
const useResponse = document.querySelector("#use");
const reset = document.querySelector("#reset");
const myImage = document.querySelector("#my-image");
const log = document.querySelector("#log");

const responsePromise = fetch(
  "/shared-assets/images/examples/firefox-logo.svg",
);

useResponse.addEventListener("click", async () => {
  const response = await responsePromise;
  if (response.bodyUsed) {
    log.textContent = "主体已被使用！";
  } else {
    const result = await response.blob();
    const objectURL = URL.createObjectURL(result);
    myImage.src = objectURL;
  }
});

reset.addEventListener("click", () => {
  document.location.reload();
});
```

#### 结果

最初图片没有值。如果你点击一次“使用响应”，则 `bodyUsed` 为 `false`，因此我们读取响应并设置图片。如果你再次点击“使用响应”，则 `bodyUsed` 为 `true`，我们会打印消息。

点击“重置”可重新加载示例，以便再次尝试。

{{ EmbedLiveSample('示例', '100%', '300px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
