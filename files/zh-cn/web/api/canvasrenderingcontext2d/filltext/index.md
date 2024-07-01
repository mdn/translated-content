---
title: CanvasRenderingContext2D：fillText() 方法
short-title: fillText()
slug: Web/API/CanvasRenderingContext2D/fillText
---

{{APIRef("HTML DOM")}}

{{domxref("CanvasRenderingContext2D")}} 对象的方法 **`fillText()`** 是 Canvas 2D API 的一部分，它在指定的坐标上绘制文本字符串，并使用当前的 {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} 对其进行填充。存在一个可选参数，其指定了渲染文本的最大宽度，{{Glossary("user agent","用户代理")}}将通过压缩文本或使用较小的字体大小来实现。

此方法会直接绘制到画布上，而不会修改当前路径，因此任何后续的 {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} 或 {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} 调用都不会对其产生影响。

文本根据 {{domxref("CanvasRenderingContext2D.font", "font")}}、{{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}、{{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}} 和 {{domxref("CanvasRenderingContext2D.direction", "direction")}} 属性所定义的字体和文本布局来渲染。

> **备注：** 如果需要绘制字符串中字符的轮廓，需要调用其上下文的 {{domxref("CanvasRenderingContext2D.strokeText", "strokeText()")}} 方法。

## 语法

```js-nolint
fillText(text, x, y)
fillText(text, x, y, maxWidth)
```

### 参数

- `text`
  - : 要作为渲染上下文的文本字符串。使用当前的 {{domxref("CanvasRenderingContext2D.font","font")}}、{{domxref("CanvasRenderingContext2D.textAlign","textAlign")}}、{{domxref("CanvasRenderingContext2D.textBaseline","textBaseline")}} 和 {{domxref("CanvasRenderingContext2D.direction","direction")}} 设置值对文本进行渲染。
- `x`
  - : 开始绘制文本的点的 X 轴坐标，单位为像素。
- `y`
  - : 开始绘制文本的基线的 Y 轴坐标，单位为像素。
- `maxWidth` {{optional_inline}}
  - : 文本渲染后的最大像素宽度。如果未指定，则文本宽度没有限制。但是，如果提供了该值，用户代理将调整字距，选择水平方向更紧凑的字体（如果有这种字体或可以在不降低质量的情况下生成这种字体），或缩小字体大小，以便在指定宽度内容纳文本。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 绘制填充文本

这段代码使用 `fillText()` 方法绘制了“Hello World”字符串。

#### HTML

首先，我们需要一个画布来绘图。这段代码将创建一个宽 400 像素，宽 150 像素的背景。

```html
<canvas id="canvas" width="400" height="150"></canvas>
```

#### JavaScript

以下是此示例的 JavaScript 代码。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "50px serif";
ctx.fillText("Hello world", 50, 90);
```

这段代码获取 {{HTMLElement("canvas")}} 的引用，然后获取其 2D 图形上下文的引用。

有了这些，我们将 {{domxref("CanvasRenderingContext2D.font", "font")}} 设置为 50 像素高的“衬线体”（用户默认的[衬线](https://zh.wikipedia.org/wiki/衬线体)字体），然后调用 `fillText()` 从坐标 (50, 90) 开始绘制文本“Hello world”。

#### 结果

{{ EmbedLiveSample('绘制填充文本', 700, 180) }}

### 限制文本大小

本示例绘制了“Hello world”字符串并将其宽度限制为 140 像素。

#### HTML

```html
<canvas id="canvas" width="400" height="150"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "50px serif";
ctx.fillText("Hello world", 50, 90, 140);
```

#### 结果

{{ EmbedLiveSample('限制文本大小', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [绘制文本](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
