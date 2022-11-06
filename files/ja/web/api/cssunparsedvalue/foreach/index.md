---
title: CSSUnparsedValue.forEach()
slug: Web/API/CSSUnparsedValue/forEach
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

**`CSSUnparsedValue.forEach()`** メソッドは、指定された関数を、 {{domxref('CSSUnparsedValue')}} オブジェクトのそれぞれの要素に対して実行します。

## 構文

```
CSSUnparsedValue.forEach(function callback(currentValue[, index[, array]]) {
    // your iterator
}[, thisArg]);
```

### 引数

- `callback`

  - : それぞれの要素について呼び出される関数で、三つの引数を取ります。

    - `currentValue`
      - : 処理中の現在の要素の値。
    - `index`{{optional_inline}}
      - : 処理中の現在の要素の添字。
    - `array`{{optional_inline}}
      - : `forEach()` が呼び出されている `CSSUnparsedValue`。

- `thisArg` {{Optional_inline}}
  - : `callback` の実行中に、 **`this`** として使用する値 (つまり、 `Object` の参照)。.

### 返値

{{jsxref("undefined")}}

## 仕様書

| 仕様書                                                                   | 状態                     | 備考     |
| ------------------------------------------------------------------------ | ------------------------ | -------- |
| {{SpecName('CSSOM','#cssunparsedvalue','forEach()')}} | {{Spec2('CSSOM')}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.CSSUnparsedValue.forEach")}}
