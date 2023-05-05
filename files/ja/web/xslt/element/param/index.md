---
title: <xsl:param>
slug: Web/XSLT/Element/param
---

{{ XsltRef() }}

`<xsl:param>` 要素はパラメータを名前で設定し、オプションでそのパラメータのデフォルト値を設定します。最上位要素として使用される場合、パラメータはグローバルです。`<xsl:template>` 要素内で使用される場合、パラメータはそのテンプレートに対してローカルです。この場合、テンプレートの最初の子要素でなければなりません。

### 構文

```
<xsl:param name=NAME select=EXPRESSION>
  TEMPLATE
</xsl:param>
```

### 必須属性

- `name`
  - : パラメータに名前を付けます。これは QName でなければなりません。

### 任意属性

- `select`
  - : 指定されていない場合は XPath 式を使用してデフォルト値を指定します。

### タイプ

命令は、トップレベルの要素として表示されるか、テンプレート内に表示されます。

### 定義

XSLT, section 11.

### Gecko のサポート

サポート済み
