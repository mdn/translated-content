---
title: browserSettings.openSearchResultsInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，其底层值是布尔值。

如果设置为 `true`，当用户在浏览器的搜索框中选择一个项目时，搜索结果会显示在一个新标签页中。如果设置为 `false`（默认值），搜索结果会显示在当前标签页中。

注意，这不会影响从地址栏或智能地址栏中选择项目时的行为，只影响专用搜索框。

## 浏览器兼容性

{{Compat}}

## 示例

将设置指定为 `true`：

```js
function logResult(result) {
  console.log(`设置已修改：${result}`);
}

browser.browserSettings.openSearchResultsInNewTabs
  .set({ value: true })
  .then(logResult);
```

{{WebExtExamples}}
