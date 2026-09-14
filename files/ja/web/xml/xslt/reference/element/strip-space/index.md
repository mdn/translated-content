---
title: <xsl:strip-space>
slug: Web/XML/XSLT/Reference/Element/strip-space
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsl:strip-space>` 要素は、空白を削除する必要があるソース文書内の要素を定義します。

## 構文

```xml
<xsl:strip-space elements=LIST-OF-ELEMENT-NAMES />
```

### 必須属性

- `elements`
  - : ホワイトスペースのみのテキストノードを削除する必要がある、ソース内の要素の空白区切りリストを指定します。

### 任意属性

なし。

### 種類

最上位で、`<xsl:stylesheet>` または `<xsl:transform>` の子である必要があります。

## 仕様書

XSLT, section 3.4

## Gecko の対応

対応済み。
