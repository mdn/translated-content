---
title: CanvasRenderingContext2D：lineJoin 属性
slug: Web/API/CanvasRenderingContext2D/lineJoin
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.lineJoin`** 属性用于设置 2 个线段如何连接在一起。

这个属性在两个连接的线段具有相同方向时没有效果，因为在这种情况下不会添加连接区域。长度为零的退化线段（即所有端点和控制点处于完全相同的位置）也会被忽略。

> [!NOTE]
> 可以使用 {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}、{{domxref("CanvasRenderingContext2D.strokeRect()", "strokeRect()")}} 和 {{domxref("CanvasRenderingContext2D.strokeText()", "strokeText()")}} 方法来绘制线条。

## 值

此属性有 3 个值：`"round"`、`"bevel"` 和 `"miter"`。默认值是 `"miter"`。

![三条水平的锯齿线，分别使用圆角、斜角和斜接的线段连接样式，从上到下依次展示。](canvas_linejoin.png)

- `"round"`
  - : 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。圆角的半径是线段的宽度。
- `"bevel"`
  - : 在相连部分的末端填充一个额外的以三角形为底的区域，每个部分都有各自独立的矩形拐角。
- `"miter"`
  - : 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置受到 {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}} 属性的影响。默认值。

## 示例

### 改变路径中的相连部分

这个例子将圆角线段连接样式应用到一个路径中。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 20;
ctx.lineJoin = "round";
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(190, 100);
ctx.lineTo(280, 20);
ctx.lineTo(280, 150);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('改变路径中的相连部分', 700, 180) }}

### 相连部分对比

下面的例子绘制了 3 条不同的路径，演示 `lineJoin` 属性 3 种不同的设置。

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const ctx = document.getElementById("canvas").getContext("2d");
ctx.lineWidth = 10;

["round", "bevel", "miter"].forEach((join, i) => {
  ctx.lineJoin = join;
  ctx.beginPath();
  ctx.moveTo(-5, 5 + i * 40);
  ctx.lineTo(35, 45 + i * 40);
  ctx.lineTo(75, 5 + i * 40);
  ctx.lineTo(115, 45 + i * 40);
  ctx.lineTo(155, 5 + i * 40);
  ctx.stroke();
});
```

{{EmbedLiveSample("相连部分对比", "", "180")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此属性的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineWidth")}}
- [应用样式和色彩](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
