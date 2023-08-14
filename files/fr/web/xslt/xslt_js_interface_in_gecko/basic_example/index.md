---
title: Exemple simple
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Basic_Example
l10n:
  sourceCommit: 96f68b50c1eac0af56f185d82c17c9ccaf212b67
---

L'exemple que nous allons voir va charger un fichier XML et lui appliquer une transformation XSL. Nous utiliserons les mêmes fichiers que dans l'exemple [Génération de HTML](/fr/docs/Web/API/XSLTProcessor/Generating_HTML) de l'article [XSLT dans Gecko](/fr/docs/Web/API/XSLTProcessor). Le fichier XML décrit un article et le fichier XSL formate les informations pour l'affichage.

## Fichier XML

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

## Feuille de style XSLT

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

L'exemple charge en mémoire les deux fichiers XSL (`xslStylesheet`) et .XML (`xmlDoc`) à l'aide d'une requête [`XMLHTTPRequest`](/fr/docs/Web/API/XMLHttpRequest) synchrone. Le fichier XSL est alors importé (`xsltProcessor.importStylesheet(xslStylesheet)`) et la transformation exécutée (`xsltProcessor.transformToFragment(xmlDoc, document)`). Cela permet d'extraire des données après le chargement de la page, sans avoir à la rafraîchir.

## Exemple

```js
let xslStylesheet;
const xsltProcessor = new XSLTProcessor();
let myDOM;

let xmlDoc;

function init() {
  // On charge le fichier XSLT, example1.xsl
  let myXMLHTTPRequest = new XMLHttpRequest();
  myXMLHTTPRequest.open("GET", "example1.xsl", false);
  myXMLHTTPRequest.send(null);

  xslStylesheet = myXMLHTTPRequest.responseXML;
  xsltProcessor.importStylesheet(xslStylesheet);

  // On charge le fichier XML, example1.xml
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
