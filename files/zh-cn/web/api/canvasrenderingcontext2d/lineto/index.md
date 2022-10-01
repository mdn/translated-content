---
title: CanvasRenderingContext2D.lineTo()
slug: Web/API/CanvasRenderingContext2D/lineTo
---

{{APIRef}}

**`CanvasRenderingContext2D.lineTo()`** 是 Canvas 2D API 使用直线连接子路径的终点到 x，y 坐标的方法（并不会真正地绘制）。

## 语法

```
void ctx.lineTo(x, y);
```

### 参数

- `x`
  - : 直线终点的 x 轴坐标。
- `y`
  - : 直线终点的 y 轴坐标。

## 示例

### 使用 `lineTo` 方法

这是一段使用 `lineTo` 方法的简单的代码片段。使用 {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}} 绘制路径的起始点，使用 {{domxref("CanvasRenderingContext.moveTo", "moveTo()")}}移动画笔，使用 {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} 方法真正地画线。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(100, 100);
ctx.stroke();
```

修改下面的代码并在线查看 canvas 的变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(100, 100);
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
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
