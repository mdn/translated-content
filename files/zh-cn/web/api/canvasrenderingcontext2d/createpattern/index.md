---
title: CanvasRenderingContext2D.createPattern()
slug: Web/API/CanvasRenderingContext2D/createPattern
---

{{APIRef}}

**`CanvasRenderingContext2D.createPattern()`** 是 Canvas 2D API 使用指定的图像 ({{domxref("CanvasImageSource")}}) 创建模式的方法。它通过 repetition 参数在指定的方向上重复元图像。此方法返回一个{{domxref("CanvasPattern")}}对象。

## 语法

```
CanvasPattern ctx.createPattern(image, repetition);
```

### 参数

- `image`

  - : 作为重复图像源的 {{domxref("CanvasImageSource")}} 对象。可以是下列之一：

    - {{domxref("HTMLImageElement")}} ({{HTMLElement("img")}}),
    - {{domxref("HTMLVideoElement")}} ({{HTMLElement("video")}}),
    - {{domxref("HTMLCanvasElement")}} ({{HTMLElement("canvas")}}),
    - {{domxref("CanvasRenderingContext2D")}},
    - {{domxref("ImageBitmap")}},
    - {{domxref("ImageData")}},
    - {{domxref("Blob")}}.

- `repetition`

  - : {{domxref("DOMString")}}，指定如何重复图像。允许的值有：

    - `"repeat"` (both directions),
    - `"repeat-x"` (horizontal only),
    - `"repeat-y"` (vertical only),
    - `"no-repeat"` (neither).

    如果为空字符串 (`''`) 或 {{jsxref("null")}} (但不是 {{jsxref("undefined")}})，repetition 将被当作"repeat"。

### 返回值

- {{domxref("CanvasPattern")}}
  - : 描述模式的不透明对象

## 示例

### 使用`createPattern`方法

这是一段简单的代码片段，使用 createPattern 方法创建一个指定图像和重复的{{domxref("CanvasPattern")}} 对象。创建完成后，可以使用{{domxref("CanvasPattern.setTransform()")}}方法对图案进行变形。如示例所示，你可以把此模式赋值给当前的{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}，当你使用{{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} 方法时，会在 canvas 上绘制出效果。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var img = new Image();
img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
img.onload = function() {
  var pattern = ctx.createPattern(img, 'repeat');
  ctx.fillStyle = pattern;
  ctx.fillRect(0,0,400,400);
};
```

编辑以下代码并在线查看 canvas 变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code" style="height:120px">
var img = new Image();
img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
img.onload = function() {
  var pattern = ctx.createPattern(img, 'repeat');
  ctx.fillStyle = pattern;
  ctx.fillRect(0,0,400,400);
};</textarea>
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

{{ EmbedLiveSample('Playable_code', 700, 380) }}

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasPattern")}}
