---
title: "BarcodeDetector: getSupportedFormats() static method"
short-title: getSupportedFormats()
slug: Web/API/BarcodeDetector/getSupportedFormats_static
l10n:
  sourceCommit: e4669cf973422d9badcc54ae3d09f97286d720a3
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

{{domxref("BarcodeDetector")}} インターフェイスの静的メソッド **`getSupportedFormats()`** は、サポートされているバーコード形式の種類の {{jsxref('Array')}} を返す {{jsxref('Promise')}} を返します。

## 構文

```js-nolint
BarcodeDetector.getSupportedFormats()
```

### 引数

なし。

### 戻り値

[対応しているバーコード形式の種類](/ja/docs/Web/API/Barcode_Detection_API#対応しているバーコード形式) の配列 ({{jsxref('Array')}}) で履行される {{jsxref('Promise')}} を返します。

### 例外

例外は投げられません。

## 例

次の例では、静的メソッド `getSupportedFormats()` を呼び出し、その結果をコンソールにログ出力しています。

```js
// 対応している型をチェック
BarcodeDetector.getSupportedFormats().then((supportedFormats) => {
  supportedFormats.forEach((format) => console.log(format));
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
