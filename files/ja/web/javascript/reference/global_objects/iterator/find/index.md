---
title: Iterator.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/find
l10n:
  sourceCommit: a71768c124d1bb2dceef873c0bda266e9f714e4c
---

{{JSRef}}

**`find()`** は {{jsxref("Iterator")}} インスタンスのメソッドで、 {{jsxref("Array.prototype.find()")}} に似ています。イテレーターが生成する要素のうち、指定された試験関数を満たす最初のものを返します。試験関数を満たす値がない場合は、 {{jsxref("undefined")}} を返します。

## 構文

```js-nolint
find(callbackFn)
```

### 引数

- `callbackFn`
  - : このイテレーターが生成するすべての要素に対して実行する関数です。[真値](/ja/docs/Glossary/Truthy)を返すと、一致する要素が見つかったことを示し、[偽値](/ja/docs/Glossary/Falsy)はそ腕はないことを示します。この関数は、以下の引数とともに呼び出されます。
    - `element`
      - : 処理中の現在の要素です。
    - `index`
      - : 処理中の現在の要素のインデックスです。

### 返値

イテレーターが生成する要素のうち、指定された試験関数を満たす最初のものです。試験関数を満たす値がない場合は、 {{jsxref("undefined")}} を返します。

## 解説

`find()` はイテレーターを反復処理し、各要素に対して一度ずつ `callbackFn` 関数を呼び出します。 コールバック関数が真値を返した場合、その要素をただちに返します。 そうでない場合は、イテレーターの終わりまで反復処理を続け、`undefined` を返します。 `find()` が要素を返した場合、その元となるイテレーターは `return()` メソッドを呼んで閉じられます。

イテレーターヘルパーの主な利点は、配列メソッドよりも「遅延的」であるということです。つまり、要求されたときにのみ次の値を生成するという意味です。これにより、不必要なコンピューター処理を避けることができ、また、無限イテレーターでも使用することができます。無限イテレーターでは、 `find()` は最初の該当要素が見つかった時点でそれを返します。 `callbackFn` が常に偽値を返す場合、このメソッドは終了しません。

## 例

### find() の使用

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const isEven = (x) => x % 2 === 0;
console.log(fibonacci().find(isEven)); // 2

const isNegative = (x) => x < 0;
console.log(fibonacci().take(10).find(isNegative)); // undefined
console.log(fibonacci().find(isNegative)); // Never completes
```

`find()` を呼び出すと、メソッドが途中で返った場合でも、常にその元となるイテレーターが閉じられます。イテレーターが未完了の状態で残されることはありません。

```js
const seq = fibonacci();
console.log(seq.find(isEven)); // 2
console.log(seq.next()); // { value: undefined, done: true }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.prototype.find` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
