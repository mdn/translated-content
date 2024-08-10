---
title: CanvasRenderingContext2D：globalAlpha 属性
slug: Web/API/CanvasRenderingContext2D/globalAlpha
l10n:
  sourceCommit: c8b447485fd893d5511d88f592f5f3aec29a725b
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.globalAlpha`** 属性指定将被绘制到 canvas 上的形状或图像的 alpha（透明度）值。

> [!NOTE]
> 参见 [Canvas 教程](/zh-CN/docs/Web/API/Canvas_API/Tutorial)中[应用样式和色彩](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)这一章节。

## 值

一个在 `0.0`（完全透明）到 `1.0`（完全不透明）之间的数字，包括两者在内。默认值是 `1.0`。超出该范围的值，包括 {{jsxref("Infinity")}} 和 {{jsxref("NaN")}}，将不会被设置，并且 `globalAlpha` 将保留其先前的值。

## 示例

### 绘制半透明形状

此示例用 `globalAlpha` 属性绘制了 2 个半透明的矩形。

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.globalAlpha = 0.5;

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100);
```

#### 结果

{{ EmbedLiveSample('绘制半透明形状', 700, 180) }}

### 叠加透明形状

此示例演示了在彼此叠加多个透明形状的效果。我们首先绘制一个由四个不同颜色的方块组成的实心背景。接下来，将 `globalAlpha` 属性设置为 `0.2`（20% 不透明）；这个 alpha 级别将应用于所有透明形状。然后，我们使用一个 `for` 循环绘制一系列半径逐渐增大的圆。

随着每个新圆的绘制，下面圆的透明度实际上增加了。如果我们增加循环的次数（从而绘制更多的圆），背景最终会完全从图像的中心消失。

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 绘制背景
ctx.fillStyle = "#FD0";
ctx.fillRect(0, 0, 75, 75);
ctx.fillStyle = "#6C0";
ctx.fillRect(75, 0, 75, 75);
ctx.fillStyle = "#09F";
ctx.fillRect(0, 75, 75, 75);
ctx.fillStyle = "#F30";
ctx.fillRect(75, 75, 75, 75);
ctx.fillStyle = "#FFF";

// 设置透明度值
ctx.globalAlpha = 0.2;

// 绘制透明圆
for (let i = 0; i < 7; i++) {
  ctx.beginPath();
  ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
  ctx.fill();
}
```

{{EmbedLiveSample("叠加透明形状", "", "180")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### Gecko 特定注意事项

- 从 Gecko 5.0 开始，为 `globalAlpha` 指定无效值将不再抛出 `SYNTAX_ERR` 异常；这些值将被正确地静默忽略。

### WebKit/Blink 特定注意事项

- 在基于 WebKit 和 Blink 的浏览器中，除了此属性之外，还实现了一个非标准且已弃用的方法 `ctx.setAlpha()`。

## 参见

- 定义此属性的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}
