---
title: AbortController.AbortController()
slug: Web/API/AbortController/AbortController
---

{{APIRef("DOM")}}{{SeeCompatTable}}

**`AbortController()`** 构造函数创建了一个新的 `AbortController` 实例。

## 语法

```js
var controller = new AbortController();
```

### 参数

无。

## 示例

在下面的这段代码中，我们将通过 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 来下载一段视频。

首先通过 {{domxref("AbortController.AbortController","AbortController()")}} 构造函数来创建一个 controller 实例，然后通过 {{domxref("AbortController.signal")}} 属性获取到它的关联对象{{domxref("AbortSignal")}} 的引用。

当 [fetch request](/zh-CN/docs/Web/API/fetch) 初始化后，将 `AbortSignal` 作为一个选项传入请求的选项参数中（如下 `{signal}`）。这将 signal,controller 与 fetch 请求关联起来，允许我们通过调用 {{domxref("AbortController.abort()")}} 来取消 fetch 请求，正如下第二个事件监听器所示。

```js
var controller = new AbortController();
var signal = controller.signal;

var downloadBtn = document.querySelector('.download');
var abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchVideo);

abortBtn.addEventListener('click', function() {
  controller.abort();
  console.log('Download aborted');
});

function fetchVideo() {
  ...
  fetch(url, {signal}).then(function(response) {
    ...
  }).catch(function(e) {
    reports.textContent = 'Download error: ' + e.message;
  })
}
```

> **备注：** 当 `abort()` 被调用，`fetch()` promise 将会抛出一个 `AbortError 对象`。

你可以在 GitHub 上找到一个完整的使用示例——参见 [abort-api](https://github.com/mdn/dom-examples/tree/master/abort-api)（[也可以看在线演示](https://mdn.github.io/dom-examples/abort-api/)）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
