---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
---

{{jsSidebar("Statements")}}

**`for await...of` 文**は非同期および同期の[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能_iterable_プロトコル)を使用して、反復処理を行うループを作成します。たとえば、組込みの {{jsxref("String")}}, {{jsxref("Array")}}, 配列風オブジェクト (例えば {{jsxref("Functions/arguments", "arguments")}}, {{domxref("NodeList")}} など), {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, さらに、ユーザー定義の非同期・同期の反復可能オブジェクトを使用することができます。これはオブジェクトのそれぞれの識別可能なプロパティの値に対して、実行される文を表す独自の反復フックを呼び出します。 {{jsxref("Operators/await", "await")}} 演算子と同様に、この分は{{jsxref("Statements/async_function", "非同期関数", "", 1)}}の中でのみ使用されます。

> **メモ:** `for await...of` は非同期の反復可能オブジェクトではない非同期イテレーターでは動作しません。

## 構文

```
for await (variable of iterable) {
  statement
}
```

- `variable`
  - : 反復処理の各回において、異なるプロパティの値が `variable` に割り当てられます。 `variable` は `const`, `let`, `var` で宣言することができます。
- `iterable`
  - : 反復処理が行われる反復可能なプロパティを持つオブジェクトです。

## 例

### 非同期の反復可能オブジェクトでの繰り返し処理

非同期反復可能プロトコルを明示的に実装しているオブジェクトを反復処理することができます。

```js
const asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      }
    };
  }
};

(async function() {
   for await (let num of asyncIterable) {
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

(async function() {
  for await (let num of asyncGenerator()) {
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
      if (done) {
        return;
      }
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

  console.log(`Response Size: ${responseSize} bytes`);
  // 期待される出力: "Response Size: 1071472"
  return responseSize;
}
getResponseSize('https://jsonplaceholder.typicode.com/photos');
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

(async function() {
  for await (let num of generator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
// 3
// 4

// for-of ループとの比較:

for (let numOrPromise of generator()) {
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
    console.log('called finally')
  }
}

(async function() {
  try {
    for await (let num of generatorWithRejectedPromises()) {
      console.log(num);
    }
  } catch (e) {
    console.log('catched', e)
  }
})();
// 0
// 1
// 2
// catched 3

// for-of ループとの比較:

try {
  for (let numOrPromise of generatorWithRejectedPromises()) {
    console.log(numOrPromise);
  }
} catch (e) {
  console.log('catched', e)
}
// 0
// 1
// Promise { 2 }
// Promise { <rejected> 3 }
// 4
// catched 5
// called finally
```

同期ジェネレーター関数の `finally` ブロックが常に呼び出されるようにするには、非同期のジェネレーター関数の場合は `for await...of` を、同期ジェネレーター関数の場合は `for...of` を使用し、ループの中で生成されたプロミスを明示的に待つようにしてください。

```js
(async function() {
  try {
    for (let numOrPromise of generatorWithRejectedPromises()) {
      console.log(await numOrPromise);
    }
  } catch (e) {
    console.log('catched', e)
  }
})()
// 0
// 1
// 2
// catched 3
// called finally
```

## 仕様書

| 仕様書                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-for-in-and-for-of-statements', 'ECMAScript Language: The for-in, for-of, and for-await-of Statements')}} |

## ブラウザーの互換性

{{Compat("javascript.statements.for_await_of")}}

## 関連情報

- {{jsxref("Global_Objects/Symbol/asyncIterator", "Symbol.asyncIterator")}}
- {{jsxref("Statements/for...of", "for...of")}}
