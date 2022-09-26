---
title: CanvasRenderingContext2D.createLinearGradient()
slug: Web/API/CanvasRenderingContext2D/createLinearGradient
---

{{APIRef}}

**`CanvasRenderingContext2D.createLinearGradient()`**方法创建一个沿参数坐标指定的直线的渐变。

![](mdn-canvas-lineargradient.png)

该方法返回一个线性 {{domxref("CanvasGradient")}}对象。想要应用这个渐变，需要把这个返回值赋值给 {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} 或者 {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}。

## 语法

```
CanvasGradient ctx.createLinearGradient(x0, y0, x1, y1);
```

`createLinearGradient()` 方法需要指定四个参数，分别表示渐变线段的开始和结束点。

### 参数

- `x0`
  - : 起点的 x 轴坐标。
- `y0`
  - : 起点的 y 轴坐标。
- `x1`
  - : 终点的 x 轴坐标。
- `y1`
  - : 终点的 y 轴坐标。

### 返回值

- {{domxref("CanvasGradient")}}
  - : 一个根据指定线路初始化的线性 `CanvasGradient` 对象。

## 示例

### 使用线性渐变填充一个矩形

这个例子使用`createLinearGradient()` 方法初始化了一个线性渐变。在这个线性渐变中添加了三种色彩。最后，这个渐变被赋值给上下文对应的属性，实现了对矩形的填充。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Create a linear gradient
// The start gradient point is at x=20, y=0
// The end gradient point is at x=220, y=0
var gradient = ctx.createLinearGradient(20,0, 220,0);

// Add three color stops
gradient.addColorStop(0, 'green');
gradient.addColorStop(.5, 'cyan');
gradient.addColorStop(1, 'green');

// Set the fill style and draw a rectangle
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 100);
```

#### 结果

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="编辑" />
  <input id="reset" type="button" value="重置" />
</div>
<textarea id="code" class="playable-code">
var gradient = ctx.createLinearGradient(0,0,200,0);
gradient.addColorStop(0,"green");
gradient.addColorStop(1,"white");
ctx.fillStyle = gradient;
ctx.fillRect(10,10,200,100);</textarea>
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

{{ EmbedLiveSample('Filling_a_rectangle_with_a_linear_gradient', 700, 180) }}

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### Gecko 特性说明

- 自 Gecko 2.0 {{geckoRelease("2.0")}}开始，参数指定了极值会抛出`NOT_SUPPORTED_ERR` 而不再是之前的 `SYNTAX_ERR`异常。

## <br>参见

- 接口定义： {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
