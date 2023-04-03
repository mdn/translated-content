---
title: CanvasRenderingContext2D.shadowBlur
slug: Web/API/CanvasRenderingContext2D/shadowBlur
---

{{APIRef}}

**`CanvasRenderingContext2D.shadowBlur`** 是 Canvas 2D API 描述模糊效果程度的属性；它既不对应像素值也不受当前转换矩阵的影响。默认值是 0。

## 语法

```
ctx.shadowBlur = level;
```

- `level`
  - : 描述模糊效果程度的，float 类型的值。默认值是 0。负数、 {{jsxref("Infinity")}} 或者 {{jsxref("NaN")}} 都会被忽略。

## 示例

### 为形状添加阴影

这是一段简单的代码片段，使用 `shadowblur` 属性设置模糊阴影。注意：只有设置 shadowColor 属性值为不透明，阴影才会被绘制。

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
ctx.shadowBlur = 15;

// Rectangle
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 150, 100);
```

#### 结果

{{ EmbedLiveSample('为形状添加阴影', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}.
