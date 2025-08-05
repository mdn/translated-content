---
title: scripting.ContentScriptFilter
slug: Mozilla/Add-ons/WebExtensions/API/scripting/ContentScriptFilter
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

此对象包含通过 {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} 检索或通过 {{WebExtAPIRef("scripting.unregisterContentScripts()")}} 注销的脚本 ID 的列表。

## 类型

此类型的值为对象，包含以下属性：

- `ids`
  - : `string` 的 `array`。脚本 ID 的数组。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.scripting`](https://developer.chrome.google.cn/docs/extensions/reference/api/scripting#type-ContentScriptFilter) API。
