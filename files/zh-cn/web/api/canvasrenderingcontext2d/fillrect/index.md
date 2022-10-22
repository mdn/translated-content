---
title: CanvasRenderingContext2D.fillRect()
slug: Web/API/CanvasRenderingContext2D/fillRect
---

{{APIRef}}

**`CanvasRenderingContext2D.fillRect()`** 是 Canvas 2D API 绘制填充矩形的方法。当前渲染上下文中的`fillStyle` 属性决定了对这个矩形对的填充样式。

这个方法是直接在画布上绘制填充，并不修改当前路径，所以在这个方法后面调用 {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} 或者{{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}方法并不会对这个方法有什么影响。

## 语法

```
void ctx.fillRect(x, y, width, height);
```

`fillRect()`方法绘制一个填充了内容的矩形，这个矩形的开始点（左上点）在`(x, y)` ，它的宽度和高度分别由`width` 和 `height` 确定，填充样式由当前的`fillStyle` 决定。

### 参数

- `x`
  - : 矩形起始点的 x 轴坐标。
- `y`
  - : 矩形起始点的 y 轴坐标。
- `width`
  - : 矩形的宽度。
- `height`
  - : 矩形的高度。

## 示例

### 一个填充矩形的例子

这个例子使用`fillRect()`方法绘制了一个用绿色填充的矩形。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

下面绘制的矩形左上顶点在 (20, 10)，宽高分别是 150 和 100 像素。

```
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(20, 10, 150, 100);
```

#### 结果

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);</textarea>
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

{{ EmbedLiveSample('A_simple_filled_rectangle', 700, 180) }}

### 填充整个画布

下面这个代码片段使用本方法填充了整个画布。这样做通常的目的是在开始绘制其他内容前设置一个背景。为了达到这样的效果，需要让填充的范围和画布的范围相同，需要访问{{HtmlElement("canvas")}}元素的`width` 和 `height` 属性。

```
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义，{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillStyle")}}
- {{domxref("CanvasRenderingContext2D.clearRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
