---
title: 関数
slug: Web/JavaScript/Reference/Functions
tags:
  - Function
  - Functions
  - Guide
  - JavaScript
  - Parameter
  - parameters
browser-compat: javascript.functions
translation_of: Web/JavaScript/Reference/Functions
---
{{jsSidebar("Functions")}}

一般的に言うと、関数とは外部 (再帰の場合は内部) から *呼び出す* ことのできる「サブプログラム」です。プログラムそのもののように、関数は関数本体 (*function body*) と呼ばれる連続した文で構成されます。値を関数に*渡す*ことができ、関数は値を*返す*ことができます。

JavaScript において、関数は第一級オブジェクトです。すなわち、関数はオブジェクトであり、他のあらゆるオブジェクトと同じように操作したり渡したりすることができます。具体的には、関数は [`Function`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) オブジェクトです。

より詳細な例や解説については、[JavaScript の関数のガイド](/ja/docs/Web/JavaScript/Guide/Functions)を参照してください。

## 解説

JavaScript におけるすべての関数は、実際には `Function` オブジェクトです。`Function` オブジェクトのプロパティとメソッドについての情報は {{jsxref("Function")}} をご覧ください。

初期値以外の値を返すためには、返す値を指定する [`return`](/ja/docs/Web/JavaScript/Reference/Statements/return) 文が関数内になくてはなりません。`return` 文を持たない関数は既定値を返します。[コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)が [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) キーワードとともに呼び出された場合、その `this` 引数が初期値となります。それ以外のすべての関数が既定で返す値は {{jsxref("undefined")}} です。

関数の仮引数 (parameter) には、関数呼び出しにおいて実引数 (*argument*) が渡されます。実引数は、関数に*値渡し*されます。関数の中で引数の値を変更しても、その変更はグローバルスコープもしくは呼び出し元の関数内には反映されません。オブジェクト参照も「値」ですが、こちらは特別です。参照されているオブジェクトのプロパティを関数の中で変更すると、次の例にあるように、その変更を関数の外部から見ることができます。

```js
/* 関数 'myFunc' を宣言 */
function myFunc(theObject) {
  theObject.brand = "Toyota";
}

/*
 * 変数 'mycar' を宣言
 * 新しいオブジェクトの生成と初期化
 * 'mycar' への参照をオブジェクトに代入
 */
var mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998
};

/* 'Honda' を出力 */
console.log(mycar.brand);

/* オブジェクト参照を関数に渡す */
myFunc(mycar);

/*
 * オブジェクトの 'brand' プロパティの値は関数によって
 * 変更されたので 'Toyota' と出力される
 */
console.log(mycar.brand);
```

[`this` キーワード](/ja/docs/Web/JavaScript/Reference/Operators/this)は現在実行中の関数を参照しません。よって、その関数本体の中であっても、名前によって `Function` オブジェクトを参照しなければなりません。

## 関数の定義

関数を定義するのにはいくつかの方法があります。

### 関数宣言 (`function` 文)

関数を宣言するための特殊な構文があります。(詳細は [function 文](/ja/docs/Web/JavaScript/Reference/Statements/function)を参照)

```js
function name([param[, param[, ... param]]]) {
   statements
}
```

- `name`
  - : 関数名です。
- `param`
  - : 関数に渡される引数の名前です。
- `statements`
  - : 関数の本体を構成する文です。

### 関数式 (`function` 式)

関数式は、関数宣言と似ており、同じ構文を持っています (詳細は[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)を参照)。関数式はより大きな式の一部になることもあります。「名前付き」の関数式を定義することもできます (例えばその名前はコールスタック内で使われるかもしれません) し、「無名の」関数式を定義することもできます。関数式はスコープの開始時に「巻き上げ」られないので、コード内でそれらが登場するより前に使用することはできません。

```js
function [name]([param[, param[, ... param]]]) {
   statements
}
```

- `name`
  - : 関数名。省略することができ、その場合は関数は無名関数と見なされます。
- `param`
  - : 関数に渡される引数の名前です。
- `statements`
  - : 関数の本体を構成する文です。

以下は**無名の**関数式の例です (`name` が使われていない)。

```js
var myFunction = function() {
    statements
}
```

定義の中で名前を提供することで、**名前付きの**関数式を作ることも可能です。

```js
var myFunction = function namedFunction(){
    statements
}
```

名前付きの関数式を作ることの利点の 1 つは、エラーに遭遇したとき、スタックトレースがその関数の名前を含めるため、エラーの発生源をより容易に特定できるということです。

ここまで見てきたように、どちらの例も `function` キーワードから開始されていません。 `function` から開始せずに関数を含んでいる文が関数式です。

関数が一度だけ使われるとき、一般的なパターンが[即時実行関数式 (IIFE, Immediately Invoked Function Expression)](/ja/docs/Glossary/IIFE) です。

```js
(function() {
    statements
})();
```

即時実行関数式は、関数を宣言した直後に実行する関数式です。

### ジェネレーター関数宣言 (`function*` 文)

ジェネレーター関数の宣言のための特別な構文です (詳細は {{jsxref('Statements/function*', 'function* 文')}} を参照してください)。

```js
function* name([param[, param[, ... param]]]) {
   statements
}
```

- `name`
  - : 関数名。
- `param`
  - : 関数に渡される引数の名前です。
- `statements`
  - : 関数の本体を構成する文。
 
### ジェネレーター関数式 (`function*` 式)

ジェネレーター関数式は、ジェネレーター関数宣言と似ており、同じ構文を持っています （詳細は {{jsxref('Operators/function*', 'function* 式')}} を参照してください）。

```js
function* [name]([param[, param[, ... param]]]) {
   statements
}
```

- `name`
  - : 関数名。省略することができ、その場合関数は無名関数と見なされます。
- `param`
  - : 関数に渡される引数の名前です。
- `statements`
  - : 関数の本体を構成する文です。

### アロー関数式 (=>)

アロー関数式はより短い構文で、 `this` 値を語彙的に結合します (詳細は[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を参照)。

<pre class="brush: js">([param[, param]]) =&gt; {
   statements
}

param =&gt; expression
</pre>

- `param`
  - : 引数の名前。引数が 0 個の場合は `()` で示すことが必要です。引数が 1 個の場合のみ、丸括弧は必須ではありません。(例えば `foo =&gt; 1`)
- `statements` または `expression`
  - : 複数の文は中括弧で括らなければなりません。単一の式では、中括弧は必須ではありません。式は、関数の暗黙的な返値でもあります。

### `Function` コンストラクター

> **Note:** `Function` コンストラクターによる関数の生成は推奨されません。これは、文字列として関数本体が必要であり、JS エンジンによる最適化を妨げたり、他の問題を引き起こしたりする場合があるためです。

他のすべてのオブジェクトと同じように、`new` 演算子を使って {{jsxref("Function")}} オブジェクトを作成することができます。

```js
new Function (arg1, arg2, ... argN, functionBody)
```

- `arg1, arg2, ... argN`
  - : 関数で仮引数名として使われる、0 個以上の名前。それぞれが、妥当な JavaScript 識別子に相当する文字列、もしくはそういった文字列のカンマで分割されたリストでなくてはなりません。
- `functionBody`
  - : 関数定義を構成する JavaScript 文を含む文字列。

`Function` コンストラクターを関数として (`new` 演算子を使わずに) 呼び出しても、コンストラクターとして呼び出すのと同じ効果があります。

### `GeneratorFunction` コンストラクター

> **Note:** `GeneratorFunction` はグローバルオブジェクトではありませんが、ジェネレーター関数のインスタンスから得ることができます (詳細は {{jsxref("GeneratorFunction")}} を参照してください)。

> **Note:** `GeneratorFunction` コンストラクターによる関数の生成は推奨されません。これは、文字列として関数本体が必要で、JS エンジンによる最適化を妨げたり、他の問題を引き起こしたりする場合があるためです。

他のすべてのオブジェクトと同じように、 `new` 演算子を使って {{jsxref("GeneratorFunction")}} オブジェクトを作成することができます。

```js
new GeneratorFunction (arg1, arg2, ... argN, functionBody)
```

- `arg1, arg2, ... argN`
  - : 関数で仮引数名として使われる、0 個以上の名前。それぞれが、妥当な JavaScript 識別子に相当する文字列、もしくはそういった文字列のカンマで分割されたリストでなくてはなりません。例えば "`x`"、"`theValue`"、"`a,b`" などです。
- `functionBody`
  - : 関数定義を構成する JavaScript 文を含む文字列です。

`Function` コンストラクターを関数として (`new` 演算子を使わずに) 呼び出しても、コンストラクターとして呼び出すのと同じ効果があります。

## 関数の引数

### デフォルト引数

関数のデフォルト引数で、関数に値が渡されなかった場合や `undefined` が渡された場合に、既定値で初期化される形式上の引数を指定できます。詳細は[デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)を参照してください。

### 残余引数

残余引数とは、不特定多数の引数を配列として受け取る構文です。詳細は[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)を参照してください。

## `arguments` オブジェクト

`arguments` オブジェクトを使って、関数内部で関数の引数を参照することができます。[arguments](/ja/docs/Web/JavaScript/Reference/Functions/arguments) を参照してください。

- [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments):
  現在実行中の関数に渡された引数を格納する配列風オブジェクト。
- [`arguments.callee`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee):
  現在実行中の関数。
- [`arguments.caller`](/ja/docs/JavaScript/Reference/Functions_and_function_scope/arguments/caller):
  現在実行中の関数を呼び出した関数。
- [`arguments.length`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/length):
  関数に渡された引数の数。

## メソッドの定義

### ゲッターおよびセッター関数

ゲッター (アクセサーメソッド) およびセッター (ミューテーターメソッド) は、標準組み込みオブジェクトでもユーザー定義オブジェクトでも、新しいプロパティの追加に対応していれば定義することができます。ゲッターとセッターを定義するための構文は、オブジェクトリテラル構文を使用します。

- [get](/ja/docs/Web/JavaScript/Reference/Functions/get)
  - : オブジェクトのプロパティを、そのプロパティが検索されたときに呼び出される関数に束縛します。
- [set](/ja/docs/Web/JavaScript/Reference/Functions/set)
  - : あるオブジェクトのプロパティを、そのプロパティに代入しようとしたときに呼び出される関数に結びつけます。

### メソッド定義構文

ECMAScript 2015 からは、独自のメソッドを、ゲッターとセッターに似たより短い構文で定義することができます。詳細は[メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)を参照してください。

```js
var obj = {
  foo() {},
  bar() {}
};
```

## コンストラクターと関数宣言と関数式

以下のものを比較してみて下さい。

`Function` *コンストラクター*によって定義され、変数 `multiply` に代入された関数です。

```js
var multiply = new Function('x', 'y', 'return x * y');
```

`multiply` と命名された関数の*関数宣言*です。

```js
function multiply(x, y) {
   return x * y;
} // ここにセミコロンは必要ありません
```

変数 `multiply` に代入された、無名関数の*関数式*です。

```js
var multiply = function(x, y) {
   return x * y;
};
```

変数 `multiply` に代入された、`func_name` と命名された関数式です。

```js
var multiply = function func_name(x, y) {
   return x * y;
};
```

### 相違点

これらはすべて、おおよそ同じ働きをしますが、いくつか微妙に異なる点があります。

関数名と関数が代入された変数の間には違いがあります。関数名は変えることができませんが、関数が代入された変数は再代入することができます。関数名は関数本体の内部でのみ使用することができます。関数本体の外側でそれを使用しようとするとエラー (その関数名がそれより前に `var` 文によって宣言されていれば `undefined`) になります。例えば、

```js
var y = function x() {};
alert(x); // throws an error
```

関数名は [`Function` の toString メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)によってシリアライズしたときにも現れます。

一方、関数が代入された変数はそのスコープ内でのみ有効で、そのスコープは関数が宣言されたスコープを含んでいることが保証されています。

4 つ目の例にあるように、関数名はその関数が代入される変数と違っていても構いません。互いの間に関連性はありません。関数宣言は同時にその関数名と同じ名前の変数を作成します。よって、関数式で定義されたものと違って、関数宣言で定義された関数は定義されたスコープ内でも、その名前によってアクセスできます。

`new Function` によって定義された関数は関数名を持ちません。しかし、JavaScript エンジンの [SpiderMonkey](/ja/docs/Mozilla/Projects/SpiderMonkey) では、その関数をシリアライズされた形式にすると "anonymous" という名前を持っているかのように表示されます。例えば、`alert(new Function())` はこのように出力されます。

```js
function anonymous() {
}
```

この関数は実際には名前を持っていないので、`anonymous` は関数内部でアクセスできる変数ではありません。例えば、次の文はエラーになります。

```js
var foo = new Function("alert(anonymous);");
foo();
```

関数式や `Function` コンストラクターで定義されたものとは違い、関数宣言で定義された関数は、関数自体が宣言される前に使用することができます。例えば、

```js
foo(); // FOO! とアラート表示
function foo() {
   alert('FOO!');
}
```

関数式で定義された関数は現在のスコープを継承します。つまり、関数がクロージャを形成します。一方、`Function` コンストラクターで定義された関数は (あらゆる関数が継承する) グローバルスコープ以外はどんなスコープも継承しません。

```js
/*
 * Declare and initialize a variable 'p' (global)
 * and a function 'myFunc' (to change the scope) inside which
 * declare a varible with same name 'p' (current) and
 * define three functions using three different ways:-
 *     1. function declaration
 *     2. function expression
 *     3. function constructor
 * each of which will log 'p'
 */
var p = 5;
function myFunc() {
    var p = 9;

    function decl() {
        console.log(p);
    }
    var expr = function() {
        console.log(p);
    };
    var cons = new Function('\tconsole.log(p);');

    decl();
    expr();
    cons();
}
myFunc();

/*
 * Logs:-
 * 9  - for 'decl' by function declaration (current scope)
 * 9  - for 'expr' by function expression (current scope)
 * 5  - for 'cons' by Function constructor (global scope)
 */
```

関数式と関数宣言で定義された関数は一度しか解析されませんが、`Function` コンストラクターで定義された関数はそうではありません。つまり、`Function` コンストラクターに渡された関数本体を表す文字列が、評価されるたびに必ず解析されます。関数式は毎回クロージャを作成しますが、関数本体は再解析されないので、"`new Function(...)`" よりは関数式の方がまだ高速です。したがって `Function` コンストラクターはできる限り避けるべきでしょう。

ただし、`Function` コンストラクターの文字列を解析することで生成された関数内で入れ子にされている関数式や関数宣言は、繰り返し解析されないことに注意してください。例えば、

```js
var foo = (new Function("var bar = \'FOO!\';\nreturn(function() {\n\talert(bar);\n});"))();
foo(); // 関数本体の文字列で "function() {\n\talert(bar);\n}" の部分は再解析されません
```

関数宣言はとても簡単に (しばしば意図せずに) 関数式に変化します。関数宣言は以下のようなときには関数宣言ではなくなります。

- 式の一部になったとき
- 関数またはスクリプト自体の「ソース要素 (source element)」でなくなったとき。「ソース要素」はスクリプトや関数本体の中で入れ子にされていない文のことです。

```js
var x = 0;               // ソース要素
if (x === 0) {           // ソース要素
   x = 10;               // ソース要素ではない
   function boo() {}     // ソース要素ではない
}
function foo() {         // ソース要素
   var y = 20;           // ソース要素
   function bar() {}     // ソース要素
   while (y === 10) {    // ソース要素
      function blah() {} // ソース要素ではない
      y++;               // ソース要素ではない
   }
}
```

### 例

```js
// 関数宣言
function foo() {}

// 関数式
(function bar() {})

// 関数式
x = function hello() {}

if (x) {
   // 関数式
   function world() {}
}

// 関数宣言
function a() {
   // 関数宣言
   function b() {}
   if (0) {
      // 関数式
      function c() {}
   }
}
```

## ブロックレベル関数

[strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では ES2015 から、ブロック内の関数はそのブロックに新しいスコープを形成します。 ES2015 より前では、ブロックレベル関数は strict モードでは禁止されています。

```js
'use strict';

function f() {
  return 1;
}

{
  function f() {
    return 2;
  }
}

f() === 1; // true

// strict モード以外では f() === 2
```

### strict コード以外におけるブロックレベル関数

一言で言えば、使わないでください。

strict コード以外では、ブロック内の関数宣言は奇妙な動作をします。次の例を見てください。

```js
if (shouldDefineZero) {
   function zero() {     // 危険: 互換性リスク
      console.log("This is zero.");
   }
}
```

ES2015 では `shouldDefineZero` が false の場合、このブロックが実行されることはないので、`zero` は決して定義されないとされています。しかし、これは標準において新しいパーツです。歴史的には、このことは仕様とならないまま残されていました。いくつかのブラウザーでは、ブロックが実行されてもされなくても、`zero` を定義したでしょう。

[strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では、ES2015 に対応するブラウザーはすべて、これを同じように扱います。 `zero` は `shouldDefineZero` が true の場合のみ定義され、かつ `if` ブロックのスコープに限られます。

条件付きで関数を定義するより安全な方法は、変数に関数式を代入することです。

```js
var zero;
if (shouldDefineZero) {
   zero = function() {
      console.log("This is zero.");
   };
}
```

## 例

### 整形された数値を返す

次の関数は、数値の先頭にゼロを足して固定長にした形で表される文字列を返します。

```js
// この関数は先頭にゼロを足して固定長にした文字列を返す
function padZeros(num, totalLen) {
   var numStr = num.toString();             // 戻り値を文字列に初期化する
   var numZeros = totalLen - numStr.length; // ゼロの数を計算する
   for (var i = 1; i <= numZeros; i++) {
      numStr = "0" + numStr;
   }
   return numStr;
}
```

次の文で padZeros 関数を呼び出します。

```js
var result;
result = padZeros(42,4); // "0042" を返す
result = padZeros(42,2); // "42" を返す
result = padZeros(5,4);  // "0005" を返す
```

### 関数が存在するかどうか確認する

`typeof` 演算子を使うと関数が存在するかどうかを確かめることができます。次の例では、`window` オブジェクトが `noFunc` という関数のプロパティを持つかどうかを確かめるためのテストが行われます。もし持っていたら、それが使われます。そうでなければ、他の行動が取られます。

```js
if ('function' === typeof window.noFunc) {
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

- {{jsxref("Statements/function", "function 文")}}
- {{jsxref("Operators/function", "function 式")}}
- {{jsxref("Statements/function*", "function* 文")}}
- {{jsxref("Operators/function*", "function* 式")}}
- {{jsxref("Function")}}
- {{jsxref("GeneratorFunction", "ジェネレーター関数")}}
- {{jsxref("Functions/Arrow_functions", "アロー関数")}}
- {{jsxref("Functions/Default_parameters", "デフォルト引数")}}
- {{jsxref("Functions/rest_parameters", "残余引数")}}
- {{jsxref("Functions/arguments", "arguments オブジェクト")}}
- {{jsxref("Functions/get", "getter")}}
- {{jsxref("Functions/set", "setter")}}
- {{jsxref("Functions/Method_definitions", "メソッド定義")}}
- [関数と関数スコープ](/ja/docs/Web/JavaScript/Reference/Functions)
