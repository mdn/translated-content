---
title: Iterator.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/reduce
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

**`reduce()`** は {{jsxref("Iterator")}} インスタンスのメソッドで、 {{jsxref("Array.prototype.reduce")}} と似ています。イテレーターによって生成されたそれぞれの要素に対して、ユーザーが指定した「縮約」コールバック関数を実行し、前の要素の計算結果を返値として渡します。すべての要素に対して縮約を実行した最終結果は、単一の値となります。

## 構文

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### 引数

- `callbackFn`
  - : イテレーターによって生成される各要素に対して実行される関数。その返値は、次の `callbackFn` の反復処理において `accumulator`引数の値とみなされます。最後の反復処理では、返値は `reduce()` の返値となります。この関数は、次の引数とともに呼び出されます。
    - `accumulator`
      - : 前回 `callbackFn` を呼び出した際に得られた値。最初の呼び出しでは、後者が指定されている場合はその値が `initialValue` となり、そうでない場合はイテレーターの最初の要素がその値となります。
    - `currentValue`
      - : 現在の要素の値。最初の呼び出しでは、 `initialValue` を指定している場合はその値がイテレーターの最初の要素となり、指定していない場合は 2 つ目の要素となります。
    - `currentIndex`
      - : `currentValue` のインデックス位置。最初の呼び出しでは、 `initialValue` を指定した場合はその値が `0`、指定しない場合は `1` となります。
- `initialValue` {{optional_inline}}
  - : コールバックが最初に呼び出された時点で `accumulator` が初期化される値。 `initialValue` が指定されている場合、 `callbackFn` は最初の要素を `currentValue` として実行を開始します。 `initialValue` が指定されていない場合、 `accumulator` は最初の要素で初期化され、 `callbackFn` は 2 つ目の要素を `currentValue` として実行を開始します。 この場合、イテレーターが空の場合（つまり、 `accumulator` として返す最初の値がない場合）、エラーが発生します。

### 返値

「縮約」コールバック関数をイテレーター全体に対して完全に実行した結果の値です。

### 例外

- {{jsxref("TypeError")}}
  - : イテレーターに要素が含まれておらず、 `initialValue` が指定されていない場合に発生します。

## 解説

`reduce()` がどのように動作するのかの詳細については、 {{jsxref("Array.prototype.reduce()")}} を参照してください。 他のほとんどのイテレーターヘルパーメソッドとは異なり、これは遅延的ではないため、無限イテレーターでは動作しません。

## 例

### reduce() の使用

次の例では、フィボナッチ数列の項目を生成するイテレーターを作成し、最初の 10 項目を合計します。

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

console.log(
  fibonacci()
    .take(10)
    .reduce((a, b) => a + b),
); // 143
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.prototype.reduce` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduce()")}}
