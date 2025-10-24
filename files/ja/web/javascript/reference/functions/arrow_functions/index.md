---
title: アロー関数式
slug: Web/JavaScript/Reference/Functions/Arrow_functions
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**アロー関数式**は、従来の[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)の簡潔な代替構文ですが、意味的な違いや意図的な使用上の制限もあります。

- アロー関数自身には [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this)、[`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments)、[`super`](/ja/docs/Web/JavaScript/Reference/Operators/super) への{{Glossary("binding", "バインド")}}がないので、[メソッド](/ja/docs/Glossary/Method)として使用することはできません。
- アロー関数は[コンストラクター](/ja/docs/Glossary/Constructor)として使用することはできません。 [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) をつけて呼び出すと {{jsxref("TypeError")}} が発生します。 [`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) キーワードにアクセスすることもできません。
- アロー関数は本体内で [`yield`](/ja/docs/Web/JavaScript/Reference/Operators/yield) を使用することができず、ジェネレーター関数として作成することもできません。

{{InteractiveExample("JavaScript デモ: アロー関数式")}}

```js interactive-example
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length));
// 予想される結果: Array [8, 6, 7, 9]
```

## 構文

```js-nolint
() => 式

引数 => 式

(引数) => 式

(引数1, 引数N) => 式

() => {
  文
}

引数 => {
  文
}

(引数1, 引数N) => {
  文
}
```

引数内での[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)、[デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)、[構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)には対応していますが、常に括弧が必要になります。

```js-nolint
(a, b, ...r) => 式
(a = 400, b = 20, c) => 式
([a, b] = [10, 20]) => 式
({ a, b } = { a: 10, b: 20 }) => 式
```

アロー関数は、 [`async`](/ja/docs/Web/JavaScript/Reference/Statements/async_function) にすることができます。この場合は式の前に `async` キーワードを付けます。

```js-nolint
async 引数 => 式
async (引数1, 引数2, ...引数N) => {
  文
}
```

### 解説

伝統的な無名関数を、最も単純なアロー関数に段階的に分解してみましょう。それぞれの段階も有効なアロー関数です。

> [!NOTE]
> 従来の関数式とアロー関数は、構文以外にも異なる点があります。次のいくつかの節で、その動作の違いを詳しく紹介します。

```js-nolint
// 従来の無名関数
(function (a) {
  return a + 100;
});

// 1. "function" という語を削除し、引数と本体の開始中括弧の間に矢印を配置する
(a) => {
  return a + 100;
};

// 2. 本体の中括弧を削除と "return" という語を削除 — return は既に含まれています。
(a) => a + 100;

// 3. 引数の括弧を削除
a => a + 100;
```

上の例では、引数を囲む括弧と関数本体を囲む中括弧の両方を省略することができます。ただし、省略できるのは特定の場合のみです。

括弧を省略できるのは、関数に単一の単純な引数がある場合だけです。複数の引数がある場合、引数がない場合、デフォルト引数、構造分解、残余引数がある場合は、引数リストを括弧で囲む必要があります。

```js
// 従来の無名関数
(function (a, b) {
  return a + b + 100;
});

// アロー関数
(a, b) => a + b + 100;

const a = 4;
const b = 2;

// 従来の関数（引数なし）
(function () {
  return a + b + 100;
});

// アロー関数（引数なし）
() => a + b + 100;
```

中括弧を省略できるのは、関数が直接式を返す場合だけです。本体に文がある場合は中括弧が必要となり、 `return` キーワードも必要となります。アロー関数はいつ何を返すかを推測することはできません。

```js
// 従来の関数
(function (a, b) {
  const chuck = 42;
  return a + b + chuck;
});

// アロー関数
(a, b) => {
  const chuck = 42;
  return a + b + chuck;
};
```

アロー関数は、本質的に名前に関連付けられていません。アロー関数を自身で呼び出す必要がある場合は、代わりに名前付き関数式を使用してください。また、アロー関数を変数に代入し、その変数を通して参照することもできます。

```js
// 従来の関数
function bob(a) {
  return a + 100;
}

// アロー関数
const bob2 = (a) => a + 100;
```

### 関数の本体

アロー関数は、式本体 (expression body) か、もしくはより一般的なブロック本体 (block body) のどちらかを使用することができます。

式本体においては、単一の式しか記述できないので、その式が暗黙的に return される値となります。しかし、ブロック本体においては、明示的に `return` 文を使用する必要があります。

```js
const func = (x) => x * x;
// 式本体の場合、暗黙の "return" があります

const func2 = (x, y) => {
  return x + y;
};
// ブロック本体では、明示的な "return" が必要です
```

式本体 `(params) => { object: literal }` を使ってオブジェクトリテラルを返そうとしても、期待通りに動作しないことに注意しましょう。

```js-nolint example-bad
const func = () => { foo: 1 };
// 呼び出した func() は undefined を返す！

const func2 = () => { foo: function () {} };
// SyntaxError: function statement requires a name

const func3 = () => { foo() {} };
// SyntaxError: Unexpected token '{'
```

これは、 JavaScript がアロー関数を式本体とみなすのは、アローに続くトークンが左中括弧でない場合のみであるため、中括弧 ({}) 内のコードは一連の文として解釈され、 `foo` はオブジェクトリテラルのキーではなく、[ラベル](/ja/docs/Web/JavaScript/Reference/Statements/label)となります。

これを修正するには、オブジェクトリテラルを括弧で囲んでください。

```js example-good
const func = () => ({ foo: 1 });
```

### メソッドとしては使用不可

アロー関数式は自分自身で `this` を持たないので、メソッドではない関数にのみ使用してください。メソッドとして使用しようとするとどうなるか見てみましょう。

```js
"use strict";

const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
};

obj.b(); // undefined, Window { /* … */ } (またはグローバルオブジェクト) と表示
obj.c(); // 10, Object { /* … */ } と表示
```

{{jsxref("Object.defineProperty()")}} を使った他の例です。

```js
"use strict";

const obj = {
  a: 10,
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this); // undefined 'undefined' Window { /* … */ } (またはグローバルオブジェクト)
    return this.a + 10; // グローバルオブジェクト 'Window' を表すので、 'this.a' は 'undefined' を返す
  },
});
```

[クラス](/ja/docs/Web/JavaScript/Reference/Classes)の本体は `this` コンテキストを持っているので、[クラスフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)のようなアロー関数はクラスの `this` コンテキストを閉じ、アロー関数の本体の中の `this` はインスタンス（または[静的フィールド](/ja/docs/Web/JavaScript/Reference/Classes/static)の場合はクラス自体）を正しく参照します。しかし、これは関数自身のバインディングではなく、[クロージャ](/ja/docs/Web/JavaScript/Guide/Closures)であるため、 `this` の値が実行コンテキストによって変わることはありません。

```js
class C {
  a = 1;
  autoBoundMethod = () => {
    console.log(this.a);
  };
}

const c = new C();
c.autoBoundMethod(); // 1
const { autoBoundMethod } = c;
autoBoundMethod(); // 1
// 通常のメソッドであれば、この場合は未定義になるはずです。
```

アロー関数のプロパティはよく「自動バインドメソッド」と言いますが、これは通常のメソッドと同等だからです。

```js
class C {
  a = 1;
  constructor() {
    this.method = this.method.bind(this);
  }
  method() {
    console.log(this.a);
  }
}
```

> [!NOTE]
> クラスフィールドはインスタンスで定義され、プロパティでは定義されていません。そのため、インスタンスを作成するたびに新しい関数参照が作成され、新しいクロージャが割り当てられます。これにより、通常の非バインドメソッドよりも多くのメモリーが使用される可能性があります。

同様の理由で、[`call()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call)、[`apply()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)、[`bind()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) の各メソッドは、アロー関数で呼び出されても有益ではありません。アロー関数は、アロー関数が定義されているスコープに基づいて `this` の値を定義しており、関数の呼び出し方によってこの値が変わることはないからです。

### arguments のバインドがない

アロー関数は自身の [`arguments` オブジェクト](/ja/docs/Web/JavaScript/Reference/Functions/arguments)を持ちません。そのため、この例では、 `arguments` は囲っているスコープでの同名変数への参照にすぎません。

```js
function foo(n) {
  const f = () => arguments[0] + n; // foo は arguments をバインドしている。 arguments[0] は n である
  return f();
}

foo(3); // 3 + 3 = 6
```

多くの場合、[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)が `arguments` オブジェクトの代わりに使えます。

```js
function foo(n) {
  const f = (...args) => args[0] + n;
  return f(10);
}

foo(1); // 11
```

### コンストラクターとしては使用不可

アロー関数はコンストラクターとして使用することができず、 [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を付けて呼び出されるとエラーが発生します。また、 [`prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) プロパティもありません。

```js
const Foo = () => {};
const foo = new Foo(); // TypeError: Foo is not a constructor
console.log("prototype" in Foo); // false
```

### ジェネレーターとしては使用不可

[`yield`](/ja/docs/Web/JavaScript/Reference/Operators/yield) キーワードはアロー関数内で使用できません（内部で入れ子になった関数が許可されている場合を除く）。結果として、アロー関数はジェネレーターとして使用できません。

### アローの前の改行

アロー関数では、括弧とアロー（矢印）の間に改行を入れることができません。

```js-nolint example-bad
const func = (a, b, c)
  => 1;
// SyntaxError: Unexpected token '=>'
```

しかし、矢印の後に改行を入れたり、以下のように括弧や中括弧を使用して、コードがきれいで滑らかになるように修正することができます。また、引数同士の間にも改行を入れることができます。

```js-nolint
const func = (a, b, c) =>
  1;

const func2 = (a, b, c) => (
  1
);

const func3 = (a, b, c) => {
  return 1;
};

const func4 = (
  a,
  b,
  c,
) => 1;
```

### アロー関数の優先順位

アロー関数のアロー（矢印）は演算子ではありませんが、アロー関数には特別な解釈ルールがあり、通常の関数とは[演算子の優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)の扱いが異なります。

```js-nolint example-bad
let callback;

callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments
```

`=>` はほとんどの演算子よりも優先順位が低いので、`callback || ()` がアロー関数の引数リストとして解釈されるのを避けるために括弧が必要になります。

```js example-good
callback = callback || (() => {});
```

## 例

### 基本的な例

```js
// 空のアロー関数は undefined を返します
const empty = () => {};

(() => "foobar")();
// "foobar" を返します
// （これは、即時起動型の関数式です。）

const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

const max = (a, b) => (a > b ? a : b);

// 簡単な配列のフィルタリング、マッピング等
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// さらに簡潔なプロミスチェーン
promise
  .then((a) => {
    // …
  })
  .then((b) => {
    // …
  });

// 引数なしのアロー関数
setTimeout(() => {
  console.log("I happen sooner");
  setTimeout(() => {
    // deeper code
    console.log("I happen later");
  }, 1);
}, 1);
```

### call、apply、bind の使用

[`call`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call)、[`apply`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)、[`bind`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) は、従来の関数ではそれぞれのメソッドにスコープを確立するので、期待通りに動作します。

```js
const obj = {
  num: 100,
};

// "num" を window に設定し、使用されていないことを表す。
globalThis.num = 42;

// 単純な従来の関数で "this" を運用する
function add(a, b, c) {
  return this.num + a + b + c;
}

console.log(add.call(obj, 1, 2, 3)); // 106
console.log(add.apply(obj, [1, 2, 3])); // 106
const boundAdd = add.bind(obj);
console.log(boundAdd(1, 2, 3)); // 106
```

アロー関数では、 `add` 関数は基本的に `window` (グローバル) スコープで作成されているので、 `this` は window だと仮定されます。

```js
const obj = {
  num: 100,
};

// "num" を window に設定し、どのように扱われるかを見る。
globalThis.num = 42;

// アロー関数
const add = (a, b, c) => this.num + a + b + c;

console.log(add.call(obj, 1, 2, 3)); // 48
console.log(add.apply(obj, [1, 2, 3])); // 48
const boundAdd = add.bind(obj);
console.log(boundAdd(1, 2, 3)); // 48
```

おそらくアロー関数を使う最大の利点は、 DOM レベルのメソッド（{{domxref("Window.setTimeout", "setTimeout()")}} や {{domxref("EventTarget/addEventListener()", "EventTarget.prototype.addEventListener()")}}）で、通常は何らかのクロージャ、`call()`、`apply()`、`bind()` を使用して、関数が適切なスコープで実行されることを確認する必要があることです。

従来の関数式では、このようなコードは期待通りに動作しません。

```js
const obj = {
  count: 10,
  doSomethingLater() {
    setTimeout(function () {
      // この関数は window のスコープで実行される
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // "NaN" と表示。 "count" プロパティが window のスコープにないため。
```

アロー関数を使えば、 `this` スコープをより簡単に保持することができます。

```js
const obj = {
  count: 10,
  doSomethingLater() {
    // メソッドの構文で "this" を "obj" コンテキストにバインドする
    setTimeout(() => {
      // アロー関数は独自のバインドを行わないので、
      // setTimeout （関数呼び出しとして）は自身へのバインドを作成せず、
      // 外部メソッドの "obj" コンテキストが使用される。
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // logs 11
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)ガイド
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/function", "function")}}
- [`function` 式](/ja/docs/Web/JavaScript/Reference/Operators/function)
- [ES6 In Depth: Arrow functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/) (hacks.mozilla.org, 2015)
