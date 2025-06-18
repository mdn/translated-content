---
title: XSLT による変換
slug: Web/API/Document_Object_Model/Transforming_with_XSLT
l10n:
  sourceCommit: 457f4ed29a1eed6ac732e0982bb4c1631fa0226c
---

{{DefaultAPISidebar("DOM")}}

W3C 標準で気付かされる流行の一つは、スタイルからコンテンツを分ける努力がなされていることです。これにより、同じスタイルを複数のコンテンツで再利用することができ、簡単なメンテナンスでコンテンツの外観を（一つのファイルの修正のみで）すばやく変更することができます。

CSS (Cascade Style Sheets) は W3C によって最初に提唱された方法の一つでした。CSS は簡単な方法でスタイルルールをウェブ文書に適用します。これらのスタイルルールは、文書（その中のコンテンツ）のレイアウトを定義します。しかしながら、プログラミング構造や複雑なレイアウトモデルの作成能力に欠陥があるなどいくつかの制限があります。 CSS はまた、要素の配置の変更のサポートも制限されています。

XSL (Extensible Stylesheet Language) 変換は二つの部分で構成されています。 XML ツリーを他のマークアップツリーおよび XPath へ変換可能にする XSL 要素、ツリーのための選択言語。XSLT は XML 文書（そのコンテンツ）を取得し、XSL スタイルシートの規則によって新しい文書を生成します。XSLT によって、オリジナルの XML 文書から要素を追加、削除、再構成することができるため、結果的に文書構造をより細かく制御することができます。

XSLT による変換は、テンプレートからなる規則を基にしています。各テンプレート（XPath を使用）は入力する XML 文書の断片に一致すると、新しい文書を生成するため、テンプレートをその断片の代わりとなる部分に適用します。

## 基本的な例

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
ルートノードが出力する記事のタイトルにテンプレートが一致すると、（`apply-templates` を通して） `Authors` ノードの子の、すべての `Author` ノードに対応するテンプレートが処理されます。

例を試してみましょう。

1. ファイルシステム上にディレクトリーを作成し、その中に上記の `example.xml` と `example.xsl` を作成します。
2. ファイルのあるディレクトリーで[ローカルサーバーを起動](/ja/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server)します。
   これにより、あたかもインターネット上でホスティングされているかのように、ディレクトリー内のファイルを閲覧することができます。

   > [!WARNING]
   > XML ファイルをファイルシステムから直接開こうとしても動作しません。スタイルシートを読み込むことは[オリジン間リクエスト](/ja/docs/Web/HTTP/Guides/CORS)であり、既定で許可されないためです。
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

## HTML の生成

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
