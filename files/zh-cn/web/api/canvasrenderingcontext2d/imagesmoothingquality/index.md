---
title: CanvasRenderingContext2D.imageSmoothingQuality
slug: Web/API/CanvasRenderingContext2D/imageSmoothingQuality
---

{{APIRef}} {{SeeCompatTable}}

**CanvasRenderingContext2D.imageSmoothingQuality** 是 Canvas 2D API，用于设置图像平滑度的属性。

## 语法

```
ctx.imageSmoothingQuality = value
value = ctx.imageSmoothingQuality
```

### 选项

- `value`
  - : "low","medium","high"

## 示例

### 使用 imageSmoothingQuality 属性

这是一段简单的代码片段，对缩放的图片使用 `imageSmoothingQuality` 属性。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var img = new Image();
img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
img.onload = function() {
 ctx.mozImageSmoothingEnabled = false;
 ctx.imageSmoothingQuality = "Medium";
 ctx.webkitImageSmoothingEnabled = false;
 ctx.msImageSmoothingEnabled = false;
 ctx.imageSmoothingEnabled = false;
 ctx.drawImage(img, 0, 0, 400, 200);
};
```

编辑下面代码，在线查看 Canvas 的变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code" style="height:140px;">
var img = new Image();
img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
img.onload = function() {
 ctx.mozImageSmoothingEnabled = false;
 ctx.webkitImageSmoothingEnabled = false;
 ctx.imageSmoothingQuality = "Medium";
 ctx.msImageSmoothingEnabled = false;
 ctx.imageSmoothingEnabled = false;
 ctx.drawImage(img, 0, 0, 400, 200);
};</textarea>
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

{{ EmbedLiveSample('Playable_code', 700, 400) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义，{{domxref("CanvasRenderingContext2D")}}
- {{cssxref("image-rendering")}}
