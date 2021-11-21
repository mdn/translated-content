---
title: <string>
slug: Web/CSS/string
tags:
  - CSS
  - CSS データ型
  - データ型
  - レイアウト
  - リファレンス
  - ウェブ
translation_of: Web/CSS/string
---
{{CSSRef}}

**`<string>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、一連の文字列を表します。文字列は {{CSSxRef("content")}}, {{CSSxRef("font-family")}}, {{CSSxRef("quotes")}} など、数々の CSS プロパティで使用されます。

## 構文

`<string>` データ型は任意の数の [Unicode](https://ja.wikipedia.org/wiki/Unicode) 文字を、二重引用符 (`"`) または単一引用符 (`'`) で囲んで構成します。

多くの文字は文字通りに表現されます。またすべての文字は、それぞれの 16 進数の [Unicode コードポイント](https://ja.wikipedia.org/wiki/Unicode#Code_point_planes_and_blocks)で表現することもできます。例えば、 `\22` は二重引用符を表し、 `\27` は単一引用符 (`'`)、 `\A9` は著作権記号 (`©`) を表します。

重要なことは、文字によっては他の方法として、バックスラッシュでエスケープすることもできます。これらには二重引用符で囲まれた文字列内で使われる二重引用符、単一引用符で囲まれた文字列内で使われる単一引用符、およびバックスラッシュ自身です。例えば、 `\\` は単一のバックスラッシュを生成します。

改行文字を出力するには、 `\A` または `\00000A` のように改行文字としてエスケープする必要があります。しかし、改行を行の末尾の文字として `\` でエスケープすると、コード内で文字列を複数行に渡らせることができます。

ただし、改行を行うためには、{{cssxref("white-space")}} プロパティに適切な値を設定する必要があります。

> **Note:** [HTML エンティティ](/ja/docs/Glossary/Entity) (`&nbsp;` や `&#8212;` など) は、 CSS の `<string>` の中で使用することはできません。

## 例

### 有効な文字列の例

    /* 単純な文字列 */
    "This string is demarcated by double quotes."
    'This string is demarcated by single quotes.'

    /* 文字のエスケープ */
    "This is a string with \" an escaped double quote."
    "This string also has \22 an escaped double quote."
    'This is a string with \' an escaped single quote.'
    'This string also has \27 an escaped single quote.'
    "This is a string with \\ an escaped backslash."

    /* 文字列内の改行 */
    "This string has a \Aline break in it."

    /* 2 行にわたる文字列 (これら 2 つの文字列は同じ出力になります) */
    "A really long \
    awesome string"
    "A really long awesome string"

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS の単位と値](/ja/docs/Web/CSS/CSS_Values_and_Units)
- [CSS の基本データ型](/ja/docs/Web/CSS/CSS_Types)
- [CSS 入門: 単位と値](/ja/docs/Learn/CSS/Building_blocks/Values_and_units)
