---
title: TypedArray.prototype.with()
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/with
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

**`with()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、指定したインデックスの値を[ブラケット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors#ブラケット記法)で変更する操作の[コピー版](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#コピーメソッドと変更メソッド)です。これは指定されたインデックスの要素を指定された値で置き換えた新しい型付き配列を返します。このメソッドのアルゴリズムは {{jsxref("Array.prototype.with()")}} と同じです。

## 構文

```js-nolint
arrayInstance.with(index, value)
```

### 引数

- `index`
  - : 型付き配列を変更する場所を示すゼロ基点のインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。
- `value`
  - : 指定された位置に代入する値です。

### 返値

`index` の要素を `value` に置き換えた新しい型付き配列。

### 例外

- {{jsxref("RangeError")}}
  - : `index >= array.length` または `index < -array.length` の場合に発生します。

## 解説

詳細については、 {{jsxref("Array.prototype.with()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### with() の使用

```js
const arr = new Uint8Array([1, 2, 3, 4, 5]);
console.log(arr.with(2, 6)); // Uint8Array [1, 2, 6, 4, 5]
console.log(arr); // Uint8Array [1, 2, 3, 4, 5]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.with` のポリフィル (`core-js`)](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("TypedArray.prototype.at()")}}
- {{jsxref("Array.prototype.with()")}}
