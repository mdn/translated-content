---
title: <xsl:copy>
slug: Web/XSLT/Element/copy
---

{{ XsltRef() }}

`<xsl:copy>` 要素は、現在のノードの浅いコピー (ノードおよび関連する名前空間ノード) を出力ドキュメントに転送します。現在のノードの子または属性はコピーされません。

### 構文

```
<xsl:copy use-attribute-sets=LIST-OF-NAMES>
  TEMPLATE
</xsl:copy>
```

### 必須属性

なし

### 任意属性

- `use-attribute-sets`
  - : 要素であれば、出力ノードに適用される属性セットをリストします。 セットの名前は空白文字で区切る必要があります。

### タイプ

命令は、テンプレート内に表示されます。

### 定義

XSLT, section 7.5.

### Gecko のサポート

サポート済み
