---
title: TypedArray.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/some
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/some
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/some
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>some()</strong></code> teste si certains éléments du tableau typé remplissent une condition décrite par la fonction de test donnée. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.some()")}}<em>. </em>Dans le reste de cet article <em>TypedArray</em> correspond à un des <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray">types de tableaux typés</a>.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-some.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>typedarray</var>.some(<var>callback</var>[, <var>thisArg</var>])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>La fonction à tester pour chaque élément. Elle prend trois arguments :
 <dl>
  <dt><code>valeurCourante</code></dt>
  <dd>L'élément du tableau typé en cours de traitement.</dd>
  <dt><code>index</code></dt>
  <dd>L'indice de l'élément du tableau typé en cours de traitement.</dd>
  <dt><code>array</code></dt>
  <dd>Le tableau typé sur lequel la méthode <code>some</code> a été appelée.</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code></dt>
 <dd>Paramètre optionnel, la valeur à utiliser en tant que <code>this</code> lors de l'exécution de <code>callback</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p><code>true</code> si la fonction de rappel renvoie une valeur équivalente à <code>true</code> pour chaque élément du tableau typé, <code>false</code> sinon.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>some</code> exécute la fonction <code>callback</code> fournie pour chaque élément du tableau typé jusqu'à ce que <code>callback</code> renvoie une valeur vraie (une valeur qui vaut <code>true</code> lorsqu'elle est convertie en un booléen). Si un tel élément est trouvé, la méthode <code>some</code> renvoie immédiatement <code>true</code>. Dans le cas contraire, si <code>callback</code> renvoie une valeur fausse pour tous les éléments, la méthode <code>some</code> renverra <code>false</code>.</p>

<p><code>callback</code> est appelé avec trois arguments : la valeur de l'élément, l'indice de cet élément et le tableau qui est parcouru.</p>

<p>Si le paramètre <code>thisArg</code> est utilisé, il sera passé à la fonction <code>callback</code> en tant que valeur <code>this</code>. Sinon, la valeur <code>undefined</code> sera utilisée comme valeur <code>this</code>. La valeur <code>this</code> définitivement prise en compte par la fonction <code>callback</code> est déterminée selon <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this">les règles usuelles de détermination de <code>this</code></a>.</p>

<p><code>some</code> ne modifie pas le tableau typé sur lequel elle a été appelée.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Tester_la_valeur_des_éléments_d'un_tableau_typé">Tester la valeur des éléments d'un tableau typé</h3>

<p>Dans l'exemple qui suit, on teste s'il existe au moins un élément du tableau typé qui est supérieur à 10.</p>

<pre class="brush: js">function supérieurÀ10(élément, index, array) {
  return élément &gt; 10;
}
new Uint8Array([2, 5, 8, 1, 4]).some(supérieurÀ10);  // false
new Uint8Array([12, 5, 8, 1, 4]).some(supérieurÀ10); // true
</pre>

<h3 id="Tester_la_valeur_des_éléments_avec_les_fonctions_fléchées">Tester la valeur des éléments avec les fonctions fléchées</h3>

<p><a href="/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Les fonctions fléchées</a> permettent d'utiliser une syntaxe plus concise pour arriver au même résultat :</p>

<pre class="brush: js">new Uint8Array([2, 5, 8, 1, 4]).some(elem =&gt; elem &gt; 10); // false
new Uint8Array([12, 5, 8, 1, 4]).some(elem =&gt; elem &gt; 10); // true</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>Il n'existe pas d'objet global intitulé <em>TypedArray</em>, la prothèse doit donc uniquement être employée si nécessaire :</p>

<pre class="brush: js">// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice
if (!Uint8Array.prototype.some) {
  Object.defineProperty(Uint8Array.prototype, 'some', {
    value: Array.prototype.some
  });
}
</pre>

<p>S'il faut également prendre en charge les moteurs JavaScript qui ne prennent pas en charge la méthode {{jsxref("Object.defineProperty")}}, mieux vaut ne pas ajouter de prothèse du tout pour <code>TypedArray.prototype</code> car on ne peut pas les rendre non-énumérables.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-%typedarray%.prototype.some', 'TypedArray.prototype.some')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.some', 'TypedArray.prototype.some')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.TypedArray.some")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("TypedArray.prototype.every()")}}</li>
 <li>{{jsxref("Array.prototype.some()")}}</li>
</ul>
