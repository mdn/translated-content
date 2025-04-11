---
title: <xsl:choose>
slug: Web/XML/XSLT/Reference/Element/choose
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsl:choose>` 要素はいくつかの選択肢の中から選択肢を定義します。 手続き型言語の switch 文のように振る舞います。

### 構文

```xml
<xsl:choose>
  <xsl:when test="[whatever to test1]"></xsl:when>
  <xsl:when test="[whatever to test2]"></xsl:when>
  <xsl:otherwise></xsl:otherwise> [optional]
</xsl:choose>
```

### 必須属性

なし。

### 任意属性

なし。

### 種類

命令で、テンプレート内に現れます。1 つ以上の `<xsl:when>` 要素と、オプションで最後の `<xsl:otherwise>` 要素を含みます。

## 仕様書

XSLT, section 9.2.

## Gecko の対応

サポート済み。
