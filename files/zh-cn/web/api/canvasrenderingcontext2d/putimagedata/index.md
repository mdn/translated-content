---
title: CanvasRenderingContext2D.putImageData()
slug: Web/API/CanvasRenderingContext2D/putImageData
---

{{APIRef}}

**`CanvasRenderingContext2D.putImageData()`** 是 Canvas 2D API 将数据从已有的 {{domxref("ImageData")}} 对象绘制到位图的方法。如果提供了一个绘制过的矩形，则只绘制该矩形的像素。此方法不受画布转换矩阵的影响。

## 语法

```
void ctx.putImageData(imagedata, dx, dy);
void ctx.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
```

### 参数

**imageData**

{{domxref("ImageData")}} ，包含像素值的数组对象。

- `dx`
  - : 源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量）。
- `dy`
  - : 源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量）。
- `dirtyX` {{optional_inline}}
  - : 在源图像数据中，矩形区域左上角的位置。默认是整个图像数据的左上角（x 坐标）。
- `dirtyY` {{optional_inline}}
  - : 在源图像数据中，矩形区域左上角的位置。默认是整个图像数据的左上角（y 坐标）。
- `dirtyWidth` {{optional_inline}}
  - : 在源图像数据中，矩形区域的宽度。默认是图像数据的宽度。
- `dirtyHeight` {{optional_inline}}
  - : 在源图像数据中，矩形区域的高度。默认是图像数据的高度。

### 抛出错误

- `NotSupportedError`
  - : 如果任何一个变量被设置成无穷大，则会抛出此错误。
- `InvalidStateError`
  - : 如果过图像数据对象的数据被分离，会抛出此错误。

## 示例

### 理解 `putImageData`

通过{{domxref("CanvasRenderingContext2D.fillRect()")}}方法实现，更好地理解 putImageData 的执行算法。获取更多信息，参见 [使用 Canvas 控制像素](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas) 和 {{domxref("ImageData")}} 对象。

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

// Draw content onto the canvas
ctx.fillRect(0, 0, 100, 100);
// Create an ImageData object from it
const imagedata = ctx.getImageData(0, 0, 100, 100);
// use the putImageData function that illustrates how putImageData works
putImageData(ctx, imagedata, 150, 0, 50, 50, 25, 25);
```

#### 结果

{{ EmbedLiveSample('理解 putImageData', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}.
- {{domxref("ImageData")}}
- [Pixel manipulation with canvas](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
