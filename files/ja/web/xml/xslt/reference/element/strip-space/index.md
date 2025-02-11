---
title: <xsl:strip-space>
slug: Web/XML/XSLT/Reference/Element/strip-space
original_slug: Web/XSLT/Reference/Element/strip-space
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

`<xsl:strip-space>` 要素は空白を削除する必要があるソースドキュメント内の要素を定義します。

### 構文

```xml
<xsl:strip-space elements=LIST-OF-ELEMENT-NAMES />
```

### 必須属性

- `elements`
  - : 空白のみのテキストノードを削除する必要がある、ソース内の要素のスペース区切りリストを指定します。

### 任意属性

なし。

### 種類

最上位で、`<xsl:stylesheet>` または `<xsl:transform>` の子である必要があります。

## 仕様書

XSLT, section 3.4

### Gecko のサポート

サポート済み
