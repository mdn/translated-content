---
title: 字句文法
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: f979062e46775350f739d13459a178d7402d6d8a
---

{{JsSidebar("More")}}

このページでは、 JavaScript での字句文法を説明します。JavaScript のソーステキストは、単なる文字の列です。これをインタープリターに理解させるためには、文字列をより構造化された表現に解釈させる必要があります。構文解析の最初の手順は[字句解析](https://ja.wikipedia.org/wiki/字句解析)と呼ばれ、テキストを左から右へスキャンして、個々の原子的な入力要素の列に変換します。一部の入力要素はインタープリターにとって重要ではないので、この手順の後で取り除かれます。制御文字、行の終端文字、[ホワイトスペース](/ja/docs/Glossary/Whitespace)、コメントがそれに該当します。識別子や句読点などの他にも、更なる構文解析のために使用されます。 ECMAScript はまた、特定のキーワードとリテラルを定義し、特定の無効なトークン列を有効にするためにセミコロンを自動的に挿入する規則を持っています。

## 書式化制御文字

書式化制御文字は、視覚的表現を有していないものの、テキストの解釈を制御するために使用されます。

| コードポイント | 名前                  | 略語    | 説明                                                                                                                                                                   |
| -------------- | --------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C         | Zero width non-joiner | \<ZWNJ> | 特定の言語において、合字に接合されることを防ぐために、文字の間に配置されます。([Wikipedia](https://ja.wikipedia.org/wiki/ゼロ幅非接合子))                              |
| U+200D         | Zero width joiner     | \<ZWJ>  | 特定の言語において、通常は接合されない文字を、接合した形を使用して文字を表示するために文字間に配置されます。 ([Wikipedia](https://ja.wikipedia.org/wiki/ゼロ幅接合子)) |
| U+FEFF         | Byte order mark       | \<BOM>  | 記述の先頭において、 Unicode を使用することと、そのテキストのバイト順をマークします。 ([Wikipedia](https://ja.wikipedia.org/wiki/バイト順マーク)).                     |

JavaScriptのソーステキストでは、 \<ZWNJ> と \<ZWJ> は識別子部分として扱われ、 \<BOM> （テキストの先頭にない場合はゼロ幅のノーブレークスペース \<ZWNBSP> とも呼ばれます）は空白部分として扱われます。

## ホワイトスペース

[ホワイトスペース](/ja/docs/Glossary/Whitespace)はソースのテキストの読みやすさを向上させ、トークンを互いに区別します。これらの文字は通常、コードの機能性には不要なものです。よく [Minification tools](https://en.wikipedia.org/wiki/Minification_%28programming%29) を使用して、転送する必要があるデータの量を削減するためにホワイトスペースを除去します。

| コードポイント | 名前                       | 略語      | 説明                                                                                | エスケープシーケンス |
| -------------- | -------------------------- | --------- | ----------------------------------------------------------------------------------- | -------------------- |
| U+0009         | 文字単位のタブ             | \<TAB>    | 水平タブ                                                                            | \t                   |
| U+000B         | 行単位のタブ               | \<VT>     | 垂直タブ                                                                            | \v                   |
| U+000C         | フォームフィード           | \<FF>     | 改ページの制御文字 ([Wikipedia](http://en.wikipedia.org/wiki/Page_break#Form_feed)) | \f                   |
| U+0020         | 空白                       | \<SP>     | 通常の空白                                                                          |                      |
| U+00A0         | ノーブレークスペース       | \<NBSP>   | 通常の空白だが、改行を行ってよい位置ではない                                        |                      |
| U+FEFF         | ゼロ幅ノーブレークスペース | \<ZWNBSP> | When not at the start of a script, the BOM marker is a normal whitespace character. |                      |
| Others         | 他の Unicode の空白文字    | \<USP>    | ["Space_Separator" 一般カテゴリーの文字][space separator set]                       |                      |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> **メモ:** ["White_Space" プロパティがあるが "Space_Separator" 一般カテゴリーにない文字](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D)のうち、 U+0009, U+000B, U+000C は JavaScript でもホワイトスペースとして扱われ、 U+0085 NEXT LINE は特別な役割を持たず、他にも[改行文字](#改行文字)の集合となるものがあります。

> **メモ:** JavaScript エンジンで使用される Unicode 規格が変更されると、プログラムの動作に影響を与える可能性があります。例えば、 ES2016 では参照する Unicode 規格が 5.1 から 8.0.0 にアップグレードされ、その影響で U+180E MONGOLIAN VOWEL SEPARATOR が "Space_Separator" カテゴリから「書式化（Cf）」カテゴリに移動し、空白でなくなっています。その結果、" \u180E".trim().length の結果が 0 から 1 に変更されました。

## 改行文字

[ホワイトスペース](/ja/docs/Glossary/Whitespace)文字に加えて、改行文字もソースのテキストの読みやすさを改善するために使用されます。しかし、改行文字は JavaScript の実行に影響を与える場合があり、禁止されている場所もいくらかあります。改行文字は[自動セミコロン挿入](#自動セミコロン挿入)の処理にも影響を与えます。改行文字は[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)の `\s` クラスに一致します。

以下の Unicode コードポイントのみが ECMAScript では改行文字として扱われ、他の改行文字はホワイトスペースとして扱われます (例えば、次の行、 NEL、 U+0085 はホワイトスペースと見なされます)。

| コードポイント | 名前               | 略語  | 説明                                                       | エスケープシーケンス |
| -------------- | ------------------ | ----- | ---------------------------------------------------------- | -------------------- |
| U+000A         | ラインフィード     | \<LF> | UNIX システムでの改行文字です。                            | \n                   |
| U+000D         | キャリッジリターン | \<CR> | コモドールと初期の Mac システムでの改行文字です。          | \r                   |
| U+2028         | ラインセパレーター | \<LS> | [ウィキペディア](https://ja.wikipedia.org/wiki/改行コード) |                      |
| U+2029         | 改段落             | \<PS> | [ウィキペディア](https://ja.wikipedia.org/wiki/改行コード) |                      |

## コメント

コメントは、ヒント、メモ、提案、警告を JavaScript のコードに追加するために使用されます。これにより、コードがより読みやすく、より理解しやすいものなります。また、コードが実行されないよう無効にするために使用することができます。これは、貴重なデバッグツールになることがあります。

JavaScript には、コード内にコメントを割り当てる方法が 2 つあります。

### 行コメント

1 番目の方法は `//` コメントです。つまり、これは同じ行にある、その後のすべてのテキストをコメントにします。例えば、

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### ブロックコメント

2 番目の方法は `/* */` スタイルで、もっとずっと柔軟なものです。

例えば、単一行に利用した場合は次のようになります。

```js
function comment() {
  /* This is a one line JavaScript comment */
  console.log("Hello world!");
}
comment();
```

複数行のコメントも下記のように作成することができます。

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment();
```

必要であれば、行の途中でコメントを使用することもできますが、これはコードが読みにくくなることがあるので注意が必要です。

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

また、コードをコメントで囲むことで、コードが実行されないよう無効にすることができます。

```js
function comment() {
  /* console.log('Hello world!'); */
}
comment();
```

この場合、 `console.log()` の呼び出しはコメント内部にあるので、実行されることはありません。何行分のコードであっても、このようにして無効にすることができます。

### ハッシュバンコメント

特別な 3 つ目のコメント構文として**ハッシュバンコメント**があります。ハッシュバンコメントは、 `#!` で始まることと、**スクリプトやモジュールの絶対的な開始位置でのみ有効であること**を除いて、単一の行のみ (`//`) のコメントと全く同じように動作します。なお、 `#!` の前にはいかなる種類の空白も許されないことにも注意してください。コメントは `#!` 以降の最初の行の終わりまでのすべての文字で構成され、このようなコメントは 1 つだけ許可されます。

JavaScriptでのハッシュバンコメントは [Unix におけるシバン](<https://ja.wikipedia.org/wiki/シバン_(Unix)>)に似ていて、スクリプトを実行するために使用したい特定の JavaScript インタープリターへのパスを指定します。ハッシュバンコメントが標準化される前に、 Node.js のようなブラウザー以外のホストではすでにデファクトとして実装されており、エンジンに渡される前にソーステキストから取り除かれるようになっていました。例として以下のようなものがあります。

```js
#!/usr/bin/env node

console.log("Hello world");
```

JavaScript インタープリターはこれを通常のコメントとして扱います。スクリプトが直接シェルで実行された場合のみ、シェルに対して意味を持ちます。

> **警告:** スクリプトをシェル環境で直接実行できるようにしたい場合は、 [BOM](https://ja.wikipedia.org/wiki/バイト順マーク) のない UTF-8 でエンコードしてください。ハッシュバンコメントの前に BOM があってもブラウザーでは動作しますが、ハッシュバンのあるスクリプトで BOM を使用することは推奨されていません。 BOM は Unix/Linux のシェル環境でスクリプトを実行しようとすると動作しません。したがって、シェル環境から直接スクリプトを実行したい場合は BOM のない UTF-8 を使用してください。

`#!` の形のコメントは JavaScript インタープリターを指定するためにだけ使用してください。他の用途ではすべて `//` のコメント（または複数行コメント）を使用してください。

## 識別子

_識別子_ は、値と名前をリンクさせるために使用されます。識別子は様々な場所で使用することができます。

```js
const decl = 1; // 変数宣言（`let` または `var` も可）
function fn() {} // 関数宣言
const obj = { key: "value" }; // オブジェクトキー
class C {
  // クラス宣言
  #priv = "value"; // プライベートプロパティ
}
lbl: console.log(1); // ラベル
```

JavaScript では、識別子は一般的に英数字、アンダースコア (`_`)、ドル記号 (`$`) で構成されます。識別子は数字で始めることはできません。しかし、JavaScript で使用できる識別子は ASCII だけではなく、ほとんどの Unicode コードポイントも使用可能です。

> **メモ:** もし何らかの理由で JavaScript のソースを自分で解析する必要がある場合、すべての識別子が `/[A-Za-z_$][\w$]*/` のパターンに従っている（つまり ASCII のみ）と仮定しないでください。 識別子の範囲は正規表現 `/[$_p{ID_Start}][$u200cu200dp{ID_Continue}]*/u` (Unicodeエスケープシーケンスを除く) で記述することができます。

また、JavaScript では、識別子の中で [Unicode エスケープシーケンス](#unicode_escape_sequences)を `\u0000` または `\u{000000}` という形式で使用することができ、これは実際の Unicode 文字と同じ文字列値をエンコードするものです。例えば、`你好` と `\u4f60\u597d` は同じ識別子です。

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

すべての場所で、すべての範囲の識別子が受け入れられるわけではありません。関数宣言、関数式、変数宣言などの特定の構文では、[予約語](#予約語)でない識別子名を使用する必要があります。

```js example-bad
function import() {} // 違反: import は予約語です。
```

最も注目すべきは、プライベートプロパティとオブジェクトプロパティは、予約語を許可していることです。

```js
const obj = { import: "value" }; // `import` は予約語だが有効
class C {
  #import = "value";
}
```

## キーワード

_キーワード_ は識別子のように見えますが、 JavaScript で特別な意味を持つトークンです。例えば、関数宣言の前のキーワード [`async`](/ja/docs/Web/JavaScript/Reference/Statements/async_function) は、その関数が非同期であることを示します。

キーワードの中には*予約*されているものがあり、変数宣言や関数宣言などの識別子として使用することができないことを意味します。これらはよく*予約語*と呼ばれます。[予約語の一覧](#予約語)は下記に掲載されています。すべてのキーワードが予約されているわけではありません。例えば、 `async` はどこでも識別子として使用することができます。一部のキーワードは*文脈的な予約語*です。例えば、 `await` は非同期関数の本体でのみ、 `let` は厳格モードコード、または `const` および `let` 宣言でのみ予約されています。

識別子は常に _文字列値_ で比較されるため、エスケープシーケンスは解釈されます。例えば、このような場合も構文エラーとなります。

```js example-bad
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

### 予約語

これらのキーワードは、 JavaScript で変数、関数、クラスなどの識別子として使用することはできません。

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
- [`extends`](/ja/docs/Web/JavaScript/Reference/Classes/extends)
- `false`
- {{jsxref("Statements/try...catch", "finally")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/if...else", "if")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/in", "in")}}
- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Operators/null", "null")}}
- {{jsxref("Statements/return", "return")}}
- {{jsxref("Operators/super", "super")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Operators/this", "this")}}
- {{jsxref("Statements/throw", "throw")}}
- `true`
- {{jsxref("Statements/try...catch", "try")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/with", "with")}}

以下のものは、厳格モードのコードで使われた場合のみ予約語になります。

- {{jsxref("Statements/let", "let")}} （`const`、`let`、クラス定義でも予約語になる）
- [`static`](/ja/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} （ジェネレーター関数の本体でも予約語になる）

以下のものは、モジュールコードや非同期関数本体に現れた場合にのみ予約語になります。

- [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await)

### 今後の予約語

以下のものは、 ECMAScript の仕様によって今後のキーワードとして予約されています。これらは現時点では特別な機能を持っていませんが、将来は持つ可能性があるので、識別子として使用することはできません。

以下のものは常に予約されています。

- `enum`

以下のものは、厳格モードで遭遇した場合のみ予約語になります。

- `implements`
- `interface`
- `package`
- `private`
- `protected`
- `public`

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

### 特別な意味を持つ識別子

一部の識別子は、キーワードでなくても、あるコンテキストで特別な意味を持つことがあります。それらは以下の通りです。

- {{jsxref("Functions/arguments", "arguments")}} （キーワードではありませんが、厳格モードでは識別子として宣言できません）
- `as` ([`import * as ns from "mod"`](/ja/docs/Web/JavaScript/Reference/Statements/import#namespace_import))
- [`async`](/ja/docs/Web/JavaScript/Reference/Statements/async_function)
- {{jsxref("Global_Objects/eval", "eval")}} （キーワードではありませんが、厳格モードでは識別子として宣言できません）
- `from` ([`import x from "mod"`](/ja/docs/Web/JavaScript/Reference/Statements/import))
- {{jsxref("Functions/get", "get")}}
- [`of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of)
- {{jsxref("Functions/set", "set")}}

## リテラル

### Null リテラル

詳細については [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) をご覧ください。

```js
null;
```

### 論理値リテラル

詳細については[論理型](/ja/docs/Web/JavaScript/Data_structures#論理型)をご覧ください。

```js
true;
false;
```

### 数値リテラル

[数値型](/ja/docs/Web/JavaScript/Data_structures#数値型) (Number) および[長整数型](/ja/docs/Web/JavaScript/Data_structures#長整数型) (BigInt) が数値リテラルを使用します。

#### 10 進数

```js
1234567890;
42;

// 先頭にゼロがあるものを使用する場合は注意してください
0888; // 888 は 10 進数として解釈されます
0777; // 8 進数として解釈され、 10 進数では 511 です。
```

なお、 10 進数リテラルはゼロ (`0`) から始め、他の 10 進数の数字を続けることができますが、 `0` に続く数字がすべて 8 より小さい場合は、その数値が 8 進数として解釈されることに注意してください。さらに、接頭辞 `0` を持つ数値リテラルは、 8 進数として解釈しても 10 進数として解釈しても、厳格モードでは構文エラーが発生します。ですから、代わりに `0o` 接頭辞を使用してください。

##### 指数

10 進数の指数リテラルは、 `beN` の書式で指定します。ここで `b` は基数（整数または浮動小数点）、その後に `e` 文字（セパレーターまたは指数記号として機能）、そして `N` は*指数*または*べき乗数* - 符号付き整数です（2019 ECMA-262 仕様に従います）。

```js
0e-5; // 0
0e5; // 0
5e1; // 50
175e-2; // 1.75
1e3; // 1000
1e-3; // 0.001
1e3; // 1000
```

#### 2 進数

2進数の構文は、先頭のゼロに続いて小文字または大文字のラテン文字 "B" を使用します (`0b` または `0B`)。 `0b` の後の数字が 0 または 1 でない場合は、 {{jsxref("SyntaxError")}} が "Missing binary digits after 0b" の内容で発生します。

```js
const FLT_SIGNBIT = 0b10000000000000000000000000000000; // 2147483648
const FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
const FLT_MANTISSA = 0b00000000011111111111111111111111; // 8388607
```

#### 8 進数

8進数の構文は、先頭のゼロに続いて小文字または大文字のラテン文字 "O" を使用します (`0o` または `0O`)。 `0o` の後の数字が範囲 (01234567) 外の場合、 {{jsxref("SyntaxError")}} が "Missing octal digits after 0o" の内容で発生します。

```js
const n = 0o755; // 493
const m = 0o644; // 420
```

#### 16 進数

16 進数の構文は、先頭のゼロに続いて小文字または大文字のラテン文字 "X" を使用します (`0x` または `0X`)。 0x の後の数字が範囲 (0123456789ABCDEF) 外の場合、 {{jsxref("SyntaxError")}} が "Identifier starts immediately after numeric literal" の内容で発生します。

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

#### 長整数リテラル

[長整数型](/ja/docs/Web/JavaScript/Data_structures#長整数型) (BigInt) は JavaScript の数値プリミティブであり、自由な精度の整数を表すことができます。長整数リテラルは、整数の末尾に `n` を追加することで作成されます。

```js
123456789123456789n; // 123456789123456789
0o777777777777n; // 68719476735
0x123456789abcdefn; // 81985529216486895
0b11101001010101010101n; // 955733
```

なお、先頭がゼロだけの 8 進数は `BigInt` では動作しません。

```js example-bad
0755n
// SyntaxError: invalid BigInt syntax
```

8 進数の `BigInt` 数値では、常にゼロの後に "o" (大文字でも小文字でも) を付けて使用してください。

```js example-good
0o755n;
```

`BigInt` についての詳細な情報は、 [JavaScript のデータ構造](/ja/docs/Web/JavaScript/Data_structures#長整数型)をご覧ください。

#### 数値の区切り文字

数値リテラルの可読性を高めるために、アンダースコア (`_`, `U+005F`) を区切り文字として使用することができます。

```js
// 10 進数の区切り文字
1_000_000_000_000;
1_050.95;

// 2 進数の区切り文字
0b1010_0001_1000_0101;

// 8 進数の区切り文字
0o2_2_5_6;

// 16 進数の区切り文字
0xa0_b0_c0;

// BigInt の区切り文字
1_000_000_000_000_000_000_000n;
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
const o = { a: "foo", b: "bar", c: 42 };

// 短縮記法
const a = "foo",
  b = "bar",
  c = 42;
const o = { a, b, c };

// 以前の表記
const o = { a: a, b: b, c: c };
```

### 配列リテラル

詳細については {{jsxref("Array")}} をご覧ください。

```js
[1954, 1974, 1990, 2014];
```

### 文字列リテラル

[文字列](/ja/docs/Web/JavaScript/Data_structures#文字列型)リテラルは、単一引用符または二重引用符に囲まれた零個以上の Unicode コードポイントです。 Unicode コードポイントはエスケープシーケンスで表すこともできます。以下の引用符を閉じるコードポイントを除いて、すべてのコードポイントが文字列リテラルに現れることができます。

- U+005C \ (バックスラッシュ)
- U+000D \<CR>,
- and U+000A \<LF>.

すべてのコードポイントが、エスケープシーケンスの形で現れることができます。文字列リテラルは ECMAScript の文字列値として評価されます。これらの文字列の値を生成する際に、 Unicode コードポイントは UTF-16 エンコードされます。

```js-nolint
'foo';
"bar";
```

#### 16 進エスケープシーケンス

16 進エスケープシーケンスは `\x` に続いてちょうど 2 桁の 16 進数から成り、 0x0000 から 0x00FF までのコード単位またはコードポイントを表します。

```js
"\xA9"; // "©"
```

#### Unicode エスケープシーケンス

Unicode エスケープシーケンスは `\u` に続いてちょうど 4 桁の 16 進数から成ります。これで UTF-16 エンコーディングのコード単位を表します。コードポイント U+0000 から U+FFFF までは、コード単位とコードポイントは等しくなります。コードポイント U+10000 から U+10FFFF までは、 2 つのエスケープシーケンスで 2 つのコード単位 (サロゲートペア) を表す必要があります。サロゲートペアはコードポイントで区別されます。

See also {{jsxref("String.fromCharCode()")}} and {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode コードポイントエスケープ

Unicode コードポイントエスケープは `\u{` に続いて 16 進数のコードポイントが続き、 `}` が続きます。 16 進数の値は 0 から 0x10FFFF までの範囲に含まれている必要があります。 U+10000 から U+10FFFF までの範囲のコードポイントを、サロゲートペアとして表す必要はありません。

{{jsxref("String.fromCodePoint()")}} または {{jsxref("String.prototype.codePointAt()")}} もご覧ください。

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// 同じ文字をサロゲートペアで表したもの
"\uD87E\uDC04";
```

### 正規表現リテラル

詳細については {{jsxref("RegExp")}} を参照してください。

```js
/ab+c/g;

// 「空の」正規表現リテラル
// 単一行コメントと区別するために、空のキャプチャしない
// グループが必要です。
/(?:)/;
```

### テンプレートリテラル

詳細について、[テンプレート文字列](/ja/docs/Web/JavaScript/Reference/Template_literals)をご覧ください。

```js
`string text`;

`string text line 1
 string text line 2`;

`string text ${expression} string text`;

tag `string text ${expression} string text`;
```

## 自動セミコロン挿入

一部の [JavaScript 文](/ja/docs/Web/JavaScript/Reference/Statements)はセミコロンで終わる必要があります。したがって、自動セミコロン挿入 (ASI) の影響を受けます。

- `let`, `const`, 変数定義
- `import`, `export`, モジュール宣言
- 式の文
- `debugger`
- `continue`, `break`, `throw`
- `return`

セミコロンが自動的に挿入されるケースは 3 つあります。

1\. 文法上許されないトークンに出会ったとき、それが前のトークンから少なくとも 1 つの[改行文字](#改行文字)で区切られているか、そのトークンが "}" であれば、その前にセミコロンが挿入されます。

```js-nolint
{ 1
2 } 3

// 上記の文は、 ASI によって次のように変換されます

{ 1
;2 ;} 3;

// 3 つの文をエンコードする正しい文法で、
// それぞれが数値リテラルで構成されています
```

[`do...while`](/ja/docs/Web/JavaScript/Reference/Statements/do...while) の末尾の ")" は、このルールでも特別なケースとして扱われます。

```js
do {
  // ...
} while (condition); /* ; */ // ここで ASI
const a = 1;
```

2\. トークンの入力ストリームの末尾が検出され、パーサーが単一の入力ストリームを完全なプログラムとして解釈できない場合、末尾にセミコロンが挿入されます。

```js
const a = 1; /* ; */ // ASI here
```

このルールは前回のルールを補完するもので、特に「問題のあるトークン」がなく、入力ストリームが終わっている場合を想定しています。

3\. 文法上で改行が禁止されている場所で改行が見つかった場合は、セミコロンを挿入します。このような場所は、以下の通りです。

- `式 <ここ> ++`, `式 <ここ> --`
- `continue <ここ> ラベル`
- `break <ここ> ラベル`
- `return <ここ> 式`
- `throw <ここ> 式`
- `yield <ここ> 式`
- `yield <ここ> * 式`
- `(param) <ここ> => {}`
- `async <ここ> function`, `async <ここ> prop()`, `async <ここ> function*`, `async <ここ> *prop()`, `async <ここ> (param) <ここ> => {}`

ここで [`++`](/ja/docs/Web/JavaScript/Reference/Operators/Increment) は、変数 `b` に適用される後置演算子としては扱われません。というのも、改行文字が `b` と`++` の間にあるからです。

```js-nolint
a = b
++c

// 上記の文は、 ASI によって次のように変換されます

a = b;
++c;
```

ここでは、 `return` 文は `undefined` を返し、 `a + b` は到達できない文になります。

```js-nolint
return
a + b

// 上記の文は、 ASI によって次のように変換されます

return;
a + b;
```

ASI は、改行がなければ無効な構文を生成するようなトークンを区切った場合にのみ発生することに注意してください。次のトークンが有効な構文の一部として解釈できる場合は、セミコロンは挿入されません。例えば、

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

`()` は関数呼び出しと見なせるので、通常は ASI が発生しないでしょう。同様に、 `[]` はメンバーアクセスである可能性があります。上のコードは次のものと同等です。

```js-nolint example-bad
const a = 1(1).toString()

const b = 1[1, 2, 3].forEach(console.log)
```

そのため、コードを実行すると "1 is not a function" や "Cannot read properties of undefined (reading 'forEach')" などのエラーが発生することになります。

クラス内では、クラスフィールドやジェネレーターメソッドも落とし穴になることがあります。

```js example-bad
class A {
  a = 1
  *gen() {}
}
```

これは次のようになります。

```js example-bad
class A {
  a = 1 * gen() {}
}
```

したがって、 `{` のあたりで構文エラーになります。

セミコロンなしのスタイルを強制したい場合、 ASI を扱う上で以下のような経験則があります。

- 後置 `++` および `--` は、オペランドと同じ行に書く。
- `return`、`throw`、`yield` の後の式はキーワードと同じ行に置く。
- 同様に、 `break` または `continue` の後のラベルはキーワードと同じ行に置く。
- アロー関数の `=>` は引数の末尾と同じ行に置く。
- 非同期関数やメソッドの `async` の直後で改行しない。
- 行が `(`, `[`, `` ` ``, `+`, `-`, `/` (正規表現リテラル) で始まる場合は、直前にセミコロンを置くか、前の行の行末にセミコロンをつける。
- クラスのフィールドは、できれば常にセミコロンで終わるようにします。一つ前のルール（フィールド宣言の後に[計算されたプロパティ](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names)が続くと、その後は `[` で始まる）に加えて、セミコロンはフィールド宣言とジェネレーターメソッドの間にも必要です。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Lexical grammar in the ECMAScript specification](https://tc39.es/ecma262/#sec-ecmascript-language-lexical-grammar)
- [Jeff Walden: Binary and octal numbers](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/)
- [Mathias Bynens: JavaScript character escape sequences](https://mathiasbynens.be/notes/javascript-escapes)
- [論理型](/ja/docs/Web/JavaScript/Data_structures#論理型)
- [数値型](/ja/docs/Web/JavaScript/Data_structures#数値型)
- [文字列型](/ja/docs/Web/JavaScript/Data_structures#文字列型)
- {{jsxref("RegExp")}}
