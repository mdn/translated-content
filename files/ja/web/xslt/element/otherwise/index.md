---
title: <xsl:otherwise>
slug: Web/XSLT/Element/otherwise
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

`<xsl:otherwise>` 要素は `<xsl:when>` 条件のいずれも適用されない場合に実行されるアクションを定義するために使用されます。他のプログラミング言語の `else` または `default` の場合と似ています。

### 構文

```xml
<xsl:otherwise>
  TEMPLATE
</xsl:otherwise>
```

### 必須属性

なし。

### 任意属性

なし。

### 種類

サブ命令で、 `<xsl:choose>` 要素の最後の子としてテンプレート内に現れる必要があります。

## 仕様書

XSLT, section 9.2

### Gecko のサポート

サポート済み
