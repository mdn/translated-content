---
title: BarcodeDetector
slug: Web/API/BarcodeDetector
---

{{securecontext_header}}{{DefaultAPISidebar("Barcode Detector API")}}{{SeeCompatTable}}

**`BarcodeDetector`** は{{domxref('Barcode Detection API', 'バーコード検出 API', '', 1)}} のインターフェイスで、画像内から線形および二次元バーコードを検出できるようにします。

## コンストラクター

- {{domxref('BarcodeDetector.BarcodeDetector', 'BarcodeDetector.BarcodeDetector()')}}
  - : `BarcodeDetector` オブジェクトを作成して返します。オプションで `barcodeDetectorOptions` を指定します。

## メソッド

- {{domxref('BarcodeDetector.detect', 'detect()')}}

  - : {{jsxref('Promise')}} で、以下のプロパティを持つ `detectedBarcode` オブジェクトの配列で履行されます。

    - `boundingBox`: {{domxref('DOMRectReadOnly')}} で、画像内にある検出されたバーコードの範囲を表す矩形の寸法を返します。
    - `cornerPoints`: 検出されたバーコードの四隅の点の、画像に対する X および Y 座標で、左上から時計回りに算出されます。画像内の遠近感の歪みにより、正方形にならない場合があります。
    - `format`: 検出されたバーコードの形式。（形式の完全な一覧については{{domxref('Barcode Detection API', 'バーコード検出 API 概要ページ', '', 1)}}を参照してください。）
    - `rawValue`: バーコードデータをデコードした文字列です。

- {{domxref('BarcodeDetector.getSupportedFormats', 'getSupportedFormats()')}}
  - : {{jsxref('Promise')}} を返します。これは[対応しているバーコード形式の種類](/ja/docs/Web/API/Barcode_Detection_API#対応しているバーコード形式)の配列 ({{jsxref('Array')}}) で履行されます。

## 例

### 検出器の生成

この例では、対応している形式を指定して新しいバーコード検出器オブジェクトを作成し、ブラウザーの互換性をテストしています。

```js
// 新しい検出器の生成
var barcodeDetector = new BarcodeDetector({
  formats: ["code_39", "codabar", "ean_13"],
});

// 互換性のチェック
if (barcodeDetector) {
  console.log("Barcode Detector に対応しています。");
} else {
  console.log("Barcode Detector はこのブラウザーでは対応していません。");
}
```

### 対応している形式の取得

以下の例では、静的メソッドの `getSupportFormat()` を呼び出して、結果をコンソールへ出力します。

```js
// check supported types
BarcodeDetector.getSupportedFormats().then((supportedFormats) => {
  supportedFormats.forEach((format) => console.log(format));
});
```

### バーコードの検出

この例では、 `detect()` メソッドを使用して、与えられた画像内のバーコードを検出しています。これらは繰り返し処理され、バーコードのデータはコンソールに記録されます。

```js
barcodeDetector
  .detect(imageEl)
  .then((barcodes) => {
    barcodes.forEach((barcode) => console.log(barcode.rawData));
  })
  .catch((err) => {
    console.log(err);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [barcodefaq.com: A website with information about different barcodes and examples of the different types.](https://www.barcodefaq.com/)
- [Accelerated Shape Detection in Images](https://web.dev/shape-detection/#barcodedetector)
