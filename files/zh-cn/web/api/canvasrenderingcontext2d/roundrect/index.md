---
title: CanvasRenderingContext2D：roundRect() 方法
slug: Web/API/CanvasRenderingContext2D/roundRect
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.roundRect()`** 方法用于在当前路径中添加一个圆角矩形。

角的半径可以像 CSS [`border-radius`](/zh-CN/docs/Web/CSS/Reference/Properties/border-radius) 属性一样指定。

像其他修改当前路径的方法一样，此方法不会直接渲染任何内容。要将圆角矩形绘制到画布上，你可以使用 {{domxref("CanvasRenderingContext2D.fill", "fill()")}} 或 {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} 方法。

## 语法

```js-nolint
roundRect(x, y, width, height, radii)
```

### 参数

- `x`
  - : 矩形起点的 x 轴坐标，以像素为单位。
- `y`
  - : 矩形起点的 y 轴坐标，以像素为单位。
- `width`
  - : 矩形的宽度。正值向右，负值向左。
- `height`
  - : 矩形的高度。正值向下，负值向上。
- `radii`
  - : 指定用于矩形角的圆弧半径的数字或列表。其数量和顺序与 `width` 和 `height` 为正值时的 [`border-radius`](/zh-CN/docs/Web/CSS/Reference/Properties/border-radius) CSS 属性相同：
    - `all-corners`
    - `[all-corners]`
    - `[top-left-and-bottom-right, top-right-and-bottom-left]`
    - `[top-left, top-right-and-bottom-left, bottom-right]`
    - `[top-left, top-right, bottom-right, bottom-left]`

    如果 `width` 为负，圆角矩形水平翻转，因此通常适用于左角的半径值用于右角，反之亦然。同样，当 `height` 为负时，圆角矩形垂直翻转。如果任何边缘短于两个顶点的组合半径，则指定的半径可能会缩小（缩减）。

    `radii` 参数也可以是 {{domxref("DOMPoint")}} 或 {{domxref("DOMPointReadOnly")}} 实例，或者包含相同属性的对象（`{x: 0, y: 0}`），或这些对象的列表，或混合数字和这些对象的列表。

### 返回值

无 ({{jsxref("undefined")}})。

### 异常

- {{jsxref("RangeError")}}
  - : 如果 `radii` 是零个或多个元素的列表，或其值之一为负数。

## 示例

### 绘制矩形

此示例使用 `roundRect()` 方法创建多个圆角矩形路径，然后使用 `stroke()` 方法渲染这些路径。

#### HTML

```html
<canvas id="canvas" width="700" height="300"></canvas>
```

#### JavaScript

首先，我们创建一个用于绘制圆角矩形的上下文。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

下面的代码绘制了两个矩形，都从点 (10, 20) 开始，宽度为 150，高度为 100。第一个矩形用红色绘制，并使用数字作为参数指定所有角的半径为零。第二个用蓝色绘制，并使用单个列表元素来指定半径为 40px。

```js
// 半径为零的圆角矩形（指定为数字）
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.roundRect(10, 20, 150, 100, 0);
ctx.stroke();

// 半径为 40px 的圆角矩形（单元素列表）
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.roundRect(10, 20, 150, 100, [40]);
ctx.stroke();
```

在前一个矩形下面，我们绘制了另一个橙色的矩形，该矩形指定了对角的半径值。

```js
// 具有两个不同半径的圆角矩形
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.roundRect(10, 150, 150, 100, [10, 40]);
ctx.stroke();
```

最后，我们绘制了两个具有四个不同半径值且起点相同的圆角矩形。这里的区别在于第二个矩形是用负宽度绘制的。

```js
// 具有四个不同半径的圆角矩形
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.roundRect(400, 20, 200, 100, [0, 30, 50, 60]);
ctx.stroke();

// 向后绘制的相同矩形
ctx.strokeStyle = "magenta";
ctx.beginPath();
ctx.roundRect(400, 150, -200, 100, [0, 30, 50, 60]);
ctx.stroke();
```

#### 结果

结果如下图所示。对于右侧的两个矩形，请注意底部矩形是如何用负宽度绘制的，以及矩形是如何水平翻转的。

{{ EmbedLiveSample('绘制矩形', 700, 300) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.rect()")}}
- {{domxref("CanvasRenderingContext2D.fillRect")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
- {{domxref("CanvasRenderingContext2D.fill()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
