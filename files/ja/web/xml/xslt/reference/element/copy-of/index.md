---
title: <xsl:copy-of>
slug: Web/XML/XSLT/Reference/Element/copy-of
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsl:copy-of>` 要素は、select 属性が出力文書に指定するものすべてのディープコピー (子孫ノードを含む) を作成します。

### 構文

```xml
<xsl:copy-of select=EXPRESSION />
```

### 必須属性

- `select`
  - : 何をコピーするかを指定する XPath 式を使用します。

### 任意属性

なし。

### 種類

命令で、テンプレート内に現れます。

## 仕様書

XSLT, section 11.3.

## Gecko の対応

サポート済み。
