---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
tags:
  - Array
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/indexOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/indexOf
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>indexOf()</strong></code> renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.</p>

<div class="note">
<p><strong>Note :</strong> pour la méthode associée aux chaînes de caractères, voir la page {{jsxref("String.prototype.indexOf()")}}.</p>
</div>

<div>{{EmbedInteractiveExample("pages/js/array-indexof.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>.indexOf(<var>élémentRecherché</var>)
<var>arr</var>.indexOf(<var>élémentRecherché</var>, indiceDébut)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>élémentRecherché</code></dt>
 <dd>L'élément qu'on cherche dans le tableau</dd>
 <dt><code>indiceDébut</code> {{optional_inline}}</dt>
 <dd>L'index à partir duquel commencer la recherche. La valeur par défaut est 0 (le tableau sera parcouru dans sa totalité). Si l'index est plus grand ou égal à la longueur du tableau, la méthode renverra -1. Si l'index est négatif, la recherche commencera d'autant d'éléments, à partir de la fin du tableau. À noter que même si l'index est négatif, la recherche s'effectue toujours du début jusqu'à la fin du tableau. Si l'index fourni est inférieur à 0, le tableau sera entièrement parcouru.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le premier index de l'élément dans le tableau ou -1 si la valeur n'est pas trouvée.</p>

<h2 id="Description">Description</h2>

<p><code>indexOf</code> compare <code>élémentRecherché</code> aux éléments contenus dans le tableau en utilisant une <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)">égalité stricte</a> (la même méthode utilisée par l'opérateur <code>===</code>).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_indexOf()">Utiliser <code>indexOf()</code></h3>

<p>Dans l'exemple qui suit, on peut utiliser <code>indexOf</code> afin de trouver l'emplacement d'un élément dans un tableau.</p>

<pre class="brush: js">var tableau = [2, 9, 9];
tableau.indexOf(2);     // 0
tableau.indexOf(7);     // -1
tableau.indexOf(9, 2);  // 2
tableau.indexOf(2, -1); // -1
tableau.indexOf(2, -3); // 0</pre>

<h3 id="Trouver_toutes_les_occurences_d'un_élément">Trouver toutes les occurences d'un élément</h3>

<p>Dans l'exemple qui suit, on utilise <code>indexOf()</code> afin de trouver tous les indices d'un élément dans un tableau. On peut utiliser la méthode {{jsxref("Array.prototype.push", "push")}} afin d'ajouter ces indices dans un autre tableau.</p>

<pre class="brush: js">var indices = [];
var tableau = ['a', 'b', 'a', 'c', 'a', 'd'];
var élément = 'a';
var idx = tableau.indexOf(élément);
while (idx != -1) {
  indices.push(idx);
  idx = tableau.indexOf(élément, idx + 1);
}
console.log(indices);
// [0, 2, 4]</pre>

<h3 id="Trouver_si_un_élément_existe_et_l'ajouter_dans_le_tableau_si_ce_n'est_pas_le_cas">Trouver si un élément existe et l'ajouter dans le tableau si ce n'est pas le cas</h3>

<pre class="brush: js">function mettreAJourLegumes(tabLégumes, légume) {
    if (tabLégumes.indexOf(légume) === -1) {
        tabLégumes.push(légume);
        console.log('Le nouveau tableau est : ' + tabLégumes);
    } else if (tabLégumes.indexOf(légume) &gt; -1) {
        console.log(légume + ' existe déjà dans le tableau.');
    }
}

var tabLégumes = ['pomme de terre', 'tomate', 'poivron'];

mettreAJourLegumes(tabLégumes, 'épinard');
// Le nouveau tableau est : pomme de terre,tomate,poivron,épinard
mettreAJourLegumes(tabLégumes, 'épinard');
// épinard existe déjà dans le tableau.</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p><code>indexOf</code> fut ajouté avec la cinquième édition du standard ECMA-262 ; il peut donc ne pas être présent dans tous les navigateurs web. Vous pouvez contourner ce problème en insérant le code suivant au début de vos scripts. Il permet d'utiliser <code>indexOf</code> dans les environnements qui ne le supportent pas nativement. L'algorithme est le même que celui spécifié dans ECMAScript 5 si on a bien {{jsxref("TypeError", "TypeError")}} et {{jsxref("Math.abs")}} qui ont leurs valeurs originales :</p>

<pre class="brush: js">// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Référence : http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {

    var k;

    // 1. Soit O le résultat de l'appel à ToObject avec
    //    this en argument.
    if (this == null) {
      throw new TypeError('"this" vaut null ou n est pas défini');
    }

    var O = Object(this);

    // 2. Soit lenValue le résultat de l'appel de la
    //    méthode interne Get de O avec l'argument
    //    "length".
    // 3. Soit len le résultat de ToUint32(lenValue).
    var len = O.length &gt;&gt;&gt; 0;

    // 4. Si len vaut 0, on renvoie -1.
    if (len === 0) {
      return -1;
    }

    // 5. Si l'argument fromIndex a été utilisé, soit
    //    n le résultat de ToInteger(fromIndex)
    //    0 sinon
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. Si n &gt;= len, on renvoie -1.
    if (n &gt;= len) {
      return -1;
    }

    // 7. Si n &gt;= 0, soit k égal à n.
    // 8. Sinon, si n&lt;0, soit k égal à len - abs(n).
    //    Si k est inférieur à 0, on ramène k égal à 0.
    k = Math.max(n &gt;= 0 ? n : len - Math.abs(n), 0);

    // 9. On répète tant que k &lt; len
    while (k &lt; len) {
      // a. Soit Pk égal à ToString(k).
      //    Ceci est implicite pour l'opérande gauche de in
      // b. Soit kPresent le résultat de l'appel de la
      //    méthode interne HasProperty de O avec Pk en
      //    argument. Cette étape peut être combinée avec
      //    l'étape c
      // c. Si kPresent vaut true, alors
      //    i.  soit elementK le résultat de l'appel de la
      //        méthode interne Get de O avec ToString(k) en
      //        argument
      //   ii.  Soit same le résultat de l'application de
      //        l'algorithme d'égalité stricte entre
      //        searchElement et elementK.
      //  iii.  Si same vaut true, on renvoie k.
      if (k in O &amp;&amp; O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.4.14', 'Array.prototype.indexOf')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.6.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.indexof', 'Array.prototype.indexOf')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.indexof', 'Array.prototype.indexOf')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.indexOf")}}</p>

<h2 id="Notes_de_compatibilité">Notes de compatibilité</h2>

<ul>
 <li>À partir de Firefox 47 ({{geckoRelease(47)}}), cette méthode ne renverra plus <code>-0</code>. Ainsi, <code>[0].indexOf(0, -0)</code> renverra toujours <code>+0</code> (cf. {{bug(1242043)}}).</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.lastIndexOf()")}}</li>
 <li>{{jsxref("TypedArray.prototype.indexOf()")}}</li>
</ul>
