---
title: TypedArray.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

**`slice()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、型付き配列の一部を `start` から `end` （`end` は含まれない）まで選択された新しい型付き配列オブジェクトにコピーして返します。元の型付き配列は変更されません。このメソッドは {{jsxref("Array.prototype.slice()")}} と同じアルゴリズムです。

{{EmbedInteractiveExample("pages/js/typedarray-slice.html", "shorter")}}

## 構文

```js-nolint
slice()
slice(start)
slice(start, end)
```

### 引数

- `start` {{optional_inline}}
  - : 抽出を始める位置を示すゼロ基点のインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。
- `end` {{optional_inline}}
  - : 抽出を終了する位置を示すゼロ基点のインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。 `slice()` はここまでを抽出しますが、 `end` は含みません。

### 返値

抽出された要素が入った新しい型付き配列です。

## 解説

詳細については、 {{jsxref("Array.prototype.slice()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 例: 既存の配列の一部を返す

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.slice(1); // Uint8Array [ 2, 3 ]
uint8.slice(2); // Uint8Array [ 3 ]
uint8.slice(-2); // Uint8Array [ 2, 3 ]
uint8.slice(0, 1); // Uint8Array [ 1 ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.slice` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.slice()")}}
- {{jsxref("String.prototype.slice()")}}
