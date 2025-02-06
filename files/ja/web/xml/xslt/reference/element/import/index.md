---
title: <xsl:import>
slug: Web/XML/XSLT/Reference/Element/import
original_slug: Web/XSLT/Reference/Element/import
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

`<xsl:import>` 要素はあるスタイルシートの内容を別のスタイルシートにインポートするための最上位要素です。一般に、インポートしたスタイルシートの内容は、インポートするスタイルシートの内容よりもインポートの優先度が低くなります。これは `<xsl:include>` とは対照的です。ここでインクルードされたスタイルシートの内容は、インクルードするスタイルシートの内容とまったく同じです。

### 構文

```xml
<xsl:import href=URI />
```

### 必須属性

- `href`
  - : インポートするスタイルシートの URI を指定します。

### 任意属性

なし

### 種類

最上位で、インポートスタイルシートの `<xsl:stylesheet>` または `<xsl:transform>` の他の子の前に現れる必要があります。

## 仕様書

XSLT, section 2.6.2.

### Gecko のサポート

主に Mozilla 1.0 以降の最上位の変数とパラメーターに関するいくつかの問題でサポートされています。
