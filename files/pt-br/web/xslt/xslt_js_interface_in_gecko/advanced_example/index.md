---
title: Exemplo Avançado
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Advanced_Example
translation_of: Web/XSLT/XSLT_JS_interface_in_Gecko/Advanced_Example
original_slug: The_XSLT_JavaScript_Interface_in_Gecko/Advanced_Example
---
<h2 id="Advanced_Example" name="Advanced_Example">Exemplo Avançado</h2>

<p>O exemplo avançado apresentará vários tipos de divs baseado em seu conteúdo. O exemplo permite tipificar o conteúdo muitas vezes, alternando entre tipos ascendente ou descendente. O JavaScript apenas carrega o arquivo .xsl a primeira vez, e prepara a variável <code>xslloaded</code> verdadeira (true) assim que o arquivo tiver terminado de carregar. Usando o método <code>getParameter</code> no obejto <code>XSLTProcessor</code>, o código pode decidir pelo tipo ascendente ou descendente. Se o parâmetro estiver vazio o padrão é ascendente (primeira vezes que o tipo aparece, como não há valor para isto no aarquivo XSLT). O valor do tipo é colocado usando <code>setParameter</code>.</p>

<p>The XSLT file has a parameter called <code>myOrder</code> that JavaScript sets to change the sorting method. The <code>xsl:sort</code> element's order attribute can access the value of the parameter using <code>$myOrder</code>. However, the value needs to be an XPATH expression and not a string, so <code>{$myOrder}</code> is used. Using {} evaluates the content as an XPath expression.</p>

<p>Once the transformation is complete, the result is appened to the document, as shown in this example.</p>

<p><small><b>Figure 7 : Sorting based on div content<span class="comment">view example</span></b></small></p>

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
