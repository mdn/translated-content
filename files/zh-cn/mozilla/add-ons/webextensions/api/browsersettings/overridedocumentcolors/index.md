---
title: browserSettings.overrideDocumentColors
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，其底层值是字符串。

Firefox 允许用户为文档背景和文本设置自定义颜色。默认情况下，这些颜色值仅在选择高对比度主题时应用（高对比度主题是某些操作系统用户界面的一项特性，旨在通过提高对比度来改善无障碍）。然而，用户也可以选择始终应用这些颜色或从不应用。此浏览器设置公开了该首选项。

其底层值是一个字符串，可以取以下任一值：

- “high-contrast-only”：仅在选择高对比度主题时应用用户的选择。这是默认值。
- “never”：从不应用用户的选择。
- “always”：始终应用用户的选择。

## 浏览器兼容性

{{Compat}}

## 示例

将设置指定为“always”：

```js
function logResult(result) {
  console.log(`设置已修改：${result}`);
}

browser.browserSettings.overrideDocumentColors
  .set({ value: "always" })
  .then(logResult);
```

{{WebExtExamples}}
