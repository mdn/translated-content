---
title: TypedArray.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/values
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`values()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、配列内の各インデックスに対する値を持つ新しい[配列イテレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)オブジェクトを返します。このメソッドのアルゴリズムは {{jsxref("Array.prototype.values()")}} と同じです。

{{InteractiveExample("JavaScript デモ: TypedArray.values()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);
const array1 = uint8.values();

array1.next();
array1.next();

console.log(array1.next().value);
// Expected output: 30
```

## 構文

```js-nolint
values()
```

### 引数

なし。

### 返値

新しい[配列イテレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)オブジェクトです。

## 解説

詳細については、 {{jsxref("Array.prototype.values()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### for...of ループを用いた反復処理

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const values = arr.values();
for (const n of values) {
  console.log(n);
}
```

### 他の反復処理

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const values = arr.values();
console.log(values.next().value); // 10
console.log(values.next().value); // 20
console.log(values.next().value); // 30
console.log(values.next().value); // 40
console.log(values.next().value); // 50
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.values` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- [`TypedArray.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- {{jsxref("Array.prototype.values()")}}
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
