---
title: CanvasRenderingContext2D.getLineDash()
slug: Web/API/CanvasRenderingContext2D/getLineDash
---

{{APIRef}}

**`CanvasRenderingContext2D.getLineDash()`** 是 Canvas 2D API 获取当前线段样式的方法。

## 语法

```
ctx.getLineDash();
```

### 返回值

一个 {{jsxref("Array")}}数组。一组描述交替绘制线段和间距（坐标空间单位）长度的数字。如果数组元素的数量是奇数，数组元素会被复制并重复。例如，设置线段为 `[5, 15, 25]` 将会得到以下返回值 `[5, 15, 25, 5, 15, 25]`。

## 示例

### 获取当前的划线设置

这是一段使用 `getLineDash` 方法的简单的代码片段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.setLineDash([10, 20]);
console.log(ctx.getLineDash()); // [10, 20]

// Draw a dashed line
ctx.beginPath();
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('获取当前的划线设置', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
