---
title: Node.baseURI
slug: Web/API/Node/baseURI
tags:
  - API
  - DOM
  - HTML
  - Propriétés
  - URI
  - URL
  - URL absolue
  - XML
translation_of: Web/API/Node/baseURI
---
<div>
<div>{{APIRef("DOM")}}</div>
</div>

<p>La propriété en lecture seule <code><strong>Node.baseURI</strong></code> renvoie l'URL de base absolue d'un noeud.</p>

<p>L'URL de base est utilisée pour <a href="http://developers.whatwg.org/urls.html#resolving-urls">résoudre</a> les URL relatives quand le navigateur a besoin d'obtenir une URL absolue, par exemple lors du traitement de l'attribut <code>src</code>  en HTML ou XML <code><a href="/fr/docs/Glossaire/XLink">xlink</a>:href</code> d'un élément {{HTMLElement("img")}} HTML.</p>

<p>En général, l'URL de base est simplement l'emplacement du document, mais elle peut être affectée par de nombreux facteurs, y compris l'élément {{HTMLElement("base")}} en HTML et l'attribut  <code><a href="/fr/docs/Introduction_%C3%A0_XML/xml:base">xml:base</a></code> en XML.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox">var <em>baseURI</em> = <em>node</em>.baseURI;
</pre>

<ul>
 <li><code>baseURI</code> est une {{ domxref("DOMString") }} (<em>chaîne de caractères</em>) représentant l'URL de base du {{domxref("Node")}} spécifié. Elle peut être <code>null</code> s'il est impossible d'obtenir une URI absolue.</li>
 <li><code><em>node</em>.baseURI</code> est en lecture seule.</li>
 <li><code><em>node</em>.baseURI</code> peut changer avec le temps (voir ci-dessous).</li>
</ul>

<h2 id="Details">Détails</h2>

<h3 id="L'URL_de_base_d'un_document">L'URL de base d'un document</h3>

<p>L'URL de base d'un <em>document</em> est par défaut l'adresse du document (telle qu'affichée par le navigateur et disponible dans {{domxref("window.location")}}), mais peut changer par défaut :</p>

<ul>
 <li>Si une balise HTML {{HTMLElement("base")}} est trouvée dans le document ;</li>
 <li>Lorsque celui-ci est un nouveau document créé dynamiquement.</li>
</ul>

<p>Voir la page <a href="http://developers.whatwg.org/urls.html#base-urls">Base URLs section of the HTML Living standard</a> (en) pour plus de détails.</p>

<p>Vous pouvez utiliser <code><em>{{domxref("document")}}</em>.baseURI</code> pour obtenir l'URL de base d'un document. Notez que l'obtention de l'URL de base d'un document peut renvoyer des URL différentes au fil du temps si la balise {{HTMLElement("base")}} ou l'emplacement du document change.</p>

<h3 id="L'URL_de_base_d'un_élément">L'URL de base d'un élément</h3>

<p>L'URL de base d'un <em>element</em> en HTML est normalement équivalente à celle du document dans lequel se trouve le noeud.</p>

<p>Si le document contient des attributs <code><a href="/fr/docs/Introduction_%C3%A0_XML/xml:base">xml:base</a></code> (ce que vous ne devriez pas faire dans les documents HTML), l'<code><em>element</em>.baseURI</code> prend en compte l'attribut <code>xml:base</code> des parents de l'élément  lors du calcul de l'URL de base. Voir <a href="/fr/docs/Introduction_%C3%A0_XML/xml:base">xml:base</a> pour plus de détails.</p>

<p>Vous pouvez utiliser <code><em>{{domxref("element")}}</em>.baseURI</code> pour obtenir l'URL de base d'un élément.</p>

<h2 id="Specification">Spécification</h2>

<ul>
 <li>{{spec("http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-baseURI","DOM Level 3 Core: baseURI","REC")}}</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>l'élément {{HTMLElement("base")}} (HTML)</li>
 <li>l'attribut <code><a href="/fr/docs/Introduction_%C3%A0_XML/xml:base">xml:base</a></code> (documents XML).</li>
 <li>{{domxref("Node.baseURIObject")}} - une variante de cette API pour les add-ons Mozilla et le code interne. Renvoie l'URL de base en tant que {{interface("nsIURI")}}.</li>
</ul>
