---
title: browserSettings.zoomFullPage
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/zoomFullPage
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，其底层值为布尔值。

默认情况下，缩放应用于网页的所有内容。使用[仅缩放文本设置](https://support.mozilla.org/zh-CN/kb/页面缩放)用户可以选择仅对页面上的文本进行缩放。此设置使 Web 扩展能够控制此设置，并确定缩放是应用于整个页面还是仅应用于文本。

设置如下：

- `true`：缩放应用于网页的所有内容（默认）。
- `false`：仅将缩放应用于网页文本。

## 浏览器兼容性

{{Compat}}

## 示例

将设置指定为 `false`：

```js
function logResult(result) {
  console.log(`设置已修改：${result}`);
}

browser.browserSettings.zoomFullPage.set({ value: false }).then(logResult);
```

{{WebExtExamples}}
