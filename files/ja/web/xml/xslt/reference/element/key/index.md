---
title: <xsl:key>
slug: Web/XML/XSLT/Reference/Element/key
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsl:key>` 要素は、`key( )` 関数を使用してスタイルシートの他の場所で使用できる名前付きキーを宣言します。

## 構文

```xml
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

### 種類

最上位で、`<xsl:stylesheet>` または `<xsl:transform>` の子である必要があります。

## 仕様書

XSLT, section 12.2.

## Gecko の対応

対応済み。
