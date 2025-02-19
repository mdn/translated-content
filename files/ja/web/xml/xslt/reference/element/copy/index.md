---
title: <xsl:copy>
slug: Web/XML/XSLT/Reference/Element/copy
original_slug: Web/XSLT/Reference/Element/copy
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

`<xsl:copy>` 要素は、現在のノードの浅いコピー (ノードおよび関連する名前空間ノード) を出力ドキュメントに転送します。現在のノードの子または属性はコピーされません。

### 構文

```xml
<xsl:copy use-attribute-sets=LIST-OF-NAMES>
  TEMPLATE
</xsl:copy>
```

### 必須属性

なし

### 任意属性

- `use-attribute-sets`
  - : 要素であれば、出力ノードに適用される属性セットをリストします。 セットの名前は空白文字で区切る必要があります。

### 種類

命令で、テンプレート内に現れます。

## 仕様書

XSLT, section 7.5.

### Gecko のサポート

サポート済み
