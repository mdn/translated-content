---
title: CanvasRenderingContext2D.lineCap
slug: Web/API/CanvasRenderingContext2D/lineCap
---

{{APIRef}}

**`CanvasRenderingContext2D.lineCap`** 是 Canvas 2D API 指定如何绘制每一条线段末端的属性。有 3 个可能的值，分别是：`butt`, `round` and `square`。默认值是 `butt`。

参见 [Canvas Tutorial](/zh-CN/docs/Web/API/Canvas_API/Tutorial) 中的 [Applying styles and color](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) 章节。

## 语法

```
ctx.lineCap = "butt";
ctx.lineCap = "round";
ctx.lineCap = "square";
```

### 选项

- `butt`
  - : 线段末端以方形结束。
- `round`
  - : 线段末端以圆形结束。
- `square`
  - : 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

## 示例

### 改变线段末端的形状

这是一段简单的代码片段，使用 `lineCap` 属性绘制以圆形结尾的线段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineWidth = 15;
ctx.lineCap = "round";
ctx.lineTo(100, 100);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('改变线段末端的形状', 700, 180) }}

### 线条末端对比

在这个例子中绘制了 3 条线段，每条线段都设置了不同的 `lineCap` 属性值。通过 2 条导航线能够精确地看到 3 条已绘制线段之间的不同。每条线段的顶端和末端都能在导航线上准确的反映出来。

左侧的线段使用了默认值 `butt` ，和导航线是完全平齐的。第二条线段使用了 `round` 选项，在线段末端增加了一个半径为线短宽度一半的半圆。右侧的线段使用了 `square` 选项，增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw guides
ctx.strokeStyle = "#09f";
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(140, 10);
ctx.moveTo(10, 140);
ctx.lineTo(140, 140);
ctx.stroke();

// Draw lines
ctx.strokeStyle = "black";
["butt", "round", "square"].forEach((lineCap, i) => {
  ctx.lineWidth = 15;
  ctx.lineCap = lineCap;
  ctx.beginPath();
  ctx.moveTo(25 + i * 50, 10);
  ctx.lineTo(25 + i * 50, 140);
  ctx.stroke();
});
```

{{EmbedLiveSample("线条末端对比", "180", "180", "canvas_linecap.png")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineWidth")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
