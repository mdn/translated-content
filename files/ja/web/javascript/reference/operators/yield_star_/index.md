---
title: yield* 演算子
slug: Web/JavaScript/Reference/Operators/yield*
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`yield*`** 演算子は、ジェネレーター関数（同期または非同期）内で使用でき、別の [反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反覆可能プロトコル)（{{jsxref("Generator")}} など）への委任に使用することができます。非同期ジェネレーター関数内では、さらに別の非同期反復可能オブジェクト（{{jsxref("AsyncGenerator")}} など）への委任にも使用できます。
{{InteractiveExample("JavaScript デモ: yield* 演算子")}}

```js interactive-example
function* func1() {
  yield 42;
}

function* func2() {
  yield* func1();
}

const iterator = func2();

console.log(iterator.next().value);
// 予想される結果: 42
```

## 構文

```js-nolint
yield* expression
```

### 引数

- `expression` {{optional_inline}}
  - : 反復可能オブジェクトです。

### 返値

そのイテレーターが閉じられたとき（`done` が `true` のとき）に返される値を返します。

## 解説

`yield*` 式はオペランドを反復処理し、オペランドが返すそれぞれの値を生成します。これは現在のジェネレーターの反復処理を基盤となるイテレーターに委任します。これらをそれぞれ「ジェネレーター」と「イテレーター」と呼びます。 `yield*` は最初の、オペランドからイテレーターを、後者の [`[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) メソッドを呼び出すことで取得します。その後、ジェネレーターの `next()` メソッドが呼び出されるそれぞれの時点において、 `yield*` はイテレーターの `next()` メソッドを呼び出します。この際、ジェネレーターの `next()` メソッドが受け取った引数（最初の呼び出しでは常に `undefined`）を渡すと同時に、イテレーターの `next()` メソッドから返される結果オブジェクトと同じものをyieldします。イテレーターの結果が `done: true` を持つ場合、 `yield*` 式は実行を停止し、その結果の `value` を返します。

`yield*` 演算子は、現在のジェネレーターの {{jsxref("Generator/throw", "throw()")}} メソッドと {{jsxref("Generator/return", "return()")}} メソッドを、基盤となるイテレーターにも転送します。現在のジェネレーターがこれらのメソッドのいずれかによって早期に閉じられた場合、基盤となるイテレーターに通知されます。ジェネレーターの `throw()`/`return()` メソッドが呼び出されると、基盤となるイテレーターの `throw()`/`return()` メソッドが同じ引数で呼び出されます。`throw()`/`return()` の返値は `next()` メソッドの結果と同様に処理され、メソッドが例外を発生する場合、その例外は `yield*` 式から伝播されます。

基盤となるイテレーターに `return()` メソッドがない場合、`yield*` 式は、一時停止された {{jsxref("Operators/yield", "yield")}} 式で `return()` を呼び出すのと同様に、{{jsxref("Statements/return", "return")}} 文に変換されます。

基盤となるイテレーターに `throw()` メソッドがなければ、これにより `yield*` は {{jsxref("TypeError")}} を発生させます。ただし、エラーを発生させる前に、基盤となるイテレーターの `return()` メソッドが存在する場合、それが呼び出されます。

## 例

### 別のジェネレータに委任する

次のコードでは、 `g1()` によって生成される値は、 `g2()` で生成されるものと同じように `next()` の呼び出しから返されます。

```js
function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

const gen = g2();

console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: 4, done: false}
console.log(gen.next()); // {value: 5, done: false}
console.log(gen.next()); // {value: undefined, done: true}
```

### 他の反復可能なオブジェクト

ジェネレータオブジェクトのほかに、 `yield*` は他の種類の反復 (例えば、配列、文字列、 {{jsxref("Functions/arguments", "arguments")}} オブジェクト) を `yield` することができます。

```js
function* g3(...args) {
  yield* [1, 2];
  yield* "34";
  yield* args;
}

const gen = g3(5, 6);

console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: "3", done: false}
console.log(gen.next()); // {value: "4", done: false}
console.log(gen.next()); // {value: 5, done: false}
console.log(gen.next()); // {value: 6, done: false}
console.log(gen.next()); // {value: undefined, done: true}
```

### yield\* 式自体の値

`yield*` は式であり、文ではありません。そのため、値に評価されます。

```js
function* g4() {
  yield* [1, 2, 3];
  return "foo";
}

function* g5() {
  const g4ReturnValue = yield* g4();
  console.log(g4ReturnValue); // 'foo'
  return g4ReturnValue;
}

const gen = g5();

console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false} done は false。 g5 が終了せず g4 だけが終了しているため
console.log(gen.next()); // {value: 'foo', done: true}
```

### 非同期ジェネレーターとの使用

```js
async function* g1() {
  await Promise.resolve(0);
  yield "foo";
}

function* g2() {
  yield "bar";
}

async function* g3() {
  // yield* は非同期と同期の両方のイテレーターで使用できます
  yield* g1();
  yield* g2();
}

const gen = g3();

console.log(await gen.next()); // {value: "foo", done: false}
console.log(await gen.next()); // {value: "bar", done: false}
console.log(await gen.next()); // {done: true}
```

### メソッドの転送

現在のジェネレーターの `next()`、`throw()`、`return()` メソッドはすべて、基盤となるイテレーターに転送されます。

```js
const iterable = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next(v) {
        console.log("next called with", v);
        count++;
        return { value: count, done: false };
      },
      return(v) {
        console.log("return called with", v);
        return { value: "iterable return value", done: true };
      },
      throw(v) {
        console.log("throw called with", v);
        return { value: "iterable thrown value", done: true };
      },
    };
  },
};

function* gf() {
  yield* iterable;
  return "gf return value";
}

const gen = gf();
console.log(gen.next(10));
// next は undefined で呼び出される。最初の next() 呼び出しの引数は常に無視される
// { value: 1, done: false }
console.log(gen.next(20));
// next called with 20
// { value: 2, done: false }
console.log(gen.return(30));
// return called with 30
// { value: 'iterable return value', done: true }
console.log(gen.next(40));
// { value: undefined, done: true }; gen は既に閉じている

const gen2 = gf();
console.log(gen2.next(10));
// next called with undefined
// { value: 1, done: false }
console.log(gen2.throw(50));
// throw called with 50
// { value: 'gf return value', done: true }
console.log(gen.next(60));
// { value: undefined, done: true }; gen は既に閉じている
```

基盤となるイテレーターの `return()`/`throw()` メソッドが `done: false` を返した場合は、現在のジェネレーターは実行を続けて、 `yield*` は基盤となるイテレーターの委任を続けます。

```js
const iterable = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next(v) {
        console.log("next called with", v);
        count++;
        return { value: count, done: false };
      },
      return(v) {
        console.log("return called with", v);
        return { value: "iterable return value", done: false };
      },
    };
  },
};

function* gf() {
  yield* iterable;
  return "gf return value";
}

const gen = gf();
console.log(gen.next(10));
// next called with undefined
// { value: 1, done: false }
console.log(gen.return(20));
// return called with 20
// { value: 'iterable return value', done: false }
console.log(gen.next(30));
// { value: 2, done: false }; gen is not closed
```

基盤となるイテレーターに `throw()` メソッドがなく、ジェネレーターの `throw()` が呼び出された場合、 `yield*` はエラーを発生します。

```js
const iterable = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next(v) {
        count++;
        return { value: count, done: false };
      },
    };
  },
};

function* gf() {
  yield* iterable;
  return "gf return value";
}

const gen = gf();
gen.next(); // First next() starts the yield* expression
gen.throw(20); // TypeError: The iterator does not provide a 'throw' method.
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Iterator プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- [`function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Operators/yield", "yield")}}
