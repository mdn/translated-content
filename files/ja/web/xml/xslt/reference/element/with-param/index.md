---
title: <xsl:with-param>
slug: Web/XML/XSLT/Reference/Element/with-param
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsl:with-param>` 要素はテンプレートに渡すパラメーターの値を設定します。

### 構文

```xml
<xsl:with-param name=NAME select=EXPRESSION>
  TEMPLATE
</xsl:with-param>
```

### 必須属性

- `name`
  - : このパラメーターに名前を付けます。

### 任意属性

- `select`
  - : XPath 式を使用してパラメーターの値を定義します。要素にテンプレートが含まれている場合、この属性は無視されます。

### 種類

サブ命令で、常に `<xsl:apply-templates>` または `<xsl:call-template>` 要素内に現れます。

## 仕様書

XSLT 11.6

## Gecko の対応

対応済み。
