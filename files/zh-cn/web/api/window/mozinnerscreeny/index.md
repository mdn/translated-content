---
title: Window.mozInnerScreenY
slug: Web/API/Window/mozInnerScreenY
---

{{APIRef}}

## 概要

在屏幕坐标下获取窗口视口左上角的 Y 坐标

> **备注：**该坐标是以 CSS 像素报告显示的，而不是以硬件像素。这意味着它可以受缩放级别的影响; 要计算物理屏幕像素的实际数量，需要使用[`nsIDOMWindowUtils.screenPixelsPerCSSPixel`](/zh-CN/docs/XPCOM_Interface_Reference/nsIDOMWindowUtils) 属性

## 语法

```
screenY = window.mozInnerScreenY;
```

## 值

- _screenY_ 存储的是 `window.mozInnerScreenY` 的属性值。
- `window.mozInnerScreenY`的属性值是一个浮点数，只读;它没有默认值。

## 规范

不属于任何 W3C 规范或标准

## 相关链接

- {{domxref("window.mozInnerScreenX")}}
- [`nsIDOMWindowUtils.screenPixelsPerCSSPixel`](/zh-CN/docs/XPCOM_Interface_Reference/nsIDOMWindowUtils)
