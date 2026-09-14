---
title: <xsl:apply-templates>
slug: Web/XML/XSLT/Reference/Element/apply-templates
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsl:apply-templates>` 要素は、入力ツリー内のノードのセットを選択し、適切なテンプレートを適用するようにプロセッサーに指示します。

### 構文

```xml
<xsl:apply-templates select=EXPRESSION mode=NAME>
  <xsl:with-param> [optional]
  <xsl:sort> [optional]
</xsl:apply-templates>
```

### 必須属性

なし。

### 任意属性

- `select`
  - : 処理するノードを指定する XPath 式を使用します。アスタリスク (`*`) はノードセット全体を選択します。この属性が設定されていない場合は、現在のノードのすべての子ノードが選択されます。
- `mode`
  - : 同じノードに対して複数の処理方法が定義されている場合は、それらを区別します。

### 種類

命令で、テンプレート内に現れます。

## 仕様書

XSLT section 5.4.

## Gecko の対応

サポート済み。
