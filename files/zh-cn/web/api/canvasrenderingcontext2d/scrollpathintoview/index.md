---
title: CanvasRenderingContext2D.scrollPathIntoView()
slug: Web/API/CanvasRenderingContext2D/scrollPathIntoView
---

{{APIRef}} {{SeeCompatTable}}

**`CanvasRenderingContext2D.scrollPathIntoView()`** 是 Canvas 2D API 将当前或给定的路径滚动到窗口的方法。类似于 {{domxref("Element.scrollIntoView()")}}。

## 语法

```
void ctx.scrollPathIntoView();
void ctx.scrollPathIntoView(path);
```

### 参数

- `path`
  - : 使用的{{domxref("Path2D")}} 路径。

## 示例

### 使用 scrollPathIntoView 方法

这是一段使用 `scrollPathIntoView` 方法的简单的代码片段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillRect(10, 10, 30, 30);
ctx.scrollPathIntoView();
```

#### 可编辑示例

修改下面的代码并在线查看 canvas 的变化：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas">
  <input id="button" type="range" min="1" max="12" />
</canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.rect(10, 10, 30, 30);
ctx.fill();
if (ctx.scrollPathIntoView) {
  ctx.scrollPathIntoView();
} else {
  ctx.fillText("Your browser does not support 'scrollPathIntoView()'.", 0, 150);
}
</textarea>
```

```js hidden
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const edit = document.getElementById("edit");
const code = textarea.value;

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

{{ EmbedLiveSample('可编辑示例', 700, 400) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}.
- {{domxref("Element.scrollIntoView()")}}
