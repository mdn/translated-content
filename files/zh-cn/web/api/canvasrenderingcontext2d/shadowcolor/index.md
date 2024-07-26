---
title: CanvasRenderingContext2D：shadowColor 属性
slug: Web/API/CanvasRenderingContext2D/shadowColor
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.shadowColor`** 属性用于描述阴影颜色。

请注意，在进行填充时，阴影的渲染不透明度会受到 {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} 颜色的不透明度的影响；或在进行描边时，受到 {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} 颜色的不透明度的影响。

> [!NOTE]
> 只有当 `shadowColor` 属性设置为非透明值时，阴影才会被绘制。其中的 {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}、{{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}} 或 {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}} 属性中至少有一个必须是非零的。

## 值

一个被解析为 [CSS](/zh-CN/docs/Web/CSS) {{cssxref("&lt;color&gt;")}} 值的字符串。默认值是完全透明的黑色。

## 示例

### 为形状添加阴影

这个例子向两个正方形添加阴影；第一个是填充的，第二个是描边的。`shadowColor` 属性设置阴影的颜色，而 `shadowOffsetX` 和 `shadowOffsetY` 设置阴影相对于形状的位置。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 阴影
ctx.shadowColor = "red";
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;

// 填充的矩形
ctx.fillRect(20, 20, 100, 100);

// 描边的矩形
ctx.lineWidth = 6;
ctx.strokeRect(170, 20, 100, 100);
```

#### 结果

{{ EmbedLiveSample('为形状添加阴影', 700, 180) }}

### 半透明形状上的阴影

阴影的不透明度受其父对象透明级别的影响（即使 `shadowColor` 指定了完全不透明的值）。这个例子描绘并填充了一个带有半透明颜色的矩形。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

填充矩形的阴影的 alpha 值为 `.8 * .2`，即 `.16`。描边矩形的阴影的 alpha 值为 `.8 * .6`，即 `.48`。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 阴影
ctx.shadowColor = "rgba(255, 0, 0, 0.8)";
ctx.shadowBlur = 8;
ctx.shadowOffsetX = 30;
ctx.shadowOffsetY = 20;

// 填充的矩形
ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
ctx.fillRect(10, 10, 150, 100);

// 描边的矩形
ctx.lineWidth = 10;
ctx.strokeStyle = "rgba(0, 0, 255, 0.6)";
ctx.strokeRect(10, 10, 150, 100);
```

#### 结果

{{ EmbedLiveSample('半透明形状上的阴影', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### WebKit/Blink 特定注意事项

在基于 WebKit 和 Blink 的浏览器中，除了这个属性外，还实现了一个非标准且已废弃的方法 `ctx.setShadow()`。

```js
setShadow(width, height, blur, color, alpha);
setShadow(width, height, blur, graylevel, alpha);
setShadow(width, height, blur, r, g, b, a);
setShadow(width, height, blur, c, m, y, k, a);
```

## 参见

- 定义该属性的接口：{{domxref("CanvasRenderingContext2D")}}
