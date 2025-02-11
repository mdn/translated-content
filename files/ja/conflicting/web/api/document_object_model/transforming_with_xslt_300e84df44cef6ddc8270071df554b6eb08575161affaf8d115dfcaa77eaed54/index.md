---
title: XSLT の基本的な例
slug: conflicting/Web/API/Document_Object_Model/Transforming_with_XSLT_300e84df44cef6ddc8270071df554b6eb08575161affaf8d115dfcaa77eaed54
original_slug: Web/API/XSLTProcessor/Basic_Example
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("XSLT")}}

この最初の例では、ブラウザーで XSLT 変換を設定する基本を示します。
この例では、記事に関する情報（タイトル、著者の一覧、本文）を含む XML 文書を取り込み、それを人間が読める形式で表示します。

XML 文書 (**example.xml**) は次の通りです。

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

この XML ファイルの `?xml-stylesheet` 処理命令により、その `href` 属性で適用する XSLT スタイルシートを指定します。

XSL スタイルシートファイル (**example.xsl**) は次の通りです。

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

XSLT スタイルシートは、最終的な出力を生成するためのすべてのテンプレートを含む、`xsl:stylesheet` 要素で始まります。
この例には 2 つのテンプレートがあります。一つはルートノードに対応し、一つは Author ノードに対応します。
ルートノードが出力する記事のタイトルにテンプレートが一致すると、（`apply-templates` を通して） Authors ノードの子の、すべての Author ノードに対応するテンプレートが処理されます。

例を試してみましょう。

1. ファイルシステム上にディレクトリーを作成し、その中に上記の `example.xml` と `example.xsl` を作成します。
2. ファイルのあるディレクトリーで[ローカルサーバーを起動](/ja/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server)します。
   これにより、あたかもインターネット上でホスティングされているかのように、ディレクトリー内のファイルを閲覧することができます。

   > [!WARNING]
   > ファイルシステムからスタイルシートを読み込むことは[オリジン間リクエスト](/ja/docs/Web/HTTP/CORS)であり、既定で許可されないためです。
   > XML とスタイルシートを同じローカルサーバーでホスティングすることで、同一のオリジンになることが保証されます。

3. ブラウザーから **example.xml** を開きます。
4. ブラウザーの出力は次のようになります。

   ```plain
   Browser Output :

       Article - My Article
       Authors:
       - Mr. Foo
       - Mr. Bar
   ```
