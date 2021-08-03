---
title: TypedArray.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/keys
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/keys
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/keys
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>keys()</code></strong> renvoie un nouvel objet <code>Array Iterator</code> contenant les clés pour chaque indice du tableau typé.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-keys.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>.keys()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouvel objet <code>Array Iterator</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Parcourir_un_tableau_avec_for...of">Parcourir un tableau avec <code>for...of</code></h3>

<pre class="brush: js">var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArray = arr.keys();
// prérequis : le navigateur doit supporter les
// boucles for..of et les variables dont la portée
// est définie par let
for (let n of eArray) {
  console.log(n);
}
</pre>

<h3 id="Une_autre_méthode_d'itération">Une autre méthode d'itération</h3>

<pre class="brush: js">var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr.keys();
console.log(eArr.next().value); // 0
console.log(eArr.next().value); // 1
console.log(eArr.next().value); // 2
console.log(eArr.next().value); // 3
console.log(eArr.next().value); // 4
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
   <td>{{SpecName('ES2015', '#sec-%typedarray%.prototype.keys', '%TypedArray%.prototype.keys()')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.keys', '%TypedArray%.prototype.keys()')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.TypedArray.keys")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Tableaux_typés">Les tableaux typés JavaScript</a></li>
 <li>{{jsxref("TypedArray")}}</li>
 <li>{{jsxref("TypedArray.prototype.entries()")}}</li>
 <li>{{jsxref("TypedArray.prototype.values()")}}</li>
 <li>{{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}</li>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...of">for...of</a></code></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration">Les protocoles d'itération</a></li>
</ul>
