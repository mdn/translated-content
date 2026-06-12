---
title: "BarcodeDetector: BarcodeDetector() コンストラクタ"
short-title: BarcodeDetector()
slug: Web/API/BarcodeDetector/BarcodeDetector
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

**`BarcodeDetector()`** コンストラクタは、画像内の線形バーコードと 2 次元バーコードを検出する新しい {{domxref("BarcodeDetector")}} （検出器）オブジェクトを作ります。

## 構文

```js-nolint
new BarcodeDetector()
new BarcodeDetector(options)
```

### 引数

- `options` {{optional_inline}}
  - : その後に呼び出される {{domxref('BarcodeDetector.detect()','detect()')}} で検索対象とする一連の `BarcodeFormats` を含んだオプションオブジェクトです。指定できるオプションは以下の通りです。
    - `formats` {{optional_inline}}
      - : バーコード形式を文字列の配列（{{jsxref('Array')}}）で指定します。
        指定しない場合、`detect()` の呼び出しはサポートされているすべての形式を調べます。
        パフォーマンスを良くするために、特定の形式に絞って指定することをお勧めします。
        サポートされている形式の完全なリストについては、[サポートされているバーコード形式](https://www.google.com/search?q=/ja/docs/Web/API/Barcode_Detection_API%23supported_barcode_formats) を参照してください。

### 例外

- {{jsxref("TypeError")}}
  - : `formats` が指定されているものの、そのパラメータが空であるか、または `unknown` が含まれている場合に発生します。

## 例

この例では、対応している形式を指定して新しいバーコード検出器オブジェクトを作成し、ブラウザーの互換性をテストしています。

```js
// 互換性のチェック
if (!("BarcodeDetector" in globalThis)) {
  console.log("Barcode Detector はこのブラウザーでは対応していません。");
} else {
  console.log("Barcode Detector supported!");

  // 新しい検出器を作る
  const barcodeDetector = new BarcodeDetector({
    formats: ["code_39", "codabar", "ean_13"],
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
