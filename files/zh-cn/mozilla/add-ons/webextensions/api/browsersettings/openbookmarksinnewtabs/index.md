---
title: browserSettings.openBookmarksInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，其底层值是一个布尔值。

如果设置为 `true`，当用户选择一个书签时，它会在新标签页中打开。如果设置为 `false`（默认值），书签会在当前标签页中打开。

## 浏览器兼容性

{{Compat}}

## 示例

将设置调整为 `true`：

```js
function logResult(result) {
  console.log(`设置已修改：${result}`);
}

browser.browserSettings.openBookmarksInNewTabs
  .set({ value: true })
  .then(logResult);
```

{{WebExtExamples}}
