---
title: CanvasRenderingContext2D.scale()
slug: Web/API/CanvasRenderingContext2D/scale
---

{{APIRef}}

**`CanvasRenderingContext2D.scale()`** 是 Canvas 2D API 根据 x 水平方向和 y 垂直方向，为 canvas 单位添加缩放变换的方法。

默认的，在 canvas 中一个单位实际上就是一个像素。例如，如果我们将 0.5 作为缩放因子，最终的单位会变成 0.5 像素，并且形状的尺寸会变成原来的一半。相似的方式，我们将 2.0 作为缩放因子，将会增大单位尺寸变成两个像素。形状的尺寸将会变成原来的两倍。

## 语法

```
void ctx.scale(x, y);
```

### 参数

- `x`
  - : 水平方向的缩放因子。A negative value flips pixels across the vertical axis. A value of `1` results in no horizontal scaling.
- y
  - : 垂直方向的缩放因子。A negative value flips pixels across the horizontal axis. A value of `1` results in no vertical scaling.

## 示例

### 使用 `scale` 方法

这是一段使用 `scale` 方法的简单的代码片段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The rectangle has a specified width of 8 and a height of 20. The transformation matrix scales it by 9x horizontally and by 3x vertically. Thus, its final size is a width of 72 and a height of 60.

Notice that its position on the canvas also changes. Since its specified corner is (10, 10), its rendered corner becomes (90, 30).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Scaled rectangle
ctx.scale(9, 3);
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 8, 20);

// Reset current transformation matrix to the identity matrix
ctx.setTransform(1, 0, 0, 1, 0, 0);

// Non-scaled rectangle
ctx.fillStyle = "gray";
ctx.fillRect(10, 10, 8, 20);
```

#### 结果

The scaled rectangle is red, and the non-scaled rectangle is gray.

{{ EmbedLiveSample('使用 scale 方法', 700, 180) }}

### 使用 scale 水平或竖直翻转

你可以使用 `ctx.scale(-1, 1)` 水平翻转上下文，使用 `ctx.scale(1, -1)` 垂直翻转上下文。在这个例子中，"Hello world!" 被水平翻转。

Note that the call to {{domxref("CanvasRenderingContext2D.fillText()", "fillText()")}} specifies a negative x coordinate. This is to adjust for the negative scaling factor: `-280 * -1` becomes `280`, and text is drawn leftwards from that point.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.scale(-1, 1);
ctx.font = "48px serif";
ctx.fillText("Hello world!", -280, 90);
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

#### 结果

{{ EmbedLiveSample('使用 scale 水平或竖直翻转', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义，{{domxref("CanvasRenderingContext2D")}}
