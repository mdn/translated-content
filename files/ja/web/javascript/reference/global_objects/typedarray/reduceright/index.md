---
title: TypedArray.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

**`reduceRight()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、アキュームレーターと型付き配列のそれぞれの値に対して（右から左へ）関数を適用していき、単一の値にまとめます。このメソッドは、{{jsxref("Array.prototype.reduceRight()")}}と同じアルゴリズムです。

{{EmbedInteractiveExample("pages/js/typedarray-reduceright.html")}}

## 構文

```js-nolint
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)
```

### 引数

- `callbackFn`

  - : 型付き配列の各要素に対して実行される関数です。その返値は、次に `callbackFn` を呼び出す際の `accumulator` 引数の値になります。最後の呼び出しでは、返値は `reduce()` の返値となります。この関数は以下の引数で呼び出されます。
    - `accumulator`
      - : 前回 `callbackFn` を呼び出した結果の値。最初の呼び出しでは、後で `initialValue` を指定した場合はその値になり、指定されなかった場合は型付き配列の最後の要素になります。
    - `currentValue`
      - : 現在の要素の値。最初の呼び出しでは、 `initialValue` を指定した場合は最後の要素となり、指定しなかった場合は最後から 2 番目の要素となります。
    - `currentIndex`
      - : 型付き配列の `currentValue` を入力するインデックスの位置。最初の呼び出しで `initialValue` を指定した場合は `array.length - 1`、そうでない場合は `array.length - 2` となります。
    - `array`
      - : `reduceRight()` が呼び出された型付き配列。

- `initialValue` {{optional_inline}}
  - : `callbackFn` を最初に呼び出す際の `accumulator` として使用される値。初期値が与えられなかった場合は、型付き配列の最後の要素が使用され、その値はスキップされます。初期値のない空の型付き配列に対して `reduceRight()` を呼び出すと `TypeError` が発生します。

### 返値

畳み込みによって得られた 1 つの値です。

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

- [`TypedArray.prototype.reduceRight` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
