---
title: function* 宣言
slug: Web/JavaScript/Reference/Statements/function*
l10n:
  sourceCommit: 042b7d8ab67ddb6416da7772a789fd452441b6f6
---

**`function*`** 宣言は、新しいジェネレーター関数を指定された名前への{{Glossary("binding", "バインド")}}として作成します。ジェネレーター関数は、脱出した後でそのコンテキスト（変数の{{Glossary("binding", "バインド")}}）を保存したまま再入することが可能です。

ジェネレーター関数は [`function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/function*)を使って定義することもできます。

{{InteractiveExample("JavaScript デモ: Statement - Function*")}}

```js interactive-example
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// 予想される結果: 10

console.log(gen.next().value);
// 予想される結果: 20
```

## 構文

```js-nolint
function* name(param0) {
  statements
}
function* name(param0, param1) {
  statements
}
function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> ジェネレーター関数には、対応するアロー関数はありません。

> [!NOTE]
> `function` と `*` は別々なトークンなので、[ホワイトスペースまたは改行](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#ホワイトスペース)で区切ることが可能です。

### 引数

- `name`
  - : 関数名。
- `param` {{optional_inline}}
  - : 関数の形式上の引数の名前。引数の構文については、[関数リファレンス](/ja/docs/Web/JavaScript/Guide/Functions#関数の引数)を参照してください。
- `statements` {{optional_inline}}
  - : 関数の本体を構成する文。

## 解説

`function*` 宣言は {{jsxref("GeneratorFunction")}} オブジェクトを生成します。ジェネレーター関数が呼び出されるたびに、新しい {{jsxref("Generator")}} オブジェクトが返され、これは[イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)に準拠します。ジェネレーター関数の実行は、ある場所で中断されます。初期状態では関数本体の先頭で中断されます。ジェネレーター関数は複数回呼び出して複数のジェネレーターを同時に生成できます。各ジェネレーターは、ジェネレーター関数の[実行コンテキスト](/ja/docs/Web/JavaScript/Reference/Execution_model#stack_and_execution_contexts)を独自に保持し、独立してステップ実行できます。

ジェネレーターは双方向の制御フローをすることができます。制御フローはジェネレーター関数（呼び出し先）とその呼び出し側の間で、双方が望む回数だけ移行できます。制御フローは呼び出し側から呼び出し先へ、ジェネレーターのメソッド、[`next()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator/next)、[`throw()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw)、[`return()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator/return) を呼んで移行します。制御フローは、`return` や `throw` を使用して通常通り関数を終了させたり、すべての文を実行したり、`yield` および `yield*` 式を使用したりすることで、呼び出し側から呼び出し先へ進むことができます。

ジェネレーターの [`next()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator/next) メソッドが呼び出されると、ジェネレーター関数の本体は次のいずれかになるまで実行されます。

- {{jsxref("Operators/yield", "yield")}} 式。この場合、`next()` メソッドは、yield で返された値を含む `value` プロパティと、常に `false` である `done` プロパティを持つオブジェクトを返します。次に `next()` が呼び出されると、`yield` 式は `next()` に渡された値に評価されます。
- 別のイテレーターに委譲する {{jsxref("Operators/yield*", "yield*")}} 演算子。この場合、ジェネレーターに対するこの呼び出しおよび以降の `next()` 呼び出しは、委譲先のイテレーターが完了するまで、委譲先のイテレーターに対する `next()` 呼び出しと同等となります。
- {{jsxref("Statements/return", "return")}} 文（{{jsxref("Statements/try...catch", "try...catch...finally")}} で介入されないもの）、または制御フローの終わり（暗黙的に `return undefined` を意味します）。この場合、ジェネレーターは完了し、`next()` メソッドは返値を含む `value` プロパティと常に `true` となる `done` プロパティを持つオブジェクトを返します。以降の `next()` 呼び出しは効果を持たず、常に `{ value: undefined, done: true }` を返します。
- 関数内で発生したエラー（{{jsxref("Statements/throw", "throw")}} 文または未処理の例外による）。`next()`メソッドがこのエラーを発生させ、ジェネレータは完了する。以降の`next()`呼び出しは効果なく、常に`{ value: undefined, done: true }`を返す。

ジェネレーターの [`throw()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw) メソッドが呼び出されると、現在の中断位置でジェネレーターの本体に `throw` 文が挿入されたかのように動作します。同様に、ジェネレーターの [`return()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator/return) メソッドが呼び出されると、現在の中断位置に `return` 文が挿入されたかのように動作します。どちらのメソッドも、ジェネレーター関数が {{jsxref("Statements/try...catch", "try...catch...finally")}} によって完了をキャッチしない限り、通常はジェネレーターを完了させます。

ジェネレーターはかつて非同期プログラミングのパラダイムであり、[コールバック地獄](https://medium.com/@raihan_tazdid/callback-hell-in-javascript-all-you-need-to-know-296f7f5d3c1)を[制御の反転](https://frontendmasters.com/courses/rethinking-async-js/callback-problems-inversion-of-control/)によって避けることができました。現在では、この場合の解決はよりシンプルな [async 関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function)モデルと {{jsxref("Promise")}} オブジェクトで解決されています。しかし、ジェネレーターは依然として他の多くのタスク、例えば[イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)を直感的に定義するといった用途で有用です。

`function*` 宣言は {{jsxref("Statements/function", "function")}} 宣言と同様の挙動を示します。これらはスコープの先頭に[巻き上げられ](/ja/docs/Glossary/Hoisting)、そのスコープ内のどこでも呼び出せます。また、特定のコンテキストでのみ再宣言が可能です。

## 例

### 基本的な例

```js
function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// …
```

### yield\* を使用した例

```js
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

### ジェネレーターに引数を渡す

```js
function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

const gen = logGenerator();

// 最初の next の呼び出しで、関数の最初から、
// 最初の yield 文の前まで実行される。
gen.next(); // 0
gen.next("pretzel"); // 1 pretzel
gen.next("california"); // 2 california
gen.next("mayonnaise"); // 3 mayonnaise
```

### ジェネレーターにおける return 文

```js
function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

const gen = yieldAndReturn();
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }
```

### オブジェクトプロパティとしてのジェネレーター

```js
const someObj = {
  *generator() {
    yield "a";
    yield "b";
  },
};

const gen = someObj.generator();

console.log(gen.next()); // { value: 'a', done: false }
console.log(gen.next()); // { value: 'b', done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### オブジェクトメソッドとしてのジェネレーター

```js
class Foo {
  *generator() {
    yield 1;
    yield 2;
    yield 3;
  }
}

const f = new Foo();
const gen = f.generator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### 計算プロパティとしてのジェネレーター

```js
class Foo {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
  }
}

const SomeObj = {
  *[Symbol.iterator]() {
    yield "a";
    yield "b";
  },
};

console.log(Array.from(new Foo())); // [ 1, 2 ]
console.log(Array.from(SomeObj)); // [ 'a', 'b' ]
```

### ジェネレーターはコンストラクターではない

```js
function* f() {}
const obj = new f(); // throws "TypeError: f is not a constructor
```

### ジェネレーターの例

```js
function* powers(n) {
  // 生成の無限ループ
  for (let current = n; ; current *= n) {
    yield current;
  }
}

for (const power of powers(2)) {
  // ジェネレーターを制御
  if (power > 32) {
    break;
  }
  console.log(power);
  // 2
  // 4
  // 8
  // 16
  // 32
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)ガイド
- [イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)ガイド
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("GeneratorFunction")}}
- [`function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Generator")}}
- [Regenerator](https://github.com/facebook/regenerator) - GitHub
- [Promises and Generators: control flow utopia](https://youtu.be/qbKWsbJ76-s) presentation by Forbes Lindesay at JSConf (2013)
- [Task.js](https://github.com/mozilla/task.js) on GitHub
- [You Don't Know JS: Async & Performance, Ch.4: Generators](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md) by Kyle Simpson
