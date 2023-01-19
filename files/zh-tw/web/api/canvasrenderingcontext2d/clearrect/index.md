---
title: CanvasRenderingContext2D.clearRect()
slug: Web/API/CanvasRenderingContext2D/clearRect
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.clearRect()`** 方法可以設定指定矩形（經由坐標 _(x, y)_ 及大小 _(width, height)_）範圍內的所有像素為透明，清除所有先前繪製的內容。

## 語法

```plain
void ctx.clearRect(x, y, width, height);
```

### 參數

- `x`
  - : The x axis of the coordinate for the rectangle starting point.
- `y`
  - : The y axis of the coordinate for the rectangle starting point.
- `width`
  - : The rectangle's width.
- `height`
  - : The rectangle's height.

## Usage notes

A common problem with `clearRect` is that it may appear it does not work when not [using paths properly](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#Drawing_paths). Don't forget to call {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}} before starting to draw the new frame after calling `clearRect`.

## 範例

### Using the `clearRect` method

This is just a simple code snippet which uses the `clearRect` method.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.lineTo(120, 120);
ctx.closePath(); // draws last line of the triangle
ctx.stroke();

ctx.clearRect(10, 10, 100, 100);

// clear the whole canvas
// ctx.clearRect(0, 0, canvas.width, canvas.height);
```

Edit the code below and see your changes update live in the canvas:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code" style="height:140px;">
ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(200,20);
ctx.lineTo(120,120);
ctx.closePath(); // draws last line of the triangle
ctx.stroke();

ctx.clearRect(10, 10, 100, 100);</textarea>
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

reset.addEventListener("click", function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function() {
  textarea.focus();
})

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('Using the clearRect method', 700, 400) }}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- The interface defining it, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
