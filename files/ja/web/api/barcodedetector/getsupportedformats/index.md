---
title: BarcodeDetector.getSupportedFormats()
slug: Web/API/BarcodeDetector/getSupportedFormats
tags:
  - バーコード検出 API
  - BarcodeDetector
  - メソッド
  - バーコード
  - 形状認識
  - 実験的
browser-compat: api.BarcodeDetector.getSupportedFormats
translation_of: Web/API/BarcodeDetector/getSupportedFormats
---
{{securecontext_header}}{{DefaultAPISidebar("Barcode Detector API")}}{{SeeCompatTable}}

**`getSupportedFormats()`** は {{domxref("BarcodeDetector")}} インターフェイスの静的メソッドで、対応しているバーコード形式の種類の配列 ({{jsxref('Array')}}) で履行されるプロミス ({{jsxref('Promise')}}) を返します。

## 構文

```js
var supportedFormats = BarcodeDetector.getSupportedFormats();
```

### 引数

このメソッドは引数を受け取りません。

### 返値

[対応しているバーコード形式の種類](/ja/docs/Web/API/Barcode_Detection_API#対応しているバーコード形式)の配列 ({{jsxref('Array')}}) で履行される {{jsxref('Promise')}} を返します。

### 例外

例外は発生しません。

## 例

次の例では、静的メソッド `getSupportFormat()` を呼び出し、その結果をコンソールにログ出力しています。

```js
// 対応している型をチェック
BarcodeDetector.getSupportedFormats()
  .then(supportedFormats => {
    supportedFormats.forEach(format => console.log(format));
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
