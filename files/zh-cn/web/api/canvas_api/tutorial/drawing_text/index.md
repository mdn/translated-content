---
title: 绘制文本
slug: Web/API/Canvas_API/Tutorial/Drawing_text
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}

在前一个章节中看过 [应用样式和颜色](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) 之后，我们现在来看一下如何在 canvas 中绘制文本

## 绘制文本

canvas 提供了两种方法来渲染文本：

- {{domxref("CanvasRenderingContext2D.fillText", "fillText(text, x, y [, maxWidth])")}}
  - : 在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的。
- {{domxref("CanvasRenderingContext2D.strokeText", "strokeText(text, x, y [, maxWidth])")}}
  - : 在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的。

### 一个填充文本的示例

文本用当前的填充方式被填充：

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.fillText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("一个填充文本的示例", 310, 110)}}

### 一个文本边框的示例

文本用当前的边框样式被绘制：

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.strokeText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("一个文本边框的示例", 310, 110)}}

## 有样式的文本

在上面的例子用我们已经使用了 `font` 来使文本比默认尺寸大一些。还有更多的属性可以让你改变 canvas 显示文本的方式：

- {{domxref("CanvasRenderingContext2D.font", "font = value")}}
  - : 当前我们用来绘制文本的样式。这个字符串使用和 [CSS](/zh-CN/docs/Web/CSS) {{cssxref("font")}} 属性相同的语法。默认的字体是 `10px sans-serif`。
- {{domxref("CanvasRenderingContext2D.textAlign", "textAlign = value")}}
  - : 文本对齐选项。可选的值包括：`start`, `end`, `left`, `right` or `center`. 默认值是 `start`。
- {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline = value")}}
  - : 基线对齐选项。可选的值包括：`top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`。默认值是 `alphabetic`。
- {{domxref("CanvasRenderingContext2D.direction", "direction = value")}}
  - : 文本方向。可能的值包括：`ltr`, `rtl`, `inherit`。默认值是 `inherit`。

如果你之前使用过 CSS，那么这些选项你会很熟悉。

下面的图片（from the [WHATWG](http://www.whatwg.org/)）展示了 textBaseline 属性支持的不同的基线情况：

![The top of the em square is
roughly at the top of the glyphs in a font, the hanging baseline is
where some glyphs like आ are anchored, the middle is half-way
between the top of the em square and the bottom of the em square,
the alphabetic baseline is where characters like Á, ÿ,
f, and Ω are anchored, the ideographic baseline is
where glyphs like 私 and 達 are anchored, and the bottom
of the em square is roughly at the bottom of the glyphs in a
font. The top and bottom of the bounding box can be far from these
baselines, due to glyphs extending far outside the em square.](http://www.whatwg.org/specs/web-apps/current-work/images/baselines.png)

### textBaseline 例子

编辑下面的代码，看看它们在 canvas 中的变化：

```js
ctx.font = "48px serif";
ctx.textBaseline = "hanging";
ctx.strokeText("Hello world", 0, 100);
```

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.font = "48px serif";
ctx.textBaseline = "hanging";
ctx.strokeText("Hello world", 0, 100);</textarea
>
```

```js hidden
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function () {
  textarea.focus();
});

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('textBaseline 例子', 700, 360) }}

## 预测量文本宽度

当你需要获得更多的文本细节时，下面的方法可以给你测量文本的方法。

- {{domxref("CanvasRenderingContext2D.measureText", "measureText()")}}
  - : 将返回一个 {{domxref("TextMetrics")}}对象的宽度、所在像素，这些体现文本特性的属性。

下面的代码段将展示如何测量文本来获得它的宽度：

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}
```

## Geoko 特性说明

在 Geoko（Firefox，Firefox OS 及基于 Mozilla 的应用的渲染引擎）中，曾有一些版本较早的 [API](/zh-CN/docs/Web/API/CanvasRenderingContext2D#Prefixed_APIs) 实现了在 canvas 上对文本作画的功能，但它们现在已不再使用。

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
