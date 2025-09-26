---
title: TypedArray.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/find
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`find()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、型付き配列のある要素の値が与えられたテスト関数を満たした場合、その値を返します。そうでなければ {{jsxref("undefined")}} を返します。このメソッドのアルゴリズムは {{jsxref("Array.prototype.find()")}} と同じです。

{{InteractiveExample("JavaScript デモ: TypedArray.find()")}}

```js interactive-example
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([10, 0, -10, 20, -30, 40, -50]);

console.log(int8.find(isNegative));
// Expected output: -10
```

## 構文

```js-nolint
find(callbackFn)
find(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 配列のそれぞれの要素に対して実行する関数です。要素がテストに合格した場合は[真値](/ja/docs/Glossary/Truthy)を返し、そうでなければ[偽値](/ja/docs/Glossary/Falsy)を返す必要があります。この関数は以下の引数で呼び出されます。
    - `element`
      - : 現在処理されている型付き配列の要素です。
    - `index`
      - : 現在処理されている型付き配列の要素のインデックスです。
    - `array`
      - : `find()` が実行されている型付き配列です。
- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行する際に `this` として使用する値。[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)を参照してください。

### 返値

テストを満たした配列の要素の位置を返します。それ以外の場合は、 {{jsxref("undefined")}} を返します。

## 解説

詳細については、 {{jsxref("Array.prototype.find()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 型付き配列内の素数を探す

次の例では、型付き配列内で素数である要素を探します（または、素数がない場合は {{jsxref("undefined")}} を返します）。

```js
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

const uint8 = new Uint8Array([4, 5, 8, 12]);
console.log(uint8.find(isPrime)); // 5
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.find` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
