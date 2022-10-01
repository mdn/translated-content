---
title: <xsl:attribute>
slug: Web/XSLT/Element/attribute
---

{{ XsltRef() }}

`<xsl:attribute>` 要素は、スタイルシートからアクセス可能な任意の値を使用して出力文書に属性を作成します。要素は属性値を設定する出力文書要素内の他の出力文書要素の前に定義する必要があります。しかし、( `<xsl:choose>` や `<xsl:apply-templates>` などのように) 出力の一部ではない要素の後または内部にある可能性があります。

### 構文

```
<xsl:attribute name=NAME namespace=URI>
  TEMPLATE
</xsl:attribute>
```

### 必須属性

- `name`
  - : 出力文書に作成する属性の名前を指定します。名前は有効な QName でなければなりません。

### 任意属性

- `namespace`
  - : この属性の名前空間 URI を出力文書に定義します。関連する名前空間プレフィックスをこの要素で設定することはできません。

### タイプ

命令は、テンプレートまたは `<xsl:attribute-set>` 要素内に現れます。

### 定義

XSLT, section 7.1.3.

### Gecko のサポート

サポート済み
