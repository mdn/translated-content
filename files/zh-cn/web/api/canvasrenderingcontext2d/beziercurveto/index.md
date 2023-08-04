---
title: CanvasRenderingContext2D.bezierCurveTo()
slug: Web/API/CanvasRenderingContext2D/bezierCurveTo
---

{{APIRef}}

**`CanvasRenderingContext2D.bezierCurveTo()`** 是 Canvas 2D API 绘制三次贝赛尔曲线路径的方法。该方法需要三个点。第一、第二个点是控制点，第三个点是结束点。起始点是当前路径的最后一个点，绘制贝赛尔曲线前，可以通过调用 `moveTo()` 进行修改。

## 语法

```
void ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
```

### 参数

- `cp1x`
  - : 第一个控制点的 x 轴坐标。
- `cp1y`
  - : 第一个控制点的 y 轴坐标。
- `cp2x`
  - : 第二个控制点的 x 轴坐标。
- `cp2y`
  - : 第二个控制点的 y 轴坐标。
- `x`
  - : 结束点的 x 轴坐标。
- `y`
  - : 结束点的 y 轴坐标。

## 示例

### 使用 `bezierCurveTo` 方法

这是一段绘制贝赛尔曲线的简单的代码片段。控制点是红色的，开始和结束点是蓝色的。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 20);
ctx.bezierCurveTo(230, 30, 150, 60, 50, 100);
ctx.stroke();

ctx.fillStyle = "blue";
// start point
ctx.fillRect(50, 20, 10, 10);
// end point
ctx.fillRect(50, 100, 10, 10);

ctx.fillStyle = "red";
// control point one
ctx.fillRect(230, 30, 10, 10);
// control point two
ctx.fillRect(150, 70, 10, 10);
```

{{ EmbedLiveSample('使用_bezierCurveTo_方法', 315, 165) }}

### 尝试 `bezierCurveTo` 参数

修改下面的代码并在线查看 canvas 的变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.bezierCurveTo(50, 100, 180, 10, 20, 10);
ctx.stroke();</textarea
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

{{ EmbedLiveSample('尝试_bezierCurveTo_参数', 700, 360) }}

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- [维基百科关于贝赛尔曲线](http://en.wikipedia.org/wiki/B%C3%A9zier_curve)。
