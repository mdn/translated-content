---
title: Window.outerWidth
slug: Web/API/Window/outerWidth
---

{{APIRef}}

## 概述

`Window.outerWidth` 获取浏览器窗口外部的宽度。表示整个浏览器窗口的宽度，包括侧边栏（如果存在）、窗口镶边（window chrome）和调正窗口大小的边框（window resizing borders/handles）。

该属性为只读，没有默认值。

## 语法

```plain
outWindowWidth = window.outerWidth;
```

`outWindowWidth` 是窗口的外层的宽度。

## 备注

要改变一个窗口的大小，可参考 {{domxref("window.resizeBy()")}} 和 {{domxref("window.resizeTo()")}}。

要获取一个窗口的内层宽度（inner width），即页面被展示的区域，请参考 {{domxref("window.innerWidth")}}。

## 浏览器兼容性

{{Compat}}

## 规范

DOM Level 0。不属于任何 W3C 技术规范或推荐。the To do in Notes

## 相关链接

- {{domxref("window.outerHeight")}}, {{domxref("window.innerHeight")}}, {{domxref("window.innerWidth")}}
- {{domxref("window.resizeBy()")}}, {{domxref("window.resizeTo()")}}
