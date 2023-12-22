---
title: TypedArray.prototype.toReversed()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`toReversed()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、 {{jsxref("TypedArray/reverse", "reverse()")}} メソッドに対応する[コピーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#コピーメソッドと変更メソッド)です。このメソッドは、要素を逆順にした新しい型付き配列を返します。このメソッドは {{jsxref("Array.prototype.toReversed()")}} と同じアルゴリズムです。

## 構文

```js-nolint
toReversed()
```

### 引数

なし。

### 返値

要素を逆順に格納した新しい型付き配列です。

## 解説

詳細については、 {{jsxref("Array.prototype.toReversed()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### toReversed() の使用

```js
const uint8 = new Uint8Array([1, 2, 3]);
const reversedUint8 = uint8.toReversed();
console.log(reversedUint8); // Uint8Array [3, 2, 1]
console.log(uint8); // Uint8Array [1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.toReversed` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#change-array-by-copy)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray.prototype.reverse()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.toReversed()")}}
