---
title: <xsl:for-each>
slug: Web/XML/XSLT/Reference/Element/for-each
original_slug: Web/XSLT/Reference/Element/for-each
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

`<xsl:for-each>` 要素は一連のノードを選択し、それぞれのノードを同じ方法で処理します。これはノードのセットを反復処理したり、現在のノードを変更したりするためによく使用されます。1 つ以上の `<xsl:sort>` 要素がこの要素の子として表示される場合、処理の前にソートが行われます。それ以外の場合、ノードはドキュメント順に処理されます。

### 構文

```xml
<xsl:for-each select=EXPRESSION>
  <xsl:sort> [optional]
  TEMPLATE
</xsl:for-each>
```

### 必須属性

- `select`
  - : XPath 式を使用して、処理するノードを選択します。

### 任意属性

なし

### Type

命令で、テンプレート内に現れます。

## 仕様書

XSLT, section 8.

### Gecko のサポート

サポート済み
