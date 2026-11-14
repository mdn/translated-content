---
title: TypedArray.prototype.reduceRight()
short-title: reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

**`reduceRight()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、アキュームレーターと型付き配列の各要素に対して（右から左へ）関数を適用し、単一の値に縮小化します。このメソッドは {{jsxref("Array.prototype.reduceRight()")}} と同じアルゴリズムです。

{{InteractiveExample("JavaScript デモ: TypedArray.prototype.reduceRight()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30]);

const result = uint8.reduceRight(
  (accumulator, currentValue) => `${accumulator}, ${currentValue}`,
);

console.log(result);
// 予想される結果: "30, 20, 10"
```

## 構文

```js-nolint
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)
```

### 引数

- `callbackFn`
  - : 型付き配列の各要素に対して実行される関数です。その返値は、次に `callbackFn` を呼び出すときの `accumulator` 引数の値になります。最後の呼び出しでは、その返値が `reduceRight()` の返値になります。この関数は以下の引数で呼び出されます。
    - `accumulator`
      - : 前回 `callbackFn` を呼び出した結果の値です。最初の呼び出しでは、`initialValue` が指定されていればその値、指定されていなければ型付き配列の最後の要素になります。
    - `currentValue`
      - : 現在の要素の値です。最初の呼び出しでは、`initialValue` が指定されていれば最後の要素、指定されていなければ最後から 2 番目の要素になります。
    - `currentIndex`
      - : 型付き配列内での `currentValue` のインデックスです。最初の呼び出しでは、`initialValue` が指定されていれば `array.length - 1`、指定されていなければ `array.length - 2` になります。
    - `array`
      - : `reduceRight()` が呼び出された型付き配列。

- `initialValue` {{optional_inline}}
  - : `callbackFn` を最初に呼び出す際の `accumulator` として使用する値です。初期値が指定されていない場合は型付き配列の最後の要素が使用され、その要素は処理対象から除かれます。初期値なしで空の型付き配列に対して `reduceRight()` を呼び出すと、`TypeError` が発生します。

### 返値

縮小化によって得られた 1 つの値です。

## 解説

詳細については、 {{jsxref("Array.prototype.reduceRight()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 配列内のすべての値を合計する

```js
const total = new Uint8Array([0, 1, 2, 3]).reduceRight((a, b) => a + b);
// total === 6
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.reduceRight` のポリフィル (`core-js`)](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
