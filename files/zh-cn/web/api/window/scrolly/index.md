---
title: Window.scrollY
slug: Web/API/Window/scrollY
---

{{APIRef}}

## 概述

返回文档在垂直方向已滚动的像素值。

## 语法

```plain
var y = window.scrollY;
```

- `y` 是文档从顶部开始滚动过的像素值。

## 示例

```js
// 保证刚好滚动到第二页
if (window.scrollY) {
  window.scroll(0, 0); // 重置滚动位置为文档的左上角
}

window.scrollByPages(1);
```

## 备注

如果正在使用相对滚动函数，如 {{domxref("window.scrollBy")}}、{{domxref("window.scrollByLines")}} 或 {{domxref("window.scrollByPages")}}，则需要使用该属性来检测文档是否已被滚动了某段距离。

`pageYOffset` 属性是 `scrollY` 属性的别名：

```plain
window.pageYOffset == window.scrollY; // 总是返回 true
```

为了跨浏览器兼容，请使用 `window.pageYOffset` 代替 `window.scrollY`。另外，旧版本 IE（<9）两个属性都不支持，必须使用其他的非标准属性。完整的兼容性代码如下：

```js
var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

var x = supportPageOffset
  ? window.pageXOffset
  : isCSS1Compat
  ? document.documentElement.scrollLeft
  : document.body.scrollLeft;
var y = supportPageOffset
  ? window.pageYOffset
  : isCSS1Compat
  ? document.documentElement.scrollTop
  : document.body.scrollTop;
```

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}

## 相关链接

- {{domxref("window.scrollX")}}
