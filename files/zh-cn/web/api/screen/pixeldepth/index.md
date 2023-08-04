---
title: Screen.pixelDepth
slug: Web/API/Screen/pixelDepth
---

{{APIRef("CSSOM View")}}

## 概述

返回屏幕的位深度/色彩深度（bit depth）。根据 CSSOM( CSS 对象模型 ) 视图，为兼容起见，该值总为 24。

## 语法

```plain
depth = window.screen.pixelDepth
```

## 示例

```js
// 如果没有足够的位深度/色彩深度（bit depth），就选择一个更纯的颜色
if (window.screen.pixelDepth > 8) {
  document.style.color = "#FAEBD7";
} else {
  document.style.color = "#FFFFFF";
}
```

## 规范

{{Specifications}}

## 相关链接

- {{domxref("Screen.colorDepth")}}
