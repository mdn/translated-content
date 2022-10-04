---
title: HTMLCanvasElement.toDataURL()
slug: Web/API/HTMLCanvasElement/toDataURL
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.toDataURL()`** メソッドは、 `type` パラメータ（デフォルトは[PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics)形式）で指定される画像フォーマット形式の [data URI](/ja/docs/Web/HTTP/data_URIs) を返すメソッドです。返り値となる画像の解像度は 96 dpi です。

- キャンバスの幅か高さが、`0` もしくは [maximum canvas size](/ja/docs/Web/HTML/Element/canvas#Maximum_canvas_size) より大きい場合、文字列 `"data:,"`を返します。
- `image/png` 形式を指定したにもかかわらず返り値が `data:image/png` で始まる場合、要求された形式には対応していません。
- Chrome は `image/webp` 形式に対応します。

## 構文

```
canvas.toDataURL(type, encoderOptions);
```

### 引数

- `type` {{optional_inline}}
  - : 画像フォーマットを示す {{domxref("DOMString")}} 。 指定しなかった場合、デフォルトのフォーマット形式は `image/png` です。
- `encoderOptions` {{optional_inline}}
  - : `0` から `1` の間の {{jsxref("Number")}} で示す、 `image/jpeg` や `image/webp` のような非可逆圧縮を使う画像フォーマットの画質です。
    この引数がその他の値だった場合、デフォルトの画質が使われます。デフォルト値は `0.92` です。その他の引数は無視されます。

### 返値

要求された[data URI](/ja/docs/Web/HTTP/data_URIs)を含む {{domxref("DOMString")}} 。

### 例外

- `SecurityError`
  - : キャンバスのビットマップが origin clean ではありません。少なくとも一部、ドキュメントがロードされたサイト以外のサイトからロードされた、またはロードされた可能性のあるコンテンツを含んでいます。（訳注：いわゆる「汚染されたキャンバス」の問題です。[画像とキャンバスをオリジン間で利用できるようにする](/ja/docs/Web/HTML/CORS_enabled_image)もあわせて参照してください）

## 例

このような {{HTMLElement("canvas")}} 要素を用意します

```html
<canvas id="canvas" width="5" height="5"></canvas>
```

以下のコードによりキャンバスの Data URL を取得できます。

```js
var canvas = document.getElementById('canvas');
var dataURL = canvas.toDataURL();
console.log(dataURL);
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

### JPEG の画質を設定する

```js
var fullQuality = canvas.toDataURL('image/jpeg', 1.0);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...9oADAMBAAIRAxEAPwD/AD/6AP/Z"
var mediumQuality = canvas.toDataURL('image/jpeg', 0.5);
var lowQuality = canvas.toDataURL('image/jpeg', 0.1);
```

### Example: Dynamically change images

You can use this technique in coordination with mouse events in order to dynamically change images (gray-scale vs. color in this example):

#### HTML

```html
<img class="grayscale" src="myPicture.png" alt="Description of my picture" />
```

#### JavaScript

```js
window.addEventListener('load', removeColors);

function showColorImg() {
  this.style.display = 'none';
  this.nextSibling.style.display = 'inline';
}

function showGrayImg() {
  this.previousSibling.style.display = 'inline';
  this.style.display = 'none';
}

function removeColors() {
  var aImages = document.getElementsByClassName('grayscale'),
      nImgsLen = aImages.length,
      oCanvas = document.createElement('canvas'),
      oCtx = oCanvas.getContext('2d');
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

## 仕様書

| Specification                                                                                                                    | Status                           | Comment                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-canvas-todataurl", "HTMLCanvasElement.toDataURL")}} | {{Spec2('HTML WHATWG')}} | No change since the latest snapshot, {{SpecName('HTML5 W3C')}}                   |
| {{SpecName('HTML5.1', "scripting-1.html#dom-canvas-todataurl", "HTMLCanvasElement.toDataURL")}} | {{Spec2('HTML5.1')}}     |                                                                                         |
| {{SpecName('HTML5 W3C', "scripting-1.html#dom-canvas-todataurl", "HTMLCanvasElement.toDataURL")}} | {{Spec2('HTML5 W3C')}}     | Snapshot of the {{SpecName('HTML WHATWG')}} containing the initial definition. |

## ブラウザーの互換性

{{Compat("api.HTMLCanvasElement.toDataURL")}}

## 関連情報

- The interface defining it, {{domxref("HTMLCanvasElement")}}.
- [Data URIs](/ja/docs/Web/HTTP/data_URIs) in the [HTTP](/ja/docs/Web/HTTP) reference.
