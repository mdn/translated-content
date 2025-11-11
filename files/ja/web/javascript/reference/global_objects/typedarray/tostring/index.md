---
title: TypedArray.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toString
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

**`toString()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、指定された配列とその要素を表す文字列を返します。このメソッドは {{jsxref("Array.prototype.toString()")}} と同じアルゴリズムです。

{{InteractiveExample("JavaScript デモ: TypedArray.toString()", "shorter")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

const uint8String = uint8.toString();

console.log(uint8String.startsWith("10"));
// Expected output: true
```

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

型付き配列の要素を表す文字列です。

## 解説

詳細については、 {{jsxref("Array.prototype.toString()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 型付き配列を文字列へ変換

```js
const uint8 = new Uint8Array([1, 2, 3]);
// 明示的な変換
console.log(uint8.toString()); // 1,2,3
// 暗黙の変換
console.log(`${uint8}`); // 1,2,3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("String.prototype.toString()")}}
