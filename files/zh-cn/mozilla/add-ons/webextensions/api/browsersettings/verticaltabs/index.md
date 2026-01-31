---
title: browserSettings.verticalTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/verticalTabs
l10n:
  sourceCommit: 0883a7eca5c44d65daea8d73163a89d66a8d2f13
---

用于表示浏览器是否已启用垂直标签页的 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象。该对象的底层值为布尔类型。

## 示例

将浏览器设置设为 `false` 以恢复为水平标签页：

```js
browser.browserSettings.verticalTabs
  .set({ value: false })
  .then((result) => console.log(`标签页设置已被修改：${result}`));
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
