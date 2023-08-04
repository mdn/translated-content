---
title: "HTMLCanvasElement: toDataURL() メソッド"
slug: Web/API/HTMLCanvasElement/toDataURL
l10n:
  sourceCommit: b0870830e4c02596ca6c501f8f8b468a917eafc2
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.toDataURL()`** メソッドは、 `type` 引数で指定された形式で画像を表現したものが入った[データ URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) を返します。

希望するファイル形式や画像品質を指定することができます。
ファイル形式を指定しなかった場合、または指定された形式に対応していない場合は、データは `image/png` として書き出されます。
言い換えれば、他のリクエストされた `type` に対して、返値が `data:image/png` で始まる場合、その形式は対応していないということです。

ブラウザーは `image/png` に対応している必要があります。多くのブラウザーは `image/jpeg` や `image/webp` などの他の形式にも対応しています。

作成する画像データの解像度は、解像度メタデータのエンコーダーに対応したファイル形式の場合、 96dpi となります。

## 構文

```js-nolint
toDataURL()
toDataURL(type)
toDataURL(type, encoderOptions)
```

### 引数

- `type` {{optional_inline}}
  - : 文字列で、画像形式を表します。
  既定の形式は `image/png` です。この形式は、指定された形式に対応していない場合にも使用されます。
- `encoderOptions` {{optional_inline}}
  - : `0` から `1` の間の数値であり、作成する画像が非可逆圧縮（`image/jpeg` や `image/webp` など）であった場合の画像品質を示します。
    このオプションが指定されなかったり、許可されている範囲外の数値であったりした場合は、ユーザーエージェントは既定の品質値を使用します。

### 返値

要求された[データ URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) の入った文字列です。

キャンバスの高さまたは幅が `0` または[キャンバスの最大サイズ](/ja/docs/Web/HTML/Element/canvas#キャンバスの最大寸法)より大きい場合、 `"data:,"` という文字列が返されます。

### 例外

- `SecurityError`
  - : キャンバスのビットマップがオリジンクリーンではありません。
    そのコンテンツの少なくとも一部が、文書そのものが読み込まれたサイトとは別のサイトから読み込まれたものであるか、その可能性があります。

## 例

このような {{HTMLElement("canvas")}} 要素を用意します

```html
<canvas id="canvas" width="5" height="5"></canvas>
```

以下のコードによりキャンバスの Data URL を取得できます。

```js
const canvas = document.getElementById("canvas");
const dataURL = canvas.toDataURL();
console.log(dataURL);
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

### JPEG の画質を設定する

```js
const fullQuality = canvas.toDataURL("image/jpeg", 1.0);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ…9oADAMBAAIRAxEAPwD/AD/6AP/Z"
const mediumQuality = canvas.toDataURL("image/jpeg", 0.5);
const lowQuality = canvas.toDataURL("image/jpeg", 0.1);
```

### 例: 動的に画像を変更

マウスイベントと連携して使用することで、画像を動的に変化させることができます（この例では、グレースケールとカラー）。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [データ URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)（[HTTP](/ja/docs/Web/HTTP) リファレンス）
