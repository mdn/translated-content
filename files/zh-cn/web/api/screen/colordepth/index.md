---
title: Screen.colorDepth
slug: Web/API/Screen/colorDepth
---

{{APIRef("CSSOM View")}}

## 概述

返回屏幕的颜色深度（color depth）。根据 CSSOM( CSS 对象模型 ) 视图，为兼容起见，该值总为 24。

## 语法

```plain
bitDepth = window.screen.colorDepth
```

## 示例

```plain
// 检测屏幕的颜色深度
if ( window.screen.colorDepth < 8) {
  // 使用低色彩版本页面
} else {
  // 使用常规的彩色版页面
}
```

## 规范

{{Specifications}}

## 相关链接

- {{domxref("Screen.pixelDepth")}}
