---
title: 高度な例
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Advanced_Example
---

## 高度な例

高度な例では、コンテンツに基づいていくつかの div をソートします。この例では、昇順ソートと降順ソートの間で交互にコンテンツをソートすることができます。JavaScript は最初に.xsl ファイルのみをロードし、ファイルのロードが完了すると`xslloaded`変数を true に設定します。{{domxref("XSLTProcessor.getParameter()")}}メソッドを使用すると、コードは昇順または降順に並べ替えることができます。パラメータが空の場合（ソートが初めて発生したとき、XSLT ファイルに値がないため）はデフォルトで昇順になります。ソート値は{{domxref("XSLTProcessor.setParameter()")}}を使用して設定されます。

XSLT ファイルには、JavaScript がソート方法を変更するために設定する`myOrder`というパラメータがあります。`xsl:sort`要素の order 属性は、`$myOrder`を使用してパラメータの値にアクセスできます。ただし、その値は文字列ではなく XPATH 式である必要があるため、`{$myOrder}`が使用されます。{} を使用すると、コンテンツが XPath 式として評価されます。

変換が完了すると、この例に示すように、結果がドキュメントに追加されます。

**サンプル 7 : div コンテンツを元にソートする**

```js
// XHTML Fragment:

<div id="example">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>

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

<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns="http://www.w3.org/1999/xhtml" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes" />

  <xsl:param name="myOrder" />

  <xsl:template match="/">

    <xsl:apply-templates select="/div//div">
      <xsl:sort select="." data-type="number" order="{$myOrder}" />
    </xsl:apply-templates>
  </xsl:template>

  <xsl:template match="div">
    <xsl:copy-of select="." />
  </xsl:template>
</xsl:stylesheet>
```
