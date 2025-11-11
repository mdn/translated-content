---
title: TypedArray.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

**`reverse()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、型付き配列を[その場 (in-place)](https://en.wikipedia.org/wiki/In-place_algorithm) で反転し、同じ型付き配列への参照を返します。型付き配列の最初の要素は最後になり、型付き配列の最後の要素は最初になります。言い換えれば，型付き配列の他の要素の順序は，以前とは逆の順序になります。このメソッドは {{jsxref("Array.prototype.reverse()")}} と同じアルゴリズムです。

{{InteractiveExample("JavaScript デモ: TypedArray.reverse()", "shorter")}}

```js interactive-example
const uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8);
// Expected output: Uint8Array [3, 2, 1]
```

## 構文

```js-nolint
reverse()
```

### 引数

なし。

### 返値

反転された元の型付き配列への参照です。型付き配列は[その場 (in-place)](https://en.wikipedia.org/wiki/In-place_algorithm) で反転され，コピーは行われないことに注意してください。

## 解説

詳細については、 {{jsxref("Array.prototype.reverse()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### reverse() の使用

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8); // Uint8Array [3, 2, 1]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.reverse` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("Array.prototype.reverse()")}}
