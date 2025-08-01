---
title: <ident>
slug: Web/CSS/ident
l10n:
  sourceCommit: bd74b8a8222517dead9def675a499dcf1dc30328
---

**`<ident>`** [CSS](/ja/docs/Web/CSS) [データ型](/ja/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) は、{{glossary("identifier", "識別子")}}として使用される任意の文字列を意味します。

## 構文

CSS の識別子は、以下のいずれかの文字 1 つ以上から構成されます。

- `A` - `Z` と `a` - `z` の範囲の {{glossary("ASCII")}} 文字
- 数字 (`0` - `9`)
- ハイフン (`-`)
- アンダースコア (`_`)
- その他の {{glossary("Unicode")}} 文字のうち `U+00A0` 以上のもの（すなわち、 ASCII 以外の Unicode 文字）
- [エスケープされた文字](#文字のエスケープ)

さらに、識別子はエスケープされていない数字で始めてはならず、エスケープされていないハイフンの後にエスケープされていない数字が続く形でも始めてはなりません。

[大文字と小文字の区別](https://ja.wikipedia.org/wiki/ケース・センシティブ) があるため `id1`、 `Id1`、 `iD1` そして `ID1` は全て異なる識別子である点に注意してください。しかし、文字をエスケープする方法はいくつか存在するため、 `toto\?` と `toto\3F` は同じ識別子です。

### 文字のエスケープ

{{glossary("Escape character", "文字のエスケープ")}}とは、ソフトウェアシステムによる解釈の仕方を変更する方法で文字を表すということです。 CSS では、文字の前にバックスラッシュ (`\`) を追加することで、文字をエスケープすることができます。 16 進数の数字 `0-9`、`a-f`、`A-F` を除くすべての文字は、この方法でエスケープすることができます。 例えば、`&` は `\&` としてエスケープすることができます。

また、バックスラッシュの後に 1 ～ 6 桁の 16 進数で表される文字の Unicode コードポイントを続けることで、任意の文字をエスケープすることもできます。例えば、 `&` は `\26` としてエスケープできます。この記法では、エスケープ文字に続いて 16 進数が続き、次のどちらかかになります。

- Unicode コードポイントの後に、空白などのホワイトスペース文字を置く。
- エスケープされる文字の完全な 6 桁の Unicode コードポイントを置く。

例えば、文字列 `&123` は、 `\26 123` （ホワイトスペース付き）または `\000026123` （`&` の 6 桁の Unicode コードポイント）とすることで `123` がエスケープパターンの一部として認識されないようにすることができます。

## 例

### 有効な識別子

```plain example-good
nono79        /* アルファベットと数字の組み合わせ */
ground-level  /* アルファベットとダッシュの組み合わせ */
-test         /* ダッシュとそれに続く英数字 */
--toto        /* 識別子の様なカスタムプロパティ */
_internal     /* アンダースコアとそれに続く英数字 */
\22 toto      /* エスケープされた文字とそれに続く一連の英数字 */
\000022toto   /* 前の例と同じ */
scooby\.doo   /* 正しくエスケープされたピリオド */
🔥123         /* 非 ASCII 文字に続いて数字 */
```

### 無効な識別子

```plain example-bad
34rem     /* 数字で始まってはいけない */
-12rad    /* ダッシュで始まって数字が続いてはいけない */
scooby.doo  /* 英数字でない ASCII 文字はエスケープする必要がある */
'scoobyDoo' /* 文字列として扱われる */
"scoobyDoo" /* 文字列として扱われる */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

_このデータ型は、他の CSS 構文の定義を単純化するために使用される便利な型なので実際の型ではありません。そのため、ブラウザーの互換性情報はありません。_

## 関連情報

- [&lt;custom-ident&gt;](/ja/docs/Web/CSS/custom-ident)
- [&lt;dashed-ident&gt;](/ja/docs/Web/CSS/dashed-ident)
