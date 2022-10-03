---
title: ImageData
slug: Web/API/ImageData
---

{{APIRef("Canvas API")}}

**`ImageData`** インターフェイスは、{{HTMLElement("canvas")}} 要素の領域の基礎をなすピクセルデータを表します。{{domxref("ImageData.ImageData", "ImageData()")}} コンストラクターや、canvas に関連付けられた {{domxref("CanvasRenderingContext2D")}} オブジェクトの {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} メソッドおよび {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} メソッドによって生成されます。`ImageData` は {{domxref("CanvasRenderingContext2D.putImageData", "putImageData()")}} メソッドの第 1 引数として利用可能です。

## コンストラクター

- {{domxref("ImageData.ImageData", "ImageData()")}} {{experimental_inline}}
  - : 指定した {{jsxref("Uint8ClampedArray")}} と、それに含まれる画像のサイズから `ImageData` オブジェクトを生成します。配列を指定しない場合は、黒色の長方形の画像を生成します。worker では {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} を使用できませんので、worker でこのようなオブジェクトを生成するためのもっとも一般的な手段です。

## プロパティ

- {{domxref("ImageData.data")}} {{readonlyInline}}
  - : RGBA の順で `0` から `255` の間の整数 (両端の値を含む) を並べたデータを持つ 1 次元配列を表す {{jsxref("Uint8ClampedArray")}} です。
- {{domxref("ImageData.height")}} {{readonlyInline}}
  - : `ImageData` の実際の高さをピクセル数で表す `unsigned` `long` です。
- {{domxref("ImageData.width")}} {{readonlyInline}}
  - : `ImageData` の実際の幅をピクセル数で表す `unsigned` `long` です。

## 仕様

| 仕様書                                                                                                   | 策定状況                         | コメント |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "the-canvas-element.html#imagedata", "ImageData")}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザー実装状況

{{Compat("api.ImageData")}}

## 関連情報

- {{domxref("CanvasRenderingContext2D")}}
- {{HTMLElement("canvas")}} 要素と、関連付けられたインターフェイスである {{domxref("HTMLCanvasElement")}}。
