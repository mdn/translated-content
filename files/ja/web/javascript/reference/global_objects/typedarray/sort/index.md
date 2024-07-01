---
title: TypedArray.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/sort
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

**`sort()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、型付き配列の要素を[その場 (in-place)](https://en.wikipedia.org/wiki/In-place_algorithm) でソートし、その型付き配列を返します。このメソッドは {{jsxref("Array.prototype.sort()")}} と同じアルゴリズムですが、既定で文字列としてではなく数値として値をソートする点が異なります。

{{EmbedInteractiveExample("pages/js/typedarray-sort.html", "shorter")}}

## 構文

```js-nolint
sort()
sort(compareFn)
```

### 引数

- `compareFn` {{optional_inline}}

  - : ソート順を定義する関数です。返値は、 2 つの要素の相対順序を示す符号を持つ数値でなければなりません。 `a` が `b` より小さい場合は負の値、`a` が `b` より大きい場合は正の値、等しい場合は 0 です。 `NaN` は `0` として扱われます。この関数は以下の引数で呼び出されます。

    - `a`
      - : 比較のための最初の要素。決して `undefined` にはなりません。
    - `b`
      - : 比較のための2つ目の要素。決して `undefined` にはなりません。

    省略した場合、型付き配列の要素は数値順にソートされます。

### 返値

ソートされた型付き配列の元配列への参照です。型付き配列は[その場 (in-place)](https://en.wikipedia.org/wiki/In-place_algorithm) でソートされ，コピーは行われないことに注意してください。

## 解説

詳細については、 {{jsxref("Array.prototype.sort()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### sort() の使用

他の例は、 {{jsxref("Array.prototype.sort()")}} メソッドです。

```js
let numbers = new Uint8Array([40, 1, 5, 200]);
numbers.sort();
// Uint8Array [ 1, 5, 40, 200 ]
// ふつうの配列とは異なり、数値的に数値を並べ替えるためには
// 比較関数は必要ありません。

// ふつうの配列は数値で並べ替えるために比較関数を必要とします。
numbers = [40, 1, 5, 200];
numbers.sort();
// [1, 200, 40, 5]

numbers.sort((a, b) => a - b); // 数値を比較
// [ 1, 5, 40, 200 ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.sort` の現代の動作の安定したソートのポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("Array.prototype.sort()")}}
