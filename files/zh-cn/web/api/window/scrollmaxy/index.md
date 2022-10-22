---
title: Window.scrollMaxY
slug: Web/API/Window/scrollMaxY
---

{{APIRef}} {{Non-standard_header}}

只读属性 **`Window.scrollMaxY`** 返回`document`可以纵向滚动的最大像素数目

## 语法

```plain
yMax = window.scrollMaxY
```

- `yMax` 是像素数。

## 例子

```js
// 滚动到页面的底部
let maxY = window.scrollMaxY;

window.scrollTo(0, maxY);
```

## 备注

不要用 {{domxref("window.innerHeight")}} + window\.scrollMaxY 来计算 document 的总高度，因为 {{domxref("window.innerHeight")}} 也包括了可见的水平滚动条的高度。正确的做法是使用 {{domxref("element.scrollHeight","document.body.scrollHeight")}} 。

参见{{domxref("window.scrollMaxX")}} 和 {{domxref("window.scrollTo")}} 。

## 规范

这不属于任何规范中的一部分。

## 浏览器兼容性

{{Compat}}
