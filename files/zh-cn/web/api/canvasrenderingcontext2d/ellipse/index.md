---
title: CanvasRenderingContext2D.ellipse()
slug: Web/API/CanvasRenderingContext2D/ellipse
---

{{APIRef}}

**`CanvasRenderingContext2D.ellipse()`** 是 Canvas 2D API 添加椭圆路径的方法。椭圆的圆心在（x,y）位置，半径分别是*radiusX* 和 _radiusY_，按照*anticlockwise*（默认顺时针）指定的方向，从 _startAngle_ 开始绘制，到 _endAngle_ 结束。

## 语法

```
void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
```

### 参数

- `x`
  - : 椭圆圆心的 x 轴坐标。
- `y`
  - : 椭圆圆心的 y 轴坐标。
- `radius`X
  - : 椭圆长轴的半径。
- `radius`Y
  - : 椭圆短轴的半径。
- `rotation`
  - : 椭圆的旋转角度，以弧度表示 (**非角度度数**)。
- `startAngle`
  - : 将要绘制的起始点角度，从 x 轴测量，以弧度表示 (**非角度度数**)。
- `endAngle`
  - : 椭圆将要绘制的结束点角度，以弧度表示 (**非角度度数**)。
- `anticlockwise` {{optional_inline}}
  - : {{jsxref("Boolean")}} 选项，如果为 `true`，逆时针方向绘制椭圆（逆时针），反之顺时针方向绘制。

## 示例

### 画一个完整的椭圆

这是一段绘制椭圆的简单的代码片段。

#### HTML

```html
<canvas id="canvas" width="200" height="200"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw the ellipse
ctx.beginPath();
ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();

// Draw the ellipse's line of reflection
ctx.beginPath();
ctx.setLineDash([5, 5]);
ctx.moveTo(0, 200);
ctx.lineTo(200, 0);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('画一个完整的椭圆', 700, 250) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
