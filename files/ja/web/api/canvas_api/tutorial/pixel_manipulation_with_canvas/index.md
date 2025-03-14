---
title: キャンバスとピクセル操作
slug: Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
l10n:
  sourceCommit: ec83af3d3b8879673fcdc49c2ed81b0ed73397fa
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Optimizing_canvas")}}

これまで、キャンバスの実際のピクセルは見てきませんでした。 `ImageData` オブジェクトを使用して、ピクセルデータを操作するためにデータ配列へ直接読み取りや書き込みを行うことが可能です。また、画像のスムージング（アンチエイリアシング）の制御方法やキャンバスの画像を保存する方法も見ていきます。

## ImageData オブジェクト

{{domxref("ImageData")}} オブジェクトは、キャンバスオブジェクトの領域にあるピクセルデータを表します。これには以下の読み取り専用プロパティがあります。

- `width`
  - : 画像の幅をピクセル数で表します。
- `height`
  - : 画像の高さをピクセル数で表します。
- `data`
  - : `0` から `255` の間の (両端の値を含む) 整数データを RGBA の順で収めた一次元配列を表す {{jsxref("Uint8ClampedArray")}} です。

`data` プロパティは、生のピクセルデータを参照するためにアクセス可能な {{jsxref("Uint8ClampedArray")}} を返します。それぞれのピクセルは 4 つの 1 バイト値（赤、緑、青、アルファの順、すなわち "RGBA" 形式）で表されます。また、それぞれの色成分は 0 から 255 の間の整数で表します。さらに、それぞれの成分は配列内で連続した添字が割り当てられており、左上のピクセルの赤色成分が配列の添字 0 になります。配列の中でピクセルは左から右へ進み、さらに下へと進んでいきます。

{{jsxref("Uint8ClampedArray")}} は `height` × `width` × 4 バイトのデータがあり、添字の範囲は 0 から (`height`×`width`×4)-1 になります。

例えば画像の 50 行目の 200 列目にあるピクセルから青色成分の値を読み取るには、以下のようにします。

```js
const blueComponent = imageData.data[50 * (imageData.width * 4) + 200 * 4 + 2];
```

指定された座標 (X と Y) を設定すると、次のようになります。

```js
const xCoord = 50;
const yCoord = 100;
const canvasWidth = 1024;

const getColorIndicesForCoord = (x, y, width) => {
  const red = y * (width * 4) + x * 4;
  return [red, red + 1, red + 2, red + 3];
};

const colorIndices = getColorIndicesForCoord(xCoord, yCoord, canvasWidth);

const [redIndex, greenIndex, blueIndex, alphaIndex] = colorIndices;
```

`Uint8ClampedArray.length` 属性を読み取ると、ピクセル配列のサイズをバイト数で知ることができます。

```js
const numBytes = imageData.data.length;
```

## ImageData オブジェクトの作成

新たに空の `ImageData` オブジェクトを作成するには、{{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} メソッドを使用します。`createImageData()` メソッドは 2 種類の形式があります。

```js
const myImageData = ctx.createImageData(width, height);
```

これは、特定の寸法の新たな `ImageData` オブジェクトを作成します。すべてのピクセルは透明な黒色（すべてがゼロ、すなわち rgb(0 0 0 / 0%)）に設定されます。

新たな `ImageData` オブジェクトを、　`anotherImageData` で指定したオブジェクトと同じ寸法で作成することもできます。新しいオブジェクトのピクセルは、すべて透明な黒色に設定されます。**画像データはコピーされません!**

```js
const myImageData = ctx.createImageData(anotherImageData);
```

## コンテキストのピクセルデータの取得

キャンバスのコンテキストのピクセルデータの複製を持つ `ImageData` オブジェクトを取得するには、`getImageData()` メソッドを使用します。

```js
const myImageData = ctx.getImageData(left, top, width, height);
```

このメソッドは (`left`,`top`)、(`left+width`, `top`)、(`left`, `top+height`)、(`left+width`, `top+height`) の点で四隅を表したキャンバスの領域のピクセルデータを表す `ImageData` オブジェクトを返します。点の座標は、キャンバスの座標空間の単位で指定します。

> [!NOTE]
> 返される `ImageData` オブジェクトで、キャンバスの外部にあるピクセルはすべて透明な黒色になります。

このメソッドは、[キャンバスを使用した動画の操作](/ja/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)の記事でも説明しています。

### カラーピッカー

この例では、マウスカーソルの下にある色を表示するために [`getImageData()`](/ja/docs/Web/API/CanvasRenderingContext2D/getImageData) メソッドを使用しています。ここでは現在のマウスカーソルの位置を求めて、[`getImageData()`](/ja/docs/Web/API/CanvasRenderingContext2D/getImageData) が提供するピクセル配列で該当位置のピクセルデータを探します。最後に、色を表示するための `<div>` で背景色とテキストを設定するために、配列データを使用します。

```js
const img = new Image();
img.crossOrigin = "anonymous";
img.src = "./assets/rhino.jpg";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
  img.style.display = "none";
});
const hoveredColor = document.getElementById("hovered-color");
const selectedColor = document.getElementById("selected-color");

function pick(event, destination) {
  const bounding = canvas.getBoundingClientRect();
  const x = event.clientX - bounding.left;
  const y = event.clientY - bounding.top;
  const pixel = ctx.getImageData(x, y, 1, 1);
  const data = pixel.data;

  const rgbColor = `rgb(${data[0]} ${data[1]} ${data[2]} / ${data[3] / 255})`;
  destination.style.background = rgbColor;
  destination.textContent = rgbColor;

  return rgbColor;
}

canvas.addEventListener("mousemove", (event) => pick(event, hoveredColor));
canvas.addEventListener("click", (event) => pick(event, selectedColor));
```

このコードの使い方は、次のライブ例で紹介します。

{{EmbedGHLiveSample("dom-examples/canvas/pixel-manipulation/color-picker.html", '100%', 300)}}

ソースコードもご覧ください。 [HTML](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/color-picker.html), [JavaScript](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/color-picker.js) です。

## コンテキストへのピクセルデータの描画

[putImageData()](/ja/docs/Web/API/CanvasRenderingContext2D/putImageData) メソッドを使用して、コンテキストにピクセルデータを描くことができます。

```js
ctx.putImageData(myImageData, dx, dy);
```

引数 `dx` と `dy` は、描画したいピクセルデータの左上の隅を描く位置を、コンテキストのデバイス座標で示します。

例えば `myImageData` が表す画像全体をコンテキストの左上の隅から描くには、単純に以下のようにします。

```js
ctx.putImageData(myImageData, 0, 0);
```

### 色のグレースケール化と反転

この例では、すべてのピクセルに対して繰り返し処理を行い、値を変更したピクセル配列を {{domxref("CanvasRenderingContext2D.putImageData", "putImageData()")}} を使ってキャンバスに戻しています。反転機能は、最大値 255 から各色を減算します。グレースケール関数は、赤、緑、青の平均値を使用します。また、例えば `x = 0.299r + 0.587g + 0.114b` という式で与えられる加重平均を使用することもできます。詳しくは Wikipedia の[グレースケール](https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%AB)をご覧ください。

```js
const img = new Image();
img.crossOrigin = "anonymous";
img.src = "./assets/rhino.jpg";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

img.onload = () => {
  ctx.drawImage(img, 0, 0);
};

const original = () => {
  ctx.drawImage(img, 0, 0);
};

const invert = () => {
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i]; // red
    data[i + 1] = 255 - data[i + 1]; // green
    data[i + 2] = 255 - data[i + 2]; // blue
  }
  ctx.putImageData(imageData, 0, 0);
};

const grayscale = () => {
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg; // red
    data[i + 1] = avg; // green
    data[i + 2] = avg; // blue
  }
  ctx.putImageData(imageData, 0, 0);
};

const inputs = document.querySelectorAll("[name=color]");
for (const input of inputs) {
  input.addEventListener("change", (evt) => {
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

このコードの使い方は、次のライブ例で紹介します。

{{EmbedGHLiveSample("dom-examples/canvas/pixel-manipulation/color-manipulation.html", '100%', 300)}}

ソースコードも利用できます。 — [HTML](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/color-manipulation.html), [JavaScript](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/color-manipulation.js)

## ズームとアンチエイリアス

{{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} メソッド、第 2 の canvas、{{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} プロパティの力を借りて、画像をズームアップして詳しく見ることができます。また、{{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} のない 3 番目のキャンバスも描画し、左右に並べて比較できるようにします。

マウスカーソルの位置を取得して、そこから上下左右に 5 ピクセルの範囲の画像を切り取ります。そして切り取った画像を別のキャンバスにコピーして、望むサイズにリサイズします。ズーム用のキャンバスでは、元のキャンバスから切り取った 10×10 ピクセルの画像を 200×200 ピクセルにリサイズしています。

```js
zoomctx.drawImage(
  canvas,
  Math.min(Math.max(0, x - 5), img.width - 10),
  Math.min(Math.max(0, y - 5), img.height - 10),
  10,
  10,
  0,
  0,
  200,
  200,
);
```

ズームの例です。

```js
const img = new Image();
img.crossOrigin = "anonymous";
img.src = "./assets/rhino.jpg";
img.onload = () => {
  draw(this);
};

function draw(img) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  const smoothedZoomCtx = document
    .getElementById("smoothed-zoom")
    .getContext("2d");
  smoothedZoomCtx.imageSmoothingEnabled = true;

  const pixelatedZoomCtx = document
    .getElementById("pixelated-zoom")
    .getContext("2d");
  pixelatedZoomCtx.imageSmoothingEnabled = false;

  const zoom = (ctx, x, y) => {
    ctx.drawImage(
      canvas,
      Math.min(Math.max(0, x - 5), img.width - 10),
      Math.min(Math.max(0, y - 5), img.height - 10),
      10,
      10,
      0,
      0,
      200,
      200,
    );
  };

  canvas.addEventListener("mousemove", (event) => {
    const x = event.layerX;
    const y = event.layerY;
    zoom(smoothedZoomCtx, x, y);
    zoom(pixelatedZoomCtx, x, y);
  });
}
```

このコードの使い方は、次のライブ例で紹介します。

{{EmbedGHLiveSample("dom-examples/canvas/pixel-manipulation/image-smoothing.html", '100%', 300)}}

ソースコードも見ることができます。 — [HTML](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/image-smoothing.html), [JavaScript](https://github.com/mdn/dom-examples/blob/main/canvas/pixel-manipulation/image-smoothing.js)

## 画像の保存

{{domxref("HTMLCanvasElement")}} は、画像を保存する際に役に立つ `toDataURL()` メソッドを提供します。これは、[データ URL](/ja/docs/Web/URI/Schemes/data) として引数 `type` で指定した形式（既定値は [PNG](https://ja.wikipedia.org/wiki/Portable_Network_Graphics)）で表した画像を返します。返される画像の解像度は 96 dpi です。

> [!NOTE]
> CORS を使用せずに他の {{Glossary("origin")}} から取得したピクセルがキャンバスに含まれている場合、キャンバスは**汚染**され、その内容を読み取ったり保存したりできなくなることに注意してください。
> [セキュリティと汚染されたキャンバス](/ja/docs/Web/HTML/CORS_enabled_image#セキュリティと汚染されたキャンバス)を参照してください。

- {{domxref("HTMLCanvasElement.toDataURL", "canvas.toDataURL('image/png')")}}
  - : 既定の設定。PNG 画像を作成します。
- {{domxref("HTMLCanvasElement.toDataURL", "canvas.toDataURL('image/jpeg', quality)")}}
  - : JPG 画像を作成します。オプションで、品質を 0 から 1 の範囲で指定できます。1 は最高品質、0 はほとんど見分けがつかなくなりますがファイルサイズを小さくできます。

キャンバスから生成したデータ URL は、例えば任意の {{HTMLElement("img")}} のソースとして使用したり、ディスクに保存するために [download 属性](/ja/docs/Web/HTML/Element/a#download)を持つハイパーリンクに投入したりすることができます。

また、キャンバスから {{domxref("Blob")}} を生成することもできます。

- {{domxref("HTMLCanvasElement.toBlob", "canvas.toBlob(_callback_, _type_, _encoderOptions_)")}}
  - : キャンバスに含まれる画像を表す `Blob` オブジェクトを作成します。

## 関連情報

- {{domxref("ImageData")}}
- [キャンバスを使用した動画の操作](/ja/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Download Canvas API-Generated Images Using toBlob](https://www.digitalocean.com/community/tutorials/js-canvas-toblob)
- [HTML5 Canvas Tutorials](https://www.html5canvastutorials.com/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Optimizing_canvas")}}
