---
title: CanvasRenderingContext2D：textRendering 属性
slug: Web/API/CanvasRenderingContext2D/textRendering
l10n:
  sourceCommit: e7eb0e7c8c9e23554bb4f85ce6f86dc4991c419b
---

{{APIRef}}

[Canvas API](/zh-CN/docs/Web/API/Canvas_API) 的 **`CanvasRenderingContext2D.textRendering`** 属性用于在渲染文本时向渲染引擎提供应该如何优化的相关信息。

这些值对应于 SVG 的 [`text-rendering`](/zh-CN/docs/Web/SVG/Attribute/text-rendering) 属性（和 CSS 的 [`text-rendering`](/zh-CN/docs/Web/CSS/text-rendering) 属性）。

## 值

这是对浏览器引擎的文本渲染提示。可选值有：

- `auto`
  - : 浏览器在绘制文本时根据情况对速度、易读性和几何精确性进行优化。
- `optimizeSpeed`
  - : 浏览器在绘制文本时优先考虑渲染速度，而不是易读性和几何精确性。它禁用字距调整和连字。
- `optimizeLegibility`
  - : 浏览器在绘制文本时优先考虑易读性，而不是渲染速度和几何精确性。这启用了字距调整和可选连字。
- `geometricPrecision`
  - : 浏览器在绘制文本时优先考虑几何精确性，而不是渲染速度和易读性。字体的某些方面（例如字距调整）不会线性缩放。对于大的缩放比例，你可能会看到不太美观的文本渲染，但大小是你所期望的（不会被向上或向下舍入到底层操作系统支持的最接近的字体大小）。

该属性可用于获取或设置值。

## 示例

在这个例子中，我们使用 `textRendering` 属性的每个支持值显示文本“Hello World”。每种情况下也会显示该属性的值。

### HTML

```html
<canvas id="canvas" width="700" height="220"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "20px serif";

// 默认值（auto）
ctx.fillText(`Hello world（默认：${ctx.textRendering}）`, 5, 20);

// 文本渲染：optimizeSpeed
ctx.textRendering = "optimizeSpeed";
ctx.fillText(`Hello world（${ctx.textRendering}）`, 5, 50);

// 文本渲染：optimizeLegibility
ctx.textRendering = "optimizeLegibility";
ctx.fillText(`Hello world（${ctx.textRendering}）`, 5, 80);

// 文本渲染：geometricPrecision
ctx.textRendering = "geometricPrecision";
ctx.fillText(`Hello world（${ctx.textRendering}）`, 5, 110);
```

### 结果

{{ EmbedLiveSample('示例', 700, 230) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
