---
title: ImageData
slug: Web/API/ImageData
---

{{APIRef("Canvas API")}}

**`ImageData`** 接口描述 {{HTMLElement("canvas")}} 元素的一个隐含像素数据的区域。使用 {{domxref("ImageData.ImageData", "ImageData()")}} 构造函数创建或者使用和 canvas 在一起的 {{domxref("CanvasRenderingContext2D")}} 对象的创建方法： {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} 和 {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}}。也可以使用 {{domxref("CanvasRenderingContext2D.putImageData", "putImageData()")}} 设置 canvas 的一部分。

## 构造函数

- {{domxref("ImageData.ImageData", "ImageData()")}} {{experimental_inline}}
  - : 三个参数，第一个 是{{jsxref("Uint8ClampedArray")}}的实例，第二个和第三个表示的是 width 和 height，必须保证 Uint8ClampedArray 的 length = 4\*width\*height 才不会报错，如果第一个参数 Uint8ClampedArray 没有的话，自动按照 width 和 height 的大小，以 0 填充整个像素矩阵。
    使用给定的{{jsxref("Uint8ClampedArray")}}创建一个 `ImageData` 对象，并包含图像的大小。如果不给定数组，会创建一个“完全透明”(因为透明度值为 0) 的黑色矩形图像。注意，这是最常见的方式去创建这样一个对象，在 {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} 不可用时。

## 属性

- {{domxref("ImageData.data")}} {{readonlyInline}}
  - : {{jsxref("Uint8ClampedArray")}} 描述了一个一维数组，包含以 RGBA 顺序的数据，数据使用 `0` 至 `255`（包含）的整数表示。
- {{domxref("ImageData.height")}} {{readonlyInline}}
  - : 无符号长整型（`unsigned long`），使用像素描述 **ImageData** 的实际高度。
- {{domxref("ImageData.width")}} {{readonlyInline}}
  - : 无符号长整型（`unsigned long`），使用像素描述 **ImageData** 的实际宽度。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CanvasRenderingContext2D")}}
- {{HTMLElement("canvas")}} 元素及其相关的接口 {{domxref("HTMLCanvasElement")}}。
