---
title: CanvasRenderingContext2D.createRadialGradient()
slug: Web/API/CanvasRenderingContext2D/createRadialGradient
---

{{APIRef}}

**`CanvasRenderingContext2D.createRadialGradient()`** 是 Canvas 2D API 根据参数确定两个圆的坐标，绘制放射性渐变的方法。这个方法返回 {{domxref("CanvasGradient")}}。

## 语法

```
CanvasGradient ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
```

### 参数

- `x0`
  - : 开始圆形的 x 轴坐标。
- `y0`
  - : 开始圆形的 y 轴坐标。
- r0
  - : 开始圆形的半径。
- `x1`
  - : 结束圆形的 x 轴坐标。
- `y1`
  - : 结束圆形的 y 轴坐标。
- r1
  - : 结束圆形的半径。

### 返回值

- {{domxref("CanvasGradient")}}
  - : 由两个指定的圆初始化的放射性 `CanvasGradient` 对象。

## 示例

### 使用 `createRadialGradient` 方法

这是一段简单的代码片段，使用 `createRadialGradient` 方法创建一个指定了开始和结束圆的 {{domxref("CanvasGradient")}} 对象。一旦创建，你可以使用 {{domxref("CanvasGradient.addColorStop()")}} 方法根据指定的偏移和颜色定义一个新的终止。你可以将当前的{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}设置成此渐变，当使用{{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} 方法时，会在 canvas 上绘制出效果，如示例所示。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var gradient = ctx.createRadialGradient(100,100,100,100,100,0);
gradient.addColorStop(0,"white");
gradient.addColorStop(1,"green");
ctx.fillStyle = gradient;
ctx.fillRect(0,0,200,200);
```

修改下面的代码并在线查看 canvas 的变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
var gradient = ctx.createRadialGradient(100,100,100,100,100,0);
gradient.addColorStop(0,"white");
gradient.addColorStop(1,"green");
ctx.fillStyle = gradient;
ctx.fillRect(0,0,200,200);</textarea>
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

{{ EmbedLiveSample('Playable_code', 700, 360) }}

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### Gecko-specific 注解

- 从 Gecko 2.0 {{geckoRelease("2.0")}}开始，指定非限制的值会抛出 `NOT_SUPPORTED_ERR`，用来替代 `SYNTAX_ERR`。
- 从 Gecko 5.0 {{geckoRelease("5.0")}}开始，指定一个负的半径会抛出 `INDEX_SIZE_ERR`。

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
