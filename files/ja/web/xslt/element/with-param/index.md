---
title: <xsl:with-param>
slug: Web/XSLT/Element/with-param
---

{{ XsltRef() }}

`<xsl:with-param>` 要素はテンプレートに渡すパラメータの値を設定します。

### 構文

```
<xsl:with-param name=NAME select=EXPRESSION>
  TEMPLATE
</xsl:with-param>
```

### 必須属性

- `name`
  - : このパラメータに名前を付けます。

### 任意属性

- `select`
  - : XPath 式を使用してパラメータの値を定義します。要素にテンプレートが含まれている場合、この属性は無視されます。

### タイプ

サブ命令は常に `<xsl:apply-templates>` または `<xsl:call-template>` 要素内に現れます。

### 定義

XSLT 11.6

### Gecko のサポート

サポート済み
