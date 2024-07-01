---
title: CanvasRenderingContext2D.arcTo()
slug: Web/API/CanvasRenderingContext2D/arcTo
---

{{APIRef}}

**`CanvasRenderingContext2D.arcTo()`** 是 Canvas 2D API 根据控制点和半径绘制圆弧路径，使用当前的描点 (前一个 moveTo 或 lineTo 等函数的止点)。根据当前描点与给定的控制点 1 连接的直线，和控制点 1 与控制点 2 连接的直线，作为使用指定半径的圆的**切线**，画出两条切线之间的弧线路径。

## 语法

```
void ctx.arcTo(x1, y1, x2, y2, radius);
```

### Parameters

- `x1`
  - : 第一个控制点的 x 轴坐标。
- `y1`
  - : 第一个控制点的 y 轴坐标。
- `x2`
  - : 第二个控制点的 x 轴坐标。
- `y2`
  - : 第二个控制点的 y 轴坐标。
- `radius`
  - : 圆弧的半径。

## 示例

### 使用 `arcTo` 方法

这是一段绘制圆弧的简单的代码片段。基础点是蓝色的，两个控制点是红色的。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.setLineDash([]);
ctx.beginPath();
ctx.moveTo(150, 20);
ctx.arcTo(150, 100, 50, 20, 30);
ctx.stroke();

ctx.fillStyle = "blue";
// base point
ctx.fillRect(150, 20, 10, 10);

ctx.fillStyle = "red";
// control point one
ctx.fillRect(150, 100, 10, 10);
// control point two
ctx.fillRect(50, 20, 10, 10);
//
ctx.setLineDash([5, 5]);
ctx.moveTo(150, 20);
ctx.lineTo(150, 100);
ctx.lineTo(50, 20);
ctx.stroke();
ctx.beginPath();
ctx.arc(120, 38, 30, 0, 2 * Math.PI);
ctx.stroke();
```

{{ EmbedLiveSample('使用 arcTo 方法', 315, 165) }}

### 尝试 `arcTo` 参数

修改下面的代码并在线查看 canvas 的变化：

```html hidden
<canvas id="canvas" class="playable-canvas" height="200" width="400"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.setLineDash([])
ctx.beginPath();
ctx.moveTo(150, 20);
ctx.arcTo(150,100,50,20,30);
ctx.stroke();

ctx.fillStyle = 'blue';
// base point
ctx.fillRect(150, 20, 10, 10);

ctx.fillStyle = 'red';
// control point one
ctx.fillRect(150, 100, 10, 10);
// control point two
ctx.fillRect(50, 20, 10, 10);
//
ctx.setLineDash([5,5])
ctx.moveTo(150, 20);
ctx.lineTo(150,100);
ctx.lineTo(50, 20);
ctx.stroke();
ctx.beginPath();
ctx.arc(120,38,30,0,2*Math.PI);
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

{{ EmbedLiveSample('尝试 arcTo 参数', 700, 360) }}

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
