---
title: CanvasRenderingContext2D：lineTo() 方法
slug: Web/API/CanvasRenderingContext2D/lineTo
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 {{domxref("CanvasRenderingContext2D")}} 接口的 **`lineTo()`** 方法将当前子路径的最后一个点与指定的 `(x, y)` 坐标用直线段相连，从而将一个直线段添加到当前子路径中。

和其他修改当前路径的方法一样，这个方法并不直接渲染任何内容。要将路径绘制到画布上，你可以使用 {{domxref("CanvasRenderingContext2D.fill", "fill()")}} 或 {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} 方法。

## 语法

```js-nolint
lineTo(x, y)
```

### 参数

- `x`
  - : 直线终点的 x 轴坐标。
- `y`
  - : 直线终点的 y 轴坐标。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 画一条直线

此示例使用 `lineTo` 方法绘制了一条直线段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

线从 (30, 50) 处开始，并在 (150, 100) 处结束。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath(); // 开始一个新路径
ctx.moveTo(30, 50); // 将笔移动到 (30, 50) 处
ctx.lineTo(150, 100); // 画一条线到 (150, 100) 处
ctx.stroke(); // 渲染路径
```

#### 结果

{{ EmbedLiveSample('画一条直线', 700, 180) }}

### 绘制相连的线条

每次调用 `lineTo()`（以及类似的方法）都会自动添加到当前子路径中，这意味着所有的线条都会一起被描边或填充。这个例子用一条连续的线条绘制了一个字母“M”。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.moveTo(90, 130);
ctx.lineTo(95, 25);
ctx.lineTo(150, 80);
ctx.lineTo(205, 25);
ctx.lineTo(210, 130);
ctx.lineWidth = 15;
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('绘制相连的线条', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
