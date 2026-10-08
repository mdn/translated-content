---
title: Window：screenX 属性
short-title: screenX
slug: Web/API/Window/screenX
l10n:
  sourceCommit: 6b9bb948a570848254e2023fda959cf86721f8e4
---

{{APIRef("CSSOM view API")}}

{{domxref("Window")}} 接口的 **`screenX`** 只读属性返回用户浏览器窗口左边框到屏幕左侧的水平距离，单位为 CSS 像素。

> [!NOTE]
> {{domxref("Window.screenLeft")}} 是较旧的 `screenX` 属性的别名。`screenLeft` 最初仅在 IE 中受支持，但因其流行而被各处引入。

## 值

一个数字，等于浏览器窗口左边缘到屏幕左边缘的 CSS 像素数。

## 示例

在我们的 [screenLeft 和 screenTop](https://mdn.github.io/dom-examples/screenleft-screentop/) 示例中，你会看到一块已绘制圆形的 canvas。此示例使用 {{domxref("Window.screenLeft")}} 和 {{domxref("Window.screenTop")}} 加上 {{domxref("Window.requestAnimationFrame()")}}，即使窗口位置发生移动，也会不断将圆重绘在屏幕上的同一物理位置。

更多信息请参见 {{domxref("Window.screenLeft")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("window.screenLeft")}}
- {{domxref("window.screenY")}}
