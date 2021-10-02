---
title: Document.createCDATASection()
slug: Web/API/Document/createCDATASection
tags:
  - API
  - Création
  - DOM
  - Document
  - Méthode
  - Section
  - XML
  - données
translation_of: Web/API/Document/createCDATASection
---
<div>{{APIRef("DOM")}}</div>

<p><code>createCDATASection()</code> crée un nouveau noeud de section CDATA et le renvoie.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><var>CDATASectionNode</var> = document.createCDATASection(data)
</pre>

<ul>
 <li><code>CDATASectionNode</code> est un noeud de <a href="/fr/docs/Web/API/CDATASection">Section CDATA</a>.</li>
 <li><code>data</code> est une string (<em>chaîne de caractères</em>) contenant les données à ajouter à la section CDATA.</li>
</ul>

<h2 id="Example">Exemple</h2>

<pre class="brush:js">var docu = new DOMParser().parseFromString('&lt;xml&gt;&lt;/xml&gt;',  "application/xml")

var cdata = docu.createCDATASection('Some &lt;CDATA&gt; data &amp; then some');

docu.getElementsByTagName('xml')[0].appendChild(cdata);

alert(new XMLSerializer().serializeToString(docu));
// Affiche : &lt;xml&gt;&lt;![CDATA[Some &lt;CDATA&gt; data &amp; then some]]&gt;&lt;/xml&gt;
</pre>

<h2 id="Notes">Notes</h2>

<ul>
 <li>Cela fonctionnera uniquement avec XML, pas avec les documents HTML (car les documents HTML ne supportent pas les sections CDATA) ; le tenter sur un document HTML va lancer une exception <code>NOT_SUPPORTED_ERR</code>.</li>
 <li>Va lancer une exception <code>NS_ERROR_DOM_INVALID_CHARACTER_ERR</code> si on essaye de soumettre la séquence CDATA de fermeture ("]]&gt;") en tant que partie des données ; les données fournies par l'utilisateur non échappées, ne peuvent pas être utilisées en toute sécurité sans qu'avec cette méthode on obtienne cette exception (<code><a href="/en-US/docs/DOM/document.createTextNode">createTextNode()</a></code> peut souvent être utilisé à sa place).</li>
</ul>

<h2 id="Specification">Spécification</h2>

<ul>
 <li><a href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createCDATASection">createCDATASection</a></li>
</ul>
