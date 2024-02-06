---
title: "FontFaceSet: forEach() メソッド"
short-title: forEach()
slug: Web/API/FontFaceSet/forEach
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

**`forEach()`** は {{domxref("FontFaceSet")}} インターフェイスのプロパティで、 `FontFaceSet` オブジェクトの各値に対して指定された関数を実行します。

## 構文

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 各要素に対して実行する関数で、 引数を 3 つ取ります。
    - `value`, `key`
      - : `FontFaceSet` で処理されている現在の要素。 `FontFaceSet` にはキーがないので、両方の引数に値が渡されます。
    - `set`
      - : `forEach()` が呼び出された `FontFaceSet` です。
- `thisArg`
  - : `callbackFn` 実行時に [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) として使用する値です。

### 返値

undefined です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
