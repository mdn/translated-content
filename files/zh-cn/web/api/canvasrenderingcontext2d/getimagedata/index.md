---
title: CanvasRenderingContext2D.getImageData()
slug: Web/API/CanvasRenderingContext2D/getImageData
---

{{APIRef}}

**`CanvasRenderingContext2D.getImageData()`** 返回一个{{domxref("ImageData")}}对象，用来描述 canvas 区域隐含的像素数据，这个区域通过矩形表示，起始点为*(sx, sy)、*宽为*sw、*高为*sh。*

## 语法

```plain
ImageData ctx.getImageData(sx, sy, sw, sh);
```

### 参数

- `sx`
  - : 将要被提取的图像数据矩形区域的左上角 x 坐标。
- `sy`
  - : 将要被提取的图像数据矩形区域的左上角 y 坐标。
- `sw`
  - : 将要被提取的图像数据矩形区域的宽度。
- `sh`
  - : 将要被提取的图像数据矩形区域的高度。

### 返回值

一个{{domxref("ImageData")}} 对象，包含 canvas 给定的矩形图像数据。

### 错误抛出

- `IndexSizeError`
  - : 如果高度或者宽度变量为 0，则抛出错误。

## 示例

### 使用 `getImageData` 方法

这是一段使用 `getImageData` 方法的简单的代码片段。获取更多信息，请看 [canvas 像素控制](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)和 {{domxref("ImageData")}} 对象。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.rect(10, 10, 100, 100);
ctx.fill();

console.log(ctx.getImageData(50, 50, 100, 100));
// ImageData { width: 100, height: 100, data: Uint8ClampedArray[40000] }
```

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### 兼容性注解

- 从 {{Gecko("5.0")}}开始， `getImageData()` 可以正确地接受超出 canvas 边界的矩形；canvas 范围外的像素返回值是透明的，并且如果矩形小于一个像素，会返回至少一像素值的图像数据。

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}.
- {{domxref("ImageData")}}
- [Pixel manipulation with canvas](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
