---
title: CanvasPattern.setTransform()
slug: Web/API/CanvasPattern/setTransform
---

{{APIRef("Canvas API")}} {{SeeCompatTable}}

**`CanvasPattern.setTransform()`** 方法使用 {{domxref("DOMMatrix")}} 对象作为图案的变换矩阵，并在此图案上调用它。

## 语法

```js-nolint
setTransform(matrix)
```

### 参数

- `matrix`
  - : {{domxref("DOMMatrix")}}，被用作图案的变换矩阵。

## 示例

### 使用 `setTransform` 方法

这是一段简单的代码片段，使用 `setTransform` 方法创建一个来自 {{domxref("DOMMatrix")}} 具有指定图案变化的{{domxref("CanvasPattern")}}。如例子所示，如果你把图案赋值给当前的 {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}，当你使用 {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} 方法时，图案会被应用到 canvas 上绘制出效果。

#### HTML

```html
<canvas id="canvas"></canvas> <svg id="svg1"></svg>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var svg1 = document.getElementById("svg1");
var matrix = svg1.createSVGMatrix();

var img = new Image();
img.src = "canvas_createpattern.png";

img.onload = function () {
  var pattern = ctx.createPattern(img, "repeat");
  pattern.setTransform(matrix.rotate(-45).scale(1.5));
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 400, 400);
};
```

修改下面的代码并在线查看 canvas 的变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<svg id="svg1" style="display:none"></svg>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code" style="height:120px">
var img = new Image();
img.src = 'canvas_createpattern.png';
img.onload = function() {
  var pattern = ctx.createPattern(img, 'repeat');
  pattern.setTransform(matrix.rotate(-45).scale(1.5));
  ctx.fillStyle = pattern;
  ctx.fillRect(0,0,400,400);
};</textarea
>
```

```js hidden
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;

var svg1 = document.getElementById("svg1");
var matrix = svg1.createSVGMatrix();

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

{{ EmbedLiveSample('使用 setTransform 方法', 700, 380) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义，{{domxref("CanvasPattern")}}
- {{domxref("DOMMatrix")}}
