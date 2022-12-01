---
title: <xsl:if>
slug: Web/XSLT/Element/if
---

{{ XsltRef() }}

`<xsl:if>` 要素にはテスト属性とテンプレートが含まれています。テストが真と評価された場合、テンプレートは処理されます。これは、他の言語の if 文に似ています。ただし、if-then-else ステートメントの機能を実現するには、`<xsl:when>` と `<xsl:otherwise>` の子要素を 1 つずつ持つ `<xsl:choose>` 要素を使用します。

### 構文

```
<xsl:if test=EXPRESSION>
  TEMPLATE
</xsl:if>
```

### 必須属性

- `test`
  - : 必要に応じて `boolean( )` に対して定義されたルールを使用して評価可能な XPath 式を含め、ブール値にします。値が true の場合、テンプレートは処理されます。そうでない場合は何もしません。

### 任意属性

なし

### タイプ

命令は、テンプレート内に表示されます。

### 定義

XSL section 9.1.

### Gecko のサポート

サポート済み
