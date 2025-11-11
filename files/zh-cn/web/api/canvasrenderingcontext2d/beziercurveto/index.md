---
title: CanvasRenderingContext2D：bezierCurveTo() 方法
slug: Web/API/CanvasRenderingContext2D/bezierCurveTo
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.bezierCurveTo()`** 方法用于将三次[贝赛尔曲线](/zh-CN/docs/Glossary/Bezier_curve)添加到当前子路径中。该方法需要三个点：前两个点是控制点，第三个点是结束点。起始点是当前路径的最后一个点，绘制贝赛尔曲线前，可以通过调用 {{domxref("CanvasRenderingContext2D.moveTo", "moveTo()")}} 进行修改。

## 语法

```js-nolint
bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
```

### 参数

- `cp1x`
  - : 第一个控制点的 x 轴坐标。
- `cp1y`
  - : 第一个控制点的 y 轴坐标。
- `cp2x`
  - : 第二个控制点的 x 轴坐标。
- `cp2y`
  - : 第二个控制点的 y 轴坐标。
- `x`
  - : 结束点的 x 轴坐标。
- `y`
  - : 结束点的 y 轴坐标。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 如何使用 bezierCurveTo 方法

此示例展示了如何绘制三次贝塞尔曲线。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
// 定义画布和上下文
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 定义点的坐标 {x, y}
let start = { x: 50, y: 20 };
let cp1 = { x: 230, y: 30 };
let cp2 = { x: 150, y: 80 };
let end = { x: 250, y: 100 };

// 三次贝塞尔曲线
ctx.beginPath();
ctx.moveTo(start.x, start.y);
ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
ctx.stroke();

// 起点和终点
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(start.x, start.y, 5, 0, 2 * Math.PI); // 起点
ctx.arc(end.x, end.y, 5, 0, 2 * Math.PI); // 终点
ctx.fill();

// 控制点
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI); // 控制点一
ctx.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI); // 控制点二
ctx.fill();
```

#### 结果

在这个例子中，控制点是红色的，起点和终点是蓝色的。

{{ EmbedLiveSample('如何使用_bezierCurveTo_方法', 315, 165) }}

### 简单的贝塞尔曲线

此示例使用 `bezierCurveTo()` 绘制了一条简单的贝塞尔曲线。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

曲线从指定的起点开始，使用 `moveTo()` 方法：(30, 30)。第一个控制点位于 (120, 160)，第二个控制点位于 (180, 10)。曲线在 (220, 140) 结束。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(30, 30);
ctx.bezierCurveTo(120, 160, 180, 10, 220, 140);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('简单的贝塞尔曲线', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- [贝赛尔曲线](/zh-CN/docs/Glossary/Bezier_curve)
