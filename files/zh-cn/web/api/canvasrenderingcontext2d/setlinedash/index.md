---
title: CanvasRenderingContext2D.setLineDash()
slug: Web/API/CanvasRenderingContext2D/setLineDash
---

{{APIRef}}

Canvas 2D API 的{{domxref("CanvasRenderingContext2D")}}接口的 **`setLineDash()`** 方法在填充线时使用虚线模式。它使用一组值来指定描述模式的线和间隙的交替长度。

> **备注：** 如果要切换回至实线模式，将 dash list 设置为一个空数组即可。

## 语法

```js
setLineDash(segments);
```

### 参数

- `segments`
  - : 一个{{jsxref("Array")}}数组。一组描述交替绘制线段和间距（坐标空间单位）长度的数字。如果数组元素的数量是奇数，数组的元素会被复制并重复。例如， `[5, 15, 25]` 会变成 `[5, 15, 25, 5, 15, 25]`。

### 返回值

{{jsxref("undefined")}}

## 示例

### 基本示例

这是一段简单的代码片段，使用 `setLineDash` 方法绘制一条线段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Dashed line
ctx.beginPath();
ctx.setLineDash([5, 15]);
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();

// Solid line
ctx.beginPath();
ctx.setLineDash([]);
ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.stroke();
```

#### 结果

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.setLineDash([5, 15]);
ctx.beginPath();
ctx.moveTo(0,100);
ctx.lineTo(400, 100);
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

{{ EmbedLiveSample('基本示例', 700, 360) }}

### 一些常见的模式

此示例说明了各种常见的线划线模式。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

下面创建的`drawDashedLine()` 函数使得多个虚线的绘制变得简单。它接收模式数组作为其唯一参数。

```js
function drawDashedLine(pattern) {
  ctx.beginPath();
  ctx.setLineDash(pattern);
  ctx.moveTo(0, y);
  ctx.lineTo(300, y);
  ctx.stroke();
  y += 20;
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let y = 15;

drawDashedLine([]);
drawDashedLine([1, 1]);
drawDashedLine([10, 10]);
drawDashedLine([20, 5]);
drawDashedLine([15, 3, 3, 3]);
drawDashedLine([20, 3, 3, 3, 3, 3, 3, 3]);
drawDashedLine([12, 3, 3]); // Equals [12, 3, 3, 12, 3, 3]
```

#### Result

{{ EmbedLiveSample('一些常见的模式', 700, 180) }}

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义，{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
