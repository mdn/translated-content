---
title: "CSSUnparsedValue: forEach() メソッド"
slug: Web/API/CSSUnparsedValue/forEach
l10n:
  sourceCommit: f2efc69d9d59a3306b3947963e17ba064a0c74df
---

{{APIRef("CSS Typed OM")}}

**`CSSUnparsedValue.forEach()`** メソッドは、指定された関数を、{{domxref('CSSUnparsedValue')}} オブジェクトのそれぞれの要素に対して実行します。

## 構文

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : それぞれの要素について呼び出される関数で、3 つの引数を取ります。
    - `currentValue`
      - : 処理中の現在の要素の値。
    - `index` {{optional_inline}}
      - : 処理中の現在の要素の添字。
    - `array` {{optional_inline}}
      - : `forEach()` が呼び出されている `CSSUnparsedValue`。

- `thisArg` {{Optional_inline}}
  - : `callback` の実行中に、 **`this`** として使用する値（つまり、`Object` の参照）。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}}
- {{domxref("CSSUnparsedValue.entries")}}
- {{domxref("CSSUnparsedValue.keys")}}
- {{domxref("CSSUnparsedValue.length")}}
- {{domxref("CSSUnparsedValue.values")}}
- [CSS 型付きオブジェクトモデルの使用](/ja/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API)
