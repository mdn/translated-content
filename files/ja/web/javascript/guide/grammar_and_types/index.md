---
title: 文法とデータ型
slug: Web/JavaScript/Guide/Grammar_and_types
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

この節では JavaScript の基本文法、変数宣言、データ型、リテラルについて説明します。

## 基本

JavaScript は Java, C, C++ から構文の多くを取り入れていますが、Awk, Perl, Python からも影響を受けています。

また、JavaScript は**大文字と小文字を区別**し、また **Unicode** 文字セットを使用しています。例えば、Früh という単語 (ドイツ語で "early" という意味) を変数名として使用することができます。

```js
let Früh = "foobar"
```

ただし、JavaScript は大文字と小文字を区別するので、`früh` という変数は `Früh` と同じではありません。

JavaScript では、命令は{{Glossary("Statement", "文")}} (statement) と呼ばれ、セミコロン (;) によって区切られています。

文が単独の行で書かれている場合、文の後にセミコロンは必要ではありません。しかし、行の中に複数の文が必要な場合は、セミコロンで区切る*必要*があります。

> **メモ:** ECMAScript も文末に自動的にセミコロンを挿入する規則があります ([ASI](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion))。(詳しくは、JavaScript の [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)についての詳細なリファレンスを参照してください。)

必須ではないとしても、文の後に常にセミコロンを記述することをお勧めします。これによって、コード中にバグが発生する機会を減らすことができます。

JavaScript のソーステキストは左から右にスキャンされ、_トークン_、_制御文字_、_改行文字_、_コメント_、{{glossary("whitespace", "ホワイトスペース")}}等の入力要素の並びに変換されます。(空白、タブ、改行はホワイトスペースとみなされます。)

## コメント

**コメント**の構文は C++ やその他の多くの言語と一緒です。

```js
// 一行のコメント

/* もっと長い、
   複数行からなるコメント
 */

/* ただし、/* 入れ子のコメントは */ できず、SyntaxError となります */
```

コメントはホワイトスペースのように扱われ、スクリプトの実行から除外されます。

> **メモ:** 一部の JavaScript ファイルの先頭で、`#!/usr/bin/env node` のような第三の種類のコメントを見かけることもあるかもしれません。
>
> これは**ハッシュバンコメント**構文と呼ばれ、スクリプトの実行に使用したい特定の JavaScript エンジンへのパスを指定するのに使用される特殊なコメントです。詳しくは[ハッシュバンコメント](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Hashbang_comments)を参照してください。

## 宣言

JavaScript には変数を宣言する方法が 3 種類あります。

- {{jsxref("Statements/var", "var")}}
  - : 変数を宣言し、ある値に初期化することもできる。
- {{jsxref("Statements/let", "let")}}
  - : ブロックスコープのローカル変数を宣言し、ある値に初期化することもできる。
- {{jsxref("Statements/const", "const")}}
  - : ブロックスコープで読み取り専用の名前付き定数を宣言する。

### 変数

変数はアプリケーションで値を表す記号的な名前として使用します。変数の名前は{{Glossary("Identifier", "識別子")}}とも呼ばれ、一定のルールに従わなくてはなりません。

JavaScript の識別子は必ず文字、アンダースコア (`_`)、あるいはドル記号 (`$`) から始まらなくてはなりません。続く文字には数字 (`0`–`9`) も使用できます。

JavaScript は大文字・小文字を区別するため、使用できる文字には "`A`" から "`Z`" (大文字) に加えて "`a`" から "`z`" (小文字) も含まれます。

`å` や `ü` などの ISO 8859-1 や Unicode 文字 (詳しくは[このブログ記事](https://mathiasbynens.be/notes/javascript-identifiers-es6)を参照) も識別子に使用することができます。[Unicode エスケープシーケンス](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals)も識別子に使用することができます。

`Number_hits` 、`temp99` 、`_name` などは、正しい名前の一例です。

### 変数の宣言

変数を宣言する方法は 2 通りあります。

- キーワード {{jsxref("Statements/var", "var")}} を使う (例 `var x = 42`)。この構文は、*実行コンテキスト*によって、**ローカル変数**と**グローバル変数**の両方の宣言に使用できます。
- {{jsxref("Statements/const", "const")}} または {{jsxref("Statements/let", "let")}} キーワードを使う。例えば、`let y = 13`。この構文はブロックスコープのローカル変数を宣言することができます。(以下にある[変数のスコープ](#Variable_scope)をご覧ください。)

[分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)構文を使用して、[オブジェクトリテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals)から値を展開する変数を宣言することができます。例えば、`let { bar } = foo` とします。これは `bar` という名前の変数を作成し、オブジェクト `foo` の同名キーから対応する値を代入します。

また、`x = 42` のように、単純に値を変数に代入することもできます。この形は、**[未宣言のグローバル](/ja/docs/Web/JavaScript/Reference/Statements/var#Description)**変数を生成します。strict モードの JavaScript では警告が発生します。未宣言のグローバル変数は、よく予期しない動作を引き起こします。したがって、宣言されていないグローバル変数を使用することはお勧めしません。

### 変数の評価

`var` または `let` 文を使用して初期値なしで宣言された変数は、{{jsxref("undefined")}} の値をとります。

未宣言の変数にアクセスしようとすると、{{jsxref("ReferenceError")}} 例外が発生します。

```js
var a;
console.log('変数 a の値は ' + a); // 変数 a の値は undefined

console.log('変数 b の値は ' + b); // 変数 b の値は undefined
var b;
// これは後述の「変数の巻き上げ」を読むまでは謎かもしれません

console.log('変数 c の値は ' + c); // キャッチされない ReferenceError: c が定義されていない

let x;
console.log('変数 x の値は ' + x); // 変数 x の値は undefined

console.log('変数 y の値は ' + y); // キャッチされない ReferenceError: y が定義されていない
let y;
```

`undefined` を使うと変数に値が入っているかは確認できます。以下のコードでは変数 `input` に値が代入されておらず、[`if`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) 文は `true` と評価されます。

```js
var input;
if (input === undefined) {
  doThis();
} else {
  doThat();
}
```

`undefined` は真偽値のコンテキストで使用されると `false` としてふるまいます。例えば以下のコードでは、`myArray` の要素が `undefined` であるために関数 `myFunction` が実行されます。

```js
var myArray = [];
if (!myArray[0]) myFunction();
```

`undefined` は数値のコンテキストで使用されると `NaN` に変換されます。

```js
var a;
a + 2;  // NaN と評価される
```

{{jsxref("null")}} を評価する際、数値のコンテキストでは null 値は `0` としてふるまいます。また真偽値のコンテキストでは `false` としてふるまいます。例えば、

```js
var n = null;
console.log(n * 32); // log 0 をコンソールに出力
```

### 変数のスコープ

変数を関数の外側で宣言すると、その変数はその文書のどのコードからも使用できるようになるため、_グローバル_ (大域) 変数と呼ばれます。変数を関数の内部で宣言すると、その変数はその関数の中でしか使用できないため、_ローカル_ (局所) 変数と呼ばれます。

ECMAScript 2015 より前の JavaScript には[ブロック文](/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Block_statement)のスコープがありません。正確に言えば、ブロック内で宣言した変数はブロックを内包している*関数 (あるいはグローバルスコープ)* に対して局所化されます。

例えば、以下のコードでは `5` が出力されます。これは、`x` のスコープがグローバルコンテキスト (または以下のコードが関数の中であれば関数) だからです。`x` のスコープは中間の `if` 文のブロックに限定されません。

```js
if (true) {
  var x = 5;
}
console.log(x);  // x は 5
```

このふるまいは、`let` (ECMAScript 2015 で導入) を使うことで変わります。

```js
if (true) {
  let y = 5;
}
console.log(y);  // ReferenceError: y が定義されていない
```

### 変数の巻き上げ

もうひとつ、JavaScript の変数にまつわる独特な点として、例外を発生させることなく後に宣言した変数を参照できる点が挙げられます。

この考え方は**巻き上げ**として知られています。JavaScript の変数は、ある意味「巻き上げられ」、関数や文の先頭まで持ち上げられます。しかし、巻き上げられた変数は `undefined` 値を返します。そのため、変数を使用したり参照した後に宣言や初期化を行うと、`undefined` が返されたままになります。

```js
/**
 * 例 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * 例 2
 */
// undefined 値が返される
var myvar = 'my value';

(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();
```

上記の例は以下と同様に解釈されます。

```js
/**
 * 例 1
 */
var x;
console.log(x === undefined); // true
x = 3;

/**
 * 例 2
 */
var myvar = 'my value';

(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = 'local value';
})();
```

巻き上げがあるため、関数内にあるすべての `var` 文は関数内で可能な限り先頭に近い位置に置くべきです。これはコードの明確さを高める最善の方法です。

ECMAScript 2015 では、`let` および `const` は**巻き上げが行われますが、初期化されません**。ブロック内の変数宣言前に変数を参照すると、変数はブロックの先頭から宣言が処理されるまでの間、「一時的なデッドゾーン」にあるため、{{jsxref("ReferenceError")}} になります。

```js
console.log(x); // ReferenceError
let x = 3;
```

### 関数の巻き上げ

関数の場合、関数*宣言*のみが巻き上げられますが、関数*式*は巻き上げられ*ません*。

```js
/* 関数宣言 */

foo(); // "bar"

function foo() {
  console.log('bar');
}


/* 関数式 */

baz(); // TypeError: baz は関数ではない

var baz = function() {
  console.log('bar2');
};
```

### グローバル変数

グローバル変数は、実際には*グローバルオブジェクト*のプロパティです。

ウェブページでのグローバルオブジェクトは {{domxref("window")}} になります、そのため `window.変数名` という構文を用いてグローバル変数の設定やアクセスができます。

したがって、あるウィンドウやフレームで宣言したグローバル変数は、そのウィンドウやフレームの名前を指定することで別の `window` や `frame` からアクセスできます。例えば `phoneNumber` 変数を文書内で宣言すると、`iframe` から `parent.phoneNumber` としてその変数を参照できます。

### 定数

{{jsxref("Statements/const", "const")}} キーワードを用いて、読み取り専用の名前付き定数を作成できます。

定数の識別子の構文は、変数の識別子の構文と同じです。識別子は文字、アンダースコア、ドル記号 (`$`) から始めなくてはならず、アルファベット、数値、アンダースコアを含めることができます。

```js
const PI = 3.14;
```

定数は代入によって値を変えたり、スクリプト実行中に再宣言したりすることはできません。定数はある値に初期化しなければなりません。

定数のスコープルールは、`let` によるブロックスコープ変数と同じです。`const` キーワードを省略すると、その識別子は変数を表すとみなされます。

以下の例のように、同一スコープ内で関数や変数と同じ名前の定数を宣言することはできません。

```js
// THIS WILL CAUSE AN ERROR
function f() {};
const f = 5;

// この場合もエラーが発生
function f() {
  const g = 5;
  var g;

  // ここには文が来る
}
```

しかし、定数が代入されたオブジェクトのプロパティは保護されず、以下の文は問題なく実行できます。

```js
const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';
```

また、配列の中身は保護されませんので、以下の文は問題なく実行できます。

```js
const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];
```

## データ構造とデータ型

### データ型

最新の ECMAScript 標準では、以下の 8 つのデータ型が定義されています。

- {{Glossary("Primitive", "プリミティブ型")}}のデータ型が 7 つあります。

  - {{Glossary("Boolean")}} (真偽値)。`true` または `false`。
  - {{Glossary("null")}}。null 値を意味する特殊なキーワードです。(JavaScript は大文字・小文字を区別するため、`null` は `Null` や `NULL` などと同じではありません。)
  - {{Glossary("undefined")}} (未定義)。値が未定義の最上位プロパティです。
  - {{Glossary("Number")}} (数値)。整数または浮動小数点数。例えば `42` や `3.14159` など。
  - {{Glossary("BigInt")}} (長整数)。精度が自由な整数値。例えば `9007199254740992n` など。
  - {{Glossary("String")}} (文字列)。テキストの値を表す連続した文字。"Howdy" など。
  - {{Glossary("Symbol")}} (シンボル) (ECMAScript 2015 の新機能)。インスタンスが固有で不変となるデータ型。

- そして {{Glossary("Object")}} (オブジェクト)。

このようにデータ型の種類は比較的少ないですが、アプリケーションで便利な関数を実行することができます。整数と実数の間に明確な違いはありません。{{jsxref("Object", "オブジェクト","","true")}}と{{jsxref("Function", "関数","","true")}}も言語において基本的な要素です。オブジェクトは値を収める名前付きコンテナとして、関数はスクリプトを実行可能にする手続きとして考えることができます。

### データ型の変換

JavaScript は*動的型付け*言語です。そのため変数宣言時にデータ型を指定する必要がなく、またスクリプト実行時に必要に応じてデータ型が自動的に変換されます。

例えば以下のように変数を定義したとします。

```js
var answer = 42;
```

その後、同じ変数に文字列を代入できます。

```js
answer = 'Thanks for all the fish...';
```

JavaScript は動的型付け方式であるため、この代入を行ってもにエラーメッセージは表示されません。

### 数値と '+' 演算子

数値と文字列を `+` 演算子で結合する式では、JavaScript は数値を文字列に変換します。以下の式を見てみましょう。

```js
x = '答えは ' + 42 // "答えは 42"
y = 42 + ' が答え' // "42 が答え"
```

それ以外の演算子がある式では、JavaScript は数値を文字列に変換*しません*。例えば以下のようになります。

```js
'37' - 7 // 30
'37' + 7 // "377"
```

### 文字列から数値への変換

数値を表す値が文字列として記憶されている場合、それを変換するメソッドがあります。

- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("parseFloat", "parseFloat()")}}

`parseInt` は整数のみを返すので、小数は切り捨てられます。

> **メモ:** さらに、`parseInt` を使う最も良い方法は、常に基数を引数に含めるようにすることです。基数の引数は使用されている*基数*法を指定するのに使われます。

```js
parseInt('101', 2) // 5
```

文字列から数値を取り出す代替手段は、`+` (単項プラス) 演算子を使う方法です。

```js
'1.1' + '1.1' // '1.11.1'
(+'1.1') + (+'1.1') // 2.2
// 注: 括弧は明確さのために追加したもので、必須ではありません
```

## リテラル

JavaScript では値の表現に*リテラル*を使います。これらは固定値であり変数ではなく、スクリプト中に直接*記述*します。本章では、以下のリテラルについて説明します :

- [配列リテラル](#Array_literals)
- [真偽値リテラル](#Boolean_literals)
- [浮動小数点リテラル](#Floating-point_literals)
- [数値リテラル](#Numeric_literals)
- [オブジェクトリテラル](#Object_literals)
- [正規表現リテラル](#RegExp_literals)
- [文字列リテラル](#String_literals)

### 配列リテラル

配列リテラルとは、0 個以上の式のリストであり、各々の式は配列の要素を表し、角括弧 (`[]`) で括られているもののことです。配列リテラルを用いて配列を作成すると、指定された値が要素として初期化され、また配列の長さ (`length`) は指定された引数の個数に設定されます。

以下の例では 3 つの要素を持ち、配列 `coffees` を長さ (`length`) 3 で作成します。

```js
let coffees = ['French Roast', 'Colombian', 'Kona'];
```

> **メモ:** 配列リテラルは*オブジェクト初期化子*の一種です。[オブジェクト初期化子の使用](/ja/docs/Web/JavaScript/Guide/Working_with_Objects#Using_object_initializers)を参照してください。

トップレベルのスクリプト内でリテラルを用いて配列を作成した場合、JavaScript は配列リテラルを含む式を評価するたびに配列を解釈します。さらに関数内で使用されたリテラルは、関数が呼び出されるたびに生成されます。

> **メモ:** 配列リテラルは `Array` オブジェクトでもあります。`Array` オブジェクトの詳細は {{jsxref("Array")}} と[インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)をご覧ください。

#### 配列リテラルでの余分なカンマ

配列リテラルですべての要素を指定する必要はありません。立て続けに 2 つのカンマを置くと、配列は未指定の要素を `undefined` の値で埋めます。次の例では `fish` という配列を作成します。

```js
let fish = ['Lion', , 'Angel'];
```

この配列は、値を持つ要素を 2 つと空の要素を 1 つ持っています。

- `fish[0]` は "Lion"
- `fish[1]` は `undefined`
- `fish[2]` は "Angel"

要素のリストの最後にカンマを付けた場合、そのカンマは無視されます。

次の例では、配列の長さ (`length`) は 3 です。`myList[3]` は存在しません。リスト内の他のカンマはすべて、新しい要素を示します。

> **メモ:** 末尾にカンマを置くと古いブラウザーでエラーになる場合があるので、取り除くのが最善です。

```js
let myList = ['home', , 'school', ];
```

次の例では、配列の長さ (`length`) は 4 になります。`myList[0]` と `myList[2]` が抜けています。

```js
let myList = [ ,'home', , 'school'];
```

次の例では、配列の長さ (`length`) は 4 です。`myList[1]` と `myList[3]` が抜けています。最後のカンマのみが無視されます。

```js
let myList = ['home', , 'school', , ];
```

余分なカンマの動作を理解することは、言語としての JavaScript を理解するために重要です。

しかし、コードを記述する際に欠落している要素を明示的に `undefined` するようにしてください。そうすれば、コードの明確さや保守性が高まります。

### 真偽値リテラル

真偽値型は 2 つのリテラル値、`true` と `false` があります。

> **メモ:** プリミティブ型の真偽値である `true` や `false` と、{{jsxref("Boolean")}} オブジェクトの `true` や `false` という値とを混同してはいけません。
>
> Boolean オブジェクトは、プリミティブな真偽値型のラッパーです。詳細は {{jsxref("Boolean")}} を参照してください。

### 数値リテラル

{{jsxref("Number")}} および {{jsxref("BigInt")}} 型は、10 進数、16 進数、8 進数、2 進数で書くことができます。

- *10 進数*の数値リテラルは、先頭が `0` (ゼロ) ではない一連の数字で構成されます。
- 先頭に `0` (ゼロ) である数値リテラル、または先頭の `0o` (または `0O`) は *8 進数*であることを示します。8 進数の数値には、`0` から `7` の数字のみが使用できます。
- 先頭の `0x` (または `0X`) は、*16 進数*であることを意味します。16 進数の数値は数字 (`0` から `9`) と `a` から `f` および `A` から `F` のアルファベットで構成されます。(大文字・小文字の違いは値には影響しません。たとえば `0xa` = `0xA` = `10` で `0xf` = `0xF` = `15` です。)
- 先頭の `0b` (または `0B`) は、*2 進数*であることを表します。2 進数の数値は `0` と `1` の数字のみで構成されます。

数値リテラルの例は以下のようになります。

```
0, 117, -345, 123456789123456789n             (10進数)
015, 0001, -0o77, 0o777777777777n             (8進数)
0x1123, 0x00111, -0xF1A7, 0x123456789ABCDEFn  (16進数)
0b11, 0b0011, -0b11, 0b11101001010101010101n  (2進数)
```

詳しい情報は、[字句構文リファレンスの数値リテラル](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Numeric_literals)をご覧ください。

### 浮動小数点リテラル

浮動小数点リテラルは、以下の部分で構成されます。

- 符号 (先行する "`+`" または "`-`") つきの 10 進数の整数部
- 小数点 ("`.`")
- 小数部 (他の 10 進数)
- 指数部

指数部は、"`e`" または "`E`" の後に、符号 ( "`+`" or "`-`") を先行させることできる整数が続く形になります。浮動小数点数リテラルは少なくとも 1 つの数字と、小数点もしくは "`e`" (または "`E`") が必要です。

より簡潔に書けば、次の形式になります。

```
[(+|-)][digits].[digits][(E|e)[(+|-)]digits]
```

例えば以下の通りです。

```
3.1415926
-.123456789
-3.1E+12
.1e-23
```

### オブジェクトリテラル

オブジェクトリテラルとは、プロパティ名とそれに関連付けられたオブジェクトの値との 0 個以上の組が波括弧 (`{}`) で囲まれたもので作られたリストです。

> **警告:** **オブジェクトリテラルを文の先頭で使わないようにしてください。** `{` がブロックの始まりと解釈されるため、エラーや予期せぬ動作を引き起こすことになります。

以下にオブジェクトリテラルの例を示します。`car` オブジェクトの最初の要素には `myCar` プロパティが定義され、新規文字列 "`Saturn`" が割り当てられています。2 番目の要素、`getCar` プロパティには関数 `(carTypes("Honda"));` によって呼び出された結果が即座に割り当てられます。3 番目の要素、`special` プロパティには既存の変数 (`sales`) が使われています。

```js
var sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota
```

さらに、数値リテラルや文字列リテラルをプロパティ名に使用したり、オブジェクトを別のオブジェクトの入れ子にすることができます。以下の例では、これらの機能を使用しています。

```js
var car = { manyCars: {a: 'Saab', b: 'Jeep'}, 7: 'Mazda' };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

オブジェクトのプロパティには空の文字列を含むあらゆる文字列が使えます。もしプロパティ名が JavaScript で有効な{{Glossary("Identifier", "識別子")}}か数値でなければ、引用符で囲む必要があります。

有効でない識別子によるプロパティ名にはドット演算子 (`.`) を使ってアクセスできませんが、配列のような表記法 ("`[]`") でアクセス、設定ができます。

```js
var unusualPropertyNames = {
  '': '空文字列',
  '!': 'バン！'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string が発生
console.log(unusualPropertyNames['']);  // 空文字列
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token ! が発生
console.log(unusualPropertyNames['!']); // バン！
```

#### 拡張オブジェクトリテラル

ES2015 では、オブジェクトリテラルは構築時のプロトタイプの設定に対応するよう拡張され、`foo: foo` 形式の短縮表記の値割り当て、メソッドの定義、`super` の呼び出し、式によるプロパティ名の計算ができるようになりました。

同時に、オブジェクトリテラルとクラス定義が近くなり、オブジェクトベースの設計でも同じ利便性の一部から利益を得ることができます。

```js
var obj = {
    // __proto__
    __proto__: theProtoObj,
    // 短い ‘handler: handler’ の形式
    handler,
    // メソッド
    toString() {
     // super の呼び出し
     return 'd ' + super.toString();
    },
    // 計算による (動的な) プロパティ名
    [ 'prop_' + (() => 42)() ]: 42
};
```

### 正規表現リテラル

正規表現リテラル ([後で](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)詳しく定義) は、スラッシュで囲まれたパターンです。以下は正規表現リテラルの例です。

```js
var re = /ab+c/;
```

### 文字列リテラル

文字列リテラルとは、0 文字以上の文字を二重引用符 (`"`) または単一引用符 (`'`) で括ったものです。文字列は同じ種類の引用符で括らなければなりません (つまり、どちらも単一引用符にするか、またはどちらも二重引用符にするかです)。

以下が文字列リテラルの例です。

```js
'foo'
"bar"
'1234'
'one line \n another line'
"John's cat"
```

文字列リテラルを持つ値は、{{jsxref("String")}} オブジェクトのあらゆるメソッドを呼び出すことができます。JavaScript は自動的に文字列リテラルを一時的な String オブジェクトに変換し、メソッドを呼び出して、その後一時的に作られた String オブジェクトを破棄します。`String.length` プロパティを文字列リテラルで用いることもできます。

```js
// ホワイトスペースを含む文字列の文字の数を出力する。
console.log("John's cat".length)  // この場合は 10 が出力される。
```

ECMAScript 2015 では、*テンプレートリテラル*も利用することができます。テンプレートリテラルは、二重引用符や単一引用符の代わりに逆引用符 (`` ` ``) ([grave accent](https://en.wikipedia.org/wiki/Grave_accent)) で囲まれたものです。

テンプレート文字列は文字列の構築に糖衣構文を利用することができます。これは Perl や Python などの文字列補完機能に似ています。

また、文字列の構築をカスタマイズして、インジェクション攻撃を防いだり文字列コンテンツのより高水準のデータ構造を構築したりするためにタグを追加することができます。

```js
// 基本的な文字列リテラルの作成
`In JavaScript '\n' is a line-feed.`

// 複数行の文字列
`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`

// 文字列補完
var name = 'Bob', time = 'today';
`Hello ${name}, how are you ${time}?`

// 置換や構築を解釈するために使用される HTTP リクエストの接頭辞を構築
POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);
```

特に `String` オブジェクトを使う必要がない場合は、文字列リテラルを使うようにしてください。詳細は {{jsxref("String")}} をご覧ください。

#### 文字列での特殊文字の使用

文字列では、通常の文字に加えて特殊文字も使用できます。次の例をご覧ください。

```js
'one line \n another line'
```

ここで、JavaScript の文字列で使用できる特殊文字の表を示します。

| 文字        | 意味                                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `\0`        | ヌル文字                                                                                                                                                                                                     |
| `\b`        | バックスペース                                                                                                                                                                                               |
| `\f`        | 改ページ                                                                                                                                                                                                     |
| `\n`        | 改行                                                                                                                                                                                                         |
| `\r`        | 復帰                                                                                                                                                                                                         |
| `\t`        | タブ                                                                                                                                                                                                         |
| `\v`        | 垂直タブ                                                                                                                                                                                                     |
| `\'`        | アポストロフィまたは単一引用符                                                                                                                                                                               |
| `\"`        | 二重引用符                                                                                                                                                                                                   |
| `\\`        | バックスラッシュ (\\)                                                                                                                                                                                        |
| `\XXX`      | `0` から `377` までの 3 桁の 8 進数 _XXX_ で指定された、Latin-1 エンコーディングの文字。 例えば、`\251` は著作権記号を示します。                                                                             |
|             |                                                                                                                                                                                                              |
| `\xXX`      | `00` から `FF` までの 2 桁の 16 進数 _XX_ で指定された、Latin-1 エンコーディングの文字。 例えば、`\xA9` は著作権記号を示します。                                                                             |
|             |                                                                                                                                                                                                              |
| `\uXXXX`    | 4 桁の 16 進数 _XXXX_ で指定された Unicode 文字。 例えば、`\u00A9` は著作権記号を示します。[Unicode エスケープシーケンス](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals)をご覧ください。 |
| `\u{XXXXX}` | Unicode コードポイントエスケープです。 例えば `\u{2F804}` は単純な Unicode エスケープである `\uD87E\uDC04` と同じです。                                                                                      |

#### 文字のエスケープ

上記の表に掲載されていない文字は直前にバックスラッシュをつけても無視されますが、こうした使い方は非推奨であり使用を避けるべきです。

バックスラッシュを直前につけることで、引用符を文字列に含めることができます。これは引用符の*エスケープ*と呼ばれます。例えば以下のようにします。

```js
var quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

この結果は次のようになります。

```
He read "The Cremation of Sam McGee" by R.W. Service.
```

文字列にバックスラッシュそのものを含めるには、バックスラッシュのエスケープが必要です。例えば、文字列に `c:\temp` というファイルパスを代入するには、以下のようにします。

```js
var home = 'c:\\temp';
```

改行の直前にバックスラッシュを置くことで、改行をエスケープすることもできます。バックスラッシュと改行の両方が、文字列の値から取り除かれます。

```js
var str = 'this string \
is broken \
across multiple \
lines.'
console.log(str);   // この文字列は複数行にわたって分解されます。
```

JavaScript には「ヒアドキュメント」構文はありませんが、各行の末尾に改行のエスケープ表記とエスケープした改行を置くことで似たことができます。

```js
var poem =
'Roses are red,\n\
Violets are blue.\n\
Sugar is sweet,\n\
and so is foo.'
```

ECMAScript 2015 では[**テンプレートリテラル**](/ja/docs/Web/JavaScript/Reference/template_strings)と呼ばれる新しい種類のリテラルが導入されました。これによって複数行の文字列を含む多数の新機能が利用できるようになりました。

```js
var poem =
`Roses are red,
Violets are blue.
Sugar is sweet,
and so is foo.`
```

## 関連情報

本章では宣言とデータ型についての基本文法に重点を置いています。JavaScript の言語構成についてより詳しく知りたければ、当ガイドの以下に挙げた章をご覧ください。

- [制御フローとエラー処理](/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [ループと反復処理](/ja/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [関数](/ja/docs/Web/JavaScript/Guide/Functions)
- [式と演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators)

次章では、制御フローの構造とエラー処理について見ていきます。

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
