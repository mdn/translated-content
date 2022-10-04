---
title: function* 宣言
slug: Web/JavaScript/Reference/Statements/function*
---

{{jsSidebar("Statements")}}

**`function*`** 宣言 (`function` キーワードにアスタリスクが付いたもの) は、 {{jsxref("Global_Objects/Generator","Generator")}} オブジェクトを返すジェネレーター関数を定義します。

{{EmbedInteractiveExample("pages/js/statement-functionasterisk.html")}}

ジェネレーター関数は {{jsxref("GeneratorFunction")}} コンストラクターや、関数式の構文を使用して定義することもできます。

## 構文

```
function* name([param[, param[, ... param]]]) {
   statements
}
```

- `name`
  - : 関数名。
- `param` {{optional_inline}}
  - : 関数の形式上の引数の名前。
- `statements`
  - : 関数の本体を構成する文。

## 解説

ジェネレーターは処理を抜け出したり、後から復帰したりすることができる関数です。ジェネレーターのコンテキスト (変数の値)は復帰しても保存されます。

JavaScript のジェネレータは、特にプロミスと組み合わせることで、非同期プログラミングのための非常に強力なツールとなり、 [Callback Hell](http://callbackhell.com/) や [Inversion of Control](https://frontendmasters.com/courses/rethinking-async-js/callback-problems-inversion-of-control/) などのようなコールバックの問題を、完全に解決できるわけではないものの、軽減することができます。しかし、これらの問題は{{jsxref("Statements/async_function", "非同期関数", "", 1)}}を使用すると、さらにシンプルに解決することができます。

ジェネレーター関数を呼び出しても関数はすぐには実行されません。代わりに、関数のための[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)オブジェクトが返されます。イテレーターの `next()` メソッドが呼び出されると、ジェネレーター関数の処理は、イテレーターから返された値を特定する最初の {{jsxref("Operators/yield", "yield")}} 演算子か、ほかのジェネレーター関数に委任する {{jsxref("Operators/yield*", "yield*")}} に達するまで実行されます。 `next()` メソッドは産出された値を含む `value` プロパティと、ジェネレーターが最後の値を持つかを真偽値で示す `done` プロパティを持つオブジェクトを返します。引数つきで`next()` を呼び出すと、ジェネレーター関数の実行が再開され、処理が停止していた `yield` 式を `next()` の引数で置き換えます。

ジェネレーターで `return` 文が実行されると、ジェネレーターが終了します (つまり、それによって返されたオブジェクトの `done` プロパティが `true` に設定されます)。値が返された場合、それはジェネレーターによって返されたオブジェクトの `value` プロパティとして設定されます。 `return` 文とよく似ていますが、ジェネレーターの内部でエラーが発生した場合は、ジェネレーターの本体の中でキャッチしない限り、ジェネレーターは終了します。
ジェネレーターが終了すると、それ以降の `next()` の呼び出しでは、そのジェネレーターのコードは実行されず、 `{value: undefined, done: true}` の形のオブジェクトが返されるだけです。

## 例

### 単純な例

```js
function* idMaker() {
  var index = 0;
  while (true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// ...
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

var gen = generator(10);

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

var gen = logGenerator();

// 最初の next の呼び出しで、関数の最初から、
// 最初の yield 文の前まで実行される。
gen.next();             // 0
gen.next('pretzel');    // 1 pretzel
gen.next('california'); // 2 california
gen.next('mayonnaise'); // 3 mayonnaise
```

### ジェネレーターにおける return 文

```js
function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

var gen = yieldAndReturn()
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }
```

### オブジェクトプロパティとしてのジェネレーター

```js
const someObj = {
  *generator () {
    yield 'a';
    yield 'b';
  }
}

const gen = someObj.generator()

console.log(gen.next()); // { value: 'a', done: false }
console.log(gen.next()); // { value: 'b', done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### オブジェクトメソッドとしてのジェネレーター

```js
class Foo {
  *generator () {
    yield 1;
    yield 2;
    yield 3;
  }
}

const f = new Foo ();
const gen = f.generator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### 計算プロパティとしてのジェネレーター

```js
class Foo {
  *[Symbol.iterator] () {
    yield 1;
    yield 2;
  }
}

const SomeObj = {
  *[Symbol.iterator] () {
    yield 'a';
    yield 'b';
  }
}

console.log(Array.from(new Foo)); // [ 1, 2 ]
console.log(Array.from(SomeObj)); // [ 'a', 'b' ]
```

### ジェネレーターはコンストラクターではない

```js
function* f() {}
var obj = new f; // throws "TypeError: f is not a constructor
```

### 式で定義されたジェネレーター

```js
const foo = function* () {
  yield 10;
  yield 20;
};

const bar = foo();
console.log(bar.next()); // {value: 10, done: false}
```

### ジェネレーターの例

```
function* powers(n){
     //endless loop to generate
     for(let current =n;; current *= n){
         yield current;
     }
}

for(let power of powers(2)){
     //controlling generator
     if(power > 32) break;
     console.log(power)
           //2
          //4
         //8
        //16
       //32
}
```

## 仕様書

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-generator-function-definitions', 'function*')}} |

## ブラウザーの互換性

{{Compat("javascript.statements.generator_function")}}

## 関連情報

- {{jsxref("Operators/function*", "function* 式")}}
- {{jsxref("GeneratorFunction")}} オブジェクト
- [反復プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} オブジェクト
- {{jsxref("Statements/function", "function")}} 宣言
- {{jsxref("Operators/function", "function")}} 式
- {{jsxref("Functions_and_function_scope", "関数と関数スコープ", "", 1)}}
- その他のウェブリソース:

  - [Regenerator](http://facebook.github.io/regenerator/) an ES2015 generator compiler to ES5
  - [Forbes Lindesay: Promises and Generators: control flow utopia -- JSConf EU 2013](http://www.youtube.com/watch?v=qbKWsbJ76-s)
  - [Task.js](https://github.com/mozilla/task.js)
  - [Iterating generators asynchronously](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md#iterating-generators-asynchronously)
