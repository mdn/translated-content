---
title: clipboard
slug: Mozilla/Add-ons/WebExtensions/API/clipboard
l10n:
  sourceCommit: eec174a08a5003da32f53e694c45eda3377b4d18
---

WebExtension 的 `clipboard` API（与[标准剪贴板 API](/zh-CN/docs/Web/API/Clipboard_API) 不同）使扩展能够将项目复制到系统剪贴板。目前，WebExtension `clipboard` API 仅支持复制图像，但计划在未来支持复制文本和 HTML。

WebExtension `clipboard` API 之所以存在，主要是因为标准剪贴板 API [不支持将图像写入剪贴板](https://w3c.github.io/clipboard-apis/#writing-to-clipboard)。一旦标准剪贴板 API 对非文本剪贴板内容的支持进入广泛使用，则 WebExtension `clipboard` API 可能会被弃用。

此 API 不支持从剪贴板读取，因为剪贴板已经可以使用标准的 web 平台 API 进行读取。请参阅[与剪贴板交互](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard#读取系统粘贴板)。

此 API 基于 Chrome 的 [`clipboard`](https://developer.chrome.google.cn/docs/apps/reference/clipboard) API，但该 API 仅适用于 Chrome 应用，不适用于扩展。

要使用此 API，你需要有 `"clipboardWrite"` 扩展[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

## 函数

- {{WebExtAPIRef("clipboard.setImageData()")}}
  - : 复制图像到剪切板。

## 浏览器兼容性

{{WebExtExamples("h2")}}

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.clipboard`](https://developer.chrome.google.cn/apps/clipboard) API。
