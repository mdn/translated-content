---
title: CanvasRenderingContext2D：getImageData() 方法
slug: Web/API/CanvasRenderingContext2D/getImageData
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.getImageData()`** 返回一个 {{domxref("ImageData")}} 对象，用于描述 canvas 指定区域的隐含像素数据。

这个方法不受画布的变换矩阵影响。如果指定的矩形超出画布的边界，返回的 `ImageData` 对象中超出画布边界的像素将是透明黑色。

> [!NOTE]
> 可以使用 {{domxref("CanvasRenderingContext2D.putImageData()", "putImageData()")}} 方法将图像数据绘制到画布上。

你可以在[像素操作](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)中找到关于 `getImageData()` 和画布内容的常规操作的更多信息。

## 语法

```js-nolint
getImageData(sx, sy, sw, sh)
getImageData(sx, sy, sw, sh, settings)
```

### 参数

- `sx`
  - : 要提取 `ImageData` 的矩形左上角的 x 轴坐标。
- `sy`
  - : 要提取 `ImageData` 的矩形左上角的 y 轴坐标。
- `sw`
  - : 要提取 `ImageData` 的矩形的宽度。正值向右延伸，负值向左延伸。
- `sh`
  - : 要提取 `ImageData` 的矩形的高度。正值向下延伸，负值向上延伸。
- `settings` {{optional_inline}}
  - : 一个具有以下属性的对象：
    - `colorSpace`：指定图像数据的颜色空间。可以设置为 `"srgb"` 表示 [sRGB 色彩空间](https://zh.wikipedia.org/wiki/SRGB色彩空间)，或 `"display-p3"` 表示 [display-p3 色彩空间](https://zh.wikipedia.org/wiki/DCI-P3)。

### 返回值

包含指定矩形的画布图像数据的 {{domxref("ImageData")}} 对象。矩形的左上角坐标为 `(sx, sy)`，右下角坐标为 `(sx + sw - 1, sy + sh - 1)`。

### 异常

- `IndexSizeError` {{domxref("DOMException")}}
  - : 如果 `sw` 或 `sh` 中有任何一个为零时抛出。
- `SecurityError` {{domxref("DOMException")}}
  - : 画布包含或可能包含从与文档本身加载的原点不同的源加载的像素。
    要避免在此情况下抛出 `SecurityError` {{domxref("DOMException")}}，请配置 CORS 允许以这种方式使用源图像。参见[允许图片和 canvas 跨源使用](/zh-CN/docs/Web/HTML/CORS_enabled_image)。

## 示例

### 从画布获取图像数据

这个示例绘制了一幅图像，然后使用 `getImageData()` 方法来获取画布的一部分内容。

我们使用 `getImageData()` 提取图像的一个片段，从坐标 `(10, 20)` 开始，宽度为 `80`，高度为 `230`。然后，我们将这个片段绘制三次，每次都逐渐将片段位置放在上一个片段的右下方。

#### HTML

```html
<canvas id="canvas" width="700" height="400"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "plumeria.jpg";
image.addEventListener("load", () => {
  ctx.drawImage(image, 0, 0, 233, 320);

  const imageData = ctx.getImageData(10, 20, 80, 230);
  ctx.putImageData(imageData, 260, 0);
  ctx.putImageData(imageData, 380, 50);
  ctx.putImageData(imageData, 500, 100);
});
```

#### 结果

{{EmbedLiveSample("从画布获取图像数据", "", 420)}}

### 色彩空间转换

可选的 `colorSpace` 设置允许你以所需的格式获取图像数据。

```js
const context = canvas.getContext("2d", { colorSpace: "display-p3" });
context.fillStyle = "color(display-p3 0.5 0 0)";
context.fillRect(0, 0, 10, 10);

// 获取转换为 sRGB 的 ImageData
const imageData = context.getImageData(0, 0, 1, 1, { colorSpace: "srgb" });
console.log(imageData.colorSpace); // "srgb"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("ImageData")}} 对象
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
- [像素操作](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
