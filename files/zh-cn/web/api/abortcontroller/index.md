---
title: AbortController
slug: Web/API/AbortController
---

{{APIRef("DOM")}}

**`AbortController`** 接口表示一个控制器对象，允许你根据需要中止一个或多个 Web 请求。

你可以使用 {{domxref("AbortController.AbortController()")}} 构造函数创建一个新的 `AbortController`。使用 {{domxref("AbortSignal")}} 对象可以完成与 DOM 请求的通信。

## 构造函数

- {{domxref("AbortController.AbortController()")}}
  - : 创建一个新的 `AbortController` 对象实例。

## 属性

- {{domxref("AbortController.signal")}} {{readonlyInline}}
  - : 返回一个 {{domxref("AbortSignal")}} 对象实例，它可以用来 with/abort 一个 Web（网络）请求。

## 方法

- {{domxref("AbortController.abort()")}}
  - : 中止一个尚未完成的 Web（网络）请求。这能够中止 [fetch](/zh-CN/docs/Web/API/fetch) 请求及任何响应体的消费和流。

## 示例

> **备注：** {{domxref("AbortSignal")}} 中还有其他额外的示例。

在下面的代码片段中，我们想通过 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 下载一段视频。

我们先使用 {{domxref("AbortController.AbortController","AbortController()")}} 构造函数创建一个控制器，然后使用 {{domxref("AbortController.signal")}} 属性获取其关联 {{domxref("AbortSignal")}} 对象的引用。

当 [fetch 请求](/zh-CN/docs/Web/API/fetch)初始化时，我们将 `AbortSignal` 作为一个选项传递进入请求的选项对象中（下面的 `{signal}`）。这将 signal 和 controller 与 fetch 请求相关联，并且允许我们通过调用 {{domxref("AbortController.abort()")}} 去中止它，如下面的第二个事件监听器。

```js
let controller;
const url = "video.mp4";

const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", () => {
  if (controller) {
    controller.abort();
    console.log("中止下载");
  }
});

function fetchVideo() {
  controller = new AbortController();
  const signal = controller.signal;
  fetch(url, { signal })
    .then((response) => {
      console.log("下载完成", response);
    })
    .catch((err) => {
      console.error(`下载错误：${err.message}`);
    });
}
```

> **备注：** 当 `abort()` 被调用时，这个 `fetch()` promise 将 `reject` 一个名为 `AbortError` 的 `DOMException`。

你可以在 [GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api) 上找到这个示例的完整源代码（也可以[在线运行](https://mdn.github.io/dom-examples/abort-api/)）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) by Jake Archibald
