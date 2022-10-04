---
title: AbortController.abort()
slug: Web/API/AbortController/abort
---

{{APIRef("DOM")}}

{{domxref("AbortController")}} 接口的 **`abort()`** 方法会在 DOM 请求完成之前中止它。它能够中止 [fetch 请求](/zh-CN/docs/Web/API/fetch)、各种响应主体或者流的消耗。

## 语法

```js
abort()
abort(reason)
```

### 参数

- `reason` {{optional_inline}}
  - : 操作中止的原因，可以是各种 JavaScript 值。如果没有指定，则将原因设置为“AbortError”{{domxref("DOMException")}}。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

以下片段中，我们将使用 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 下载一个视频。

我们首先使用 {{domxref("AbortController.AbortController","AbortController()")}} 构造函数创建一个 controller，然后使用 {{domxref("AbortController.signal")}} 属性获取到它关联的 {{domxref("AbortSignal")}} 对象的引用。

当 [fetch 请求](/zh-CN/docs/Web/API/fetch) 初始化时，我们将 `AbortSignal` 作为一个选项传递进入请求的选项对象中（下面的 `{signal}`）。这将 signal 和 controller 与 fetch 请求相关联，并且允许我们通过调用 {{domxref("AbortController.abort()")}} 去中止它，如下面的第二个事件监听器。

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
  // …
  fetch(url, {signal}).then(function(response) {
    // …
  }).catch(function(e) {
    reports.textContent = `Download error: ${e.message}`;
  })
}
```

> **备注：** 当 `abort()` 被调用时，`fetch()` promise 将会抛出 `DOMException` 类型的 `Error`（名称为 `AbortError`）。

你可以在 github 上找到[完整的工作示例](https://github.com/mdn/dom-examples/tree/master/abort-api)；你还可以看它的[在线演示](https://mdn.github.io/dom-examples/abort-api/)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
