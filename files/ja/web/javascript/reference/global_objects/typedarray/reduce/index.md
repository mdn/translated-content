---
title: TypedArray.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

**`reduce()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、型付き配列のそれぞれの要素に対して、ユーザーが提供した「縮小」コールバック関数を呼び出します。その際、直前の要素における計算結果の返値を渡します。型付き配列のすべての要素に対して縮小関数を実行した結果が単一の値が最終結果になります。このメソッドは、{{jsxref("Array.prototype.reduce()")}}と同じアルゴリズムです。

{{InteractiveExample("JavaScript デモ: TypedArray.reduce()")}}

```js interactive-example
const uint8 = new Uint8Array([0, 1, 2, 3]);

function sum(accumulator, currentValue) {
  return accumulator + currentValue;
}

console.log(uint8.reduce(sum));
// Expected output: 6
```

## 構文

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### 引数

- `callbackFn`
  - : 型付き配列の各要素に対して実行される関数です。その返値は、次に `callbackFn` を呼び出す際の `accumulator` 引数の値になります。最後の呼び出しでは、返値は `reduce()` の返値となります。この関数は以下の引数で呼び出されます。
    - `accumulator`
      - : 前回 `callbackFn` を呼び出した結果の値。最初の呼び出しでは、後で `initialValue` を指定した場合はその値になり、指定されなかった場合は `array[0]` になります。
    - `currentValue`
      - : 現在の要素の値。最初の呼び出しでは、 `initialValue` を指定した場合は `array[0]` となり、指定しなかった場合は `array[1]` となります。
    - `currentIndex`
      - : 型付き配列の `currentValue` を入力するインデックスの位置。最初の呼び出しで `initialValue` を指定した場合は `0`、そうでない場合は `1` となります。
    - `array`
      - : `reduce()` が呼び出された型付き配列。

- `initialValue` {{optional_inline}}
  - : コールバックが最初に呼び出された時に `accumulator` が初期化される値です。
    `initialValue` が指定された場合、`callbackFn` は配列の最初の値を `currentValue` として実行を開始します。
    もし `initialValue` が指定されなかった場合、`accumulator` は配列の最初の値に初期化され、`callbackFn` は配列の 2 つ目の値を `currentValue` として実行を開始します。この場合、配列が空であれば（`accumulator`として返す最初の値がなければ）エラーが発生します。

### 返値

型付き配列全体にわたって「縮小」コールバック関数を実行した結果の値です。

### 例外

- {{jsxref("TypeError")}}
  - : 型付き配列に要素がなく、かつ `initialValue` が提供されなかった場合に発生します。

## 解説

詳細については、 {{jsxref("Array.prototype.reduce()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 配列内のすべての値を合計する

```js
const total = new Uint8Array([0, 1, 2, 3]).reduce((a, b) => a + b);
// total === 6
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.reduce` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
