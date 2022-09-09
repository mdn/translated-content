---
title: CanvasRenderingContext2D.drawImage()
slug: Web/API/CanvasRenderingContext2D/drawImage
---
{{APIRef}}

Canvas 2D API 中的 **`CanvasRenderingContext2D.drawImage()`** 方法提供了多种方式在 Canvas 上绘制图像。

## 语法

```
void ctx.drawImage(image, dx, dy);
void ctx.drawImage(image, dx, dy, dWidth, dHeight);
void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
```

![drawImage](canvas_drawimage.jpg)

### 参数

- `image`
  - : 绘制到上下文的元素。允许任何的 canvas 图像源 ({{domxref("CanvasImageSource")}})，例如：{{domxref("CSSImageValue")}}，{{domxref("HTMLImageElement")}}，{{domxref("SVGImageElement")}}，{{domxref("HTMLVideoElement")}}，{{domxref("HTMLCanvasElement")}}，{{domxref("ImageBitmap")}} 或者{{domxref("OffscreenCanvas")}}。
- `sx`{{optional_inline}}
  - : 需要绘制到目标上下文中的，`image`的矩形（裁剪）选择框的左上角 X 轴坐标。
- `sy`{{optional_inline}}
  - : 需要绘制到目标上下文中的，`image`的矩形（裁剪）选择框的左上角 Y 轴坐标。
- `sWidth`{{optional_inline}}
  - : 需要绘制到目标上下文中的，`image`的矩形（裁剪）选择框的宽度。如果不说明，整个矩形（裁剪）从坐标的`sx`和`sy`开始，到`image`的右下角结束。
- `sHeight`{{optional_inline}}
  - : 需要绘制到目标上下文中的，`image`的矩形（裁剪）选择框的高度。
- `dx`
  - : `image`的左上角在目标 canvas 上 X 轴坐标。
- `dy`
  - : `image`的左上角在目标 canvas 上 Y 轴坐标。
- `dWidth`{{optional_inline}}
  - : `image`在目标 canvas 上绘制的宽度。允许对绘制的`image`进行缩放。如果不说明，在绘制时`image`宽度不会缩放。
- `dHeight`{{optional_inline}}
  - : `image`在目标 canvas 上绘制的高度。 允许对绘制的`image`进行缩放。如果不说明，在绘制时`image`高度不会缩放。

### 抛出异常

- `INDEX_SIZE_ERR`
  - : 如果 canvas 或者图像矩形区域的宽度或高度为 0 。
- `INVALID_STATE_ERR`
  - : 图像没有数据。
- `TYPE_MISMATCH_ERR`
  - : 提供的原始元素不支持。
- `NS_ERROR_NOT_AVAILABLE`
  - : 图像尚未加载。使用`.complete === true`和`.onload`确定何时准备就绪。

## 示例

### 使用 `drawImage` 方法

这是一段使用 `drawImage` 方法的简单的代码片段。

#### HTML

```html
<canvas id="canvas"></canvas>
  <img id="source" src="https://mdn.mozillademos.org/files/5397/rhino.jpg"
       width="300" height="227">
</div>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var image = document.getElementById('source');

ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
```

```html hidden
<canvas id="canvas"></canvas>
  <img id="source"
       src="https://mdn.mozillademos.org/files/5397/rhino.jpg"
       width="300" height="227">
</div>
```

```js hidden
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = document.getElementById('source');

image.addEventListener('load', e => {
  ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
});
```

#### 结果

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
  <img id="source" src="https://mdn.mozillademos.org/files/5397/rhino.jpg" width="300" height="227">
</div>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);</textarea>
```

```js hidden
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var image = document.getElementById('source');
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function() {
  textarea.focus();
})

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('Drawing_an_image_to_the_canvas', 700, 180) }}

### 理解源元素大小

`drawImage()`方法在绘制时使用源元素的 CSS 大小。

例如，如果加载图像并在其构造函数中指定可选的大小参数，则必须使用所创建实例的`naturalWidth`和`naturalHeight`属性来正确计算裁剪和缩放区域等内容，而不是`element.width`和`element.height`。如果元素是{{htmlelement("video")}} 元素，则`videoWidth`和`videoHeight`也是如此，依此类推。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const image = new Image(60, 45); // Using optional size for image
image.onload = drawImageActualSize; // Draw when image has loaded

// Load an image of intrinsic size 300x227 in CSS pixels
image.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';

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

```html hidden
<canvas id="canvas"></canvas>
```

```js hidden
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const image = new Image(60, 45); // Using optional size for image
image.onload = drawImageActualSize; // Draw when image has loaded

// Load an image of intrinsic size 300x227 in CSS pixels
image.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';

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

{{EmbedLiveSample('Understanding_source_element_size', 700, 260)}}

## 规范说明

{{Specifications}}

## 浏览器兼容性

{{Compat("api.CanvasRenderingContext2D.drawImage")}}

### 兼容性注解

- 在 Gecko 5.0 {{geckoRelease("5.0")}}中，支持通过给 sw 和 sh 赋负值，对图像进行翻转。
- 从 {{geckoRelease("5.0")}} 开始，`drawImage()` 按照规范处理负参数，沿着合适的轴翻转矩形。
- 从{{geckoRelease("5.0")}}开始，当 drawImage() 调用 `null` 或者 `undefined` 图像时，会抛出 `TYPE_MISMATCH_ERR` 异常。
- 在 Gecko 7.0 {{ geckoRelease("7.0") }}之前， 如果坐标值是非规定值或者是 0，Firefox 会抛出一个异常。按照规范描述，这种情况不会再发生。
- Gecko 9.0 {{ geckoRelease("9.0") }}现在完全支持 CORS 跨域绘制图像，不需要[污染的 canvas](/zh-CN/CORS_Enabled_Image#What_is_a_.22tainted.22_canvas.3F).
- Gecko 11.0 {{ geckoRelease("11.0") }} 现在允许 SVG 作为图像被绘制到 canvas，不需要 [污染的 canvas](/zh-CN/CORS_Enabled_Image#What_is_a_.22tainted.22_canvas.3F).

## Notes

- 当`drawImage()`需要在{{domxref("HTMLVideoElement")}}工作时，仅当{{domxref("HTMLMediaElement.readyState")}}大于 1 时`drawImage()`才能正常工作。
- 在绘制，裁剪和/或缩放时，`drawImage()` 将始终使用 CSS 像素中源元素的固有尺寸。
- `drawImage()`将忽略图像中的所有 EXIF 元数据，包括方向。此行为在 iOS 设备上尤其麻烦。您应该自己检测方向并使用`rotate()`使其正确。

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}.
