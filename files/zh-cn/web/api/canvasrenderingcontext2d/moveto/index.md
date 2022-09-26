---
title: CanvasRenderingContext2D.moveTo()
slug: Web/API/CanvasRenderingContext2D/moveTo
---

{{APIRef}}

**`CanvasRenderingContext2D.moveTo()`** 是 Canvas 2D API 将一个新的子路径的起始点移动到 (x，y) 坐标的方法。

## 语法

```
void ctx.moveTo(x, y);
```

### 参数

- `x`
  - : 点的 x 轴。
- `y`
  - : 点的 y 轴。

## 示例

### 使用 `moveTo` 方法

这是一段使用 `moveTo` 方法的简单的代码片段，移动画笔到起始点绘制一条线。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(200, 50);
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
ctx.moveTo(50,50);
ctx.lineTo(200, 50);
ctx.stroke()</textarea>
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
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
