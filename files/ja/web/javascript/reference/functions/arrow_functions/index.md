---
title: アロー関数式
slug: Web/JavaScript/Reference/Functions/Arrow_functions
---

{{jsSidebar("Functions")}}

**アロー関数式**は、従来の [関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)の簡潔な代替構文ですが、制限があり、すべての場面で使用することができるわけではできません。

*アロー関数*と*従来の関数*には違いがあり、また制限もあります。

- アロー関数には、[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this)、[`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments)、[`super`](/ja/docs/Web/JavaScript/Reference/Operators/super) への結びつけがないので、[メソッド](/ja/docs/Glossary/Method)として使用することはできません。
- アロー関数には [`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) キーワードがありません。
- アロー関数は、[`call`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call)、[`apply`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)、[`bind`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) のような、一般に[スコープ](/ja/docs/Glossary/Scope)を確立することを前提としたメソッドには適していません。
- アロー関数は[コンストラクター](/ja/docs/Glossary/Constructor)として使用することはできません。
- アロー関数は本体内で [`yield`](/ja/docs/Web/JavaScript/Reference/Operators/yield) を使用することはできません。

{{EmbedInteractiveExample("pages/js/functions-arrow.html")}}

### 従来の関数とアロー関数の比較

「従来の関数」を分解して、最もシンプルな「アロー関数」に段階的に変えていきましょう。

> **メモ:** 途中の各ステップは有効な「アロー関数」です。

```js
// 従来の関数
function (a){
  return a + 100;
}

// アロー関数に分解

// 1. "function" という語を削除し、引数と本体の開始中括弧の間に矢印を配置する
(a) => {
  return a + 100;
}

// 2. 本体の中括弧を削除と "return" という語を削除 -- return は既に含まれています。
(a) => a + 100;

// 3. 引数の括弧を削除
a => a + 100;
```

{ 中括弧 } と ( 括弧 ) と "return" は必要になる場合もあります。

例えば、**複数の引数**や**引数なし**の場合、引数の周りの括弧を入れなおす必要があります。

```js
// 従来の関数
function (a, b){
  return a + b + 100;
}

// アロー関数
(a, b) => a + b + 100;

// 従来の関数 (引数なし)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}

// アロー関数 (引数なし)
let a = 4;
let b = 2;
() => a + b + 100;
```

同様に、本文に処理の**追加の行**が必要な場合は、中括弧**に加えて "return"** を入れなおす必要があります（アロー関数は "return" する場所や返値を魔法のように推測できるわけではありません）。

```js
// 従来の関数
function (a, b){
  let chuck = 42;
  return a + b + chuck;
}

// アロー関数
(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}
```

そして最後に、**名前付き関数**については、変数のようにアロー関数式を扱います。

```js
// 従来の関数
function bob(a) {
  return a + 100;
}

// アロー関数
let bob = (a) => a + 100;
```

## 構文

### 基本的な構文

引数が単一の場合。単純な式ならば return は不要です。

```js
(param) => expression;
```

引数が複数の場合は括弧が必要です。単純な式ならば return は不要です。

```js
(param1, paramN) => expression;
```

複数行の文ならば、本体の中括弧と return が必要です。

```js
(param) => {
  let a = 1;
  return a + param;
};
```

引数が複数の場合は括弧が必要です。複数行の文ならば、本体の中括弧と return が必要です。

```js
(param1, paramN) => {
  let a = 1;
  return a + param1 + paramN;
};
```

### 高度な構文

オブジェクトリテラル式を返す場合は、式の周りに括弧が必要です。

```js
(params) => ({ foo: "a" }); // オブジェクト {foo: "a"} を返す
```

[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)に対応しています。

```js
(a, b, ...r) => expression;
```

[デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)に対応しています。

```js
(a = 400, b = 20, c) => expression;
```

引数の[分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)に対応しています。

```js
([a, b] = [10, 20]) => a + b; // result is 30
({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30
```

## 解説

### メソッドとして使われるアロー関数

前に述べたように、アロー関数式は非メソッド型の関数に最もよく合っています。これをメソッドとして使った時のことを見てみましょう。

```js
"use strict";

var obj = {
  // 新しいスコープを作成しない
  i: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(this.i, this);
  },
};

obj.b(); // undefined, Window {...} (or the global object) と表示
obj.c(); // 10, Object {...} と表示
```

アロー関数は自身の `this` を持ちません。{{jsxref("Object.defineProperty()")}} を使った他の例です。

```js
"use strict";

var obj = {
  a: 10,
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this); // undefined 'undefined' Window {...} (or the global object)
    return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
  },
});
```

### call、apply、bind

[`call`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call)、[`apply`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)、[`bind`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) の各メソッドは、アロー関数には**ふさわしくありません**。これらは異なるスコープ内でメソッドを実行できるようにするために設計されているものです。_アロー関数は、そのアロー関数が定義されているスコープに基づいて "this" を確立するからです。_

[`call`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call)、[`apply`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)、[`bind`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) は、従来の関数ではそれぞれのメソッドにスコープを確立するので、期待通りに動作します。

```js
// ----------------------
// 従来の関数の例
// ----------------------
// 単純化されたオブジェクトで "this" を持つ
var obj = {
  num: 100,
};

// "num" を window に設定し、使用されていないことを表す。
window.num = 2020; // yikes!

// 単純な従来の関数で "this" を運用する
var add = function (a, b, c) {
  return this.num + a + b + c;
};

// call
var result = add.call(obj, 1, 2, 3); // "obj" としてスコープを確立
console.log(result); // result 106

// apply
const arr = [1, 2, 3];
var result = add.apply(obj, arr); // "obj" としてスコープを確立
console.log(result); // result 106

// bind
var result = add.bind(obj); // "obj" としてスコープを確立
console.log(result(1, 2, 3)); // result 106
```

アロー関数では、 `add` 関数は基本的に `window` (グローバル) スコープで作成されているので、 `this` は window だと仮定されます。

```js
// ----------------------
// アロー関数の例
// ----------------------

// 単純化されたオブジェクトで "this" を持つ
var obj = {
  num: 100,
};

// "num" を window に設定し、どのように扱われるかを見る。
window.num = 2020; // yikes!

// アロー関数
var add = (a, b, c) => this.num + a + b + c;

// call
console.log(add.call(obj, 1, 2, 3)); // result 2026

// apply
const arr = [1, 2, 3];
console.log(add.apply(obj, arr)); // result 2026

// bind
const bound = add.bind(obj);
console.log(bound(1, 2, 3)); // result 2026
```

おそらくアロー関数を使う最大の利点は、 DOM レベルのメソッド (`setTimeout`, `setInterval`, `addEventListener`) で、通常は何らかのクロージャ、call、apply、bind を使用して、関数が適切なスコープで実行されることを確認する必要があることです。

#### 従来の関数の例

```js
var obj = {
  count: 10,
  doSomethingLater: function () {
    setTimeout(function () {
      // 関数を window スコープで実行
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // コンソールに "NaN" と表示。 "count" プロパティは window スコープではないため。
```

#### アロー関数の例

```js
var obj = {
  count: 10,
  doSomethingLater: function () {
    // 従来の関数は "this" を "obj" コンテキストに結びつける
    setTimeout(() => {
      // アロー関数はそれ自身のバインディングを持たず、
      // setTimeout （関数呼び出しとして）はバインディング
      // 自体を作成しないので、従来の関数の "obj" コンテキスト
      // が中で使用されることになります。
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater();
```

### `arguments` のバインドがない

アロー関数は自身の [`arguments` オブジェクト](/ja/docs/Web/JavaScript/Reference/Functions/arguments)を持ちません。そのため、この例では、`arguments` は囲っているスコープでの同名変数への参照にすぎません。

```js
var arguments = [1, 2, 3];
var arr = () => arguments[0];

arr(); // 1

function foo(n) {
  var f = () => arguments[0] + n; // foo は arguments をバインドしている。 arguments[0] は n である
  return f();
}

foo(3); // 3 + 3 = 6
```

多くの場合、[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)が `arguments` オブジェクトの代わりに使えます。

```js
function foo(n) {
  var f = (...args) => args[0] + n;
  return f(10);
}

foo(1); // 11
```

### `new` 演算子の使用

アロー関数はコンストラクターとして使用できず、`new` と共に使うとエラーが発生します。

```js
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor
```

### `prototype` プロパティの使用

アロー関数には `prototype` プロパティはありません。

```js
var Foo = () => {};
console.log(Foo.prototype); // undefined
```

### `yield` キーワードの使用

[`yield`](/ja/docs/Web/JavaScript/Reference/Operators/yield) キーワードはアロー関数内で使用できません（内部で入れ子になった関数が許可されている場合を除く）。結果として、アロー関数はジェネレーターとして使用できません。

### 関数の本体

アロー関数は、簡潔文体 (concise body)か、もしくはより一般的なブロック文体 (block body) のどちらかを使用することができます。

簡潔文体においては、単一の式しか記述できないので、その式が暗黙的に return される値となります。しかし、ブロック文体においては、自動的に return はされないので、明示的に `return` 文を使用する必要があります。

```js
var func = (x) => x * x;
// 簡潔構文の場合、暗黙の "return" があります

var func = (x, y) => {
  return x + y;
};
// ブロック文体では、明示的な "return" が必要です
```

### オブジェクトリテラルの返却

簡潔文体 `params => {object:literal}` を使ってオブジェクトリテラルを返そうとしても、期待通りに動作しないことに注意しましょう。

```js
var func = () => { foo: 1 };
// 呼び出した func() は undefined を返す！

var func = () => { foo: function() {} };
// SyntaxError: function 文には名前が必要
```

これは、括弧 ({}) 内のコードが文の列として構文解析されてしまっているからです（つまり、`foo` はオブジェクトリテラル内のキーでなく、ラベルとして扱われています）。

オブジェクトリテラルは括弧で囲むのを忘れないでください。

```js
var func = () => ({ foo: 1 });
```

### 改行

アロー関数では、括弧とアロー（矢印）の間に改行を入れることができません。

```js
var func = (a, b, c)
  => 1;
// SyntaxError: Unexpected token '=>'
```

しかし、矢印の後に改行を入れたり、以下のように括弧や中括弧を使用して、コードがきれいで滑らかになるように修正することができます。また、引数同士の間にも改行を入れることができます。

```js
var func = (a, b, c) => 1;

var func = (a, b, c) => 1;

var func = (a, b, c) => {
  return 1;
};

var func = (a, b, c) => 1;

// SyntaxError は発生しない
```

### 解釈の順序

アロー関数のアロー (矢印) は演算子ではありませんが、アロー関数には特別な解釈ルールがあり、通常の関数とは[演算子の優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)の扱いが異なります。

```js
let callback;

callback = callback || function() {}; // ok

callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments

callback = callback || (() => {});    // ok
```

## 例

### 基本的な例

```js
// 空のアロー関数は undefined を返します
let empty = () => {};

(() => "foobar")();
// "foobar" を返します
// (これは、即時起動型の関数式です。)

var simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

let max = (a, b) => (a > b ? a : b);

// 簡単な配列のフィルターリング、マッピング等

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);
// 66

var even = arr.filter((v) => v % 2 == 0);
// [6, 0, 18]

var double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// さらに簡潔な promise チェーン
promise
  .then((a) => {
    // ...
  })
  .then((b) => {
    // ...
  });

// 見た目に解析が簡単な引数なしのアロー関数
setTimeout(() => {
  console.log("I happen sooner");
  setTimeout(() => {
    // deeper code
    console.log("I happen later");
  }, 1);
}, 1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- ["ES6 In Depth: Arrow functions" (hacks.mozilla.org)](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)
