---
title: Exemple avancé
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Advanced_Example
tags:
  - Traduction_à_relire
translation_of: Web/XSLT/XSLT_JS_interface_in_Gecko/Advanced_Example
original_slug: Web/XSLT/Interface_XSLT_JS_dans_Gecko/Exemple_avancé
---
<h2 id="Exemple_avanc.C3.A9">Exemple avancé</h2>

<p>Dans l'exemple avancé, nous allons trier plusieurs <code>div</code> selon leur contenu. L'exemple permet de trier le contenu plusieurs fois, en alternant entre le tri ascendant et le tri descendant. Le JavaScript ne charge que le fichier .xsl la première fois, et définit la variable <code>xslloaded</code> à <code>true</code> une fois que le fichier est fini de chargé. En utilisant la méthode <code>getParameter</code> sur l'objet <code>XSLTProcessor</code> , le code peut estimer s'il faut trier de façon ascendante ou descendante. Il trie par défaut de manière ascendante si le paramètre est vide (lors du premier tri, car sa valeur n'est pas définie dans le fichier XSLT). La valeur du tri est définie à l'aide de <code>setParameter</code>.</p>

<p>La fichier XSLT a un paramètre appelé <code>myOrder</code> que le JavaScript définit pour changer la méthode de tri. L'attribut <code>xsl:sort</code> d'ordre des éléments peut accéder à la valeur du paramètre en utilisant <code>$myOrder</code>. Cependant, la valeur a besoin d'être une expression XPath et non pas une chaîne, ainsi on utilise <code>{$myOrder}</code>. L'utilisation de <code>{}</code> évalue le contenu comme une expression XPath.</p>

<p>Une fois la transformation complétée, le résultat est ajouté au document, comme indiqué dans l'exemple.</p>

<p><small><strong>Figure 7 : Tri selon le contenu des divvoir l'exemple</strong></small></p>


<p><em>Fragment XHTML :</em></p>

<pre>&lt;div id="example"&gt;
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
</pre>

<p><em>JavaScript</em></p>

<pre>var xslRef;
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
    xsltProcessor.importStylesheet(xslRef)
    xslloaded = true;
  }

  // création d'un nouveau document XML en mémoire
  xmlRef = document.implementation.createDocument("", "", null);

  // nos voulons déplacer une partie du DOM depuis le document HTML vers le document XML.
  // importNode est utilisé pour cloner les nœuds que nous voulons traiter via XSLT
  // true permet une copie profonde
  var myNode = document.getElementById("example");
  var clonedNode = xmlRef.importNode(myNode, true);

  // après le clonage, nous ajoutons
  xmlRef.appendChild(clonedNode);

  // définition du paramètre de tri dans le fichier XSL
  var sortVal = xsltProcessor.getParameter(null, "myOrder");

  if (sortVal == "" || sortVal == "descending")
    xsltProcessor.setParameter(null, "myOrder", "ascending");
  else
    xsltProcessor.setParameter(null, "myOrder", "descending");

  // initialisation de la transformation
  var fragment = xsltProcessor.transformToFragment(xmlRef, document);

  // effacement des contenus
  document.getElementById("example").innerHTML = "";

  myDOM = fragment;
  // ajout du nouveau contenu depuis la transformation
  document.getElementById("example").appendChild(fragment)
}
</pre>

<p><em>Feuille de style XSL :</em></p>

<pre>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
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