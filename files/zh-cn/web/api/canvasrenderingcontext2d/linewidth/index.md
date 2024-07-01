---
title: CanvasRenderingContext2D.lineWidth
slug: Web/API/CanvasRenderingContext2D/lineWidth
---

{{APIRef}}

The **`CanvasRenderingContext2D.lineWidth`** 是 Canvas 2D API 设置线段厚度的属性（即线段的宽度）。

> **备注：** 线可以通过{{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}, {{domxref("CanvasRenderingContext2D.strokeRect()", "strokeRect()")}}, 和{{domxref("CanvasRenderingContext2D.strokeText()", "strokeText()")}} 方法绘制。

## 语法

```
ctx.lineWidth = value;
```

### 选项

- `value`
  - : 描述线段宽度的数字。0、负数、 {{jsxref("Infinity")}} 和 {{jsxref("NaN")}} 会被忽略。

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

有关此属性的更多示例和说明，请参阅在“画布教程”中的[使用样式和颜色](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)。

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### WebKit/Blink-specific 注解

- 在基于 WebKit- 和 Blink- 的浏览器中，除了此属性外，实现了一个不标准的并且不赞成使用的方法 `ctx.setLineWidth()` 。

### Gecko-specific 注解

- 从 Gecko 2.0 版本开始，设置`lineWidth` 为负数不再抛出异常，所有非正数值都会被忽略。

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
- [使用样式和颜色](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
