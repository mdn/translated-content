---
title: 字句文法
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jsSidebar("More")}}

このページでは、 JavaScript での字句文法を説明します。JavaScript のソーステキストは、単なる文字の列です。これをインタープリターに理解させるためには、文字列をより構造化された表現に解釈させる必要があります。構文解析の最初の手順は[字句解析](https://ja.wikipedia.org/wiki/字句解析)と呼ばれ、テキストを左から右へスキャンして、個々の原子的な入力要素の列に変換します。一部の入力要素、例えば[ホワイトスペース](#ホワイトスペース)や[コメント](#コメント)はインタープリターにとって重要ではないので、この手順の後で取り除かれます。それ以外の、例えば[識別子](#識別子)、[キーワード](#キーワード)、[リテラル](#リテラル)、区切り記号（主に[演算子](/ja/docs/Web/JavaScript/Reference/Operators)）は、その後の構文解析に使用します。[改行文字](#改行文字)や複数行のコメントも構文的には重要ではありませんが、不正なトークン列を有効にするために[自動セミコロン挿入](#自動セミコロン挿入)の処理のガイドとなります。

## 書式化制御文字

書式化制御文字は、視覚的表現を有していないものの、テキストの解釈を制御するために使用されます。

| コードポイント | 名前                  | 略語    | 説明                                                                                                                                                                   |
| -------------- | --------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C         | Zero width non-joiner | \<ZWNJ> | 特定の言語において、合字に接合されることを防ぐために、文字の間に配置されます。([Wikipedia](https://ja.wikipedia.org/wiki/ゼロ幅非接合子))                              |
| U+200D         | Zero width joiner     | \<ZWJ>  | 特定の言語において、通常は接合されない文字を、接合した形を使用して文字を表示するために文字間に配置されます。 ([Wikipedia](https://ja.wikipedia.org/wiki/ゼロ幅接合子)) |
| U+FEFF         | Byte order mark       | \<BOM>  | 記述の先頭において、 Unicode を使用することと、そのテキストのバイト順をマークします。 ([Wikipedia](https://ja.wikipedia.org/wiki/バイト順マーク)).                     |

JavaScriptのソーステキストでは、 \<ZWNJ> と \<ZWJ> は[識別子](#識別子)部分として扱われ、 \<BOM> （テキストの先頭にない場合はゼロ幅のノーブレークスペース \<ZWNBSP> とも呼ばれます）は[ホワイトスペース](#ホワイトスペース)として扱われます。

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
| その他         | 他の Unicode の空白文字    | \<USP>    | ["Space_Separator" 一般カテゴリーの文字][space separator set]                       |                      |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> **メモ:** ["White_Space" プロパティがあるが "Space_Separator" 一般カテゴリーにない文字](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D)のうち、 U+0009, U+000B, U+000C は JavaScript でもホワイトスペースとして扱われ、 U+0085 NEXT LINE は特別な役割を持たず、他にも[改行文字](#改行文字)の集合となるものがあります。

> [!NOTE]
> JavaScript エンジンで使用される Unicode 規格が変更されると、プログラムの動作に影響を与える可能性があります。例えば、 ES2016 では参照する Unicode 規格が 5.1 から 8.0.0 にアップグレードされ、その影響で U+180E MONGOLIAN VOWEL SEPARATOR が "Space_Separator" カテゴリーから「書式化（Cf）」カテゴリーに移動し、空白でなくなっています。その結果、" \u180E".trim().length の結果が 0 から 1 に変更されました。

## 改行文字

[ホワイトスペース](#ホワイトスペース)文字に加えて、改行文字もソースのテキストの読みやすさを改善するために使用されます。しかし、改行文字は JavaScript の実行に影響を与える場合があり、禁止されている場所もいくらかあります。改行文字は[自動セミコロン挿入](#自動セミコロン挿入)の処理にも影響を与えます。

字句文法のコンテキスト以外では、ホワイトスペースと改行文字はしばしば同一視されます。例えば、{{jsxref("String.prototype.trim()")}} は文字列の最初と最後からすべてのホワイトスペースと改行文字を除去します。正規表現における `\s` [文字クラスエスケープ](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)は、すべてのホワイトスペースと改行文字に一致します。

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
  /* console.log("Hello world!"); */
}
comment();
```

この場合、 `console.log()` の呼び出しはコメント内部にあるので、実行されることはありません。何行分のコードであっても、このようにして無効にすることができます。

少なくとも 1 つの[改行文字](#改行文字)を含むブロックコメントは、[自動セミコロン挿入](#自動セミコロン挿入)において改行文字のように動作します。

### ハッシュバンコメント

特別な 3 つ目のコメント構文として**ハッシュバンコメント**があります。ハッシュバンコメントは、 `#!` で始まることと、**スクリプトやモジュールの絶対的な開始位置でのみ有効であること**を除いて、単一の行のみ (`//`) のコメントと全く同じように動作します。なお、 `#!` の前にはいかなる種類の空白も許されないことにも注意してください。コメントは `#!` 以降の最初の行の終わりまでのすべての文字で構成され、このようなコメントは 1 つだけ許可されます。

JavaScriptでのハッシュバンコメントは [Unix におけるシバン](<https://ja.wikipedia.org/wiki/シバン_(Unix)>)に似ていて、スクリプトを実行するために使用したい特定の JavaScript インタープリターへのパスを指定します。ハッシュバンコメントが標準化される前に、 Node.js のようなブラウザー以外のホストではすでにデファクトとして実装されており、エンジンに渡される前にソーステキストから取り除かれるようになっていました。例として以下のようなものがあります。

```js
#!/usr/bin/env node

console.log("Hello world");
```

JavaScript インタープリターはこれを通常のコメントとして扱います。スクリプトが直接シェルで実行された場合のみ、シェルに対して意味を持ちます。

> [!WARNING]
> スクリプトをシェル環境で直接実行できるようにしたい場合は、 [BOM](https://ja.wikipedia.org/wiki/バイト順マーク) のない UTF-8 でエンコードしてください。ブラウザーで実行するコードでは BOM は何の問題も起こしませんが - UTF-8 デコードの際、ソーステキストが解析される前に取り除かれるからです - Unix/Linux のシェルでは、BOM 文字が前にあるとハッシュバンを認識しません。

`#!` の形のコメントは JavaScript インタープリターを指定するためにだけ使用してください。他の用途ではすべて `//` のコメント（または複数行コメント）を使用してください。

## 識別子

_識別子_ は、値と名前をリンクさせるために使用されます。識別子は様々な場所で使用することができます。

```js
const decl = 1; // 変数宣言（`let` または `var` も可）
function fn() {} // 関数宣言
const obj = { key: "value" }; // オブジェクトキー
// クラス宣言
class C {
  #priv = "value"; // プライベートプロパティ
}
lbl: console.log(1); // ラベル
```

JavaScript では、識別子は一般的に英数字、アンダースコア (`_`)、ドル記号 (`$`) で構成されます。識別子は数字で始めることはできません。しかし、JavaScript で使用できる識別子は {{Glossary("ASCII")}} だけではなく、ほとんどの Unicode コードポイントも使用可能です。つまり、識別子は [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D) カテゴリーにある文字で始めることができ、[ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D) カテゴリーにある文字は先頭文字の後に置くことができます。

> [!NOTE]
> もし何らかの理由で JavaScript のソースを自分で解析する必要がある場合、すべての識別子が `/[A-Za-z_$][\w$]*/` のパターンに従っている（つまり ASCII のみ）と仮定しないでください。 識別子の範囲は正規表現 `/[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*/u` (Unicodeエスケープシーケンスを除く) で記述することができます。

また、JavaScript では、識別子の中で [Unicode エスケープシーケンス](#unicode_escape_sequences)を `\u0000` または `\u{000000}` という形式で使用することができ、これは実際の Unicode 文字と同じ文字列値をエンコードするものです。例えば、`你好` と `\u4f60\u597d` は同じ識別子です。

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

すべての場所で、すべての範囲の識別子が受け入れられるわけではありません。関数宣言、関数式、変数宣言などの特定の構文では、[予約語](#予約語)でない識別子名を使用する必要があります。

```js-nolint example-bad
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

```js-nolint example-bad
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
- [`false`](#論理値リテラル)
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
- [`true`](#論理値リテラル)
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

#### 旧仕様書にあった今後の予約キーワード

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

> [!NOTE]
> この節では、不可分なトークンであるリテラルについて説明します。[オブジェクトリテラル](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)や[配列リテラル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#配列リテラル記法)は、一連のトークンで構成される[式](/ja/docs/Web/JavaScript/Reference/Operators)です。

### Null リテラル

詳細については [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) を参照してください。

```js-nolint
null
```

### 論理値リテラル

詳細については[論理型](/ja/docs/Web/JavaScript/Data_structures#論理型)を参照してください。

```js-nolint
true
false
```

### 数値リテラル

[数値型](/ja/docs/Web/JavaScript/Data_structures#数値型) (Number) および[長整数型](/ja/docs/Web/JavaScript/Data_structures#長整数型) (BigInt) が数値リテラルを使用します。

#### 10 進数

```js-nolint
1234567890
42
```

10 進数リテラルをゼロ (`0`) から始め、他の 10 進数の数字を続けることができますが、 `0` に続く数字がすべて 8 より小さい場合は、その数値が 8 進数として解釈されることに注意してください。さらに、接頭辞 `0` を持つ数値リテラルは、 8 進数と 10 進数のどちらで解釈しても、[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode#古い_8_進数リテラル)では構文エラーが発生します。ですから、代わりに `0o` 接頭辞を使用してください。

```js-nolint example-bad
0888 // 888 は 10 進数として解釈されます
0777 // 8 進数として解釈され、 10 進数では 511 です。
```

##### 指数

10 進数の指数リテラルは、 `beN` の書式で指定します。ここで `b` は基数（整数または浮動小数点）、その後に `e` 文字（セパレーターまたは指数記号として機能）、そして `N` は*指数*または*べき乗数* - 符号付き整数です（2019 ECMA-262 仕様に従います）。

```js-nolint
0e-5   // 0
0e+5   // 0
5e1    // 50
175e-2 // 1.75
1e3    // 1000
1e-3   // 0.001
1E3    // 1000
```

#### 2 進数

2 進数の構文は、先頭のゼロに続いて小文字または大文字のラテン文字 "B" を使用します (`0b` または `0B`)。`0o` の後に 0 または 1 以外の文字があると、一連のリテラルは終了します。

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### 8 進数

8 進数の構文は、先頭のゼロに続いて小文字または大文字のラテン文字 "O" を使用します (`0o` または `0O`)。`0o` の後に範囲 (01234567) から外れた文字があると、一連のリテラルは終了します。

```js-nolint
0O755 // 493
0o644 // 420
```

#### 16 進数

16 進数の構文は、先頭のゼロに続いて小文字または大文字のラテン文字 "X" を使用します (`0x` または `0X`)。`0x` の後に範囲 (0123456789ABCDEF) から外れた文字があると、一連のリテラルは終了します。

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

#### 長整数リテラル

[長整数型](/ja/docs/Web/JavaScript/Data_structures#長整数型) (BigInt) は JavaScript の数値プリミティブであり、自由な精度の整数を表すことができます。長整数リテラルは、整数の末尾に `n` を追加することで作成されます。

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

長整数リテラルは、古い 8 進数と混同しないよう、`0` で始めることはできません。

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

8 進数の `BigInt` 数値では、常にゼロの後に "o" (大文字でも小文字でも) を付けて使用してください。

```js example-good
0o755n;
```

`BigInt` についての詳細な情報は、 [JavaScript のデータ構造](/ja/docs/Web/JavaScript/Data_structures#長整数型)を参照してください。

#### 数値の区切り文字

数値リテラルの可読性を高めるために、アンダースコア (`_`, `U+005F`) を区切り文字として使用することができます。

```js-nolint
1_000_000_000_000
1_050.95
0b1010_0001_1000_0101
0o2_2_5_6
0xA0_B0_C0
1_000_000_000_000_000_000_000n
```

なお、以下の制限があります。

```js-nolint example-bad
// 連続して 2 つ以上のアンダースコアは許可されていません
100__000; // SyntaxError

// 数値リテラルの末尾に置くことは許可されていません
100_; // SyntaxError

// 先頭の 0 の後に使用することはできません
0_1; // SyntaxError
```

### 文字列リテラル

[文字列](/ja/docs/Web/JavaScript/Data_structures#文字列型)リテラルは、単一引用符または二重引用符に囲まれた 0 個以上の Unicode コードポイントです。 Unicode コードポイントはエスケープシーケンスで表すこともできます。以下の引用符を閉じるコードポイントを除いて、すべてのコードポイントが文字列リテラルに現れることができます。

- U+005C \ (バックスラッシュ)
- U+000D \<CR>
- U+000A \<LF>
- 文字列リテラルを始めたものと同じ引用符

すべてのコードポイントが、エスケープシーケンスの形で現れることができます。文字列リテラルは ECMAScript の文字列値として評価されます。これらの文字列の値を生成する際に、 Unicode コードポイントは UTF-16 エンコードされます。

```js-nolint
'foo'
"bar"
```

次の項では、文字列リテラルで利用できるさまざまなエスケープシーケンス（`\` の後に 1 つ以上の文字が続くもの）を記述します。以下の一覧に掲載されていないエスケープシーケンスは「等価エスケープ」となり、コードポイントそのものになります。例えば、`\z` は `z` と同じです。非推奨の 8 指数エスケープシーケンス構文があり、[非推奨の機能、廃止された機能](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#エスケープシーケンス)ページに記述されています。これらのエスケープシーケンスの多くは正規表現でも有効です。[文字エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)を参照してください。

#### エスケープシーケンス

特殊文字はエスケープシーケンスを使用してエンコードすることができます。

| エスケープシーケンス              | Unicode コードポイント                          |
| --------------------------------- | ----------------------------------------------- |
| `\0`                              | ヌル文字 (U+0000 NULL)                          |
| `\'`                              | 単一引用符 (U+0027 APOSTROPHE)                  |
| `\"`                              | 二重引用符 (U+0022 QUOTATION MARK)              |
| `\\`                              | バックスラッシュ (U+005C REVERSE SOLIDUS)       |
| `\n`                              | 改行 (U+000A LINE FEED; LF)                     |
| `\r`                              | キャリッジリターン (U+000D CARRIAGE RETURN; CR) |
| `\v`                              | 垂直タブ (U+000B LINE TABULATION)               |
| `\t`                              | タブ (U+0009 CHARACTER TABULATION)              |
| `\b`                              | バックスペース (U+0008 BACKSPACE)               |
| `\f`                              | ページ送り (U+000C FORM FEED)                   |
| `\` の直後に[改行文字](#改行文字) | 空文字列                                        |

最後のエスケープシーケンス、`\` に改行が続くものは、文字列リテラルをその意味を変えずに複数行に分割するのに有益なものです。

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

バックスラッシュの後に空白文字や他の文字（改行を除く）がないことを確認してください、そうでなければ動作しません。次の行がインデントされている場合、余分な空間が文字列の値にも存在します。

また、[`+`](/ja/docs/Web/JavaScript/Reference/Operators/Addition) 演算子を使用して、次のように複数の文字列を連結することもできます。

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

上記の方法はどちらも同じ文字列になります。

#### 16 進エスケープシーケンス

16 進エスケープシーケンスは `\x` に続いてちょうど 2 桁の 16 進数から成り、 0x0000 から 0x00FF までのコード単位またはコードポイントを表します。

```js
"\xA9"; // "©"
```

#### Unicode エスケープシーケンス

Unicode エスケープシーケンスは `\u` に続いてちょうど 4 桁の 16 進数から成ります。これで UTF-16 エンコーディングのコード単位を表します。コードポイント U+0000 から U+FFFF までは、コード単位とコードポイントは等しくなります。コードポイント U+10000 から U+10FFFF までは、 2 つのエスケープシーケンスで 2 つのコード単位 (サロゲートペア) を表す必要があります。サロゲートペアはコードポイントで区別されます。

{{jsxref("String.fromCharCode()")}} および {{jsxref("String.prototype.charCodeAt()")}} も参照してください。

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode コードポイントエスケープ

Unicode コードポイントエスケープは `\u{` に続いて 16 進数のコードポイントが続き、 `}` が続きます。 16 進数の値は 0 から 0x10FFFF までの範囲に含まれている必要があります。 U+10000 から U+10FFFF までの範囲のコードポイントを、サロゲートペアとして表す必要はありません。

{{jsxref("String.fromCodePoint()")}} または {{jsxref("String.prototype.codePointAt()")}} も参照してください。

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// 同じ文字をサロゲートペアで表したもの
"\uD87E\uDC04";
```

### 正規表現リテラル

正規表現リテラルは2つのスラッシュ (`/`) で囲まれます。字句解析器は、スラッシュが文字クラス (`[]`) 内に現れない限り、エスケープされていない次のスラッシュまたは行の終わりまでのすべての文字を処理します。一部の文字（すなわち、[識別子の一部](#識別子)）は、閉じスラッシュの後に現れることがあり、これはフラグを表します。

字句文法はとても甘く、1 つのトークンとして取得される正規表現リテラルがすべて有効な正規表現とは限りません。

詳細については {{jsxref("RegExp")}} を参照してください。

```js-nolint
/ab+c/g
/[/]/
```

正規表現リテラルは 2 つのスラッシュ (`//`) で始めることはできません。空の正規表現を指定するには `/(?:)/` を使用してください。

### テンプレートリテラル

一つのテンプレートリテラルは、複数のトークンから成ります。`` `xxx${``（テンプレートの先頭）、`}xxx${`（テンプレートの中間）、``}xxx` ``（テンプレートの末尾）は個別のトークンであり、これらの間にはどのような式が入ってもかまいません。

詳細について、[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)を参照してください。

```js-nolint
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`
```

## 自動セミコロン挿入

一部の [JavaScript 文](/ja/docs/Web/JavaScript/Reference/Statements)は、末尾にセミコロン (`;`) が必要です。これには次のようなものがあります。

- [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var), [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let), [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const)
- [式文](/ja/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/ja/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/ja/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/ja/docs/Web/JavaScript/Reference/Statements/break), [`return`](/ja/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/ja/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/ja/docs/Web/JavaScript/Reference/Statements/debugger)
- クラスフィールド宣言（[パブリック](/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields)または[プライベート](/ja/docs/Web/JavaScript/Reference/Classes/Private_properties)）
- [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import), [`export`](/ja/docs/Web/JavaScript/Reference/Statements/export)

しかし、JavaScriptはこの言語をより手軽で便利なものにするために、トークンストリームを処理する際にセミコロンを自動的に挿入することがあり、不正なトークン列を有効な構文に「修正」することができます。この手順は、プログラムテキストが字句文法に従ってトークンに解釈された後に行われます。セミコロンが自動的に挿入されるケースは 3 つあります。

1\. 文法上許されないトークンに出会ったとき、それが前のトークンから少なくとも 1 つの[改行文字](#改行文字)（1 つ以上の改行を含むブロックコメントを含む）で区切られているか、そのトークンが "}" であれば、その前にセミコロンが挿入されます。

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

```js-nolint
do {
  // ...
} while (condition) /* ; */ // ASI が行われる
const a = 1
```

しかし、セミコロンが [`for`](/ja/docs/Web/JavaScript/Reference/Statements/for) 文の頭の区切り文字になる場合は、セミコロンは挿入されません。

```js-nolint example-bad
for (
  let a = 1 // ASI は行われない
  a < 10 // ASI は行われない
  a++
) {}
```

また、セミコロンが[空文](/ja/docs/Web/JavaScript/Reference/Statements/Empty)として挿入されることもありません。例えば、下記のコードで ")" の後にセミコロンが挿入された場合、空の文がif文の本体となり、`const` 宣言が別個の文となるため、このコードは有効になります。しかし、自動的に挿入されたセミコロンは空文にはならないため、[宣言](/ja/docs/Web/JavaScript/Reference/Statements#文と宣言の違いについて)が `if` 文の本体となってしまい、無効になります。

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. トークンの入力ストリームの末尾が検出され、パーサーが単一の入力ストリームを完全なプログラムとして解釈できない場合、末尾にセミコロンが挿入されます。

```js-nolint
const a = 1 /* ; */ // ASI が行われる
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
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

これは有効な構文になります。`1[1,2,3]` は[カンマ](/ja/docs/Web/JavaScript/Reference/Operators/Comma_operator)で結合された式の[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)です。そのため、コードを実行すると "1 is not a function" や "Cannot read properties of undefined (reading 'forEach')" などのエラーが発生することになります。

クラス内では、クラスフィールドやジェネレーターメソッドも落とし穴になることがあります。

```js-nolint example-bad
class A {
  a = 1
  *gen() {}
}
```

これは次のようになります。

```js-nolint example-bad
class A {
  a = 1 * gen() {}
}
```

したがって、 `{` のあたりで構文エラーになります。

セミコロンなしのスタイルを強制したい場合、ASI を扱うには以下の経験則があります。

- 後置型 `++` および `--` はオペランドと同じ行に置きましょう。

  ```js-nolint example-bad
  const a = b
  ++
  console.log(a) // ReferenceError: Invalid left-hand side expression in prefix operation
  ```

  ```js-nolint example-good
  const a = b++
  console.log(a)
  ```

- `return`, `throw`, `yield` の後の式は、キーワードと同じ行に置きましょう。

  ```js-nolint example-bad
  function foo() {
    return
      1 + 1 // Returns undefined; 1 + 1 is ignored
  }
  ```

  ```js-nolint example-good
  function foo() {
    return 1 + 1
  }

  function foo() {
    return (
      1 + 1
    )
  }
  ```

- 同様に、`break` や `continue` の後のラベル識別子は、キーワードと同じ行に置きましょう。

  ```js-nolint example-bad
  outerBlock: {
    innerBlock: {
      break
        outerBlock // SyntaxError: Illegal break statement
    }
  }
  ```

  ```js-nolint example-good
  outerBlock: {
    innerBlock: {
      break outerBlock
    }
  }
  ```

- アロー関数の `=>` は引数と同じ行に置きましょう。

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- 非同期関数やメソッドなどの `async` の直後に改行を置くことはできません。

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- `(`, `[`, `` ` ``, `+`, `-`, `/`（正規表現リテラルとして）のいずれかで始まる行は、その前にセミコロンを置くか、前の行をセミコロンで終わらせるかしましょう。

  ```js-nolint example-bad
  // この () は前の行と結合して関数呼び出しとなる可能性がある
  (() => {
    // ...
  })()

  // この [ は前の行と結合してプロパティアクセスとなる可能性がある
  [1, 2, 3].forEach(console.log)

  // この ` は前の行と結合してタグ付きテンプレートリテラルとなる可能性がある
  `string text ${data}`.match(pattern).forEach(console.log)

  // この + は前の行と結合して二項 + 式となる可能性がある
  +a.toString()

  // この - は前の行と結合して二項 - 式となる可能性がある
  -a.toString()

  // この / は前の行と結合して除算式となる可能性がある
  /pattern/.exec(str).forEach(console.log)
  ```

  ```js-nolint example-good
  ;(() => {
    // ...
  })()
  ;[1, 2, 3].forEach(console.log)
  ;`string text ${data}`.match(pattern).forEach(console.log)
  ;+a.toString()
  ;-a.toString()
  ;/pattern/.exec(str).forEach(console.log)
  ```

- クラスのフィールドは、できれば常にセミコロンで終わるようにしましょう。一つ前のルール（フィールド宣言の後に[計算されたプロパティ](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names)が続くと、その後は `[` で始まる）に加えて、セミコロンはフィールド宣言とジェネレーターメソッドの間にも必要です。

  ```js-nolint example-bad
  class A {
    a = 1
    [b] = 2
    *gen() {} // Seen as a = 1[b] = 2 * gen() {}
  }
  ```

  ```js-nolint example-good
  class A {
    a = 1;
    [b] = 2;
    *gen() {}
  }
  ```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [文法とデータ型](/ja/docs/Web/JavaScript/Guide/Grammar_and_types)ガイド
- [Micro-feature from ES6, now in Firefox Aurora and Nightly: binary and octal numbers](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/) by Jeff Walden (2013)
- [JavaScript character escape sequences](https://mathiasbynens.be/notes/javascript-escapes) by Mathias Bynens (2011)
