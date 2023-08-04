---
title: clipboard
slug: Mozilla/Add-ons/WebExtensions/API/clipboard
---

{{AddonSidebar}}

WebExtention 的 `clipboard` API 增加了一个将图像复制到剪贴板的函数。目前，这个 API 仅支持复制图像，但我们期望它未来支持复制文本和 HTML（译者注：原文如此，可能是指被支持复制富内容之后的标准剪贴板 API 取代）。

这个 WebExtension API 之所以存在，主要是因为标准的 Web 剪贴板 API [Clipboard API](/zh-CN/docs/Web/API/Clipboard_API) 不支持将图像写入剪贴板。一旦标准剪贴板 API 对非文本剪贴板内容的支持进入通用状态，则此 API 可能会被弃用。

Reading from the clipboard is not supported by this API, because the clipboard can already be read using the standard web platform APIs. See [Interacting with the clipboard](/zh-CN/Add-ons/WebExtensions/Interact_with_the_clipboard#Reading_from_the_clipboard).

This API is based on Chrome's [`clipboard`](https://developer.chrome.com/apps/clipboard) API, but that API is only available for Chrome apps, not extensions.

To use this API you need the `"clipboardWrite"` extension [permission](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## 函数

- {{WebExtAPIRef("clipboard.setImageData()")}}
  - : 复制图像到剪切板。

## 浏览器兼容性

{{Compat}}

> **备注：** 此 API 基于 Chromium 的 [`chrome.clipboard`](https://developer.chrome.com/apps/clipboard) API.
