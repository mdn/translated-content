---
title: <xsl:strip-space>
slug: Web/XSLT/Element/strip-space
---

{{ XsltRef() }}

`<xsl:strip-space>` 要素は空白を削除する必要があるソースドキュメント内の要素を定義します。

### 構文

```
<xsl:strip-space elements=LIST-OF-ELEMENT-NAMES  />
```

### 必須属性

- `elements`
  - : 空白のみのテキストノードを削除する必要がある、ソース内の要素のスペース区切りリストを指定します。

### 任意属性

なし

### タイプ

トップレベル、`<xsl:stylesheet>` または `<xsl:transform>` の子である必要があります。

### 定義

XSLT, section 3.4

### Gecko のサポート

サポート済み
