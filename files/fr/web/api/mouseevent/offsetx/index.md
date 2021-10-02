---
title: MouseEvent.offsetX
slug: Web/API/MouseEvent/offsetX
tags:
  - API
  - Experimental
  - MouseEvent
  - Property
  - Read-only
  - Reference
translation_of: Web/API/MouseEvent/offsetX
---
<p>{{APIRef("DOM Events")}}{{SeeCompatTable}}</p>

<p>La propriété en lecture seule <strong><code>offsetX</code></strong> de l'interface {{domxref("MouseEvent")}} fournit le décalage sur l'axe X du pointeur de la souris entre cet évènement et la bordure de la marge intérieure du noeud cible.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var xOffset = <em>instanceOfMouseEvent</em>.offsetX;
</pre>

<h3 id="Valeur_renvoyée">Valeur renvoyée</h3>

<p>Un nombre à virgule flottante double précision <code>double</code>. Les premières versions de la spécification la définissaient comme un nombre entier. Pour plus de détails, voir la section Compatibilité des navigateurs.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('CSSOM View', '#dom-mouseevent-offsetx', 'MouseEvent')}}</td>
   <td>{{Spec2('CSSOM View')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.MouseEvent.offsetX")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li>{{domxref("MouseEvent")}}</li>
</ul>
