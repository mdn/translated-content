---
title: <xsl:key>
slug: Web/XSLT/Element/key
---

{{ XsltRef() }}

`<xsl:key>`要素は、`key( )`関数を使用してスタイルシートの他の場所で使用できる名前付きキーを宣言します。

### 構文

```
<xsl:key name=NAME match=EXPRESSION
  use=EXPRESSION />
```

### 必須属性

- `name`
  - : このキーの名前を指定します。QName でなければなりません。
- `match`
  - : このキーが適用可能なノードを定義します。
- `use`
  - : 適用可能な各ノードのキーの値を決定するために使用される XPath 式を指定します。

### 任意属性

なし

### タイプ

最上位は `<xsl:stylesheet>` または `<xsl:transform>` の子である必要があります。

### 定義

XSLT, section 12.2.

### Gecko のサポート

サポート済み
