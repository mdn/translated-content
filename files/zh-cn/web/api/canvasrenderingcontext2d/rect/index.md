---
title: CanvasRenderingContext2D.rect()
slug: Web/API/CanvasRenderingContext2D/rect
---

{{APIRef}}

**`CanvasRenderingContext2D.rect()`** 是 Canvas 2D API 创建矩形路径的方法，矩形的起点位置是 _(x, y)_，尺寸为 _width_ 和 _height_。矩形的 4 个点通过直线连接，子路径做为闭合的标记，所以你可以填充或者描边矩形。

## 语法

```
void ctx.rect(x, y, width, height);
```

### 参数

- `x`
  - : 矩形起点的 x 轴坐标。
- `y`
  - : 矩形起点的 y 轴坐标。
- `width`
  - : 矩形的宽度。
- `height`
  - : 矩形的高度。

## 示例

### 绘制矩形

这是一段简单的代码片段，使用 `rect` 方法创建一条路径。实际上，在 canvas 中绘制矩形路径，你可以使用 {{domxref("CanvasRenderingContext2D.fill", "fill()")}} 或者 {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} 方法。参见 {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} 和{{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect()")}} 方法，只需一步即可绘制。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.rect(10, 20, 150, 100);
ctx.fill();
```

{{ EmbedLiveSample('绘制矩形', 700, 360) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
- {{domxref("CanvasRenderingContext2D.fill()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
