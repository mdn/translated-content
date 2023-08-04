---
title: HTMLCanvasElement.toDataURL()
slug: Web/API/HTMLCanvasElement/toDataURL
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.toDataURL()`** 方法返回一个包含图片展示的 [data URI](/zh-CN/docs/Web/HTTP/data_URIs) 。可以使用 `type` 参数其类型，默认为 [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics) 格式。图片的分辨率为 96dpi。

- 如果画布的高度或宽度是 0，那么会返回字符串“`data:,”`。
- 如果传入的类型非“`image/png`”，但是返回的值以“`data:image/png`”开头，那么该传入的类型是不支持的。
- Chrome 支持“`image/webp`”类型。

## 语法

```
canvas.toDataURL(type, encoderOptions);
```

### 参数

- `type` {{optional_inline}}
  - : 图片格式，默认为 `image/png`
- `encoderOptions` {{optional_inline}}
  - : 在指定图片格式为 `image/jpeg` 或 `image/webp` 的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 `0.92`。其他参数会被忽略。

### 返回值

包含 [data URI](/zh-CN/docs/Web/HTTP/data_URIs) 的{{domxref("DOMString")}}。

## 示例

有如下{{HTMLElement("canvas")}}元素

```html
<canvas id="canvas" width="5" height="5"></canvas>
```

可以用这样的方式获取一个 data-URL

```js
var canvas = document.getElementById("canvas");
var dataURL = canvas.toDataURL();
console.log(dataURL);
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

### 设置 jpegs 图片的质量

```js
var fullQuality = canvas.toDataURL("image/jpeg", 1.0);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...9oADAMBAAIRAxEAPwD/AD/6AP/Z"
var mediumQuality = canvas.toDataURL("image/jpeg", 0.5);
var lowQuality = canvas.toDataURL("image/jpeg", 0.1);
```

### 示例：动态更改图片

可以使用鼠标事件来动态改变图片（这个例子中改变图片灰度）。

#### HTML

```html
<img class="grayscale" src="myPicture.png" alt="Description of my picture" />
```

#### JavaScript

```js
window.addEventListener("load", removeColors);

function showColorImg() {
  this.style.display = "none";
  this.nextSibling.style.display = "inline";
}

function showGrayImg() {
  this.previousSibling.style.display = "inline";
  this.style.display = "none";
}

function removeColors() {
  var aImages = document.getElementsByClassName("grayscale"),
    nImgsLen = aImages.length,
    oCanvas = document.createElement("canvas"),
    oCtx = oCanvas.getContext("2d");
  for (
    var nWidth, nHeight, oImgData, oGrayImg, nPixel, aPix, nPixLen, nImgId = 0;
    nImgId < nImgsLen;
    nImgId++
  ) {
    oColorImg = aImages[nImgId];
    nWidth = oColorImg.offsetWidth;
    nHeight = oColorImg.offsetHeight;
    oCanvas.width = nWidth;
    oCanvas.height = nHeight;
    oCtx.drawImage(oColorImg, 0, 0);
    oImgData = oCtx.getImageData(0, 0, nWidth, nHeight);
    aPix = oImgData.data;
    nPixLen = aPix.length;
    for (nPixel = 0; nPixel < nPixLen; nPixel += 4) {
      aPix[nPixel + 2] =
        aPix[nPixel + 1] =
        aPix[nPixel] =
          (aPix[nPixel] + aPix[nPixel + 1] + aPix[nPixel + 2]) / 3;
    }
    oCtx.putImageData(oImgData, 0, 0);
    oGrayImg = new Image();
    oGrayImg.src = oCanvas.toDataURL();
    oGrayImg.onmouseover = showColorImg;
    oColorImg.onmouseout = showGrayImg;
    oCtx.clearRect(0, 0, nWidth, nHeight);
    oColorImg.style.display = "none";
    oColorImg.parentNode.insertBefore(oGrayImg, oColorImg);
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- 定义接口，{{domxref("HTMLCanvasElement")}}
- [HTTP](/zh-CN/docs/Web/HTTP)引用中的[Data URIs](/zh-CN/docs/Web/HTTP/data_URIs)
