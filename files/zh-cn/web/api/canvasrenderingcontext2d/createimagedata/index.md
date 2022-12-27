---
title: CanvasRenderingContext2D.createImageData()
slug: Web/API/CanvasRenderingContext2D/createImageData
---

{{APIRef}}

**`CanvasRenderingContext2D.createImageData()`** 是 Canvas 2D API 创建一个新的、空白的、指定大小的 {{domxref("ImageData")}} 对象。所有的像素在新对象中都是透明的。

## 语法

```plain
ImageData ctx.createImageData(width, height);
ImageData ctx.createImageData(imagedata);
```

### 参数

- `width`
  - : {{domxref("ImageData")}} 新对象的宽度。
- `height`
  - : {{domxref("ImageData")}} 新对象的高度。
- `imagedata`
  - : 从现有的 {{domxref("ImageData")}} 对象中，复制一个和其宽度和高度相同的对象。图像自身不允许被复制。

### 返回值

指定了宽度和高度的，新的 {{domxref("ImageData")}} 对象。新对象使用透明的像素进行填充。

### 抛出错误

- `IndexSizeError`
  - : 如果宽度或者高度变量值为零，会抛出此异常。

## 示例

### 使用 `createImageData` 方法

这是一段简单地使用 `createImageData` 方法的代码片段。获取更多信息，请看 [canvas 像素控制](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas) 和 {{domxref("ImageData")}} 对象。

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

console.log(ctx.createImageData(100, 100));
// ImageData { width: 100, height: 100, data: Uint8ClampedArray[40000] }
```

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

### 兼容性注解

- 从 {{geckoRelease("5.0")}}开始：

  - 如果矩形小于指定的 1 个像素，`createImageData()` 会返回图像数据至少 1 个像素值。
  - 当调用 `createImageData()` 指定非限制值时，会抛出`NOT_SUPPORTED_ERR` exception 异常。
  - `createImageData()` 根据规定处理负数变量，会围绕对称轴翻转矩形区域。

## 参见

- 接口定义，{{domxref("CanvasRenderingContext2D")}}.
- {{domxref("ImageData")}}
- [canvas 像素控制](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
