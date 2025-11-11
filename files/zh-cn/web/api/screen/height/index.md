---
title: Screen：height 属性
short-title: height
slug: Web/API/Screen/height
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

**`Screen.height`** 只读属性返回屏幕的高度，单位为 CSS 像素。

## 值

一个数字。

## 示例

```js
if (window.screen.availHeight !== window.screen.height) {
  // 有东西正在占用屏幕空间！
}
```

## 备注

请注意，并非此属性返回的所有高度都可供浏览器窗口本身使用。任务栏等操作系统组件，或与系统集成的特殊应用窗口（例如最小化后像额外工具栏一样显示的音乐播放器）等，可能会减少浏览器窗口和其他应用程序可用的屏幕空间。因此，`window.screen.height` 与 `window.screen.availHeight` 之间会存在差异。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
