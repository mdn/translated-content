---
title: browserSettings.homepageOverride
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/homepageOverride
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，可用于获取表示当前设置为浏览器主页的 URL 的字符串。

请注意，这是一个只读设置。要更改主页，请参阅 [chrome_settings_overrides](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)。

## 浏览器兼容性

{{Compat}}

## 示例

获取主页 URL 的当前值：

```js
browser.browserSettings.homepageOverride.get({}).then((result) => {
  console.log(result.value);
});
```

{{WebExtExamples}}
