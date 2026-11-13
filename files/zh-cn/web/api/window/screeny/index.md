---
title: Window：screenY 属性
short-title: screenY
slug: Web/API/Window/screenY
l10n:
  sourceCommit: 6b9bb948a570848254e2023fda959cf86721f8e4
---

{{APIRef("CSSOM view API")}}

{{domxref("Window")}} 接口的 **`screenY`** 只读属性返回用户浏览器窗口上边框到屏幕上侧的垂直距离，单位为 CSS 像素。

> [!NOTE]
> {{domxref("Window.screenTop")}} 是较旧的 `screenY` 属性的别名。`screenTop` 最初仅在 IE 中受支持，后来因广泛使用而被各浏览器引入。

## 值

一个数字，等于浏览器窗口上边缘到屏幕上边缘的 CSS 像素数。

## 示例

在我们的 [screenLeft 和 screenTop](https://mdn.github.io/dom-examples/screenleft-screentop/) 示例中，你会看到一块已经画好圆的 canvas。本示例使用 {{domxref("Window.screenLeft")}} 和 {{domxref("Window.screenTop")}}，再加上 {{domxref("Window.requestAnimationFrame()")}}，不断把圆重绘到屏幕上的同一物理位置，即使窗口位置发生了移动。

更多信息请参见 {{domxref("Window.screenLeft")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("window.screenTop")}}
- {{domxref("window.screenX")}}
