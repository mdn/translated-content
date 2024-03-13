---
title: "ImageData: ImageData() コンストラクター"
slug: Web/API/ImageData/ImageData
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Canvas API")}}

**`ImageData()`** コンストラクターは、渡された型付き配列から構築され、指定された幅と高さを持つ新規生成された {{domxref('ImageData')}} オブジェクトを返します。

このコンストラクターは、{{domxref('Worker')}} 内でこのようなオブジェクトを生成するのに良い方法です。

## 構文

```js-nolint
new ImageData(width, height)
new ImageData(width, height, settings)

new ImageData(dataArray, width)
new ImageData(dataArray, width, height)
new ImageData(dataArray, width, height, settings)
```

### 引数

- `width`
  - : 画像の幅を表す `unsigned long` 値です。
- `height`
  - : 画像の高さを表す `unsigned long` 値です。配列を渡す場合この値は省略可能で、配列のサイズと指定された幅から計算されます。
- `settings` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `colorSpace`: 画像データの色空間を指定します。[sRGB 色空間](https://ja.wikipedia.org/wiki/%E8%89%B2%E7%A9%BA%E9%96%93#RGB)を表す `"srgb"` または [display-p3 色空間](https://ja.wikipedia.org/wiki/DCI-P3)を表す `"display-p3"` を設定できます。
- `dataArray`
  - : 画像のピクセル表現が入った {{jsxref("Uint8ClampedArray")}} です。この配列を渡さない場合は、指定の `width` と `height` をもつ透明な黒の長方形画像が生成されます。

### 返値

新しい {{domxref('ImageData')}} オブジェクトを返します。

### 投げられるエラー

- `IndexSizeError` {{domxref("DOMException")}}
  - : `array` が指定され、その要素数が `(4 * width)` の倍数でも `(4 * width * height)` の倍数でもないとき投げられます。

## 例

### 空の ImageData オブジェクトを生成する

この例は、幅 200 ピクセル、高さ 100 ピクセルの `ImageData` オブジェクトを生成します。全部で 20,000 ピクセルあります。

```js
let imageData = new ImageData(200, 100);
// ImageData { width: 200, height: 100, data: Uint8ClampedArray[80000] }
```

### display-p3 色空間を用いる ImageData

この例では、[display-p3 色空間](https://ja.wikipedia.org/wiki/DCI-P3)を用いる `ImageData` オブジェクトを生成します。

```js
let imageData = new ImageData(200, 100, { colorSpace: "display-p3" });
```

### 配列を用いて ImageData を初期化する

この例では、配列で定義されたピクセルカラーを持つ `ImageData` オブジェクトを生成します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

ここで用いる配列 (`arr`) の要素数は `40000` です。10,000 ピクセルあり、各ピクセルは 4 個の値で定義されます。`ImageData` のコンストラクターで新しいオブジェクトの `width` を `200` に設定しているので、`height` のデフォルト値は 10,000 を 200 で割った値 `50` になります。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const arr = new Uint8ClampedArray(40_000);

// 配列を同じ RGBA 値で埋める
for (let i = 0; i < arr.length; i += 4) {
  arr[i + 0] = 0; // R 値
  arr[i + 1] = 190; // G 値
  arr[i + 2] = 0; // B 値
  arr[i + 3] = 255; // A 値
}

// 新しい ImageData オブジェクトを初期化する
let imageData = new ImageData(arr, 200);

// 画像データをキャンバスに描画する
ctx.putImageData(imageData, 20, 20);
```

#### 結果

{{EmbedLiveSample('Initializing_ImageData_with_an_array', 700, 180)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- ワーカー外で用いることができる生成メソッド {{domxref("CanvasRenderingContext2D.createImageData()")}}
