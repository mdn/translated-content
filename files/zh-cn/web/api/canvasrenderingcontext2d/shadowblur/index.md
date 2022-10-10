---
title: CanvasRenderingContext2D.shadowBlur
slug: Web/API/CanvasRenderingContext2D/shadowBlur
---

{{APIRef}}

**`CanvasRenderingContext2D.shadowBlur`** 是 Canvas 2D API 描述模糊效果程度的属性；它既不对应像素值也不受当前转换矩阵的影响。默认值是 0。

## 语法

```
ctx.shadowBlur = level;
```

- `level`
  - : 描述模糊效果程度的，float 类型的值。默认值是 0。负数、 {{jsxref("Infinity")}} 或者 {{jsxref("NaN")}} 都会被忽略。

## 示例

### 使用 `shadowBlur` 属性

这是一段简单的代码片段，使用 `shadowblur 属性设置模糊阴影。` 注意：只有设置 shadowColor 属性值为不透明，阴影才会被绘制。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.shadowColor = "black";
ctx.shadowBlur = 10;

ctx.fillStyle = "white";
ctx.fillRect(10, 10, 100, 100);
```

修改下面的代码并在线查看 canvas 的变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.shadowColor = "black";
ctx.shadowBlur = 10;
ctx.fillStyle = "white";
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

{{ EmbedLiveSample('Playable_code', 700, 360) }}

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}.
