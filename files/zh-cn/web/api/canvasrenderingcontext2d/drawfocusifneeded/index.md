---
title: CanvasRenderingContext2D.drawFocusIfNeeded()
slug: Web/API/CanvasRenderingContext2D/drawFocusIfNeeded
---

{{APIRef}}

**`CanvasRenderingContext2D.drawFocusIfNeeded()`** 是 Canvas 2D API 用来给当前路径或特定路径绘制焦点的方法，如果给定的元素获取了焦点。

## 语法

```
void ctx.drawFocusIfNeeded(element);
void ctx.drawFocusIfNeeded(path, element);
```

### 参数

- element
  - : 是否需要设置焦点的元素。
- `path`
  - : {{domxref("Path2D")}} 路径。

## 示例

### 控制按钮焦点

这是一段使用 `drawFocusIfNeeded` 方法的简单的代码片段。

#### HTML

```html
<canvas id="canvas">
  <button id="button1">Continue</button>
  <button id="button2">Quit</button>
</canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

document.addEventListener("focus", redraw, true);
document.addEventListener("blur", redraw, true);
canvas.addEventListener("click", handleClick, false);
redraw();

function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawButton(button1, 20, 20);
  drawButton(button2, 20, 80);
}

function handleClick(e) {
  // Calculate click coordinates
  const x = e.clientX - canvas.offsetLeft;
  const y = e.clientY - canvas.offsetTop;

  // Focus button1, if appropriate
  drawButton(button1, 20, 20);
  if (ctx.isPointInPath(x, y)) {
    button1.focus();
  }

  // Focus button2, if appropriate
  drawButton(button2, 20, 80);
  if (ctx.isPointInPath(x, y)) {
    button2.focus();
  }
}

function drawButton(el, x, y) {
  const active = document.activeElement === el;
  const width = 150;
  const height = 40;

  // Button background
  ctx.fillStyle = active ? "pink" : "lightgray";
  ctx.fillRect(x, y, width, height);

  // Button text
  ctx.font = "15px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = active ? "blue" : "black";
  ctx.fillText(el.textContent, x + width / 2, y + height / 2);

  // Define clickable area
  ctx.beginPath();
  ctx.rect(x, y, width, height);

  // Draw focus ring, if appropriate
  ctx.drawFocusIfNeeded(el);
}
```

#### 结果

{{EmbedLiveSample('控制按钮焦点', 700, 180)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}.
