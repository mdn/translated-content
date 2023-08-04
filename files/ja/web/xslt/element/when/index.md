---
title: <xsl:when>
slug: Web/XSLT/Element/when
---

{{ XsltRef() }}

`<xsl:when>` 要素は `<xsl:choose>` 要素内に常に表示され、case 文のように動作します。

### 構文

```
<xsl:when test=EXPRESSION>
  TEMPLATE
</xsl:when>
```

### 必須属性

- `test`
  - : 評価されるブール式を指定します。true の場合、要素の内容が処理されます。false の場合は無視されます。

### 任意属性

なし

### タイプ

サブ命令は、常に `<xsl:choose>` 要素内に現れます。

### 定義

XSLT, section 9.2.

### Gecko のサポート

サポート済み
