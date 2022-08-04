---
title: 基本的な例
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Basic_Example
tags:
  - XSLT
translation_of: Web/XSLT/XSLT_JS_interface_in_Gecko/Basic_Example
---
<h2 id="Basic_Example" name="Basic_Example">基本的な例</h2>

<p>基本的な例では、XMLファイルを読み込んでXSL変換を適用します。これらは、<a href="/ja/docs/Web/API/XSLTProcessor">Netscape GeckoのXSLT</a>の<a href="/ja/docs/XSLT_in_Gecko/Generating_HTML">HTML生成</a>例で使用されているのと同じファイルです。XMLファイルはアーティクルを記述し、XSLファイルは情報を表示用にフォーマットします。</p>

<p><small><strong> サンプル 4 : XML ファイル</strong></small></p>


<pre class="brush:xml;auto-links:false">&lt;?xml version="1.0"?&gt;
&lt;myNS:Article xmlns:myNS="http://devedge.netscape.com/2002/de"&gt;
  &lt;myNS:Title&gt;My Article&lt;/myNS:Title&gt;
  &lt;myNS:Authors&gt;
    &lt;myNS:Author company="Foopy Corp."&gt;Mr. Foo&lt;/myNS:Author&gt;
    &lt;myNS:Author&gt;Mr. Bar&lt;/myNS:Author&gt;
  &lt;/myNS:Authors&gt;
  &lt;myNS:Body&gt;
    The &lt;b&gt;rain&lt;/b&gt; in &lt;u&gt;Spain&lt;/u&gt; stays mainly in the plains.
  &lt;/myNS:Body&gt;
&lt;/myNS:Article&gt;</pre>

<p><small><strong>サンプル 5 : XSLT スタイルシート</strong></small></p>


<pre class="brush:xml;auto-links:false">&lt;?xml version="1.0"?&gt;
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
&lt;/xsl:stylesheet&gt;</pre>

<p>この例では、.xsl (<code>xslStylesheet</code>) と .xml (<code>xmlDoc</code>) の両方のファイルを同期{{domxref("XMLHTTPRequest")}}のメモリに読み込みます。 次に、.xslファイルがインポートされ(<code>xsltProcessor.importStylesheet(xslStylesheet)</code>)、変換が実行されます(<code>xsltProcessor.transformToFragment(xmlDoc, document)</code>)。 これにより、新しいページのロードを開始することなく、ページがロードされた後のデータのフェッチが可能になります。</p>

<p><small><strong>サンプル 6 : 例</strong></small></p>

<pre class="brush:js">var xslStylesheet;
var xsltProcessor = new XSLTProcessor();
var myDOM;

var xmlDoc;

function Init(){

  // load the xslt file, example1.xsl
  var myXMLHTTPRequest = new XMLHttpRequest();
  myXMLHTTPRequest.open("GET", "example1.xsl", false);
  myXMLHTTPRequest.send(null);

  xslStylesheet = myXMLHTTPRequest.responseXML;
  xsltProcessor.importStylesheet(xslStylesheet);


  // load the xml file, example1.xml
  myXMLHTTPRequest = new XMLHttpRequest();
  myXMLHTTPRequest.open("GET", "example1.xml", false);
  myXMLHTTPRequest.send(null);

  xmlDoc = myXMLHTTPRequest.responseXML;

  var fragment = xsltProcessor.transformToFragment(xmlDoc, document);

  document.getElementById("example").innerHTML = "";

  myDOM = fragment;
  document.getElementById("example").appendChild(fragment);
}</pre>
