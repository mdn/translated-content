---
title: XPath
slug: Web/XPath
tags:
  - CSS Selectors
  - DOM
  - JXON
  - Landing
  - Path
  - XML
  - XPath
  - XSLT
translation_of: Web/XPath
---
<div>{{XSLTRef}}</div>

<p>XPath est une abréviation pour <i>XML Path Language</i> (qu'on pourrait traduire en français par « langage de chemin XML »). Ce langage utilise une syntaxe non-XML pour cibler différentes parties d'un document <a href="/fr/docs/Web/XML/XML_introduction">XML</a>. Il peut aussi être utilisé pour tester certains nœuds d'un document afin de déterminer s'ils suivent un motif particulier.</p>

<p>XPath est principalement utilisé avec <a href="/fr/docs/Web/XSLT">XSLT</a>, mais on peut tout aussi bien l'utiliser afin de naviguer dans le <a href="/fr/docs/Web/API/Document_Object_Model">DOM</a> de tout document structuré avec un langage semblable à XML (<a href="/fr/docs/Web/HTML">HTML</a> ou <a href="/fr/docs/Web/SVG">SVG</a> par exemple) grâce à l'interface <a href="/fr/docs/Web/API/XPathExpression"><code>XPathExpression</code></a>. Cela permet d'éviter les méthodes <a href="/fr/docs/Web/API/Document/getElementById"><code>Document.getElementById()</code></a> ou <a href="/fr/docs/Web/API/ParentNode/querySelectorAll"><code>ParentNode.querySelectorAll()</code></a> ou encore les propriétés <a href="/fr/docs/Web/API/Node/childNodes"><code>Node.childNodes</code></a>.</p>

<p>XPath utilise une notation en chemin (à l'instar des URL) pour naviguer dans la structure hiérarchique d'un document XML. Sa syntaxe est qualifiée de « non-XML » car un chemin XPath peut être utilisé au sein d'URI ou de valeurs d'attribut XML.</p>

<div class="note">
  <p><strong>Note :</strong> La prise en charge de XPath est hétérogène. Si l'implémentation de Firefox est relativement correcte (malgré l'absence de volonté de l'améliorer encore), d'autres navigateurs implémentent une surface moindre de ces fonctionnalités (voire aucune). Si vous avez besoin d'une prothèse (<i>polyfill</i>), vous pouvez vous tourner vers <a href="http://nchc.dl.sourceforge.net/project/js-xpath/js-xpath/1.0.0/xpath.js">js-xpath</a> ou <a href="https://github.com/google/wicked-good-xpath">wicked-good-xpath</a>.</p>
</div>

<h2 id="Documentation">Documentation</h2>

<dl>
 <dt><a href="/fr/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript">Introduction à l'utilisation de XPath avec JavaScript</a></dt>
 <dd>Une utilisation de XPath qui n'est pas basée sur XSLT.</dd>
 <dt><a href="/fr/docs/Web/XPath/Axes">Axes XPath</a></dt>
 <dd>La liste et la définition des axes sont définies dans la spécification XPath. Les axes sont utilisés afin de décrire les relations entre les nœuds.</dd>
 <dt><a href="/fr/docs/Web/XPath/Functions">Functions XPath</a></dt>
 <dd>La liste et la description des fonctions principales de XPath et des additions propres à XSLT.</dd>
 <dt><a href="/fr/docs/Web/XSLT/Transforming_XML_with_XSLT">Transformer du XML avec XSLT</a></dt>
 <dd>XSLT utilise XPath afin de cibler les segments d'un document XML pour ensuite les transformer.</dd>
 <dt><a href="/fr/docs/Web/XPath/Snippets">Fragments de code XPath</a></dt>
 <dd>Un ensemble d'exemples de code réutilisables en JavaScript qui utilisent les API <a href="https://www.w3.org/TR/DOM-Level-3-XPath/">DOM Level 3 XPath </a>.</dd>
 <dt><a href="https://www.xml.com/pub/a/2000/08/holman/">Qu'est-ce que XSLT ? (en anglais)</a></dt>
 <dd>Une introduction à XSLT et XPath sans besoin de connaissances préalables. Le contexte, la structure, les concepts ainsi qu'une terminologie introductive sont fournis au lecteur.</dd>
</dl>

<h2 id="Tools">Outils</h2>

<dl>
 <dt><a href="https://addons.mozilla.org/fr/firefox/addon/chropath-for-firefox/">ChroPath</a></dt>
 <dd>Un module complémentaire de Firefox qui ajoute un panneau dédié à XPath au sein des outils de développement.</dd>
 <dt><a href="https://extendsclass.com/xpath-tester.html">XPath tester</a></dt>
 <dd>Un outil en ligne pour tester des expressions XPath.</dd>
</dl>

<h2 id="Related_Topics">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/XSLT">XSLT</a>, <a href="/fr/docs/Web/XML">XML</a>, <a href="/fr/docs/Web/API/Document_Object_Model">DOM</a></li>
 <li><a href="/fr/docs/Web/XPath/Comparison_with_CSS_selectors">Comparaison entre XPath et les sélecteurs CSS</a></li>
 <li><strong><a href="/fr/docs/Web/XSLT">XSLT</a></strong></li>
 <li><strong><a href="/fr/docs/Web/EXSLT">EXSLT</a></strong></li>
 <li><strong><a href="/fr/docs/Web/XPath">XPath</a></strong></li>
 <li>
  Guides
  <ol>
   <li><a href="/fr/docs/Web/XPath/Comparison_with_CSS_selectors">Comparaison entre XPath et les sélecteurs CSS</a></li>
   <li><a href="/fr/docs/Web/XPath/Snippets">Exemples de fragments XPath</a></li>
  </ol>
 </li>
 <li >
  <a href="/fr/docs/Web/XPath/Axes">Axes XPath</a>
  {{ListSubpagesForSidebar("/fr/docs/Web/XPath/Axes")}}
 </li>
 <li>
  <a href="/fr/docs/Web/XPath/Functions">Fonctions XPath</a>{{ListSubpagesForSidebar("/fr/docs/Web/XPath/Functions")}}
 </li>
</ul>
