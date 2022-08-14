---
title: 高度な例
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Advanced_Example
tags:
  - XSLT
translation_of: Web/XSLT/XSLT_JS_interface_in_Gecko/Advanced_Example
---
<h2 id="Advanced_Example" name="Advanced_Example">高度な例</h2>

<p>高度な例では、コンテンツに基づいていくつかのdivをソートします。この例では、昇順ソートと降順ソートの間で交互にコンテンツをソートすることができます。JavaScriptは最初に.xslファイルのみをロードし、ファイルのロードが完了すると<code>xslloaded</code>変数をtrueに設定します。{{domxref("XSLTProcessor.getParameter()")}}メソッドを使用すると、コードは昇順または降順に並べ替えることができます。パラメータが空の場合（ソートが初めて発生したとき、XSLTファイルに値がないため）はデフォルトで昇順になります。ソート値は{{domxref("XSLTProcessor.setParameter()")}}を使用して設定されます。</p>

<p>XSLTファイルには、JavaScriptがソート方法を変更するために設定する<code>myOrder</code>というパラメータがあります。<code>xsl:sort</code>要素のorder属性は、<code>$myOrder</code>を使用してパラメータの値にアクセスできます。ただし、その値は文字列ではなくXPATH式である必要があるため、<code>{$myOrder}</code>が使用されます。{} を使用すると、コンテンツがXPath式として評価されます。</p>

<p>変換が完了すると、この例に示すように、結果がドキュメントに追加されます。</p>

<p><small><strong>サンプル 7 : div コンテンツを元にソートする</strong></small></p>

<pre class="brush: js">// XHTML Fragment:

&lt;div id="example"&gt;
  &lt;div&gt;1&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
  &lt;div&gt;6&lt;/div&gt;
  &lt;div&gt;7&lt;/div&gt;
  &lt;div&gt;8&lt;/div&gt;
  &lt;div&gt;9&lt;/div&gt;
  &lt;div&gt;10&lt;/div&gt;
&lt;/div&gt;

// JavaScript

var xslRef;
var xslloaded = false;
var xsltProcessor = new XSLTProcessor();
var myDOM;

var xmlRef = document.implementation.createDocument("", "", null);

function sort() {
  if (!xslloaded){
    p = new XMLHttpRequest();
    p.open("GET", "example2.xsl", false);
    p.send(null);

    xslRef = p.responseXML;
    xsltProcessor.importStylesheet(xslRef);
    xslloaded = true;
  }

  // create a new XML document in memory
  xmlRef = document.implementation.createDocument("", "", null);

  // we want to move a part of the DOM from an HTML document to an XML document.
  // importNode is used to clone the nodes we want to process via XSLT - true makes it do a deep clone
  var myNode = document.getElementById("example");
  var clonedNode = xmlRef.importNode(myNode, true);

  // after cloning, we append
  xmlRef.appendChild(clonedNode);

  // set the sorting parameter in the XSL file
  var sortVal = xsltProcessor.getParameter(null, "myOrder");

  if (sortVal == "" || sortVal == "descending")
    xsltProcessor.setParameter(null, "myOrder", "ascending");
  else
    xsltProcessor.setParameter(null, "myOrder", "descending");

  // initiate the transformation
  var fragment = xsltProcessor.transformToFragment(xmlRef, document);

  // clear the contents
  document.getElementById("example").innerHTML = "";

  myDOM = fragment;
  // add the new content from the transformation
  document.getElementById("example").appendChild(fragment)
}

// XSL Stylesheet:

&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;xsl:stylesheet version="1.0" xmlns="http://www.w3.org/1999/xhtml" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"&gt;
  &lt;xsl:output method="html" indent="yes" /&gt;

  &lt;xsl:param name="myOrder" /&gt;

  &lt;xsl:template match="/"&gt;

    &lt;xsl:apply-templates select="/div//div"&gt;
      &lt;xsl:sort select="." data-type="number" order="{$myOrder}" /&gt;
    &lt;/xsl:apply-templates&gt;
  &lt;/xsl:template&gt;

  &lt;xsl:template match="div"&gt;
    &lt;xsl:copy-of select="." /&gt;
  &lt;/xsl:template&gt;
&lt;/xsl:stylesheet&gt;
</pre>
