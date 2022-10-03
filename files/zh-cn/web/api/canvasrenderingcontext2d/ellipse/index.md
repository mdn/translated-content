---
title: CanvasRenderingContext2D.ellipse()
slug: Web/API/CanvasRenderingContext2D/ellipse
---

{{APIRef}} {{SeeCompatTable}}

**`CanvasRenderingContext2D.ellipse()`** 是 Canvas 2D API 添加椭圆路径的方法。椭圆的圆心在（x,y）位置，半径分别是*radiusX* 和 _radiusY_，按照*anticlockwise*（默认顺时针）指定的方向，从 _startAngle_ 开始绘制，到 _endAngle_ 结束。

## 语法

```
void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
```

### 参数

- `x`
  - : 椭圆圆心的 x 轴坐标。
- `y`
  - : 椭圆圆心的 y 轴坐标。
- `radius`X
  - : 椭圆长轴的半径。
- `radius`Y
  - : 椭圆短轴的半径。
- `rotation`
  - : 椭圆的旋转角度，以弧度表示 (**非角度度数**)。
- `startAngle`
  - : 将要绘制的起始点角度，从 x 轴测量，以弧度表示 (**非角度度数**)。
- `endAngle`
  - : 椭圆将要绘制的结束点角度，以弧度表示 (**非角度度数**)。
- `anticlockwise` {{optional_inline}}
  - : {{jsxref("Boolean")}} 选项，如果为 `true`，逆时针方向绘制椭圆（逆时针），反之顺时针方向绘制。

## 示例

### 使用 `ellipse` 方法

这是一段绘制椭圆的简单的代码片段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.setLineDash([]);
ctx.beginPath();
ctx.ellipse(100, 100, 50, 75, 45 * Math.PI/180, 0, 2 * Math.PI); //倾斜 45°角
ctx.stroke();
ctx.setLineDash([5]);
ctx.moveTo(0,200);
ctx.lineTo(200,0);
ctx.stroke();
```

修改下面的代码并在线查看 canvas 的变化（如果椭圆没有绘制，请在兼容性列表中检查你的浏览器是否支持）：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.setLineDash([]);
ctx.beginPath();
ctx.ellipse(100, 100, 50, 75, 45 * Math.PI/180, 0, 2 * Math.PI); //倾斜 45°角
ctx.stroke();
ctx.setLineDash([5]);
ctx.moveTo(0,200);
ctx.lineTo(200,0);
ctx.stroke();</textarea>
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

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
