---
title: CanvasRenderingContext2D：arc() 方法
slug: Web/API/CanvasRenderingContext2D/arc
l10n:
  sourceCommit: c8b447485fd893d5511d88f592f5f3aec29a725b
---

{{APIRef}}

[Canvas 2D API](/zh-CN/docs/Web/API/CanvasRenderingContext2D) 的 **`CanvasRenderingContext2D.arc()`** 方法用于将一个圆弧添加到当前子路径中。

## 语法

```js-nolint
arc(x, y, radius, startAngle, endAngle)
arc(x, y, radius, startAngle, endAngle, counterclockwise)
```

`arc()` 方法创建一个以坐标 `(x, y)` 为中心，以 `radius` 为半径的圆弧。路径从 `startAngle` 开始，到 `endAngle` 结束，路径方向由 `counterclockwise` 参数决定（默认为顺时针方向）。

### 参数

- `x`
  - : 圆弧中心（圆心）的 x 轴坐标。
- `y`
  - : 圆弧中心（圆心）的 y 轴坐标。
- `radius`
  - : 圆弧的半径。必须为正值。
- `startAngle`
  - : 圆弧的起始点，从 x 轴方向开始计算，以弧度为单位。
- `endAngle`
  - : 圆弧的终点，从 x 轴方向开始计算，以弧度为单位。
- `counterclockwise` {{optional_inline}}
  - : 可选的布尔值，如果为 `true`，逆时针绘制圆弧，反之，顺时针绘制。默认为 `false`（顺时针）。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 绘制一个完整的圆

此示例使用 `arc()` 方法在画布上绘制了一个完整的圆。

#### HTML

```html
<canvas></canvas>
```

#### JavaScript

圆弧的 x 坐标为 100，y 坐标为 75，半径为 50。为了绘制完整的圆，圆弧从 0 弧度角（0°）开始，到 2π 弧度角（360°）结束。

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('绘制一个完整的圆', 700, 180) }}

### 不同的形状演示

此示例使用 `arc()` 方法绘制了多种形状，展示了它的各种可能性。

```html hidden
<canvas id="canvas" width="150" height="200"></canvas>
```

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 绘制形状
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 2; j++) {
    ctx.beginPath();
    let x = 25 + j * 50; // x 坐标
    let y = 25 + i * 50; // y 坐标
    let radius = 20; // 圆弧半径
    let startAngle = 0; // 圆弧起始角度
    let endAngle = Math.PI + (Math.PI * j) / 2; // 圆弧结束角度
    let counterclockwise = i % 2 === 1; // 是否逆时针绘制

    ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

    if (i > 1) {
      ctx.fill(); // 填充形状
    } else {
      ctx.stroke(); // 绘制形状轮廓
    }
  }
}
```

#### 结果

{{EmbedLiveSample('不同的形状演示', "", "210")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- 使用 {{domxref("CanvasRenderingContext2D.ellipse()")}} 来绘制椭圆弧。
