---
title: Exemple basique
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Basic_Example
tags:
  - Traduction_à_relire
translation_of: Web/XSLT/XSLT_JS_interface_in_Gecko/Basic_Example
original_slug: Web/XSLT/Interface_XSLT_JS_dans_Gecko/Exemple_basique
---
<h2 id="Exemple_basique">Exemple basique</h2>

<p>L'exemple que nous allons voir va charger un fichier XML et lui appliquer une transformation XSL. Nous utiliserons les mêmes fichiers que dans l'exemple <a href="fr/XSLT_dans_Gecko/G%c3%a9n%c3%a9ration_de_HTML">Génération de HTML</a> de l'article <a href="fr/XSLT_dans_Gecko">XSLT dans Gecko</a>. Le fichier XML décrit un article et le fichier XSL formate les informations pour l'affichage.</p>

<p><small><strong>Figure 4 : fichier XML</strong></small></p>

<p>Document XML (example1.xml):</p>

<pre>  &lt;?xml version="1.0"?&gt;
  &lt;myNS:Article
                         xmlns:myNS="http://devedge.netscape.com/2002/de"&gt;
    &lt;myNS:Title&gt;Mon article&lt;/myNS:Title&gt;
    &lt;myNS:Authors&gt;
      &lt;myNS:Author company="Foopy Corp."&gt;M. Foo&lt;/myNS:Author&gt;
      &lt;myNS:Author&gt;M. Bar&lt;/myNS:Author&gt;
    &lt;/myNS:Authors&gt;
    &lt;myNS:Body&gt;
      En &lt;em&gt;Espagne&lt;/em&gt;, les &lt;strong&gt;pluies&lt;/strong&gt; se concentrent
      principalement dans les plaines.
    &lt;/myNS:Body&gt;
  &lt;/myNS:Article&gt;
</pre>

<p><small><strong>Figure 5 : feuille de style XSLT</strong></small></p>

<p>feuille de style XSL (example1.xsl):</p>

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

            Auteurs :   &lt;br /&gt;
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
       ::   &lt;strong&gt;  &lt;xsl:value-of select="@company" /&gt;  &lt;/strong&gt;
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

<p>L'exemple charge en mémoire les deux fichiers .xsl (<code>xslStylesheet</code>) et .xml (<code>xmlDoc</code>) à l'aide de <code>XMLHTTPRequest</code> synchrone. Le fichier .xsl est alors importé (<code>xsltProcessor.importStylesheet(xslStylesheet)</code>) et la transformation exécutée (<code>xsltProcessor.transformToFragment(xmlDoc, document)</code>). Cela permet d'extraire des données après le chargement de la page, sans avoir à la rafraîchir.</p>

<p><small><strong>Figure 6 : Exemple voir l'exemple</strong></small></p>

<pre>var xslStylesheet;
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
</pre>
