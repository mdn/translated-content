---
title: clipboard.setImageData()
slug: Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

将图像复制到剪贴板。在将图像写入剪贴板之前，会对图像进行重新编码。如果图像无效，则不会修改剪贴板。

图像被作为包含经过编码的图像的 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) 提供。支持 JPEG 和 PNG 格式。

虽然此 API 基于 Chrome 浏览器的 [`clipboard.setImageData()`](https://developer.chrome.google.cn/docs/apps/reference/clipboard) API，但两者还是有一些区别：

- Chrome API 仅适用于应用，不适用于扩展程序。
- 此 API 仅需要 `"clipboardWrite"` 权限，Chrome 版本还需要 `"clipboard"` 权限。
- Chrome 的 API 使用回调，此 API 仅支持 Promise。
- 此 API 不支持 `additionalItems` 参数。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
browser.clipboard.setImageData(imageData, imageType)
```

### 参数

- `imageData`
  - : 一个 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)，包含要复制到剪贴板的编码图像数据。
- `imageType`
  - : 表示 `imageData` 中包含的图像类型的字符串：`"png"` 或 `"jpeg"`。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，如果操作成功，将不带参数兑现；如果出现错误（例如，由于数据不代表有效图像），则拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

复制远程图像：

```js
// 需要：
// * "https://mdn.github.io/*" 的主机权限
// * API 权限 "clipboardWrite"

fetch("https://mdn.github.io/shared-assets/images/examples/favicon144.png")
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

复制与扩展捆绑的图像：

```js
// 需要 API 权限 "clipboardWrite"

fetch(browser.runtime.getURL("image.png"))
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.clipboard`](https://developer.chrome.google.cn/docs/apps/reference/clipboard) API。
