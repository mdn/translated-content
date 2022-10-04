---
title: ident
slug: Web/CSS/ident
---

{{CSSRef}}

**`<ident>`** [CSS](/ja/docs/Web/CSS) [データ型](/ja/docs/Web/CSS/CSS_Types) は、 {{glossary("identifier")}} として使用される任意の文字列を意味します。

## 構文

`<custom-ident>` の構文は CSS の識別子 (プロパティ名など)に似ていますが、 [大文字と小文字の区別](http://en.wikipedia.org/wiki/Case_sensitivity) がある点が違います。 これは次の文字から成る文字の並びです:

- アルファベット (`A` - `Z` と `a` - `z`)
- 数字 (`0` - `9`)
- ハイフン (`-`)
- アンダースコア (`_`)
- エスケープ文字 (バックスラッシュ `\` に続く)
- [Unicode](http://en.wikipedia.org/wiki/Unicode) 文字 (バックスラッシュ `\` と、それに続く 1-6 個の 16 進数を形式をとる、Unicode コードポイント)

[大文字と小文字の区別](http://en.wikipedia.org/wiki/Case_sensitivity) があるため `id1`、 `Id1`、 `iD1` そして `ID1` は全て異なる識別子である点に注意してください。しかし、文字をエスケープする方法はいくつか存在するため、 `toto\?` と `toto\3F` は同じ識別子です。

## 例

### 有効な識別子

```plain example-good
nono79        アルファベットと数字の組み合わせ
ground-level  アルファベットとダッシュの組み合わせ
-test         ダッシュとそれに続く英数字
--toto        identifier の様なカスタムプロパティ
_internal     アンダースコアとそれに続く英数字
\22 toto      Unicode 文字とそれに続く一連の英数字
bili\.bob     正しくエスケープされたピリオド
```

### 無効な識別子

```plain example-bad
34rem     数字で始まってはいけません
-12rad    ダッシュで始まって数字が続いてはいけません
bili.bob  アルファベット、 _、 - のみをエスケープする必要はありません
'bilibob'  これは {{CSSxRef("&lt;string&gt;")}} になります
"bilibob"  これは {{CSSxRef("&lt;string&gt;")}} になります
```

## 仕様

| 仕様                                                                                                 | ステータス                       | コメント |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('CSS4 Values', '#css-identifier', '<code>&lt;ident&gt;</code>')}} | {{Spec2('CSS4 Values')}} |          |
| {{SpecName('CSS3 Values', '#css-identifier', '<code>&lt;ident&gt;</code>')}} | {{Spec2('CSS3 Values')}} |          |

## ブラウザーの互換性

_このデータ型は、他の CSS 構文の定義を単純化するために使用される便利な型なので実際の型ではありません。_

## 関連情報

- {{CSSxRef("&lt;custom-ident&gt;")}} – CSS 全体のキーワードを除く `<ident>` 値の制限されたサブセット、 {{CSSxRef("--*", "custom properties")}} 及びその他のプロパティ値。
