---
title: XSLT の基本的な例
slug: Web/API/XSLTProcessor/Basic_Example
---

## 基本的な例

最初の例は、ブラウザーで XSLT 変換の設定の基本を実演します。 この例は、人が読むことのできる書式で書かれた記事についての情報 (タイトル、著者の一覧、本文) を含む XML 文書を取得します。

図 1 は基本的な XSLT の例のソースです。 XML 文書 (example.xml) は記事についての情報を含んでいます。 `?xml-stylesheet?` で処理を指示すると、その href 属性を通して XSLT スタイルシートへリンクします。

XSLT スタイルシートは、最終的な出力を生成するためのすべてのテンプレートを含む、`xsl:stylesheet` 要素で開始します。図 1 の例には二つのテンプレートがあります。一つはルートノードに対応し、一つは Author ノードに対応します。ルートノードが出力する記事のタイトルにテンプレートが一致すると、(`apply-templates` を通して) Authors ノードの子の、すべての Author ノードに対応するテンプレートが処理されます。

図 1 : 簡単な XSLT の例

XML 文書 (example.xml) :

```xml
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="example.xsl"?>
<Article>
  <Title>My Article</Title>
  <Authors>
    <Author>Mr. Foo</Author>
    <Author>Mr. Bar</Author>
  </Authors>
  <Body>This is my article text.</Body>
</Article>
```

XSL スタイルシート (example.xsl) :

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="text"/>

  <xsl:template match="/">
    Article - <xsl:value-of select="/Article/Title"/>
    Authors: <xsl:apply-templates select="/Article/Authors/Author"/>
  </xsl:template>

  <xsl:template match="Author">
    - <xsl:value-of select="." />
  </xsl:template>

</xsl:stylesheet>
```

ブラウザーの出力:

```
Article - My Article
Authors:
- Mr. Foo
- Mr. Bar
```
