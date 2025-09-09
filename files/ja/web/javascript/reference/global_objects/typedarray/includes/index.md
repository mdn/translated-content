---
title: TypedArray.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/includes
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

**`includes()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、型付き配列の項目内に特定の値が含まれているかどうかを判断し、その結果に応じて `true` か `false` を返します。このメソッドは {{jsxref("Array.prototype.includes()")}} と同じアルゴリズムです。

{{InteractiveExample("JavaScript デモ: TypedArray.includes()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

console.log(uint8.includes(20));
// Expected output: true

// Check from position 3
console.log(uint8.includes(20, 3));
// Expected output: false
```

## 構文

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### 引数

- `searchElement`
  - : 探す対象の要素
- `fromIndex` {{optional_inline}}
  - : 検索を始める位置を示すゼロ基点のインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。

### 返値

論理値で、型付き配列（指定する場合はインデックス `fromIndex` で示される型付き配列の一部）内で値 `searchElement` が見つかった場合に `true` なります。

## 解説

詳細については、 {{jsxref("Array.prototype.includes()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### includes の使用

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.includes(2); // true
uint8.includes(4); // false
uint8.includes(3, 3); // false

// NaN の扱い (Float32 および Float64 に限り true)
new Uint8Array([NaN]).includes(NaN); // false (コンストラクターに渡した NaN は 0 に変換されるため)
new Float32Array([NaN]).includes(NaN); // true;
new Float64Array([NaN]).includes(NaN); // true;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.includes` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
