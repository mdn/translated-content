---
title: CanvasRenderingContext2D：lineWidth 属性
slug: Web/API/CanvasRenderingContext2D/lineWidth
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.lineWidth`** 属性用于设置线宽。

> [!NOTE]
> 线可以通过 {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}、{{domxref("CanvasRenderingContext2D.strokeRect()", "strokeRect()")}} 和 {{domxref("CanvasRenderingContext2D.strokeText()", "strokeText()")}} 方法绘制。

## 值

一个数字，指定线条的宽度（以坐标空间单位表示）。零、负数、{{jsxref("Infinity")}} 和 {{jsxref("NaN")}} 值将被忽略。默认值为 `1.0`。

## 示例

### 改变线宽

此示例使用 15 个单位的线宽绘制直线和矩形。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 15;

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(130, 130);
ctx.rect(40, 40, 70, 70);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('改变线宽', 700, 180) }}

### 更多示例

有关此属性的更多示例和说明，请参阅 [Canvas 教程](/zh-CN/docs/Web/API/Canvas_API/Tutorial)中的[应用样式和色彩](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此属性的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
- [应用样式和色彩](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
