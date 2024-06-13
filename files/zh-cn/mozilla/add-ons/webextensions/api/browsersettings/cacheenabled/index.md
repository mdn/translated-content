---
title: browserSettings.cacheEnabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/cacheEnabled
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，可用于全局启用或禁用浏览器缓存。

其底层值是一个布尔值。

## 浏览器兼容性

{{Compat}}

## 示例

获取此设置的当前值：

```js
function logResult(result) {
  console.log(`当前值：${result.value}`);
  console.log(`当前控制级别：${result.levelOfControl}`);
}

browser.browserSettings.cacheEnabled.get({}).then(logResult);
```

禁用浏览器缓存：

```js
function logResult(result) {
  console.log(`设置已修改：${result}`);
}

browser.browserSettings.cacheEnabled.set({ value: false }).then(logResult);
```

{{WebExtExamples}}
