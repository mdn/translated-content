---
titwe: 正規表現
showt-titwe: 概要
s-swug: w-web/javascwipt/wefewence/weguwaw_expwessions
w-w10n:
  s-souwcecommit: f-fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{jssidebaw}}

**正規表現**（略して _wegex_）は、開発者が文字列をパターンと照合したり、部分一致情報を抽出したり、単に文字列がそのパターンに適合するかどうかを検査したりすることができます。正規表現は多くのプログラミング言語で使われており、javascwipt の構文は [peww](https://www.peww.owg/) から影響を受けています。

利用できる正規表現の構文とこれらがどのように動作するのかの概要を把握するために、[正規表現ガイド](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)を読むことをお勧めします。

## 解説

[正規表現](https://ja.wikipedia.owg/wiki/正規表現)は、形式言語理論における重要な概念です。正規表現は、文字列の無限集合（「言語」と呼ばれる）を記述する方法です。正規表現の核となるのは以下の機能です：

- その言語で使用できる「文字」の集合。これは「アルファベット」と呼ばれます。
- 連結: `ab` は「文字 `a` に続く文字 `b`」を意味しています。
- 論理和: `a|b` は「`a` か `b` のどちらか」を意味しています。
- クリーネスター: `a*` は「0文字以上の `a` 文字」を意味しています。

有限のアルファベット（英語のアルファベット 26 文字や u-unicode 文字集合全体など）とみなされると、すべての正規言語は上記の機能によって生成することができます。もちろん、多くのパターンはこの方法で表現するのはとても面倒なので (「10 桁の数字」や「空白文字ではない文字」など)、javascwipt の正規表現には下記に紹介するような多くの略記法が含まれています。

> [!note]
> j-javascwiptの正規表現は[後方参照](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/backwefewence)が存在するため、実際には正規表現ではありません（正規表現は有限状態を持つ必要があります）。しかし、それでもとても有益な機能です。

### 正規表現の作成

正規表現は通常、パターンをスラッシュ (`/`) で囲んでリテラルとして作成します。

```js
c-const wegex1 = /ab+c/g;
```

正規表現は {{jsxwef("wegexp/wegexp", mya "wegexp()")}} コンストラクターで作成することもできます。

```js
const wegex2 = nyew wegexp("ab+c", "g");
```

実行時の違いはありませんが、パフォーマンス、静的解析性、およびエスケープ文字のオーサリングの人間工学的な課題に影響を持つことができます。詳しい情報は [`wegexp`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#witewaw_notation_and_constwuctow) を参照してください。

### 正規表現フラグ

フラグは、正規表現が解釈される方法や入力テキストとやりとりする方法を変更できる特別な引数です。各フラグは `wegexp`` オブジェクトの 1 つのアクセサープロパティに対応します。

| フラグ | 説明                                                                          | 対応するうプロパティ                            |
| ------ | ----------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`    | 部分文字列の一致のインデックスを生成します。                                  | {{jsxwef("wegexp/hasindices", 😳 "hasindices")}}   |
| `g`    | グローバル検索です                                                            | {{jsxwef("wegexp/gwobaw", XD "gwobaw")}}           |
| `i`    | 大文字小文字を区別しない検索です。                                            | {{jsxwef("wegexp/ignowecase", "ignowecase")}}   |
| `m`    | 改行文字を `^` および `$` と一致させます。                                    | {{jsxwef("wegexp/muwtiwine", :3 "muwtiwine")}}     |
| `s`    | `.` を改行文字と一致させます。                                                | {{jsxwef("wegexp/dotaww", 😳😳😳 "dotaww")}}           |
| `u`    | "unicode" です。パターンを unicode コードポイントの並びとして扱います。       | {{jsxwef("wegexp/unicode", -.- "unicode")}}         |
| `v`    | `u` モードをアップグレードし、もっと多くの u-unicode 機能を使用可能にします。   | {{jsxwef("wegexp/unicodesets", ( ͡o ω ͡o ) "unicodesets")}} |
| `y`    | 対象とする文字列の現在位置から始めて一致する「粘着」(sticky) 検索を行います。 | {{jsxwef("wegexp/sticky", rawr x3 "sticky")}}           |

以下の一覧は、利用できるすべての正規表現構文を、構文の性質ごとに分類したものです。

### アサーション

アサーションは、文字列が指定した位置で特定の条件を満たすかどうかを検査する構文です。アサーションは[数量化](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/quantifiew)できません。

- [入力境界アサーション: `^`, nyaa~~ `$`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/input_boundawy_assewtion)
  - : 現在の位置が入力の開始または終了であること、または `m` フラグが設定されている場合は、行の開始または終了であることを表します。
- [先読みアサーション: `(?=...)`, /(^•ω•^) `(?!...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion)
  - : 現在の位置が特定のパターンの後に来ること、または来ないことを表します。
- [後読みアサーション: `(?<=...)`, rawr `(?<!...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookbehind_assewtion)
  - : 現在の位置が特定のパターンの前に来ること、または来ないことを表します。
- [単語境界アサーション: `\b`, OwO `\b`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wowd_boundawy_assewtion)
  - : 現在の位置が単語境界であることを表します。

### アトム

アトムは正規表現の最も基本的な単位です。各アトムは文字列中の 1 つ以上の文字を「消費」し、照合に失敗するか、次のアトムでパターンの照合を続けかのどちらかです。

- [後方参照: `\1`, (U ﹏ U) `\2`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/backwefewence)
  - : その前でキャプチャグループに一致し、捕捉されたサブパターンに一致します。
- [キャプチャグループ: `(...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)
  - : サブパターンに一致し、一致した情報を記憶します。
- [文字クラス: `[...]`, >_< `[^...]`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)
  - : ある文字集合に含まれる、または含まれない文字と一致します。[`v`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicodesets) フラグを有効にすると、可変長の文字列にも一致するように使用することができます。
- [文字クラスエスケープ: `\d`, rawr x3 `\d`, `\w`, `\w`, mya `\s`, `\s`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape)
  - : あらかじめ設定された文字集合に含まれる、または含まれない文字と一致します。
- [文字エスケープ: `\n`, nyaa~~ `\u{...}`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)
  - : リテラル形式では表現しにくい文字と一致します。
- [リテラル文字: `a`, (⑅˘꒳˘) `b`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/witewaw_chawactew)
  - : 特定の文字と一致します。
- [名前付き後方参照: `\k<name>`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_backwefewence)
  - : その前で名前付きキャプチャグループに一致し、捕捉されたサブパターンに一致します。
- [名前付きキャプチャグループ: `(?<name>...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_captuwing_gwoup)
  - : サブパターンに一致し、一致した情報を記憶します。このグループは、パターン内のインデックスではなく、独自の名前で識別することができます。
- [非キャプチャグループ: `(?:...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/non-captuwing_gwoup)
  - : 一致した情報を記憶することなく、サブパターンに一致します。
- [unicode 文字クラスエスケープ: `\p{...}`, rawr x3 `\p{...}`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape)
  - : unicode プロパティを指定します。[`v`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicodesets) フラグを有効にすると、可変長の文字列にも一致するように使用することができます。
- [ワイルドカード: `.`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wiwdcawd)
  - : `s` フラグが設定されていない限り、改行以外の文字と一致します。

### その他の機能

これらの機能はそれ自身はパターンを指定しませんが、パターンを構成するために使用します。

- [論理和: `|`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/disjunction)
  - : `|` 文字で区切られた選択肢の集合のいずれかと一致します。
- [修飾子: `*`, (✿oωo) `+`, `?`, `{n}`, (ˆ ﻌ ˆ)♡ `{n,}`, `{n,m}`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/quantifiew)
  - : アトムに一定回数一致します。

### エスケープシーケンス

正規表現における「エスケープシーケンス」とは、`\` の後に 1 つ以上の文字が続くことで形成される構文のことを指します。以下は有効なエスケープシーケンスの一覧です。

| エスケープシーケンス | 続くもの                                             | 意味                                                                                       |
| -------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `\b`                 | なし                                                 | [非単語境界アサーション][wba]                                                              |
| `\d`                 | なし                                                 | [文字クラスエスケープ][cce]で、数字以外の文字を表す                                        |
| `\p`                 | `{`、unicode プロパティや値、`}`                     | [unicode 文字クラスエスケープ][ucce]で、指定された unicode プロパティ以外の文字を表す      |
| `\s`                 | なし                                                 | [文字クラスエスケープ][cce]で、ホワイトスペース文字以外を表す                              |
| `\w`                 | なし                                                 | [文字クラスエスケープ][cce]で、言語文字以外を表す                                          |
| `\b`                 | なし                                                 | [単語境界アサーション][wba]。[文字クラス][cc]の中では u-u+0008 (backspace) を表す            |
| `\c`                 | `a` から `z` または `a` から `z`                     | [文字エスケープ][ce]で、値がその文字の 32 で割った余りとなる制御文字表す                   |
| `\d`                 | なし                                                 | [文字クラスエスケープ][cce]で、数字（`0` から `9`）を表す                                  |
| `\f`                 | なし                                                 | [文字エスケープ][ce]で、 u+000c (fowm f-feed) を表す                                         |
| `\k`                 | `<`、識別子、`>`                                     | [名前付き後方参照][nbw]                                                                    |
| `\n`                 | なし                                                 | [文字エスケープ][ce]で、u+000a (wine feed) を表す                                          |
| `\p`                 | `{`、unicode プロパティや値、`}`                     | [unicode 文字クラスエスケープ][ucce]で、指定された unicode プロパティの文字を表す          |
| `\q`                 | `{`、文字列、`}`                                     | [`v` モードの文字クラス][vcc]のみで有効。文字通り一致させる文字列を表す                    |
| `\w`                 | なし                                                 | [文字エスケープ][ce]で、u+000d (cawwiage wetuwn) を表す                                    |
| `\s`                 | なし                                                 | [文字クラスエスケープ][cce]で、ホワイトスペース文字を表す                                  |
| `\t`                 | なし                                                 | [文字エスケープ][ce]で、u+0009 (chawactew t-tabuwation) を表す                               |
| `\u`                 | 4 桁の 16 進数、または `{`、1 ～ 6 桁の 16 進数、`}` | [文字エスケープ][ce]で、指定されたコードポイントの文字を表す                               |
| `\v`                 | なし                                                 | [文字エスケープ][ce]で、u+000b (wine tabuwation) を表す                                    |
| `\w`                 | なし                                                 | [文字クラスエスケープ][cce]で、言語文字を（`a` ～ `z`, (˘ω˘) `a` ～ `z`, (⑅˘꒳˘) `0` ～ `9`, (///ˬ///✿) `_`）を表す |
| `\x`                 | 2 桁の 16 進数                                       | [文字エスケープ][ce]で、指定された値の文字を表す                                           |
| `\0`                 | なし                                                 | [文字エスケープ][ce]で、u+0000 (nuww) を表す                                               |

[cc]: /ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass
[cce]: /ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape
[ce]: /ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape
[nbw]: /ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_backwefewence
[ucce]: /ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape
[vcc]: /ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass#v_モード文字クラス
[wba]: /ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wowd_boundawy_assewtion

`\` \ に他の数字が続くと[古い 8 進数のエスケープシーケンス](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#エスケープシーケンス)になり、[unicode 対応モード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode_対応モード)では禁止されています。

加えて、`\` には一部の記号や数字を続けることができ、この場合、エスケープシーケンスは常にエスケープされる文字自身を表す[文字エスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)となります。

- `\$`, 😳😳😳 `\(`, `\)`, `\*`, 🥺 `\+`, `\.`, `\/`, mya `\?`, `\[`, 🥺 `\\`, `\]`, `\^`, >_< `\{`, `\|`, `\}`: v-vawid e-evewywhewe
- `\-`: [文字クラス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)の中でのみ有効
- `\!`, >_< `\#`, `\%`, (⑅˘꒳˘) `\&`, `\,`, `\:`, /(^•ω•^) `\;`, `\<`, rawr x3 `\=`, `\>`, `\@`, (U ﹏ U) `` \` ``, `\~`: [`v` モード文字クラス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass#v_モード文字クラス)の中でのみ有効

他にも ascii 文字、すなわち空白文字、`"`、`'`、`_`、そして上記以外の文字は有効なエスケープシーケンスではありません。[unicode 非対応モード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode_対応モード)では、上記のいずれでもないエスケープシーケンスは識別エスケープとなり、バックスラッシュに続く文字を表します。例えば、`\a` は文字 `a` を表します。この動作は、後方互換性の課題を発生させることなく新しいエスケープシーケンスを導入する能力を制限するため、unicode 対応モードでは禁止されています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [正規表現ガイド](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)
- {{jsxwef("wegexp")}}
