---
title: CanvasRenderingContext2D：shadowOffsetY 属性
slug: Web/API/CanvasRenderingContext2D/shadowOffsetY
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.shadowOffsetY`** 属性用于描述阴影垂直偏移距离。

> [!NOTE]
> 只有当 `shadowColor` 属性设置为非透明值时，阴影才会被绘制。其中的 {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}、{{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}} 或 `shadowOffsetY` 属性中至少有一个必须是非零的。

## 值

一个浮点数，指定阴影在垂直方向上的偏移距离。正值向上偏移，负值向下偏移。默认值为 `0`（无垂直偏移）。{{jsxref("Infinity")}} 和 {{jsxref("NaN")}} 值将被忽略。

## 示例

### 垂直移动阴影

这个例子向一个矩形添加了模糊的阴影。`shadowColor` 属性设置阴影的颜色，`shadowOffsetY` 设置阴影向下偏移 25 个单位，而 `shadowBlur` 设置阴影的模糊等级为 10。

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
ctx.shadowOffsetY = 25;
ctx.shadowBlur = 10;

// 矩形
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 150, 80);
```

#### 结果

{{ EmbedLiveSample('垂直移动阴影', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义该属性的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.shadowOffsetX")}}
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
