---
title: browserSettings.overrideContentColorScheme
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideContentColorScheme
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，其底层值是字符串。

Firefox 允许用户为浏览器界面选择一个主题。这些主题可以为网页应用浅色或深色主题。通过使用 `layout.css.prefers-color-scheme.content-override` 首选项，用户可以覆盖主题并选择以浅色或深色主题渲染网页，或者跟随设备的主题。此浏览器设置公开了该首选项。

此对象可以取以下值：

- “light”：为网页应用浅色主题。
- “dark”：为网页应用深色主题。
- “system”：根据设备的主题为网页应用浅色或深色主题。
- “browser”：根据浏览器的主题为网页应用浅色或深色主题。

## 浏览器兼容性

{{Compat}}

## 示例

此示例覆盖设置以使用网页的深色主题：

```js
function logResult(result) {
  console.log(`设置已修改：${result}`);
}

browser.browserSettings.overrideContentColorScheme
  .set({ value: "dark" })
  .then(logResult);
```

{{WebExtExamples}}
