---
title: CanvasRenderingContext2D.lineJoin
slug: Web/API/CanvasRenderingContext2D/lineJoin
---

{{APIRef}}

**`CanvasRenderingContext2D.lineJoin`** 是 Canvas 2D API 用来设置 2 个长度不为 0 的相连部分（线段、圆弧、曲线）如何连接在一起的属性（长度为 0 的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

参见 [Canvas Tutorial](/zh-CN/docs/Web/API/Canvas_API/Tutorial) 中的 [Applying styles and color](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) 章节。

## 语法

```
ctx.lineJoin = "bevel";
ctx.lineJoin = "round";
ctx.lineJoin = "miter";
```

### 选项

此属性有 3 个值： `round`, `bevel` and `miter`。默认值是 `miter`。注意：如果 2 个相连部分在同一方向，那么 lineJoin 不会产生任何效果，因为在那种情况下不会出现连接区域。

![](canvas_linejoin.png)

- `round`
  - : 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。圆角的半径是线段的宽度。
- `bevel`
  - : 在相连部分的末端填充一个额外的以三角形为底的区域，每个部分都有各自独立的矩形拐角。
- `miter`
  - : 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}} 属性看到效果。

## 示例

### 改变路径中的相连部分

这是一段使用 `lineJoin` 属性的简单的代码片段。

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

{{EmbedLiveSample("相连部分对比", "180", "180", "canvas_linejoin.png")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineWidth")}}
