---
title: Screen.width
slug: Web/API/Screen/width
---

{{APIRef}}

## 概述

返回屏幕的宽度。

## 语法

```plain
lWidth = window.screen.width
```

## 示例

```js
// crude way to check that the screen is at 1024x768
if (window.screen.width > 1000) {
  // resolution is below 10 x 7
}
```

## 备注

注意，该属性返回的宽度值不一定就是浏览器窗口可使用的宽度。当有其他小工具占据了屏幕空间时，浏览器有时不能占用小工具（如任务栏）占据的空间。`window.screen.width` 和 `window.screen.availWidth` 两者不同。相关属性 {{domxref("window.screen.height")}}。

在返回该值时，IE 会考虑缩放设置。只有在缩放比例为 100% 时，IE 才返回真实的屏幕宽度。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
