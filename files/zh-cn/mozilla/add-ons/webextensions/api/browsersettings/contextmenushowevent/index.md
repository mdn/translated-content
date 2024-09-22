---
title: browserSettings.contextMenuShowEvent
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，用于确定浏览器的上下文菜单是在 mouseup 事件还是 mousedown 事件显示。

其底层值是一个字符串，可以是“mouseup”或“mousedown”。

在 Windows 上，默认值为“mouseup”，在 macOS 和 Linux 上为“mousedown”。在 Windows 上对其进行赋值没有效果——此设置仅设计为允许上下文菜单在 mouseup 事件时打开，而不是在 mousedown 事件时。

## 浏览器兼容性

{{Compat}}

## 示例

将设置值设置为“mouseup”：

```js
function logResult(result) {
  console.log(`设置已修改：${result}`);
}

browser.browserSettings.contextMenuShowEvent
  .set({ value: "mouseup" })
  .then(logResult);
```

{{WebExtExamples}}
