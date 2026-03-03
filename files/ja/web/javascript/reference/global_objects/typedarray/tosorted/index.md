---
title: TypedArray.prototype.toSorted()
short-title: toSorted()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`toSorted()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、 {{jsxref("TypedArray/sort", "sort()")}} メソッドの[コピーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#コピーメソッドと変更メソッド)版です。これは、要素を昇順にソートした新しい型付き配列を返します。このメソッドは {{jsxref("Array.prototype.toSorted()")}} と同じアルゴリズムですが、既定で文字列としてではなく数値として値をソートする点が異なります。

## 構文

```js-nolint
toSorted()
toSorted(compareFn)
```

### 引数

- `compareFn` {{optional_inline}}
  - : 要素の順序を決定する関数。省略された場合、型付き配列の要素は値に基づいてソートされます。詳しくは {{jsxref("TypedArray/sort", "sort()")}} を参照してください。

### 返値

要素を昇順にソートした新しい型付き配列です。

## 解説

詳細については、 {{jsxref("Array.prototype.toSorted()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 配列のソート

その他の例については、 {{jsxref("Array.prototype.sort()")}} メソッドもご覧ください。

```js
const numbers = new Uint8Array([40, 1, 5, 200]);
const numberSorted = numbers.toSorted();
console.log(numberSorted); // Uint8Array [ 1, 5, 40, 200 ]
// 通常の配列とは異なり、数値の並べ替えでは比較関数が
// 要求されません。
console.log(numbers); // Uint8Array [ 40, 1, 5, 200 ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.toSorted` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#change-array-by-copy)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.toSorted()")}}
