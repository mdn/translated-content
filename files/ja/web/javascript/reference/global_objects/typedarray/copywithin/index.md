---
title: TypedArray.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`copyWithin()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、この型付き配列の一部を同じ型付き配列の別の場所にシャローコピーし、この型付き配列の長さを変更せずに返します。このメソッドは {{jsxref("Array.prototype.copyWithin()")}} と同じアルゴリズムです。

{{InteractiveExample("JavaScript デモ: TypedArray.copyWithin()")}}

```js interactive-example
const uint8 = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);

// Insert position, start position, end position
uint8.copyWithin(3, 1, 3);

console.log(uint8);
// Expected output: Uint8Array [1, 2, 3, 2, 3, 6, 7, 8]
```

## 構文

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### 引数

- `target`
  - : 並びのコピー先となるゼロ基点のインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。これは `start` にある要素がコピーされる場所に対応し、`start` から `end` までのすべての要素が後続のインデックスにコピーされます。
- `start`
  - : コピー元でコピーを始める位置のゼロ基点のインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。
- `end` {{optional_inline}}
  - : コピー元でコピーを終える位置のゼロ基点のインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。 `copyWithin()` はここまでをコピーしますが、 `end` は含みません。

### 返値

変更された型付き配列です。

## 解説

詳細については、 {{jsxref("Array.prototype.copyWithin()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### copyWithin() の使用

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
uint8.set([1, 2, 3]);
console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]
uint8.copyWithin(3, 0, 3);
console.log(uint8); // Uint8Array [ 1, 2, 3, 1, 2, 3, 0, 0 ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.copyWithin` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.copyWithin()")}}
