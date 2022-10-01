---
title: Window.outerHeight
slug: Web/API/Window/outerHeight
---

{{APIRef}}

## 概述

`Window.outerHeight` 获取整个浏览器窗口的高度（单位：像素），包括侧边栏（如果存在）、窗口镶边（window chrome）和窗口调正边框（window resizing borders/handles）。

该属性为只读，没有默认值。

## 语法

```
outWindowHeight = window.outerHeight;
```

`outWindowHeight` 为窗口的外层的高度。

## 备注

要改变窗口的大小，请查看 {{domxref("window.resizeBy()")}} 和 {{domxref("window.resizeTo()")}}。

要获取窗口的内层高度，即页面被显示区域的高度，可查看 {{domxref("window.innerHeight")}}。

### 图像示例

下面的示意图展示了 `outerHeight` 和 `innerHeight` 两者的不同。

![innerHeight vs outerHeight illustration](/@api/deki/files/213/=FirefoxInnerVsOuterHeight2.png)

## 浏览器兼容性

{{Compat}}

## 规范

DOM Level 0。不属于任何 W3C 技术规范或推荐。

## 相关链接

- {{domxref("window.innerHeight")}}
- {{domxref("window.innerWidth")}}
- {{domxref("window.outerWidth")}}
- {{domxref("window.resizeBy()")}}
- {{domxref("window.resizeTo()")}}
