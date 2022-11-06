---
title: CanvasRenderingContext2D.resetTransform()
slug: Web/API/CanvasRenderingContext2D/resetTransform
---

{{APIRef}} {{SeeCompatTable}}

**`CanvasRenderingContext2D.resetTransform()`** 是 Canvas 2D API 使用单位矩阵重新设置当前变形的方法。

## 语法

```
void ctx.resetTransform();
```

## 示例

### 使用 `resetTransform` 方法

这是一段使用 `resetTransform` 方法的简单的代码片段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.rotate(45 * Math.PI / 180);
ctx.fillRect(70,0,100,30);

// reset current transformation matrix to the identity matrix
ctx.resetTransform();
```

修改下面的代码并在线查看 canvas 的变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.rotate(45 * Math.PI / 180);
ctx.fillRect(70,0,100,30);
ctx.resetTransform();</textarea>
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

## 综合设置

你可以使用 {{domxref("CanvasRenderingContext2D.setTransform()")}} 方法重新设置当前变形为单位矩阵，如下：

```js
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
