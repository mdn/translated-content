---
title: Document.referrer
slug: Web/API/Document/referrer
tags:
  - API
  - HTML DOM
  - Propriété
  - Reference
translation_of: Web/API/Document/referrer
---
<div>
 {{APIRef}}</div>
<h2 id="Syntax">Résumé</h2>
<p>Renvoie l'<a href="http://www.w3.org/Addressing/#background">URI</a> de la page de provenance.</p>
<h2 id="Syntax">Syntaxe</h2>
<pre class="syntaxbox"><var>string</var> = document.referrer;
</pre>
<h2 id="Notes">Notes</h2>
<p>La valeur est une chaîne de caractères vide si l'utilisateur est arrivé directement sur la page (pas grâce à un lien, mais, par exemple, via un marque-page). Étant donné que cette propriété ne retourne qu'une chaîne, elle ne vous donne pas un accès DOM à la page de provenance.</p>
<h2 id="Specification">Spécification</h2>
<ul>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-95229140">DOM Level 2: referrer</a></li>
</ul>
