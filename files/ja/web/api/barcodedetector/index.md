---
title: BarcodeDetector
slug: Web/API/BarcodeDetector
l10n:
  sourceCommit: e4669cf973422d9badcc54ae3d09f97286d720a3
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

**`BarcodeDetector`** は {{domxref('Barcode Detection API', '', '', 'nocode')}} のインターフェイスで、画像内から線形および 2 次元バーコードを検出できるようにします。

## コンストラクタ

- {{domxref('BarcodeDetector.BarcodeDetector', 'BarcodeDetector.BarcodeDetector()')}} {{Experimental_Inline}}
  - : `BarcodeDetector` オブジェクトを作成し、オプションの `BarcodeDetectorOptions` とともに返します。

## 静的メソッド

- {{domxref('BarcodeDetector.getSupportedFormats', 'getSupportedFormats()')}}
  - : {{jsxref('Promise')}} を返します。これは [対応しているバーコード形式の種類](/ja/docs/Web/API/Barcode_Detection_API#対応しているバーコード形式) の配列 ({{jsxref('Array')}}) で満たされています。

## インスタンスメソッド

- {{domxref('BarcodeDetector.detect', 'detect()')}}
  - : {{jsxref('Promise')}} で、以下のプロパティを持つ `detectedBarcode` オブジェクトの配列で解決されます。
    - `boundingBox`: {{domxref('DOMRectReadOnly')}} で、画像内にある検出されたバーコードの範囲を表す矩形の寸法を返します。
    - `cornerPoints`: 検出されたバーコードの四隅の点の、画像に対する X および Y 座標で、左上から時計回りに算出されます。画像内の遠近感の歪みにより、正方形にならない場合があります。
    - `format`: 検出されたバーコードの形式。（形式の完全な一覧については {{domxref('Barcode Detection API', 'バーコード検出 API 概要ページ', '', 1)}} を参照してください。）
    - `rawValue`: バーコードデータをデコードした文字列です。

## 例

### 検出器の生成

この例では、対応している形式を指定して新しいバーコード検出器オブジェクトを作成し、ブラウザーの互換性をテストしています。

```js
// 互換性のチェック
if (!("BarcodeDetector" in globalThis)) {
  console.log("Barcode Detector はこのブラウザーでは対応していません。");
} else {
  console.log("Barcode Detector に対応しています。");

  // create new detector
  const barcodeDetector = new BarcodeDetector({
    formats: ["code_39", "codabar", "ean_13"],
  });
}
```

### 対応している形式の取得

以下の例では、静的メソッドの `getSupportedFormats()` を呼び出して、結果をコンソールへ出力します。

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
    barcodes.forEach((barcode) => console.log(barcode.rawValue));
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

- [barcodefaq.com：さまざまなバーコードに関する情報と、それぞれの種類の例を掲載したウェブサイト。](https://www.barcodefaq.com/)
- [画像内の高速形状検出](https://developer.chrome.com/docs/capabilities/shape-detection#barcodedetector)
