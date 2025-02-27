---
title: CanvasRenderingContext2D：createPattern() 方法
slug: Web/API/CanvasRenderingContext2D/createPattern
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.createPattern()`** 方法用于使用指定的图像或重复创建图案。此方法返回一个 {{domxref("CanvasPattern")}} 对象。

这个方法并不直接在画布上绘制任何内容。它所创建的图案必须赋值给 {{domxref("CanvasRenderingContext2D.fillStyle")}} 或 {{domxref("CanvasRenderingContext2D.strokeStyle")}}，之后才会应用于接下来的绘制操作。

## 语法

```js-nolint
createPattern(image, repetition)
```

### 参数

- `image`

  - : 用作图案图像的图像。可以是下列之一：

    - {{domxref("HTMLImageElement")}}（{{HTMLElement("img")}}）
    - {{domxref("SVGImageElement")}}（{{SVGElement("image")}}）
    - {{domxref("HTMLVideoElement")}}（{{HTMLElement("video")}}，通过使用视频捕获）
    - {{domxref("HTMLCanvasElement")}}（{{HTMLElement("canvas")}}）
    - {{domxref("ImageBitmap")}}
    - {{domxref("OffscreenCanvas")}}
    - {{domxref("VideoFrame")}}

- `repetition`

  - : 一个指示如何重复图案图像的字符串。可能的值包括：

    - `"repeat"`（两个方向都重复）
    - `"repeat-x"`（仅水平方向重复）
    - `"repeat-y"`（仅垂直方向重复）
    - `"no-repeat"`（两个方向都不重复）

    [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 值与空字符串（`""`）的处理方式相同：两者都是 `"repeat"` 的同义词。

### 返回值

- {{domxref("CanvasPattern")}}
  - : 描述图案的不透明对象

如果 `image` 没有完全加载（即 {{domxref("HTMLImageElement.complete")}} 是 `false`），则返回 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

## 示例

### 从图像创建图案

这个例子使用 `createPattern()` 方法来创建一个带有重复源图像的 {{domxref("CanvasPattern")}}。创建完成后，将这个图案赋值给画布上下文的填充样式，并应用于一个矩形。

原始图像如下所示：

![一个花纹图案](canvas_createpattern.png)

#### HTML

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "canvas_createpattern.png";
// 请确保在图像加载完成后再使用
img.onload = () => {
  const pattern = ctx.createPattern(img, "repeat");
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 300, 300);
};
```

{{ EmbedLiveSample('从图像创建图案', 700, 310) }}

### 从画布创建图案

在这个例子中，我们从一个离屏画布的内容创建了一个图案。然后将这个图案应用到主画布的填充样式上，并用该图案填充主画布。

#### JavaScript

```js
// 创建一个离屏画布作为图案的源
const patternCanvas = document.createElement("canvas");
const patternContext = patternCanvas.getContext("2d");

// 设置图案的宽度和高度为 50
patternCanvas.width = 50;
patternCanvas.height = 50;

// 设置图案的背景颜色并绘制一个圆弧
patternContext.fillStyle = "#fec";
patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
patternContext.arc(0, 0, 50, 0, 0.5 * Math.PI);
patternContext.stroke();

// 创建我们的主画布并用图案填充
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const pattern = ctx.createPattern(patternCanvas, "repeat");
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 将主画布添加到网页中
document.body.appendChild(canvas);
```

#### 结果

{{ EmbedLiveSample('从画布创建图案', 700, 160) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasPattern")}}
