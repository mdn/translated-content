---
title: "文字クラス: [...], [^...]"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class
l10n:
  sourceCommit: 3c33463072905e81ac620dd9780313369029b498
---

{{JsSidebar}}

**文字クラス**は、独自の文字集合に含まれる、または含まれない文字に一致します。[`v`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) フラグを有効にすると、可変長のの文字列にも使用することができます。

## 構文

```regex
[]
[abc]
[A-Z]

[^]
[^abc]
[^A-Z]

// `v` モードのみ
[operand1&&operand2]
[operand1--operand2]
[\q{substring}]
```

### 引数

- `operand1`, `operand2`
  - : 単一の文字、他の角括弧で囲まれた文字クラス、[文字クラスエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)、[Unicode 文字クラスエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)、または `\q` 構文を使用した文字列の何れかをとることができます。
- `substring`
  - : リテラル文字列です。

## 解説

文字クラスは角括弧で囲まれた文字のリストを指定し、リスト内の任意の文字と照合します。 [`v`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) フラグは、文字クラスの解釈方法を大きく変えます。以下の構文は `v` モードでも `v` モードでなくても使用できます。

- 単一の文字: その文字自体に一致します。
- 文字の範囲: その範囲のいずれかの文字に一致します。範囲はダッシュ (`-`) で区切られた 2 文字で指定します。最初の文字は、2 つ目の文字よりも文字値が小さくなければなりません。文字値はこの文字の Unicode コードポイントです。Unicode コードポイントは通常アルファベット順に割り当てるので、`[a-z]` はすべて小文字のラテン文字を指定し、`[α-ω]` はすべて小文字のギリシャ文字を指定します。[Unicode 非対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)では、正規表現は [BMP](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター) 文字の並びとして解釈されます。したがって、文字クラスのサロゲートペアは 1 文字ではなく 2 文字を表します。詳細は下記を参照してください。
- エスケープシーケンス: `\b`、`\-`、[文字クラスエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)、[Unicode 文字クラスエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)、その他の[文字エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)。

これらの構文は何回でも使うことができ、それらが表す文字集合は結合されます。例えば、`/[a-zA-Z0-9]/` は任意の文字や数字に一致します。

文字クラスの接頭辞 `^` は「補集合クラス」を作成します。例えば、`[^abc]` は `a`、`b`、`c` 以外の文字に一致します。`^` の文字は文字クラスの途中に現れた場合はリテラル文字になります。例えば、 `[a^b]` は `a`、`^`、`b` に一致します。

[字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#regular_expression_literals)は正規表現リテラルをとても寛容に解釈し、文字クラス内に現れる `/` 文字で正規表現リテラルが終わらないようにします。これは `/[/]/` が `/` をエスケープしなくても有効であることを意味しています。

文字範囲の境界に複数の文字を指定することはできません。これは[文字クラスのエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)を使用した場合に起こります。例えば次のようなものです。

```js
/[\s-9]/u; // SyntaxError: Invalid regular expression: Invalid character class
```

[Unicode 非対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)では、1 つの境界が文字クラスである文字範囲は、`-` がリテラル文字になります。これは[ウェブの互換性のために非推奨](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)です。

```js
/[\s-9]/.test("-"); // true
```

[Unicode 非対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)では、正規表現は BMP 文字列として解釈されます。そのため、文字クラスのサロゲートペアは 1 文字ではなく 2 文字を表します。

```js
/[😄]/.test("\ud83d"); // true
/[😄]/u.test("\ud83d"); // false

/[😄-😛]/.test("😑"); // SyntaxError: Invalid regular expression: /[😄-😛]/: Range out of order in character class
/[😄-😛]/u.test("😑"); // true
```

パターンが[大文字小文字を無視する](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)場合でも、範囲の両端の大文字小文字は、どの文字がその範囲に属するかを決定する上で重要です。例えば、パターン `/[E-F]/i` は `E`、`F`、`e`、`f` にのみ一致しますが、パターン `/[E-f]/i` はすべての大文字と小文字の ASCII 文字（`E–Z` と `a–f` にまたがるため）、および `[`、`\`、`]`、`^`、`_`、`` ` `` に一致します。

### v モードでない場合の文字クラス

`v` モードでない場合の文字クラスは、ほとんどの文字を[文字通り](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)に解釈し、格納する文字に関する制限はあまりありません。例えば、`.` は[ワイルドカード](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)ではなく、ドット文字のリテラルです。文字通りに現れることができない文字は、`\`、`]`、`-` だけです。

- 文字クラスでは、`\b`、`\B`、[後方参照](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)を除き、ほとんどのエスケープシーケンスに対応しています。`\b` は[単語境界](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)の代わりにバックスペース文字を示し、他の 2 種類は構文エラーが発生します。`\` をリテラルとして使用して使用するには、`\\` とエスケープしてください。
- `]` 文字は文字クラスの終わりを示します。リテラルとして使用するには、`\]` とエスケープしてください。
- ダッシュ (`-`) 文字は、2 つの文字の間に使用すると範囲を示します。文字クラスの先頭や末尾に現れる場合は、リテラル文字です。範囲の境界で使用する場合もリテラル文字です。例えば、`[a-]` は `a` と `-` に一致し、`[!--]` は `!` から `-` に一致し、`[--9]` は `-` から `9` に一致します。また、文字どおり任意の場所で使用したい場合は、`\-` でエスケープすることもできます。

### v モード文字クラス

`v` モードでは文字クラスの基本的な考え方は変わりません。ほとんどの文字をリテラルを使用して、`-` を使用して文字範囲を表し、エスケープシーケンスを使用することができます。`v` フラグの最も重要な機能の 1 つは、文字クラス内での「セット表記」です。前回述べたように、通常の文字クラスは 2 つの範囲を連結することで論理和を発生させることができます。例えば、`[A-Z0-9]` を使用して「集合 `[A-Z]` と集合 `[0-9]` の論理和」を意味しています。しかし、交差や差のような文字集合を使った他の処理を表す簡単な方法はありません。

`v` フラグを使うと、交差は `&&` で表現され、差集合は `--` で表現されます。どちらもない場合は論理和となります。または `--` の 2 つのオペランドは文字、文字エスケープ、文字クラスエスケープ、別の文字クラスのいずれかを取ることができます。例えば、「アンダースコアでない単語文字」を表すには `[ \w--_]` を使うことができます。同じレベルの演算子を混合することはできません。例えば、`[\w&&[A-z]--_]` は構文エラーになります。しかし、文字クラスは入れ子にすることができるので、`[\w&&[[A-z]--_]]` や `[[\w&&[A-z]]--_]`（どちらも `[A-Za-z]` を意味している）と書くことで明示的にすることができます。同様に、`[AB--C]` は無効なので、`[A[B--C]]`（これは単に `[AB]` を意味している）と書く必要があります。

`v` モードでは、[Unicode 文字クラスエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) `\p` は、絵文字のような可変長の文字列と一致させることができます。対称性のために、通常の文字クラスも複数の文字に一致することができます。文字クラスで「文字列リテラル」を書くには、その文字列を `\q{...}` で囲みます。ここで対応している正規表現構文は[論理和](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)のみです。それとは別に、`\q` で完全にリテラル（エスケープ文字を含む）を囲む必要があります。これにより、文字クラスは有限個の可能性を持つ可変長文字列にのみ一致することを保証します。

文字クラスの構文がより洗練されるようになり、より多くの文字が予約され、文字通りに現れることが禁止されます。

- `]` と `\` に加え、`(`、`)`、`[`、`{`、`}`、`/`、`-`、`|` の文字は、文字クラス内で文字通りに表わす場合、エスケープする必要があります。このリストは[構文文字](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)のリストと多少似ていますが、`^`、`$`、`*`、`+`、`?` は文字クラス内部では予約されておらず、`/` と `-` は文字クラス外部では予約されていません（`/` は正規表現リテラルを区切り文字とする可能性があるため、エスケープする必要がありますが）。これらの文字はすべて、オプションで `u` モード文字クラスでもエスケープできます。
- 「二重区切り記号」シーケンス、`&&`、`!!`、`##`、`$$`、`%%`、`**`、`++`、`,,`、`..`、`::`、`;;`、`<<`、`==`、`>>`、`??`、`@@`、`^^`、` `` `、`~~` も同様にエスケープする必要があります（ただし、`v` フラグがないとあまり意味がありません）。`u` モードでは、これらの文字のいくつかは文字クラス内にしか現れず、エスケープすると構文エラーが発生します。`v` モードでは、ペアで現れる場合はエスケープしなければなりませんが、単独で現れる場合はオプションでエスケープすることができます。例えば、`/[\!]/u` は[識別エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)なので無効ですが、`/[\!]/v` と `/[!]/v` の両方は有効で、`/[!!]/v` は無効です。[リテラル文字](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)参照には、どの文字がエスケープまたはアンエスケープされて現れるかの詳細な表があります。

補集合文字クラス `[^...]` は 1 文字より長い文字列と一致することはできません。 例えば、`[\q{ab|c}]` は有効で文字列 `"ab"` と一致しますが、`[^\q{ab|c}]` は何文字が消費されるかが不明なので無効です。このチェックは、すべての `\q` が単一の文字を格納し、すべての `\p` が文字プロパティを指定しているかどうかを調べることで行われます。和集合の場合、オペランドはすべて純粋な文字でなければなりません。交差の場合、少なくとも 1 つのオペランドは純粋な文字でなければなりません。差集合の場合、左端のオペランドは純粋な文字でなければなりません。つまり、`/[^q{ab|c}--q{ab}]/v` は `/[^c]/v` と等価ですが、拒否されます。

### 補集合クラスと大文字小文字を区別しない照合

`v` モードでない場合、補集合文字クラス `[^...]` は単純に照合結果を反転させるものとして実装されています。つまり、`[...]` が一致しない場合は常に `[^...]` が一致し、その逆も同様です。しかし、`\P{...}` や `\W` のような他の補集合クラスは、指定したプロパティを持たないすべての文字からなる集合を独自に設定することで動作します。これらは同じ動作をするように見えますが、[大文字と小文字を区別する](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)照合と一致するとより複雑になります。

以下の 2 つの正規表現を考えてみましょう。

```js
const r1 = /\p{Lowercase_Letter}/iu;
const r2 = /[^\P{Lowercase_Letter}]/iu;
```

`r2` は二重否定で、`r1` と等価のように見えます。しかし、実際には `r1` は小文字と大文字の ASCII 文字すべてに一致しますが、`r2` は一致しません。どのように動作するのかを説明するために、Unicode 文字集合全体ではなく、ASCII 文字だけを扱っていると仮定し、`r1` と `r2` を下記のように指定してみましょう。

```js
const r1 = /[a-z]/iu;
const r2 = /[^A-Z]/iu;
```

大文字小文字を区別しない照合は、パターンと入力を同じ大文字小文字に変換することによって行われます（詳細は {{jsxref("RegExp/ignoreCase", "ignoreCase")}} を参照してください）。`r1` の場合、文字クラス `a-z` は大文字小文字を区別した後も同じままですが、大文字と小文字の ASCII 文字列の入力は小文字に変換されるので、 `r1` は `"A"` と `"a"` の両方に一致することができます。`r2` の場合、文字クラス `A-Z` は `a-z` に変換されますが、`^` は照合結果を否定するので、実質的に `[^A-Z]` は大文字の文字列にのみ一致します。しかし、大文字と小文字の ASCII 文字列の入力は小文字に変換されたままなので、`r2` は何にも一致しません。

`v` モードでは、この動作は修正されました。`[^...]` も一致した結果を否定する代わりに、補集合クラスを貪欲に構築します。これにより、`[^\P{Lowercase_Letter}]` と `\p{Lowercase_Letter}` は厳密に等価になります。

## 例

### 16 進数の桁との照合

次の関数は、文字列が有効な 16 進数を格納しているかどうかを判定します。

```js
function isHexadecimal(str) {
  return /^[0-9A-F]+$/i.test(str);
}

isHexadecimal("2F3"); // true
isHexadecimal("beef"); // true
isHexadecimal("undefined"); // false
```

### 交差の使用

次の関数はギリシャ語の文字に一致します。

```js
function greekLetters(str) {
  return str.match(/[\p{Script_Extensions=Greek}&&\p{Letter}]/gv);
}

// 𐆊 is U+1018A GREEK ZERO SIGN
greekLetters("π𐆊P0零αAΣ"); // [ 'π', 'α', 'Σ' ]
```

### 差集合の使用

以下の関数は、非 ASCII の数字に一致します。

```js
function nonASCIINumbers(str) {
  return str.match(/[\p{Decimal_Number}--[0-9]]/gv);
}

// 𑜹 is U+11739 AHOM DIGIT NINE
nonASCIINumbers("𐆊0零1𝟜𑜹a"); // [ '𝟜', '𑜹' ]
```

### 文字列の照合

以下の関数は、[改行文字](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#改行文字)や `\r\n` (CRLF) シーケンスを含むすべての行末シーケンスに一致します。

```js
function getLineTerminators(str) {
  return str.match(/[\r\n\u2028\u2029\q{\r\n}]/gv);
}

getLineTerminators(`
A poem\r
Is split\r\n
Into many
Stanzas
`); // [ '\r', '\r\n', '\n' ]
```

この例は、短いという点を除けば `/(?:\r|\n|\u2028|\u2029|\r\n)/gu` or `/(?:[\r\n\u2028\u2029]|\r\n)/gu` とまったく同じです。

`\q{}` の最も有益な用途は、差分と交差を行う場合です。前回までは[複数の先読み](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection)で使用可能でした。以下の関数はアメリカ、中国、ロシア、イギリス、フランスのどれでもない国旗に一致します。

```js
function notUNSCPermanentMember(flag) {
  return /^[\p{RGI_Emoji_Flag_Sequence}--\q{🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷}]$/v.test(flag);
}

notUNSCPermanentMember("🇺🇸"); // false
notUNSCPermanentMember("🇩🇪"); // true
```

この例は、おそらくもっと効率が良いという以外は、`/^(?!🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷)\p{RGI_Emoji_Flag_Sequence}$/v` とほぼ同じです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [正規表現リファレンス](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [文字クラスエスケープ: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Unicode 文字クラスエスケープ: `\p{...}`, `\P{...}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [リテラル文字: `a`, `b`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [文字エスケープ: `\n`, `\u{...}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [論理和: `|`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [RegExp v flag with set notation and properties of strings](https://v8.dev/features/regexp-v-flag) on v8.dev (2022)
