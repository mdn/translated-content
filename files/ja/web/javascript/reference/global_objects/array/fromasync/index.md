---
title: Array.fromAsync()
short-title: fromAsync()
slug: Web/JavaScript/Reference/Global_Objects/Array/fromAsync
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Array.fromAsync()`** は静的メソッドで、[非同期反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル)オブジェクト、[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)オブジェクト、[配列風](/ja/docs/Web/JavaScript/Guide/Indexed_collections#配列風オブジェクトの扱い)のオブジェクトから、シャローコピーされた新しい配列インスタンスを作成します。

## 構文

```js-nolint
Array.fromAsync(items)
Array.fromAsync(items, mapFn)
Array.fromAsync(items, mapFn, thisArg)
```

### 引数

- `items`
  - : 配列に変換する非同期反復可能、反復可能、配列風オブジェクトです。
- `mapFn` {{optional_inline}}
  - : 配列の各要素に対して呼び出す関数です。指定された場合は、配列に追加するすべての値が最初にこの関数に渡され、 `mapFn` の返値が（[待機](/ja/docs/Web/JavaScript/Reference/Operators/await)後に）配列に追加されます。この関数は以下の引数で呼び出されます。
    - `element`
      - : `items` が同期イテレーターまたは配列風オブジェクトの場合、すべての要素が最初に[待機状態](/ja/docs/Web/JavaScript/Reference/Operators/await)となり、`element` は [thenable](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) になることはありません。 `items` が非同期反復可能オブジェクトの場合、それぞれの値はそのまま渡されます。
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

`Array.fromAsync()` は {{jsxref("Statements/for-await...of", "for await...of")}} にとてもよく似た方法で非同期反復可能オブジェクトを反復処理します。 `Array.fromAsync(items)` は、以下をの点除いて {{jsxref("Array.from()")}} とほぼ同じ動きをします。

```js
const result = [];
for await (const element of items) {
  result.push(element);
}
```

`Array.fromAsync()` は、次の点を除いて、動作は {{jsxref("Array.from()")}} とほぼ同じです。

- `Array.fromAsync()` は非同期反復可能オブジェクトを扱うことができます。
- `Array.fromAsync()` は配列インスタンスで履行される {{jsxref("Promise")}} を返します。
- `Array.fromAsync()` が非同期反復可能オブジェクトを指定して呼び出された場合、配列に追加する各要素が最初に[待機](/ja/docs/Web/JavaScript/Reference/Operators/await)されます。
- `mapFn` が指定された場合、その出力も内部で待機されます。

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

`items` が非同期の反復可能オブジェクトであり、それぞれの結果の `value` もプロミスである場合、それらのプロミスは待機されることなく、結果の配列に追加されます。これは `for await...of` の動作と一致しています。

```js
function createAsyncIter() {
  let i = 0;
  return {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (i > 2) return { done: true };
          i++;
          return { value: Promise.resolve(i), done: false };
        },
      };
    },
  };
}

Array.fromAsync(createAsyncIter()).then((array) => console.log(array));
// (3) [Promise, Promise, Promise]
```

> [!NOTE]
> 実際には、プロミスを生成する非同期反復可能オブジェクトに遭遇することはほとんどありません。なぜなら、[非同期ジェネレータ関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function*)を使用して実装すると、 [`yield`](/ja/docs/Web/JavaScript/Reference/Operators/yield) 式によってプロミスが自動的にラップ解除されるからです。

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

### mapFn を同期反復可能オブジェクトと使用

`items` が同期反復可能オブジェクトまたは配列風である場合、`mapFn` の入力と出力は、内部で `Array.fromAsync()` によって待機されます。

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

### mapFn を非同期反復可能オブジェクトと使用

`items` が非同期反復可能オブジェクトの場合、`mapFn` への入力は待機されませんが、出力は待機されます。上記と同じ `createAsyncIter` 関数を使用します。

```js
Array.fromAsync(createAsyncIter(), async (element) => (await element) * 2).then(
  (array) => console.log(array),
);
// [2, 4, 6]
```

興味深いことに、これは `Array.fromAsync(createAsyncIter())` は `Array.fromAsync(createAsyncIter(), (element) => element)` と同等ではないことを意味しています。後者はそれぞれの生成値を待機しますが、前者は待機しないからです。

```js
Array.fromAsync(createAsyncIter(), (element) => element).then((array) =>
  console.log(array),
);
// [1, 2, 3]
```

### Promise.all() との比較

`Array.fromAsync()` はオブジェクトから得られる値を順番に待ちます。 `Promise.all()` はすべての値を同時に待ちます。

```js
function* makeIterableOfPromises() {
  for (let i = 0; i < 5; i++) {
    yield new Promise((resolve) => setTimeout(resolve, 100));
  }
}

(async () => {
  console.time("Array.fromAsync() time");
  await Array.fromAsync(makeIterableOfPromises());
  console.timeEnd("Array.fromAsync() time");
  // Array.fromAsync() time: 503.610ms

  console.time("Promise.all() time");
  await Promise.all(makeIterableOfPromises());
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
    yield Promise.reject(new Error("error"));
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
// caught Error: error
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
