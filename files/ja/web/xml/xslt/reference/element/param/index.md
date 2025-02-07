---
title: <xsl:param>
slug: Web/XML/XSLT/Reference/Element/param
original_slug: Web/XSLT/Reference/Element/param
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

`<xsl:param>` 要素はパラメーターを名前で設定し、オプションでそのパラメーターの既定値を設定します。最上位要素として使用される場合、パラメーターはグローバルです。`<xsl:template>` 要素内で使用される場合、パラメーターはそのテンプレートに対してローカルです。この場合、テンプレートの最初の子要素でなければなりません。

### 構文

```xml
<xsl:param name=NAME select=EXPRESSION>
  TEMPLATE
</xsl:param>
```

### 必須属性

- `name`
  - : パラメーターに名前を付けます。これは QName でなければなりません。

### 任意属性

- `select`
  - : 指定されていない場合は XPath 式を使用して既定値を指定します。

### 種類

命令で、最上位の要素として表示現れるか、テンプレート内に現れます。

## 仕様書

XSLT, section 11.

## Gecko support

サポート済み
