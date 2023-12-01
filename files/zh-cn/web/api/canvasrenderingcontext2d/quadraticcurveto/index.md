---
title: CanvasRenderingContext2D.quadraticCurveTo()
slug: Web/API/CanvasRenderingContext2D/quadraticCurveTo
---

{{APIRef}}

**`CanvasRenderingContext2D.quadraticCurveTo()`** 是 Canvas 2D API 新增二次贝塞尔曲线路径的方法。它需要 2 个点。第一个点是控制点，第二个点是终点。起始点是当前路径最新的点，当创建二次贝赛尔曲线之前，可以使用 `moveTo()` 方法进行改变。

## 语法

```
void ctx.quadraticCurveTo(cpx, cpy, x, y);
```

### 参数

- `cpx`
  - : 控制点的 x 轴坐标。
- `cpy`
  - : 控制点的 y 轴坐标。
- `x`
  - : 终点的 x 轴坐标。
- `y`
  - : 终点的 y 轴坐标。

## 示例

### `quadraticCurveTo` 如何工作

这是一段绘制二次贝赛尔曲线的简单的代码片段。控制点是红色，起点和终点是蓝色。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Quadratic Bézier curve
ctx.beginPath();
ctx.moveTo(50, 20);
ctx.quadraticCurveTo(230, 30, 50, 100);
ctx.stroke();

// Start and end points
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(50, 20, 5, 0, 2 * Math.PI); // Start point
ctx.arc(50, 100, 5, 0, 2 * Math.PI); // End point
ctx.fill();

// Control point
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(230, 30, 5, 0, 2 * Math.PI);
ctx.fill();
```

#### 结果

{{ EmbedLiveSample('quadraticCurveTo 如何工作', 315, 165) }}

### 简单的二次曲线

此示例使用`quadraticCurveTo()`绘制了简单的二次 Bézier 曲线。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

曲线从`moveTo()`指定的点开始：(20, 110)。控制点位于 (230, 150)。曲线在 (250, 20) 处结束。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 110);
ctx.quadraticCurveTo(230, 150, 250, 20);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('简单的二次曲线', 700, 360) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

- 接口定义，{{domxref("CanvasRenderingContext2D")}}
- [WikiPedia article on Bézier curves](http://en.wikipedia.org/wiki/B%C3%A9zier_curve).
