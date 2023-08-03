---
title: JavaScript 「再」入門
slug: Web/JavaScript/Language_overview
---

{{jsSidebar}}

なぜ「再」入門なのでしょうか。それは、 [JavaScript](/ja/docs/Glossary/JavaScript) が誤解されていることで有名だからです。しばしばおもちゃだと馬鹿にされながら、しかしその嘘のような単純さの下に、強力な言語機能が隠されているのです。 JavaScript はとても多くの著名なアプリケーションで使用されるようになっており、この技術の深い知識が、あらゆるウェブやモバイルの開発者にとって重要なスキルであることを示しています。

まずは、この言語の歴史を振り返ってみましょう。 JavaScript は、 1995 年に Netscape 社のエンジニアだった Brendan Eich 氏によって開発されました。 JavaScript は、 1996 年の初めに Netscape 2 とともにリリースされました。当初は LiveScript と呼ばれる予定でしたが、 Sun Microsystems の Java 言語の人気にあやかろうとしたマーケティング上の不運な決定により、両者にはほとんど共通点がないにもかかわらず改名されました。このことは、いまだに混同の元となっています。

その数か月後、 Microsoft は Internet Explorer 3 とともに JScript をリリースしました。これはほぼ互換性のある JavaScript の互換品でした。さらに数か月後、 Netscape はこの言語をヨーロッパの標準化団体である [Ecma International](https://www.ecma-international.org/) に提出し、その結果、同年に [ECMAScript](/ja/docs/Glossary/ECMAScript) という標準の第 1 版が生まれました。この標準は 1999 年に [ECMAScript 第 3 版](https://www.ecma-international.org/publications/standards/Ecma-262.htm)として大幅に更新され、それ以降はほぼ安定しています。第 4 版は、言語の複雑化に関する政治的な見解の相違から放棄されました。第 4 版の多くの部分は、 2009 年 12 月に発行された新しい ECMAScript 第 5 版と、 2015 年 6 月に発行された第 6 版の基礎になりました。

> **メモ:** より馴染んでいるため、ここからは ECMAScript を "JavaScript" と呼ぶことにします。

大部分のプログラミング言語と違って、 JavaScript という言語には入出力の概念がありません。この言語はあるホスト環境でのスクリプト言語として実行されるよう設計されており、外部の世界とコミュニケーションするための機構はそのホスト環境が提供するものとしているのです。もっとも一般的なホスト環境はブラウザーですが、JavaScript のインタープリターは Adobe Acrobat や Photoshop、SVG 画像、Yahoo! ウィジェットエンジン、さらには [Node.js](https://nodejs.org/) といったサーバーサイド環境、オープンソースの [Apache CouchDB](https://couchdb.apache.org/) のような NoSQL データベース、組み込みコンピューター、[GNOME](https://www.gnome.org/) (GNU/Linux オペレーティングシステムでもっとも人気がある GUI 環境のひとつ) のようなデスクトップ環境など、さまざまなところでみられます。

## 概要

JavaScript はマルチパラダイムの動的言語であり、型や演算子、標準組み込みオブジェクト、メソッドがあります。その構文は Java や C 言語に由来するので、それらの言語の多くの構造が JavaScript にも同様に適用できます。JavaScript は、クラスの代わりにオブジェクトプロトタイプによるオブジェクト指向プログラミングをサポートします (詳しくは [プロトタイプの継承](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) や ES2015 の [classes](/ja/docs/Web/JavaScript/Reference/Classes) をご覧ください)。また、JavaScript は関数型プログラミングもサポートします。関数もオブジェクトであり、関数に実行可能なコードを持たせて、他のオブジェクトと同じように受け渡しすることができます。

まずはあらゆる言語の構成要素、「型」を見ることから始めましょう。 JavaScript のプログラムは値を操作し、それらの値はすべて型に属しています。JavaScript の型は次の通りです。

- [Number](/ja/docs/Web/JavaScript/Data_structures#数値型) (数値型)
- [BigInt](/ja/docs/Web/JavaScript/Data_structures#長整数型) (長整数型)
- [String](/ja/docs/Web/JavaScript/Data_structures#文字列型) (文字列型)
- [Boolean](/ja/docs/Web/JavaScript/Data_structures#論理型) (論理型)
- {{jsxref("Function")}} (関数)
- [Object](/ja/docs/Web/JavaScript/Data_structures#オブジェクト) (オブジェクト型)
- [Symbol](/ja/docs/Web/JavaScript/Data_structures#シンボル型) (シンボル型、ES2015 で新登場)

...ああ、あと [undefined](/ja/docs/Web/JavaScript/Data_structures#undefined_型) と [null](/ja/docs/Web/JavaScript/Data_structures#null_型)、これらはちょっと変わっています。そして {{jsxref("Array")}} (配列)、これは特殊なオブジェクトの一種。さらに {{jsxref("Date")}} (日付) と {{jsxref("RegExp")}} (正規表現)、これらは自由に使えるオブジェクトです。あと技術的に正確なことを言うと、関数もオブジェクトの特殊な型です。したがって、この型の図はより正確にはこうなります。

- [Number](/ja/docs/Web/JavaScript/Data_structures#数値型) (数値型)
- [BigInt](/ja/docs/Web/JavaScript/Data_structures#長整数型) (長整数型)
- [String](/ja/docs/Web/JavaScript/Data_structures#文字列型) (文字列型)
- [Boolean](/ja/docs/Web/JavaScript/Data_structures#論理型) (論理型)
- [Symbol](/ja/docs/Web/JavaScript/Data_structures#シンボル型) (シンボル型、ES2015 で新登場)
- [Object](/ja/docs/Web/JavaScript/Data_structures#オブジェクト) (オブジェクト型)

  - {{jsxref("Function")}} (関数)
  - {{jsxref("Array")}} (配列)
  - {{jsxref("Date")}} (日付)
  - {{jsxref("RegExp")}} (正規表現)

- [null](/ja/docs/Web/JavaScript/Data_structures#null_型)
- [undefined](/ja/docs/Web/JavaScript/Data_structures#undefined_型)

さらにいくつかの組み込み {{jsxref("Error")}} 型もあります。しかし、最初の図のままでいく方が物事はとても簡単になるでしょうから、当面は最初の図で説明します。

## 数値

ECMAScript には 2 つの組み込み数値型があります。 **Number** と **BigInt** です。

Number 型は[IEEE 754 倍精度 64 ビットバイナリー値](https://ja.wikipedia.org/wiki/%E5%80%8D%E7%B2%BE%E5%BA%A6%E6%B5%AE%E5%8B%95%E5%B0%8F%E6%95%B0%E7%82%B9%E6%95%B0) (-(253 − 1) と 253 − 1 の間の数) です。そして、この記事や他の MDN の記事で「整数」という場合は、ふつう Number 値を使った整数の*表現*を意味しています。しかし、このような Number 値は本物の整数ではないので、少し注意が必要です。以下の例を見てください。

```js
console.log(3 / 2); // 1.5, 1 ではない
console.log(Math.floor(3 / 2)); // 1
```

したがって、*見かけ上は整数*でも、実際には*暗黙的に浮動小数点数*となります。

また、次のようなことに注意してください。

```js
0.1 + 0.2 == 0.30000000000000004;
```

実のところ、整数値は 32 ビット整数として扱われます。また一部の実装では、32 ビット整数値ではなく Number で有効な命令の実行を求められるまでの間、32 ビット整数値として保存します。これはビット演算を行う際に重要なことです。

標準的な[算術演算子](/ja/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)に対応しています。例えば、足し算、引き算、モジュロ (剰余) などです。さらに、これは前に言及していなかったのですが、より高度な数学関数や定数を扱う {{jsxref("Math")}} という組み込みオブジェクトもあります。

```js
Math.sin(3.5);
var circumference = 2 * Math.PI * r;
```

組み込みの {{jsxref("Global_Objects/parseInt", "parseInt()")}} 関数を使うことで、文字列を整数に変換することができます。この関数は省略可能な第 2 引数として変換の基数を取りますが、この引数を常に指定してください。

```js
parseInt("123", 10); // 123
parseInt("010", 10); // 10
```

古いブラウザーでは、 "0" から始まる文字列を 8 進数 (基数 8) とみなしますが、これは 2013 年以降のブラウザーにはあてはまりません。文字列の書式を理解していなければ、古いブラウザーは驚くような結果になることがあります。

```js
parseInt("010"); //  8
parseInt("0x10"); // 16
```

この例では、{{jsxref("Global_Objects/parseInt", "parseInt()")}} が最初の文字列を先頭の 0 から 8 進数として、また 2 番目の文字列を先頭の "0x" から 16 進数として扱われたことがわかります。_16 進数表記は現在も有効です_。8 進数のみ削除されました。

もし 2 進数を整数に変換したいなら、単純に基数を変えましょう。

```js
parseInt("11", 2); // 3
```

同様に浮動小数点数への変換を行う、組み込みの {{jsxref("Global_Objects/parseFloat", "parseFloat()")}} 関数があります。 {{jsxref("Global_Objects/parseInt", "parseInt()")}} と異なり、 `parseFloat()` では基数は常に 10 が用いられます。

また、単項演算子 `+` を使って値を数値に変換することもできます。

```js
+"42"; // 42
+"010"; // 10
+"0x10"; // 16
```

もし文字列が数値でない場合、 {{jsxref("NaN")}} (非数、"Not a Number" の略) と呼ばれる特別な値が返されます。

```js
parseInt("hello", 10); // NaN
```

`NaN` には毒性があります。これを算術演算に入力として与えても、その結果は同様に `NaN` になるのです。

```js
NaN + 5; // NaN
```

`NaN` であるかどうかを確実に確認するには、組み込みの {{jsxref("Number.isNaN", "Number.isNaN()")}} 関数を使用してください。この関数は、[名前が示す通りの動作](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#description)をします。

```js
Number.isNaN(NaN); // true
Number.isNaN("hello"); // false
Number.isNaN("1"); // false
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN([1]); // false
Number.isNaN([1, 2]); // false
```

しかし、 `NaN` であるかどうかをグローバル関数の {{jsxref("Global_Objects/isNaN", "isNaN()")}} で確認しないでください。[これは直感的でない動作](/ja/docs/Web/JavaScript/Reference/Global_Objects/isNaN#confusing_special-case_behavior)をします。

```js
isNaN("hello"); // true
isNaN("1"); // false
isNaN(undefined); // true
isNaN({}); // true
isNaN([1]); // false
isNaN([1, 2]); // true
```

JavaScript はまた、特別な値 {{jsxref("Infinity")}} と `-Infinity` を持っています。

```js
1 / 0; //  Infinity
-1 / 0; // -Infinity
```

`Infinity`、`-Infinity`、`NaN` であるかをどうかは、組み込みの {{jsxref("Global_Objects/isFinite", "isFinite()")}} 関数を使用して確認することができます。

```js
isFinite(1 / 0); // false
isFinite(-Infinity); // false
isFinite(NaN); // false
```

> **メモ:** {{jsxref("Global_Objects/parseInt", "parseInt()")}} および {{jsxref("Global_Objects/parseFloat", "parseFloat()")}} 関数は文字列を、規定の数値書式に該当しない文字が現れるまで解釈し、その箇所までの数値を返します。一方、"+" 演算子は適切でない文字を含む文字列を `NaN` に変換します。コンソールから、文字列 "10.2abc" をそれぞれの方法で解釈させるとその違いがよくわかるでしょう。

## 文字列

JavaScript における文字列は、[Unicode 文字](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#unicode)の並びです。これは、国際化を扱う必要があった誰もが歓迎する知らせでしょう。より正確に言えば UTF-16 コード単位の連なったものであり、つまりそれぞれのコード単位は 16 ビットの整数で表されます。また、それぞれの Unicode 文字は 1 または 2 個のコード単位で表します。

もし単一の文字を表したいなら、単純に 1 文字で構成された文字列を使います。

文字列の長さ (コード単位) を知るには、その文字列の [`length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length) プロパティにアクセスしましょう。

```js
"hello".length; // 5
```

ここで初めて JavaScript のオブジェクトに触れました。文字列を{{jsxref("Object", "オブジェクト", "", 1)}}のように使うことができることには、既に触れましたっけ？文字列にも{{jsxref("String", "メソッド", "#instance_methods", 1)}}があり、文字列を操作したり、文字列に関する情報にアクセスしたりすることができます。

```js
"hello".charAt(0); // "h"
"hello, world".replace("world", "mars"); // "hello, mars"
"hello".toUpperCase(); // "HELLO"
```

## その他の型

JavaScript は {{jsxref("null")}} と {{jsxref("undefined")}} を区別します。 `null` は、意図的に値がないことを示す値です (また、`null` キーワードによってのみアクセスできます)。対して `undefined` とは、初期化されていない値 — すなわち、まだ値が代入されていないことを示す `undefined` 型の値です。変数については後で話しますが、 JavaScript では値を代入しないで変数を宣言することができるのです。そのようにした場合、その変数の型は `undefined` です。実際は、`undefined` は定数です。

JavaScript は `true` と `false` (これらはともにキーワードです) を取りうる値とする論理型を持っています。どんな値でも以下の規則に基づいて論理値に変換できます。

1. `false`、`0`、空文字列 (`""`)、`NaN`、`null`、`undefined` は、すべて `false` になる。
2. その他の値はすべて `true` になる。

`Boolean()` 関数を使うことで、明示的にこの変換を行うことができます。

```js
Boolean(""); // false
Boolean(234); // true
```

しかし、これはほとんど必要ありません。 JavaScript は、 `if` 文の中 (下記参照) のように論理値が期待される場面で、暗黙にこの変換を行うからです。このため、ときどき "true values" または "false values" と言うことがありますが、これは論理値に変換されるときにそれぞれ `true` または `false` になる値という意味です。他にも、これらの値はそれぞれ "truthy" または "falsy" と呼ばれることがあります。

`&&` (論理 _AND_) や `||` (論理 _OR_)、`!` (論理 _NOT_) などの論理演算がサポートされています (下記参照)。

## 変数

JavaScript では、新しい変数を宣言するのに [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)、[`const`](/ja/docs/Web/JavaScript/Reference/Statements/const)、[`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) の 3 つのキーワードのいずれかを使用します。

**`let`** は、ブロックレベルの変数を宣言できます。宣言した変数は、変数を包含する*ブロック*から使用できます。

```js
let a;
let name = "Simon";
```

以下の例は、**`let`** で宣言した変数のスコープを示しています。

```js
// ここでは myLetVariable が *見えません*

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // ここだけで myLetVariable が見えます
}

// ここでは myLetVariable が *見えません*
```

**`const`** は、値を変更することを意図しない変数を宣言することができます。宣言した変数は、変数を宣言した*ブロック*から使用できます。

```js
const Pi = 3.14; // 変数 Pi を設定
Pi = 1; // 定数の変数は変更できないため、エラーが発生します
```

**`var`** は、もっとも一般的な宣言キーワードです。こちらは、他の 2 つのキーワードのような制約がありません。これは、伝統的に JavaScript で変数を宣言する唯一の方法であったためです。 **`var`** キーワードで宣言した変数は、変数を宣言した*関数*から使用できます。

```js
var a;
var name = "Simon";
```

以下の例は、 **`var`** で宣言した変数のスコープを示しています。

```js
// ここでは myVarVariable が *見えます*

for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {
  // myVarVariable は関数全体で見えます
}

// ここでは myVarVariable が *見えます*
```

値を代入せずに変数を宣言すると、その型は `undefined` になります。

Java など他の言語との重要な相違点は、 JavaScript ではブロックがスコープを持たないことです。関数のみがスコープを持ちます。よって、変数が複合文内 (例えば `if` 制御構造の内部) で `var` を用いて定義された場合でも、その変数は関数全体でアクセス可能です。ただし ECMAScript 2015 より、[`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) および [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) 宣言でブロックスコープの変数を作成することができます。

## 演算子

JavaScript の算術演算子は、`+`、`-`、`*`、`/`、そして剰余演算子の `%` ([モジュロと同じです](/ja/docs/Web/JavaScript/Reference/Operators#remainder_%28%29)) です。値は `=` を使って代入されます。また `+=` や `-=` のような複合代入文もあります。これらは `x = x 演算子 y` と展開できるものです。

```js
x += 5;
x = x + 5;
```

`++` や `--` を使ってインクリメントやデクリメントできます。これらは前置あるいは後置演算子として使うことができます。

[`+` 演算子](/ja/docs/Web/JavaScript/Reference/Operators#addition)は文字列の結合も行います。

```js
"hello" + " world"; // "hello world"
```

文字列を数字 (や他の値) に足すと、すべてのものが最初に文字列に変換されます。このことはミスを誘うかもしれません。

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

空文字列を足すのは、何かを文字列に変換する便利な方法です。

JavaScript における [比較](/ja/docs/Web/JavaScript/Reference/Operators) は、`<` や `>`、`<=`、`>=` を使って行うことができます。これらは文字列と数値のどちらでも機能します。等価性はちょっと明快ではありません。二重イコール演算子は、異なる型を与えると型強制を行います。これは時に面白い結果を返します。

```js
123 == "123"; // true
1 == true; // true
```

型強制を防いで厳密な比較を行うようにする場合は、三重イコール演算子を使います。

```js
123 === "123"; // false
1 === true; // false
```

`!=` と `!==` 演算子もあります。

JavaScript は [ビット演算子](/ja/docs/Web/JavaScript/Reference/Operators) も持っています。使いたいなら、ちゃんとありますよ。

## 制御構造

JavaScript は C 言語ファミリーの他の言語とよく似た制御構造セットを持っています。条件文は `if` と `else` でサポートされています。必要ならこれらを連鎖させることもできます。

```js
var name = "kittens";
if (name === "puppies") {
  name += " woof";
} else if (name === "kittens") {
  name += " meow";
} else {
  name += "!";
}
name === "kittens meow";
```

JavaScript は `while` ループと `do-while` ループを持っています。1 つ目は普通のループ処理に適しており、2 つ目はループの本体が少なくとも 1 回は実行されるようにしたいときのループです。

```js
while (true) {
  // 無限ループ!
}

var input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

JavaScript の [`for` ループ](/ja/docs/Web/JavaScript/Reference/Statements/for)は C や Java のそれと同じです。これはループの制御情報を 1 行で与えることができます。

```js
for (var i = 0; i < 5; i++) {
  // 5 回実行されます
}
```

JavaScript にはこの他に、特徴的な for ループが 2 つあります。ひとつは [`for`...`of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) です。

```js
for (let value of array) {
  // 値に関する処理
}
```

もうひとつは [`for`...`in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) です。

```js
for (let property in object) {
  // オブジェクトのプロパティに関する処理
}
```

`&&` と `||` 演算子は、1 つ目のオペランドによって 2 つ目のオペランドを評価するか否かが決まる短絡論理 (short-circuit logic) を採用しています。これはあるオブジェクトの属性にアクセスする前に、それが null オブジェクトかをチェックするのに便利です。

```js
var name = o && o.getName();
```

あるいは値の格納にも便利です (falsy な値は無効であるとき)。

```js
var name = cachedName || (cachedName = getName());
```

JavaScript は条件による式のための三項演算子を持っています。

```js
var allowed = age > 18 ? "yes" : "no";
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

もし `break` 文を入れなければ、処理は次の段階へ「落下」 (fall through) します。この動作が望むものであることはまれでしょう — 実際にそれが意図的な落下であれば、デバッグの助けになるようにコメントでラベル付しておくといいでしょう。

```js
switch (a) {
  case 1: // 落下
  case 2:
    eatIt();
    break;
  default:
    doNothing();
}
```

default 節は省略できます。必要ならば、switch 部と case のどちらにも式を置くことができます。比較はこれら 2 つの間で `===` 演算子を使って行われます。

```js
switch (1 + 3) {
  case 2 + 2:
    yay();
    break;
  default:
    neverhappens();
}
```

## オブジェクト

JavaScript のオブジェクトは、名前と値のペアの単純なコレクションであると考えることができます。これは以下のものに似ています。

- Python の辞書型
- Perl や Ruby のハッシュ
- C や C++ のハッシュテーブル
- Java の HashMap クラス
- PHP の連想配列

このデータ構造がこれほど広く使われているのは、その汎用性の高さを物語っています。 JavaScript では (コアデータ型を除いて) すべてのものはオブジェクトなので、どんな JavaScript のプログラムでは当然、ハッシュテーブルの参照が大量に行われます。ハッシュテーブルが高速なのは良いことですね。

「名前」部は JavaScript における文字列であるのに対し、値は JavaScript のどんな値でも ― さらなるオブジェクトでも ― 構いません。この仕様が任意の複雑なデータ構造を作ることを可能にしています。

空のオブジェクトを生成する 2 つの基本的な方法があります。

```js
var obj = new Object();
```

そして、

```js
var obj = {};
```

これらは意味的に等価です。2 つ目はオブジェクトリテラル構文と呼ばれ、こちらの方がより便利です。オブジェクトリテラル構文は JSON 書式の中核でもあり、こちらを採用するべきです。

オブジェクトリテラル構文はオブジェクト全体を初期化するのに使えます。

```js
var obj = {
  name: "Carrot",
  _for: "Max", // 'for' は予約語であるため、代わりに '_for' を使用します
  details: {
    color: "orange",
    size: 12,
  },
};
```

属性へのアクセスは同時に連鎖させることができます。

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

以下の例ではオブジェクトのプロトタイプ (`Person`) と、プロトタイプのインスタンス (`you`) を生成しています。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// オブジェクトを定義する
var you = new Person("You", 24);
// "You" という名前で、年齢が 24 歳の新たな Person を作成しました
```

**一度作ってしまえば**、オブジェクトのプロパティには下記の 2 つの方法のいずれかで再びアクセスすることができます。

```js
// ドット記法
obj.name = "Simon";
var name = obj.name;
```

そして...

```js
// ブラケット記法
obj["name"] = "Simon";
var name = obj["name"];
// 変数をキー定義に使用できる
var user = prompt("what is your key?");
obj[user] = prompt("what is its value?");
```

これらもまた意味的に等価です。2 つ目の方法はプロパティの名前を文字列として与えるという利点があり、つまりその名前を実行時に計算できることを意味します。ただ、この方法を用いると JavaScript エンジンや minifier による最適化が適用されなくなります。またこの方法は、[予約語](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) と同じ名前のプロパティを設定したり取得したりするのに使うことができます。

```js
obj.for = "Simon"; // 構文エラー。'for' が予約語であるため
obj["for"] = "Simon"; // うまく動きます
```

> **メモ:** ECMAScript 第 5 版より、予約語をオブジェクトのプロパティ名として「そのまま」使用できます。つまりオブジェクトリテラルの定義時に引用符で「括る」必要はありません。 ES5 の[仕様](https://es5.github.io/#x7.6.1)を確認してください。

オブジェクトやプロトタイプについて、詳しくは [Object.prototype](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object) をご覧ください。オブジェクトプロトタイプやオブジェクトプロトタイプチェーンの説明は、[継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) をご覧ください。

> **メモ:** ECMAScript 2015 より、オブジェクトのキーがブラケット記法を使った変数で定義できるようになりました。 `{[phoneType]: 12345}` が `var userPhone = {}; userPhone[phoneType] = 12345` の代わりにできます。

## 配列

JavaScript における配列は、実はオブジェクトの特殊型です。普通のオブジェクトとほとんど同じように働きます (数値のプロパティは当然 `[]` の構文でのみアクセスできます) が、しかし配列は '`length`' という魔法のプロパティを持っています。これは常に配列の一番大きな添字より 1 大きい値を取ります。

配列を生成する方法のひとつは以下の通りです。

```js
var a = new Array();
a[0] = "dog";
a[1] = "cat";
a[2] = "hen";
a.length; // 3
```

より便利な書き方は配列リテラルを使うことです。

```js
var a = ["dog", "cat", "hen"];
a.length; // 3
```

`array.length` は必ずしも配列中の要素の数ではないことに注意してください。以下の例を考えてみましょう。

```js
var a = ["dog", "cat", "hen"];
a[100] = "fox";
a.length; // 101
```

思い出してください ― 配列の長さは一番大きな添字より 1 大きい値です。

もし存在しない配列の添字を要求すると、`undefined` が得られます。

```js
typeof a[90]; // undefined
```

上記の `[]` と `length` を考慮に入れれば、以下の `for` ループを使って配列を反復処理することができます。

```js
for (var i = 0; i < a.length; i++) {
  // a[i] について何かする
}
```

ES2015 では配列のような反復可能オブジェクト向けに、より正確な [`for`...`of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループが導入されました。

```js
for (const currentValue of a) {
  // currentValue (現在の値) で何かをする
}
```

[`for`...`in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループを使用して配列を反復処理することもできます。ただし、もし誰かが `Array.prototype` に新しいプロパティを追加していたら、このループでそれらに対しても反復処理されてしまうので注意してください。よって、この方法は配列に対しては推奨しません。

配列を繰り返すもうひとつの方法が、 ECMAScript 5 で追加された [`forEach()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) です。

```js
["dog", "cat", "hen"].forEach(function (currentValue, index, array) {
  // currentValue (現在の値) または array[index] について何かする
});
```

配列に要素を追加したいなら、このようにするのがもっともシンプルです。

```js
a.push(item);
```

配列には多くのメソッドがついてきます。[配列のメソッドに関するドキュメント](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) もご覧ください。

| メソッド名                                           | 説明                                                                                 |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `a.toString()`                                       | 各要素に `toString()` を適用したものを、カンマ区切りで並べた文字列を返します。       |
| `a.toLocaleString()`                                 | 各要素に `toLocaleString()` を適用したものを、カンマ区切りで並べた文字列を返します。 |
| `a.concat(item1[, item2[, ...[, itemN]]])`           | 配列に要素を追加した、新しい配列を返します。                                         |
| `a.join(sep)`                                        | 配列を文字列に変換します。値は引数 `sep` で区切ります。                              |
| `a.pop()`                                            | 最後の要素を取り除いて、その要素を返します。                                         |
| `a.push(item1, ..., itemN)`                          | 配列の末尾に要素を追加します。                                                       |
| `a.shift()`                                          | 最初の要素を取り除いて、その要素を返します。                                         |
| `a.unshift(item1[, item2[, ...[, itemN]]])`          | 要素を配列の先頭に挿入します。                                                       |
| `a.slice(start[, end])`                              | 部分配列を返します。                                                                 |
| `a.sort([cmpfn])`                                    | オプションとして比較関数をとります。                                                 |
| `a.splice(start, delcount[, item1[, ...[, itemN]]])` | ある部分を削除したり他の追加要素に置き換えることで、配列を修正することができます。   |
| `a.reverse()`                                        | 配列を反転します。                                                                   |

## 関数

オブジェクトとともに、関数は JavaScript を理解するうえで核となる構成要素です。もっとも基本的な関数は極めてシンプルです。

```js
function add(x, y) {
  var total = x + y;
  return total;
}
```

これは基本的な関数を例示しています。JavaScript の関数は 0 以上の名前のついた引数を取ることができます。関数の本体は好きなだけたくさんの文を含ませることができ、またその関数内で局所的な変数を宣言することができます。`return` 文は好きなときに関数を終了し値を返すために使うことができます。もし return 文が使われなかったら (あるいは値を持たない空の return が使われたら)、JavaScript は `undefined` を返します。

名前のついた引数は、何よりもガイドラインのようなものです。期待された引数を渡さずに関数を呼び出すことができます。その場合、引数には `undefined` が設定されます。

```js
add(); // NaN
// undefined では加算を実行できない
```

また、関数が期待するより多くの引数を渡すこともできます。

```js
add(2, 3, 4); // 5
// 第 1、第 2 引数を加算。4 は無視される
```

これは少し馬鹿げているように見えるかもしれませんが、関数はその本体の中で [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) と呼ばれる追加の変数を利用することができます。これはその関数へ渡されたすべての値を保持する配列のようなオブジェクトです。 add 関数を好きなだけたくさんの値をとれるよう書き直してみましょう。

```js
function add() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum;
}

add(2, 3, 4, 5); // 14
```

しかしこれは `2 + 3 + 4 + 5` と書くより使い勝手がいいものではまったくありません。平均を取る関数を作ってみましょう。

```js
function avg() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}

avg(2, 3, 4, 5); // 3.5
```

これはとても便利ですが、少し冗長な印象を受けます。このコードをもう少し減らすために、引数配列の代わりに[残余引数構文](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)を使ってみましょう。この方法では、コードを最小限に保ちながら、関数に任意の数の引数を渡すことができます。**残余引数演算子**は、関数の引数リストで **...変数** という書式で使用され、その変数の中に、関数が呼び出されたときに取得されなかった引数のリストをすべて含めることができます。また、 **for** ループを **for...of** ループに置き換えて、変数内の値を返すようにします。

```js
function avg(...args) {
  var sum = 0;
  for (let value of args) {
    sum += value;
  }
  return sum / args.length;
}

avg(2, 3, 4, 5); // 3.5
```

上記のコードで変数 **args** は、関数に渡されたすべての値が格納されています。

注意すべき点は、関数宣言の中に残余引数演算子が置かれている場合、宣言の*後*のすべての引数が格納されますが、宣言の前の引数は格納されないということです。すなわち、 _function avg(**firstValue,** ...args)_ では、関数に渡された最初の値が変数 **firstValue** に格納され、残りの引数が **args** に格納されます。これも便利な言語機能のひとつですが、新たな問題が発生しました。 `avg()` 関数はカンマで区切られた引数のリストを受け取りますが、配列の平均値を求めたい場合はどうすればよいのでしょうか。この関数を次のように書き換えればよいのです。

```js
function avgArray(arr) {
  var sum = 0;
  for (var i = 0, j = arr.length; i < j; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

avgArray([2, 3, 4, 5]); // 3.5
```

しかし、せっかく作った関数を再利用できたらいいですよね。幸い JavaScript では、任意の関数オブジェクトの {{jsxref("Function.apply", "apply()")}} メソッドを使って、任意の配列を引数として関数を呼び出すことができます。

```js
avg.apply(null, [2, 3, 4, 5]); // 3.5
```

`apply()` の第 2 引数は引数として使う配列です。第 1 引数は後で論じます。このようなことは関数もまたオブジェクトであるという事実を強調します。

関数呼び出しで[スプレッド演算子](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)を使用しても同じ結果を実現できます。

例: `avg(...numbers)`

### 無名関数

JavaScript では無名関数 (anonymous function) — すなわち、名前のない関数を作ることができます。

```js
function() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
};
```

しかし、このような無名関数は単独では役に立ちません。 — 名前がなければ、その関数を呼び出す方法がないからです。そのため、実際には、無名関数は他の関数の引数として使われたり、関数を呼び出すために使用することができる変数に直接代入して呼び出し可能にしたりするのが一般的です。

```js
var avg = function () {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
};
```

これによって、無名関数を `avg()` に引数を付けて呼ぶことで呼び出すことが可能になります。 — すなわち、意味的には `function avg()` という名前付き関数の形を使用して関数を宣言するのと同等になります。

しかし、変数に代入したり、他の関数の引数として渡されたりしなくても、無名関数が役に立つ方法があります。 JavaScript には、 1 つの式で関数の宣言と起動を同時に行う仕組みがあります。これは [IIFE (Immediately invoked function expression)](/ja/docs/Glossary/IIFE) と呼ばれ、無名関数で使用する場合の構文は次のようになります。

```js
(function () {
  // …
})();
```

IIFE の詳細については、この入門記事の範囲を越えますが、どのように役立つかについては、[クロージャ](/ja/docs/Web/JavaScript/Closures)の記事の[クロージャでプライベートメソッドを模倣する](/ja/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures)の節に良い例があります。

### 再帰関数

JavaScript では関数を再帰的に呼び出すことができます。これは特にブラウザーの DOM などにみられる木構造を取り扱うときに便利でしょう。

```js
function countChars(elm) {
  if (elm.nodeType == 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  var count = 0;
  for (var i = 0, child; (child = elm.childNodes[i]); i++) {
    count += countChars(child);
  }
  return count;
}
```

この例は無名関数に関するある潜在的な問題を際立たせます。名前を持たない関数を再帰呼び出しさせるにはどうしたらよいのでしょう? JavaScript では、名前付き関数式で実現できます。以下のように、名前付き [IIFE (Immediately Invoked Function Expressions)](/ja/docs/Glossary/IIFE) を使用できます。

```js
var charsInBody = (function counter(elm) {
  if (elm.nodeType == 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  var count = 0;
  for (var i = 0, child; (child = elm.childNodes[i]); i++) {
    count += counter(child);
  }
  return count;
})(document.body);
```

上記のように関数式に与えられた名前は、関数自身のスコープ内でのみ有効です。これはエンジンによる高度な最適化を実現して、結果的に可読性が高いコードになります。この名前はデバッガーやスタックトレースにも表示されますので、デバッグにかかる時間を節約できます。

JavaScript の関数自体が (他のものすべてと同様に) オブジェクトですので、オブジェクトの節で見てきたとおり、プロパティの追加や変更が可能です。

## カスタムオブジェクト

> **メモ:** JavaScript でのオブジェクト指向プログラミングの詳細な論考については、[オブジェクト指向 JavaScript 入門](/ja/docs/Learn/JavaScript/Objects) をご覧ください。

古典的なオブジェクト指向プログラミングにおいて、オブジェクトとはデータとそのデータを操作するメソッドの集まりです。JavaScript は、C++ や Java に見られる class 文を持たない、プロトタイプベースの言語です (これは、 class 文を持つ言語に慣れたプログラマーを混乱させることがあります)。代わりに、 JavaScript は関数をクラスとして用います。ファーストネームとラストネームのフィールドを持つ person オブジェクトを考えてみましょう。その名前を表示させる方法には、 "first last" と "last, first" の 2 種類が考えられます。ここまでで論じた関数とオブジェクトを使ってみると、以下のようにデータを表示できるでしょう。

```js
function makePerson(first, last) {
  return {
    first: first,
    last: last,
  };
}
function personFullName(person) {
  return person.first + " " + person.last;
}
function personFullNameReversed(person) {
  return person.last + ", " + person.first;
}

var s = makePerson("Simon", "Willison");
personFullName(s); // "Simon Willison"
personFullNameReversed(s); // "Willison, Simon"
```

これはこれでうまく行きますが、かなり見苦しいですね。グローバルな名前空間にいくつもの関数を作ることになってしまいます。本当にしたいことは関数をオブジェクトにくっつけることです。関数はオブジェクトなので、簡単にできます。

```js
function makePerson(first, last) {
  return {
    first: first,
    last: last,
    fullName: function () {
      return this.first + " " + this.last;
    },
    fullNameReversed: function () {
      return this.last + ", " + this.first;
    },
  };
}

var s = makePerson("Simon", "Willison");
s.fullName(); // "Simon Willison"
s.fullNameReversed(); // "Willison, Simon"
```

[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) キーワードに注意してください。関数内で使われると、`this` は現在のオブジェクトを参照します。実際に意味するところは関数の呼び出し方によります。オブジェクト上で[ドット記法やブラケット記法](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#accessing_properties)を使って呼び出すと、そのオブジェクトが `this` になります。ドット記法を使わずに呼び出すと、 `this` はグローバルオブジェクトを参照します。

`this` は次のように、失敗の原因になることがよくありますので注意してください。

```js
var s = makePerson("Simon", "Willison");
var fullName = s.fullName;
fullName(); // undefined undefined
```

`s.fullName()` とせずに `fullName()` を単独で呼び出すと、`this` はグローバルオブジェクトに結び付けられます。`first` や `last` というグローバル変数はありませんので、それぞれに対して `undefined` が得られます。

この `this` キーワードを活用することで、`makePerson` 関数を改良することができます。

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = function () {
    return this.first + " " + this.last;
  };
  this.fullNameReversed = function () {
    return this.last + ", " + this.first;
  };
}
var s = new Person("Simon", "Willison");
```

もう 1 つのキーワード [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) が出てきました。 `new` は `this` と強い関連があります。これは新しい空のオブジェクトを作り、 `this` にその新しいオブジェクトを設定して、後に続く関数を呼びます。`this` に指定された関数は値を返しているのではなく、単に `this` オブジェクトを変更していることに注意してください。 `this` オブジェクトを呼び出し元に返しているのは `new` です。`new` によって呼ばれるよう設計された関数は、コンストラクター関数と呼ばれます。一般的には、これらの関数の先頭を大文字にして、 `new` で呼び出すように注意します。

改良した関数でも、`fullName()` を単独で呼び出すときの落とし穴がまだあります。

person オブジェクトはだいぶ良くなりましたが、まだ改善の余地があります。person オブジェクトを作るたびに、その中に 2 つの新しい関数オブジェクトを作っています。関数のコードは共有されたほうがいいですよね。

```js
function personFullName() {
  return this.first + " " + this.last;
}
function personFullNameReversed() {
  return this.last + ", " + this.first;
}
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = personFullName;
  this.fullNameReversed = personFullNameReversed;
}
```

このほうが良いですね。メソッド関数を一度だけ作って、コンストラクターの中でそれへの参照を代入しています。もっとよくならないでしょうか。答えは yes です。

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.fullName = function () {
  return this.first + " " + this.last;
};
Person.prototype.fullNameReversed = function () {
  return this.last + ", " + this.first;
};
```

`Person.prototype` は `Person` のすべてのインスタンスで共有されるオブジェクトです。これは (「プロトタイプチェーン」という特別な名前を持った) ルックアップチェーンの一部を構成します。`Person` の何もセットされていないプロパティにアクセスしようとするときはいつでも、 JavaScript は `Person.prototype` が代わりのプロパティを持っているか確認します。結果として、`Person.prototype` に割り当てられたプロパティはすべて `this` オブジェクトを通じてコンストラクターのすべてのインスタンスで利用できるようになります。

これはとても強力です。 JavaScript では、プログラム上でいつでもどれかのプロトタイプを変更することができます。ということは、実行時に既存のオブジェクトに対して追加のメソッドを加えることができるのです。

```js
var s = new Person("Simon", "Willison");
s.firstNameCaps(); // TypeError on line 1: s.firstNameCaps is not a function

Person.prototype.firstNameCaps = function () {
  return this.first.toUpperCase();
};
s.firstNameCaps(); // "SIMON"
```

興味深いことに、JavaScript の組み込みオブジェクトのプロトタイプにも差し込むことができます。`String` オブジェクトに文字列を逆さにして返すメソッドを加えてみましょう。

```js
var s = "Simon";
s.reversed(); // TypeError on line 1: s.reversed is not a function

String.prototype.reversed = function () {
  var r = "";
  for (var i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};

s.reversed(); // nomiS
```

私たちの新しいメソッドは文字列リテラル上でさえも動きます!

```js
"This can now be reversed".reversed(); // desrever eb won nac sihT
```

前述の通り、プロトタイプはチェーンの一部を構成します。チェーンの根は `Object.prototype` であり、 `toString()` メソッドを含んでいます。これはオブジェクトを文字列で表そうとするときに呼ばれるメソッドです。これは `Person` オブジェクトをデバッグするときに役立ちます。

```js
var s = new Person("Simon", "Willison");
s.toString(); // [object Object]

Person.prototype.toString = function () {
  return "<Person: " + this.fullName() + ">";
};

s.toString(); // "<Person: Simon Willison>"
```

`avg.apply()` の第 1 引数が null であったことを覚えていますか? もう一度見てみましょう。`apply()` の第 1 引数は '`this`' として扱われるオブジェクトです。例えば、これは `new` のありふれた実装です。

```js
function trivialNew(constructor, ...args) {
  var o = {}; // オブジェクトを作成
  constructor.apply(o, args);
  return o;
}
```

プロトタイプチェーンを設定しないので (これを説明するのは困難です)、`trivialNew()` は `new` の完全な複製ではありません。よく使うことはないでしょうが、知っていると役に立ちます。このスニペットで、`...args` (省略符号を含む) は「[残余引数 (rest arguments)](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)」と呼ばれます。名前が示唆するとおり、これは残りの引数が含まれます。

以下の 2 つの呼び出しはほぼ等価です。

```js
var bill = trivialNew(Person, "William", "Orange");
```

```js
var bill = new Person("William", "Orange");
```

`apply()` には [`call`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call) という姉妹関数があります。 `this` を設定できる点は同じですが、引数に配列ではなく展開された値のリストをとります。

```js
function lastNameCaps() {
  return this.last.toUpperCase();
}
var s = new Person("Simon", "Willison");
lastNameCaps.call(s);
// 上記の文は以下と等価:
s.lastNameCaps = lastNameCaps;
s.lastNameCaps(); // WILLISON
```

### 内部関数

JavaScript での関数宣言は他の関数内でも行うことができます。これは最初のころの `makePerson()` 関数で見ています。 JavaScript で関数を入れ子にすることの重要なことは、内部関数内で親関数スコープの変数にアクセスできることです。

```js
function parentFunc() {
  var a = 1;

  function nestedFunc() {
    var b = 4; // parentFunc はこれを使用できない
    return a + b;
  }
  return nestedFunc(); // 5
}
```

内部関数は保守しやすいコードを書くときに多大な利便性をもたらします。ある関数が他の部分のコードでは役立たない関数を 1 つか 2 つ使っているなら、これらのユーティリティ関数を他から呼び出される関数の入れ子にすることができます。内部関数はグローバルスコープでなくなるので、いいことです。

内部関数はグローバル変数を使うという誘惑に対する対抗措置です。複雑なコードを書くとき、複数の関数間で値を共有するためにグローバル変数を使いたくなります。しかし、これでは保守がしづらくなります。内部関数は親関数の変数を共有できるので、グローバルな名前空間を汚染せずに (いわば「ローカルなグローバル」) 複数の関数をまとめることができます。この仕組みは注意して使用する必要がありますが、便利です。

<h2 id="Closures" &#x22;="">クロージャ</h2>

ここでは JavaScript が持つもっとも強力な、しかしもっともわかりにくいとも思われる概念のひとつを紹介します。これは何をしているのでしょうか。

```js
function makeAdder(a) {
  return function (b) {
    return a + b;
  };
}
var add5 = makeAdder(5);
var add20 = makeAdder(20);
add5(6); // ?
add20(7); // ?
```

`makeAdder()` 関数がクロージャの正体を明らかにします。この関数はそれぞれ、1 つの引数とともに呼び出されたときに、その値と自身が生成されたときの引数の値とを加算する、新たな「加算」関数を生成しています。

ここで起きていることは、前出の内部関数で起きていることとほとんど同じです。つまり、ある関数の内部で定義された関数は、外側の関数が持つ変数にアクセスすることができます。唯一の違いは外側の関数が値を返していることであり、それゆえ一般的な考えではローカル変数は存在しなくなると考えられます。しかし、ここではローカル変数が残り続けます。そうでなければ、加算関数は動作しないでしょう。さらに、 `makeAdder()` のローカル変数には異なる 2 つの「複製」が存在します。一方の `a` は 5、もう一方の `a` は 20 です。よって、これらの関数を呼び出した結果は以下のようになります。

```js
add5(6); // 11 を返す
add20(7); // 27 を返す
```

これは実際に起きていることです。 JavaScript で関数を実行するときは必ず、その関数内で作成されたローカル変数を保持する 'scope' オブジェクトが作成されます。それは関数の引数として渡された変数とともに初期化されます。これはすべてのグローバル変数やグローバル関数が存在している global オブジェクトに似ていますが、2 つの重要な違いがあります。ひとつは、関数を実行し始めるたびに新たな scope オブジェクトが生成されること、もうひとつは、global オブジェクト (`this` としてアクセスでき、またブラウザーでは `window` として存在する) とは異なり、これらの scope オブジェクトに JavaScript のコードから直接アクセスできないことです。例えば、現存する scope オブジェクトのプロパティをたどる仕組みはありません。

よって `makeAdder()` が呼び出されたときは、1 個のプロパティを持つ scope オブジェクトが生成されます。そのプロパティとは、`makeAdder()` 関数に渡される引数の `a` です。そして `makeAdder()` は、新たに生成された関数を返します。通常 JavaScript のガベージコレクターは、この時点で `makeAdder()` のために生成された scope オブジェクトを破棄しますが、返された関数は scope オブジェクトへの参照を維持しています。その結果、scope オブジェクトは `makeAdder()` が返した関数オブジェクトへの参照がなくなるまでの間、ガベージコレクションの対象になりません。

JavaScript のオブジェクトシステムが利用するプロトタイプチェーンと同様に、scope オブジェクトはスコープチェーンと呼ばれるチェーンを構成します。

**クロージャ**は、関数と関数が生成した scope オブジェクトを組み合わせたものです。クロージャは状態を保存します。従って、オブジェクトの代わりとしてよく使用されます。[クロージャのすばらしい解説](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work)を読むことができます。
