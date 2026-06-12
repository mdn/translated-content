---
title: "BarcodeDetector: detect() メソッド"
short-title: detect()
slug: Web/API/BarcodeDetector/detect
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

**`detect()`** は {{domxref("BarcodeDetector")}} インターフェイスのメソッドで、画像内に検出されたバーコードの配列 ({{jsxref('Array')}}) で解決されるプロミス ({{jsxref('Promise')}}) を返します。

## 構文

```js-nolint
detect(imageBitmapSource)
```

### 引数

- `imageBitmapSource`
  - : 画像ソースをパラメータとして受け取ります。これは、{{domxref("HTMLImageElement")}}、{{domxref("SVGImageElement")}}、{{domxref("HTMLVideoElement")}}、{{domxref("HTMLCanvasElement")}}、{{domxref("ImageBitmap")}}、{{domxref("OffscreenCanvas")}}、{{domxref("VideoFrame")}}、画像型の {{domxref('Blob')}}、または {{domxref('ImageData')}} オブジェクトのいずれかです。

### 戻り値

以下のプロパティを持つ `detectedBarcode` オブジェクトの配列で解決される {{jsxref('Promise')}} を返します。

- `boundingBox`
  - : {{domxref('DOMRectReadOnly')}} 。検出されたバーコードの範囲を表す矩形の寸法を、画像に合わせて返します。
- `cornerPoints`
  : 検出されたバーコードの 4 つの角の x と y 座標。
  左上から時計回りの順で、画像に対する相対座標です。
  画像内の遠近歪みにより、正方形にならない場合があります。
- `format`
  - : 検出されたバーコードの形式。（形式の完全な一覧は [バーコード検出 API 概要ページ'](/ja/docs/Web/API/Barcode_Detection_API#supported_barcode_formats) を参照してください。）
- `rawValue`
  - : バーコードデータをデコードした文字列です。

### 例外

- {{jsxref("TypeError")}}
  - : パラメータが指定されていない場合、または `type` が `ImageBitmapSource` の型でない場合。
- `SecurityError` {{domxref("DOMException")}}
  - : `imageBitmapSource` にオリジンがあり、それがドキュメントのオリジンと異なる場合、または `imageBitmapSource` が {{domxref('HTMLCanvasElement')}} であり、その [origin-clean](https://html.spec.whatwg.org/multipage/canvas.html#concept-canvas-origin-clean) フラグが `false` に設定されている場合。
- `InvalidStateError` {{domxref("DOMException")}}
  - : `imageBitmapSource` が {{domxref('HTMLImageElement')}} であり、完全にデコードされていないか、デコードに失敗した場合にスローされます。または、`imageBitmapSource` が {{domxref('HTMLVideoElement')}} であり、その {{domxref('HTMLMediaElement.readyState', 'readyState')}} が `HAVE_NOTHING` または `HAVE_METADATA` の場合にもスローされます。

## 例

この例では、 `detect()` メソッドを使用して、与えられた画像内のバーコードを検出しています。これらは繰り返し処理され、バーコードのデータはコンソールに記録されます。

```js
barcodeDetector
  .detect(imageEl)
  .then((barcodes) => {
    barcodes.forEach((barcode) => console.log(barcode.rawValue));
  })
  .catch((err) => {
    console.error(err);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
