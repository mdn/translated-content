---
title: ImageData
slug: Web/API/ImageData
---

{{APIRef("Canvas API")}}

**`ImageData`** インターフェイスは、{{HTMLElement("canvas")}} 要素の領域の基礎をなすピクセルデータを表します。{{domxref("ImageData.ImageData", "ImageData()")}} コンストラクターや、canvas に関連付けられた {{domxref("CanvasRenderingContext2D")}} オブジェクトの {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} メソッドおよび {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} メソッドによって生成されます。`ImageData` は {{domxref("CanvasRenderingContext2D.putImageData", "putImageData()")}} メソッドによって canvas の一部を設定するのにも利用可能です。

{{AvailableInWorkers}}

## コンストラクター

- {{domxref("ImageData.ImageData", "ImageData()")}}
  - : 指定した {{jsxref("Uint8ClampedArray")}} と、それに含まれる画像のサイズから `ImageData` オブジェクトを生成します。配列を指定しない場合は、透明な黒色の長方形の画像を生成します。worker では {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} を使用できませんので、worker でこのようなオブジェクトを生成するためのもっとも一般的な手段です。

## インスタンスプロパティ

- {{domxref("ImageData.data")}} {{ReadOnlyInline}}
  - : RGBA の順で `0` から `255` の間の整数 (両端の値を含む) を並べたデータを持つ 1 次元配列を表す {{jsxref("Uint8ClampedArray")}} です。データは行単位で、左上のピクセルから右下のピクセルに向かう順で格納されます。
- {{domxref("ImageData.colorSpace")}} {{ReadOnlyInline}}
  - : 画像データの色空間を表す文字列です。
- {{domxref("ImageData.height")}} {{ReadOnlyInline}}
  - : `ImageData` の実際の高さをピクセル数で表す `unsigned long` です。
- {{domxref("ImageData.width")}} {{ReadOnlyInline}}
  - : `ImageData` の実際の幅をピクセル数で表す `unsigned long` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CanvasRenderingContext2D")}}
- {{HTMLElement("canvas")}} 要素と、関連付けられたインターフェイスである {{domxref("HTMLCanvasElement")}}。
