---
title: Iterator.from()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/from
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

**`Iterator.from()`** は静的メソッドで、イテレーターや反復可能オブジェクトから新しい {{jsxref("Iterator")}} オブジェクトを作成します。

## 構文

```js-nolint
from(object)
```

### 引数

- `object`
  - : [反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)プロトコルまたは[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)プロトコルを実装したオブジェクトです。

### 返値

`object` が反復可能オブジェクトである場合、そのオブジェクトの `[Symbol.iterator]()` メソッドが呼び出され、イテレーターが取得されます。 それ以外の場合は、 `object` がイテレーターであると見なされます。 イテレーターがすでに {{jsxref("Operators/instanceof", "instanceof")}} {{jsxref("Iterator")}} である場合（つまり、そのプロトタイプチェーンに `Iterator.prototype` がある場合）は、直接返されます。 それ以外の場合は、元のイテレーターをラップする新しい {{jsxref("Iterator")}} オブジェクトが作成されます。

## 解説

このメソッドは、おそらくライブラリーからエクスポートされた独自のイテレーターを[正規イテレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#正規イテレーター)に変換するために存在します。 `Iterator.from()` が返すイテレーターオブジェクトはすべて、共通のプロトタイプオブジェクトを継承しており、このプロトタイプには次のメソッドが備わっています。

- `next()`
  - : 基礎となるイテレーターの `next()` メソッドを呼び出し、結果を返します。
- `return()`
  - : 基礎となるイテレーターの `return()` メソッドを呼び出し、その結果を返します。または、基礎となるイテレーターに `return()` メソッドがなければ、`{ value: undefined, done: true }` を返します。

## 例

### 反復可能オブジェクトを正規イテレーターに変換

すでに `obj` は反復可能オブジェクトであり、その `[Symbol.iterator]()` メソッドが呼び出されると正規イテレーターを返すため、`Iterator.from(obj)` は同じイテレーターを返します。

```js
const iterator = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

const obj = {
  [Symbol.iterator]() {
    return iterator;
  },
};

const iterator2 = Iterator.from(obj);
console.log(iterator2 === iterator); // true
```

`obj2` は反復可能オブジェクトであり、その `[Symbol.iterator]()` メソッドが呼ばれると、正規のイテレーターではないものを返すため、`Iterator.from(obj2)` は元のイテレーターをラップする新しいイテレーターを返します。

```js
const iterator = {
  current: 0,
  next() {
    return { value: this.current++, done: false };
  },
};

const obj2 = {
  [Symbol.iterator]() {
    return iterator;
  },
};

const iterator2 = Iterator.from(obj2);
console.log(iterator2 === iterator); // false
console.log(iterator2.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
```

### イテレーターを正規イテレーターに変換

`obj` はすでに正規イテレーターであるため、`Iterator.from(obj)` は自分自身を返します。

```js
const obj = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

const iterator = Iterator.from(obj);
console.log(iterator === obj); // true
```

`obj2` は非正規イテレーターであるため、`Iterator.from(obj2)` は元のイテレーターをラップする新しいイテレーターを返します。

```js
const obj2 = {
  current: 0,
  next() {
    return { value: this.current++, done: false };
  },
};

const iterator = Iterator.from(obj2);
console.log(iterator === obj2); // false
console.log(iterator.next()); // { value: 0, done: false }
console.log(obj2.next()); // { value: 1, done: false }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.from` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Array.from()")}}
