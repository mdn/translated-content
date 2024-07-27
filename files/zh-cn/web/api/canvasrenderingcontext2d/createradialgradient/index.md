---
title: CanvasRenderingContext2D：createRadialGradient() 方法
slug: Web/API/CanvasRenderingContext2D/createRadialGradient
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.createRadialGradient()`** 方法使用两个圆的坐标和大小绘制径向渐变。

这个方法返回 {{domxref("CanvasGradient")}}。要将其应用于形状，必须首先将渐变赋值给 {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} 或 {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} 属性。

> [!NOTE]
> 渐变坐标是全局的，即相对于当前的坐标空间。当应用于形状时，这些坐标并不是相对于形状本身的坐标。

## 语法

```js-nolint
createRadialGradient(x0, y0, r0, x1, y1, r1)
```

`createRadialGradient()` 方法由六个参数指定，三个参数定义渐变的起始圆，另外三个参数定义渐变的结束圆。

### 参数

- `x0`
  - : 开始圆形的 x 轴坐标。
- `y0`
  - : 开始圆形的 y 轴坐标。
- `r0`
  - : 开始圆形的半径。必须为非负有限值。
- `x1`
  - : 结束圆形的 x 轴坐标。
- `y1`
  - : 结束圆形的 y 轴坐标。
- `r1`
  - : 结束圆形的半径。必须为非负有限值。

### 返回值

- {{domxref("CanvasGradient")}}
  - : 一个使用指定的两个圆初始化的径向 {{domxref("CanvasGradient")}}。

### 异常

- `NotSupportedError` {{domxref("DOMException")}}
  - : 当在参数中传递非有限值时抛出。
- `IndexSizeError` {{domxref("DOMException")}}
  - : 当在参数追踪传递负半径时抛出。

## 示例

### 用径向渐变填充矩形

此示例使用 `createRadialGradient()` 方法初始化一个径向渐变。然后在渐变的两个圆之间创建了三个色标。最后，将渐变赋值给画布上下文，并将其渲染到一个填充的矩形上。

#### HTML

```html
<canvas id="canvas" width="200" height="200"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 创建一个径向渐变
// 内圆位于 x=110、y=90，半径为 30
// 外圆位于 x=100,、y=100，半径为 70
const gradient = ctx.createRadialGradient(110, 90, 30, 100, 100, 70);

// 添加三个色标
gradient.addColorStop(0, "pink");
gradient.addColorStop(0.9, "white");
gradient.addColorStop(1, "green");

// 设置填充样式并绘制矩形
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 160, 160);
```

#### 结果

{{ EmbedLiveSample('用径向渐变填充矩形', 700, 240) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
- {{domxref("CanvasRenderingContext2D.createConicGradient()")}}
