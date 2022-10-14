---
title: <xsl:choose>
slug: Web/XSLT/Element/choose
---

{{ XsltRef() }}

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

### タイプ

インストラクションはテンプレートとともに表示されます。1 つまたは複数の `<xsl:when>` 要素と、オプションで最後の `<xsl:otherwise>` 要素を含みます。

### 定義

XSLT, section 9.2.

### Gecko のサポート

サポート済み
