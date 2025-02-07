---
title: <xsl:sort>
slug: Web/XML/XSLT/Reference/Element/sort
original_slug: Web/XSLT/Reference/Element/sort
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

`<xsl:sort>` 要素は、`<xsl:apply-templates>` または `<xsl:for-each>` で選択されたノードのソートキーを定義し、それらが処理される順序を決定します。

### 構文

```xml
<xsl:sort
  select=EXPRESSION
  order="ascending" | "descending"
  case-order="upper-first" | "lower-first"
  lang=XML:LANG-CODE
  data-type="text" | "number" />
```

### 必須属性

なし

### 任意属性

- `select`
  - : XPath 式を使用してソートするノードを指定します。
- `order`
  - : ノードを "`ascending`" または "`descending`" に処理するかどうかを指定します。デフォルトは "`ascending`" です。
- `case-order`
  - : 大文字か小文字かを最初に指示するかどうかを示します。許容される値は "`upper-first`" および "`lower-first`" である。
- `lang`
  - : ソートで使用する言語を指定します。
- `data-type`
  - : アイテムをアルファベット順または数値順に並べ替えるかどうかを定義します。 許容される値は "`text`" と "`number`" で、"`text`" がデフォルトです。

### 種類

サブ命令で、常に \<xsl:for-each> の子として現れます。テンプレートの適切な場所または \<xsl:apply-templates> の前に現れなければなりません。

## 仕様書

XSLT, section10.

### Gecko のサポート

サポート済み
