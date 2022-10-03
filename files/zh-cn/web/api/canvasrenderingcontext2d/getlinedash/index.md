---
title: CanvasRenderingContext2D.getLineDash()
slug: Web/API/CanvasRenderingContext2D/getLineDash
---

{{APIRef}}

**`CanvasRenderingContext2D.getLineDash()`** 是 Canvas 2D API 获取当前线段样式的方法。

## 语法

```
ctx.getLineDash();
```

### 返回值

一个 {{jsxref("Array")}}数组。一组描述交替绘制线段和间距（坐标空间单位）长度的数字。如果数组元素的数量是奇数，数组元素会被复制并重复。例如，设置线段为 `[5, 15, 25]` 将会得到以下返回值 `[5, 15, 25, 5, 15, 25]`。

## 示例

### 使用 `getLineDash` 方法

这是一段使用 `getLineDash` 方法的简单的代码片段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.setLineDash([5, 15]);
console.log(ctx.getLineDash()); // [5, 15]

ctx.beginPath();
ctx.moveTo(0,100);
ctx.lineTo(400, 100);
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
ctx.setLineDash([5, 15]);
ctx.beginPath();
ctx.moveTo(0,100);
ctx.lineTo(400, 100);
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
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
