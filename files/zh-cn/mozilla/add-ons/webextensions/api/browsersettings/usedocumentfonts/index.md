---
title: browserSettings.useDocumentFonts
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，其基础值是布尔值。

默认情况下，网页可以使用 CSS 属性（例如 [`font-family`](/zh-CN/docs/Web/CSS/font-family)）来指定所需的字体。此设置允许扩展指示 Firefox 忽略网页指定的字体，仅使用系统字体。

其基础值是一个布尔值：

- `true`：使用网页指定的字体。这是默认值。
- `false`：使用系统字体。

## 浏览器兼容性

{{Compat}}

## 示例

将设置设为 `false`：

```js
function logResult(result) {
  console.log(`设置已更改：${result}`);
}

browser.browserSettings.useDocumentFonts.set({ value: false }).then(logResult);
```

{{WebExtExamples}}
