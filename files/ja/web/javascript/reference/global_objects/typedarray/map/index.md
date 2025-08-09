---
title: TypedArray.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/map
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`map()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、与えられた関数を呼び出された型付き配列のすべての要素に対して呼び出し、その結果からなる新しい型付き配列を生成します。このメソッドは、 {{jsxref("Array.prototype.map()")}} と同じアルゴリズムです。

{{InteractiveExample("JavaScript デモ: TypedArray.map()", "shorter")}}

```js interactive-example
const uint8 = new Uint8Array([25, 36, 49]);
const roots = uint8.map(Math.sqrt);

console.log(roots);
// Expected output: Uint8Array [5, 6, 7]
```

## 構文

```js-nolint
map(callbackFn)
map(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 型付き配列のそれぞれの要素に対して実行する関数。その返値は、新しい型付き配列の単一の要素として追加されます。この関数は以下の引数で呼び出されます。
    - `element`
      - : 型付き配列で現在処理されている要素です。
    - `index`
      - : 現在処理中の要素の型付き配列内におけるインデックスです。
    - `array`
      - : `map()` が呼び出されてた型付き配列です。

- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行する際に `this` として使用する値。[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)を参照してください。

### 返値

各要素がコールバック関数の結果である新しい型付き配列です。

## 解説

詳細については、 {{jsxref("Array.prototype.map()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 型付き配列を平方根の型付き配列にマッピング

次のコードは型付き配列を取り、最初の型付き配列にある数値の平方根からなる新しい型付き配列を生成します。

```js
const numbers = new Uint8Array([1, 4, 9]);
const roots = numbers.map(Math.sqrt);
// roots の内容は [1, 2, 3] となる
// numbers の内容は [1, 4, 9] のまま
```

### 引数を含む関数を使用して型付き配列をマッピングする

次のコードは、1 つの引数を必要とする関数を使用するときに `map()` がどのように動作するかを示しています。引数は元の配列を通した `map()` ループとして、配列の各要素に自動的に割り当てられます。

```js
const numbers = new Uint8Array([1, 4, 9]);
const doubles = numbers.map((num) => num * 2);
// doubles は Uint8Array [2, 8, 18] となる
// numbers は Uint8Array [1, 4, 9] のまま
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.map` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Map")}}
