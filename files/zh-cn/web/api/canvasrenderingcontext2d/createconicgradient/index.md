---
title: CanvasRenderingContext2D：createConicGradient() 方法
slug: Web/API/CanvasRenderingContext2D/createConicGradient
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.createConicGradient()`** 方法围绕指定坐标点创建渐变。

此方法返回一个锥形 {{domxref("CanvasGradient")}}。要将渐变应用于形状，必须首先将其赋值给 {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} 或 {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} 属性。

> [!NOTE]
> 渐变坐标是全局的，即相对于当前坐标空间。应用于形状时，坐标不是相对于形状的坐标。

## 语法

```js-nolint
createConicGradient(startAngle, x, y)
```

### 参数

- `startAngle`
  - : 渐变开始的角度，单位为弧度。角度从从中心向右水平线开始，并顺时针旋转。
- `x`
  - : 渐变中心的 x 轴坐标。
- `y`
  - : 渐变中心的 y 轴坐标。

### 返回值

- {{domxref("CanvasGradient")}}
  - : 一个锥形 `CanvasGradient` 对象。

## 示例

### 使用锥形渐变填充矩形

这个例子使用 `createConicGradient()` 方法初始化一个锥形渐变。在中心坐标周围创建五个色标。最后，将渐变赋值给画布上下文，并将其渲染到一个填充矩形中。

#### HTML

```html
<canvas id="canvas" width="240" height="240"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 创建一个锥形渐变
// 开始角度为 0
// 中心位置为 100, 100
const gradient = ctx.createConicGradient(0, 100, 100);

// 添加五个色标
gradient.addColorStop(0, "red");
gradient.addColorStop(0.25, "orange");
gradient.addColorStop(0.5, "yellow");
gradient.addColorStop(0.75, "green");
gradient.addColorStop(1, "blue");

// 设置填充样式并绘制矩形
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 200);
```

#### 矩形结果

{{ EmbedLiveSample('使用锥形渐变填充矩形', 240, 240) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
