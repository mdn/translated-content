---
title: CanvasRenderingContext2D：ellipse() 方法
slug: Web/API/CanvasRenderingContext2D/ellipse
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.ellipse()`** 方法用于向当前子路径添加椭圆弧。

## 语法

```js-nolint
ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise)
```

### 参数

- `x`
  - : 椭圆圆心的 x 轴（水平）坐标。
- `y`
  - : 椭圆圆心的 y 轴（垂直）坐标。
- `radiusX`
  - : 椭圆长轴的半径。必须为非负数。
- `radiusY`
  - : 椭圆短轴的半径。必须为非负数。
- `rotation`
  - : 椭圆的旋转角度，以弧度表示。
- `startAngle`
  - : 椭圆弧的起始[偏心角](https://www.simply.science/index.php/math/geometry/conic-sections/ellipse/10022-eccentric-angle-and-parametric-equations-of-an-ellipse)，从正 x 轴沿顺时针测量，用弧度表示。
- `endAngle`
  - : 椭圆弧的结束[偏心角](https://www.simply.science/index.php/math/geometry/conic-sections/ellipse/10022-eccentric-angle-and-parametric-equations-of-an-ellipse)，从正 x 轴沿顺时针测量，用弧度表示。
- `counterclockwise` {{optional_inline}}
  - : 一个可选的布尔值，如果为 `true`，则逆时针绘制椭圆弧。默认值为 `false`（顺时针）。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 画完整的椭圆

此示例以 π/4 弧度（45**°**）的角度绘制一个椭圆。为了绘制完整的椭圆，弧的起始角度为 0 弧度（0**°**），结束角度为 2π 弧度（360**°**）。

#### HTML

```html
<canvas id="canvas" width="200" height="200"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 绘制椭圆
ctx.beginPath();
ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();

// 绘制椭圆的对称轴
ctx.beginPath();
ctx.setLineDash([5, 5]);
ctx.moveTo(0, 200);
ctx.lineTo(200, 0);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('画完整的椭圆', 700, 250) }}

### 不同的椭圆弧

此示例创建了三条具有不同属性的椭圆路径。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.beginPath();
ctx.ellipse(60, 75, 50, 30, Math.PI * 0.25, 0, Math.PI * 1.5);
ctx.fill();

ctx.fillStyle = "blue";
ctx.beginPath();
ctx.ellipse(150, 75, 50, 30, Math.PI * 0.25, 0, Math.PI);
ctx.fill();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.ellipse(240, 75, 50, 30, Math.PI * 0.25, 0, Math.PI, true);
ctx.fill();
```

#### 结果

{{ EmbedLiveSample('不同的椭圆弧', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义该方法的接口：{{domxref("CanvasRenderingContext2D")}}
- 使用 {{domxref("CanvasRenderingContext2D.arc()")}} 方法来绘制圆弧
