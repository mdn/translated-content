---
title: <xsl:attribute-set>
slug: Web/XML/XSLT/Reference/Element/attribute-set
original_slug: Web/XSLT/Reference/Element/attribute-set
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

`<xsl:attribute-set>` 要素は名前付き属性のセットを作成します。属性のセットは、CSS の名前付きスタイルに類似した方法で出力ドキュメント全体に適用されます。

### 構文

```xml
<xsl:attribute-set name=NAME use-attribute-sets=LIST-OF-NAMES>
  <xsl:attribute>
</xsl:attribute-set>
```

### 必須属性

- `name`
  - : 属性セットの名前を指定します。名前は有効な QName でなければなりません。

### 任意属性

- `use-attribute-sets`
  - : 他の属性セットから属性セットを構築します。寄与する集合の名前は、空白文字で区切られなければならず、直接的または間接的に埋め込まれてはいけません。

### 種類

最上位で、`<xsl:stylesheet>` または `<xsl:transform>` の子である必要があります。

## 仕様書

XSLT, section 7.1.4.

### Gecko のサポート

サポート済み
