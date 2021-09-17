---
title: ':scope'
slug: 'Web/CSS/:scope'
tags:
  - CSS
  - Experimental
  - Pseudo-classe
  - Reference
translation_of: 'Web/CSS/:scope'
---
<div>{{CSSRef}}</div>

<p>La <a href="/fr/docs/Web/CSS/Pseudo-classes">pseudo-classe</a> <strong><code>:scope</code></strong> correspond aux éléments qui sont un point de référence pour faire correspondre les sélecteurs.</p>

<pre class="brush: css">/* Sélectionne un élément dans la portée */
:scope {
  background-color: lime;
}</pre>

<p>À l'heure actuelle, lorsqu'elle est utilisée dans une feuille de style, <code>:scope</code> est identique à {{cssxref(":root")}} car il n'existe pas de moyen pour identifier un élément dont la portée est restreinte. Lorsqu'elle est utilisée à travers des méthodes telles que {{domxref("Element.querySelector", "querySelector()")}}, {{domxref("Element.querySelectorAll", "querySelectorAll()")}}, {{domxref("Element.matches", "matches()")}} ou {{domxref("Element.closest()")}}, <code>:scope</code> correspond à l'élément sur lequel la méthode est appelée.</p>

<h2 id="Syntaxe">Syntaxe</h2>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<p>Dans cet exemple, on voit comment utiliser <code>:scope</code> via la méthode {{domxref("Element.matches()")}}.</p>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">let paragraphe = document.getElementById("para");
let output = document.getElementById("output");

if (paragraphe.matches(":scope")) {
  output.innerText = "Oui l'élément est dans sa propre portée, comme attendu !";
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p id="para"&gt;
  Voici un paragraphe, pas vraiment intéressant mais bon.
&lt;/p&gt;
&lt;p id="output"&gt;&lt;/p&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<div>{{EmbedLiveSample('Exemples')}}</div>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#the-scope-pseudo', ':scope')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.scope")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>La <a href="/fr/docs/Web/CSS/Pseudo-classes">pseudo-classe</a> {{cssxref(":root")}}</li>
 <li><a href="/fr/docs/Web/API/Document_Object_Model/Localisation_des_éléments_DOM_avec_les_sélecteurs">Localiser des éléments du DOM grâce aux sélecteurs</a></li>
 <li>{{domxref("Element.querySelector()")}} et {{domxref("Element.querySelectorAll()")}}</li>
 <li>{{domxref("Document.querySelector()")}} et {{domxref("Document.querySelectorAll()")}}</li>
 <li>{{domxref("DocumentFragment.querySelector()")}} et {{domxref("DocumentFragment.querySelectorAll()")}}</li>
 <li>{{domxref("ParentNode.querySelector()")}} et {{domxref("ParentNode.querySelectorAll()")}}</li>
</ul>
