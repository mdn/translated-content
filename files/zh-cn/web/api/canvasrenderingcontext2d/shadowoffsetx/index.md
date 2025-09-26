---
title: CanvasRenderingContext2D：shadowOffsetX 属性
slug: Web/API/CanvasRenderingContext2D/shadowOffsetX
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.shadowOffsetX`** 属性用于描述阴影水平偏移距离。

> [!NOTE]
> 只有当 `shadowColor` 属性设置为非透明值时，阴影才会被绘制。其中的 {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}、`shadowOffsetX` 或 {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}} 属性中至少有一个必须是非零的。

## 值

一个浮点数，指定阴影在水平方向上的偏移距离。正值向右偏移，负值向左偏移。默认值为 `0`（无水平偏移）。{{jsxref("Infinity")}} 和 {{jsxref("NaN")}} 值将被忽略。

## 示例

### 水平移动阴影

这个例子向一个矩形添加了模糊的阴影。{{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}} 属性设置阴影的颜色，`shadowOffsetX` 设置阴影向右偏移 25 个单位，而 {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}} 设置阴影的模糊等级为 10。

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
ctx.shadowOffsetX = 25;
ctx.shadowBlur = 10;

// 矩形
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 150, 100);
```

#### 结果

{{ EmbedLiveSample('水平移动阴影', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义该属性的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.shadowOffsetY")}}
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
