---
title: CanvasRenderingContext2D：createLinearGradient() 方法
slug: Web/API/CanvasRenderingContext2D/createLinearGradient
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.createLinearGradient()`** 方法根据两个给定的坐标值所构成的线段创建渐变。

![渐变沿着渐变线从点 (x0, y0) 开始到点 (x1, y1) 进行颜色过渡，即使这些点将渐变线延伸到绘制渐变的元素边缘之外。](mdn-canvas-lineargradient.png)

该方法返回一个线性 {{domxref("CanvasGradient")}}。想要将其应用于形状，需要首先把这个渐变赋值给属性 {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} 或者 {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}。

> [!NOTE]
> 渐变坐标是全局的，即相对于当前的坐标空间。当应用于形状时，这些坐标并不是相对于形状本身的坐标。

## 语法

```js-nolint
createLinearGradient(x0, y0, x1, y1)
```

`createLinearGradient()` 方法需要指定四个参数，分别表示渐变线段的起点和终点。

### 参数

- `x0`
  - : 起点的 x 轴坐标。
- `y0`
  - : 起点的 y 轴坐标。
- `x1`
  - : 终点的 x 轴坐标。
- `y1`
  - : 终点的 y 轴坐标。

### 返回值

一个根据指定线段初始化的线性 {{domxref("CanvasGradient")}}。

### 异常

- `NotSupportedError` {{domxref("DOMException")}}
  - : 当传递非有限值作为参数时抛出。

## 示例

### 使用线性渐变填充矩形

此示例使用 `createLinearGradient()` 方法初始化线性渐变。然后在这个线性渐变中添加了三个色标。最后，将这个渐变赋值到画布上下文，并渲染为填充矩形。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 创建一个线性渐变
// 渐变起点在 x=20、y=0
// 渐变终点在 x=220、y=0
const gradient = ctx.createLinearGradient(20, 0, 220, 0);

// 添加三个色标
gradient.addColorStop(0, "green");
gradient.addColorStop(0.5, "cyan");
gradient.addColorStop(1, "green");

// 设置填充样式并绘制矩形
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 100);
```

#### 结果

{{ EmbedLiveSample('使用线性渐变填充矩形', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
- {{domxref("CanvasRenderingContext2D.createConicGradient()")}}
