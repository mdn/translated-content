---
title: CanvasRenderingContext2D.createLinearGradient()
slug: Web/API/CanvasRenderingContext2D/createLinearGradient
---

{{APIRef}}

**`CanvasRenderingContext2D.createLinearGradient()`**方法创建一个沿参数坐标指定的直线的渐变。

![](mdn-canvas-lineargradient.png)

该方法返回一个线性 {{domxref("CanvasGradient")}}对象。想要应用这个渐变，需要把这个返回值赋值给 {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} 或者 {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}。

## 语法

```
CanvasGradient ctx.createLinearGradient(x0, y0, x1, y1);
```

`createLinearGradient()` 方法需要指定四个参数，分别表示渐变线段的开始和结束点。

### 参数

- `x0`
  - : 起点的 x 轴坐标。
- `y0`
  - : 起点的 y 轴坐标。
- `x1`
  - : 终点的 x 轴坐标。
- `y1`
  - : 终点的 y 轴坐标。

### 返回值

- {{domxref("CanvasGradient")}}
  - : 一个根据指定线路初始化的线性 `CanvasGradient` 对象。

## 示例

### 使用线性渐变填充一个矩形

这个例子使用`createLinearGradient()` 方法初始化了一个线性渐变。在这个线性渐变中添加了三种色彩。最后，这个渐变被赋值给上下文对应的属性，实现了对矩形的填充。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create a linear gradient
// The start gradient point is at x=20, y=0
// The end gradient point is at x=220, y=0
const gradient = ctx.createLinearGradient(20, 0, 220, 0);

// Add three color stops
gradient.addColorStop(0, "green");
gradient.addColorStop(0.5, "cyan");
gradient.addColorStop(1, "green");

// Set the fill style and draw a rectangle
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 100);
```

#### 结果

{{ EmbedLiveSample('使用线性渐变填充一个矩形', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义： {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
