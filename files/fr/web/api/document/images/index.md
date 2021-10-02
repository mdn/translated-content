---
title: document.images
slug: Web/API/Document/images
tags:
  - Référence_du_DOM_Gecko
translation_of: Web/API/Document/images
---
<p>{{ ApiRef() }}</p>

<p><code>document.images</code> renvoie une collection des images du document HTML courant.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">HTMLCollection =document.images</pre>

<h2 id="Exemple">Exemple</h2>

<pre class="brush:js">var listeimg = document.images;
for(var i = 0; i &lt; listeimg.length; i++) {
    if(listeimg[i] == "banner.gif") {
         // l'image banner a été trouvée
    }
}
</pre>

<h2 id="Notes">Notes</h2>

<p><a href="/fr/DOM/document.images"><code>document.images</code></a> fait partie du DOM HTML, et fonctionne uniquement pour les document HTML.</p>
<h2 id="Sp.C3.A9cification">Spécification</h2>
<ul>
 <li>Spécification DOM Level 2 HTML : <a href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-90379117">HTMLDocument.images</a></li>
 <li>Traduction en français (non normative) : <a href="http://www.yoyodesign.org/doc/w3c/dom2/html/html.html#ID-90379117">HTMLDocument.images</a></li>
</ul>
