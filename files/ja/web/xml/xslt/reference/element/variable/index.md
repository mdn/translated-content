---
title: <xsl:variable>
slug: Web/XML/XSLT/Reference/Element/variable
original_slug: Web/XSLT/Reference/Element/variable
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

`<xsl:variable>` 要素はスタイルシートにグローバル変数またはローカル変数を宣言し、値を与えます。XSLT は副作用を許さないため、変数の値が設定されると、変数がスコープから外れるまでは変わりません。

### 構文

```xml
<xsl:variable name=NAME select=EXPRESSION >
  TEMPLATE
</xsl:variable>
```

### 必須属性

- `name`
  - : 変数に名前を付けます。

### 任意属性

- `select`
  - : XPath 式を使用して変数の値を定義します。要素にテンプレートが含まれている場合、この属性は無視されます。

### 種類

最上位または命令。最上位要素として発生するとその変数は範囲がグローバルであり、文書全体からアクセスできます。テンプレート内で発生した場合、変数はスコープ内でローカルであり、変数が現れるテンプレート内でのみアクセスできます。

## 仕様書

XSLT, section 11.

### Gecko のサポート

サポート済み
