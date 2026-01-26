---
title: <xsl:preserve-space>
slug: Web/XML/XSLT/Reference/Element/preserve-space
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsl:preserve-space>` 要素は空白を保存する要素をソース文書内で定義します。複数の要素がある場合は、名前を空白文字で区切ります。空白を保持するのが既定の設定なので、この要素が必要になるのは `<xsl:strip-space>` 要素を打ち消すためだけです。

## 構文

```xml
<xsl:preserve-space elements=LIST-OF-ELEMENT-NAMES />
```

### 必須属性

- `elements`
  - : 空白を保持する要素を指定します。

### 任意属性

なし

### 種類

最上位で、`<xsl:stylesheet>` または `<xsl:transform>` の子である必要があります。

## 仕様書

XSLT, section 3.4

## Gecko の対応

対応済み。
