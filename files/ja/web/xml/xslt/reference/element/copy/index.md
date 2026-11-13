---
title: <xsl:copy>
slug: Web/XML/XSLT/Reference/Element/copy
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsl:copy>` 要素は、現在のノードのシャローコピー (ノードおよび関連する名前空間ノード) を出力文書に転送します。現在のノードの子または属性はコピーされません。

### 構文

```xml
<xsl:copy use-attribute-sets=LIST-OF-NAMES>
  TEMPLATE
</xsl:copy>
```

### 必須属性

なし。

### 任意属性

- `use-attribute-sets`
  - : 要素であれば、出力ノードに適用される属性の集合をリストします。 集合の名前は空白文字で区切る必要があります。

### 種類

命令で、テンプレート内に現れます。

## 仕様書

XSLT, section 7.5.

## Gecko の対応

サポート済み。
