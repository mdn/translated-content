---
title: scripting.InjectionTarget
slug: Mozilla/Add-ons/WebExtensions/API/scripting/InjectionTarget
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

该对象包含用于指定 CSS 和 JavaScript 注入目标的详细信息。你可以在 {{WebExtAPIRef("scripting.executeScript()")}}、{{WebExtAPIRef("scripting.insertCSS()")}} 和 {{WebExtAPIRef("scripting.removeCSS()")}} 中使用该对象。

## 类型

该类型的取值为对象，包含如下属性：

- `allFrames` {{optional_inline}}
  - : `boolean`。脚本或 CSS 是否注入到标签页中的所有框架中。默认为 `false`。如果指定了 `frameIds`，则不能为 `true`。

- `frameIds` {{optional_inline}}
  - : `number` 数组（`array`）。要注入的框架的 ID 数组。

- `tabId`
  - : `number`。要注入的标签页的 ID。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.scripting`](https://developer.chrome.google.cn/docs/extensions/reference/api/scripting#type-InjectionTarget) API。
