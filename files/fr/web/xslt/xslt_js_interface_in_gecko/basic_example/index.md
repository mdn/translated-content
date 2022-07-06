---
title: Exemple basique
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Basic_Example
tags:
  - Traduction_à_relire
translation_of: Web/XSLT/XSLT_JS_interface_in_Gecko/Basic_Example
original_slug: Web/XSLT/Interface_XSLT_JS_dans_Gecko/Exemple_basique
---
## Exemple basique

L'exemple que nous allons voir va charger un fichier XML et lui appliquer une transformation XSL. Nous utiliserons les mêmes fichiers que dans l'exemple [Génération de HTML](fr/XSLT_dans_Gecko/G%c3%a9n%c3%a9ration_de_HTML) de l'article [XSLT dans Gecko](fr/XSLT_dans_Gecko). Le fichier XML décrit un article et le fichier XSL formate les informations pour l'affichage.

**Figure 4&nbsp;: fichier XML**

Document XML (example1.xml):

```xml
<?xml version="1.0"?>
<myNS:Article
                        xmlns:myNS="http://devedge.netscape.com/2002/de">
  <myNS:Title>Mon article</myNS:Title>
  <myNS:Authors>
    <myNS:Author company="Foopy Corp.">M. Foo</myNS:Author>
    <myNS:Author>M. Bar</myNS:Author>
  </myNS:Authors>
  <myNS:Body>
    En <em>Espagne</em>, les <strong>pluies</strong> se concentrent
    principalement dans les plaines.
  </myNS:Body>
</myNS:Article>
```

**Figure 5&nbsp;: feuille de style XSLT**

feuille de style XSL (example1.xsl):

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

          Auteurs&nbsp;:   <br />
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
    &nbsp;::   <strong>  <xsl:value-of select="@company" />  </strong>
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

L'exemple charge en mémoire les deux fichiers .xsl (`xslStylesheet`) et .xml (`xmlDoc`) à l'aide de `XMLHTTPRequest` synchrone. Le fichier .xsl est alors importé (`xsltProcessor.importStylesheet(xslStylesheet)`) et la transformation exécutée (`xsltProcessor.transformToFragment(xmlDoc, document)`). Cela permet d'extraire des données après le chargement de la page, sans avoir à la rafraîchir.

**Figure 6&nbsp;: Exemple voir l'exemple**

```js
var xslStylesheet;
var xsltProcessor = new XSLTProcessor();
var myDOM;

var xmlDoc;

function Init(){

  // chargement du fichier xslt, example1.xsl
  var myXMLHTTPRequest = new XMLHttpRequest();
  myXMLHTTPRequest.open("GET", "example1.xsl", false);
  myXMLHTTPRequest.send(null);

  xslStylesheet = myXMLHTTPRequest.responseXML;
  xsltProcessor.importStylesheet(xslStylesheet);

  // chargement du fichier xml, example1.xml
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
