---
title: CanvasRenderingContext2D.createRadialGradient()
slug: Web/API/CanvasRenderingContext2D/createRadialGradient
---

{{APIRef}}

**`CanvasRenderingContext2D.createRadialGradient()`** 是 Canvas 2D API 根据参数确定两个圆的坐标，绘制放射性渐变的方法。这个方法返回 {{domxref("CanvasGradient")}}。

## 语法

```
CanvasGradient ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
```

### 参数

- `x0`
  - : 开始圆形的 x 轴坐标。
- `y0`
  - : 开始圆形的 y 轴坐标。
- r0
  - : 开始圆形的半径。
- `x1`
  - : 结束圆形的 x 轴坐标。
- `y1`
  - : 结束圆形的 y 轴坐标。
- r1
  - : 结束圆形的半径。

### 返回值

- {{domxref("CanvasGradient")}}
  - : 由两个指定的圆初始化的放射性 `CanvasGradient` 对象。

## 示例

### 用径向渐变填充矩形

这是一段简单的代码片段，使用 `createRadialGradient` 方法创建一个指定了开始和结束圆的 {{domxref("CanvasGradient")}} 对象。一旦创建，你可以使用 {{domxref("CanvasGradient.addColorStop()")}} 方法根据指定的偏移和颜色定义一个新的终止。你可以将当前的{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}设置成此渐变，当使用{{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} 方法时，会在 canvas 上绘制出效果，如示例所示。

#### HTML

```html
<canvas id="canvas" width="200" height="200"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create a radial gradient
// The inner circle is at x=110, y=90, with radius=30
// The outer circle is at x=100, y=100, with radius=70
const gradient = ctx.createRadialGradient(110, 90, 30, 100, 100, 70);

// Add three color stops
gradient.addColorStop(0, "pink");
gradient.addColorStop(0.9, "white");
gradient.addColorStop(1, "green");

// Set the fill style and draw a rectangle
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 160, 160);
```

#### 结果

{{ EmbedLiveSample('用径向渐变填充矩形', 700, 240) }}

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
