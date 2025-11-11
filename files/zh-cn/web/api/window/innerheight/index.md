---
title: Window.innerHeight
slug: Web/API/Window/innerHeight
---

{{APIRef}}

## 概述

浏览器窗口的视口（viewport）高度（以像素为单位）；如果有水平滚动条，也包括滚动条高度。

## 值

`intViewportHeight` 为浏览器窗口的视口的高度。

`window.innerHeight` 属性为只读，且没有默认值。

## 备注

任何窗口对象，如 {{domxref("window")}}、frame、frameset 或 secondary window 都支持 `innerHeight` 属性。

有一个[算法](https://bugzilla.mozilla.org/show_bug.cgi?id=189112#c7)用来获取不包括水平滚动条的视口高度。

## 例子

### 假设有一个 frameset

```js
var intFrameHeight = window.innerHeight; // or

var intFrameHeight = self.innerHeight;
// 返回 frameset 里面的 frame 视口的高度

var intFramesetHeight = parent.innerHeight;
// 返回上一级 frameset 的视口的高度

var intOuterFramesetHeight = top.innerHeight;
// 返回最外部 frameset 的视口的高度
```

改变一个窗口的大小，可以查看 {{domxref("window.resizeBy()")}} 和 {{domxref("window.resizeTo()")}}。

想获取窗口的外层高度（outer height），即整个浏览器窗口的高度，请查看 {{domxref("window.outerHeight")}}。

### 图像示例

下面的示意图展示了 `outerHeight` 和 `innerHeight` 两者的区别。

![innerHeight vs outerHeight illustration](firefoxinnervsouterheight2.png)

## 浏览器兼容性

{{Compat}}

## 标准相关信息

DOM Level 0。不属于任何 W3C 技术规范或推荐。

## 相关链接

- {{domxref("window.innerWidth")}}
- {{domxref("window.outerHeight")}}
- {{domxref("window.outerWidth")}}
