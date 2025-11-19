---
title: HTMLCanvasElement：toDataURL() 方法
slug: Web/API/HTMLCanvasElement/toDataURL
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.toDataURL()`** 方法會返回包含影像表示的[數據 URL](/zh-TW/docs/Web/URI/Reference/Schemes/data)，格式由參數 `type` 指定。

可以指定所需的檔案格式和影像品質。如果未指定檔案格式，或者指定的格式不受支援，則數據會以 `image/png` 格式匯出。換句話說，如果對於任何其他類型（type）的請求地返回值是以 `data:image/png` 開頭，則表示該格式不受支援。

瀏覽器必須支援 `image/png` 格式；許多瀏覽器也會支援額外的格式，例如 `image/jpeg` 和 `image/webp`。

對於支援編碼解析度中繼資料的檔案格式，創建的影像數據將有 96dpi 的解析度。

> [!WARNING]
> `toDataURL()` 會將整個影像編碼為一個內存字串。對於較大的影像，這可能會帶來效能問題，甚至在指定給 {{domxref("HTMLImageElement.src")}} 時超過瀏覽器的 URL 長度限制。建議一般使用 [`toBlob()`](/zh-TW/docs/Web/API/HTMLCanvasElement/toBlob)，並搭配 {{domxref("URL/createObjectURL_static", "URL.createObjectURL()")}}。

## 語法

```js-nolint
toDataURL()
toDataURL(type)
toDataURL(type, quality)
```

### 參數

- `type` {{optional_inline}}
  - : 表示影像格式的字串。預設格式為 `image/png`；如果指定的格式不支援，也會使用此格式。
- `quality` {{optional_inline}}
  - : 一個介於 `0` 和 `1` 之間的 {{jsxref("Number")}}，表示創建有損壓縮格式（如 `image/jpeg` 或 `image/webp`）影像時所用的影像品質。如果未指定此選項或數值超出允許範圍，則用戶代理將使用預設的品質值。

### 返回值

包含請求的[數據 URL](/zh-TW/docs/Web/URI/Reference/Schemes/data) 的字串。

如果畫布的高度或寬度為 `0`，或超過[畫布的最大尺寸](/zh-TW/docs/Web/HTML/Reference/Elements/canvas#最大畫布尺寸)，將返回字串 `"data:,"`。

### 例外

- `SecurityError`
  - : 當畫布的點陣圖非來源乾淨，或其內容有部分可能來自與載入的文件本身不同的網站時。

## 範例

以下是此 {{HTMLElement("canvas")}} 元素：

```html
<canvas id="canvas" width="5" height="5"></canvas>
```

可以使用以下程式碼取得該畫布的數據 URL：

```js
const canvas = document.getElementById("canvas");
const dataURL = canvas.toDataURL();
console.log(dataURL);
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

### 設定 jpeg 格式的影像品質

```js
const fullQuality = canvas.toDataURL("image/jpeg", 1.0);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ…9oADAMBAAIRAxEAPwD/AD/6AP/Z"
const mediumQuality = canvas.toDataURL("image/jpeg", 0.5);
const lowQuality = canvas.toDataURL("image/jpeg", 0.1);
```

### 範例：動態變更影像

可以搭配滑鼠事件，動態更改影像（例如切換為灰階或彩色影像）。

#### HTML

```html
<img class="grayscale" src="myPicture.png" alt="我的圖片描述" />
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
  const images = document.getElementsByClassName("grayscale");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  for (const colorImg of images) {
    const width = colorImg.offsetWidth;
    const height = colorImg.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(colorImg, 0, 0);
    const imgData = ctx.getImageData(0, 0, width, height);
    const pix = imgData.data;
    const pixLen = pix.length;
    for (let pixel = 0; pixel < pixLen; pixel += 4) {
      pix[pixel + 2] =
        pix[pixel + 1] =
        pix[pixel] =
          (pix[pixel] + pix[pixel + 1] + pix[pixel + 2]) / 3;
    }
    ctx.putImageData(imgData, 0, 0);
    const grayImg = new Image();
    grayImg.src = canvas.toDataURL();
    grayImg.onmouseover = showColorImg;
    colorImg.onmouseout = showGrayImg;
    ctx.clearRect(0, 0, width, height);
    colorImg.style.display = "none";
    colorImg.parentNode.insertBefore(grayImg, colorImg);
  }
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP](/zh-TW/docs/Web/HTTP) 參考中的[數據 URL](/zh-TW/docs/Web/URI/Reference/Schemes/data)。
