---
title: CanvasRenderingContext2D：rotate() 方法
slug: Web/API/CanvasRenderingContext2D/rotate
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.rotate()`** 方法用于在变换矩阵中增加旋转。

## 语法

```js-nolint
rotate(angle)
```

![横坐标轴按 alpha 角旋转的直角坐标系](canvas_grid_rotate.png)

### 参数

- `angle`
  - : 顺时针旋转的弧度。如果你想通过角度值计算，可以使用公式： `degree * Math.PI / 180` 。

旋转中心点一直是 canvas 的原点。如果想改变中心点，你可以通过 {{domxref("CanvasRenderingContext2D.translate", "translate()")}} 方法移动画布。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 旋转形状

此示例将矩形旋转了 45°。注意，旋转的中心是画布的左上角，而不是相对于任何形状的位置。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 变换原点
ctx.arc(0, 0, 5, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();

// 未旋转的矩形
ctx.fillStyle = "gray";
ctx.fillRect(100, 0, 80, 20);

// 旋转的矩形
ctx.rotate((45 * Math.PI) / 180);
ctx.fillStyle = "red";
ctx.fillRect(100, 0, 80, 20);

// 将变换矩阵重置为单位矩阵
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

#### 结果

旋转中心是蓝色的。未旋转的矩形为灰色，而旋转后的矩形为红色。

{{ EmbedLiveSample('旋转形状', 700, 180) }}

### 围绕中心旋转形状

此示例围绕形状的中心点旋转一个形状。为此，矩阵应用以下步骤：

1. 首先，{{domxref("CanvasRenderingContext2D.translate()", "translate()")}} 将矩阵的原点移动到形状的中心。
2. `rotate()` 按所需的角度旋转矩阵。
3. 最后，`translate()` 将矩阵的原点移回到其起始点。这是通过应用形状中心坐标值相反数来完成的。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

该形状是一个矩形，其角落在 (80, 60)，宽度为 140，高度为 30。其水平中心位于 (80 + 140 / 2)，即 150。其垂直中心位于 (60 + 30 / 2)，即 75。因此，中心点在 (150, 75)。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 未旋转的矩形
ctx.fillStyle = "gray";
ctx.fillRect(80, 60, 140, 30);

// 矩阵变换
ctx.translate(150, 75);
ctx.rotate(Math.PI / 2);
ctx.translate(-150, -75);

// 旋转后的矩形
ctx.fillStyle = "red";
ctx.fillRect(80, 60, 140, 30);
```

#### 结果

未旋转的矩形是灰色的，旋转后的矩形是红色的。

{{ EmbedLiveSample('围绕中心旋转形状', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
