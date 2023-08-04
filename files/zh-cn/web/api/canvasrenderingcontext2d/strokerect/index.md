---
title: CanvasRenderingContext2D.strokeRect()
slug: Web/API/CanvasRenderingContext2D/strokeRect
---

{{APIRef}}

**`CanvasRenderingContext2D.strokeRect()`** 是 Canvas 2D API 在 canvas 中，使用当前的绘画样式，描绘一个起点在 _(x, y)_、宽度为 _w_、高度为 _h_ 的矩形的方法。

此方法直接绘制到画布而不修改当前路径，因此任何后续{{domxref("CanvasRenderingContext2D.fill()", "fill()")}} 或{{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}调用对它没有影响。

## 语法

```plain
void ctx.strokeRect(x, y, width, height);
```

`strokeRect()`方法绘制一个描边矩形，其起点为`(x, y)` ，其大小由宽度和高度指定。

### 参数

- `x`
  - : 矩形起点的 x 轴坐标。
- `y`
  - : 矩形起点的 y 轴坐标。
- `width`
  - : 矩形的宽度。正值在右侧，负值在左侧。
- `height`
  - : 矩形的高度。正值在下，负值在上。

## 示例

### 一个简单的填充矩形

这是一段使用 `strokeRect` 方法的简单的代码片段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

矩形的左上角是（20,10）。它的宽度为 160，高度为 100。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "green";
ctx.strokeRect(20, 10, 160, 100);
```

#### 结果

{{ EmbedLiveSample('一个简单的填充矩形', 700, 180) }}

### 应用多种上下文设置

此示例绘制一个带有阴影和粗斜面轮廓的矩形。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.shadowColor = "#d53";
ctx.shadowBlur = 20;
ctx.lineJoin = "bevel";
ctx.lineWidth = 15;
ctx.strokeStyle = "#38f";
ctx.strokeRect(30, 30, 160, 90);
```

#### 结果

{{ EmbedLiveSample('应用多种上下文设置', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义，{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
- {{domxref("CanvasRenderingContext2D.clearRect()")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
