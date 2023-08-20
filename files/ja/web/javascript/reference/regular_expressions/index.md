---
title: 正規表現
short-title: 概要
slug: Web/JavaScript/Reference/Regular_expressions
l10n:
  sourceCommit: fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{JsSidebar}}

**正規表現**（略して _regex_）は、開発者が文字列をパターンと照合したり、部分一致情報を抽出したり、単に文字列がそのパターンに適合するかどうかを検査したりすることができます。正規表現は多くのプログラミング言語で使われており、JavaScript の構文は [Perl](https://www.perl.org/) から影響を受けています。

利用できる正規表現の構文とこれらがどのように動作するのかの概要を把握するために、[正規表現ガイド](/ja/docs/Web/JavaScript/Guide/Regular_expressions)を読むことをお勧めします。

## 解説

[正規表現](https://ja.wikipedia.org/wiki/正規表現)は、形式言語理論における重要な概念です。正規表現は、文字列の無限集合（「言語」と呼ばれる）を記述する方法です。正規表現の核となるのは以下の機能です：

- その言語で使用できる「文字」の集合。これは「アルファベット」と呼ばれます。
- 連結: `ab` は「文字 `a` に続く文字 `b`」を意味しています。
- 論理和: `a|b` は「`a` か `b` のどちらか」を意味しています。
- クリーネスター: `a*` は「0文字以上の `a` 文字」を意味しています。

有限のアルファベット（英語のアルファベット 26 文字や Unicode 文字集合全体など）とみなされると、すべての正規言語は上記の機能によって生成することができます。もちろん、多くのパターンはこの方法で表現するのはとても面倒なので (「10 桁の数字」や「空白文字ではない文字」など)、JavaScript の正規表現には下記に紹介するような多くの略記法が含まれています。

> **メモ:** JavaScriptの正規表現は[後方参照](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)が存在するため、実際には正規表現ではありません（正規表現は有限状態を持つ必要があります）。しかし、それでもとても有益な機能です。

### 正規表現の作成

正規表現は通常、パターンをスラッシュ (`/`) で囲んでリテラルとして作成します。

```js
const regex1 = /ab+c/g;
```

正規表現は {{jsxref("RegExp/RegExp", "RegExp()")}} コンストラクターで作成することもできます。

```js
const regex2 = new RegExp("ab+c", "g");
```

実行時の違いはありませんが、パフォーマンス、静的解析性、およびエスケープ文字のオーサリングの人間工学的な課題に影響を持つことができます。詳しい情報は [`RegExp`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#literal_notation_and_constructor) を参照してください。

### 正規表現フラグ

フラグは、正規表現が解釈される方法や入力テキストとやりとりする方法を変更できる特別な引数です。各フラグは `RegExp`` オブジェクトの 1 つのアクセサープロパティに対応します。

| フラグ | 説明                                                                                   | 対応するうプロパティ                          |
| ---- | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`  | 部分文字列の一致のインデックスを生成します。                                                       | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | グローバル検索です                                                                                | {{jsxref("RegExp/global", "global")}}           |
| `i`  | 大文字小文字を区別しない検索です。                                                                      | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | 改行文字を `^` および `$` と一致させます。                                               | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | `.` を改行文字と一致させます。                                                       | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | "Unicode" です。パターンを Unicode コードポイントの並びとして扱います。                              | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | `u` モードをアップグレードし、もっと多くの Unicode 機能を使用可能にします。                                        | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | 対象とする文字列の現在位置から始めて一致する「粘着」(sticky) 検索を行います。 | {{jsxref("RegExp/sticky", "sticky")}}           |

以下の一覧は、利用できるすべての正規表現構文を、構文の性質ごとに分類したものです。

### アサーション

アサーションは、文字列が指定した位置で特定の条件を満たすかどうかを検査する構文です。アサーションは[数量化](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)できません。

- [入力境界アサーション: `^`, `$`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
  - : 現在の位置が入力の開始または終了であること、または `m` フラグが設定されている場合は、行の開始または終了であることを表します。
- [先読みアサーション: `(?=...)`, `(?!...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
  - : 現在の位置が特定のパターンの後に来ること、または来ないことを表します。
- [後読みアサーション: `(?<=...)`, `(?<!...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
  - : 現在の位置が特定のパターンの前に来ること、または来ないことを表します。
- [単語境界アサーション: `\b`, `\B`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
  - : 現在の位置が単語境界であることを表します。

### アトム

アトムは正規表現の最も基本的な単位です。各アトムは文字列中の 1 つ以上の文字を「消費」し、照合に失敗するか、次のアトムでパターンの照合を続けかのどちらかです。

- [後方参照: `\1`, `\2`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
  - : その前でキャプチャグループに一致し、捕捉されたサブパターンに一致します。
- [キャプチャグループ: `(...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
  - : サブパターンに一致し、一致した情報を記憶します。
- [文字クラス: `[...]`, `[^...]`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
  - : ある文字集合に含まれる、または含まれない文字と一致します。[`v`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) フラグを有効にすると、可変長の文字列にも一致するように使用することができます。
- [文字クラスエスケープ: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
  - : あらかじめ設定された文字集合に含まれる、または含まれない文字と一致します。
- [文字エスケープ: `\n`, `\u{...}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
  - : リテラル形式では表現しにくい文字と一致します。
- [リテラル文字: `a`, `b`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
  - : 特定の文字と一致します。
- [名前付き後方参照: `\k<name>`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
  - : その前で名前付きキャプチャグループに一致し、捕捉されたサブパターンに一致します。
- [名前付きキャプチャグループ: `(?<name>...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
  - : サブパターンに一致し、一致した情報を記憶します。このグループは、パターン内のインデックスではなく、独自の名前で識別することができます。
- [非キャプチャグループ: `(?:...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
  - : 一致した情報を記憶することなく、サブパターンに一致します。
- [Unicode 文字クラスエスケープ: `\p{...}`, `\P{...}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
  - : Unicode プロパティを指定します。[`v`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) フラグを有効にすると、可変長の文字列にも一致するように使用することができます。
- [ワイルドカード: `.`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
  - : `s` フラグが設定されていない限り、改行以外の文字と一致します。

### その他の機能

これらの機能はそれ自身はパターンを指定しませんが、パターンを構成するために使用します。

- [論理和: `|`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
  - : `|` 文字で区切られた選択肢の集合のいずれかと一致します。
- [修飾子: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
  - : アトムに一定回数一致します。

### エスケープシーケンス

正規表現における「エスケープシーケンス」とは、`\` の後に 1 つ以上の文字が続くことで形成される構文のことを指します。以下は有効なエスケープシーケンスの一覧です。

| エスケープシーケンス | 続くもの                                                       | 意味                                                                                                                |
| --------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `\B`            | なし                                                              | [非単語境界アサーション][WBA]                                                                                     |
| `\D`            | なし                                                              | [文字クラスエスケープ][CCE]で、数字以外の文字を表す                                                        |
| `\P`            | `{`、Unicode プロパティや値、`}`                    | [Unicode 文字クラスエスケープ][UCCE]で、指定された Unicode プロパティ以外の文字を表す                  |
| `\S`            | なし                                                              | [文字クラスエスケープ][CCE]で、ホワイトスペース文字以外を表す                                                  |
| `\W`            | なし                                                              | [文字クラスエスケープ][CCE]で、言語文字以外を表す                                                         |
| `\b`            | なし                                                              | [単語境界アサーション][WBA]。[文字クラス][CC]の中では U+0008 (BACKSPACE) を表す                         |
| `\c`            | `A` から `Z` または `a` から `z`                            | [文字エスケープ][CE]で、値がその文字の 32 で割った余りとなる制御文字表す |
| `\d`            | なし                                                              | [文字クラスエスケープ][CCE]で、数字（`0` から `9`）を表す                                               |
| `\f`            | なし                                                              | [文字エスケープ][CE]で、 U+000C (FORM FEED) を表す                                                                |
| `\k`            | `<`、識別子、`>`                                      | [名前付き後方参照][NBR]                                                                                           |
| `\n`            | なし                                                              | [文字エスケープ][CE]で、U+000A (LINE FEED) を表す                                                                |
| `\p`            | `{`、Unicode プロパティや値、`}`                    | [Unicode 文字クラスエスケープ][UCCE]で、指定された Unicode プロパティの文字を表す                     |
| `\q`            | `{`、文字列、`}`                                         | [`v` モードの文字クラス][VCC]のみで有効。文字通り一致させる文字列を表す                     |
| `\r`            | なし                                                              | [文字エスケープ][CE]で、U+000D (CARRIAGE RETURN) を表す                                                          |
| `\s`            | なし                                                              | [文字クラスエスケープ][CCE]で、ホワイトスペース文字を表す                                                       |
| `\t`            | なし                                                              | [文字エスケープ][CE]で、U+0009 (CHARACTER TABULATION) を表す                                                     |
| `\u`            | 4 桁の 16 進数、または `{`、1 ～ 6 桁の 16 進数、`}` | [文字エスケープ][CE]で、指定されたコードポイントの文字を表す                                            |
| `\v`            | なし                                                              | [文字エスケープ][CE]で、U+000B (LINE TABULATION) を表す                                                          |
| `\w`            | なし                                                              | [文字クラスエスケープ][CCE]で、言語文字を（`A` ～ `Z`, `a` ～ `z`, `0` ～ `9`, `_`）を表す                   |
| `\x`            | 2 桁の 16 進数                                              | [文字エスケープ][CE]で、指定された値の文字を表す                                                 |
| `\0`            | なし                                                              | [文字エスケープ][CE]で、U+0000 (NULL) を表す                                                                     |

[CC]: /ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class
[CCE]: /ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape
[CE]: /ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape
[NBR]: /ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference
[UCCE]: /ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
[VCC]: /ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v_モード文字クラス
[WBA]: /ja/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion

`\` \ に他の数字が続くと[古い 8 進数のエスケープシーケンス](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#エスケープシーケンス)になり、[Unicode 対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)では禁止されています。

加えて、`\` には一部の記号や数字を続けることができ、この場合、エスケープシーケンスは常にエスケープされる文字自身を表す[文字エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)となります。

- `\$`, `\(`, `\)`, `\*`, `\+`, `\.`, `\/`, `\?`, `\[`, `\\`, `\]`, `\^`, `\{`, `\|`, `\}`: valid everywhere
- `\-`: [文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)の中でのみ有効
- `\!`, `\#`, `\%`, `\&`, `\,`, `\:`, `\;`, `\<`, `\=`, `\>`, `\@`, `` \` ``, `\~`: [`v` モード文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v_モード文字クラス)の中でのみ有効

他にも ASCII 文字、すなわち空白文字、`"`、`'`、`_`、そして上記以外の文字は有効なエスケープシーケンスではありません。[Unicode 非対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)では、上記のいずれでもないエスケープシーケンスは識別エスケープとなり、バックスラッシュに続く文字を表します。例えば、`\a` は文字 `a` を表します。この動作は、後方互換性の課題を発生させることなく新しいエスケープシーケンスを導入する能力を制限するため、Unicode 対応モードでは禁止されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [正規表現ガイド](/ja/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
