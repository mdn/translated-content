---
title: TypedArray.prototype.reverse()
short-title: reverse()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

**`reverse()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、型付き配列を[その場 (in-place)](https://en.wikipedia.org/wiki/In-place_algorithm) で反転し、同じ型付き配列への参照を返します。つまり、型付き配列の先頭の要素が末尾に、末尾の要素が先頭になります。ほかの要素の順序も以前とは逆になります。このメソッドは {{jsxref("Array.prototype.reverse()")}} と同じアルゴリズムです。

{{InteractiveExample("JavaScript デモ: TypedArray.prototype.reverse()", "shorter")}}

```js interactive-example
const uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8);
// 予想される結果: Uint8Array [3, 2, 1]
```

## 構文

```js-nolint
reverse()
```

### 引数

なし。

### 返値

反転された元の型付き配列への参照です。型付き配列は[その場 (in-place)](https://en.wikipedia.org/wiki/In-place_algorithm) で反転され、コピーは行われません。

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

- [`TypedArray.prototype.reverse` のポリフィル (`core-js`)](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("Array.prototype.reverse()")}}
