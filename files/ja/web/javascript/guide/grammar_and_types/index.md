---
title: 文法とデータ型
slug: Web/JavaScript/Guide/Grammar_and_types
l10n:
  sourceCommit: effd5de5e42bfe045c3bf44b2d7b14f4d6146785
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

この節では JavaScript の基本文法、変数宣言、データ型、リテラルについて説明します。

## 基本

JavaScript は Java, C, C++ から構文の多くを取り入れていますが、Awk, Perl, Python からも影響を受けています。

また、JavaScript は**大文字と小文字を区別**し、また **Unicode** 文字セットを使用しています。例えば、Früh という単語 (ドイツ語で "early" という意味) を変数名として使用することができます。

```js
const Früh = "foobar";
```

ただし、JavaScript は大文字と小文字を区別するので、`früh` という変数は `Früh` と同じではありません。

JavaScript では、命令は{{Glossary("Statement", "文")}} (statement) と呼ばれ、セミコロン (;) によって区切られています。

文が単独の行で書かれている場合、文の後にセミコロンは必要ではありません。しかし、行の中に複数の文が必要な場合は、セミコロンで区切る*必要*があります。

> **メモ:** ECMAScript も文末に自動的にセミコロンを挿入するルールがあります ([ASI](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#自動セミコロン挿入))。（詳しくは、JavaScript の [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)についての詳細なリファレンスを参照してください。）

必須ではないとしても、文の後に常にセミコロンを記述することをお勧めします。これによって、コード中にバグが発生する機会を減らすことができます。

JavaScript のソーステキストは左から右にスキャンされ、_トークン_、_制御文字_、_改行文字_、_コメント_、{{glossary("whitespace", "ホワイトスペース")}}等の入力要素の並びに変換されます。（空白、タブ、改行はホワイトスペースとみなされます。）

## コメント

**コメント**の構文は C++ やその他の多くの言語と一緒です。

```js
// 一行のコメント

/* もっと長い、
   複数行からなるコメント
 */
```

ブロックコメントを入れ子にすることはできません。これは、コメントに誤って `*/` シーケンスを記載してしまい、コメントが終了してしまう場合によく起こります。

```js example-bad
/* ただし、/* 入れ子のコメントは */ できず、SyntaxError となります */
```

この場合、`*/`のパターンを分割する必要があります。例えば、バックスラッシュを挿入したりします。

```js
/* スラッシュをエスケープすることで /* コメントを入れ子に *\/ することができます */
```

コメントはホワイトスペースのように扱われ、スクリプトの実行から除外されます。

> **メモ:** 一部の JavaScript ファイルの先頭で、`#!/usr/bin/env node` のような第三の種類のコメントを見かけることもあるかもしれません。
>
> これは**ハッシュバンコメント**構文と呼ばれ、スクリプトの実行に使用したい特定の JavaScript エンジンへのパスを指定するのに使用される特殊なコメントです。詳しくは[ハッシュバンコメント](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#ハッシュバンコメント)を参照してください。

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

JavaScript の識別子は必ず文字、アンダースコア (`_`)、あるいはドル記号 (`$`) から始まらなくてはなりません。続く文字には数字 (`0`–`9`) も使用できます。JavaScript は大文字と小文字を区別するため、使用できる文字には "`A`" から "`Z`" （大文字）に加えて "`a`" から "`z`" （小文字）も含まれます。

`å` や `ü` などの ISO 8859-1 や Unicode 文字（詳しくは[このブログ記事](https://mathiasbynens.be/notes/javascript-identifiers-es6)または[字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)のリファレンスを参照）も識別子に使用することができます。[Unicode エスケープシーケンス](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#文字列リテラル)も識別子に使用することができます。

`Number_hits`、`temp99`、`_name` などは、正しい名前の一例です。

### 変数の宣言

変数を宣言する方法は 2 通りあります。

- キーワード {{jsxref("Statements/var", "var")}} を使う（例 `var x = 42`）。この構文は、*実行コンテキスト*によって、**ローカル変数**と**グローバル変数**の両方の宣言に使用できます。
- {{jsxref("Statements/const", "const")}} または {{jsxref("Statements/let", "let")}} キーワードを使う。例えば、`let y = 13`。この構文はブロックスコープのローカル変数を宣言することができます。（以下にある[変数のスコープ](#変数のスコープ)をご覧ください。）

[分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)構文を使用して、複数の変数を宣言することができます。例えば、`const { bar } = foo` とします。これは `bar` という名前の変数を作成し、オブジェクト `foo` の同名キーから対応する値を代入します。

変数は使用する前に常に宣言するようにしてください。 JavaScript は未宣言の変数に代入することができ、 **[未宣言のグローバル](/ja/docs/Web/JavaScript/Reference/Statements/var#解説)** 変数を生成します。これは[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables)ではエラーとなるものであり、完全に避けるべきです。

### 宣言と初期化

`let x = 42` のような文では、`let x` の部分は _宣言_ と呼ばれ、`= 42` の部分は _初期化子_ と呼ばれます。宣言では、{{jsxref("ReferenceError")}} を発生させることなく、コードの後半で変数にアクセスできるようにし、初期化子では、変数に値を代入しています。`var` と `let` の宣言では、初期化子はオプションです。もし変数が初期化子なしで宣言された場合、その変数には [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) という値が代入されます。

```js
let x;
console.log(x); // "undefined" を出力
```

実質的に、`let x = 42` は `let x; x = 42` と同等です。

`const` 宣言は宣言後のあらゆる代入を禁止しているため、常に初期化子が必要です。暗黙のうちに `undefined` で初期化することは、おそらくプログラマーのミスです。

```js example-bad
const x; // SyntaxError: Missing initializer in const declaration
```

### 変数のスコープ

変数は以下の[スコープ](/ja/docs/Glossary/Scope)のいずれかに所属します。

- グローバルスコープ: スクリプトモードで実行するすべてのコードの既定のスコープです。
- モジュールスコープ: モジュールモードで実行されるコードのスコープです。
- 関数スコープ: {{glossary("function", "関数")}}で作成されるスコープです。

それに加えて、 [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) または [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) で宣言された変数は、もう一つのスコープに所属します。

- ブロックスコープ: 波括弧の組で生成されるスコープ（[ブロック](/ja/docs/Web/JavaScript/Reference/Statements/block)）。

変数を関数の外側で宣言すると、現在の文書のどのコードからも使用できるようになるため、_グローバル_ （大域）変数と呼ばれます。変数を関数の内部で宣言すると、その関数の中でしか使用できないため、_ローカル_ （局所）変数と呼ばれます。

`let` および `const` の宣言は、宣言された[ブロック文](/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement)のスコープになることもあります。

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

ただし、 `var` で生成された変数はブロックスコープにはならず、そのブロックが存在する _関数（またはグローバルスコープ）_ に局所的になります。

例えば、以下のコードでは `5` が出力されます。これは、`x` のスコープがグローバルコンテキスト（またはこのコードが関数の中であれば関数コンテキスト）だからです。`x` のスコープは中間の `if` 文のブロックに限定されません。

```js
if (true) {
  var x = 5;
}
console.log(x); // x は 5
```

### 変数の巻き上げ

`var` で宣言された変数は[巻き上げ](/ja/docs/Glossary/Hoisting)が行われ、その変数がまだ宣言されていない場合でも、そのスコープ内のどこでも参照することができるようになります。変数 `var` の宣言は、その関数やグローバルスコープの先頭に「持ち上げられる」ように見ることができます。しかし、宣言される前に変数にアクセスすると、その値は常に `undefined` となります。なぜなら、その変数の _宣言_ だけが巻き上げられ、 _初期化_ は巻き上げられないからです。

```js
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();
```

上記の例は以下と同様に解釈されます。

```js
var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "local value";
})();
```

巻き上げがあるため、関数内にあるすべての `var` 文は関数内で可能な限り先頭に近い位置に置くべきです。これはコードの明確さを高める最善の方法です。

`let` と `const` が巻き上げられるかどうかは、定義の議論の余地があります。変数宣言の前にブロック内で変数を参照すると常に {{jsxref("ReferenceError")}} が発生します。ブロックの始まりから宣言が処理されるまで、変数は「[一時的なデッドゾーン](/ja/docs/Web/JavaScript/Reference/Statements/let#一時的なデッドゾーン_tdz)」にあるからです。

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

`var` 宣言は宣言だけを巻き上げ、その値は巻き上げませんが、[関数宣言](/ja/docs/Web/JavaScript/Guide/Functions#function_hoisting)は完全に巻き上げられ、そのスコープ内のどこでも安全に関数を呼び出すことができます。より詳しい説明は、用語集の[巻き上げ](/ja/docs/Glossary/Hoisting)の項目を参照してください。

### グローバル変数

グローバル変数は、実際には*グローバルオブジェクト*のプロパティです。

ウェブページでのグローバルオブジェクトは {{domxref("window")}} になります。そのため `window.変数名` という構文を用いてグローバル変数の設定やアクセスができます。すべての環境において、グローバル変数にアクセスするために [`globalThis`](/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis) 変数（これ自体がグローバル変数です）を使用することができます。

したがって、あるウィンドウやフレームで宣言したグローバル変数は、そのウィンドウやフレームの名前を指定することで別の `window` や `frame` からアクセスできます。例えば `phoneNumber` 変数を文書内で宣言すると、`iframe` から `parent.phoneNumber` としてその変数を参照できます。

### 定数

{{jsxref("Statements/const", "const")}} キーワードを用いて、読み取り専用の名前付き定数を作成できます。定数の識別子の構文は、変数の識別子の構文と同じです。識別子は文字、アンダースコア、ドル記号 (`$`) から始めなくてはならず、アルファベット、数値、アンダースコアを含めることができます。

```js
const PI = 3.14;
```

定数は代入によって値を変えたり、スクリプト実行中に再宣言したりすることはできません。定数はある値に初期化しなければなりません。定数のスコープルールは、`let` によるブロックスコープ変数と同じです。

以下の例のように、同一スコープ内で関数や変数と同じ名前の定数を宣言することはできません。

```js example-bad
// THIS WILL CAUSE AN ERROR
function f() {}
const f = 5;

// この場合もエラーが発生
function f() {
  const g = 5;
  var g;

  // ここには文が来る
}
```

しかし、`const` は _再代入_ を防止しますが、_変更_ は防止しません。定数が代入されたオブジェクトのプロパティは保護されず、以下の文は問題なく実行できます。

```js
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
```

また、配列の中身は保護されませんので、以下の文は問題なく実行できます。

```js
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];
```

## データ構造とデータ型

### データ型

最新の ECMAScript 標準では、以下の 8 つのデータ型が定義されています。

- {{Glossary("Primitive", "プリミティブ型")}}のデータ型が 7 つあります。

  1. {{Glossary("Boolean")}} （論理値）。`true` または `false`。
  2. {{Glossary("null")}}。null 値を意味する特殊なキーワードです。（JavaScript は大文字・小文字を区別するため、`null` は `Null` や `NULL` などと同じではありません。）
  3. {{Glossary("undefined")}} （未定義）。値が未定義の最上位プロパティです。
  4. {{Glossary("Number")}} （数値）。整数または浮動小数点数。例えば `42` や `3.14159` など。
  5. {{Glossary("BigInt")}} （長整数）。精度が自由な整数値。例えば `9007199254740992n` など。
  6. {{Glossary("String")}} （文字列）。テキストの値を表す連続した文字。"Howdy" など。
  7. [Symbol](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol) （シンボル）。インスタンスが固有で不変となるデータ型。

- そして {{Glossary("Object")}} （オブジェクト）。

このようにデータ型の種類は比較的少ないですが、アプリケーションで有益な演算を実行することができます。整数と実数の間に明確な違いはありません。[関数](/ja/docs/Web/JavaScript/Guide/Functions)もこの言語の基本的な要素です。関数は厳密にはオブジェクトの一種であり、オブジェクトは値を収める名前付きコンテナーとして、関数はスクリプトを実行可能にする手続きとして考えることができます。

### データ型の変換

JavaScript は _動的型付け_ 言語です。そのため変数宣言時にデータ型を指定する必要がなく、またスクリプト実行時に必要に応じてデータ型が自動的に変換されます。

例えば以下のように変数を定義したとします。

```js
let answer = 42;
```

その後、同じ変数に文字列を代入できます。

```js
answer = "Thanks for all the fish!";
```

JavaScript は動的型付け方式であるため、この代入を行ってもにエラーメッセージは表示されません。

### 数値と '+' 演算子

数値と文字列を `+` 演算子で結合する式では、JavaScript は数値を文字列に変換します。以下の文を見てみましょう。

```js
x = "答えは " + 42; // "答えは 42"
y = 42 + " が答え"; // "42 が答え"
z = "37" + 7; // "377"
```

それ以外の演算子がある式では、JavaScript は数値を文字列に変換*しません*。例えば以下のようになります。

```js
"37" - 7; // 30
"37" * 7; // 259
```

### 文字列から数値への変換

数値を表す値が文字列として記憶されている場合、それを変換するメソッドがあります。

- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("parseFloat", "parseFloat()")}}

`parseInt` は整数のみを返すので、小数は切り捨てられます。

> **メモ:** さらに、`parseInt` を使う最も良い方法は、常に基数を引数に含めるようにすることです。基数の引数は使用されている*基数*法を指定するのに使われます。

```js
parseInt("101", 2); // 5
```

文字列から数値を取り出す代替手段は、`+` (単項プラス) 演算子を使う方法です。

```js
'1.1' + '1.1'; // '1.11.1'
(+'1.1') + (+'1.1'); // 2.2
// 注: 括弧は明確さのために追加したもので、必須ではありません
```

## リテラル

JavaScript では値の表現に _リテラル_ を使います。これらは固定値であり変数ではなく、スクリプト中に直接*記述*します。この節では、以下のリテラルについて説明します。

- [配列リテラル](#配列リテラル)
- [論理値リテラル](#論理値リテラル)
- [数値リテラル](#数値リテラル)
- [オブジェクトリテラル](#オブジェクトリテラル)
- [正規表現リテラル](#正規表現リテラル)
- [文字列リテラル](#文字列リテラル)

### 配列リテラル

配列リテラルとは、0 個以上の式のリストであり、各々の式は配列の要素を表し、角括弧 (`[]`) で括られているもののことです。配列リテラルを用いて配列を作成すると、指定された値が要素として初期化され、また配列の長さ (`length`) は指定された引数の個数に設定されます。

以下の例では 3 つの要素を持ち、配列 `coffees` を長さ (`length`) 3 で作成します。

```js
const coffees = ["French Roast", "Colombian", "Kona"];
```

最上位のスクリプト内でリテラルを用いて配列を作成した場合、JavaScript は配列リテラルを含む式を評価するたびに配列を解釈します。さらに関数内で使用されたリテラルは、関数が呼び出されるたびに生成されます。

> **メモ:** 配列リテラルは `Array` オブジェクトを生成します。`Array` オブジェクトの詳細は {{jsxref("Array")}} と[インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)をご覧ください。

#### 配列リテラルでの余分なカンマ

配列のリテラルでカンマを 2 つ並べた場合、配列は指定されていない要素のために空のスロットを残します。以下の例では、 `fish` 配列を作成しています。

```js
const fish = ["Lion", , "Angel"];
```

この配列をログ出力すると、次のようになります。

```js
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
```

2 つ目のアイテムは "empty" であり、実際の `undefined` 値と全く同じではないことに注意してください。[`Array.prototype.map`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) のような配列の走査メソッドを使用する場合、空のスロットはスキップされます。しかし、インデックスにアクセスする `fish[1]` は `undefined` を返します。

要素のリストの最後にカンマを付けた場合、そのカンマは無視されます。

次の例では、配列の長さ (`length`) は 3 です。`myList[3]` は存在しません。リスト内の他のカンマはすべて、新しい要素を示します。

```js-nolint
const myList = ["home", , "school", ];
```

次の例では、配列の長さ (`length`) は 4 になります。`myList[0]` と `myList[2]` が抜けています。

```js
const myList = [, "home", , "school"];
```

次の例では、配列の長さ (`length`) は 4 です。`myList[1]` と `myList[3]` が抜けています。最後のカンマのみが無視されます。

```js
const myList = ["home", , "school", ,];
```

> **メモ:** [末尾のカンマ](/ja/docs/Web/JavaScript/Reference/Trailing_commas)は、複数行の配列を保有するときに git diff をきれいに保つのに役立ちます。なぜなら、項目を最後に追加しても一行追加するだけで、前の行は変更されないからです。
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

余分なカンマの動作を理解することは、言語としての JavaScript を理解するために重要です。

しかし、自分自身でコードを書くときには、足りない要素を明示的に `undefined` と宣言するか、少なくともその不在を強調するコメントを挿入する必要があります。そうすることで、コードがより明確になり、保守性も高まります。

```js-nolint
const myList = ["home", /* 空 */, "school", /* 空 */, ];
```

### 論理値リテラル

論理型は 2 つのリテラル値、`true` と `false` があります。

> **メモ:** プリミティブの論理型である `true` や `false` と、{{jsxref("Boolean")}} オブジェクトの `true` や `false` という値とを混同してはいけません。
>
> Boolean オブジェクトは、プリミティブの論理型のラッパーです。詳細は {{jsxref("Boolean")}} を参照してください。

### 数値リテラル

JavaScript で数値リテラルには、様々な形の整数リテラルと、基数 10 の浮動小数点数が含まれます。

言語仕様では、数値リテラルは符号なしであることが要求されていることに注意してください。どのみち、`-123.4`のようなコードは、単項の `-` 演算子を数値リテラル `123.4` に適用したものとして解釈されるため、問題ありません。

#### 整数リテラル

整数および {{jsxref("BigInt")}} 型は、10 進数、16 進数、8 進数、2 進数で書くことができます。

- _10 進数_ の整数リテラルは、先頭が `0` （ゼロ）ではない一連の数字で構成されます。
- 先頭に `0` （ゼロ）である整数リテラル、または先頭の `0o` （または `0O`）は *8 進数*を示します。8 進数の数値には、`0` から `7` の数字のみが使用できます。
- 先頭の `0x` （または `0X`）は、*16 進数*の整数リテラルであることを意味します。16 進数の数値は数字 (`0` から `9`) と `a` から `f` および `A` から `F` のアルファベットで構成されます。（大文字小文字の違いは値には影響しません。たとえば `0xa` = `0xA` = `10` で `0xf` = `0xF` = `15` です。）
- 先頭の `0b` （または `0B`）は、*2 進数*の整数リテラルを表します。2 進数の数値は `0` と `1` の数字のみで構成されます。
- 整数リテラルの末尾に `n` の接尾辞を付けると、 {{jsxref("BigInt")}} リテラルを表します。この整数リテラルは上記のどの基数も使用することができます。`0123n` のような先頭が 0 の 8 進数の構文は許されませんが、 `0o123n` は問題ありません。

数値リテラルの例は以下のようになります。

```
0, 117, 123456789123456789n             （10 進数）
015, 0001, 0o777777777777n              （8 進数）
0x1123, 0x00111, 0x123456789ABCDEFn     （16 進数）
0b11, 0b0011, 0b11101001010101010101n   （2 進数）
```

詳しい情報は、[字句文法リファレンスの数値リテラル](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#数値リテラル)をご覧ください。

### 浮動小数点リテラル

浮動小数点リテラルは、以下の部分で構成されます。

- 符号なしの 10 進数の整数部
- 小数点 (`.`)
- 小数部（残りの 10 進数）
- 指数部

指数部は、`e` または `E` の後に、符号（`+` または `-`）を先行させることできる整数が続く形になります。浮動小数点数リテラルは少なくとも 1 つの数字と、小数点もしくは `e` （または `E`）が必要です。

より簡潔に書けば、次の形式になります。

```
[digits].[digits][(E|e)[(+|-)]digits]
```

例えば以下の通りです。

```js
3.1415926;
0.123456789;
3.1e12;
0.1e-23;
```

### オブジェクトリテラル

オブジェクトリテラルとは、プロパティ名とそれに関連付けられたオブジェクトの値との 0 個以上の組が波括弧 (`{}`) で囲まれたもので作られたリストです。

> **警告:** オブジェクトリテラルを文の先頭で使わないようにしてください。 `{` がブロックの始まりと解釈されるため、エラー（または予期せぬ動作）を引き起こすことになります。

以下にオブジェクトリテラルの例を示します。`car` オブジェクトの最初の要素には `myCar` プロパティが定義され、新規文字列 `"Saturn"` が割り当てられています。2 番目の要素、`getCar` プロパティには関数 `(carTypes("Honda"))`; によって呼び出された結果が即座に割り当てられます。3 番目の要素、`special` プロパティには既存の変数 (`sales`) が使われています。

```js
const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
```

さらに、数値リテラルや文字列リテラルをプロパティ名に使用したり、オブジェクトを別のオブジェクトの入れ子にすることができます。以下の例では、これらの機能を使用しています。

```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

オブジェクトのプロパティには空の文字列を含むあらゆる文字列が使えます。もしプロパティ名が JavaScript で有効な{{Glossary("Identifier", "識別子")}}か数値でなければ、引用符で囲む必要があります。

有効でない識別子によるプロパティ名には、ドット演算子 (`.`) を使ってアクセスできません。

```js example-bad
const unusualPropertyNames = {
  '': '空文字列',
  '!': 'バン！'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
```

代わりに、これらはブラケット記法 (`[]`) でアクセスする必要があります。

```js example-good
console.log(unusualPropertyNames[""]); // 空文字列
console.log(unusualPropertyNames["!"]); // バン!
```

#### 拡張オブジェクトリテラル

オブジェクトリテラルは、構築時のプロトタイプの設定、`foo: foo` 形式の短縮表記の値割り当て、メソッドの定義、`super` の呼び出し、式によるプロパティ名の計算など、様々な略記構文に対応しています。

同時に、オブジェクトリテラルとクラス定義が近くなり、オブジェクトベースの設計でも同じ利便性の一部から利益を得ることができます。

```js
const obj = {
  // __proto__
  __proto__: theProtoObj,
  // 短い 'handler: handler' の形式
  handler,
  // メソッド
  toString() {
    // スーパークラスの呼び出し
    return "d " + super.toString();
  },
  // 計算による（動的な）プロパティ名
  ["prop_" + (() => 42)()]: 42,
};
```

### 正規表現リテラル

正規表現リテラル（[後で](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)詳しく定義）は、スラッシュで囲まれたパターンです。以下は正規表現リテラルの例です。

```js
const re = /ab+c/;
```

### 文字列リテラル

文字列リテラルとは、0 文字以上の文字を二重引用符 (`"`) または単一引用符 (`'`) で括ったものです。文字列は同じ種類の引用符で括らなければなりません (つまり、どちらも単一引用符にするか、またはどちらも二重引用符にするかです)。

以下が文字列リテラルの例です。

```js
'foo';
"bar";
'1234';
'one line \n another line';
"Joyo's cat";
```

特に `String` オブジェクトを使用する必要がない限り、文字列リテラルを使用してください。 `String` オブジェクトの詳細については、{{jsxref("String")}} を参照してください。

文字列リテラルを持つ値は、{{jsxref("String")}} オブジェクトのあらゆるメソッドを呼び出すことができます。JavaScript は自動的に文字列リテラルを一時的な String オブジェクトに変換し、メソッドを呼び出して、その後一時的に作られた String オブジェクトを破棄します。`length` プロパティを文字列リテラルで用いることもできます。

```js
// ホワイトスペースを含む文字列の文字の数を出力する。
console.log("Joyo's cat".length); // この場合は 10 が出力される。
```

[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)も利用することができます。テンプレートリテラルは、二重引用符や単一引用符の代わりに逆引用符 (`` ` ``) ([grave accent](https://en.wikipedia.org/wiki/Grave_accent)) で囲まれたものです。

テンプレート文字列は文字列の構築に糖衣構文を利用することができます。（これは Perl や Python などの文字列補完機能に似ています。）

```js
// 基本的な文字列リテラルの作成
`In JavaScript '\n' is a line-feed.`;

// 複数行の文字列
`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`;

// 文字列補完
const name = 'Lev', time = 'today';
`Hello ${name}, how are you ${time}?`;
```

[タグ付きテンプレート](/ja/docs/Web/JavaScript/Reference/Template_literals#タグ付きテンプレート)は、テンプレートリテラルを指定するためのコンパクトな構文と、それを解釈するための「タグ」関数の呼び出しを組み合わせたものです。タグ付きテンプレートは、文字列と関連する値の集合を処理する関数を呼び出すための、より簡潔で意味づけされた方法にすぎません。以下の例では、テンプレートタグ関数の名前が `print` であり、テンプレートタグ関数の名前がテンプレートリテラルの前にあります。`print` 関数は引数を補間し、オブジェクトや配列をシリアライズするので、厄介な `[object Object]` になることを避けることができます。

```js
const formatArg = (arg) => {
  if (Array.isArray(arg)) {
    // Print a bulleted list
    return arg.map((part) => `- ${part}`).join("\n");
  }
  if (arg.toString === Object.prototype.toString) {
    // This object will be serialized to "[object Object]".
    // Let's print something nicer.
    return JSON.stringify(arg);
  }
  return arg;
};

const print = (segments, ...args) => {
  // For any well-formed template literal, there will always be N args and
  // (N+1) string segments.
  let message = segments[0];
  segments.slice(1).forEach((segment, index) => {
    message += formatArg(args[index]) + segment;
  });
  console.log(message);
};

const todos = [
  "Learn JavaScript",
  "Learn Web APIs",
  "Set up my website",
  "Profit!",
];

const progress = { javascript: 20, html: 50, css: 10 };

print`I need to do:
${todos}
My current progress is: ${progress}
`;

// I need to do:
// - Learn JavaScript
// - Learn Web APIs
// - Set up my website
// - Profit!
// My current progress is: {"javascript":20,"html":50,"css":10}
```

タグ付きテンプレートリテラルは、関数呼び出しの糖衣構文に過ぎないので、上記を同等の関数呼び出しとして書き直すことができます。

```js
print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
```

これは `console.log` スタイルの補間を連想させるかもしれません。

```js
console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);
```

タグ付きテンプレートは、変数とテンプレート自体を別個に宣言しなければならない従来の「フォーマッター」関数よりも、より自然に読み取れることがおわかりいただけると思います。

#### 文字列での特殊文字の使用

文字列では、通常の文字に加えて特殊文字も使用できます。次の例をご覧ください。

```js
"one line \n another line";
```

ここで、JavaScript の文字列で使用できる特殊文字の表を示します。

| 文字        | 意味                                                                                                                                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | ヌル文字                                                                                                                                                                                                    |
| `\b`        | バックスペース                                                                                                                                                                                              |
| `\f`        | 改ページ                                                                                                                                                                                                    |
| `\n`        | 改行                                                                                                                                                                                                        |
| `\r`        | 復帰                                                                                                                                                                                                        |
| `\t`        | タブ                                                                                                                                                                                                        |
| `\v`        | 垂直タブ                                                                                                                                                                                                    |
| `\'`        | アポストロフィまたは単一引用符                                                                                                                                                                              |
| `\"`        | 二重引用符                                                                                                                                                                                                  |
| `\\`        | バックスラッシュ (\\)                                                                                                                                                                                       |
| `\XXX`      | `0` から `377` までの 3 桁の 8 進数 _XXX_ で指定された、Latin-1 エンコーディングの文字。 例えば、`\251` は著作権記号を示します。                                                                            |
|             |                                                                                                                                                                                                             |
| `\xXX`      | `00` から `FF` までの 2 桁の 16 進数 _XX_ で指定された、Latin-1 エンコーディングの文字。 例えば、`\xA9` は著作権記号を示します。                                                                            |
|             |                                                                                                                                                                                                             |
| `\uXXXX`    | 4 桁の 16 進数 _XXXX_ で指定された Unicode 文字。 例えば、`\u00A9` は著作権記号を示します。[Unicode エスケープシーケンス](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#文字列リテラル)をご覧ください。 |
| `\u{XXXXX}` | Unicode コードポイントエスケープです。 例えば `\u{2F804}` は単純な Unicode エスケープである `\uD87E\uDC04` と同じです。                                                                                     |

#### 文字のエスケープ

上記の表に掲載されていない文字は直前にバックスラッシュをつけても無視されますが、こうした使い方は非推奨であり使用を避けるべきです。

バックスラッシュを直前につけることで、引用符を文字列に含めることができます。これは引用符の*エスケープ*と呼ばれます。例えば以下のようにします。

```js-nolint
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

この結果は次のようになります。

```
He read "The Cremation of Sam McGee" by R.W. Service.
```

文字列にバックスラッシュそのものを含めるには、バックスラッシュのエスケープが必要です。例えば、文字列に `c:\temp` というファイルパスを代入するには、以下のようにします。

```js
const home = "c:\\temp";
```

改行の直前にバックスラッシュを置くことで、改行をエスケープすることもできます。バックスラッシュと改行の両方が、文字列の値から取り除かれます。

```js
const str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str); // この文字列は複数行にわたって分解されます。
```

## 関連情報

本章では宣言とデータ型についての基本文法に重点を置いています。JavaScript の言語構成についてより詳しく知りたければ、当ガイドの以下に挙げた章をご覧ください。

- [制御フローとエラー処理](/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [ループと反復処理](/ja/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [関数](/ja/docs/Web/JavaScript/Guide/Functions)
- [式と演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators)

次章では、制御フローの構造とエラー処理について見ていきます。

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
