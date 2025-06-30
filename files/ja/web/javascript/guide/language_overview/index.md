---
title: JavaScript 言語概要
slug: Web/JavaScript/Guide/Language_overview
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar}}

JavaScript はマルチパラダイムの動的言語であり、型や演算子、標準組み込みオブジェクト、メソッドがあります。その構文は Java や C 言語に由来するので、それらの言語の多くの構造が JavaScript にも同様に適用できます。 JavaScript は、[オブジェクトプロトタイプ](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)やクラスによるオブジェクト指向プログラミングに対応しています。また、JavaScript は関数型プログラミングもサポートします。関数が[第一級](/ja/docs/Glossary/First-class_Function)オブジェクトであり、式から容易に作成し、他のオブジェクトと同じように受け渡しすることができます。

このページは、 JavaScript のさまざまな言語機能の概要で、 C や Java など、他の言語のバックグラウンドがある読者のために書かれたものです。

## データ型

まずはあらゆる言語の構成要素、「型」を見ることから始めましょう。 JavaScript のプログラムは値を操作し、それらの値はすべて型に属しています。JavaScript の型は次の通りです。

- [数値型](/ja/docs/Web/JavaScript/Guide/Data_structures#数値型): 非常に大きな整数を除くすべての数値（整数、浮動小数点数）で使用します。
- [長整数型](/ja/docs/Web/JavaScript/Guide/Data_structures#長整数型): 任意の長さの大きな整数に使用します。
- [文字列型](/ja/docs/Web/JavaScript/Guide/Data_structures#文字列型): テキストを格納するために使用されます。
- [論理型](/ja/docs/Web/JavaScript/Guide/Data_structures#論理型): `true`と `false` - 通常は条件の論理に使用します。
- [シンボル型](/ja/docs/Web/JavaScript/Guide/Data_structures#シンボル型): 衝突しない固有の識別子を作成するために使用します。
- [Undefined](/ja/docs/Web/JavaScript/Guide/Data_structures#undefined_型): 変数に値が割り当てられていないことを示します。
- [Null](/ja/docs/Web/JavaScript/Guide/Data_structures#null_型): 意図的に値がないことを示します。

他のすべてのものは[オブジェクト型](/ja/docs/Web/JavaScript/Guide/Data_structures#オブジェクト)と呼ばれます。主なオブジェクト型には次のものがあります。

- {{jsxref("Function")}}
- {{jsxref("Array")}}
- {{jsxref("Map")}}
- {{jsxref("RegExp")}}
- {{jsxref("Error")}}

JavaScript では、関数は特別なデータ構造ではありません。呼び出すことができるオブジェクトの特別な型にすぎません。

### 数値

JavaScript には 2 つの組み込み数値型があります。 **数値型** (Number) と **長整数型** (BigInt) です。

数値型は[IEEE 754 倍精度 64 ビットバイナリー値](https://ja.wikipedia.org/wiki/%E5%80%8D%E7%B2%BE%E5%BA%A6%E6%B5%AE%E5%8B%95%E5%B0%8F%E6%95%B0%E7%82%B9%E6%95%B0)です。これは整数の場合は[-(2<sup>53</sup> − 1)](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) と [2<sup>53</sup> − 1](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) の間の数ならば精度が落ちることがなく、浮動小数点数は [1.79 × 10<sup>308</sup>](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) まで格納できます。 JavaScript では、数値型の中で浮動小数点数と整数を区別しません。

```js
console.log(3 / 2); // 1.5, 1 ではない
```

つまり、整数のように見えるものは、実は暗黙のうちに浮動小数点です。 IEEE 754 のエンコード方式では、浮動小数点数で演算が不正確になることがあります。

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

ビット演算など整数を想定した処理を行う場合、数値は 32 ビット整数に変換されます。

[数値リテラル](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#数値リテラル)には、基数（2 進数、8 進数、10 進数、16 進数）を示す接頭辞や、指数接尾辞もあります。

```js
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503
```

[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)型は任意の長さの整数です。その動作は C の整数型に似ていますが （例えば除算は 0 で切り捨てられます）、無限に大きくなることができます。長整数型は数値リテラルと接尾辞 `n` で指定します。

```js
console.log(-3n / 2n); // -1n
```

標準の[算術演算子](/ja/docs/Web/JavaScript/Reference/Operators#算術演算子)は、加算、減算、剰余演算などを含めて対応しています。長整数型と数値型を混合して演算処理を行うことはできません。

{{jsxref("Math")}} オブジェクトは、標準数学関数と定数を提供します。

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

文字列を数値に変換する方法は 3 つあります。

- {{jsxref("parseInt()")}} は、文字列を整数として解釈します。
- {{jsxref("parseFloat()")}} は、文字列を浮動小数点数として解釈します。
- [`Number()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) 関数は、 文字列を数値リテラルであるかのように解釈でき、さまざまな数値表現に対応しています。

また、[単項 `+`](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus) を `Number()` の短縮形として使用することもできます。

数値の値には、 {{jsxref("NaN")}} （"Not a Number" の略）と {{jsxref("Infinity")}} も含みます。例えば、数値以外の文字列を解釈しようとした場合や、負の値に対して [`Math.log()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/log) を使用した場合など、多くの「不正な演算」は `NaN` を返します。ゼロによる除算は `Infinity` （正の値または負の値）を返します。

`NaN` は伝染します。どんな数学処理にもオペランドとして提供すると、結果も `NaN` になります。 `NaN` は JavaScript で唯一それ自身と等しくない値です（IEEE 754 仕様による）。

### 文字列

JavaScript での文字列は Unicode 文字の列です。これは国際化に携わったことのある人にとっては歓迎すべきニュースでしょう。より正確な言い方をすれば、文字列は [UTF-16 エンコード方式](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)です。

```js
console.log("Hello, world");
console.log("你好，世界！"); // ほぼすべての Unicode 文字は文字列リテラルで書くことができます。
```

文字列は一重引用符でも二重引用符でも書くことができます。 JavaScript には文字と文字列の区別はありません。単一の文字を表したい場合は、その単一の文字からなる文字列を使用するだけです。

```js
console.log("Hello"[1] === "e"); // true
```

文字列の長さ（[コード単位](/ja/docs/Glossary/Code_unit)）を調べるには、その[`length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length)プロパティにアクセスします。

文字列には、文字列を操作したり、文字列に関する情報にアクセスしたりするための [ユーティリティメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#インスタンスメソッド)があります。設計上、すべてのプリミティブは不変なので、これらのメソッドは新しい文字列を返します。

演算子 `+` は文字列に対してオーバーロードされています。演算子の 1 つが文字列の場合、数値の加算の代わりに文字列の連結を行います。特別な[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)構文により、式を埋め込んだ文字列をより簡潔に書くことができます。 Python の f-strings や C# の補完文字列とは異なり、テンプレートリテラルは（単一引用符や二重引用符ではなく）逆引用符を使用します。

```js
const age = 25;
console.log("私は " + age + " 歳です。"); // 文字列へ変換
console.log(`私は ${age} 歳です。`); // テンプレートリテラル
```

### その他の型

JavaScript では、意図的に値がないことを示す [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null)（`null` のキーワードでのみアクセスできます）と、値がないことを示す {{jsxref("undefined")}} を区別します。 `undefined` を取得する方法はたくさんあります。

- [`return`](/ja/docs/Web/JavaScript/Reference/Statements/return) 文に値がない場合 (`return;`) は、暗黙に `undefined` を返します。
- 存在しない[オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object)のプロパティへアクセスすると (`obj.iDontExist`)、 `undefined` を返します。
- 初期化を伴わない変数宣言 (`let x;`) は、暗黙のうちにその変数を `undefined` に初期化します。

JavaScript には `true` と `false` （これらはともにキーワードです）を取りうる値とする論理型があります。どんな値でも以下の規則に基づいて論理値に変換できます。

1. `false`、`0`、空文字列 (`""`)、`NaN`、`null`、`undefined` は、すべて `false` になる。
2. その他の値はすべて `true` になる。

[`Boolean()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean) 関数を使うことで、明示的にこの変換を行うことができます。

```js
Boolean(""); // false
Boolean(234); // true
```

しかし、これはほとんど必要ありません。 JavaScript は、 `if` 文の中など（[制御構造](#制御構造)を参照）のように論理値が期待される場面では、暗黙にこの変換を行うからです。このため、ときどき "[真値](/ja/docs/Glossary/Truthy) (truthy)" および "[偽値](/ja/docs/Glossary/Falsy) (falsy)" と言うことがありますが、これは論理値に変換されるときにそれぞれ `true` または `false` になる値という意味です。

`&&` (論理 _AND_) や `||` (論理 _OR_)、`!` (論理 _NOT_) などの論理演算がサポートされています。[演算子](#演算子)を参照してください。

シンボル (Symbol) 型は固有の識別子を作成するために多く使用されます。 [`Symbol()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 関数で作成するシンボルは固有のものであることが保証されています。さらに、共有定数である登録シンボルや、特定の演算を実行するための「プロトコル」として言語が利用する公知のシンボルがあります。[シンボルリファレンス](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)で詳しく説明されています。

## 変数

JavaScript では、新しい変数を宣言するのに [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)、[`const`](/ja/docs/Web/JavaScript/Reference/Statements/const)、[`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) の 3 つのキーワードのいずれかを使用します。

`let` は、ブロックレベルの変数を宣言できます。宣言した変数は、変数を包含する*ブロック*から使用できます。

```js
let a;
let name = "Simon";

// ここでは myLetVariable が *見えません*

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // ここでだけ myLetVariable が見えます
}

// ここでは myLetVariable が *見えません*
```

`const` は、値を変更することを意図しない変数を宣言することができます。宣言した変数は、変数を宣言した*ブロック*から使用できます。

```js
const Pi = 3.14; // 変数 Pi を設定
console.log(Pi); // 3.14
```

`const` で宣言された変数は再代入できません。

```js-nolint example-bad
const Pi = 3.14;
Pi = 1; // エラーが発生します。定数変数は変更できないからです。
```

オブジェクトの場合、 `const` 宣言は変数の値の _再代入_ を防ぐだけで、変数の値の _変更_ を防ぐことはできません。

```js
const obj = {};
obj.a = 1; // エラーなし
console.log(obj); // { a: 1 }
```

`var` 宣言は意外な挙動をすることがあり （例えばブロックのスコープにならない）、現代の JavaScript コードでは推奨されません。

値を割り当てずに変数を宣言した場合、その値は `undefined` となります。初期化子なしで `const` 変数を宣言することはできません。

`let` と `const` で宣言された変数は、定義したスコープ全体で存在しますが、実際の宣言行の前には[一時的なデッドゾーン](/ja/docs/Web/JavaScript/Reference/Statements/let#一時的なデッドゾーン)と呼ばれる領域で存在します。これは他の言語には見られない、変数の影ともいえる興味深い作用が発生します。

```js
function foo(x, condition) {
  if (condition) {
    console.log(x);
    const x = 2;
    console.log(x);
  }
}

foo(1, true);
```

他のほとんどの言語では、`const x = 2` の行の前では `x` はまだ上位スコープの引数 `x` を参照しているはずなので、これは "1" と "2" をログ出力することになります。 JavaScript では、それぞれの宣言がスコープ全体を占めるため、最初の `console.log` で "Cannot access 'x' before initialization" というエラーが発生します。詳しくは、[`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)のリファレンスページを参照してください。

JavaScript は動的型付けを行います。（[前の節](#データ型)で記述されているように）型は値にのみ関連付けられますが、変数には関連付けられません。 `let` 宣言された変数については、常に再代入によって型を変更することができます。

```js
let a = 1;
a = "foo";
```

## 演算子

JavaScript の算術演算子は、`+`、`-`、`*`、`/`、そして剰余演算子の `%` ([モジュロと同じです](/ja/docs/Web/JavaScript/Reference/Operators#remainder_%28%29)) です。値は `=` を使って代入されます。また `+=` や `-=` のような複合代入文もあります。これらは `x = x 演算子 y` と展開できるものです。

```js
x += 5;
x = x + 5;
```

`++` や `--` を使ってインクリメントやデクリメントできます。これらは前置あるいは後置演算子として使うことができます。

[`+` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/Addition)は文字列の結合も行います。

```js
"hello" + " world"; // "hello world"
```

文字列を数字（や他の値）に足すと、すべてのものが最初に文字列に変換されます。このことはミスを誘うかもしれません。

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

空文字列を足すのは、何かを文字列に変換する便利な方法です。

JavaScript における [比較](/ja/docs/Web/JavaScript/Reference/Operators) は、`<` や `>`、`<=`、`>=` を使って行うことができます。これらは文字列と数値のどちらでも機能します。等価の場合、[二重等号演算子](/ja/docs/Web/JavaScript/Reference/Operators/Equality)は異なる型を与えると型の変換が行われ、時には興味深い結果をもたらします。一方、[三重等号演算子](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)は型の強制を行わないので、通常はこちらを推奨します。

```js
123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false
```

二重等号と三重等号には、不等号にも対応する `!=` と `!==` があります。

JavaScript には[ビット演算子](/ja/docs/Web/JavaScript/Reference/Operators#ビットシフト演算子)や[論理演算子](/ja/docs/Web/JavaScript/Reference/Operators#バイナリー論理演算子)もあります。特に、論理演算子は論理値だけで動作するわけではありません。値の「真偽度」によって動作します。

```js
const a = 0 && "Hello"; // 0 は偽値なので 0
const b = "Hello" || "world"; // "Hello" と "world" は共に真値なので "Hello"
```

演算子 `&&` と `||` は短絡評価を使用します。つまり、 2 つ目の演算子を実行するかどうかは最初の演算子に依存します。これは、オブジェクトの属性にアクセスする前に null かどうかを調べるのに有益です。

```js
const name = o && o.getName();
```

また、値のキャッシュにも使えます（偽値の値が無効である場合）。

```js
const name = cachedName || (cachedName = getName());
```

演算子の包括的なリストについては、[ガイドページ](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators)または[リファレンスの章](/ja/docs/Web/JavaScript/Reference/Operators)を参照してください。特に[演算子の優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)に関心があるかもしれません。

## 文法

JavaScript の文法は C 言語にとてもよく似ています。特筆すべき点がいくつかあります。

- [識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)には Unicode 文字を入れることができますが、[予約語](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#キーワード)のいずれかにすることはできません。
- [コメント](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#comments)は共通の `//` または `/* */` ですが、他の多くのスクリプト言語、例えば Perl, Python, Bash は `#` です。
- JavaScript でセミコロンは省略可能で、[必要なときに自動的に挿入されます](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#自動セミコロン挿入)。しかし、 Python とは異なり、セミコロンは構文の一部であるため、注意すべき点があります。

JavaScriptの文法について詳しく見ていくには、[字句文法のリファレンスページ](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)を参照してください。

## 制御構造

JavaScript は C 言語ファミリーの他の言語とよく似た制御構造セットを持っています。条件文は [`if` と `else`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) で対応しています。必要ならこれらを連鎖させることもできます。

```js
let name = "kittens";
if (name === "puppies") {
  name += " woof";
} else if (name === "kittens") {
  name += " meow";
} else {
  name += "!";
}
name === "kittens meow";
```

JavaScript には `elif` がなく、 `else if` は実際には単一の `if` 文からなる `else` 分岐にすぎません。

JavaScript には [`while`](/ja/docs/Web/JavaScript/Reference/Statements/while) ループと [`do...while`](/ja/docs/Web/JavaScript/Reference/Statements/do...while) ループがあります。前者は普通のループ処理に適しており、後者はループの本体が少なくとも 1 回は実行されるようにしたいときのループです。

```js
while (true) {
  // 無限ループ!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

JavaScript の [`for` ループ](/ja/docs/Web/JavaScript/Reference/Statements/for)は C や Java のそれと同じです。これはループの制御情報を 1 行で与えることができます。

```js
for (let i = 0; i < 5; i++) {
  // 5 回実行されます
}
```

JavaScript にはこの他に、特徴的な for ループが 2 つあります。 [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) は[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)や多くの特徴的な配列を反復処理し、 [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) はオブジェクトのすべての[列挙可能](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)プロパティを反復処理します。

```js
for (const value of array) {
  // 値に関する処理
}

for (const property in object) {
  // オブジェクトのプロパティに関する処理
}
```

`switch` 文はある数値や文字列を元にした複数分岐に使われます。

```js
switch (action) {
  case "draw":
    drawIt();
    break;
  case "eat":
    eatIt();
    break;
  default:
    doNothing();
}
```

C 言語と同様、 case 句は概念的には[ラベル付け](/ja/docs/Web/JavaScript/Reference/Statements/label)と同じなので、 `break` 文を追加しなければ、実行は次のレベルに「落下」します。しかし、実際にはジャンプ表ではありません。文字列や数値リテラルだけでなく、どのような式でも `case` 句には属せず、照合する値と等しくなるまで 1 つずつ評価されます。比較は `===` 演算子を用いて行われます。

Rust など一部の言語とは異なり、制御構造は JavaScript では文ですので、 `const a = if (x) { 1 } else { 2 }` のように変数に代入することはできません。

JavaScript のエラーは [`try...catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) 文を使用して処理します。

```js
try {
  buildMySite("./website");
} catch (e) {
  console.error("サイトの構築に失敗しました:", e);
}
```

エラーは [`throw`](/ja/docs/Web/JavaScript/Reference/Statements/throw) 文を使用して発生させる（投げる）ことができます。多くの組み込み処理も、同様にしてエラーを発生させる可能性があります。

```js
function buildMySite(siteDirectory) {
  if (!pathExists(siteDirectory)) {
    throw new Error("サイトのディレクトリーが存在しません");
  }
}
```

一般に、 `throw` 文からは何でもエラーとして投げることができるため、捕捉するエラーの型を指示することはできません。しかし、例えば上の例のように、通常は [`Error`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error) のインスタンスであると想定することができます。 `Error` には [`TypeError`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypeError) や [`RangeError`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RangeError) のような組み込みのサブクラスがいくつかあり、エラーに関する特別な意味づけを提供するために使用することができます。 JavaScript では条件付きの catch はありません。 1 つの種類のエラーだけを処理したい場合は、すべてを catch し、 [`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) を使用してエラーの型を特定し、他の用途のものは throw しなおす必要があります。

```js
try {
  buildMySite("./website");
} catch (e) {
  if (e instanceof RangeError) {
    console.error("引数が範囲を超えているようです:", e);
    console.log("再試行中...");
    buildMySite("./website");
  } else {
    // 他の種類のエラーをどのように処理すればよいのかわからない場合、呼び出す
    // スタックの上位にある何かで捕捉して処理できるように throw します。
    throw e;
  }
}
```

エラーがコールスタック内の `try...catch` で捕捉されなかった場合、プログラムは終了します。

制御フロー文の包括的なリストは、[リファレンスの該当部分](/ja/docs/Web/JavaScript/Reference/Statements)を参照してください。

## オブジェクト

JavaScript のオブジェクトは、名前と値のペアの単純な集合であると考えることができます。これは以下のものに似ています。

- Python の辞書型
- Perl や Ruby のハッシュ
- C や C++ のハッシュテーブル
- Java の HashMap クラス
- PHP の連想配列

JavaScript でオブジェクトはハッシュです。静的型付け言語のオブジェクトとは異なり、 JavaScript でオブジェクトは固定された形状を持ちません - プロパティはいつでも追加したり、削除したり、並べ替えたり、変更したり、動的に問い合わせたりすることができます。オブジェクトのキーは常に[文字列](/ja/docs/Web/JavaScript/Reference/Global_Objects/String)または[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)。配列の添字でさえ、正規的には整数ですが、その基盤は文字列です。

空のオブジェクトを生成する 2 つの基本的な方法があります。

```js
const obj = {
  name: "Carrot",
  for: "Max",
  details: {
    color: "orange",
    size: 12,
  },
};
```

オブジェクのプロパティに[アクセス](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)するには、ドット (`.`) または角括弧 (`[]`) を使用することができます。ドット記法を使用する場合、キーは有効な[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers)でなければなりません。一方、角括弧を使用すると、動的なキー値でオブジェクトのインデックスを指定することができます。

```js
// ドット記法
obj.name = "Simon";
const name = obj.name;

// ブラケット記法
obj["name"] = "Simon";
const name = obj["name"];

// 変数をキー定義に使用できる
const userName = prompt("キーは何ですか？");
obj[userName] = prompt("値は何ですか？");
```

プロパティのアクセスは連鎖させることができます。

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

オブジェクトは常に参照なので、何かが明示的にオブジェクトをコピーしない限り、オブジェクトへの変更は外部から見えることになります。

```js
const obj = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj);
console.log(obj.x); // 1
```

これはまた、別個に作成された2つのオブジェクトは異なる参照であるため、決して等しくならない (`!==`) と いう意味も含んでいます。同じオブジェクトの参照を2つ持っている場合、片方を変更するともう一方のオブジェクトから観察することができます。

```js
const me = {};
const stillMe = me;
me.x = 1;
console.log(stillMe.x); // 1
```

オブジェクトとプロトタイプの詳細については、 [`Object` のリファレンスページ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object)を参照してください。オブジェクト初期化構文の詳細については、[リファレンスページ](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)を参照してください。

このページでは、オブジェクトのプロトタイプと継承についての詳細はすべて省略しました。というのも、通常は（難解に聞こえるかもしれない）基盤のメカニズムに触れることなく、[クラス](#クラス)で継承を実現できるからです。これらについては、[継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)を参照してください。

## 配列

JavaScript における配列は、実はオブジェクトの特殊型です。普通のオブジェクトとほとんど同じように働きます（数値のプロパティは当然 `[]` の構文でのみアクセスできます）が、しかし配列は `length` という魔法のプロパティを持っています。これは常に配列の一番大きなインデックスより 1 だけ大きい値を取ります。

配列を生成する方法のひとつは以下の通りです。

```js
const a = ["dog", "cat", "hen"];
a.length; // 3
```

JavaScript の配列はオブジェクトでもあり、任意の数値を含めたあらゆるプロパティを配列に割り当てることができます。唯一の「魔法」は、特定のインデックスを設定すると、 `length` が自動的に更新されることです。

```js
const a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', 空 × 97, 'fox']
```

上記で得られた配列は、途中に空きスロットがあるため[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)と呼ばれ、エンジンは配列としての最適化を行わなくなりハッシュ表になります。配列が密に配置されていることを確認してください。

範囲外のインデックスを使用しても例外は発生しません。配列の存在しないインデックスを求めようとすると、 `undefined` の値が返ります。

```js
const a = ["dog", "cat", "hen"];
console.log(typeof a[90]); // undefined
```

配列は任意の要素を持つことができ、任意に増減することができます。

```js
const arr = [1, "foo", true];
arr.push({});
// arr = [1, "foo", true, {}]
```

配列は他の C 言語風の言語と同じように、 `for` ループで反復処理することができます。

```js
for (let i = 0; i < a.length; i++) {
  // a[i] について何かする
}
```

あるいは、配列は反復処理可能なので、 C++/Java の `for (int x : arr)` 構文と同義の [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループを使用することもできます。

```js
for (const currentValue of a) {
  // currentValue (現在の値) で何かをする
}
```

配列には、たくさんの[配列メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)があります。例えば [`map()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) はすべての配列要素にコールバックを適用し、新しい配列を返します。

```js
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby dog', 'baby cat', 'baby hen']
```

## 関数

関数は、オブジェクトとともに JavaScript を理解するうえで核となる構成要素です。基本的な関数は極めてシンプルです。

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

これは基本的な関数を例示しています。JavaScript の関数は 0 以上の名前のついた引数を取ることができます。関数の本体は好きなだけたくさんの文を含ませることができ、またその関数内で局所的な変数を宣言することができます。 [`return`](/ja/docs/Web/JavaScript/Reference/Statements/return) 文は好きなときに関数を終了し値を返すために使うことができます。もし return 文が使われなかったら（あるいは値を持たない空の return が使われたら）、JavaScript は `undefined` を返します。

関数は、その関数を指定する引数の数より多くても少なくても呼び出すことができます。関数が期待している引数を渡さずに呼び出すと、その引数は `undefined` に設定されます。もし期待する以上の引数を渡すと、関数は余分な引数を無視します。

```js
add(); // NaN
// Equivalent to add(undefined, undefined)

add(2, 3, 4); // 5
// 第 1、第 2 引数を加算。4 は無視される
```

他にも利用できる引数の構文があります。例えば、[残余引数構文](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)は、 Python の `*args` と同じように、呼び出し側から渡された余分な引数をすべて配列に集合させることができます。（JS は言語レベルで名前付き引数を持っていないので、 `**kwargs` はありません。）

```js
function avg(...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
}

avg(2, 3, 4, 5); // 3.5
```

上のコードでは、変数 `args` に関数に渡された値をすべて格納しています。

残余引数は、宣言された引数以降をすべて格納しますが、宣言される前の引数は格納しません。言い換えれば、 `function avg(firstValue, ...args)` は関数に渡された最初の値を `firstValue` 変数に格納し、残りの引数を `args` に格納します。

関数が引数のリストを受け入れ、それらがすでに配列にある場合、関数呼び出しの中で[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)を使って、配列を要素のリストとして展開することができます。例えば `avg(...numbers)` のようにします。

JavaScript には名前付き引数がないと述べました。しかし、オブジェクトを便利にパックしたり展開したりできる[オブジェクト構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)を使用して実装することは可能です。

```js
// { } 中括弧はオブジェクトを構造分解する
function area({ width, height }) {
  return width * height;
}

// { } 中括弧はここでは新しいオブジェクトを作成する
console.log(area({ width: 2, height: 3 }));
```

また、[デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)構文もあります。これは、省略した引数（または値がdefinedとして渡された引数）に既定値を持たせるものです。

```js
function avg(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

avg(1, 2); // 1, instead of NaN
```

### 無名関数

JavaScript では無名関数、つまり名前のない関数を作成することができます。実際には、無名関数は他の関数の引数として使用されたり、関数を呼び出すために使用できる変数に代入されたり、他の関数から返されたりします。

```js
// 括弧の前に関数名がないことに注意
const avg = function (...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
};
```

これにより、引数を指定して `avg()` を呼び出すことで、無名関数を呼び出すことができるようになります。つまり、意味づけとしては `function avg() {}` という宣言構文を使用して関数を宣言することと同じになります。

無名関数を定義する方法は、他にも[アロー関数式](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を使用する方法があります。

```js
// 括弧の前に関数名がないことに注意
const avg = (...args) => {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
};

// 単に式を返す場合は `return` を省略できる
const sum = (a, b, c) => a + b + c;
```

アロー関数は意味的に関数式と等価ではありません。詳しくは、その[リファレンスページ](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を参照してください。

関数式が役に立つ他の場面もあります。単一の式で関数の宣言と起動を同時に行う仕組みがあります。これは [IIFE (Immediately invoked function expression)](/ja/docs/Glossary/IIFE) と呼ばれます。

```js
(function () {
  // …
})();
```

IIFE の用途については、[クロージャでプライベートメソッドを模倣する](/ja/docs/Web/JavaScript/Guide/Closures#クロージャでプライベートメソッドを模倣する)で見ることができます。

### 再帰関数

JavaScript では関数を再帰的に呼び出すことができます。これは特にブラウザーの DOM などにみられる木構造を取り扱うときに便利でしょう。

```js
function countChars(elm) {
  if (elm.nodeType === 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
    count += countChars(child);
  }
  return count;
}
```

関数式には名前を付けることができるので、同様に再帰にすることができます。

```js
const charsInBody = (function counter(elm) {
  if (elm.nodeType === 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
    count += counter(child);
  }
  return count;
})(document.body);
```

上記のように関数式に与えられた名前は、関数自身のスコープ内でのみ有効です。これはエンジンによる高度な最適化を実現して、結果的に可読性が高いコードになります。この名前はデバッガーやスタックトレースにも表示されますので、デバッグにかかる時間を節約できます。

関数型プログラミングを使用している場合、 JavaScript での再帰のパフォーマンスへの影響に注意してください。言語仕様では[末尾呼出し最適化](https://ja.wikipedia.org/wiki/末尾再帰)を指定していますが、スタックトレースの復元やデバッガビリティが難しいため、JavaScriptCore（Safariで使用されています）のみ実装しています。深い再帰では、スタックオーバーフローを避けるために代わりに反復処理を用いることを検討してください。

### 関数は第一級オブジェクト

JavaScript の関数は第一級のオブジェクトです。これは、関数が変数に割り当てることができ、他の関数に引数として渡すことができ、他の関数から返すことができることを意味しています。さらに JavaScript では、明示的にキャプチャすることなくすぐに[クロージャ](/ja/docs/Web/JavaScript/Guide/Closures)に対応しているため、関数型プログラミングのスタイルを便利に適用することができます。

```js
// 関数を返す関数
const add = (x) => (y) => x + y;
// 関数を受け入れる関数
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
```

JavaScript の関数はそれ自体がオブジェクトであり、 JavaScript で他のものと同様に、オブジェクトの節で見てきたような、プロパティの追加や変更ができることに注意してください。

### 内部関数

JavaScript での関数宣言は他の関数内でも行うことができます。 JavaScript で関数を入れ子にすることの重要なことは、内部関数内で親関数スコープの変数にアクセスできることです。

```js
function parentFunc() {
  const a = 1;

  function nestedFunc() {
    const b = 4; // parentFunc はこれを使用できない
    return a + b;
  }
  return nestedFunc(); // 5
}
```

内部関数は保守しやすいコードを書くときに多大な利便性をもたらします。ある関数が他の部分のコードでは役立たない関数を 1 つか 2 つ使っているなら、これらのユーティリティ関数を他から呼び出される関数の入れ子にすることができます。内部関数はグローバルスコープでなくなるので、いいことです。

内部関数はグローバル変数を使うという誘惑に対する対抗措置です。複雑なコードを書くとき、複数の関数間で値を共有するためにグローバル変数を使いたくなります。しかし、これでは保守がしづらくなります。内部関数は親関数の変数を共有できるので、グローバルな名前空間を消費せずに複数の関数をまとめることができます。

## クラス

JavaScript には [class](/ja/docs/Web/JavaScript/Reference/Classes) 構文があり、これは Java などの言語にとてもよく似ています。

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return `Hello, I'm ${this.name}!`;
  }
}

const p = new Person("Maria");
console.log(p.sayHello());
```

JavaScript のクラスは単なる関数であり、 [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 演算子でインスタンス化する必要があります。クラスはインスタンス化されるたびに、そのクラスが指定したメソッドやプロパティを格納したオブジェクトを返します。クラスはコードの整理を強制しません。例えば、クラスを返す関数を持つこともできますし、ファイルごとに複数のクラスを持つこともできます。例えば、クラスの生成はアロー関数から発生した式に過ぎません。このパターンは[ミックスイン](/ja/docs/Web/JavaScript/Reference/Classes/extends#mix-ins)と呼ばれます。

```js
const withAuthentication = (cls) =>
  class extends cls {
    authenticate() {
      // …
    }
  };

class Admin extends withAuthentication(Person) {
  // …
}
```

静的プロパティは先頭に `static` を付けて作成します。プライベート要素は先頭にハッシュ `#` を付けて作成します（`private` ではありません）。ハッシュは要素の名前の不可欠な部分であり、通常の文字列キーのプロパティと区別します。（`#` は Python の `_` と考えてください。）他の多くの言語とは異なり、派生クラスであっても、クラス本体の外でプライベート要素を読み取る方法はありません。

様々なクラス機能の詳細なガイドについては、[ガイドページ](/ja/docs/Web/JavaScript/Guide/Using_classes)を参照してください。

## 非同期プログラミング

JavaScript は本質的に単一スレッドです。[並列処理](https://ja.wikipedia.org/wiki/並列計算)はなく、[並行処理](https://ja.wikipedia.org/wiki/並行計算)のみです。非同期プログラミングは[イベントループ](/ja/docs/Web/JavaScript/Reference/Execution_model)によって行われ、設定するにはタスクの集合をキューに入れ、完了をポーリングします。

JavaScript で非同期コードを書く慣用的な方法は 3 つあります。

- コールバックベース（{{domxref("Window.setTimeout", "setTimeout()")}} など）
- プロミス ({{jsxref("Global_Objects/Promise", "Promise")}}) ベース
- プロミスの糖衣構文である {{jsxref("Statements/async_function", "async")}}/{{jsxref("Operators/await", "await")}}

例えば、 JavaScript でファイル読み込み処理をすると次のようになります：

```js
// コールバックベース
fs.readFile(filename, (err, content) => {
  // このコールバックは、ファイルが読み込まれたときに呼び出される
  if (err) {
    throw err;
  }
  console.log(content);
});
// このコードは、ファイルが読み込まれるのを待っている間に実行される

// プロミスベース
fs.readFile(filename)
  .then((content) => {
    // ファイルが読み取られたときに実行されること
    console.log(content);
  })
  .catch((err) => {
    throw err;
  });
// このコードは、ファイルが読み込まれるのを待っている間に実行される

// Async/await
async function readFile(filename) {
  const content = await fs.readFile(filename);
  console.log(content);
}
```

コア言語では非同期プログラミング機能を特に指定していませんが、外部環境と対話する際には非常に重要です。[ユーザーの許可を依頼したり](/ja/docs/Web/API/Permissions_API)、[データを取得したり](/ja/docs/Web/API/Fetch_API/Using_Fetch)、[ファイルを読み取ったり](https://nodejs.org/api/fs.html)するときなどです。長時間実行される可能性のある処理を非同期にしておくことで、この処理が待機している間も他の処理を実行できることを保証します。例えば、ユーザーが許可を与えるボタンをクリックするのを待っている間にブラウザーがフリーズしないようにします。

非同期の値がある場合、その値を同期的に取得することはできません。例えば、プロミスがある場合、最終的な結果にアクセスするには [`then()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) メソッドを使用するしかありません。同様に、 [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) は非同期コンテキスト（通常は非同期関数やモジュール）でしか使用できません。プロミスは決してブロッキングされません。プロミスの結果に依存するロジックだけが遅延され、他のすべてはその間に実行され続けます。関数型プログラマーであれば、プロミスは `then()` で割り当てられた[モナド](<https://ja.wikipedia.org/wiki/モナド_(プログラミング)>)であると認識するかもしれません（しかし、これらは自動平坦化されるため、完全なモナドではありません。つまり `Promise<Promise<T>>` を作ることはできません）。

実際、シングルスレッドモデルであるにもかかわらず、 Node.js はノンブロッキング IO のため、多数のデータベースやファイルシステムリクエストを処理してもとてもパフォーマンスが高く、サーバーサイドプログラミングによく使われています。しかし、純粋な JavaScript である CPU バウンド（計算集約的な）タスクはメインスレッドをブロックします。本当の並列化を実現するには、[ワーカー](/ja/docs/Web/API/Web_Workers_API/Using_web_workers) を使用する必要があるかもしれません。

非同期プログラミングについてもっと学ぶには、[プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises)を読むか、[非同期 JavaScript](/ja/docs/Learn_web_development/Extensions/Async_JS) チュートリアルに従ってください。

## モジュール

JavaScript はほとんどのランタイムで対応しているモジュールシステムも指定しています。モジュールは通常ファイルであり、ファイルパスまたは URL で識別されます。モジュール間でデータを交換するために [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) および [`export`](/ja/docs/Web/JavaScript/Reference/Statements/export) 文を使用することができます。

```js
import { foo } from "./foo.js";

// エクスポートされていない変数はモジュールにローカル
const b = 2;

export const a = 1;
```

Haskell、Python、Java などとは異なり、 JavaScript のモジュール解像度は完全にホスト定義です。通常は URL やファイルパスに基づいているので、相対ファイルパスは「うまく行き」、プロジェクトのルートパスではなく現在のモジュールのパスからの相対パスとなります。

しかし、 JavaScript 言語は標準ライブラリーモジュールを提供していません。すべてのコア機能は、代わりに [`Math`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math) や [`Intl`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl) のようなグローバル変数によって動いています。これは、 JavaScriptが長い間モジュールシステムを欠いてきた歴史と、モジュールシステムを選ぶとランタイムのセットアップにいくつかの変更を伴うという事実によるものです。

ランタイムが異なれば、使用するモジュールシステムも異なります。例えば、 [Node.js](https://nodejs.org/en/) はパッケージマネージャ [npm](https://www.npmjs.com/) を使用し、ほとんどの場合ファイルシステムベースですが、 [Deno](https://deno.land/) やブラウザーは完全に URL ベースで、 HTTP URL からモジュールを解決することができます。

詳しい情報は[モジュールガイドページ](/ja/docs/Web/JavaScript/Guide/Modules)を参照してください。

## 言語とランタイム

このページを通して、ある機能は「言語レベル」であり、他にも「ランタイムレベル」の機能があることを常に述べてきました。

JavaScript は汎用スクリプト言語です。[コア言語仕様](/ja/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_コア言語_ecmascript)は、純粋な計算ロジックに焦点を当てています。入出力は扱いません。実際、特別なランタイムレベルの API （最も有名なものが [`console.log()`](/ja/docs/Web/API/console/log_static)）がなければ、 JavaScript プログラムの動作は完全に観察不可能です。

ランタイム、またはホストとは、 JavaScript エンジン（インタープリター）にデータを供給し、特別なグローバルプロパティを提供し、エンジンが外の世界と対話するための仕掛けを提供するものです。モジュール解決、データの読み込み、メッセージの出力、ネットワークリクエストの送信などはすべてランタイムレベルの処理です。 JavaScript はその誕生以来、 [DOM](/ja/docs/Web/API/Document_Object_Model) のような API を提供するブラウザー、[ファイルシステムアクセス](https://nodejs.org/api/fs.html) などの API を提供する Node.js など、さまざまな環境で採用されてきました。 JavaScript はウェブ（これが本来の目的でした）、モバイルアプリ、デスクトップアプリ、サーバーサイドアプリ、サーバーレス、組み込みシステムなどでうまく統合されています。 JavaScript のコア機能を学ぶ一方で、知識を使用するためにはホスティング提供された機能を理解することも重要です。例えば、[ウェブプラットフォーム API](/ja/docs/Web/API) はすべて読むことができ、これらはブラウザー、時にはブラウザー以外によって実装されます。

## さらなる探究

このページでは、 JavaScript の様々な機能が他の言語と比較してどう異なるのかという観点で、とても基本的なことを説明しています。言語そのものや各機能の細部についてもっと知りたい場合は、[JavaScript ガイド](/ja/docs/Web/JavaScript/Guide)や [JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference)を参照してください。

言語の本質的な部分については、紙面や 複雑さのために省略した部分もありますが、自分自身で探求してください。

- [継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [クロージャ](/ja/docs/Web/JavaScript/Guide/Closures)
- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)
- [反復処理](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)
