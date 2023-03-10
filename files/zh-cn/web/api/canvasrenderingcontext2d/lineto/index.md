---
title: CanvasRenderingContext2D.lineTo()
slug: Web/API/CanvasRenderingContext2D/lineTo
---

{{APIRef}}

**`CanvasRenderingContext2D.lineTo()`** 是 Canvas 2D API 使用直线连接子路径的终点到 x，y 坐标的方法（并不会真正地绘制）。

## 语法

```
void ctx.lineTo(x, y);
```

### 参数

- `x`
  - : 直线终点的 x 轴坐标。
- `y`
  - : 直线终点的 y 轴坐标。

## 示例

### 画一条直线

这是一段使用 `lineTo` 方法的简单的代码片段。使用 {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}} 绘制路径的起始点，使用 {{domxref("CanvasRenderingContext.moveTo", "moveTo()")}}移动画笔，使用 {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} 方法真正地画线。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

线从 (30, 50) 处开始，并在 (150, 100) 处结束。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath(); // Start a new path
ctx.moveTo(30, 50); // Move the pen to (30, 50)
ctx.lineTo(150, 100); // Draw a line to (150, 100)
ctx.stroke(); // Render the path
```

#### 结果

{{ EmbedLiveSample('画一条直线', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
