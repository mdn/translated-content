---
title: Array.fromAsync()
slug: Web/JavaScript/Reference/Global_Objects/Array/fromAsync
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`Array.fromAsync()`** は静的メソッドで、[非同期反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル)オブジェクト、[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)オブジェクト、[配列風](/ja/docs/Web/JavaScript/Guide/Indexed_collections#配列風オブジェクトの扱い)のオブジェクトから、シャローコピーされた新しい配列インスタンスを作成します。

## 構文

```js-nolint
Array.fromAsync(arrayLike)
Array.fromAsync(arrayLike, mapFn)
Array.fromAsync(arrayLike, mapFn, thisArg)
```

### 引数

- `arrayLike`
  - : 配列に変換する非同期反復可能、反復可能、配列風オブジェクトです。
- `mapFn` {{optional_inline}}
  - : 配列の各要素に対して呼び出す関数です。指定された場合は、配列に追加するすべての値が最初にこの関数に渡され、 `mapFn` の返値が（[待機](/ja/docs/Web/JavaScript/Reference/Operators/await)後に）配列に追加されます。この関数は以下の引数で呼び出されます。
    - `element`
      - : 配列内で現在処理中の要素です。すべての要素が最初に[待機状態](/ja/docs/Web/JavaScript/Reference/Operators/await)になるため、この値が [thenable](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) になることはありません。
    - `index`
      - : 配列の、現在処理中の要素のインデックスです。
- `thisArg` {{optional_inline}}
  - : `mapFn` 実行時に `this` として使用する値です。

### 返値

新しい {{jsxref("Promise")}} で、その履行値は新しい {{jsxref("Array")}} インスタンスです。

## 解説

`Array.fromAsync()` により、以下のものから配列を作成することができます。

- [非同期反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル)（{{domxref("ReadableStream")}} や {{jsxref("AsyncGenerator")}} などのオブジェクト）、または、オブジェクトが非同期反復可能ではない場合、
- [反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)（{{jsxref("Map")}} や {{jsxref("Set")}} 等のオブジェクト）、または、オブジェクトが反復可能ではない場合、
- 配列風オブジェクト（`length` プロパティとインデックス値による要素を持つオブジェクト）。

`Array.fromAsync()` は {{jsxref("Statements/for-await...of", "for await...of")}} にとてもよく似た方法で非同期反復可能オブジェクトを反復処理します。 `Array.fromAsync()` は、以下をの点除いて {{jsxref("Array.from()")}} とほぼ同じ動きをします。

- `Array.fromAsync()` は非同期反復可能オブジェクトを扱うことができます。
- `Array.fromAsync()` は配列インスタンスで履行される {{jsxref("Promise")}} を返します。
- `Array.fromAsync()` が非同期反復可能オブジェクトを指定して呼び出された場合、配列に追加する各要素が最初に[待機](/ja/docs/Web/JavaScript/Reference/Operators/await)されます。
- `mapFn` が指定された場合、入出力を内部的に待機します。

`Array.fromAsync()` と {{jsxref("Promise.all()")}} はどちらも、反復可能なプロミスを配列のプロミスに変換することができます。しかし、 2 つの重要な違いがあります。

- `Array.fromAsync()` はオブジェクトから得られる値を順番に待ちます。 `Promise.all()` はすべての値を同時に待ちます。
- `Array.fromAsync()` は反復可能オブジェクトを遅延的に反復処理し、現在の値が決定するまで次の値を取得しません。 `Promise.all()` はすべての値を事前に取得し、それを待ちます。

## 例

### 非同期反復可能オブジェクトから配列を取得

```js
const asyncIterable = (async function* () {
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 10 * i));
    yield i;
  }
})();

Array.fromAsync(asyncIterable).then((array) => console.log(array));
// [0, 1, 2, 3, 4]
```

### 同期反復可能オブジェクトから配列を取得

```js
Array.fromAsync(
  new Map([
    [1, 2],
    [3, 4],
  ]),
).then((array) => console.log(array));
// [[1, 2], [3, 4]]
```

### プロミスを生成する同期反復可能オブジェクトから配列を取得

```js
Array.fromAsync(
  new Set([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]),
).then((array) => console.log(array));
// [1, 2, 3]
```

### プロミスの配列風オブジェクトから配列を取得

```js
Array.fromAsync({
  length: 3,
  0: Promise.resolve(1),
  1: Promise.resolve(2),
  2: Promise.resolve(3),
}).then((array) => console.log(array));
// [1, 2, 3]
```

### mapFn の使用

`mapFn` の入力と出力の両方について `Array.fromAsync()` は内部的に待機します。

```js
function delayedValue(v) {
  return new Promise((resolve) => setTimeout(() => resolve(v), 100));
}

Array.fromAsync(
  [delayedValue(1), delayedValue(2), delayedValue(3)],
  (element) => delayedValue(element * 2),
).then((array) => console.log(array));
// [2, 4, 6]
```

### Promise.all() との比較

`Array.fromAsync()` はオブジェクトから得られる値を順番に待ちます。 `Promise.all()` はすべての値を同時に待ちます。

```js
function* makeAsyncIterable() {
  for (let i = 0; i < 5; i++) {
    yield new Promise((resolve) => setTimeout(resolve, 100));
  }
}

(async () => {
  console.time("Array.fromAsync() time");
  await Array.fromAsync(makeAsyncIterable());
  console.timeEnd("Array.fromAsync() time");
  // Array.fromAsync() time: 503.610ms

  console.time("Promise.all() time");
  await Promise.all(makeAsyncIterable());
  console.timeEnd("Promise.all() time");
  // Promise.all() time: 101.728ms
})();
```

### 同期反復可能オブジェクトのエラー処理なし

[`for await...of`](/ja/docs/Web/JavaScript/Reference/Statements/for-await...of#同期の反復可能オブジェクトおよびジェネレーターの反復処理) と同様に、反復処理されるオブジェクトが同期反復可能オブジェクトで、反復処理中にエラーが発生した場合、基盤となるイテレーターの `return()` メソッドは呼び出されず、イテレーターは閉じられません。

```js
function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield Promise.reject(3);
  } finally {
    console.log("called finally");
  }
}

(async () => {
  try {
    await Array.fromAsync(generatorWithRejectedPromises());
  } catch (e) {
    console.log("caught", e);
  }
})();
// caught 3
// No "called finally" message
```

イテレーターを閉じる必要がある場合は、代わりに {{jsxref("Statements/for...of", "for...of")}} ループを使用して、各値を `await` する必要があります。

```js
(async () => {
  const arr = [];
  try {
    for (const val of generatorWithRejectedPromises()) {
      arr.push(await val);
    }
  } catch (e) {
    console.log("caught", e);
  }
})();
// called finally
// caught 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.fromAsync` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#arrayfromasync)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
