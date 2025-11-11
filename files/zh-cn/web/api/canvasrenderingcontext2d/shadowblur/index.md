---
title: CanvasRenderingContext2D：shadowBlur 属性
slug: Web/API/CanvasRenderingContext2D/shadowBlur
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.shadowBlur`** 属性用于描述模糊效果程度。默认值是 `0`（没有模糊）。

> [!NOTE]
> 只有当 {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}} 属性设置为非透明值时，阴影才会被绘制。其中的 `shadowBlur`、{{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}} 或 {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}} 属性中至少有一个必须是非零的。

## 值

一个非负浮点数，指定阴影模糊的级别，其中 `0` 表示没有模糊，数字越大表示模糊程度越高。这个值不对应于像素数量，并且不受当前变换矩阵的影响。默认值为 `0`。负数、{{jsxref("Infinity")}} 和 {{jsxref("NaN")}} 将被忽略。

## 示例

### 为形状添加阴影

这个例子向一个矩形添加了模糊的阴影。`shadowColor` 属性设置阴影的颜色，而 `shadowBlur` 设置阴影的模糊程度。

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
ctx.shadowBlur = 15;

// 矩形
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 150, 100);
```

#### 结果

{{ EmbedLiveSample('为形状添加阴影', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### WebKit/Blink 特定注意事项

在基于 WebKit 和 Blink 的浏览器中，除了这个属性外，还实现了一个非标准且已弃用的方法 `ctx.setShadow()`。

```js
setShadow(width, height, blur, color, alpha);
setShadow(width, height, blur, graylevel, alpha);
setShadow(width, height, blur, r, g, b, a);
setShadow(width, height, blur, c, m, y, k, a);
```

## 参见

- 定义该属性的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
