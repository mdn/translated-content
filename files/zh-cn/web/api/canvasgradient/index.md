---
title: CanvasGradient
slug: Web/API/CanvasGradient
---

{{APIRef("Canvas")}}

**`CanvasGradient`** 接口表示描述渐变的不透明对象。通过 {{domxref("CanvasRenderingContext2D.createLinearGradient()")}} 或 {{domxref("CanvasRenderingContext2D.createRadialGradient()")}} 的返回值得到。

## 属性

_不透明对象，没有暴露的属性。_

## 方法

_没有继承的方法_

- {{domxref("CanvasGradient.addColorStop()")}}
  - : 添加一个由偏移（`offset`）和颜色（`color`）定义的断点到渐变中。如果偏移值不在 0 到 1 之间，将抛出`INDEX_SIZE_ERR 错误，如果颜色值不能被解析为有效的 CSS 颜色值 {{cssxref("&lt;color&gt;")}}，将抛出 SYNTAX_ERR`错误。

## 标准

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 请参考

- 创建方法在{{domxref("CanvasRenderingContext2D")}}.
- {{HTMLElement("canvas")}} 元素及其有关接口{{domxref("HTMLCanvasElement")}}.
