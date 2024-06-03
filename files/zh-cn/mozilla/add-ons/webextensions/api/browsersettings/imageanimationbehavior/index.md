---
title: browserSettings.imageAnimationBehavior
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/imageAnimationBehavior
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，用于更改浏览器处理动画图像（例如 GIF）的方式。

其底层值是一个字符串，可以取三个值中的一个：

- “normal”：默认值。按照正常方式播放动画图像。
- “none”：完全不播放图像动画。
- “once”：只播放动画一次。

## 浏览器兼容性

{{Compat}}

## 示例

禁用动画图像：

```js
browser.browserSettings.imageAnimationBehavior.set({ value: "none" });
```

{{WebExtExamples}}
