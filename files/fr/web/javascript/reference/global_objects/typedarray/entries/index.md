---
title: TypedArray.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/entries
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/entries
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/entries
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>entries()</code></strong> renvoie un nouvel objet <code>Array Iterator</code> qui contient les paires clé/valeur pour chaque indice du tableau.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-entries.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>.entries()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouvel objet <code>Array Iterator</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Parcourir_un_tableau_avec_une_boucle_for...of">Parcourir un tableau avec une boucle <code>for...of</code></h3>

<pre class="brush: js">var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArray = arr.entries();
// prérequis nécessaire : le navigateur doit
// supporter les boucles for..of
// et les variables dont la portée est définie par let
for (let n of eArray) {
  console.log(n);
}
</pre>

<h3 id="Une_autre_méthode_d'itération">Une autre méthode d'itération</h3>

<pre class="brush: js">var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr.entries();
console.log(eArr.next().value); // [0, 10]
console.log(eArr.next().value); // [1, 20]
console.log(eArr.next().value); // [2, 30]
console.log(eArr.next().value); // [3, 40]
console.log(eArr.next().value); // [4, 50]
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
   <td>{{SpecName('ES2015', '#sec-%typedarray%.prototype.entries', '%TypedArray%.prototype.entries()')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>
    <p>Définition initiale.</p>
   </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.entries', '%TypedArray%.prototype.entries()')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.TypedArray.entries")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Tableaux_typés">Les tableaux typés en JavaScript</a></li>
 <li>{{jsxref("TypedArray")}}</li>
 <li>{{jsxref("TypedArray.prototype.keys()")}}</li>
 <li>{{jsxref("TypedArray.prototype.values()")}}</li>
 <li>{{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}</li>
</ul>
