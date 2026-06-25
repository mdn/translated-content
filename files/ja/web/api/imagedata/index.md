---
title: ImageData
slug: Web/API/ImageData
l10n:
  sourceCommit: eba7ce08cf50c5d9e344652748f6bcfb19f3a396
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`ImageData`** インターフェイスは、{{HTMLElement("canvas")}} 要素の領域の基礎をなすピクセルデータを表します。

{{domxref("ImageData.ImageData", "ImageData()")}} コンストラクターや、キャンバスに関連付けられた {{domxref("CanvasRenderingContext2D")}} オブジェクトの {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} メソッドおよび {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} メソッドによって生成されます。`ImageData` は {{domxref("CanvasRenderingContext2D.putImageData", "putImageData()")}} メソッドによってキャンバスの一部を設定するのにも利用可能です。

## コンストラクター

- {{domxref("ImageData.ImageData", "ImageData()")}}
  - : `ImageData` オブジェクトを、指定した {{jsxref("Uint8ClampedArray")}} または {{jsxref("Float16Array")}} と、それに含まれる画像のサイズから生成します。配列を指定しない場合は、透明な黒色の長方形の画像を生成します。ワーカーでは {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} が使用できませんので、ワーカーでこのようなオブジェクトを生成するためのもっとも一般的な手段です。

## インスタンスプロパティ

- {{domxref("ImageData.data")}} {{ReadOnlyInline}}
  - : {{jsxref("Uint8ClampedArray")}} または {{jsxref("Float16Array")}} で、RGBA の順でデータが格納された一次元配列を表します。データは行単位で、左上のピクセルから右下のピクセルに向かう順で格納されます。
- {{domxref("ImageData.colorSpace")}} {{ReadOnlyInline}}
  - : 画像データの色空間を表す文字列です。
- {{domxref("ImageData.height")}} {{ReadOnlyInline}}
  - : この `ImageData` の実際の高さをピクセル数で表す `unsigned long` です。
- {{domxref("ImageData.width")}} {{ReadOnlyInline}}
  - : この `ImageData` の実際の幅をピクセル数で表す `unsigned long` です。
- {{domxref("ImageData.pixelFormat")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 文字列で、`ImageData` で使用する形式を示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CanvasRenderingContext2D")}}
- {{HTMLElement("canvas")}} 要素と、関連付けられたインターフェイスである {{domxref("HTMLCanvasElement")}}。
