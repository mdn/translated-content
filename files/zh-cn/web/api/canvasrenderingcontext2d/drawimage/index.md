---
title: CanvasRenderingContext2D.drawImage()
slug: Web/API/CanvasRenderingContext2D/drawImage
---

{{APIRef}}

Canvas 2D API 中的 **`CanvasRenderingContext2D.drawImage()`** 方法提供了多种在画布（Canvas）上绘制图像的方式。

## 语法

```js
drawImage(image, dx, dy);
drawImage(image, dx, dy, dWidth, dHeight);
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
```

![drawImage](canvas_drawimage.jpg)

### 参数

- `image`
  - : 绘制到上下文的元素。允许任何的画布图像源，例如：{{domxref("HTMLImageElement")}}、{{domxref("SVGImageElement")}}、{{domxref("HTMLVideoElement")}}、{{domxref("HTMLCanvasElement")}}、{{domxref("ImageBitmap")}}、{{domxref("OffscreenCanvas")}}
    或 {{domxref("VideoFrame")}}。
- `sx` {{optional_inline}}
  - : 需要绘制到目标上下文中的，`image` 的矩形（裁剪）选择框的左上角 X 轴坐标。可以使用 3 参数或 5 参数语法来省略这个参数。
- `sy` {{optional_inline}}
  - : 需要绘制到目标上下文中的，`image` 的矩形（裁剪）选择框的左上角 Y 轴坐标。可以使用 3 参数或 5 参数语法来省略这个参数。
- `sWidth` {{optional_inline}}
  - : 需要绘制到目标上下文中的，`image` 的矩形（裁剪）选择框的宽度。如果不说明，整个矩形（裁剪）从坐标的 `sx` 和 `sy` 开始，到 `image` 的右下角结束。可以使用 3 参数或 5 参数语法来省略这个参数。使用负值将翻转这个图像。
- `sHeight` {{optional_inline}}
  - : 需要绘制到目标上下文中的，`image`的矩形（裁剪）选择框的高度。使用负值将翻转这个图像。
- `dx`
  - : `image` 的左上角在目标画布上 X 轴坐标。
- `dy`
  - : `image` 的左上角在目标画布上 Y 轴坐标。
- `dWidth`
  - : `image` 在目标画布上绘制的宽度。允许对绘制的 `image` 进行缩放。如果不说明，在绘制时 `image` 宽度不会缩放。注意，这个参数不包含在 3 参数语法中。
- `dHeight`
  - : `image` 在目标画布上绘制的高度。允许对绘制的 `image` 进行缩放。如果不说明，在绘制时 `image` 高度不会缩放。注意，这个参数不包含在 3 参数语法中。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 当图像没有数据或者画布或源矩形宽度/高度为零时抛出该异常。
- `TypeMismatchError` {{domxref("DOMException")}}
  - : 当将 `null` 或 `undefined` 值作为图像的参数传入时抛出该异常。

## 示例

### 在画布上绘制图像

此示例在画布中使用 `drawImage()` 方法绘制一张图像。

#### HTML

```html
<canvas id="canvas"></canvas>
<div style="display:none;">
  <img id="source" src="rhino.jpg" width="300" height="227" />
</div>
```

#### JavaScript

原图像从坐标 (33,71) 处截取一个宽度为 104 高度为 124 的图像。并将其绘制到画布的 (21, 20) 坐标处，并将其缩放为宽 87、高 104 的图像。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const image = document.getElementById("source");

image.addEventListener("load", (e) => {
  ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
});
```

#### 结果

{{ EmbedLiveSample('在画布上绘制图像', 700, 180) }}

### 理解源元素大小

`drawImage()` 方法在绘制时使用源元素的*固有尺寸*（以 CSS 像素为单位）。

例如，如果加载图像并在其[构造函数](/zh-CN/docs/Web/API/HTMLImageElement/Image)中指定可选的大小参数，则必须使用所创建实例的 `naturalWidth` 和 `naturalHeight` 属性来正确计算裁剪和缩放区域等内容，而不是 `element.width` 和 `element.height`。如果元素是 {{htmlelement("video")}} 元素，则 `videoWidth` 和 `videoHeight` 也是如此，依此类推。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image(60, 45); // Using optional size for image
image.onload = drawImageActualSize; // Draw when image has loaded

// Load an image of intrinsic size 300x227 in CSS pixels
image.src = "rhino.jpg";

function drawImageActualSize() {
  // Use the intrinsic size of image in CSS pixels for the canvas element
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;

  // Will draw the image as 300x227, ignoring the custom size of 60x45
  // given in the constructor
  ctx.drawImage(this, 0, 0);

  // To use the custom size we'll have to specify the scale parameters
  // using the element's width and height properties - lets draw one
  // on top in the corner:
  ctx.drawImage(this, 0, 0, this.width, this.height);
}
```

#### 结果

{{EmbedLiveSample('理解源元素大小', 700, 260)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 备注

- 当 `drawImage()` 需要在 {{domxref("HTMLVideoElement")}} 工作时，仅当 {{domxref("HTMLMediaElement.readyState")}} 大于 1 时 `drawImage()` 才能正常工作。
- 在绘制，裁剪和/或缩放时，`drawImage()` 将始终使用源元素的固有尺寸（以 CSS 像素为单位）。
- 在某些旧版本浏览器中，`drawImage()` 将忽略图像中的所有 EXIF 元数据，包括方向。此行为在 iOS 设备上尤其麻烦。你应该自己检测方向并使用 `rotate()` 使其正确。

## 参见

- 定义该方法的接口：{{domxref("CanvasRenderingContext2D")}}
