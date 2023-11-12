---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
l10n:
  sourceCommit: 77176b1f35f73f319bb5b959e5c90db8b5a0f9ea
---

{{jsSidebar("Statements")}}

**`for await...of`** 文は、[非同期反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル)を、[同期反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)と同様に反復処理するループを作成します。この文は. [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await)　が使用できるコンテキスト、例えば[非同期関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function)の本体や[モジュール](/ja/docs/Web/JavaScript/Guide/Modules)内などでのみ使用できます。

{{EmbedInteractiveExample("pages/js/statement-forawaitof.html", "taller")}}

## 構文

```js-nolint
for await (variable of iterable)
  statement
```

- `variable`
  - : 一連の反復処理の各回において、値を受け取ります。[`const`](/ja/docs/Web/JavaScript/Reference/Statements/const)、[`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)、[`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) の何れかの宣言や、[代入文](/ja/docs/Web/JavaScript/Reference/Operators/Assignment)のターゲットとなるもの（前もって宣言された変数やオブジェクトプロパティ）を指定することができます。
- `iterable`
  - : 非同期反復可能オブジェクトまたは同期反復可能オブジェクト。このループが処理する一連の値の元となるものです。
- `statement`
  - : 反復処理のたびに実行される文です。`variable` を参照することができます。[ブロック文](/ja/docs/Web/JavaScript/Reference/Statements/block)を使用して、複数の文を実行することができます。

## 解説

`for await...of` ループが反復可能オブジェクトを反復処理する場合、最初に反復可能オブジェクトの [`[@@asyncIterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) メソッドを取得してそれを呼び出すと、[非同期イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル)が返されます。`@asyncIterator` メソッドが存在しない場合は、次に [`[@@iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) メソッドを探し、[同期イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)を返します。次に、 `next()`、`return()`、`throw()` メソッドから返されるすべてのオブジェクトを解決済みまたは拒否済みのプロミスにラップし、`value` プロパティがプロミスであれば解決済みにすることで、返された同期イテレーターを非同期イテレーターにラップします。ループは、最終的な非同期イテレーターの `next()` メソッドを繰り返し呼び出して、返されるプロミスを待ち、`variable` に代入される一連の値を生成します。

`for await...of` ループが早期に終了した場合（例えば、`break` 文に遭遇したり、エラーが throw された場合）、クリーンアップを実行するためにイテレーターの [`return()`](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) メソッドが呼び出されます。返されたプロミスは、ループが終了する前に待機されます。

`for await...of` は全般的に [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループと同様に機能し、構文や意味も共通しています。いくらか違いがあります。

- `for await...of` は同期または非同期の反復可能オブジェクトで動作しますが、 `for...of` は同期反復可能オブジェクトでのみ動作します。
- `for await...of` は [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) が使えるコンテキストでのみ使用できます。これは[非同期関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function)の本体や[モジュール](/ja/docs/Web/JavaScript/Guide/Modules)内などです。反復可能オブジェクトが同期の場合でも、ループは反復処理のたびに返値を待つことになり、プロミスのラップ解除を繰り返すため実行速度が遅くなります。
- `iterable` がプロミスを生成する同期反復可能オブジェクトである場合、`for await...of` は解決された値のシーケンスを生成するのに対し `for...of` はプロミスのシーケンスを生成します。（ただし、エラー処理と後始末には注意が必要です。[同期の反復可能オブジェクトおよびジェネレーターの反復処理](#同期の反復可能オブジェクトおよびジェネレーターの反復処理)を参照してください。）
- `for await...of` では、`variable` に識別子 `async` を取ることができます（例えば `for await (async of foo)`）。`for...of` では禁止されています。

## 例

### 非同期の反復可能オブジェクトでの繰り返し処理

非同期反復可能プロトコルを明示的に実装しているオブジェクトを反復処理することができます。

```js
const LIMIT = 3;

const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        const done = i === LIMIT;
        const value = done ? undefined : i++;
        return Promise.resolve({ value, done });
      },
      return() {
        // This will be reached if the consumer called 'break' or 'return' early in the loop.
        return { done: true };
      },
    };
  },
};

(async () => {
  for await (const num of asyncIterable) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

### 非同期のジェネレータの反復処理

非同期の反復可能プロトコルを実装している非同期ジェネレーターであれば、 `for await...of` を使用して繰り返し処理を行うことができます。

```js
async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async () => {
  for await (const num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

`for await...of` を使用して非同期ジェネレータを反復処理するより具体的な例として、API からのデータを反復処理することを考えてみましょう。

この例では、まずデータのストリームに対して非同期の反復可能オブジェクトを作成し、それを使用して API からのレスポンスの長さを計算します。

```js
async function* streamAsyncIterable(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

// URL からデータを取得し、非同期ジェネレータを使用してレスポンスの長さを計算します。
async function getResponseSize(url) {
  const response = await fetch(url);
  // レスポンスの長さをバイト単位で保持する
  let responseSize = 0;
  // for-await-of ループ。レスポンスの各部分を非同期に反復処理します。
  for await (const chunk of streamAsyncIterable(response.body)) {
    // レスポンスの全長に加算
    responseSize += chunk.length;
  }

  console.log(`Response Size: ${responseSize} bytes`); // "Response Size: 1071472"
  return responseSize;
}
getResponseSize("https://jsonplaceholder.typicode.com/photos");
```

### 同期の反復可能オブジェクトおよびジェネレーターの反復処理

`for await...of` ループは同期の反復可能オブジェクトやジェネレーターで使用することもできます。この場合、内部的にはループの制御変数に代入する前に、値が出力されるのを待ちます。

```js
function* generator() {
  yield 0;
  yield 1;
  yield Promise.resolve(2);
  yield Promise.resolve(3);
  yield 4;
}

(async () => {
  for await (const num of generator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
// 3
// 4

// for-of ループとの比較:

for (const numOrPromise of generator()) {
  console.log(numOrPromise);
}
// 0
// 1
// Promise { 2 }
// Promise { 3 }
// 4
```

> **メモ:** 同期のジェネレーターから拒否されたプロミスが生み出される場合があることに注意してください。このような場合、 `for await...of` は拒否されたプロミスを消費するので、ジェネレーター内の `finally` ブロックが呼び出されません。これは、確保したリソースを `try/finally` で解放する必要がある場合は望ましくない動作になる可能性があります。

```js
function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield 1;
    yield Promise.resolve(2);
    yield Promise.reject(3);
    yield 4;
    throw 5;
  } finally {
    console.log("called finally");
  }
}

(async () => {
  try {
    for await (const num of generatorWithRejectedPromises()) {
      console.log(num);
    }
  } catch (e) {
    console.log("caught", e);
  }
})();
// 0
// 1
// 2
// caught 3

// compare with for-of loop:

try {
  for (const numOrPromise of generatorWithRejectedPromises()) {
    console.log(numOrPromise);
  }
} catch (e) {
  console.log("caught", e);
}
// 0
// 1
// Promise { 2 }
// Promise { <rejected> 3 }
// 4
// caught 5
// called finally
```

同期ジェネレーター関数の `finally` ブロックが常に呼び出されるようにするには、非同期のジェネレーター関数の場合は `for await...of` を、同期ジェネレーター関数の場合は `for...of` を使用し、ループの中で生成されたプロミスを明示的に待つようにしてください。

```js
(async () => {
  try {
    for (const numOrPromise of generatorWithRejectedPromises()) {
      console.log(await numOrPromise);
    }
  } catch (e) {
    console.log("caught", e);
  }
})();
// 0
// 1
// 2
// caught 3
// called finally
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Global_Objects/Symbol/asyncIterator", "Symbol.asyncIterator")}}
- {{jsxref("Statements/for...of", "for...of")}}
