---
title: "文字エスケープ: \\n, \\u{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Character_escape
l10n:
  sourceCommit: fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{JsSidebar}}

**文字エスケープ**は、リテラルの形ではうまく表現できない文字を表します。

## 構文

```regex
\f, \n, \r, \t, \v
\cA, \cB, …, \cz
\0
\^, \$, \\, \., \*, \+, \?, \(, \), \[, \], \{, \}, \|, \/

\xHH
\uHHHH
\u{HHH}
```

> **メモ:** `,` は構文の一部ではありません。

### 引数

- `HHH`
  - : 文字の Unicode コードポイントを表す 16 進数です。`xHH` 形式の場合は 16 進数 2 桁、`uHHHH` 形式の場合は 4 桁、`\u{HHH}` 形式の場合は 16 進数 1 桁から 6 桁を持つことができます。

## 解説

以下の文字エスケープが正規表現内で認識されます。

- `\f`, `\n`, `\r`, `\t`, `\v`
  - : [文字リテラル](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#エスケープシーケンス)のものと同じですが、`\b` は[単語境界](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)となります（[文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)でない限り）。
- `\c` に `A` から `Z` または `a` から `z` が続いたもの
  - : 32 で割った余りに等しい値の制御文字を表します。例えば、`J` のコードポイントは 74 であり、74 を 32 で割ると改行のコードポイントである 10 であるため、`cJ` は改行 (`\n`) を表します。大文字と小文字の形式は 32 だけ異なるので、`\cJ` と `\cj` は等価です。この形で 1 から 26 までの制御文字を表すことができます。
- `\0`
  - : U+0000 NUL 文字を表します。数字を続けてはいけまません（[古い 8 進数エスケープ](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#エスケープシーケンス)シーケンスになります）。
- `\^`, `\$`, `\\`, `\.` `\*`, `\+`, `\?`, `\(`, `\)`, `\[`, `\]`, `\{`, `\}`, `\|`, `\/`
  - : 文字自体を表します。例えば、`\\` はバックスラッシュを表し、`\(` は左括弧を表します。これらは正規表現内（`/` は正規表現リテラルの区切り文字です）では[構文文字](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)であるため、[文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)内でない場合はエスケープする必要があります。
- `\xHH`
  - : 指定された Unicode コードポイントを持つ文字を表します。16 進数は正確に 2 桁でなければなりません。
- `\uHHHH`
  - : 指定された Unicode コードポイントを持つ文字を表します。16 進数は正確に 4 桁でなければなりません。このようなエスケープシーケンス 2 つで、[Unicode 対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)ではサロゲートペアを表すのに使用することができます。（Unicode 非対応モードでは常に 2 つの別個の文字になります。）
- `\u{HHH}`
  - : （[Unicode 対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)のみ）指定された Unicode コードポイントを持つ文字を表します。16 進数は 1 桁から 6 桁までです。

[Unicode 非対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)では、上記のいずれでもないエスケープシーケンスは識別エスケープになります。これらはバックスラッシュに続く文字を表します。例えば、`\a` は文字 `a` を表します。この動作は後方互換性の問題を発生させることなく新しいエスケープシーケンスを導入す る能力を制限するため、Unicode 対応モードでは禁止されています。

Unicode 非対応モードでは、`]`、`{`、`}` は文字クラスの末尾や数量詞の区切り文字として解釈できない場合、[文字通り](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)に現れることがあります。これは[ウェブの互換性のために非推奨](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)です。

Unicode 非対応モードでは、[文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)内の `\cX` という形のエスケープシーケンスで、`X` が数字または `_` である場合、ASCII 文字と同じようにデコードされます。`\c0` は 32 で割った余りを取って `\cP` と同じになります。さらに、`\cX` に遭遇したとき `X` が認識された文字の一つでなかった場合、バックスラッシュはリテラル文字として扱われます。これらの構文も非推奨です。

```js
/[\c0]/.test("\x10"); // true
/[\c_]/.test("\x1f"); // true
/[\c*]/.test("\\"); // true
/\c/.test("\\c"); // true
/\c0/.test("\\c0"); // true （\c0 文字は文字クラス内でのみ対応しています）
```

## 例

### 文字エスケープの使用

文字エスケープは、リテラル形式では表しにくい文字と照合したいときに有益です。例えば、正規表現リテラルでは改行は使用できないので、文字エスケープを使用しなければなりません。

```js
const pattern = /a\nb/;
const string = `a
b`;
console.log(pattern.test(string)); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [正規表現リファレンス](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [文字クラス: `[...]`, `[^...]`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [文字クラスエスケープ: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [リテラル文字: `a`, `b`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Unicode 文字クラスエスケープ: `\p{...}`, `\P{...}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [後方参照: `\1`, `\2`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [名前付き後方参照: `\k<name>)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [単語境界アサーション: `\b`, `\B`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
