---
title: CanvasRenderingContext2D：strokeRect() 方法
slug: Web/API/CanvasRenderingContext2D/strokeRect
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.strokeRect()`** 方法根据当前的 {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} 和其它设置描绘一个矩形的描边（轮廓）。

此方法直接绘制到画布而不修改当前路径，因此任何后续 {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} 或 {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} 调用对它没有影响。

## 语法

```js-nolint
strokeRect(x, y, width, height)
```

`strokeRect()` 方法绘制一个描边矩形，其起点为 `(x, y)`，其大小由 `width` 和 `height` 指定。

### 参数

- `x`
  - : 矩形起点的 x 轴坐标。
- `y`
  - : 矩形起点的 y 轴坐标。
- `width`
  - : 矩形的宽度。正值在右侧，负值在左侧。
- `height`
  - : 矩形的高度。正值在下，负值在上。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 简单的描边矩形

此示例使用 `strokeRect()` 方法绘制了一个带有绿色轮廓的矩形。

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

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
- {{domxref("CanvasRenderingContext2D.clearRect()")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
