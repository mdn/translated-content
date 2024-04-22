---
title: CanvasRenderingContext2D.shadowColor
slug: Web/API/CanvasRenderingContext2D/shadowColor
---

{{APIRef}}

**`CanvasRenderingContext2D.shadowColor`** 是 Canvas 2D API 描述阴影颜色的属性。

## 语法

```
ctx.shadowColor = color;
```

- `color`
  - : 可以转换成 CSS {{cssxref("&lt;color&gt;")}} 值的{{domxref("DOMString")}} 字符串。默认值是 fully-transparent black.

## 示例

### 为形状添加阴影

这是一段简单的代码片段，使用 `shadowColor` 属性设置阴影的颜色。注意：shadowColor 属性设置成不透明的，并且 {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}、 {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}} 或者 {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}} 属性不为 0，阴影才会被绘制。

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
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;

// Filled rectangle
ctx.fillRect(20, 20, 100, 100);

// Stroked rectangle
ctx.lineWidth = 6;
ctx.strokeRect(170, 20, 100, 100);
```

#### 结果

{{ EmbedLiveSample('为形状添加阴影', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义，{{domxref("CanvasRenderingContext2D")}}.
