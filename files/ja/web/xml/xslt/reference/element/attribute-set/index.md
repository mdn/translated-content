---
title: <xsl:attribute-set>
slug: Web/XML/XSLT/Reference/Element/attribute-set
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsl:attribute-set>` 要素は名前付き属性の集合を作成します。属性の集合は、CSS の名前付きスタイルに類似した方法で出力文書全体に適用されます。

### 構文

```xml
<xsl:attribute-set name=NAME use-attribute-sets=LIST-OF-NAMES>
  <xsl:attribute>
</xsl:attribute-set>
```

### 必須属性

- `name`
  - : 属性の集合の名前を指定します。名前は有効な QName でなければなりません。

### 任意属性

- `use-attribute-sets`
  - : 他の属性の集合から属性の集合を構築します。寄与する集合の名前は、ホワイトスペース文字で区切る必要があり、それ自身が直接的または間接的に埋め込まれてはいけません。

### 種類

最上位で、`<xsl:stylesheet>` または `<xsl:transform>` の子である必要があります。

## 仕様書

XSLT, section 7.1.4.

## Gecko の対応

サポート済み。
