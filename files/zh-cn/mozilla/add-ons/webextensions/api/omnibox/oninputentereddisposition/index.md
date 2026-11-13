---
title: omnibox.OnInputEnteredDisposition
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/OnInputEnteredDisposition
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

**`omnibox.OnInputEnteredDisposition`** 类型描述了扩展应如何处理用户在地址栏的下拉菜单中的推荐中的选择。

它将与选择本身一起传递到 {{WebExtAPIRef("omnibox.onInputEntered")}} 事件监听器中。

## 类型

该类型的取值是字符串，可以取以下值之一：

- "currentTab"
  - : 在当前标签页中打开选择的内容。
- "newForegroundTab"
  - : 在新标签页中打开选择的内容，并将新标签页置于前台。
- "newBackgroundTab"
  - : 在新后台标签页中打开选择的内容，并保持当前标签页在前台。

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.omnibox`](https://developer.chrome.google.cn/docs/extensions/reference/api/omnibox) API。
