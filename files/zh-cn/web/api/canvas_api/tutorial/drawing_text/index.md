---
title: 绘制文本
slug: Web/API/Canvas_API/Tutorial/Drawing_text
l10n:
  sourceCommit: b2fb522de3a3aaf238d9b5af8dcf627d201551f7
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}

在前一个章节中看过如何[应用样式和颜色](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)之后，我们现在来看一下如何在画布（canvas）中绘制文本。

## 绘制文本

画布渲染上下文提供了两种渲染文本的方法：

- {{domxref("CanvasRenderingContext2D.fillText", "fillText(text, x, y [, maxWidth])")}}
  - : 在指定的 (x,y) 位置填充指定的文本。绘制的最大宽度是可选的。
- {{domxref("CanvasRenderingContext2D.strokeText", "strokeText(text, x, y [, maxWidth])")}}
  - : 在指定的 (x,y) 位置绘制文本边框。绘制的最大宽度是可选的。

### `fillText` 示例

文本用当前的填充样式（`fillStyle`）被填充：

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.fillText("你好世界", 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("fillText 示例", 310, 110)}}

### `strokeText` 示例

文本用当前的边框样式（`strokeStyle`）被填充：

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.strokeText("你好世界", 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("strokeText 示例", 310, 110)}}

## 为文本添加样式

在上面的示例用我们已经使用了 `font` 属性来使文本比默认尺寸大一些。还有更多的属性可以让你改变画布显示文本的方式：

- {{domxref("CanvasRenderingContext2D.font", "font = value")}}
  - : 当前我们用来绘制文本的文本样式。这个字符串使用和 [CSS](/zh-CN/docs/Web/CSS) {{cssxref("font")}} 属性相同的语法。默认的字体是 `10px sans-serif`。
- {{domxref("CanvasRenderingContext2D.textAlign", "textAlign = value")}}
  - : 文本对齐选项。可选的值包括：`start`、`end`、`left`、`right` 或 `center`。默认值是 `start`。
- {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline = value")}}
  - : 基线对齐选项。可选的值包括：`top`、`hanging`、`middle`、`alphabetic`、`ideographic`、`bottom`。默认值是 `alphabetic`。
- {{domxref("CanvasRenderingContext2D.direction", "direction = value")}}
  - : 文本方向。可能的值包括：`ltr`、`rtl`、`inherit`。默认值是 `inherit`。

如果你之前使用过 CSS，那么你会很熟悉这些属性。

下面来自 [HTML 规范](https://html.spec.whatwg.org/multipage/canvas.html#text-styles)的图展示了 `textBaseline` 属性支持的不同的基线情况。

![em-over 基线大致位于字体中字形的顶部，hanging 基线是一些字型（例如 आ）的锚定点，middle 基线位于 em-over 和 em-under 基线的中间，alphabetic 基线是 Á、ÿ、f 和 Ω 等字符的锚定点，ideographic-under 基线是“私”和“達”等字型的锚定点，em-under 基线大致位于字体中字形的底部。由于字型延伸到 em-over 和 em-under 基线之外很远的位置，边界框的顶部和底部可能远离这些基线。](baselines.png)

### `textBaseline` 示例

此示例演示了不同的 `textBaseline` 属性值。请参见 [`CanvasRenderingContext2D.textBaseline`](/zh-CN/docs/Web/API/CanvasRenderingContext2D/textBaseline) 页面以了解更多信息和详细示例。

```html hidden live-sample___textBaseline
<canvas id="canvas" width="400" height="100"></canvas>
```

```js live-sample___textBaseline
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";

  ctx.textBaseline = "hanging";
  ctx.strokeText("hanging", 10, 50);

  ctx.textBaseline = "middle";
  ctx.strokeText("middle", 250, 50);

  ctx.beginPath();
  ctx.moveTo(10, 50);
  ctx.lineTo(300, 50);
  ctx.stroke();
}
```

```js hidden live-sample___textBaseline
draw();
```

{{EmbedLiveSample('textBaseline', 310, 110)}}

## 预测量文本宽度

当你需要获得更多的文本细节时，下面的方法可以给你测量文本的方法。

- {{domxref("CanvasRenderingContext2D.measureText", "measureText()")}}
  - : 返回一个包含以当前文本样式绘制指定文本时，其所具有的宽度（以像素为单位）的 {{domxref("TextMetrics")}} 对象。

下面的代码片段将展示如何测量文本来获得它的宽度：

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  const text = ctx.measureText("foo"); // TextMetrics 对象
  text.width; // 16;
}
```

## 无障碍考虑

`<canvas>` 元素只是位图，并不提供任何绘制对象的信息。在画布上书写的文本可能回因用户依赖屏幕放大而导致可读性问题。画布元素内的像素不会缩放，放大后可能会变得模糊。这是因为它们不是矢量图，而是字母形状的像素集合。当放大时，像素变大了。

画布内容不会像语义化的 HTML 那样暴露给无障碍工具。通常，你应该避免在无障碍网站或应用中使用画布。一个替代方案是使用 HTML 元素或 SVG，而不是画布。

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
