---
title: XSLT による XML の変換
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT
l10n:
  sourceCommit: 19bf2ac9d21bb9c97591c226d68edfbc0363a237
---

コンテンツとプレゼンテーションの分離は、[XML](/ja/docs/Web/XML) の重要な設計の特徴です。 XML 文書の構造は、このデータが最終的にどのように表現されるべきかを示す必要性に妨げられることなく、コンテンツ自体の個々の側面間の重要な関係を反映し、明確にするように設計されています。このインテリジェントな構造化は、より多くのデータ移行を自動化し、ネットワークでリンクされた異機種間で配置する際に具体的な意味を持ちます。

しかし、 XML 文書内に格納されるコンテンツの多くは、最終的には人間の読者に表示する必要があります。ブラウザーは、親しみやすく柔軟性の高いインターフェイスを提供しているため、 XML コンテンツの表示版を提供するための理想的なメカニズムです。さまざまな XML 技術を利用して一から構築された Firefox は、元の XML 文書と、それらを HTML 表示用にスタイル設定およびレイアウトするために使用される特殊なスタイルシートの両方を処理するために必要なすべてのメカニズムをそれ自体に組み込んでおり、クライアントサイドの処理でサーバーの負荷を軽減します。

現時点で、 Gecko （Firefox のレイアウトエンジン）は 2 種類の XML 用のスタイルシートに対応しています。基本的な表示方法の制御 — フォント、色、位置、など — については、 Gecko は [CSS](/ja/docs/Web/CSS) を使用します。

ここでは、Gecko が対応している 2 つ目の種類のスタイルシート、XSLT スタイルシートに注目します。XSLT は eXtensible Stylesheet Language/Transform の略で、この名前は最適です。 XSLT は、スタイルシート作成者が主要な XML 文書を 2 つの重要な方法で変換することができます。コンテンツの操作と並べ替え（必要であれば、コンテンツの並べ替えも含みます）、およびコンテンツの異なる形式への変換（Firefox の場合は、ブラウザーで表示できる HTML への変換）です。

## XSLT とは何か

XSLT (eXtensible Stylesheet Language/Transform) はとても強力な言語であり、この記事の全体的な議論はこの記事の範囲をはるかに超えていますが、基本的な概念の簡単な説明は Netscape の機能の説明の理解に役立ちます。

XSLT スタイルシートは XML 文書です。独自の特殊な構文を持つ CSS と異なり、XSLT スタイルシートは XML 文書であり、整形式を含むすべての XML 規則に準拠しなければなりません。したがって、変換のモデルは 1 つの XML 文書を使用して別の XML 文書を変換することです。

XSLT スタイルシートには、標準の XSLT 見出しが含まれています。 XSLT スタイルシートの最も外側の要素は `<xsl:stylesheet>` 要素でなければなりません (受け入れ可能な代替要素は `<xsl:transform>` 要素です)。この要素には少なくとも 1 つの名前空間宣言と必須のバージョン属性が含まれます。他の名前空間と 3 つのオプションの属性も含めることができます。

## XSLT 名前空間

XSLT の必須名前空間は `"http://www.w3.org/1999/XSL/Transform"` です。名前空間は XML のかなりの混乱の対象です。多くの場合、名前空間は URI であるように見えますが、実際にはそのアドレスにあるリソースを参照していません。代わりに既知の要素セットの一意の識別子を指定する単なる方法です。文字列 `"http://www.w3.org/1999/XSL/Transform"` は、1999 年に XSLT 勧告で W3C によって指定されたタグのセットに属するとマークされた要素を指定する定数です。スタイルシートで時折見られる別の文字列 `"http://www.w3.org/TR/WD-xsl"` は、W3C 文書の以前の作業草案 (したがって WD) に準拠していることを示します。後者のネームスペースは W3C が最終的に採用したものと互換性がなく、Netscape でサポートされていません。

繰り返し `"http://www.w3.org/1999/XSL/Transform"` と入力するのは面倒で、マークアップを読みにくくするため、スタイルシートの見出しの名前空間に省略名を割り当てるための標準的なメカニズムがあります。したがって、スタイルシートを開始する要素の完全な例は、このようになります。

```xml
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
```

`xmlns` 擬似属性は、後続の文書全体で使用するために短縮名 `xsl` を完全な名前空間に対応付けます。したがって、上記の stylesheet 要素の前に `xsl:` が付いています。`xsl` は従来使用されていた短縮名（接頭辞と呼ばれます）ですが必須ではなく、別の名前を選択することも可能です。この記事の例はすべて `xsl` 接頭辞の使用を前提としています。

## XSLT が XML ツリーを処理する方法

プロセッサーと呼ばれる XSLT 変換エンジンは、文書では直接動作しません。変換が行われる前に、プライマリ XML 文書とスタイルシート文書は、メモリー内の文書構造の抽象的な表現を作成するパーサーを介して実行する必要があります。ツリーと呼ばれるこの表現は、プロセッサーによって実際に操作されるものです。ツリーは抽象データ型であり、パーサーとプロセッサーに応じてさまざまな方法で実装できる概念モデルです。 Netscape ではツリー構造として W3C DOM に似た構造を使用していますが、他のものも可能です。唯一の要件はツリー内のオブジェクトの配置、そのプロパティ、およびそれらの関係に関係します。

ツリーはノードの階層的なフレームワークで構成されています。単一のルートノード、要素ノード、テキストノード、属性ノード、コメントノード、処理命令ノード、および名前空間ノードの 7 つの異なるタイプのノードで構成できます。

ツリーの最上部にルートノードがあります。ルートノードは XML 文書の個々の部分に対応していません。文書全体を表します。ルートノードの下には要素、コメント、処理命令などの子要素があります。これらの子要素の中にはさらに子要素がいるものもあります。そして、これはいくつかのレベルのために続けることができます。たとえば、テキストノードには子を持たないなど、ノードの種類が発生する特定の制約があります。

プロセッサーのアクションの結果もツリーになります。 Netscape はこのツリーを使用してブラウザーウィンドウにコンテンツを表示します。

## XPath とノードの選択

本質的に、XSLT スタイルシートはテンプレートと呼ばれる一連のルールであり、この特定のパターンに一致するノードはこの特定の方法で操作され、結果ツリーのこの特定の位置で終了することを宣言します。これがどのように達成されるかについての詳細は、プロセッサーに委ねられています。スタイルシートの実行順序は保証できないため、XSLT は副作用を発生させる機能をサポートしていません。これは Lisp や Scheme のようなものです。

変換はプロセッサーがツリー上の個々のノードを特定できるかどうかに依存します。これを容易にするために、W3C は別の言語である XPath を使用することに決め、XPath は XSLT コンテキスト外でも使用されています。その名前が示すように、XPath はプロセッサーがツリーを通過して目的のノードに到達する「パス」を定義します。このパスは評価される XPath 特有の表現、一致される条件の数、ノードを関連付ける方法、および/またはツリー内の方向性の指示を含む式からなります。XSLT で最も一般的に使用される XPath の部分の詳細な説明は、参考セクションで説明します。

テンプレートを照合する際に潜在的な競合があった場合は、一連のカスケード優先ルールを使用して解決されます。一般的に、より具体的なテンプレートルールはあまり具体的でないテンプレートルールよりも優先され、他のものは同等であるため、文書の後に表示されるテンプレートルールが先に表示されたものよりも優先されます。

スタイルシートは、処理命令を介して XML 文書に添付することができます。特定の XML 文書を処理するためにどの XSLT スタイルシートを使用すべきかを示す最も簡単な方法は、XML 文書自体に処理命令を含めることです。 たとえば、スタイルシートが inventory.xsl と呼ばれ、XML 文書と同じディレクトリーにある場合、XML 文書の処理命令は次のようになります。

```xml
<?xml-stylesheet type="text/xml" href="inventory.xsl"?>
```

これは XML 文書のプロローグセクションに配置する必要があります。

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

### XML ファイル

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

### 2 つの名前空間を持つ XSL スタイルシート

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

### 基本的な HTML 文書の生成

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

### 最終的な 3 つのテンプレート

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

### 最終的な XSLT スタイルシート

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

## XSLT/XPath リファレンス

- [要素](/ja/docs/Web/XML/XSLT/Reference/Element)
- [軸](/ja/docs/Web/XML/XPath/Reference/Axes)
- [関数](/ja/docs/Web/XML/XPath/Reference/Functions)

## 参考文献

### 書籍

- **XSLT: Programmer's Reference, Second Edition**
  - **著者**: Michael H. Kay
  - **ページ数**: 992 pages
  - **出版社**: Wrox; 2 edition (May 3, 2001)
  - **ISBN**: 0764543814
    - Michael Kay は W3C XSL ワーキンググループのメンバーであり、オープンソース XSLT プロセッサーである Saxon の開発者です。彼はまた、このテーマに関する第 2 版に達した唯一の本の著者でもあります。これは XSLT ストーリーのすべての可能なベースを網羅している非常に大きな本です。うまくレイアウトされています。

<https://www.amazon.com/XSLT-Programmers-Reference-Programmer/dp/0764543814>

- **XSLT**
  - **著者**: Doug Tidwell
  - **ページ数**: 473 pages
  - **出版社**: O'Reilly Media; 1 edition (August 15, 2001)
  - **ISBN**: 0596000537
    - Doug Tidwell は IBM の上級開発者であり、一般に XML 技術の著名なエバンジェリストです。彼は IBM の幅広い XML 開発者サイトで、XML のさまざまな側面に関するいくつかの記事とチュートリアルの著者です。この本はマイケル・ケイのものよりもいくぶん包括的ではありませんが、基礎をうまくカバーし、興味深い例を提供しています。

<https://www.amazon.com/Xslt-Doug-Tidwell/dp/0596000537>

- **Learning XML, Second Edition**
  - **著者**: Erik T. Ray
  - **ページ数**: 432 pages
  - **出版社**: O'Reilly Media; 2 edition (September 22, 2003)
  - **ISBN**: 0596004206
    - タイトルが示すように、これは一般的に XML の概要です。第 6 章は特に XSLT に専念しています。

<https://www.amazon.com/gp/product/0596004206>

### 仕様書

- **メインの XSL ページ**: <https://www.w3.org/Style/XSL/> （英語）
- **XSLT 仕様書の概要**: <https://www.w3.org/TR/xslt/> （英語）
- **Archive of public style (CSS and XSLT) discussions**: [https://lists.w3.org/Archives/Public/www-style/](https://lists.w3.org/Archives/Public/www-style/)
- **XPath 仕様書の概要**: <https://www.w3.org/TR/xpath/> （英語）

### 記事

- [Hands-on XSL](https://developer.ibm.com/technologies/web-development/) by Don R. Day
- [What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/index.html) by G. Ken Holman

### チュートリアル/例

- [Jeni's XSLT Pages](https://www.jenitennison.com/xslt/)
- [XMLPitstop.com](https://web.archive.org/web/20211209064736/https://www.xmlpitstop.com/default_datatype_SSC.html)
- [XSL Tutorial](https://nwalsh.com/docs/tutorials/xsl/)
