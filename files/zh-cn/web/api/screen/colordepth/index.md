---
title: Screen.colorDepth
slug: Web/API/Screen/colorDepth
---

{{APIRef("CSSOM")}}

返回屏幕的颜色深度（color depth）。根据 CSSOM( CSS 对象模型 ) 视图，为兼容起见，该值总为 24。

## 示例

```js
// 检测屏幕的颜色深度
if ( window.screen.colorDepth < 8) {
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
