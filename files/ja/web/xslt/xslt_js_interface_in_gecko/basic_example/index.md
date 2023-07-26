---
title: 基本的な例
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Basic_Example
l10n:
  sourceCommit: e14e4830bcd43de164623aaf787fbd695be31d91
---

## 基本的な例

この基本的な例では、XML ファイルを読み込んで XSL 変換を適用します。これらは、[Netscape Gecko の XSLT](/ja/docs/Web/API/XSLTProcessor)の記事にある [HTML 生成](/ja/docs/Web/API/XSLTProcessor/Generating_HTML)の例で使用されているのと同じファイルです。XML ファイルは記事を記述し、XSL ファイルは情報を表示用に整形します。

### XML ファイル

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

### XSLT スタイルシート

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

この例では、同期 {{domxref("XMLHTTPRequest")}} を使用して、.xsl (`xslStylesheet`) と .xml (`xmlDoc`) の両方のファイルをのメモリーに読み込みます。 次に、.xsl ファイルがインポートされ(`xsltProcessor.importStylesheet(xslStylesheet)`)、変換が実行されます(`xsltProcessor.transformToFragment(xmlDoc, document)`)。 これにより、新しいページの読み込みを行うことなく、ページが読み込まれた後にデータのフェッチが可能になります。

### 例

```js
let xslStylesheet;
const xsltProcessor = new XSLTProcessor();
let myDOM;

let xmlDoc;

function Init() {
  // Load the xslt file, example1.xsl
  let myXMLHTTPRequest = new XMLHttpRequest();
  myXMLHTTPRequest.open("GET", "example1.xsl", false);
  myXMLHTTPRequest.send(null);

  xslStylesheet = myXMLHTTPRequest.responseXML;
  xsltProcessor.importStylesheet(xslStylesheet);

  // Load the XML file, example1.xml
  myXMLHTTPRequest = new XMLHttpRequest();
  myXMLHTTPRequest.open("GET", "example1.xml", false);
  myXMLHTTPRequest.send(null);

  xmlDoc = myXMLHTTPRequest.responseXML;

  const fragment = xsltProcessor.transformToFragment(xmlDoc, document);
  myDOM = fragment;
  document.getElementById("example").textContent = "";
  document.getElementById("example").appendChild(fragment);
}
```
