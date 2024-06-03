---
title: browserSettings.newTabPosition
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPosition
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，可用于控制新打开标签页相对于已打开标签页的位置。

其底层值是一个字符串，可以取三个值中的一个：

- “afterCurrent”：在当前标签页旁边打开所有新标签页。
- “relatedAfterCurrent”：默认值。如果新标签页与当前标签页相关联（例如，通过当前标签页中的链接打开），则在当前标签页旁边打开新标签页。否则，在标签栏的末尾打开新标签页。
- “atEnd”：在标签栏的末尾打开所有新标签页。

## 浏览器兼容性

{{Compat}}

## 示例

以下代码将值设置为“afterCurrent”，然后记录新值：

```js
async function setAfterCurrent() {
  let result = await browser.browserSettings.newTabPosition.set({
    value: "afterCurrent",
  });
  console.log(`结果：${result}`);
  let newValue = await browser.browserSettings.newTabPosition.get({});
  console.log(`新值：${newValue.value}`);
}
```

{{WebExtExamples}}
