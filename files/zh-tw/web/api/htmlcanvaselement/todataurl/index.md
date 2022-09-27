---
title: HTMLCanvasElement.toDataURL()
slug: Web/API/HTMLCanvasElement/toDataURL
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.toDataURL()`** 方法回傳含有圖像和參數設置特定格式的 [data URIs](/zh-TW/docs/Web/HTTP/data_URIs) (預設 [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics)). 回傳的圖像解析度為 96 dpi.

- 如果 canvas 的高度或是寬度為 `0`, 將會回傳字串 `"data:,"`.
- 如果要求的圖像類型並非 `image/png`, 但是回傳的類型卻是 `data:image/png`, 表示要求的圖像類型並不支援.
- Chrome 也支援 `image/webp` 類型.

## 表達式

```plain
canvas.toDataURL(type, encoderOptions);
```

### 參數

- `type` {{optional_inline}}
  - : 圖像格式的 {{domxref("DOMString")}}. 預設為 `image/png`.
- `encoderOptions` {{optional_inline}}
  - : `表示 image/jpeg 或是 image/webp 的圖像品質, 為0` 到 `1` 之間的 {{jsxref("Number")}}.
    如果值不在上述範圍中, 將會使用預設值. 其他的會忽略.

### 回傳值

包含 [data URI](/zh-TW/docs/Web/HTTP/data_URIs) 的 {{domxref("DOMString")}}.

## 範例

創建 {{HTMLElement("canvas")}} 元素:

```html
<canvas id="canvas" width="5" height="5"></canvas>
```

可以使用下面的方式獲取 data-URL:

```js
var canvas = document.getElementById("canvas");
var dataURL = canvas.toDataURL();
console.log(dataURL);
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

### 設置圖像的品質

```js
var fullQuality = canvas.toDataURL("image/jpeg", 1.0);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...9oADAMBAAIRAxEAPwD/AD/6AP/Z"
var mediumQuality = canvas.toDataURL("image/jpeg", 0.5);
var lowQuality = canvas.toDataURL("image/jpeg", 0.1);
```

### 範例: 動態改變圖像

為了動態改變圖像, 可以與滑鼠事件一起使用 (gray-scale versus color in this example):

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
  for (var nWidth, nHeight, oImgData, oGrayImg, nPixel, aPix, nPixLen, nImgId = 0; nImgId < nImgsLen; nImgId++) {
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
      aPix[nPixel + 2] = aPix[nPixel + 1] = aPix[nPixel] = (aPix[nPixel] + aPix[nPixel + 1] + aPix[nPixel + 2]) / 3;
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

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- The interface defining it, {{domxref("HTMLCanvasElement")}}.
- [Data URIs](/zh-TW/docs/Web/HTTP/data_URIs) in the [HTTP](/zh-TW/docs/Web/HTTP) reference.
