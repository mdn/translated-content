---
title: <string>
slug: Web/CSS/Reference/Values/string
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`<string>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、一連の文字列を表します。文字列は {{CSSxRef("content")}}, {{CSSxRef("font-family")}}, {{CSSxRef("quotes")}} など、数々の CSS プロパティで使用されます。

## 構文

`<string>` データ型は任意の数の [Unicode](https://ja.wikipedia.org/wiki/Unicode) 文字を、二重引用符 (`"`) または単一引用符 (`'`) で囲んで構成します。

多くの文字は文字通りに表現されます。またすべての文字は、それぞれの 16 進数の [Unicode コードポイント](https://ja.wikipedia.org/wiki/Unicode#Code_point_planes_and_blocks)で表現することもでき、この場合は前にバックスラッシュ (`\`) をつけます。例えば、 `\22` は二重引用符を表し、 `\27` は単一引用符 (`'`)、 `\A9` は著作権記号 (`©`) を表します。

重要なことは、文字によっては他の方法として、バックスラッシュでエスケープすることもできます。これらには二重引用符で囲まれた文字列内で使われる二重引用符、単一引用符で囲まれた文字列内で使われる単一引用符、およびバックスラッシュ自身です。例えば、 `\\` は単一のバックスラッシュを生成します。

改行文字を出力するには、 `\A` または `\00000A` のように改行文字としてエスケープする必要があります。しかし、改行を行の末尾の文字として `\` でエスケープすると、コード内で文字列を複数行に渡らせることができます。

ただし、改行を行うためには、{{cssxref("white-space")}} プロパティに適切な値を設定する必要があります。

> [!NOTE]
> {{glossary("character reference", "文字参照")}} (`&nbsp;` や `&#8212;` など) は、 CSS の `<string>` の中で使用することはできません。

## 例

### 有効な文字列の例

```css
/* 単純な文字列 */
"この文字列は二重引用符で区切られています。"
'この文字列は単一引用符で区切られています。'

/* 文字のエスケープ */
"これは、エスケープされた二重引用符 \" を含む文字列です。"
"この文字列にもエスケープされた二重引用符 \22 があります。"
'これは、エスケープされた単一引用符 \' を含む文字列です。'
'この文字列にもエスケープされた単一引用符 \27 があります。'
"これは、エスケープされたバックスラッシュ \\ を含む文字列です。"

/* 文字列内の改行 */
"この文字列には\A内部に改行があります。"

/* 2 行にわたる文字列 (これら 2 つの文字列は同じ出力になります) */
"本当に長い\
素晴らしい文字列"
"本当に長い素晴らしい文字列"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS の単位と値](/ja/docs/Web/CSS/Guides/Values_and_units)モジュール
- [CSS の基本データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)
- [CSS 入門: 単位と値](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
