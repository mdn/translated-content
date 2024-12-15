---
title: omnibox.SuggestResult
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/SuggestResult
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

**`omnibox.SuggestResult`** 类型定义了扩展可以添加到地址栏下拉列表中的建议。

扩展的 {{WebExtAPIRef("omnibox.onInputChanged")}} 事件监听器会传递一个回调函数。为了响应用户的输入填入地址栏下拉列表，扩展可以将一个 `omnibox.SuggestResult` 对象数组传递给这个回调函数。

## 类型

这种类型的值是对象。它们具有以下属性：

- `content`
  - : 当用户在下拉列表中选择这个建议时，这个值将出现在地址栏本身。如果用户选择了这个建议，这个字符串将被发送到 {{WebExtAPIRef("omnibox.onInputEntered")}} 事件监听器。如果字符串与用户已经输入的内容相同，这个条目将不会出现在下拉列表中。
- `deletable`
  - : 建议结果是否可以被用户删除。
- `description`
  - : 这是在地址栏下拉列表中显示的字符串。

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.omnibox`](https://developer.chrome.google.cn/docs/extensions/reference/api/omnibox) API。
