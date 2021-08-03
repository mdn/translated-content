---
title: TypedArray.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/map
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/map
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/map
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>map()</strong></code> crée un nouveau tableau typé dont les éléments sont les images des éléments du tableau typé courant par une fonction donnée. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.map()")}}<em>.</em> <em>TypedArray</em> est utilisé ici de façon générique pour représenter <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray">l'un des types de tableaux typés possibles</a>.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-map.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>typedarray</var>.map(<var>callback</var>[, <var>thisArg</var>])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>La fonction qui renvoie l'élément à placer dans le nouveau tableau typé. Cette fonction utilise trois arguments :
 <dl>
  <dt><code>valeurCourante</code></dt>
  <dd>La valeur de l'élément du tableau typé courant, celui traité par la fonction.</dd>
  <dt><code>indice</code></dt>
  <dd>L'indice de l'élément du tableau typé en cours de traitement.</dd>
  <dt><code>tableauTypé</code></dt>
  <dd>Le tableau typé sur lequel <code>map()</code> a été appelée.</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code></dt>
 <dd>Paramètre optionnel. La valeur à utiliser pour <code>this</code> lors de l'appel à <code>callback</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouveau tableau typé.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>map()</code> appelle la fonction <code>callback()</code> passée en argument une fois pour chaque élément du tableau typé pour construire un nouveau tableau à partir des résultats de la fonction. Les appels à callback sont effectués dans l'ordre du tableau typé. <code>callback()</code> n'est appelée que pour les éléments du tableaux qui ont une valeur, elle n'est pas appelée pour les éléments qui sont indéfinis ou qui ont été supprimés.</p>

<p><code>callback()</code> est appelée avec trois arguments : la valeur de l'élément, l'indice de cet élément et enfin le tableau typé courant.</p>

<p>Si un paramètre <code>thisArg</code> est fourni pour <code>map()</code>, il sera passé à <code>callback</code> pour les différents appels et servira de valeur <code>this</code>. Par défaut, la valeur {{jsxref("undefined")}} sera passée à la fonction pour la valeur <code>this</code>. Par ailleurs, la valeur de <code>this</code> accessible depuis la fonction <code>callback</code> est déterminée selon <a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this">les règles usuelles déterminant la valeur <code>this</code> au sein d'une fonction</a>.</p>

<p><code>map()</code> ne modifie pas le tableau typé sur lequel elle a été appelée (indirectement, c'est la fonction <code>callback</code> qui pourra éventuellement modifier le tableau).</p>

<p>La liste des éléments parcourus par <code>map()</code> est définie avant la première invocation de la fonction <code>callback</code>. Les éléments qui sont ajoutés au tableau typé après le début de l'appel de <code>map()</code> (grâce à la fonction <code>callback</code> par exemple) ne seront pas visités. Si des éléments existants du tableau typé ont modifiés ou supprimés, la valeur fournie à la fonction <code>callback</code> sera leur valeur au moment où <code>map()</code> les visite - les éléments supprimés ne seront pas traités par la fonction.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Obtenir_un_tableau_typé_des_racines_carrées_des_éléments_d'un_premier_tableau_typé">Obtenir un tableau typé des racines carrées des éléments d'un premier tableau typé</h3>

<p>Dans l'exemple suivant, on crée un nouveau tableau typé dont les éléments seront les racines carrées respectives des éléments d'un tableau typé existant.</p>

<pre class="brush: js">var nombres = new Uint8Array([1, 4, 9]);
var racines = nombres.map(Math.sqrt);
// racines vaut désormais Uint8Array [1, 2, 3],
// nombres vaut toujours Uint8Array [1, 4, 9]
</pre>

<h3 id="Utiliser_map()_avec_une_fonction_qui_prend_un_argument">Utiliser <code>map()</code> avec une fonction qui prend un argument</h3>

<p>Ici, on illustre comment une fonction utilisant un argument peut être utilisée avec <code>map()</code>. Cet argument recevra automatiquement la valeur de chaque élément du tableau typé au fur et à mesure du parcours.</p>

<pre class="brush: js">var nombres = new Uint8Array([1, 4, 9]);
var doubles = nombres.map(function(num) {
  return num * 2;
});
// doubles vaut désormais Uint8Array [2, 8, 18]
// nombres vaut toujours Uint8Array [1, 4, 9]
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
   <td>{{SpecName('ES2015', '#sec-%typedarray%.prototype.map', 'TypedArray.prototype.map')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.map', 'TypedArray.prototype.map')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.TypedArray.map")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("TypedArray.prototype.filter()")}}</li>
 <li>{{jsxref("Array.prototype.map()")}}</li>
</ul>
