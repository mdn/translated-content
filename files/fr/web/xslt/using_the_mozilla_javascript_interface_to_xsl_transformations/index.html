---
title: Utilisation de l'interface JavaScript de Mozilla pour les transformations XSL
slug: Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations
tags:
  - XSLT
translation_of: Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations
original_slug: >-
  Web/XSLT/Utilisation_de_l'interface_JavaScript_de_Mozilla_pour_les_transformations_XSL
---
<p>Ce document décrit l'interface JavaScript pour le moteur de traitement XSLT (TransforMiiX) de Mozilla 1.2 et supérieur.</p>
<h3 id="Cr.C3.A9ation_de_XSLTProcessor">Création de XSLTProcessor</h3>
<p>Pour commencer, nous avons besoin de créer un objet <a href="fr/XSLTProcessor">XSLTProcessor</a> :</p>
<pre class="eval">var processor = new XSLTProcessor();
</pre>
<h3 id="Sp.C3.A9cification_de_la_feuille_de_style">Spécification de la feuille de style</h3>
<p>Avant d'utiliser cet objet, nous devons importer une feuille de style avec la fonction <code>importStylesheet()</code>. Elle a un unique paramètre, qui est le nœud DOM de la feuille de style XSLT à importer — remarquez que l'importation est directe, ce qui signifie que si nous modifions la feuille de style DOM après son importation, cela sera reflété lors du traitement. Il est cependant conseillé d'utiliser les paramètres de feuille de style plutôt que de modifier le DOM. C'est généralement plus facile et on obtient de meilleures performances.</p>
<pre class="eval">var testTransform = document.implementation.createDocument("", "test", null);
// juste un exemple pour obtenir une transformation dans un script étant donné que
// la fonction DOM XMLDocument.load est asynchrone, donc tout le traitement se fait
// dans le gestionnaire onload
testTransform.addEventListener("load", onload, false);
testTransform.load("test-transform.xml");
function onload() {
  processor.importStylesheet(testTransform);
}
</pre>
<p><code>importStylesheet</code> requiert un argument, un nœud DOM. Si ce nœud est un nœud de document, nous pouvons passer par une transformation XSL ou une <a href="http://www.w3.org/TR/xslt#result-element-stylesheet">transformation littérale d'élément résultant</a>, autrement il devra être un élément &lt;tt&gt;xsl:stylesheet&lt;/tt&gt; ou &lt;tt&gt;xsl:transform&lt;/tt&gt;.</p>
<h3 id="Transformation_du_document">Transformation du document</h3>
<p>Nous pouvons utiliser les méthodes <a href="#transformToDocument"><code>transformToDocument()</code></a> ou <a href="#transformToFragment"><code>transformToFragment()</code></a> pour transformer un document à l'aide de la feuille de style spécifiée.</p>
<h4 id="transformToDocument">transformToDocument</h4>
<p><code>transformToDocument()</code> prend un argument, le nœud source à transformer, et retourne un nouveau <code>Document</code> DOM avec les résultats de la transformation :</p>
<pre class="eval">var newDocument = processor.transformToDocument(domToBeTransformed);
</pre>
<p>L'objet résultant est un <code>HTMLDocument</code> si la <a href="http://www.w3.org/TR/xslt#output">méthode de sortie</a> de la feuille de style est &lt;tt&gt;html&lt;/tt&gt;, un <code>XMLDocument</code> pour &lt;tt&gt;xml&lt;/tt&gt;, et pour la méthode de sortie &lt;tt&gt;text&lt;/tt&gt; un <code>XMLDocument</code> avec uniquement un élément racine <code>&lt;transformiix:result&gt;</code> avec le texte comme descendant.</p>
<h4 id="transformToFragment">transformToFragment</h4>
<p>Nous pouvons également utiliser <code>transformToFragment()</code> qui retournera un nœud <code>DocumentFragment</code> DOM. C'est très efficace car l'adjonction d'un fragment à un autre nœud adjoint de façon transparente tous les descendants de ce fragment, et le fragment lui-même n'est pas fusionné. Les fragment sont donc utiles pour déplacer les nœuds et les stocker sans les éléments inutiles d'un objet document entier.</p>
<p><code>transformToFragment</code> prend deux arguments : le document source à transformer (comme ci-dessus) et un objet <code>Document</code> qui possèdera le fragment (tous les fragments doivent être possédés par un document).</p>
<pre class="eval">var ownerDocument = document.implementation.createDocument("", "test", null);
var newFragment = processor.transformToFragment(domToBeTransformed, ownerDocument);
</pre>
<p><code>transformToFragment</code> ne produira que des objets HTML DOM que si le propriétaire du document est lui-même un <code>HTMLDocument</code>, ou si la méthode de sortie de la feuille de style est &lt;tt&gt;HTML&lt;/tt&gt;. Il <b>ne produira pas</b> un objet HTML DOM si seul l'élément de haut niveau du résultat est <code>&lt;html&gt;</code> car <code>transformToFragment</code> est rarement utilisé pour créer cet élément. Si nous voulons annuler cela, nous pouvons définir la méthode de sortie normale par le moyen standard.</p>
<h3 id="D.C3.A9finition_des_param.C3.A8tres">Définition des paramètres</h3>
<p>Nous pouvons contrôler les <a href="http://www.w3.org/TR/xslt#variables">paramètres de la feuille de style</a> à l'aide des méthodes <code>setParameter</code>, <code>getParameter</code> et <code>removeParameter</code>. Elles nécessitent une URI d'espace de nommage et un nom local qui seront les deux premiers paramètres, <code>setParameter</code> sera un troisième paramètres — la valeur de ce dernier paramètre étant à définir.</p>
<h3 id="R.C3.A9initialisation">Réinitialisation</h3>
<p>L'objet <code>XSLTProcessor</code> implémente également une méthode <code>reset()</code> qui peut être utilisée pour supprimer toutes les feuilles de style et tous les paramètres puis ramener le processeur dans son état initial. Cette méthode est implémentée dans <a href="fr/Gecko">Mozilla</a> 1.3 et supérieurs.</p>
<h3 id="Ressources">Ressources</h3>
<ul>
 <li><a href="https://dxr.mozilla.org/mozilla-central/source/content/xslt/public/nsIXSLTProcessor.idl">nsIXSLTProcessor.idl</a> reflètera toujours l'interface réelle de l'objet <code>XSLTProcessor</code>.
  <ul>
   <li><a href="http://xulplanet.com/references/objref/XSLTProcessor.html">A XULPlanet reference page (en)</a>.</li>
  </ul>
 </li>
 <li><a href="http://lxr.mozilla.org/seamonkey/source/content/xslt/public/nsIXSLTProcessorObsolete.idl">The nsIXMLProcessorObsolete IDL file (en)</a> : l'interface JS dans les versions de Mozilla antérieures à la 1.2.</li>
</ul>