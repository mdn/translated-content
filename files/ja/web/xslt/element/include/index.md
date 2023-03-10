---
title: <xsl:include>
slug: Web/XSLT/Element/include
---

{{ XsltRef() }}

`<xsl:include>` 要素はあるスタイルシートの内容を別のスタイルシートにマージします。`<xsl:import>` の場合とは異なり、インクルードされたスタイルシートの内容はインクルードするスタイルシートの内容とまったく同じです。

### 構文

```
<xsl:include href=URI />
```

### 必須属性

- `href`
  - : 含めるスタイルシートの URI を指定します。

### 任意属性

なし

### タイプ

トップレベルは `<xsl:stylesheet>` または `<xsl:transform>` の子として任意の順序で表示されます。

### 定義

XSLT, section 2.6.1.

### Gecko のサポート

サポート済み
