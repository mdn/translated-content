---
title: HTML の生成
slug: Web/API/Document_Object_Model/Transforming_with_XSLT
original_slug: Web/API/XSLTProcessor/Generating_HTML
l10n:
  sourceCommit: 457f4ed29a1eed6ac732e0982bb4c1631fa0226c
---

{{APIRef("XSLT")}}

ブラウザーにおける XSLT のよくある活用法の一つが、クライアント上で XML を HTML へと変換することです。この例は、記事についての情報を含む文書 (example2.xml) を入力し、HTML 文書へ変換します。

記事の `<body>` 要素は HTML 要素（`<b>` および `<u>` タグ）を含んでいます。この XML 文書は HTML 要素と XML 要素の両方を含んでいますが、必要な名前空間は XML 要素のための名前空間 1 つだけです。HTML には名前空間が無く、XHTML 名前空間を使用すると HTML 文書のように動作しない XML 文書を XSL に生成させてしまうため、XSL スタイルシート内の `xsl:output` によって結果の文書が HTML として扱われるようにします。XML 要素については、独自の名前空間 `http://devedge.netscape.com/2002/de` と、それによって与えられる myNS 接頭辞 `(xmlns:myNS="http://devedge.netscape.com/2002/de")` が必要です。

## XML ファイル

```xml
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="example2.xsl"?>
  <myNS:Article xmlns:myNS="http://devedge.netscape.com/2002/de">
    <myNS:Title>My Article</myNS:Title>
    <myNS:Authors>
      <myNS:Author company="Foopy Corp.">Mr. Foo</myNS:Author>
      <myNS:Author>Mr. Bar</myNS:Author>
    </myNS:Authors>
    <myNS:Body>
      The <b>rain</b> in <u>Spain</u> stays mainly in the plains.
    </myNS:Body>
  </myNS:Article>
```

XSL スタイルシートには 2 つの名前空間が必要です。1 つは XSLT 要素のため、もう 1 つは独自の XML 要素を XML 文書内で使用するためのものです。XSL スタイルシートの出力を `HTML` に設定するために `xsl:output` 要素を使用します。出力を HTML に設定すると結果的に要素（青色の部分）が名前空間を持たないため、これらの要素は HTML 要素とみなされます。

## 2 つの名前空間を持つ XSL スタイルシート

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html"/>
  …
</xsl:stylesheet version="1.0">
```

XML 文書のルートノードに一致するテンプレートは、基本的な HTML ページの構造を生成するために作成し、使用されます。

## 基本的な HTML 文書の生成

```xml
…
<xsl:template match="/">
<html>

  <head>

    <title>
      <xsl:value-of select="/myNS:Article/myNS:Title"/>
    </title>

    <style>
      .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
    </style>

  </head>

  <body>
    <p class="myBox">
      <span class="title">
        <xsl:value-of select="/myNS:Article/myNS:Title"/>
      </span> </br>

      Authors:   <br />
        <xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/>
    </p>

    <p class="myBox">
      <xsl:apply-templates select="//myNS:Body"/>
    </p>

  </body>

</html>
</xsl:template>
…
```

例を完成するには、さらに 3 つの `xsl:template` が必要です。最初の `xsl:template` は、2 番目のテンプレートが body ノードを処理する間、author ノードに使用されます。3 番目のテンプレートは、任意のノードや任意の属性に対応する一般的な対応規則を持っています。これは XML 文書内で、HTML 要素のすべてに対応し、変換生成される HTML 文書にコピーする要素を予約しておくために必要です。

## 最終的な 3 つのテンプレート

```xml
…
<xsl:template match="myNS:Author">
    --   <xsl:value-of select="." />

  <xsl:if test="@company">
    ::   <b>  <xsl:value-of select="@company" />  </b>
  </xsl:if>

  <br />
</xsl:template>
```

```xml
<xsl:template match="myNS:Body">
  <xsl:copy>
    <xsl:apply-templates select="@*|node()"/>
  </xsl:copy>
</xsl:template>

<xsl:template match="@*|node()">
  <xsl:copy>
    <xsl:apply-templates select="@*|node()"/>
  </xsl:copy>
</xsl:template>
…
```

最終的な XSLT スタイルシートは次のようになります。

## 最終的な XSLT スタイルシート

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html" />

  <xsl:template match="/">
    <html>

      <head>

        <title>
          <xsl:value-of select="/myNS:Article/myNS:Title"/>
        </title>

        <style>
          .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
        </style>

      </head>

      <body>
        <p class="myBox">
          <span class="title">
            <xsl:value-of select="/myNS:Article/myNS:Title"/>
          </span> <br />

          Authors:   <br />
            <xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/>
          </p>

        <p class="myBox">
          <xsl:apply-templates select="//myNS:Body"/>
        </p>

      </body>

    </html>
  </xsl:template>

  <xsl:template match="myNS:Author">
      --   <xsl:value-of select="." />

    <xsl:if test="@company">
      ::   <b>  <xsl:value-of select="@company" />  </b>
    </xsl:if>

    <br />
  </xsl:template>

  <xsl:template match="myNS:Body">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="@*|node()">
      <xsl:copy>
        <xsl:apply-templates select="@*|node()"/>
      </xsl:copy>
  </xsl:template>
</xsl:stylesheet>
```
