---
title: <xsl:element>
slug: Web/XML/XSLT/Reference/Element/element
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsl:element>` 要素は、出力文書に要素を作成します。

### 構文

```xml
<xsl:element name=NAME namespace=URI use-attribute-sets=LIST-OF-NAMES >
  TEMPLATE
</xsl:element>
```

### 必須属性

- `name`
  - : 出力要素の希望する名前を指定します。名前は有効な QName でなければなりません。

### 任意属性

- `namespace`
  - : 出力要素の名前空間を指定します。
- `use-attribute-sets`
  - : `element` 要素の出力要素に適用される [`attribute-set` 要素](/ja/docs/Web/XML/XSLT/Reference/Element/attribute-set)名のスペース区切りのリスト。適用された属性は、ネストされた属性要素によってオーバーライドできます。

### 種類

命令で、テンプレート内に現れます。

## 仕様書

XSLT, section 7.1.2.

## Gecko の対応

サポート済み。
