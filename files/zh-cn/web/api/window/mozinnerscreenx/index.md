---
title: Window.mozInnerScreenX
slug: Web/API/Window/mozInnerScreenX
---

{{APIRef}}

## 概要

在屏幕坐标中获取窗口视口左上角的 X 坐标

> [!NOTE]
> 该坐标以 CSS 像素报告显示，而不是硬件像素。这意味着它可以受缩放级别的影响; 要计算物理屏幕像素的实际数量，需要使用 [`nsIDOMWindowUtils.screenPixelsPerCSSPixel`](/zh-CN/docs/XPCOM_Interface_Reference/nsIDOMWindowUtils) 属性。

## 值

- _screenX_ 存储的是 `window.mozInnerScreenX` 的属性值。
- `window.mozInnerScreenX` 属性的值是一个浮点数，只读; 它没有默认值。

## 规范

不属于任何 W3C 规范或标准。

## 相关链接

- {{domxref("window.mozInnerScreenY")}}
- [`nsIDOMWindowUtils.screenPixelsPerCSSPixel`](/zh-CN/docs/XPCOM_Interface_Reference/nsIDOMWindowUtils)
