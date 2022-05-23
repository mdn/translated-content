---
title: Generating HTML
slug: Web/API/XSLTProcessor/Generating_HTML
translation_of: Web/API/XSLTProcessor/Generating_HTML
---
<p>
</p>
<h2 id="HTML_.E3.82.92.E7.94.9F.E6.88.90.E3.81.99.E3.82.8B"> HTML を生成する </h2>
<p>ブラウザ内の XSLT の共通アプリケーションの一つは、クライアント上で XML を HTML へと変換することです。二つ目の例は、前回と同様の記事についての情報を含むドキュメント (example2.xml) を入力し、HTML ドキュメントへ変換します。
</p><p>今回は、記事の <code><span>&lt;body&gt;</span></code> 要素は HTML 要素 (図 2 では <code><span>&lt;b&gt;</span></code> タグと <code><span>&lt;u&gt;</span></code> タグ) を含みます。XML ドキュメントは HTML 要素と XML 要素の両方を含みますが、一つの名前空間、つまり XML 要素のための名前空間のみが必要です。これには HTML 名前空間が無く、XHTML 名前空間を使用すると HTML ドキュメントのように振舞わない XML ドキュメントを XSL に生成させてしまうため、XSL スタイルシート内の <code>xsl:output</code> によって結果のドキュメントが HTML として扱われるようにします。XML 要素については、私たちの独自の名前空間 <code><a class=" external" href="http://devedge.netscape.com/2002/de">http://devedge.netscape.com/2002/de</a></code> と、それによって与えられる myNS プレフィックス <code>(xmlns:myNS="<span>http://devedge.netscape.com/2002/de</span>")</code> が必要です。
</p><p><small><b>図 2 XML ファイル :(example2.xml)<span>view example | view source</span></b></small>
<span>XML Document (example2.xml):</span>
</p>
<pre>&lt;?xml version="1.0"?&gt;
&lt;?xml-stylesheet type="text/xsl" href="example2.xsl"?&gt;
  &lt;myNS:Article xmlns:myNS="http://devedge.netscape.com/2002/de"&gt;
    &lt;myNS:Title&gt;My Article&lt;/myNS:Title&gt;
    &lt;myNS:Authors&gt;
      &lt;myNS:Author company="Foopy Corp."&gt;Mr. Foo&lt;/myNS:Author&gt;
      &lt;myNS:Author&gt;Mr. Bar&lt;/myNS:Author&gt;
    &lt;/myNS:Authors&gt;
    &lt;myNS:Body&gt;
      The &lt;b&gt;rain&lt;/b&gt; in &lt;u&gt;Spain&lt;/u&gt; stays mainly in the plains.
    &lt;/myNS:Body&gt;
  &lt;/myNS:Article&gt;
</pre>
<p>XSL スタイルシートは二つの名前空間を持つ必要があります。一つは XSLT 要素、もう一つは私たちの独自の XML 要素を XML ドキュメント内で使用するためのものです。XSL スタイルシートの出力は、<code>xsl:output</code> 要素を使用して <code>HTML</code> に設定します。出力を HTML に設定すると結果的に要素 (青色の部分) が名前空間を持たないため、これらの要素は HTML 要素とみなされます。
</p><p><small><b>図 3 : 二つの名前空間をもつ XSL スタイルシート</b> (example2.xsl)</small>
<span>XSL Stylesheet (example2.xsl):</span>
</p>
<pre>  &lt;?xml version="1.0"?&gt;
  &lt;xsl:stylesheet version="1.0"
                           xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                           xmlns:myNS="http://devedge.netscape.com/2002/de"&gt;

    &lt;xsl:output method="html"/&gt;
    ...
  &lt;/xsl:stylesheet version="1.0"&gt;
</pre>
<p>XML ドキュメントのルートノードに一致するテンプレートは、基本的な HTML ページの構造を生成するために作成し、使用されます。
</p><p><small><b>図 4 : 基本的な HTML ドキュメントの生成</b></small>
<span>XSL スタイルシート (example2.xsl):</span>
</p>
<pre>  ...
  &lt;xsl:template match="/"&gt;
  &lt;html&gt;

    &lt;head&gt;

      &lt;title&gt;
        &lt;xsl:value-of select="/myNS:Article/myNS:Title"/&gt;
      &lt;/title&gt;

      &lt;style type="text/css"&gt;
        .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
      &lt;/style&gt;

    &lt;/head&gt;

    &lt;body&gt;
      &lt;p class="myBox"&gt;
        &lt;span class="title"&gt;
          &lt;xsl:value-of select="/myNS:Article/myNS:Title"/&gt;
        &lt;/span&gt; &lt;/br&gt;

        Authors:   &lt;br /&gt;
          &lt;xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/&gt;
      &lt;/p&gt;

      &lt;p class="myBox"&gt;
        &lt;xsl:apply-templates select="//myNS:Body"/&gt;
      &lt;/p&gt;

    &lt;/body&gt;

  &lt;/html&gt;
  &lt;/xsl:template&gt;
  ...
</pre>
<p>例を完成するには、さらに三つの <code>xsl:template</code> が必要です。最初の <code>xsl:template</code> は、二番目のテンプレートが body ノードを処理する間、author ノードに使用されます。三番目のテンプレートは、任意のノードや任意の属性に対応する一般的な対応規則を持っています。これは XML ドキュメント内で、HTML 要素のすべてに対応し、変換生成される HTML ドキュメントにコピーする要素を予約しておくために必要です。
</p><p><b><small>図 5 : 最終的な三つのテンプレート</small></b>
<span>XSL Stylesheet(example2.xsl):</span>
</p>
<pre>  ...
  &lt;xsl:template match="myNS:Author"&gt;
     --   &lt;xsl:value-of select="." /&gt;

    &lt;xsl:if test="@company"&gt;
     ::   &lt;b&gt;  &lt;xsl:value-of select="@company" /&gt;  &lt;/b&gt;
    &lt;/xsl:if&gt;

    &lt;br /&gt;
  &lt;/xsl:template&gt;

  &lt;xsl:template match="myNS:Body"&gt;
    &lt;xsl:copy&gt;
      &lt;xsl:apply-templates select="@*|node()"/&gt;
    &lt;/xsl:copy&gt;
  &lt;/xsl:template&gt;

  &lt;xsl:template match="@*|node()"&gt;
    &lt;xsl:copy&gt;
      &lt;xsl:apply-templates select="@*|node()"/&gt;
    &lt;/xsl:copy&gt;
  &lt;/xsl:template&gt;
  ...
</pre>
<p>最終的な XSLT スタイルシートは次のようになります:
</p><p><small><b>図 6 : 最終的な XSLT スタイルシート<span>view example | view source</span></b></small>
<span>XSL Stylesheet:</span>
</p>
<pre>  &lt;?xml version="1.0"?&gt;
  &lt;xsl:stylesheet version="1.0"
                           xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                           xmlns:myNS="http://devedge.netscape.com/2002/de"&gt;

    &lt;xsl:output method="html" /&gt;

    &lt;xsl:template match="/"&gt;
      &lt;html&gt;

        &lt;head&gt;

          &lt;title&gt;
            &lt;xsl:value-of select="/myNS:Article/myNS:Title"/&gt;
          &lt;/title&gt;

          &lt;style type="text/css"&gt;
            .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
          &lt;/style&gt;

        &lt;/head&gt;

        &lt;body&gt;
          &lt;p class="myBox"&gt;
            &lt;span class="title"&gt;
              &lt;xsl:value-of select="/myNS:Article/myNS:Title"/&gt;
            &lt;/span&gt; &lt;br /&gt;

            Authors:   &lt;br /&gt;
              &lt;xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/&gt;
            &lt;/p&gt;

          &lt;p class="myBox"&gt;
            &lt;xsl:apply-templates select="//myNS:Body"/&gt;
          &lt;/p&gt;

        &lt;/body&gt;

      &lt;/html&gt;
    &lt;/xsl:template&gt;

    &lt;xsl:template match="myNS:Author"&gt;
       --   &lt;xsl:value-of select="." /&gt;

      &lt;xsl:if test="@company"&gt;
       ::   &lt;b&gt;  &lt;xsl:value-of select="@company" /&gt;  &lt;/b&gt;
      &lt;/xsl:if&gt;

      &lt;br /&gt;
    &lt;/xsl:template&gt;

    &lt;xsl:template match="myNS:Body"&gt;
      &lt;xsl:copy&gt;
        &lt;xsl:apply-templates select="@*|node()"/&gt;
      &lt;/xsl:copy&gt;
    &lt;/xsl:template&gt;

    &lt;xsl:template match="@*|node()"&gt;
        &lt;xsl:copy&gt;
          &lt;xsl:apply-templates select="@*|node()"/&gt;
        &lt;/xsl:copy&gt;
    &lt;/xsl:template&gt;
  &lt;/xsl:stylesheet&gt;
</pre>
<div class="noinclude">
</div>
{{ languages( { "en": "en/XSLT_in_Gecko/Generating_HTML", "fr": "fr/XSLT_dans_Gecko/G\u00e9n\u00e9ration_de_HTML", "ko": "ko/XSLT_in_Gecko/Generating_HTML" } ) }}
