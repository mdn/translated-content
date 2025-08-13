---
title: browserSettings.zoomSiteSpecific
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/zoomSiteSpecific
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，其底层值为布尔值。

此属性设置了[配置设置](https://support.mozilla.org/zh-CN/kb/about-config-editor-firefox)中的 `browser.zoom.siteSpecific`，该配置控制缩放设置如何应用于站点和标签页。

如果 `browser.zoom.siteSpecific` 为 `true`，则缩放操作适用于同一站点的所有页面，因此：

- 页面加载时，如果存在该站点的缩放级别，则将其应用于页面，否则将应用全局默认缩放级别。
- 当页面的缩放级别更改时，其他标签页中来自该站点的页面的缩放级别也会更改。

如果 `browser.zoom.siteSpecific` 设置为 `false`，则缩放操作仅适用于活动标签页，因此：

- 新标签页打开时，将应用全局默认缩放级别。
- 当标签页中的缩放级别更改时，它会保持跨页面的加载，并且不会影响其他标签页中的缩放级别。

当 Firefox 安装时，`browser.zoom.siteSpecific` 为 true。

如果 [`privacy.websites`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)`.resistFingerprinting` 为 `true`，则此设置无效，缩放是基于每个标签页的。

## 浏览器兼容性

{{Compat}}

## 示例

将设置指定为 `false`：

```js
function logResult(result) {
  console.log(`设置已修改：${result}`);
}

browser.browserSettings.zoomSiteSpecific.set({ value: false }).then(logResult);
```

{{WebExtExamples}}
