---
title: CanvasRenderingContext2D.lineDashOffset
slug: Web/API/CanvasRenderingContext2D/lineDashOffset
---

{{APIRef}}

**`CanvasRenderingContext2D.lineDashOffset`** 是 Canvas 2D API 设置虚线偏移量的属性，例如可以实现“[蚂蚁线](http://en.wikipedia.org/wiki/Marching_ants)“的效果。

## 语法

```
ctx.lineDashOffset = value;
```

- `value`
  - : 偏移量是 float 精度的数字。初始值为 `0.0`。

## 示例

### 使用 `lineDashOffset` 属性

这是一段简单的代码片段，使用 `lineDashOffset` 属性绘制虚线。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.setLineDash([4, 16]);
ctx.lineDashOffset = 2;

ctx.beginPath();
ctx.moveTo(0,100);
ctx.lineTo(400, 100);
ctx.stroke();
```

修改下面的代码并在线查看 canvas 变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code" style="height: 120px">
ctx.setLineDash([4, 16]);
ctx.lineDashOffset = 2;

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

{{ EmbedLiveSample('Playable_code', 700, 380) }}

### “蚂蚁线”

”蚂蚁线“效果是一种动画技巧，经常出现在计算机绘图程序的套索工具中。它能帮助用户根据图片背景动态变化的边界来区分选择的边界。

```html hidden
<canvas id="canvas" class="playable-canvas"></canvas>
```

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var offset = 0;

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(10,10, 100, 100);
}

function march() {
  offset++;
  if (offset > 16) {
    offset = 0;
  }
  draw();
  setTimeout(march, 20);
}

march();
```

{{ EmbedLiveSample('Marching_ants', 700, 200) }}

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
- [Applying styles and color](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
