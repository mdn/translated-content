---
title: Number.NEGATIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
tags:
  - JavaScript
  - Number
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
original_slug: Web/JavaScript/Reference/Objets_globaux/Number/NEGATIVE_INFINITY
---
<div>{{JSRef}}</div>

<p>La propriété <code><strong>Number.NEGATIVE_INFINITY</strong></code> représente l'infini négatif.</p>

<div>{{EmbedInteractiveExample("pages/js/number-negative-infinity.html")}}</div>



<div>{{js_property_attributes(0,0,0)}}</div>

<h2 id="Description">Description</h2>

<p>La valeur de <code>Number.NEGATIVE_INFINITY</code> est égale à l'opposé de la valeur fournie par la propriété {{jsxref("Infinity")}} de l'objet global.</p>

<p>Cette valeur se comporte différemment de l'infini mathématique :</p>

<ul>
 <li>Toute valeur positive, y compris {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, multipliée par <code>NEGATIVE_INFINITY</code> sera égale à <code>NEGATIVE_INFINITY</code>.</li>
 <li>Toute valeur négative, y compris <code>NEGATIVE_INFINITY</code>, multipliée par <code>NEGATIVE_INFINITY</code> sera égale à <code>POSITIVE_INFINITY</code>.</li>
 <li>Zéro multiplié par <code>NEGATIVE_INFINITY</code> sera égal à {{jsxref("NaN")}}.</li>
 <li>NaN multiplié par <code>NEGATIVE_INFINITY</code> sera égal à <code>NaN</code>.</li>
 <li><code>NEGATIVE_INFINITY</code>, divisé par n'importe quelle valeur négative, à l'exception de  <code>NEGATIVE_INFINITY</code>, sera égal à <code>POSITIVE_INFINITY</code>.</li>
 <li><code>NEGATIVE_INFINITY</code>, divisé par n'importe quelle valeur positive à l'exception de  <code>POSITIVE_INFINITY</code>, sera égal à <code>NEGATIVE_INFINITY</code>.</li>
 <li><code>NEGATIVE_INFINITY</code>, divisé par <code>NEGATIVE_INFINITY</code> ou <code>POSITIVE_INFINITY</code>, sera égal à <code>NaN</code>.</li>
 <li>Tout nombre positif divisé par <code>NEGATIVE_INFINITY</code> sera égal au zéro négatif.</li>
 <li>Tout nombre négatif divisé par <code>NEGATIVE_INFINITY</code> sera égal au zéro positif.</li>
</ul>

<p>La propriété <code>Number.NEGATIVE_INFINITY</code> peut être utilisée pour indiquer une erreur sur un test renvoyant normalement un nombre fini. On notera cependant que la méthode {{jsxref("isFinite")}} est plus pertinente dans ce cas.</p>

<p><code>Number.NEGATIVE_INFINITY</code> est une propriété statique de {{jsxref("Number")}} et on utilisera directement <code>Number.NEGATIVE_INFINITY</code> plutôt que comme une propriété d'un objet (instance) {{jsxref("Number")}}.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on affecte une variable inférieure à la valeur numérique minimale à la variable <code>petitNombre</code>. Lorsque l'instruction conditionnelle <code>if</code> est exécutée, <code>petitNombre</code> possède la valeur "<code>-Infinity</code>", on modifie donc la valeur de <code>petitNombre</code> afin qu'il puisse être géré.</p>

<pre class="brush:js">var petitNombre = (-Number.MAX_VALUE) * 2

if (petitNombre === Number.NEGATIVE_INFINITY) {
 petitNombre = renvoyerUneValeurFinie();
}
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.1.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.7.3.5', 'Number.NEGATIVE_INFINITY')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-number.negative_infinity', 'Number.NEGATIVE_INFINITY')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-number.negative_infinity', 'Number.NEGATIVE_INFINITY')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Number.NEGATIVE_INFINITY")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Number.POSITIVE_INFINITY")}}</li>
 <li>{{jsxref("Number.isFinite()")}}</li>
 <li>{{jsxref("Infinity", "Infinity")}}</li>
 <li>{{jsxref("isFinite", "isFinite()")}}</li>
</ul>
