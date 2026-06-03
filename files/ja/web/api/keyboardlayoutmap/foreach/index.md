---
title: "KeyboardLayoutMap: forEach() メソッド"
short-title: forEach()
slug: Web/API/KeyboardLayoutMap/forEach
l10n:
  sourceCommit: f2efc69d9d59a3306b3947963e17ba064a0c74df
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

**`forEach()`** は {{domxref('KeyboardLayoutMap')}} インターフェイスのメソッドで、指定された関数をマップの各要素に対して一度ずつ実行します。

## 構文

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 各要素に対して実行する関数で、 3 つの引数を取ります。
    - `currentValue`
      - : 現在処理中の要素の値です。
    - `index` {{optional_inline}}
      - : 現在処理中の要素のインデックスです。
    - `array` {{optional_inline}}
      - : `forEach()` が呼び出される KeyboardLayoutMap です。

- `thisArg` {{Optional_inline}}
  - : `callback` を実行する際に **`this`** （すなわち参照する `Object`）として使用する値です。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
