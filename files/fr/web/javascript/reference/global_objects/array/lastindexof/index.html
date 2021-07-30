---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/lastIndexOf
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>lastIndexOf()</strong></code> permet de renvoyer le dernier indice pour lequel une valeur donnée est présente dans un tableau. Si la valeur recherchée n'est pas présente, le résultat sera -1. Lors de la recherche, le tableau est parcouru dans le sens des index décroissants, à partir de l'index <code>indexDébut</code>.</p>

<div>{{EmbedInteractiveExample("pages/js/array-lastindexof.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>.lastIndexOf(<var>élémentRecherché</var>)
<var>arr</var>.lastIndexOf(<var>élémentRecherché</var>, <var>indexDébut</var>)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>élémentRecherché</code></dt>
 <dd>L'élément à qu'on cherche dans le tableau.</dd>
 <dt><code>indexDébut</code> {{optional_inline}}</dt>
 <dd>L'index à partir duquel commencer la recherche dans le tableau (la recherche s'effectuant à l'envers). Si le paramètre est absent, sa valeur par défaut sera la longueur du tableau moins 1 (c'est-à-dire <code>arr.length - 1</code>), le tableau sera alors parcouru dans sa totalité. Si l'index est plus grand ou égal à la longueur du tableau, le tableau sera parcouru en entier. Si l'index est négatif, la recherche commencera d'autant d'éléments à partir de la fin du tableau. À noter que, même si l'index est négatif, la recherche s'effectuera toujours de la fin jusqu'au début du tableau. Si l'index calculé est inférieur à 0, la méthode renverra -1 et le tableau ne sera pas parcouru.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le dernier index auquel on trouve la valeur dans le tableau, -1 si elle n'est pas trouvée.</p>

<h2 id="Description">Description</h2>

<p><code>lastIndexOf</code> compare <code>élémentRecherché</code> aux éléments contenus dans le tableau en utilisant une <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)">égalité stricte</a> (l'égalité utilisée par l'opérateur ===).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_lastIndexOf">Utiliser <code>lastIndexOf</code></h3>

<p>Dans l'exemple suivant, on utilise <code>lastIndexOf</code> afin de situer une valeur dans un tableau.</p>

<pre class="brush: js">var tableau = [2, 5, 9, 2];
tableau.lastIndexOf(2);     // 3
tableau.lastIndexOf(7);     // -1
tableau.lastIndexOf(2, 3);  // 3
tableau.lastIndexOf(2, 2);  // 0
tableau.lastIndexOf(2, -2); // 0
tableau.lastIndexOf(2, -1); // 3</pre>

<h3 id="Trouver_toutes_les_occurrences_dun_élément">Trouver toutes les occurrences d'un élément</h3>

<p>L’exemple suivant utilise <code>lastIndexOf</code> pour trouver tous les index (<code>indices</code>) d’un élément dans un tableau donné, en utilisant {{jsxref("Array.prototype.push", "push")}} pour les ajouter dans un autre tableau quand ils sont trouvés.</p>

<pre class="brush: js">var indices = [];
var tableau = ['a', 'b', 'a', 'c', 'a', 'd'];
var élément = 'a';
var idx = tableau.lastIndexOf(élément);
while (idx !== -1) {
  indices.push(idx);
  idx = (idx &gt; 0 ? tableau.lastIndexOf(élément, idx - 1) : -1);
}

console.log(indices);
// [4, 2, 0]</pre>

<p>Remarquez que nous avons dû traiter le cas de <code>idx === 0</code> séparément (<code>idx &gt; 0</code>) parce que l’élément sera toujours trouvé, indépendamment du paramètre de <code>fromIndex</code>, si c’est le premier élément du tableau. C’est une différence avec la méthode {{jsxref("Array.prototype.indexOf", "indexOf")}}.</p>


<h2 id="Prothèse_démulation_polyfill">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p><code>lastIndexOf</code> a été ajouté avec la cinquième édition du standard ECMA-262 ; il peut donc ne pas être présent dans tous les navigateurs web. Vous pouvez contourner ce problème en insérant le code suivant au début de vos scripts. Il vous permettra d'utiliser <code>lastIndexOf</code> avec les navigateurs qui ne le supportent pas nativement. L'algorithme qui suit est le même que celui spécifié par ECMAScript 5 si {{jsxref("Object", "Object")}}, {{jsxref("TypeError", "TypeError")}}, {{jsxref("Number", "Number")}}, {{jsxref("Math.floor")}}, {{jsxref("Math.abs")}}, et {{jsxref("Math.min")}} n'ont pas été modifiés et conservent leurs valeurs originales.</p>

<pre class="brush: js">// Production steps of ECMA-262, Edition 5, 15.4.4.15
// Reference: http://es5.github.io/#x15.4.4.15
if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/) {
    'use strict';

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var n, k,
      t = Object(this),
      len = t.length &gt;&gt;&gt; 0;
    if (len === 0) {
      return -1;
    }

    n = len - 1;
    if (arguments.length &gt; 1) {
      n = Number(arguments[1]);
      if (n != n) {
        n = 0;
      }
      else if (n != 0 &amp;&amp; n != (1 / 0) &amp;&amp; n != -(1 / 0)) {
        n = (n &gt; 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    for (k = n &gt;= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k &gt;= 0; k--) {
      if (k in t &amp;&amp; t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}</pre>

<p>On notera que cette implémentation vise une compatibilité absolue de <code>lastIndexOf</code> dans Firefox et le moteur JavaScript SpiderMonkey, incluant plusieurs cas très particuliers. Si vous comptez l'utiliser dans une application, vous devriez pouvoir calculer <code>from</code> avec un code beaucoup moins compliqué.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.4.15', 'Array.prototype.lastIndexOf')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.6.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.lastindexof', 'Array.prototype.lastIndexOf')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.lastindexof', 'Array.prototype.lastIndexOf')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.lastIndexOf")}}</p>

<h2 id="Notes_de_compatibilité">Notes de compatibilité</h2>

<ul>
 <li>À partir de Firefox 47 ({{geckoRelease(47)}}), cette méthode ne renverra plus <code>-0</code>. Ainsi, <code>[0].lastIndexOf(0, -0)</code> renverra toujours <code>+0</code> (cf. {{bug(1242043)}}).</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.indexOf()")}}</li>
 <li>{{jsxref("TypedArray.prototype.lastIndexOf()")}}</li>
</ul>
