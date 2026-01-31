---
title: HTMLCanvasElement：toDataURL() 方法
short-title: toDataURL()
slug: Web/API/HTMLCanvasElement/toDataURL
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.toDataURL()`** 方法會回傳一個包含圖片展示的[資料 URL](/zh-TW/docs/Web/URI/Reference/Schemes/data)，其格式由 `type` 參數指定。

可以指定想要的檔案格式與圖片品質。若未指定檔案格式，或不支援給定的格式，則資料會匯出為 `image/png`。換句話說，如果對任何其他請求的 `type` 回傳值是以 `data:image/png` 開頭，則表示不支援該格式。

瀏覽器必須支援 `image/png`；許多瀏覽器也支援其他格式，包含 `image/jpeg` 與 `image/webp`。

對於支援編碼解析度後設資料的檔案格式，建立的圖片資料解析度將為 96dpi。

> [!WARNING]
> `toDataURL()` 會將整張圖片編碼為記憶體內的字串。對於較大的圖片，這可能會影響效能，且在指派給 {{domxref("HTMLImageElement.src")}} 時，甚至可能超出瀏覽器的 URL 長度限制。你通常應該優先使用 [`toBlob()`](/zh-TW/docs/Web/API/HTMLCanvasElement/toBlob) 搭配 {{domxref("URL/createObjectURL_static", "URL.createObjectURL()")}} 來代替。

## 語法

```js-nolint
toDataURL()
toDataURL(type)
toDataURL(type, quality)
```

### 參數

- `type` {{optional_inline}}
  - : 指示圖片格式的字串。預設類型為 `image/png`；若不支援指定的類型，也會使用此圖片格式。
- `quality` {{optional_inline}}
  - : 一個 `0` 到 `1` 之間的 {{jsxref("Number")}}，指示在使用支援失真壓縮的檔案格式（如 `image/jpeg` 或 `image/webp`）建立圖片時所使用的圖片品質。若未指定此選項，或數值超出允許範圍，使用者代理將使用其預設的品質數值。

### 回傳值

包含請求 [data URL](/zh-TW/docs/Web/URI/Reference/Schemes/data) 的字串。

若畫布的高度或寬度為 `0` 或大於[最大畫布尺寸](/zh-TW/docs/Web/HTML/Reference/Elements/canvas#最大畫布尺寸)，則回傳字串 `"data:,"`。

### 例外

- `SecurityError`
  - : 畫布的點陣圖不是來源乾淨的；其內容至少有一部分是（或可能是）從文件本身載入來源以外的網站載入的。

## 範例

給定這個 {{HTMLElement("canvas")}} 元素：

```html
<canvas id="canvas" width="5" height="5"></canvas>
```

你可以用下列程式碼取得畫布的資料 URL：

```js
const canvas = document.getElementById("canvas");
const dataURL = canvas.toDataURL();
console.log(dataURL);
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

### 設定 jpeg 的圖片品質

```js
const fullQuality = canvas.toDataURL("image/jpeg", 1.0);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ…9oADAMBAAIRAxEAPwD/AD/6AP/Z"
const mediumQuality = canvas.toDataURL("image/jpeg", 0.5);
const lowQuality = canvas.toDataURL("image/jpeg", 0.1);
```

### 範例：動態變更圖片

你可以搭配滑鼠事件使用此技術，以動態變更圖片（此範例為灰階與彩色的切換）：

#### HTML

```html
<img class="grayscale" src="myPicture.png" alt="我的圖片描述" />
```

#### JavaScript

```js
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

removeColors();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP](/zh-TW/docs/Web/HTTP) 參考文件中的[資料 URL](/zh-TW/docs/Web/URI/Reference/Schemes/data)。
