---
title: <xsl:choose>
slug: Web/XML/XSLT/Reference/Element/choose
original_slug: Web/XSLT/Reference/Element/choose
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

`<xsl:choose>` 要素はいくつかの選択肢の中から選択肢を定義します。 手続き型言語の switch 文のように振る舞います。

### 構文

```
<xsl:choose>
  <xsl:when test="[whatever to test1]"></xsl:when>
  <xsl:when test="[whatever to test2]"></xsl:when>
  <xsl:otherwise></xsl:otherwise> [optional]
</xsl:choose>
```

### 必須属性

なし

### 任意属性

なし

### 種類

命令で、テンプレート内に現れます。1 つ以上の `<xsl:when>` 要素と、オプションで最後の `<xsl:otherwise>` 要素を含みます。

## 仕様書

XSLT, section 9.2.

### Gecko のサポート

サポート済み
