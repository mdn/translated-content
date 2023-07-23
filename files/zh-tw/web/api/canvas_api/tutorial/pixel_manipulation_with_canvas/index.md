---
title: Pixel manipulation with canvas
slug: Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility")}}

直到目前為止，我們還沒真正了解 pixels 在 canvas 上的運用。使用`ImageData`物件，可直接對 pixel 裡的陣列資料**讀(read)**和**寫(write)**。在接下的內容中，也可了解到如何使影像平滑化(反鋸齒)及如何將影像保存在 canvas 之中。

## `ImageData`物件

{{domxref("ImageData")}} 物件代表 canvas 區中最基礎的像素。

包含它只可讀的屬性:

- `width`
  - : 影像中的寬度，以 pixels 為單位
- `height`
  - : 影像中的高度，以 pixels 為單位
- `data`
  - : {{jsxref("Uint8ClampedArray")}} 代表一維陣列包含 RGBA 格式。整數值介於 0 到 255 之間(包含 255)。

`data` 屬性返回一個{{jsxref("Uint8ClampedArray")}}，它可被當作為 pixel 的初始資料。每個 pixel 用 4 個 1byte 值做代表分別為**紅**，**綠**，**藍**，**透明值**(也就是**RGBA**格式)。每個顏色組成皆是介於整數值介於 0 到 255 之間。而每個組成在一個陣列中被分配為一個連續的索引。從左上角 pixel 的紅色組成中的陣列由**索引 0** 為始。Pixels 執行順序為從左到右,再由上到下,直到整個陣列。

{{jsxref("Uint8ClampedArray")}} 包含`height` × `width`× 4 bytes 的資料,同索引值從 0 到 (`height`×`width`×4)-1

例如,讀取影像的藍色組成的值。從 pixel 的第 200 欄、第 50 行，你可以照著下面的步驟:

```js
blueComponent = imageData.data[50 * (imageData.width * 4) + 200 * 4 + 2];
```

使用`Uint8ClampedArray.length`屬性來讀取影像 pixel 的陣列大小

```js
var numBytes = imageData.data.length;
```

## 創造一個 `ImageData`物件

可以使用{{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}}方法創造一個全新空白的`ImageData` 物件。

這裡有兩種`createImageData()`的方法:

```js
var myImageData = ctx.createImageData(width, height);
```

這個方法是有規定大小尺寸.所有 pixels 預設是透明的黑色。

下面的方法一樣是由`anotherImageData`參考尺寸大小，由`ImageData` 物件創造一個與新的一樣的大小。這些新的物件的 pixel 皆預設為透明的黑色。

```js
var myImageData = ctx.createImageData(anotherImageData);
```

## 得到 pixel 資料的內容

可以使用`getImageData()`這個方法，去取得 canvas 內容中`ImageData` 物件的資料含 pixel 數據(data)

```js
var myImageData = ctx.getImageData(left, top, width, height);
```

這個方法會返回`ImageData`物件，它代表著在這 canvas 區域之中 pixel 的數據(data) 。從各角落的點代表著 (`left`,`top`), (`left+width`, `top`), (`left`, `top+height`), and (`left+width`, `top+height`)。這些作標被設定為 canvas 的空間座標單位。

> **備註：** 在`ImageData` 物件中，任何超出 canvas 外的 pixels 皆會返回透明的黑色的形式。

這個方法也被展示在[使用 canvas 操作影像](/zh-TW/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)之中。

### 調色盤

這個範例使用[getImageData()](/zh-TW/docs/Web/API/CanvasRenderingContext2D/getImageData) 方法去顯示在鼠標下的顏色。

首先，需要一個正確的滑鼠點`layerX` 和 `layerY`。在從[getImageData()](/zh-TW/docs/Web/API/CanvasRenderingContext2D/getImageData) 提供 pixel 陣列中(array)該點的 pixel 數據(data) 。最後，使用陣列數據(array data)在`<div>`中設置背景色和文字去顯示該色。

```html hidden
<canvas id="canvas" width="300" height="227" style="float:left"></canvas>
<div id="color" style="width:200px;height:50px;float:left"></div>
```

```js
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
    ", " +
    data[1] +
    ", " +
    data[2] +
    ", " +
    data[3] / 255 +
    ")";
  color.style.background = rgba;
  color.textContent = rgba;
}
canvas.addEventListener("mousemove", pick);
```

{{ EmbedLiveSample('調色盤', 610, 240) }}

## 在內容中寫入 pixel 資料

可以使用[putImageData()](/zh-TW/docs/Web/API/CanvasRenderingContext2D/putImageData) 方法將自訂 pixel 數據(data) 放入內容中:

```js
ctx.putImageData(myImageData, dx, dy);
```

`dx` 和 `dy`參數表示填入你所希望的座標，將它代入內容中左上角的 pixel 數據(data)。

For example, to paint the entire image represented by `myImageData` to the top left corner of the context, you can simply do the following:

```js
ctx.putImageData(myImageData, 0, 0);
```

### 灰階和負片效果

In this example we iterate over all pixels to change their values, then we put the modified pixel array back to the canvas using [putImageData()](/zh-TW/docs/Web/API/CanvasRenderingContext2D/putImageData). The invert function simply subtracts each color from the max value 255. The grayscale function simply uses the average of red, green and blue. You can also use a weighted average, given by the formula `x = 0.299r + 0.587g + 0.114b`, for example. See [Grayscale](http://en.wikipedia.org/wiki/Grayscale) on Wikipedia for more information.

```html hidden
<canvas id="canvas" width="300" height="227"></canvas>
<div>
  <input id="grayscalebtn" value="Grayscale" type="button" />
  <input id="invertbtn" value="Invert" type="button" />
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

{{ EmbedLiveSample('灰階和負片效果', 330, 270) }}

## 放大和平滑化(反鋸齒)

With the help of the {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} method, a second canvas and the {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} property, we are able to zoom into our picture and see the details.

We get the position of the mouse and crop an image of 5 pixels left and above to 5 pixels right and below. Then we copy that one over to another canvas and resize the image to the size we want it to. In the zoom canvas we resize a 10×10 pixel crop of the original canvas to 200×200.

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

Because anti-aliasing is enabled by default, we might want to disable the smoothing to see clear pixels. You can toggle the checkbox to see the effect of the `imageSmoothingEnabled` property (which needs prefixes for different browsers).

### Zoom example

```html hidden
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

## 儲存圖片

The {{domxref("HTMLCanvasElement")}} provides a `toDataURL()` method, which is useful when saving images. It returns a [data URI](/zh-TW/docs/Web/HTTP/data_URIs) containing a representation of the image in the format specified by the `type` parameter (defaults to [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics)). The returned image is in a resolution of 96 dpi.

- {{domxref("HTMLCanvasElement.toDataURL", "canvas.toDataURL('image/png')")}}
  - : Default setting. Creates a PNG image.
- {{domxref("HTMLCanvasElement.toDataURL", "canvas.toDataURL('image/jpeg', quality)")}}
  - : Creates a JPG image. Optionally, you can provide a quality in the range from 0 to 1, with one being the best quality and with 0 almost not recognizable but small in file size.

Once you have generated a data URI from you canvas, you are able to use it as the source of any {{HTMLElement("image")}} or put it into a hyper link with a [download attribute](/zh-TW/docs/Web/HTML/Element/a#download) to save it to disc, for example.

You can also create a {{domxref("Blob")}} from the canvas.

- {{domxref("HTMLCanvasElement.toBlob", "canvas.toBlob(callback, type, encoderOptions)")}}
  - : Creates a `Blob` object representing the image contained in the canvas.

## 延伸閱讀

- {{domxref("ImageData")}}
- [Manipulating video using canvas](/zh-TW/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Canvas, images and pixels – by Christian Heilmann](https://codepo8.github.io/canvas-images-and-pixels/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility")}}
