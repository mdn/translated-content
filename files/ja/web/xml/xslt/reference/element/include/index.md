---
title: <xsl:include>
slug: Web/XML/XSLT/Reference/Element/include
original_slug: Web/XSLT/Reference/Element/include
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

`<xsl:include>` 要素はあるスタイルシートの内容を別のスタイルシートにマージします。`<xsl:import>` の場合とは異なり、インクルードされたスタイルシートの内容はインクルードするスタイルシートの内容とまったく同じです。

### 構文

```xml
<xsl:include href=URI />
```

### 必須属性

- `href`
  - : 含めるスタイルシートの URI を指定します。

### 任意属性

なし。

### 種類

最上位で、`<xsl:stylesheet>` または `<xsl:transform>` の子である必要があります。

## 仕様書

XSLT, section 2.6.1.

### Gecko のサポート

サポート済み
