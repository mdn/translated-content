---
title: CanvasRenderingContext2D.createImageData()
slug: Web/API/CanvasRenderingContext2D/createImageData
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.createImageData()`** 方法用于创建一个新的、空白的、指定大小的 {{domxref("ImageData")}} 对象。所有的像素在新对象中都是透明的黑色。

## 语法

```js-nolint
createImageData(width, height)
createImageData(width, height, settings)
createImageData(imagedata)
```

### 参数

- `width`
  - : 新 `ImageData` 对象的宽度。如果是负值，将围绕垂直轴翻转矩形。
- `height`
  - : 新 `ImageData` 对象的高度。如果是负值，将围绕水平轴翻转矩形。
- `settings` {{optional_inline}}
  - : 一个包含以下属性的对象：
    - `colorSpace`：指定图像数据的色彩空间。可以设置为 `"srgb"` 表示 [sRGB 色彩空间](https://zh.wikipedia.org/wiki/SRGB色彩空间)，或 `"display-p3"` 表示 [display-p3 色彩空间](https://zh.wikipedia.org/wiki/DCI-P3)。
- `imagedata`
  - : 要复制宽度和高度的现有 `ImageData` 对象。**不**会复制图像本身。

### 返回值

指定了宽度和高度的，新的 {{domxref("ImageData")}} 对象。新对象使用透明的黑色像素进行填充。

### 错误

- `IndexSizeError`
  - : 如果参数 `width` 或者 `height` 为零，会抛出此异常。

## 示例

### 创建空的 ImageData 对象

这段代码使用 `createImageData()` 方法创建一个空的 `ImageData` 对象。

```html
<canvas id="canvas"></canvas>
```

生成的对象宽度为 100 像素，高度为 50 像素，总共包含 5,000 个像素点。每个像素点在 `ImageData` 对象中由四个数组值表示，因此对象的 {{domxref("ImageData.data", "data")}} 属性的长度为 4 × 5,000，即 20,000。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const imageData = ctx.createImageData(100, 50);
console.log(imageData);
// ImageData { width: 100, height: 50, data: Uint8ClampedArray[20000] }
```

### 填充空的 ImageData 对象

这个示例创建了一个新的 `ImageData` 对象，并使用紫色像素填充。

```html
<canvas id="canvas"></canvas>
```

由于每个像素点由四个值表示，`for` 循环每次迭代增加四个值。与每个像素相关联的数组值分别是 R（红色）、G（绿色）、B（蓝色）和 A（透明度），顺序如上。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const imageData = ctx.createImageData(100, 100);

// 遍历每个像素点
for (let i = 0; i < imageData.data.length; i += 4) {
  // 修改像素数据
  imageData.data[i + 0] = 190; // R 值
  imageData.data[i + 1] = 0; // G 值
  imageData.data[i + 2] = 210; // B 值
  imageData.data[i + 3] = 255; // A 值
}

// 将图像数据绘制到画布上
ctx.putImageData(imageData, 20, 20);
```

#### 结果

{{EmbedLiveSample("创建空的_ImageData_对象", 700, 180)}}

### 更多示例

关于使用 `createImageData()` 和 `ImageData` 对象的更多示例，请参阅[使用 Canvas 进行像素操作](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas) 和 {{domxref("ImageData.data")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("ImageData")}}
- [使用 Canvas 进行像素操作](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
