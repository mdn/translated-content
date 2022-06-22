---
title: BarcodeDetector.detect()
slug: Web/API/BarcodeDetector/detect
tags:
  - バーコード検出 API
  - BarcodeDetector
  - メソッド
  - バーコード
  - 形状認識
  - 実験的
browser-compat: api.BarcodeDetector.detect
translation_of: Web/API/BarcodeDetector/detect
---
{{securecontext_header}}{{DefaultAPISidebar("Barcode Detector API")}}{{SeeCompatTable}}

**`detect()`** は {{domxref("BarcodeDetector")}} インターフェイスのメソッドで、画像内に検出されたバーコードの配列 ({{jsxref('Array')}}) で履行されるプロミス ({{jsxref('Promise')}}) を返します。

## 構文

```js
var detectedBarcode = BarcodeDetector.detect(ImageBitmapSource);
```

### 引数

- _image_
  - : 引数として `ImageBitmapSource` を受け取ります。これは{{HTMLElement('img', '要素')}}、画像型の {{domxref('Blob')}}、{{domxref('ImageData')}}オブジェクトの何れかです。

### 返値

以下のプロパティを持つ `detectedBarcode` オブジェクトの配列で履行される {{jsxref('Promise')}} を返します。

- `boundingBox`: {{domxref('DOMRectReadOnly')}} で、画像内にある検出されたバーコードの範囲を表す矩形の寸法を返します。
- `cornerPoints`: 検出されたバーコードの四隅の点の、画像に対する X および Y 座標で、左上から時計回りに算出されます。画像内の遠近感の歪みにより、正方形にならない場合があります。
- `format`: 検出されたバーコードの形式。（形式の完全な一覧については{{domxref('Barcode Detection API', 'バーコード検出 API 概要ページ', '', 1)}}を参照してください。）
- `rawValue`: バーコードデータをデコードした文字列です。

### 例外

- {{jsxref("TypeError")}}
  - : 引数が指定されていないか、 `type` が `ImageBitmapSource` のものでない場合。

## 例

この例では、 `detect()` メソッドを使用して、与えられた画像内のバーコードを検出しています。これらは繰り返し処理され、バーコードのデータはコンソールに記録されます。

```js
barcodeDetector.detect(imageEl)
  .then(barcodes => {
    barcodes.forEach(barcode => console.log(barcode.rawData));
  }
  .catch(err => {
    console.log(err);
  })
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
