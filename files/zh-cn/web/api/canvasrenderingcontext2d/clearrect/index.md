---
title: CanvasRenderingContext2D：clearRect() 方法
slug: Web/API/CanvasRenderingContext2D/clearRect
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.clearRect()`** 方法用于通过把像素设置为透明黑色以达到擦除一个矩形区域的目的。

> [!NOTE]
> 如果没有[正确使用路径](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#绘制路径)，`clearRect()` 可能会导致意想之外的结果。请确保在调用 `clearRect()` 之后开始绘制新内容前调用 {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}} 。

## 语法

```js-nolint
clearRect(x, y, width, height)
```

`clearRect()` 方法在一个矩形区域内将所有像素都设置成透明黑色（`rgba(0,0,0,0)`）。矩形区域的左上角在 `(x, y)`，其大小由 `width` 和`height` 指定。

### 参数

- `x`
  - : 矩形起点的 x 轴坐标。
- `y`
  - : 矩形起点的 y 轴坐标。
- `width`
  - : 矩形的宽度。正值向右，负值向左。
- `height`
  - : 矩形的高度。正值向下，负值向上。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 擦除整个画布

这段代码片段用于擦除整个画布。这通常在动画的每一帧开始时需要执行。清除的区域尺寸设置为与 `<canvas>` 元素的 `width` 和 `height` 属性相等。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

### 擦除一部分画布

此示例在黄色背景上绘制了一个蓝色三角形，然后使用 `clearRect()` 方法擦除了画布的部分内容。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

被清除的区域是一个矩形，它的左上点坐标在 (10, 10)。清除区域的宽度为 120，高度为 100。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

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

{{EmbedLiveSample('擦除一部分画布', 700, 180)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
