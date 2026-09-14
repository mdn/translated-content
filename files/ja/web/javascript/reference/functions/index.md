---
title: 関数
slug: Web/JavaScript/Reference/Functions
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

一般的に言うと、関数とは外部 (再帰の場合は内部) から呼び出すことのできる「サブプログラム」です。プログラムそのもののように、関数は関数本体 (_function body_) と呼ばれる連続した文で構成されます。関数には引数として値を渡すことができ、関数は値を返すことができます。

JavaScript で、関数は[第一級オブジェクト](/ja/docs/Glossary/First-class_Function)です。関数は他の関数に渡したり、関数から返したり、変数やプロパティに代入したりできるからです。また、それ以外のオブジェクトと同様にプロパティやメソッドを持つこともできます。他のオブジェクトと異なる点は、関数は呼び出せるということです。

より詳細な例や解説については、[JavaScript の関数のガイド](/ja/docs/Web/JavaScript/Guide/Functions)を参照してください。

## 解説

関数値は通常、[`Function`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) のインスタンスです。 `Function` オブジェクトのプロパティとメソッドに関する情報については、 {{jsxref("Function")}} を参照してください。呼び出し可能な値であるため、[`typeof`](/ja/docs/Web/JavaScript/Reference/Operators/typeof) は `"object"` ではなく `"function"` を返します。

> [!NOTE]
> 呼び出し可能な値のすべてが `instanceof Function` であるとは限りません。例えば、`Function.prototype` オブジェクトは呼び出し可能ですが、`Function` のインスタンスではありません。また、関数の[プロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)を手動で設定して、`Function.prototype` からの継承をやめることもできます。ただし、そのようなケースは非常に稀です。

### 返値

既定では、関数の実行が [`return`](/ja/docs/Web/JavaScript/Reference/Statements/return) 文で終わらない場合、または `return` キーワードの後に式がない場合、返値は {{jsxref("undefined")}} となります。 `return` 文を使用すると、関数から任意の値を返すことができます。 1 回の関数呼び出しで返せる値は 1 つだけですが、オブジェクトや配列を返して結果を[構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)することで、複数の値を返す効果を模倣することができます。

> [!NOTE]
> [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) で呼び出されるコンストラクターは、返値を決定するための一連のロジックが異なります。

### 引数の受け渡し

[仮引数 (parameter) と実引数 (argument)](https://ja.wikipedia.org/wiki/引数)があり、意味が若干異なりますが、 MDN web docs では多くの場合同じ意味で使用されています。簡単に言うと、

```js
function formatNumber(num) {
  return num.toFixed(2);
}

formatNumber(2);
```

この例では、 `num` 変数は関数の「仮引数」 (_parameter_) と呼ばれ、関数定義の括弧で囲まれたリスト内で宣言されます。関数は `num` 仮引数が数値であることを期待しています。ただし、 JavaScript では実行時検証コードを書かない限り、これを強制することはできません。 `formatNumber(2)` の呼び出しにおいて、数値 `2` は関数の「実引数」 (_argument_) です。これは関数呼び出し時に実際に渡される値です。 実引数の値は、関数本体内で対応する引数名または [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) オブジェクトを通じてアクセスできます。

引数は常に[値渡し](https://ja.wikipedia.org/wiki/評価戦略#値呼び)であり、決して参照渡しではありません。これは、関数が引数に再代入を行っても、関数外では値が変更されないということです。より正確には、オブジェクト引数は[共有渡し](https://ja.wikipedia.org/wiki/評価戦略#参照の値渡し)です。つまり、オブジェクトのプロパティが変更される場合、その変更は関数外にも影響するということです。例えば、

```js
function updateBrand(obj) {
  // オブジェクトの変更は関数外からも見える
  obj.brand = "Toyota";
  // 仮引数に再代入してみても、関数外での変数の値には影響しない
  obj = null;
}

const car = {
  brand: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(car.brand); // Honda

// オブジェクト参照を関数へ渡す
updateBrand(car);

// updateBrand が car を変更した
console.log(car.brand); // Toyota
```

[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) キーワードは、関数がアクセスされたオブジェクトを参照します。現在実行中の関数を参照するのではなく、関数本体内であっても関数値は名前で参照する必要があります。

### 関数の定義

大まかに言えば、 JavaScript には 4 種類の関数があります。

- 通常関数: 何でも返すことができます。呼び出し後、常に完了するまで実行します。
- ジェネレーター関数: [`Generator`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator) オブジェクトを返します。 [`yield`](/ja/docs/Web/JavaScript/Reference/Operators/yield) 演算子で一時停止や再開ができます。
- 非同期関数: [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。 [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) 演算子で一時停止や再開ができます。
- 非同期ジェネレーター関数: [`AsyncGenerator`](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) オブジェクトを返します。 `await` と `yield` の両方の演算子を使用できます。

どの種類の関数でも、それを定義する方法は複数あります。

- 宣言
  - : [`function`](/ja/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/ja/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/ja/docs/Web/JavaScript/Reference/Statements/async_function), [`async function*`](/ja/docs/Web/JavaScript/Reference/Statements/async_function*)
- 式
  - : [`function`](/ja/docs/Web/JavaScript/Reference/Operators/function), [`function*`](/ja/docs/Web/JavaScript/Reference/Operators/function*), [`async function`](/ja/docs/Web/JavaScript/Reference/Operators/async_function), [`async function*`](/ja/docs/Web/JavaScript/Reference/Operators/async_function*)
- コンストラクター
  - : [`Function()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), [`GeneratorFunction()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction), [`AsyncFunction()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction), [`AsyncGeneratorFunction()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)

さらに、[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions) と [メソッド](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions) を定義するための特別な構文があり、これらはその用法に明確な意味づけを提供します。[クラス](/ja/docs/Web/JavaScript/Reference/Classes)は概念的には関数ではありません（`new` なしで呼び出されるとエラーが発生するため）。しかし、それらは `Function.prototype` を継承し、 `typeof MyClass === "function"` となります。

```js
// コンストラクター
const multiply = new Function("x", "y", "return x * y");

// 宣言
function multiply(x, y) {
  return x * y;
} // ここではセミコロンは必須ではない

// 式：この関数は無名だが、変数に代入される
const multiply = function (x, y) {
  return x * y;
};
// 式：自分の名前を持つ関数
const multiply = function funcName(x, y) {
  return x * y;
};

// アロー関数
const multiply = (x, y) => x * y;

// メソッド
const obj = {
  multiply(x, y) {
    return x * y;
  },
};
```

すべての構文はおおむね同じことをしますが、微妙な動作の違いがいくつかあります。

- `Function()` コンストラクター、`function` 式、および `function` 宣言構文は、正規の関数オブジェクトを生成します。これらは [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を使用して構築可能です。ただし、アロー関数とメソッドは構築できません。非同期関数、ジェネレーター関数、および非同期ジェネレーター関数は、構文に関わらず構築できません。
- `function` 宣言は、[巻き上げ](/ja/docs/Web/JavaScript/Guide/Functions#関数の巻き上げ)られる関数を作成します。それ以外にも構文では関数は巻き上げられず、関数の値は定義後にのみ見えるようになります。
- アロー関数と `Function()` コンストラクターは常に無名関数を生成するため、それらは簡単に再帰的に自身を呼び出すことができません。アロー関数を再帰的に呼び出す一つの方法は、それを変数に代入することです。
- アロー関数の構文では、 `arguments` や `this` は持ちません。
- `Function()` コンストラクターはローカル変数にアクセスできません。グローバルスコープのみにアクセス可能です。
- `Function()` コンストラクターでは実行時コンパイルが発生するため、それ以外の構文よりも多くの場合、処理が遅くなります。

`function` 式では、関数名と関数が代入される変数には違いがあります。関数名は変更できませんが、関数が代入される変数は再代入できます。関数名は、関数が代入される変数とは異なる名前を付けることが可能です。両者は、互いに関連のありません。関数名は関数本体内でのみ使用できます。関数本体外で使用しようとするとエラーが発生します（または、同じ名前が別の場所で宣言されている場合は別の値が取得されます）。 例えば、

```js
const y = function x() {};
console.log(x); // ReferenceError: x is not defined
```

一方、関数が代入される変数は、そのスコープによってのみ制限されます。このスコープには、関数が宣言されたスコープを含むことが保証されています。

関数宣言は、関数名と同じ名前の変数も作成します。したがって、関数式で定義されたものとは異なり、関数宣言で定義された関数は、自身の本体内だけでなく、定義されたスコープ内でもその名前でアクセスできます。

`new Function` で定義された関数は、そのソースが動的にアセンブルされます。これはシリアライズ時に確認できます。例えば、`console.log(new Function().toString())` は次のような結果になります。

```js-nolint
function anonymous(
) {

}
```

これは関数をコンパイルするために実際に使用されるソースです。ただし、 `Function()` コンストラクターは `anonymous` という名前の関数を生成しますが、この名前は本体スコープには追加されません。本体は常にグローバル変数にしかアクセスできません。例えば、次のものはエラーになります。

```js
new Function("alert(anonymous);")();
```

関数式または関数宣言によって定義された関数は、現在のスコープを継承します。つまり、その関数はクロージャを形成します。一方、 `Function` コンストラクターによって定義された関数は、グローバルスコープ（すべての関数が継承する）以外のスコープを継承しません。

```js
// p はグローバル変数
globalThis.p = 5;
function myFunc() {
  // p はローカル変数
  const p = 9;

  function decl() {
    console.log(p);
  }
  const expr = function () {
    console.log(p);
  };
  const cons = new Function("\tconsole.log(p);");

  decl();
  expr();
  cons();
}
myFunc();

// Logs:
// 9 （関数定義による 'decl' の場合（現在のスコープ））
// 9 （関数式による 'expr' の場合（現在のスコープ））
// 5 （コンストラクターによる 'cons' の場合（グローバルスコープ））
```

関数式や関数宣言で定義された関数は一度だけ構文解析されますが、 `Function` コンストラクターで定義された関数は、コンストラクターが呼び出されるたびに渡された文字列を毎回構文解析します。関数式はそれぞれクロージャを生成しますが、関数本体は再解析されないため、関数式は `new Function(...)` よりも高速です。したがって、可能な限り `Function` コンストラクターの使用は避けるべきです。

関数宣言は、式コンテキスト内で現れた場合、意図せず関数式に変換されることがあります。

```js
// 関数宣言
function foo() {
  console.log("FOO!");
}

doSomething(
  // 引数として渡された関数式
  function foo() {
    console.log("FOO!");
  },
);
```

一方、関数式は関数宣言に変換されることもあります。[式文](/ja/docs/Web/JavaScript/Reference/Statements/Expression_statement)は `function` や `async function` キーワードで始めることはできません。これは [IIFE](/ja/docs/Glossary/IIFE)（即時実行関数式）を実装する際によく見られる間違いです。

```js-nolint example-bad
function () { // SyntaxError: Function statements require a function name
  console.log("FOO!");
}();

function foo() {
  console.log("FOO!");
}(); // SyntaxError: Unexpected token ')'
```

代わりに、式文を別の方法で始まるようにし、 `function` キーワードで確実に関数式が始まるようにします。一般的な選択肢には、[グループ化](/ja/docs/Web/JavaScript/Reference/Operators/Grouping)や [`void`](/ja/docs/Web/JavaScript/Reference/Operators/void) の使用があります。

```js-nolint example-good
(function () {
  console.log("FOO!");
})();

void function () {
  console.log("FOO!");
}();
```

### 関数の引数

関数のそれぞれの引数は、ローカルスコープ内でアクセスできる単純な識別子です。

```js
function myFunc(a, b, c) {
  // ここで a, b, c の値にアクセスできる
}
```

特別な引数の構文が 3 種類あります。

- [デフォルト引数 (_Default parameters_)](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters) を使用すると、値が渡されなかった場合や `undefined` が渡された場合に、仮引数を既定値で初期化できます。
- [残余引数 (_rest parameter_)](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters) を使用すると、不定数の引数を配列として表すことができます。
- [構造分解 (_Destructuring_)](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring) 配列から要素を、またはオブジェクトからプロパティを、個々の変数に展開することができます。

```js
function myFunc({ a, b }, c = 1, ...rest) {
  // ここで a, b, c, rest の値にアクセスできる
}
```

上記の単純でない引数構文のいずれかが使用されている場合、いくつかの影響があります。

- 関数本体に `"use strict"` を適用することはできません。これにより、[構文エラー](/ja/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params)が発生します。
- 関数が[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でなくても、特定の厳格モード関数機能が適用されます。 [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) オブジェクトが名前付き引数との同期を停止したり、 [`arguments.callee`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee) にアクセスするとエラーが発生したり、重複する引数名が利用できなかったりします。

### arguments オブジェクト

[`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) オブジェクトを使用すると、関数内部で関数の実引数を参照することができます。

- [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments)
  - : 現在実行中の関数に渡された引数を格納する配列風オブジェクト。
- [`arguments.callee`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : 現在実行中の関数。
- [`arguments.length`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/length):
  - : 関数に渡された引数の数。

### ゲッターおよびセッター関数

標準の組み込みオブジェクトや ユーザー定義オブジェクトには、追加のプロパティに対応しているものなら、いずれにもアクセサープロパティを定義できます。[オブジェクトリテラル](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)や[クラス](/ja/docs/Web/JavaScript/Reference/Classes)内で、特別な構文を使用してアクセサープロパティのゲッターとセッターを定義することができます。

- [get](/ja/docs/Web/JavaScript/Reference/Functions/get)
  - : オブジェクトのプロパティを、そのプロパティが検索されたときに呼び出される関数に束縛します。
- [set](/ja/docs/Web/JavaScript/Reference/Functions/set)
  - : あるオブジェクトのプロパティを、そのプロパティに代入しようとしたときに呼び出される関数に結びつけます。

なお、これらの構文はオブジェクトのメソッドではなく、プロパティを生成します。ゲッター関数やセッター関数自体は、{{jsxref("Object.getOwnPropertyDescriptor()")}} などのリフレクション API を使用してのみアクセスできます。

### ブロックレベル関数

[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では、ブロック内の関数はそのブロックに新しいスコープを形成します。 ES2015 より前では、ブロックレベル関数は厳格モードでは禁止されています。

```js
"use strict";

function f() {
  return 1;
}

{
  function f() {
    return 2;
  }
}

f() === 1; // true

// 厳格モード以外では f() === 2
```

### 厳格モードのコード以外におけるブロックレベル関数

一言で言えば、**使わないでください**。

厳格モードのコード以外では、ブロック内の関数宣言は奇妙な動作をします。次の例を見てください。

```js
if (shouldDefineZero) {
  function zero() {
    // 危険: 互換性リスク
    console.log("これはゼロです。");
  }
}
```

厳格モードにおけるこの意味づけは明確に指定されています。 `zero` は常に `if` ブロックのスコープ内でのみ存在します。 `shouldDefineZero` が false の場合、ブロックは決して実行されないため、 `zero` は定義すべきでは決してありません。しかし、過去にはこれは未指定のままにされていたため、厳格モード以外ではブラウザーによって実装が異なっていました。より詳細な情報については、[`function`宣言](/ja/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration)のリファレンスを参照してください。

条件付きで関数を定義するより安全な方法は、変数に関数式を代入することです。

```js
// var を使用すると、グローバル変数として利用可能になり、
// 最上位の関数宣言に近い動作になる
var zero;
if (shouldDefineZero) {
  zero = function () {
    console.log("これはゼロです。");
  };
}
```

## 例

### 書式化された数値を返す

次の関数は、数値を先頭にゼロを付けて書式化した文字列で返します。

```js
// この関数は先頭にゼロを足して固定長にした文字列を返す
function padZeros(num, totalLen) {
  let numStr = num.toString(); // 返値を文字列として初期化
  const numZeros = totalLen - numStr.length; // ゼロの数を計算
  for (let i = 1; i <= numZeros; i++) {
    numStr = `0${numStr}`;
  }
  return numStr;
}
```

次の文で `padZeros` 関数を呼び出します。

```js
let result;
result = padZeros(42, 4); // "0042" を返す
result = padZeros(42, 2); // "42" を返す
result = padZeros(5, 4); // "0005" を返す
```

### 関数が存在するかどうか確認

[`typeof`](/ja/docs/Web/JavaScript/Reference/Operators/typeof) 演算子を使うと、関数が存在するかどうかを確かめることができます。次の例では、`window` オブジェクトが `noFunc` という関数のプロパティを持つかどうかを確かめるためのテストが行われます。もし持っていたら、それが使われます。そうでなければ、他の行動が取られます。

```js
if (typeof window.noFunc === "function") {
  // noFunc() を使う
} else {
  // 何か他のことをする
}
```

`if` のテストの中で、`noFunc` への参照が使われているのに注目してください。関数名の後に括弧 "()" がないので、実際の関数は呼び出されません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)ガイド
- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Statements/function", "function")}}
- [`function` 式](/ja/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Function")}}
