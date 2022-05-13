---
title: BarcodeDetector()
slug: Web/API/BarcodeDetector/BarcodeDetector
tags:
  - バーコード検出 API
  - BarcodeDetector
  - コンストラクター
  - barcode
  - バーコード検出
  - 形状認識
  - 実験的
browser-compat: api.BarcodeDetector.BarcodeDetector
translation_of: Web/API/BarcodeDetector/BarcodeDetector
---
{{securecontext_header}}{{DefaultAPISidebar("Barcode Detector API")}}{{SeeCompatTable}}

**`BarcodeDetector()`** コンストラクターは、線形および二次元バーコードを画像から検出する新しい {{domxref("BarcodeDetector")}} （検出器）オブジェクトを生成します。

## 構文

```js
new BarcodeDetector();
```

### 引数

- _barcodeDetectorOptions_ {{optional_inline}}

  - : 後続の {{domxref('BarcodeDetector.detect()','detect()')}} 呼び出しで検索する一連の `BarcodeFormats` を含むオプションオブジェクトです。オプションは以下の通りです。

    - `formats`: バーコードの形式を文字列で表した {{jsxref('Array')}} です。対応している形式の完全な一覧は{{domxref('Barcode Detection API','バーコード検出 API の概要ページ','',1)}}を参照してください。

## 例

この例では、対応している形式を指定して新しいバーコード検出器オブジェクトを作成し、ブラウザーの互換性をテストしています。

```js
// 新しい検出器を生成
var barcodeDetector = new BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13']});

// 互換性のチェック
if (barcodeDetector) {
  console.log('Barcode Detector に対応しています。');
} else {
  console.log('Barcode Detector はこのブラウザーでは対応していません。');
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
