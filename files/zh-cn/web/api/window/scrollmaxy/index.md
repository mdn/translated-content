---
title: Window：scrollMaxY 属性
short-title: scrollMaxY
slug: Web/API/Window/scrollMaxY
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}} {{Non-standard_header}}

**`Window.scrollMaxY`** 只读属性返回文档在垂直方向上可滚动的最大像素值。

## 值

一个数字。

## 示例

```js
// 滚动到页面的底部
let maxY = window.scrollMaxY;

window.scrollTo(0, maxY);
```

## 备注

不要使用此属性来获取文档的总高度。{{domxref("window.innerHeight")}} + window\.scrollMaxY 并不等于文档的实际高度，因为 {{domxref("window.innerHeight")}} 包含任何可见水平滚动条的宽度，因此计算结果会比实际文档高度多出水平滚动条的宽度。请改用 {{domxref("element.scrollHeight","document.body.scrollHeight")}}。另请参阅 {{domxref("window.scrollMaxX")}} 和 {{domxref("window.scrollTo")}}。

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}
