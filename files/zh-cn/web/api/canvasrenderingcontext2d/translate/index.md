---
title: CanvasRenderingContext2D.translate()
slug: Web/API/CanvasRenderingContext2D/translate
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.translate()`** 方法对当前网格添加平移变换的方法。

## 语法

```
void ctx.translate(x, y);
```

`translate()` 方法，将 canvas 按原始 x 点的水平方向、原始的 y 点垂直方向进行**平移变换**

![](canvas_grid_translate.png)

### 参数

- `x`
  - : 水平方向的移动距离。
- y
  - : 垂直方向的移动距离。

## 示例

### 使用 `translate` 方法

这是一段使用 `translate` 方法的简单的代码片段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.translate(50, 50);
ctx.fillRect(0,0,100,100);

// reset current transformation matrix to the identity matrix
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

修改下面的代码并在线查看 canvas 的变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.translate(50, 50);
ctx.fillRect(0,0,100,100);
ctx.setTransform(1, 0, 0, 1, 0, 0);</textarea>
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
