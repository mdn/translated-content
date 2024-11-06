---
title: <ident>
slug: Web/CSS/ident
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{CSSRef}}

**`<ident>`** [CSS](/ja/docs/Web/CSS) [データ型](/ja/docs/Web/CSS/CSS_Types) は、{{glossary("identifier", "識別子")}}として使用される任意の文字列を意味します。

## 構文

`<custom-ident>` の構文は CSS の識別子（プロパティ名など）に似ていますが、 [大文字と小文字の区別](https://ja.wikipedia.org/wiki/ケース・センシティブ) がある点が違います。 これは次の文字から成る文字の並びです。

- アルファベット (`A` - `Z` と `a` - `z`)
- 数字 (`0` - `9`)
- ハイフン (`-`)
- アンダースコア (`_`)
- エスケープ文字 (バックスラッシュ `\` に続く)
- [Unicode](https://ja.wikipedia.org/wiki/Unicode) 文字（バックスラッシュ `\` と、それに続く 1-6 個の 16 進数を形式をとる、Unicode コードポイント）

[大文字と小文字の区別](https://ja.wikipedia.org/wiki/ケース・センシティブ) があるため `id1`、 `Id1`、 `iD1` そして `ID1` は全て異なる識別子である点に注意してください。しかし、文字をエスケープする方法はいくつか存在するため、 `toto\?` と `toto\3F` は同じ識別子です。

## 例

### 有効な識別子

```plain example-good
nono79        アルファベットと数字の組み合わせ
ground-level  アルファベットとダッシュの組み合わせ
-test         ダッシュとそれに続く英数字
--toto        識別子の様なカスタムプロパティ
_internal     アンダースコアとそれに続く英数字
\22 toto      Unicode 文字とそれに続く一連の英数字
bili\.bob     正しくエスケープされたピリオド
```

### 無効な識別子

```plain example-bad
34rem     数字で始まってはいけません
-12rad    ダッシュで始まって数字が続いてはいけません
bili.bob  エスケープする必要がないのはアルファベット、 _、 - のみです
'bilibob'  これは {{CSSxRef("&lt;string&gt;")}} になります
"bilibob"  これは {{CSSxRef("&lt;string&gt;")}} になります
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

_このデータ型は、他の CSS 構文の定義を単純化するために使用される便利な型なので実際の型ではありません。そのため、ブラウザーの互換性情報はありません。_

## 関連情報

- [&lt;custom-ident&gt;](/ja/docs/Web/CSS/custom-ident)
- [&lt;dashed-ident&gt;](/ja/docs/Web/CSS/dashed-ident)
