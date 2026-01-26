---
title: <xsl:include>
slug: Web/XML/XSLT/Reference/Element/include
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

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

## Gecko の対応

対応済み。
