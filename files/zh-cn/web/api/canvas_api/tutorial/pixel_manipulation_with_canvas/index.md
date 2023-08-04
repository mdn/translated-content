---
title: 像素操作
slug: Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Optimizing_canvas")}}

到目前为止，我们尚未深入了解 Canvas 画布真实像素的原理，事实上，你可以直接通过 ImageData 对象操纵像素数据，直接读取或将数据数组写入该对象中。稍后我们也将深入了解如何控制图像使其平滑（反锯齿）以及如何从 Canvas 画布中保存图像。

## ImageData 对象

{{domxref("ImageData")}}对象中存储着 canvas 对象真实的像素数据，它包含以下几个只读属性：

- `width`
  - : 图片宽度，单位是像素
- `height`
  - : 图片高度，单位是像素
- `data`
  - : {{jsxref("Uint8ClampedArray")}} 类型的一维数组，包含着 RGBA 格式的整型数据，范围在 0 至 255 之间（包括 255）。

data 属性返回一个 {{jsxref("Uint8ClampedArray")}}，它可以被使用作为查看初始像素数据。每个像素用 4 个 1bytes 值 (按照红，绿，蓝和透明值的顺序; 这就是"RGBA"格式) 来代表。每个颜色值部份用 0 至 255 来代表。每个部份被分配到一个在数组内连续的索引，左上角像素的红色部份在数组的索引 0 位置。像素从左到右被处理，然后往下，遍历整个数组。

{{jsxref("Uint8ClampedArray")}} 包含 `height` × `width` × 4 字节数据，索引值从 0 到 (`height`× `width` × 4)-1

例如，要读取图片中位于第 50 行，第 200 列的像素的蓝色部份，你会写以下代码：

```
blueComponent = imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 2];
```

根据行、列读取某像素点的 R/G/B/A 值的公式：

```
imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 0/1/2/3];
```

你可能用会使用 `Uint8ClampedArray.length` 属性来读取像素数组的大小（以字节为单位）：

```js
var numBytes = imageData.data.length;
```

## 创建一个 ImageData 对象

去创建一个新的，空白的 `ImageData` 对象，你应该会使用{{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} 方法。有 2 个版本的 `createImageData()` 方法。

```js
var myImageData = ctx.createImageData(width, height);
```

上面代码创建了一个新的具体特定尺寸的 `ImageData` 对象。所有像素被预设为透明黑。

你也可以创建一个被 `anotherImageData` 对象指定的相同像素的 `ImageData` 对象。这个新的对象像素全部被预设为透明黑。这个并非复制了图片数据。

```js
var myImageData = ctx.createImageData(anotherImageData);
```

## 得到场景像素数据

为了获得一个包含画布场景像素数据的 `ImageData` 对象，你可以用 `getImageData()` 方法：

```js
var myImageData = ctx.getImageData(left, top, width, height);
```

这个方法会返回一个 `ImageData` 对象，它代表了画布区域的对象数据，此画布的四个角落分别表示为 (`left`, `top`), (`left + width`, `top`), (`left`, `top + height`), 以及 (`left + width`, `top + height`) 四个点。这些坐标点被设定为画布坐标空间元素。

> **备注：** 任何在画布以外的元素都会被返回成一个透明黑的 `ImageData` 对象。

这个方法也会在文章[用画布操作视频](/zh-CN/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)中展示。

### 颜色选择器

在这个例子里面，我们会使用 `getImageData()` 去展示鼠标光标下的颜色。为此，我们要当前鼠标的位置，记为 layerX 和 layerY，然后我们去查询 `getImageData()` 给我们提供的在那个位置的像数数组里面的像素数据。最后我们使用数组数据去设置背景颜色和 `<div>` 的文字去展示颜色值。

```html hidden
<canvas id="canvas" width="300" height="227" style="float:left"></canvas>
<div id="color" style="width:200px;height:50px;float:left"></div>
```

```js hidden
var img = new Image();
img.src = "rhino.jpg";
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
img.onload = function () {
  ctx.drawImage(img, 0, 0);
  img.style.display = "none";
};
var color = document.getElementById("color");
function pick(event) {
  var x = event.layerX;
  var y = event.layerY;
  var pixel = ctx.getImageData(x, y, 1, 1);
  var data = pixel.data;
  var rgba =
    "rgba(" +
    data[0] +
    "," +
    data[1] +
    "," +
    data[2] +
    "," +
    data[3] / 255 +
    ")";
  color.style.background = rgba;
  color.textContent = rgba;
}
canvas.addEventListener("mousemove", pick);
```

```js
var img = new Image();
img.crossOrigin = "anonymous";
img.src = "./assets/rhino.jpg";
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
img.onload = function () {
  ctx.drawImage(img, 0, 0);
  img.style.display = "none";
};
var hoveredColor = document.getElementById("hovered-color");
var selectedColor = document.getElementById("selected-color");

function pick(event, destination) {
  var x = event.layerX;
  var y = event.layerY;
  var pixel = ctx.getImageData(x, y, 1, 1);
  var data = pixel.data;

  const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
  destination.style.background = rgba;
  destination.textContent = rgba;

  return rgba;
}

canvas.addEventListener("mousemove", function (event) {
  pick(event, hoveredColor);
});
canvas.addEventListener("click", function (event) {
  pick(event, selectedColor);
});
```

{{EmbedGHLiveSample("dom-examples/canvas/pixel-manipulation/color-picker.html", '100%', 300)}}

## 在场景中写入像素数据

你可以用 `putImageData()` 方法去对场景进行像素数据的写入。

```js
ctx.putImageData(myImageData, dx, dy);
```

dx 和 dy 参数表示你希望在场景内左上角绘制的像素数据所得到的设备坐标。

例如，为了在场景内左上角绘制 `myImageData` 代表的图片，你可以写如下的代码：

```js
ctx.putImageData(myImageData, 0, 0);
```

### 图片灰度和反相颜色

在这个例子里，我们遍历所有像素以改变他们的数值。然后我们将被修改的像素数组通过[putImageData()](/zh-CN/docs/Web/API/CanvasRenderingContext2D/putImageData) 放回到画布中去。invert 函数仅仅是去减掉颜色的最大色值 255。grayscale 函数仅仅是用红绿和蓝的平均值。你也可以用加权平均，例如 `x = 0.299r + 0.587g + 0.114b` 这个公式。更多资料请参考维基百科的[Grayscale](http://en.wikipedia.org/wiki/Grayscale)。

```html hidden
<canvas id="canvas" width="300" height="227"></canvas>
<div>
  <input id="grayscalebtn" value="Grayscale" type="button" />
  <input id="invertbtn" value="Invert" type="button" />
</div>
```

```js hidden
var img = new Image();
img.src = "rhino.jpg";
img.onload = function () {
  draw(this);
};

function draw(img) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  img.style.display = "none";
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;

  var invert = function () {
    for (var i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i]; // red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var grayscale = function () {
    for (var i = 0; i < data.length; i += 4) {
      var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var invertbtn = document.getElementById("invertbtn");
  invertbtn.addEventListener("click", invert);
  var grayscalebtn = document.getElementById("grayscalebtn");
  grayscalebtn.addEventListener("click", grayscale);
}
```

```js
var img = new Image();
img.crossOrigin = "anonymous";
img.src = "./assets/rhino.jpg";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

img.onload = function () {
  ctx.drawImage(img, 0, 0);
};

var original = function () {
  ctx.drawImage(img, 0, 0);
};

var invert = function () {
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (var i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i]; // red
    data[i + 1] = 255 - data[i + 1]; // green
    data[i + 2] = 255 - data[i + 2]; // blue
  }
  ctx.putImageData(imageData, 0, 0);
};

var grayscale = function () {
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (var i = 0; i < data.length; i += 4) {
    var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg; // red
    data[i + 1] = avg; // green
    data[i + 2] = avg; // blue
  }
  ctx.putImageData(imageData, 0, 0);
};

const inputs = document.querySelectorAll("[name=color]");
for (const input of inputs) {
  input.addEventListener("change", function (evt) {
    switch (evt.target.value) {
      case "inverted":
        return invert();
      case "grayscale":
        return grayscale();
      default:
        return original();
    }
  });
}
```

{{EmbedGHLiveSample("dom-examples/canvas/pixel-manipulation/color-manipulation.html", '100%', 300)}}

## 缩放和反锯齿

在{{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} 方法，第二个画布和{{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} 属性的帮助下，我们可以放大显示我们的图片及看到详情内容。

我们得到鼠标的位置并裁剪出距左和上 5 像素，距右和下 5 像素的图片。然后我们将这幅图复制到另一个画布然后将图片调整到我们想要的大小。在缩放画布里，我们将 10×10 像素的对原画布的裁剪调整为 200×200。

```js
zoomctx.drawImage(
  canvas,
  Math.abs(x - 5),
  Math.abs(y - 5),
  10,
  10,
  0,
  0,
  200,
  200,
);
```

因为反锯齿默认是启用的，我们可能想要关闭它以看到清楚的像素。你可以通过切换勾选框来看到 `imageSmoothingEnabled` 属性的效果（不同浏览器需要不同前缀）。

###### Zoom example

```html
<canvas id="canvas" width="300" height="227"></canvas>
<canvas id="zoom" width="300" height="227"></canvas>
<div>
  <label for="smoothbtn">
    <input type="checkbox" name="smoothbtn" checked="checked" id="smoothbtn" />
    Enable image smoothing
  </label>
</div>
```

```js
var img = new Image();
img.src = "rhino.jpg";
img.onload = function () {
  draw(this);
};

function draw(img) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  img.style.display = "none";
  var zoomctx = document.getElementById("zoom").getContext("2d");

  var smoothbtn = document.getElementById("smoothbtn");
  var toggleSmoothing = function (event) {
    zoomctx.imageSmoothingEnabled = this.checked;
    zoomctx.mozImageSmoothingEnabled = this.checked;
    zoomctx.webkitImageSmoothingEnabled = this.checked;
    zoomctx.msImageSmoothingEnabled = this.checked;
  };
  smoothbtn.addEventListener("change", toggleSmoothing);

  var zoom = function (event) {
    var x = event.layerX;
    var y = event.layerY;
    zoomctx.drawImage(
      canvas,
      Math.abs(x - 5),
      Math.abs(y - 5),
      10,
      10,
      0,
      0,
      200,
      200,
    );
  };

  canvas.addEventListener("mousemove", zoom);
}
```

{{ EmbedLiveSample('Zoom_example', 620, 490) }}

## 保存图片

{{domxref("HTMLCanvasElement")}} 提供一个 `toDataURL()` 方法，此方法在保存图片的时候非常有用。它返回一个包含被类型参数规定的图像表现格式的[数据链接](/zh-CN/docs/Web/HTTP/data_URIs)。返回的图片分辨率是 96 dpi。

- {{domxref("HTMLCanvasElement.toDataURL", "canvas.toDataURL('image/png')")}}
  - : 默认设定。创建一个 PNG 图片。
- {{domxref("HTMLCanvasElement.toDataURL", "canvas.toDataURL('image/jpeg', quality)")}}
  - : 创建一个 JPG 图片。你可以有选择地提供从 0 到 1 的品质量，1 表示最好品质，0 基本不被辨析但有比较小的文件大小。

当你从画布中生成了一个数据链接，例如，你可以将它用于任何{{HTMLElement("image")}}元素，或者将它放在一个有 download 属性的超链接里用于保存到本地。

你也可以从画布中创建一个{{domxref("Blob")}}对像。

- {{domxref("HTMLCanvasElement.toBlob", "canvas.toBlob(callback, type, encoderOptions)")}}
  - : 这个创建了一个在画布中的代表图片的 `Blob` 对像。

## 参见

- {{domxref("ImageData")}}
- [Manipulating video using canvas](/zh-CN/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Canvas, images and pixels – by Christian Heilmann](https://codepo8.github.io/canvas-images-and-pixels/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Optimizing_canvas")}}
