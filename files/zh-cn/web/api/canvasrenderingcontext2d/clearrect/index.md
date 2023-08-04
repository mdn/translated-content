---
title: CanvasRenderingContext2D.clearRect()
slug: Web/API/CanvasRenderingContext2D/clearRect
---

{{APIRef}}

**`CanvasRenderingContext2D.clearRect()`** 是 Canvas 2D API 的方法，这个方法通过把像素设置为透明以达到擦除一个矩形区域的目的。

> **备注：** 如果没有依照 [绘制路径](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#%E7%BB%98%E5%88%B6%E8%B7%AF%E5%BE%84) 的步骤，使用 `clearRect()` 会导致意想之外的结果。请确保在调用 `clearRect()`之后绘制新内容前调用{{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}} 。

## 语法

```
void ctx.clearRect(x, y, width, height);
```

`clearRect()` 方法在一个矩形区域内设置所有像素都是透明的 (`rgba(0,0,0,0)`)。这个矩形范围的左上角在 `(x, y)`，宽度和高度分别由 `width` 和`height`确定。

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

### 清除整个画布

这段代码清除整个画布。这段代码通常在动画的每一帧开始被执行。清除的范围涵覆盖了整个 {{HtmlElement("canvas")}} 元素。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

### 清除一部分画布

这仅是一段简单地使用 `clearRect` 方法的代码片段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

下面代码中被清除的区域是一个矩形，它的左上点坐标在 (10, 10)，宽度和高度分别是 120 和 100 像素。

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// 绘制黄色背景
ctx.beginPath();
ctx.fillStyle = "#ff6";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 绘制蓝色三角形
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.moveTo(20, 20);
ctx.lineTo(180, 20);
ctx.lineTo(130, 130);
ctx.closePath();
ctx.fill();

// 清除一部分画布
ctx.clearRect(10, 10, 120, 100);
```

#### 结果

{{EmbedLiveSample('清除一部分画布', 700, 180)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
