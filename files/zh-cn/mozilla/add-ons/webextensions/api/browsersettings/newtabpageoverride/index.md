---
title: browserSettings.newTabPageOverride
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPageOverride
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，可用于获取表示“新标签页”页面的 URL 字符串，即用户打开新的空白标签页时加载的页面。

请注意，这是一个只读设置。

## 浏览器兼容性

{{Compat}}

## 示例

获取新标签页 URL 的当前值：

```js
browser.browserSettings.newTabPageOverride.get({}).then((result) => {
  console.log(result.value);
});
```

{{WebExtExamples}}
