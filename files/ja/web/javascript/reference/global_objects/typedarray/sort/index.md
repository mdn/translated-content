---
title: TypedArray.prototype.sort()
short-title: sort()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/sort
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`sort()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、型付き配列の要素を[その場 (in-place)](https://en.wikipedia.org/wiki/In-place_algorithm) でソートし、その型付き配列を返します。このメソッドは {{jsxref("Array.prototype.sort()")}} と同じアルゴリズムですが、既定で文字列としてではなく数値として値をソートする点が異なります。

{{InteractiveExample("JavaScript デモ: TypedArray.prototype.sort()", "shorter")}}

```js interactive-example
const uint8 = new Uint8Array([40, 10, 50, 20, 30]);
uint8.sort();

console.log(uint8);
// 予想される結果: Uint8Array [10, 20, 30, 40, 50]
```

## 構文

```js-nolint
sort()
sort(compareFn)
```

### 引数

- `compareFn` {{optional_inline}}
  - : ソート順を定義する関数です。この関数は以下の引数で呼び出されます。
    - `a`
      - : 比較のための最初の要素。決して `undefined` にはなりません。
    - `b`
      - : 比較のための2つ目の要素。決して `undefined` にはなりません。

    次のような数値を返す必要があります。
    - 負の数は、`a` が `b` より前に来ることを示す
    - 正の数は、`a` が `b` の後に来ることを示す
    - 0 または `NaN` は `a` と `b` が等しいことを示す。

    覚え方としては、`(a, b) => a - b` が数値を昇順で並べるということを思い出してください。

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
