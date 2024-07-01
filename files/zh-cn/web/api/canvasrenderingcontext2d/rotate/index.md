---
title: CanvasRenderingContext2D.rotate()
slug: Web/API/CanvasRenderingContext2D/rotate
---

{{APIRef}}

**`CanvasRenderingContext2D.rotate()`** 是 Canvas 2D API 在变换矩阵中增加旋转的方法。角度变量表示一个顺时针旋转角度并且用弧度表示。

## 语法

```
void ctx.rotate(angle);
```

![](canvas_grid_rotate.png)

### 参数

- `angle`
  - : 顺时针旋转的弧度。如果你想通过角度值计算，可以使用公式： `degree * Math.PI / 180` 。

旋转中心点一直是 canvas 的起始点。如果想改变中心点，我们可以通过 {{domxref("CanvasRenderingContext2D.translate", "translate()")}} 方法移动 canvas。

## 示例

### 旋转形状

这是一段使用 `rotate` 方法的简单的代码片段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Point of transform origin
ctx.arc(0, 0, 5, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();

// Non-rotated rectangle
ctx.fillStyle = "gray";
ctx.fillRect(100, 0, 80, 20);

// Rotated rectangle
ctx.rotate((45 * Math.PI) / 180);
ctx.fillStyle = "red";
ctx.fillRect(100, 0, 80, 20);

// Reset transformation matrix to the identity matrix
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

#### 结果

旋转中心是蓝色的。未旋转的矩形为灰色，而旋转后的矩形为红色。

{{ EmbedLiveSample('旋转形状', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
