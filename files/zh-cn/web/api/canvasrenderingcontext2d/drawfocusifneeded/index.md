---
title: CanvasRenderingContext2D：drawFocusIfNeeded() 方法
slug: Web/API/CanvasRenderingContext2D/drawFocusIfNeeded
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.drawFocusIfNeeded()`** 方法用于当指定的元素处于焦点状态时在当前或指定路径周围绘制焦点环。

## 语法

```js-nolint
drawFocusIfNeeded(element)
drawFocusIfNeeded(path, element)
```

### 参数

- `element`
  - : 要检查是否处于焦点状态的元素。
- `path`
  - : {{domxref("Path2D")}} 路径。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 管理按钮焦点

这个例子在画布上绘制了两个按钮。使用 `drawFocusIfNeeded()` 方法在适当的时候绘制焦点环。

#### HTML

```html
<canvas id="canvas">
  <button id="button1">继续</button>
  <button id="button2">退出</button>
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
  // 计算点击坐标
  const x = e.clientX - canvas.offsetLeft;
  const y = e.clientY - canvas.offsetTop;

  // 如果合适，聚焦 button1
  drawButton(button1, 20, 20);
  if (ctx.isPointInPath(x, y)) {
    button1.focus();
  }

  // 如果合适，聚焦 button2
  drawButton(button2, 20, 80);
  if (ctx.isPointInPath(x, y)) {
    button2.focus();
  }
}

function drawButton(el, x, y) {
  const active = document.activeElement === el;
  const width = 150;
  const height = 40;

  // 按钮背景
  ctx.fillStyle = active ? "pink" : "lightgray";
  ctx.fillRect(x, y, width, height);

  // 按钮文本
  ctx.font = "15px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = active ? "blue" : "black";
  ctx.fillText(el.textContent, x + width / 2, y + height / 2);

  // 定义可点击区域
  ctx.beginPath();
  ctx.rect(x, y, width, height);

  // 如果合适，绘制焦点环
  ctx.drawFocusIfNeeded(el);
}
```

#### 结果

{{EmbedLiveSample('管理按钮焦点', 700, 180)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
