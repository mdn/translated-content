---
title: CanvasRenderingContext2D.moveTo()
slug: Web/API/CanvasRenderingContext2D/moveTo
---

{{APIRef}}

**`CanvasRenderingContext2D.moveTo()`** 是 Canvas 2D API 将一个新的子路径的起始点移动到 (x，y) 坐标的方法。

## 语法

```
void ctx.moveTo(x, y);
```

### 参数

- `x`
  - : 点的 x 轴。
- `y`
  - : 点的 y 轴。

## 示例

### 绘制多条子路径

这是一段使用 `moveTo` 方法的简单的代码片段，移动画笔到起始点绘制一条线。

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

第一条线从 (50, 50) 处开始，至 (200, 50) 处结束。第二条线从 (50, 90) 处开始，至 (280, 120) 处结束。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 50); // Begin first sub-path
ctx.lineTo(200, 50);
ctx.moveTo(50, 90); // Begin second sub-path
ctx.lineTo(280, 120);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('绘制多条子路径-paths', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
