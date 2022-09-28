---
title: <xsl:element>
slug: Web/XSLT/Element/element
---

{{ XsltRef() }}

`<xsl:element>` 要素は、出力文書に要素を作成します。

### 構文

```
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
  - : `element` 要素の出力要素に適用される [`attribute-set` 要素](/ja/docs/Web/XSLT/attribute-set)名のスペース区切りのリスト。適用された属性は、ネストされた属性要素によってオーバーライドできます。

### タイプ

命令は、テンプレート内に表示されます。

### 定義

XSLT, section 7.1.2.

### Gecko のサポート

サポート済み
