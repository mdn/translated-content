---
title: "ImageData: pixelFormat プロパティ"
short-title: pixelFormat
slug: Web/API/ImageData/pixelFormat
l10n:
  sourceCommit: 707183bfb6cffe53650c03e7e7c369ad089f55ae
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

読み取り専用の **`ImageData.pixelFormat`** プロパティは、画像データのピクセル形式を示す文字列です。

ピクセル形式は、[`ImageData()`](/ja/docs/Web/API/ImageData/ImageData) コンストラクターまたは [`createImageData()`](/ja/docs/Web/API/CanvasRenderingContext2D/createImageData) メソッドを使用して、`ImageData` の初期化時に設定できます。

## 値

このプロパティには、以下の値が設定可能です。

- `"rgba-unorm8"` は、各成分が 8 ビットの符号なし正規化形式の RGBA である {{jsxref("Uint8ClampedArray")}} を使用して表します。
- `"rgba-float16"` は、各成分が 16 ビットの RGBA である {{jsxref("Float16Array")}} を使用して表します。浮動小数点数のピクセル値を使用することで、任意の広さの色域や高ダイナミックレンジ (HDR) で色を表現することが可能です。

## 例

### 広色域および高ダイナミックレンジ (HDR) に対応した浮動小数点ピクセルデータ

浮動小数点型のピクセル値を使用することで、任意の広さの色域や高ダイナミックレンジ (HDR) で色を表現できます。`pixelFormat` 設定を `"rgba-float16"` に設定することで、各成分が 16 ビットの RGBA 値を使用できます。この場合、`dataArray` は {{jsxref("Float16Array")}} である必要があります。

```js
let floatArray = new Float16Array(4 * 200 * 200);
let imageData = new ImageData(floatArray, 200, 200, {
  pixelFormat: "rgba-float16",
});
console.log(imageData.pixelFormat); // "rgba-float16"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ImageData")}}
- {{jsxref("Float16Array")}}
- {{domxref("CanvasRenderingContext2D.createImageData()")}}
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
