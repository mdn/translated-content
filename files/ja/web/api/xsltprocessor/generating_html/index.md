---
title: HTML の生成
slug: Web/API/XSLTProcessor/Generating_HTML
translation_of: Web/API/XSLTProcessor/Generating_HTML
---
## HTML の生成

ブラウザー内の XSLT のよくあるアプリケーションの一つは、クライアント上で XML を HTML へと変換することです。二つ目の例は、前回と同様の記事についての情報を含む文書 (example2.xml) を入力し、HTML 文書へ変換します。

記事の `<body>` 要素は HTML 要素（図 2 では `<b>` タグと `<u>` タグ）を含みます。XML 文書は HTML 要素と XML 要素の両方を含みますが、一つの名前空間、つまり XML 要素のための名前空間のみが必要です。これには HTML 名前空間が無く、XHTML 名前空間を使用すると HTML 文書のように振舞わない XML 文書を XSL に生成させてしまうため、XSL スタイルシート内の `xsl:output` によって結果の文書が HTML として扱われるようにします。XML 要素については、私たちの独自の名前空間 [`http://devedge.netscape.com/2002/de`](http://devedge.netscape.com/2002/de) と、それによって与えられる myNS 接頭辞 `(xmlns:myNS="http://devedge.netscape.com/2002/de")` が必要です。

**図 2 XML ファイル :(example2.xml)**

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

XSL スタイルシートは二つの名前空間を持つ必要があります。一つは XSLT 要素、もう一つは私たちの独自の XML 要素を XML 文書内で使用するためのものです。XSL スタイルシートの出力は、`xsl:output` 要素を使用して `HTML` に設定します。出力を HTML に設定すると結果的に要素 (青色の部分) が名前空間を持たないため、これらの要素は HTML 要素とみなされます。

**図 3 : 二つの名前空間をもつ XSL スタイルシート** (example2.xsl)

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                          xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                          xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html"/>
  ...
</xsl:stylesheet version="1.0">
```

XML 文書のルートノードに一致するテンプレートは、基本的な HTML ページの構造を生成するために作成し、使用されます。

**図 4 : 基本的な HTML 文書の生成**

```xml
...
<xsl:template match="/">
<html>

  <head>

    <title>
      <xsl:value-of select="/myNS:Article/myNS:Title"/>
    </title>

    <style type="text/css">
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
...
```

例を完成するには、さらに三つの `xsl:template` が必要です。最初の `xsl:template` は、二番目のテンプレートが body ノードを処理する間、author ノードに使用されます。三番目のテンプレートは、任意のノードや任意の属性に対応する一般的な対応規則を持っています。これは XML 文書内で、HTML 要素のすべてに対応し、変換生成される HTML 文書にコピーする要素を予約しておくために必要です。

**図 5 : 最終的な三つのテンプレート**

```xml
...
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
...
```

最終的な XSLT スタイルシートは次のようになります。

**図 6 : 最終的な XSLT スタイルシート**

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

        <style type="text/css">
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
