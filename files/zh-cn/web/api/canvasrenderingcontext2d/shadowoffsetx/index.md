---
title: CanvasRenderingContext2D.shadowOffsetX
slug: Web/API/CanvasRenderingContext2D/shadowOffsetX
---

{{APIRef}}

**`CanvasRenderingContext2D.shadowOffsetX`** 是 Canvas 2D API 描述阴影水平偏移距离的属性。

## Syntax

```
ctx.shadowOffsetX = offset;
```

- `offset`
  - : 阴影水平偏移距离的 float 类型的值。默认值是 0。 {{jsxref("Infinity")}} 或者{{jsxref("NaN")}}都会被忽略。

## 示例

### 水平移动阴影

这是一段简单的代码片段，使用 `shadowOffsetX` 属性设置阴影的水平偏移量。注意：将 shadowColor 属性设置成不透明，阴影才会被绘制。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Shadow
ctx.shadowColor = "red";
ctx.shadowOffsetX = 25;
ctx.shadowBlur = 10;

// Rectangle
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

- 接口定义，{{domxref("CanvasRenderingContext2D")}}.
- {{domxref("CanvasRenderingContext2D.shadowOffsetY")}}
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
