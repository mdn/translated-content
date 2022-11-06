---
title: CanvasRenderingContext2D.shadowColor
slug: Web/API/CanvasRenderingContext2D/shadowColor
---

{{APIRef}}

**`CanvasRenderingContext2D.shadowColor`** 是 Canvas 2D API 描述阴影颜色的属性。

## 语法

```
ctx.shadowColor = color;
```

- `color`
  - : 可以转换成 CSS {{cssxref("&lt;color&gt;")}} 值的{{domxref("DOMString")}} 字符串。默认值是 fully-transparent black.

## 示例

### 使用 `shadowColor` 属性

这是一段简单的代码片段，使用 `shadowColor` 属性设置阴影的颜色。注意：shadowColor 属性设置成不透明的，并且 {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}、 {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}} 或者 {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}} 属性不为 0，阴影才会被绘制。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.shadowColor = "black";
ctx.shadowOffsetY = 10;
ctx.shadowOffsetX = 10;

ctx.fillStyle = "green"
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
ctx.shadowOffsetY = 10;
ctx.shadowOffsetX = 10;
ctx.fillStyle = "green"
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

- 接口定义，{{domxref("CanvasRenderingContext2D")}}.
