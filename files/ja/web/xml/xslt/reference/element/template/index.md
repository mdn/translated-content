---
title: <xsl:template>
slug: Web/XML/XSLT/Reference/Element/template
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsl:template>` 要素は出力生成テンプレートを定義します。この要素は、match 属性または name 属性のいずれかを持つ必要があります。

## 構文

```xml
<xsl:template
  match=PATTERN
  name=NAME
  mode=NAME
  priority=NUMBER>
  <xsl:param> [optional]
  TEMPLATE
</xsl:template>
```

### 必須属性

なし

### 任意属性

- `match`
  - : このテンプレートを使用すべき要素を決定するパターンを指定します。 `name` 属性がない場合は必須の属性です。
- `name`
  - : このテンプレートの名前を指定します。テンプレートの名前は `<xsl:call-template>` 要素を使用して呼び出すことができます。
- `mode`
  - : このテンプレートの特定のモードを指定します。このモードは `<xsl:apply-templates>` 要素の属性と一致させることができます。 これは複数の方法で同じ情報を処理する場合に便利です。
- `priority`
  - : このテンプレートの数値優先度を指定します。これは `Infinity` 以外の任意の数にすることができます。複数のテンプレートが同じノードに一致する場合、プロセッサーはこの番号を使用します。

### 種類

最上位で、`<xsl:stylesheet>` または `<xsl:transform>` の子である必要があります。

## 仕様書

XSLT, section 5.3.

## Gecko の対応

対応済み。
