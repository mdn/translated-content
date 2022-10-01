---
title: 基本的な例
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Basic_Example
---

## 基本的な例

基本的な例では、XML ファイルを読み込んで XSL 変換を適用します。これらは、[Netscape Gecko の XSLT](/ja/docs/Web/API/XSLTProcessor)の[HTML 生成](/ja/docs/XSLT_in_Gecko/Generating_HTML)例で使用されているのと同じファイルです。XML ファイルはアーティクルを記述し、XSL ファイルは情報を表示用にフォーマットします。

**サンプル 4 : XML ファイル**

```xml
<?xml version="1.0"?>
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

**サンプル 5 : XSLT スタイルシート**

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

この例では、.xsl (`xslStylesheet`) と .xml (`xmlDoc`) の両方のファイルを同期{{domxref("XMLHTTPRequest")}}のメモリに読み込みます。 次に、.xsl ファイルがインポートされ(`xsltProcessor.importStylesheet(xslStylesheet)`)、変換が実行されます(`xsltProcessor.transformToFragment(xmlDoc, document)`)。 これにより、新しいページのロードを開始することなく、ページがロードされた後のデータのフェッチが可能になります。

**サンプル 6 : 例**

```js
var xslStylesheet;
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
}
```
