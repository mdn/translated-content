---
title: TextMetrics
slug: Web/API/TextMetrics
---

{{APIRef("Canvas API")}}

`在 canvas 中，TextMetrics` 接口表示文本的尺寸，通过 {{domxref("CanvasRenderingContext2D.measureText()")}} 方法创建。

## 属性

- {{domxref("TextMetrics.width")}} {{readonlyInline}}
  - : **double** 类型，使用 CSS 像素计算的内联字符串的宽度。基于当前上下文字体考虑。
- {{domxref("TextMetrics.actualBoundingBoxLeft")}} {{readonlyInline}}
  - : **double** 类型，平行于基线，从{{domxref("CanvasRenderingContext2D.textAlign")}} 属性确定的对齐点到文本矩形边界左侧的距离，使用 CSS 像素计算；正值表示文本矩形边界左侧在该对齐点的左侧。
- {{domxref("TextMetrics.actualBoundingBoxRight")}} {{readonlyInline}}
  - : **double** 类型，平行于基线，从{{domxref("CanvasRenderingContext2D.textAlign")}} 属性确定的对齐点到文本矩形边界右侧的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.fontBoundingBoxAscent")}} {{readonlyInline}}
  - : **double** 类型，从{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到渲染文本的所有字体的矩形最高边界顶部的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.fontBoundingBoxDescent")}} {{readonlyInline}}
  - : **double** 类型，从{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到渲染文本的所有字体的矩形边界最底部的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.actualBoundingBoxAscent")}} {{readonlyInline}}
  - : **double** 类型，从{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到渲染文本的矩形边界顶部的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.actualBoundingBoxDescent")}} {{readonlyInline}}
  - : **double** 类型，从{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到渲染文本的矩形边界底部的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.emHeightAscent")}} {{readonlyInline}}
  - : **double** 类型，从{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到线框中 _em_ 方块顶部的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.emHeightDescent")}} {{readonlyInline}}
  - : **double** 类型，从{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到线框中 _em_ 方块底部的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.hangingBaseline")}} {{readonlyInline}}
  - : **double** 类型，从{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到线框的 hanging 基线的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.alphabeticBaseline")}} {{readonlyInline}}
  - : **double** 类型，从{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到线框的 alphabetic 基线的距离，使用 CSS 像素计算。
- {{domxref("TextMetrics.ideographicBaseline")}} {{readonlyInline}}
  - : **double** 类型，从{{domxref("CanvasRenderingContext2D.textBaseline")}} 属性标明的水平线到线框的 ideographic 基线的距离，使用 CSS 像素计算。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 创建方法在 {{domxref("CanvasRenderingContext2D")}} 中。
- The {{HTMLElement("canvas")}} element and its associated interface, {{domxref("HTMLCanvasElement")}}
