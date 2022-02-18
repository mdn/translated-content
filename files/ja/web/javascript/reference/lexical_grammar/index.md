---
title: 字句文法
slug: Web/JavaScript/Reference/Lexical_grammar
tags:
  - ガイド
  - JavaScript
  - キーワード
  - 字句文法
  - リテラル
browser-compat: javascript.grammar
translation_of: Web/JavaScript/Reference/Lexical_grammar
---
{{JsSidebar("More")}}

このページでは、 JavaScript の字句文法について説明します。 ECMAScript スクリプトのソーステキストは、左から右へスキャンされ、入力要素、すなわちトークン、制御文字、行末、コメント、[ホワイトスペース](/ja/docs/Glossary/Whitespace)の並びに変換されます。 ECMAScript も、特定のキーワードとリテラルを定義しており、文を終了するにはセミコロンを自動挿入するためのルールがあります。

## 制御文字

制御文字は、視覚的表現を有していないものの、テキストの解釈を制御するために使用されます。

| コードポイント | 名前                  | 略語 | 説明                                                                                                                                                                                                                    |
| ---------- | --------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `U+200C`   | Zero width non-joiner | \<ZWNJ>      | 特定の言語において、合字に接合されることを防ぐために、文字の間に配置されます。([Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%BC%E3%83%AD%E5%B9%85%E9%9D%9E%E6%8E%A5%E5%90%88%E5%AD%90)).                                                                   |
| `U+200D`   | Zero width joiner     | \<ZWJ>       | 特定の言語において、通常は接合されない文字を、接合した形を使用して文字を表示するために文字間に配置されます。 ([Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%BC%E3%83%AD%E5%B9%85%E6%8E%A5%E5%90%88%E5%AD%90)) |
| `U+FEFF`   | Byte order mark       | \<BOM>       | 記述の先頭において、 Unicode を使用することと、そのテキストのバイト順をマークします。 ([Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%83%88%E3%82%AA%E3%83%BC%E3%83%80%E3%83%BC%E3%83%9E%E3%83%BC%E3%82%AF)).                                                                                  |

## ホワイトスペース

[ホワイトスペース](/ja/docs/Glossary/Whitespace)はソースのテキストの読みやすさを向上させ、トークンを互いに区別します。これらの文字は通常、コードの機能性には不要なものです。よく [Minification tools](https://en.wikipedia.org/wiki/Minification_%28programming%29) を使用して、転送する必要があるデータの量を削減するためにホワイトスペースを除去します。

| コードポイント | 名前                           | 略語 | 説明                                                                                               | エスケープシーケンス |
| ---------- | ------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------- | --------------- |
| U+0009     | 文字単位のタブ           | \<HT>        | 水平タブ                                                                                     | \t              |
| U+000B     | 行単位のタブ                | \<VT>        | 垂直タブ                                                                                       | \v              |
| U+000C     | フォームフィード                      | \<FF>        | 改ページの制御文字 ([Wikipedia](http://en.wikipedia.org/wiki/Page_break#Form_feed))        | \f              |
| U+0020     | 空白                          | \<SP>        | 通常の空白                                                                                              |                 |
| U+00A0     | ノーブレークスペース                 | \<NBSP>      | 通常の空白だが、改行を行ってよい位置ではない                                                      |                 |
| Others     | 他の Unicode の空白文字 | \<USP>       | [Spaces in Unicode on Wikipedia](https://en.wikipedia.org/wiki/Space_%28punctuation%29#Spaces_in_Unicode) |                 |

## 行末文字

[ホワイトスペース](/ja/docs/Glossary/Whitespace)文字に加えて、行末文字もソースのテキストの読みやすさを改善するために使用されます。しかし、行末文字は JavaScript の実行に影響を与える場合があり、禁止されている場所もいくらかあります。行末文字は[自動的なセミコロンの挿入](#automatic_semicolon_insertion)の処理にも影響を与えます。行末文字は[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)の **\s** クラスに一致します。

以下の Unicode コードポイントのみが ECMAScript では行末文字として扱われ、他の改行文字はホワイトスペースとして扱われます (例えば、次の行、 NEL、 U+0085 はホワイトスペースと見なされます)。

| コードポイント | 名前                | 略語 | 説明                                            | エスケープシーケンス |
| ---------- | ------------------- | ------------ | ------------------------------------------------------ | --------------- |
| U+000A     | ラインフィード      | \<LF>        | UNIX システムでの改行文字です。                    | \n              |
| U+000D     | キャリッジリターン  | \<CR>        | コモドールと初期の Mac システムでの改行文字です。 | \r              |
| U+2028     | ラインセパレーター  | \<LS>        | [Wikipedia](https://en.wikipedia.org/wiki/Newline)     |                 |
| U+2029     | 改段落              | \<PS>        | [Wikipedia](https://en.wikipedia.org/wiki/Newline)     |                 |

## コメント

コメントは、ヒント、メモ、提案、警告を JavaScript のコードに追加するために使用されます。これにより、コードがより読みやすく、より理解しやすいものなります。また、コードが実行されないよう無効にするために使用することができます。これは、貴重なデバッグツールになることがあります。

JavaScript には、コード内にコメントを割り当てる方法が 2 つあります。

1 番目の方法は `//` コメントです。つまり、これは同じ行にある、その後のすべてのテキストをコメントにします。例えば、

```js
function comment() {
  // This is a one line JavaScript comment
  console.log('Hello world!');
}
comment();
```

2 番目の方法は `/* */` スタイルで、もっとずっと柔軟なものです。

例えば、単一行に利用した場合は次のようになります。

```js
function comment() {
  /* This is a one line JavaScript comment */
  console.log('Hello world!');
}
comment();
```

複数行のコメントも下記のように作成することができます。

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log('Hello world!');
}
comment();
```

必要であれば、行の途中でコメントを使用することもできますが、これはコードが読みにくくなることがあるので注意が必要です。

```js
function comment(x) {
  console.log('Hello ' + x /* insert the value of x */ + ' !');
}
comment('world');
```

また、コードをコメントで囲むことで、コードが実行されないよう無効にすることができます。

```js
function comment() {
  /* console.log('Hello world!'); */
}
comment();
```

この場合、 `console.log()` の呼び出しはコメント内部にあるので、実行されることはありません。何行分のコードであっても、このようにして無効にすることができます。

## ハッシュバンコメント

特殊な 3 番目のコメントの構文である**ハッシュバンコメント**は、 ECMAScript で標準化の途中にあるものです（[Hashbang Grammar proposal](https://github.com/tc39/proposal-hashbang) を参照してください）。

ハッシュバンコメントは、ちょうど単一行コメント (`//`) のように動作しますが、 `#!` で始まり、**スクリプトやモジュールの絶対的な開始位置にある場合のみ有効**です。 `#!` の前にホワイトスペースも許されないことに注意してください。このコメントは `#!` の後から最初の行の末尾までのすべての文字で構成されます。このコメントは 1 つだけが許可されます。

ハッシュバンコメントは、スクリプトを実行したい特定の JavaScript インタープリターへのパスを指定します。例えば次のようになります。

```js
#!/usr/bin/env node

console.log("Hello world");
```

> **Note:** JavaScript のハッシュバンコメントは、ファイルを正しいインタープリターで実行するために使用される [UNIX のシバン](https://en.wikipedia.org/wiki/Shebang_(Unix))を模倣したものです。

> **Warning:** スクリプトをシェル環境で直接実行できるようにしたい場合は、 [BOM](https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%83%88%E3%82%AA%E3%83%BC%E3%83%80%E3%83%BC%E3%83%9E%E3%83%BC%E3%82%AF) のない UTF-8 でエンコードしてください。ハッシュバンコメントの前に BOM があってもブラウザーでは動作しますが、ハッシュバンのあるスクリプトで BOM を使用することは推奨されていません。 BOM は Unix/Linux のシェル環境でスクリプトを実行しようとすると動作しません。したがって、シェル環境から直接スクリプトを実行したい場合は BOM のない UTF-8 を使用してください。

`#!` の形のコメントは JavaScript インタープリターを指定するためにだけ使用してください。他の用途ではすべて `//` のコメント (または複数行コメント) を使用してください。

## キーワード

### ECMAScript 2015 における予約キーワード

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/switch", "case")}}
- {{jsxref("Statements/try...catch", "catch")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/switch", "default")}}
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Statements/do...while", "do")}}
- {{jsxref("Statements/if...else", "else")}}
- {{jsxref("Statements/export", "export")}}
- {{jsxref("Statements/class", "extends")}}
- {{jsxref("Statements/try...catch", "finally")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/if...else", "if")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/in", "in")}}
- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Statements/return", "return")}}
- {{jsxref("Operators/super", "super")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Operators/this", "this")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/with", "with")}}
- {{jsxref("Operators/yield", "yield")}}

### 今後の予約キーワード

以下のものは、 ECMAScript の仕様によって今後のキーワードとして予約されています。これらは現時点では特別な機能を持っていませんが、将来は持つ可能性があるので、識別子として使用することはできません。

以下のものは常に予約されています。

- `enum`

以下のものは、厳格モードで遭遇した場合のみ予約語になります。

- `implements`
- `interface`
- {{jsxref("Statements/let", "let")}}
- `package`
- `private`
- `protected`
- `public`
- `static`
- {{jsxref("Operators/yield", "yield")}}

以下のものは、モジュールコードで遭遇した場合のみ予約語になります。

- `await`

#### 旧仕様にあった今後の予約キーワード

以前の ECMAScript の仕様書 (ECMAScript 1 から 3 まで) では、以下のものが将来のキーワードとして予約されています。

- `abstract`
- `boolean`
- `byte`
- `char`
- `double`
- `final`
- `float`
- `goto`
- `int`
- `long`
- `native`
- `short`
- `synchronized`
- `throws`
- `transient`
- `volatile`

加えて、 `null`, `true`, `false` の各リテラルは、 ECMAScript では識別子として使用することができません。

### 予約語の使用

予約語は実際には (*IdentifierName* ではなく) 識別子にのみ適用されます。 [ECMAScript Lexical Grammar](https://tc39.es/ecma262/multipage/grammar-summary.html#sec-lexical-grammar) に記載されているように、これらはすべて *IdentifierName* であり、*ReservedWord* を除外しません。

```js
a.import
a['import']
a = { import: 'test' }.
```

一方、以下のものは _Identifier_ であり、_IdentifierName_ から予約語を除外したものであるからです。識別子は、_FunctionDeclaration_, _FunctionExpression_, _VariableDeclaration_ などのために使用されます。 _IdentifierNames_ は _MemberExpression_, _CallExpression_ などについて使用されます。

```js
function import() {} // 違反
```

### 特別な意味を持つ識別子

一部の識別子は、キーワードでなくても、あるコンテキストで特別な意味を持つことがあります。それらは以下の通りです。

- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Functions/set", "set")}}

## リテラル

### Null リテラル

詳細については {{jsxref("null")}} をご覧ください。

```js
null
```

### 論理値リテラル

詳細については[論理型](/ja/docs/Web/JavaScript/Data_structures#論理型_boolean)をご覧ください。

```js
true
false
```

### 数値リテラル

[数値型](/ja/docs/Web/JavaScript/Data_structures#数値型_number) (Number) および[長整数型](/ja/docs/Web/JavaScript/Data_structures#長整数型_bigint) (Number) が数値リテラルを使用します。

#### 10 進数

```js
1234567890
42

// 先頭にゼロがあるものを使用する場合は注意してください
0888 // 888 は 10 進数として解釈されます
0777 // 8 進数として解釈され、 10 進数では 511 です。
```

なお、 10 進数リテラルはゼロ (`0`) から始め、他の 10 進数の数字を続けることができますが、 `0` に続く数字がすべて 8 より小さい場合は、その数値が 8 進数として解釈されることに注意してください。 JavaScript では、この場合に例外が発生しませんので、 {{bug(957513)}} をご覧ください。 {{jsxref("parseInt", "parseInt()")}} についてのページもご覧ください。

##### 指数

10 進数の指数リテラルは、 `beN` の書式で指定します。ここで `b` は基数（整数または浮動小数点）、その後に `e` 文字（セパレーターまたは指数記号として機能）、そして `N` は*指数*または*べき乗数* - 符号付き整数です（2019 ECMA-262 仕様に従います）。

```js
0e-5   // => 0
0e+5   // => 0
5e1    // => 50
175e-2 // => 1.75
1e3    // => 1000
1e-3   // => 0.001
```

#### 2 進数

2進数の構文は、先頭のゼロに続いて小文字または大文字のラテン文字 "B" を使用します (`0b` または `0B`)。この構文は ECMAScript 2015 の新しい構文なので、下記のブラウザー互換性表をご覧ください。 `0b` の後の数字が 0 または 1 でない場合は、 {{jsxref("SyntaxError")}} が "Missing binary digits after 0b" の内容で発生します。

```js
var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607
```

#### 8 進数

8進数の構文は、先頭のゼロに続いて小文字または大文字のラテン文字 "O" を使用します (`0o` または `0O`)。この構文は ECMAScript 2015 の新しい構文なので、下記のブラウザー互換性表をご覧ください。 `0o` の後の数字が範囲 (01234567) 外の場合、 {{jsxref("SyntaxError")}} が "Missing octal digits after 0o" の内容で発生します。

```js
var n = 0O755; // 493
var m = 0o644; // 420

// ゼロだけで始めることもできます (上記の10進数についてのメモを参照)
0755
0644
```

#### 16 進数

16 進数の構文は、先頭のゼロに続いて小文字または大文字のラテン文字 "X" を使用します (`0x` または `0X`)。 0x の後の数字が範囲 (0123456789ABCDEF) 外の場合、 {{jsxref("SyntaxError")}} が "Identifier starts immediately after numeric literal" の内容で発生します。

```js
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

#### 長整数リテラル

[長整数型](/ja/docs/Web/JavaScript/Data_structures#長整数型_bigint) (BigInt) は JavaScript の数値プリミティブであり、自由な精度の整数を表すことができます。長整数リテラルは、整数の末尾に `n` を追加することで作成されます。

```js
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

なお、先頭がゼロだけの 8 進数は `BigInt` では動作しません。

```js example-bad
// 0755n
// SyntaxError: invalid BigInt syntax
```

8　進数の `BigInt` 数値では、常にゼロの後に "o" (大文字でも小文字でも) を付けて使用してください。

```js example-good
0o755n
```

`BigInt` についての詳細な情報は、 [JavaScript のデータ構造](/ja/docs/Web/JavaScript/Data_structures#長整数型_bigint)をご覧ください。

#### 数値の区切り文字

数値リテラルの可読性を高めるために、アンダースコア (`_`, `U+005F`) を区切り文字として使用することができます。

```js
// 10 進数の区切り文字
1_000_000_000_000
1_050.95

// 2 進数の区切り文字
0b1010_0001_1000_0101

// 8 進数の区切り文字
0o2_2_5_6

// 16 進数の区切り文字
0xA0_B0_C0

// BigInt の区切り文字
1_000_000_000_000_000_000_000n
```

なお、以下の制限があります。

```js example-bad
// 連続して 2 つ以上のアンダースコアは許可されていません
100__000; // SyntaxError

// 数値リテラルの末尾に置くことは許可されていません
100_; // SyntaxError

// 先頭の 0 の後に使用することはできません
0_1; // SyntaxError
```

### オブジェクトリテラル

詳細については、 {{jsxref("Object")}} と[オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)をご覧ください。

```js
var o = { a: 'foo', b: 'bar', c: 42 };

// ES2015 で導入された短縮表記
var a = 'foo', b = 'bar', c = 42;
var o = {a, b, c};

// 以前の表記
var o = { a: a, b: b, c: c };
```

### 配列リテラル

詳細については {{jsxref("Array")}} をご覧ください。

```js
[1954, 1974, 1990, 2014]
```

### 文字列リテラル

[文字列](/ja/docs/Web/JavaScript/Data_structures#文字列型_string)リテラルは、単一引用符または二重引用符に囲まれた零個以上の Unicode コードポイントです。 Unicode コードポイントはエスケープシーケンスで表すこともできます。以下の引用符を閉じるコードポイントを除いて、すべてのコードポイントが文字列リテラルに現れることができます。

- U+005C \ (バックスラッシュ)
- U+000D \<CR>,
- and U+000A \<LF>.

[proposal to make all JSON text valid ECMA-262](https://github.com/tc39/proposal-json-superset) より以前は、 U+2028 \<LS> および U+2029 \<PS> は文字列リテラル内でエスケープせずに現れることができませんでした。

すべてのコードポイントが、エスケープシーケンスの形で現れることができます。文字列リテラルは ECMAScript の文字列値として評価されます。これらの文字列の値を生成する際に、 Unicode コードポイントは UTF-16 エンコードされます。

```js
'foo'
"bar"
```

#### 16 進エスケープシーケンス

16 進エスケープシーケンスは `\x` に続いてちょうど 2 桁の 16 進数から成り、 0x0000 から 0x00FF までのコード単位またはコードポイントを表します。

```js
'\xA9' // "©"
```

#### Unicode エスケープシーケンス

Unicode エスケープシーケンスは `\u` に続いてちょうど 4 桁の 16 進数から成ります。これで UTF-16 エンコーディングのコード単位を表します。コードポイント U+0000 から U+FFFF までは、コード単位とコードポイントは等しくなります。コードポイント U+10000 から U+10FFFF までは、 2 つのエスケープシーケンスで 2 つのコード単位 (サロゲートペア) を表す必要があります。サロゲートペアはコードポイントで区別されます。

See also {{jsxref("String.fromCharCode()")}} and {{jsxref("String.prototype.charCodeAt()")}}.

```js
'\u00A9' // "©" (U+A9)
```

#### Unicode コードポイントエスケープ

Unicode コードポイントエスケープは `\u{` に続いて 16 進数のコードポイントが続き、 `}` が続きます。 16 進数の値は 0 から 0x10FFFF までの範囲に含まれている必要があります。 U+10000 から U+10FFFF までの範囲のコードポイントを、サロゲートペアとして表す必要はありません。コードポイントエスケープは JavaScript に ECMAScript 2015 (ES6) で追加されました。

{{jsxref("String.fromCodePoint()")}} または {{jsxref("String.prototype.codePointAt()")}} もご覧ください。

```js
'\u{2F804}' // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// 同じ文字をサロゲートペアで表したもの
'\uD87E\uDC04'
```

### 正規表現リテラル

詳細については {{jsxref("RegExp")}} を参照してください。

```js
/ab+c/g

// 「空の」正規表現リテラル
// 単一行コメントと区別するために、空のキャプチャしない
// グループが必要です。
/(?:)/
```

### テンプレートリテラル

詳細について、[テンプレート文字列](/ja/docs/Web/JavaScript/Reference/Template_literals)をご覧ください。

```js
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag `string text ${expression} string text`
```

## 自動セミコロン挿入

一部の [JavaScript 文](/ja/docs/Web/JavaScript/Reference/Statements)はセミコロンで終わる必要があります。したがって、自動セミコロン挿入 (ASI) の影響を受けます。

- 空の文
- `let`, `const`, 変数定義
- `import`, `export`, モジュール宣言
- 式の文
- `debugger`
- `continue`, `break`, `throw`
- `return`

ECMAScript 仕様書は、[セミコロン挿入の 3 つの規則](https://tc39.github.io/ecma262/#sec-rules-of-automatic-semicolon-insertion)に言及しています。

1\. 文法上許されない位置で[行末文字](#行末文字)または "}" に遭遇したとき、セミコロンが前に挿入されます。

```js
{ 1
2 } 3

// 上記の文は、 ASI によって次のように変換されます

{ 1
;2 ;} 3;
```

2\. トークンの入力ストリームの末尾が検出され、パーサーが単一の入力ストリームを完全なプログラムとして解釈できない場合、末尾にセミコロンが挿入されます。

ここで `++` は、変数 `b` に適用される[後置演算子](/ja/docs/Web/JavaScript/Reference/Operators#インクリメントとデクリメント)としては扱われません。というのも、行末文字が `b` と`++` の間に見られるからです。

```js
a = b
++c

// 上記の文は、 ASI によって次のように変換されます

a = b;
++c;
```

3\. 文法上の制限付き生成物を含む文の後に行末文字が続いている場合、最後にセミコロンが挿入されます。以下の文が "no LineTerminator here" 規則を持っています。

- 後置演算子 (`++` および `--`)
- `continue`
- `break`
- `return`
- `yield`, `yield*`
- `module`

```js
return
a + b

// 上記の文は、 ASI によって次のように変換されます

return;
a + b;
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Lexical grammar in the ECMAScript specification](https://tc39.es/ecma262/#sec-ecmascript-language-lexical-grammar)
- [Jeff Walden: Binary and octal numbers](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/)
- [Mathias Bynens: JavaScript character escape sequences](https://mathiasbynens.be/notes/javascript-escapes)
- [論理型](/ja/docs/Web/JavaScript/Data_structures#論理型_boolean)
- [数値型](/ja/docs/Web/JavaScript/Data_structures#数値型_number)
- [文字列型](/ja/docs/Web/JavaScript/Data_structures#文字列型_string)
- {{jsxref("RegExp")}}
