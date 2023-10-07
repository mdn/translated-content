---
title: clipboard.setImageData()
slug: Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData
---

{{AddonSidebar()}}

将图像复制到剪贴板。在将图像写入剪贴板之前，会对图像进行重新编码。如果图像无效，则不会修改剪贴板。

图像被作为包含经过编码的图像的 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) 提供。支持 JPEG 和 PNG 格式。

基于 Chrome 的 [`clipboard.setImageData()`](https://developer.chrome.com/apps/clipboard) API，但存在一些差异：

- Chrome API 仅适用于应用，不适用于扩展程序。
- 此 API 需要 `"clipboardWrite"` 权限，Chrome 版本需要 `"clipboard"` 权限。
- Chrome 的 API 使用回调，此 API 使用 Promise。
- 此 API 不支持 `additionalItems` 参数。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js
browser.clipboard.setImageData(imageData, imageType);
```

### 参数

- `imageData`
  - : An [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) containing the encoded image data to copy to the clipboard.
- `imageType`
  - : A {{domxref("DOMString")}} indicating the type of image contained in `imageData`: `"png"` or `"jpeg"`.

### 返回值

A [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be resolved with no arguments if the operation succeeded, or rejected if there was an error (for example, because the data did not represent a valid image).

## 浏览器兼容性

{{Compat}}

## 示例

Copy a remote image:

```js
// requires:
// * the host permission for "https://cdn.mdn.mozilla.net/*"
// * the API permission "clipboardWrite"

fetch("https://cdn.mdn.mozilla.net/static/img/favicon144.png")
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

Copy an image that was bundled with the extension:

```js
// requires the API permission "clipboardWrite"

fetch(browser.runtime.getURL("image.png"))
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

{{WebExtExamples}}

> **备注：** 此 API 基于 Chromium 的 [`chrome.clipboard`](https://developer.chrome.com/apps/clipboard) API.
