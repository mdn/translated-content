---
title: CanvasRenderingContext2D：putImageData() 方法
slug: Web/API/CanvasRenderingContext2D/putImageData
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.putImageData()`** 方法用于将数据从已有的 {{domxref("ImageData")}} 对象绘制到画布上。如果提供了一个被污染的矩形，则只绘制该矩形的像素。此方法不受画布变换矩阵的影响。

> [!NOTE]
> 可以使用 {{domxref("CanvasRenderingContext2D.getImageData()", "getImageData()")}} 方法从画布中获取图像数据。

你可以在文章[像素操作](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)中找到有关 `putImageData()` 方法和画布内容常规操作的更多信息。

## 语法

```js-nolint
putImageData(imageData, dx, dy)
putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)
```

### 参数

- `imageData`
  - : 一个 {{domxref("ImageData")}} 对象，包含像素值数组。
- `dx`
  - : 目标画布中放置图像数据的水平位置（x 坐标）。
- `dy`
  - : 目标画布中放置图像数据的垂直位置（y 坐标）。
- `dirtyX` {{optional_inline}}
  - : 提取图像数据的左上角的水平位置（x 坐标）。默认为 `0`。
- `dirtyY` {{optional_inline}}
  - : 提取图像数据的左上角的垂直位置（y 坐标）。默认为 `0`。
- `dirtyWidth` {{optional_inline}}
  - : 要绘制的矩形的宽度。默认为图像数据的宽度。
- `dirtyHeight` {{optional_inline}}
  - : 要绘制的矩形的高度。默认为图像数据的高度。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `NotSupportedError` {{domxref("DOMException")}}
  - : 如果任何一个变量被设置成无穷大，则会抛出此错误。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果过图像数据对象的数据被分离，会抛出此错误。

## 示例

### 理解 putImageData

为了理解这个算法在底层是如何工作的，这里是一个基于 {{domxref("CanvasRenderingContext2D.fillRect()")}} 的实现示例。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function putImageData(
  ctx,
  imageData,
  dx,
  dy,
  dirtyX,
  dirtyY,
  dirtyWidth,
  dirtyHeight,
) {
  const data = imageData.data;
  const height = imageData.height;
  const width = imageData.width;
  dirtyX = dirtyX || 0;
  dirtyY = dirtyY || 0;
  dirtyWidth = dirtyWidth !== undefined ? dirtyWidth : width;
  dirtyHeight = dirtyHeight !== undefined ? dirtyHeight : height;
  const limitBottom = dirtyY + dirtyHeight;
  const limitRight = dirtyX + dirtyWidth;
  for (let y = dirtyY; y < limitBottom; y++) {
    for (let x = dirtyX; x < limitRight; x++) {
      const pos = y * width + x;
      ctx.fillStyle = `rgba(${data[pos * 4 + 0]}, ${data[pos * 4 + 1]}, ${
        data[pos * 4 + 2]
      }, ${data[pos * 4 + 3] / 255})`;
      ctx.fillRect(x + dx, y + dy, 1, 1);
    }
  }
}

// 在画布上绘制内容
ctx.fillRect(0, 0, 100, 100);
// 从画布创建一个 ImageData 对象
const imagedata = ctx.getImageData(0, 0, 100, 100);
// 使用 putImageData 函数来展示 putImageData 的工作原理
putImageData(ctx, imagedata, 150, 0, 50, 50, 25, 25);
```

#### 结果

{{ EmbedLiveSample('理解 putImageData', 700, 180) }}

### 由于浏览器优化丢失数据

> [!WARNING]
> 由于转换为和从预乘的 alpha 色值之间的损失性质，刚刚使用 `putImageData()` 设置的像素可能会被返回为等效的 `getImageData()`，但值不同。

#### JavaScript

```js
const canvas = document.createElement("canvas");
canvas.width = 1;
canvas.height = 1;
const context = canvas.getContext("2d");
const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
const pixels = imgData.data;
pixels[0 + 0] = 1;
pixels[0 + 1] = 127;
pixels[0 + 2] = 255;
pixels[0 + 3] = 1;
console.log("before:", pixels);
context.putImageData(imgData, 0, 0);
const imgData2 = context.getImageData(0, 0, canvas.width, canvas.height);
const pixels2 = imgData2.data;
console.log("after:", pixels2);
```

输出可能如下所示：

```plain
before: Uint8ClampedArray(4) [ 1, 127, 255, 1 ]
after: Uint8ClampedArray(4) [ 255, 255, 255, 1 ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("ImageData")}} 对象
- {{domxref("CanvasRenderingContext2D.getImageData()")}}
- [像素操作](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
