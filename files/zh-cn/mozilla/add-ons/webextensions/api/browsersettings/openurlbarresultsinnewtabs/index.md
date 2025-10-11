---
title: browserSettings.openUrlbarResultsInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，其底层是一个布尔值。

当用户聚焦地址栏并开始输入时，浏览器会提供自动完成建议：一个基于用户不完整输入和浏览历史的网页下拉列表。

如果设置为 `true`，当用户选择这些项目之一时，项目会在新标签页中打开。如果设置为 `false`（默认值），项目会在当前标签页中打开。

## 浏览器兼容性

{{Compat}}

## 示例

将该项配置设置为 `true`：

```js
function logResult(result) {
  console.log(`设置已修改：${result}`);
}

browser.browserSettings.openUrlbarResultsInNewTabs
  .set({ value: true })
  .then(logResult);
```

{{WebExtExamples}}
