---
title: TypedArray.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/fill
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

**`fill()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、型付き配列のある範囲のインデックスにあるすべての要素を固定値で埋めます。これは変更された型付き配列を返します。このメソッドのアルゴリズムは {{jsxref("Array.prototype.fill()")}} と同じです。

{{InteractiveExample("JavaScript デモ: TypedArray.fill()", "shorter")}}

```js interactive-example
const uint8 = new Uint8Array([0, 0, 0, 0]);
// Value, start position, end position
uint8.fill(4, 1, 3);

console.log(uint8);
// Expected output: Uint8Array [0, 4, 4, 0]
```

## 構文

```js-nolint
fill(value)
fill(value, start)
fill(value, start, end)
```

### 引数

- `value`
  - : 型付き配列を埋める値です。
- `start` {{optional_inline}}
  - : 埋まる範囲の開始点を表すゼロ基点のインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。
- `end` {{optional_inline}}
  - : 埋まる範囲の終了点を表すゼロ基点のインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。 `fill()` は `end` の手前までを埋めます。

### 返値

変更された配列です。

## 解説

詳細については、 {{jsxref("Array.prototype.fill()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### fill() の使用

```js
new Uint8Array([1, 2, 3]).fill(4); // Uint8Array [4, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1); // Uint8Array [1, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1, 2); // Uint8Array [1, 4, 3]
new Uint8Array([1, 2, 3]).fill(4, 1, 1); // Uint8Array [1, 2, 3]
new Uint8Array([1, 2, 3]).fill(4, -3, -2); // Uint8Array [4, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.fill` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.fill()")}}
