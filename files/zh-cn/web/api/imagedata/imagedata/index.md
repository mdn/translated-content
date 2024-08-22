---
title: ImageData()
slug: Web/API/ImageData/ImageData
---

{{APIRef("Canvas API")}}

**`ImageData()`** 构造函数返回一个新的实例化的 `ImageData` 对象，此对象由给定的类型化数组和指定的宽度与高度组成。

这个构造器是创建像这种对象首选的方式。

## 语法

```js-nolint
new ImageData(width, height)
new ImageData(width, height, settings)

new ImageData(dataArray, width)
new ImageData(dataArray, width, height)
new ImageData(dataArray, width, height, settings)
```

### 参数

- `array`
  - : 包含图像隐藏像素的 {{jsxref("Uint8ClampedArray")}} 数组。如果数组没有给定，指定大小的黑色矩形图像将会被创建。
- `width`
  - : 无符号长整型（unsigned long）数值，描述图像的宽度。
- `height`
  - : 无符号长整型（unsigned long）数值，描述图像的高度。
    如果已给定数组，这个值是可选的：它将通过它的大小和给定的宽度进行推断。

## 示例

```js
var imageData = new ImageData(100, 100); // Creates a 100x100 black rectangle
// ImageData { width: 100, height: 100, data: Uint8ClampedArray[40000] }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CanvasRenderingContext2D.createImageData()")}}, the creator method that can be used outside workers.
