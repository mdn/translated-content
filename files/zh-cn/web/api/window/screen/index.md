---
title: Window：screen 属性
slug: Web/API/Window/screen
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("CSSOM")}}

{{DOMxRef("Window")}} 的 **`screen`** 属性返回一个与该窗口关联的屏幕对象引用。`screen` 对象实现了 {{DOMxRef("Screen")}} 接口，是一个用于检查当前窗口所渲染屏幕属性的特殊对象。

## 值

{{DOMxRef("Screen")}} 对象。

## 示例

```js
if (screen.pixelDepth < 8) {
  // 使用低色彩版本的页面
} else {
  // 使用正常的彩色页面
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
