---
title: Window：scrollMaxX 属性
slug: Web/API/Window/scrollMaxX
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}} {{Non-standard_header}}

**`Window.scrollMaxX`** 只读属性返回文档可以水平滚动的最大像素数。

## 值

一个数字。

## 示例

```js
// 滚动到页面右边缘
let maxX = window.scrollMaxX;

window.scrollTo(maxX, 0);
```

## 备注

不要使用此属性来获取文档的总宽度，因为它不等于 [window.innerWidth](/zh-CN/docs/Web/API/Window/innerWidth) + window\.scrollMaxX。这是因为 {{domxref("window.innerWidth")}} 包括任何可见垂直滚动条的宽度，因此结果会比文档的总宽度多出任何可见垂直滚动条的宽度。请使用 {{domxref("element.scrollWidth","document.body.scrollWidth")}} 代替。参见 {{domxref("window.scrollMaxY")}}。

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}
