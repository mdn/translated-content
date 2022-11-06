---
title: Element.scrollTop
slug: Web/API/Element/scrollTop
---

{{ APIRef("DOM") }}

**`Element.scrollTop`** 属性可以获取或设置一个元素的内容垂直滚动的像素数。

一个元素的 `scrollTop` 值是这个元素的**内容顶部**（卷起来的）到它的视口可见内容（的顶部）的距离的度量。当一个元素的内容没有产生垂直方向的滚动条，那么它的 `scrollTop` 值为`0`。

> **警告：** 在使用显示比例缩放的系统上，`scrollTop`可能会提供一个小数。

## 语法

```
// 获得滚动的像素数
var  intElemScrollTop = someElement.scrollTop;
```

运行此代码后， `intElemScrollTop` 是一个整数，即{{domxref("element")}}的内容向上滚动的像素数。

```
// 设置滚动的距离
element.scrollTop = intValue;
```

`scrollTop` 可以被设置为任何整数值，同时注意：

- 如果一个元素不能被滚动（例如，它没有溢出，或者这个元素有一个"**non-scrollable"**属性）， `scrollTop`将被设置为`0`。
- 设置`scrollTop`的值小于 0，`scrollTop` 被设为`0`
- 如果设置了超出这个容器可滚动的值，`scrollTop` 会被设为最大值。

## 例子

padding-top

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

padding-bottom

**Left** **Top** **Right** **Bottom** _margin-top_ _margin-bottom_ _border-top_ _border-bottom_

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

## 参考

- [MSDN's Measuring Element Dimension and Location](<https://msdn.microsoft.com/en-us/library/hh781509(v=vs.85).aspx>)
- {{domxref("Element.scrollLeft")}}
- {{domxref("Element.scrollTo()")}}
