---
title: <xsl:apply-templates>
slug: Web/XSLT/Element/apply-templates
---

{{ XsltRef() }}

`<xsl:apply-templates>` 要素は、入力ツリー内のノードのセットを選択し、適切なテンプレートを適用するようにプロセッサに指示します。

### 構文

```
<xsl:apply-templates select=EXPRESSION mode=NAME>
  <xsl:with-param> [optional]
  <xsl:sort> [optional]
</xsl:apply-templates>
```

### 必須属性

なし

### 任意属性

- `select`
  - : 処理するノードを指定する XPath 式を使用します。アスタリスク (\*) はノードセット全体を選択します。この属性が設定されていない場合は、現在のノードのすべての子ノードが選択されます。
- `mode`
  - : 同じノードに対して複数の処理方法が定義されている場合は、それらを区別します。

### タイプ

命令は、テンプレート内に表示されます。

### 定義

XSLT section 5.4.

### Gecko のサポート

サポート済み
