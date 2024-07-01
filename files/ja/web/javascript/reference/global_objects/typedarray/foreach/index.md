---
title: TypedArray.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`forEach()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、型付き配列の要素ごとに一度与えられた関数を実行します。このメソッドのアルゴリズムは {{jsxref("Array.prototype.forEach()")}} と同じです。

{{EmbedInteractiveExample("pages/js/typedarray-foreach.html")}}

## 構文

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 型付き配列のそれぞれの要素に対して実行する関数です。返値は破棄されます。この関数は以下の引数で呼び出されます。
    - `element`
      - : 現在処理されている型付き配列の要素です。
    - `index`
      - : 現在処理されている型付き配列の要素のインデックスです。
    - `array`
      - : `forEach()` が呼び出されている型付き配列です。
- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行する際に `this` として使用する値。[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)を参照してください。

### 返値

なし ({{jsxref("undefined")}})。

## 解説

詳細については、 {{jsxref("Array.prototype.forEach()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 型付き配列の内容をログに出力する

以下のコードは型付き配列内の各要素を 1 行ずつ出力します。

```js
function logArrayElements(element, index, array) {
  console.log(`a[${index}] = ${element}`);
}

new Uint8Array([0, 1, 2, 3]).forEach(logArrayElements);
// 出力:
// a[0] = 0
// a[1] = 1
// a[2] = 2
// a[3] = 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.forEach` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
