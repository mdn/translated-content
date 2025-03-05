---
title: Screen：colorDepth 属性
slug: Web/API/Screen/colorDepth
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}

只读属性 **`Screen.colorDepth`** 返回屏幕的颜色深度（color depth）。根据 CSSOM（CSS 对象模型），某些实现为了兼容性原因总是返回 `24`。请参阅浏览器兼容性部分，以了解不这么做的浏览器。

## 值

一个数字。

## 示例

```js
// 检测屏幕的颜色深度
if (window.screen.colorDepth < 8) {
  // 使用低色彩版本页面
} else {
  // 使用常规的彩色版页面
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Screen.pixelDepth")}}
