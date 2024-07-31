---
title: CanvasRenderingContext2D：rect() 方法
slug: Web/API/CanvasRenderingContext2D/rect
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.rect()`** 方法将一个矩形添加到当前路径中。

与其他修改当前路径的方法一样，这个方法不会直接渲染任何内容。要在画布上绘制矩形，你可以使用 {{domxref("CanvasRenderingContext2D.fill", "fill()")}} 或 {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} 方法。

> [!NOTE]
> 要在一个步骤中创建并渲染矩形，可以使用 {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} 或 {{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect()")}} 方法。

## 语法

```js-nolint
rect(x, y, width, height)
```

`rect()` 方法创建一个矩形路径，其起始点位于 `(x, y)`，大小由 `width` 和 `height` 指定。

### 参数

- `x`
  - : 矩形起始点的 x 轴坐标。
- `y`
  - : 矩形起始点的 y 轴坐标。
- `width`
  - : 矩形的宽度。正值向右延伸，负值向左延伸。
- `height`
  - : 矩形的高度。正值向下延伸，负值向上延伸。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 绘制矩形

此示例使用 `rect()` 方法创建了一个矩形路径，然后使用 `fill()` 方法进行渲染。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

矩形的角落位于 (10, 20)。它的宽度为 150，高度为 100。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.beginPath(); // 开始一个新路径
ctx.rect(10, 20, 150, 100); // 将一个矩形添加到当前路径中
ctx.fill(); // 渲染路径
```

{{ EmbedLiveSample('绘制矩形', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
- {{domxref("CanvasRenderingContext2D.fill()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
