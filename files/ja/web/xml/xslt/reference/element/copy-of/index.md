---
title: <xsl:copy-of>
slug: Web/XML/XSLT/Reference/Element/copy-of
original_slug: Web/XSLT/Reference/Element/copy-of
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

`<xsl:copy-of>` 要素は、select 属性が出力文書に指定するものすべてのディープコピー (子孫ノードを含む) を作成します。

### 構文

```xml
<xsl:copy-of select=EXPRESSION />
```

### 必須属性

- `select`
  - : 何をコピーするかを指定する XPath 式を使用します。

### 任意属性

なし

### 種類

命令で、テンプレート内に現れます。

## 仕様書

XSLT, section 11.3.

### Gecko のサポート

サポート済み
