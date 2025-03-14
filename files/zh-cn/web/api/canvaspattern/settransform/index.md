---
title: CanvasPattern：setTransform() 方法
slug: Web/API/CanvasPattern/setTransform
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`CanvasPattern.setTransform()`** 方法使用 {{domxref("DOMMatrix")}} 对象作为图案的变换矩阵，并在当前图案上调用它。

## 语法

```js-nolint
setTransform(matrix)
```

### 参数

- `matrix`
  - : {{domxref("DOMMatrix")}}，被用作图案的变换矩阵。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 使用 `setTransform` 方法

这是一段简单的代码片段，使用 `setTransform` 方法创建一个来自 {{domxref("DOMMatrix")}} 具有指定图案变化的 {{domxref("CanvasPattern")}}。如例子所示，图案会在其被设置为当前的 {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} 时应用；并在使用 {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} 方法时会被绘制到 canvas 上。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const matrix = new DOMMatrix([1, 0.2, 0.8, 1, 0, 0]);

const img = new Image();
img.src = "canvas_createpattern.png";

img.onload = () => {
  const pattern = ctx.createPattern(img, "repeat");
  pattern.setTransform(matrix.rotate(-45).scale(1.5));
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 400, 400);
};
```

#### 可编辑演示

以下是上述代码片段的可编辑演示。尝试更改 `SetTransform()` 的参数，看看它产生的效果。

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code" style="height:120px">
const img = new Image();
img.src = 'canvas_createpattern.png';
img.onload = () => {
  const pattern = ctx.createPattern(img, 'repeat');
  pattern.setTransform(matrix.rotate(-45).scale(1.5));
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 400, 400);
};
</textarea>
```

```js hidden
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const edit = document.getElementById("edit");
const code = textarea.value;

const matrix = new DOMMatrix([1, 0.2, 0.8, 1, 0, 0]);

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", () => {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", () => {
  textarea.focus();
});

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('可编辑演示', 700, 400) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasPattern")}}
- {{domxref("DOMMatrix")}}
