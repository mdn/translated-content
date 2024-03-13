---
title: CanvasRenderingContext2D.translate()
slug: Web/API/CanvasRenderingContext2D/translate
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.translate()`** 方法对当前网格添加平移变换的方法。

## 语法

```
void ctx.translate(x, y);
```

`translate()` 方法，将 canvas 按原始 x 点的水平方向、原始的 y 点垂直方向进行**平移变换**

![](canvas_grid_translate.png)

### 参数

- `x`
  - : 水平方向的移动距离。
- y
  - : 垂直方向的移动距离。

## 示例

### 移动形状

这是一段使用 `translate` 方法的简单的代码片段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Moved square
ctx.translate(110, 30);
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 80, 80);

// Reset current transformation matrix to the identity matrix
ctx.setTransform(1, 0, 0, 1, 0, 0);

// Unmoved square
ctx.fillStyle = "gray";
ctx.fillRect(0, 0, 80, 80);
```

#### 结果

移动后的正方形是红色的，未移动的正方形是灰色的。

{{ EmbedLiveSample('移动形状', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
