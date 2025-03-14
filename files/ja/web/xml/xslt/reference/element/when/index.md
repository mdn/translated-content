---
title: <xsl:when>
slug: Web/XML/XSLT/Reference/Element/when
original_slug: Web/XSLT/Reference/Element/when
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

`<xsl:when>` 要素は `<xsl:choose>` 要素内に常に表示され、case 文のように動作します。

### 構文

```xml
<xsl:when test=EXPRESSION>
  TEMPLATE
</xsl:when>
```

### 必須属性

- `test`
  - : 評価される論理式を指定します。true の場合、要素の内容が処理されます。false の場合は無視されます。

### 任意属性

なし。

### 種類

サブ命令で、常に `<xsl:choose>` 要素内に現れます。

## 仕様書

XSLT, section 9.2.

### Gecko のサポート

サポート済み
