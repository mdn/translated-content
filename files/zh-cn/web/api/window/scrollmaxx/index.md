---
title: Window.scrollMaxX
slug: Web/API/Window/scrollMaxX
---

{{APIRef}} {{Non-standard_header}}

**`Window.scrollMaxX`** 只读属性，返回有关文档可水平滚动的最大像素数。

## 语法

```plain
xMax = window.scrollMaxX
```

- `xMax` 是像素数。

## 示例

```js
// 滚动到页面的右边缘
let maxX = window.scrollMaxX;

window.scrollTo(maxX, 0);
```

## 提示

不要用这个属性来获得文档总宽度，文档总宽度不等于[window.innerWidth](/zh-CN/docs/DOM/window.innerWidth) + window\.scrollMaxX。因为 {{domxref("window.innerWidth")}}包含所有可见的垂直滚动条的宽度，所以结果会超出文档总宽度，多出所有可见的垂直滚动条的宽度。作为替代，可使用{{domxref("element.scrollWidth","document.body.scrollWidth")}}。查看相关：{{domxref("window.scrollMaxY")}}。

## 规范

不属于任何规范。

## 浏览器兼容

{{Compat}}
