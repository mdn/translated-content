---
title: Array.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Array/@@iterator
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/@@iterator
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/@@iterator
---
<div>{{JSRef}}</div>

<p>La valeur initiale de la propriété <code><strong>@@iterator</strong></code> correspond à la valeur initiale fournie par l'itérateur {{jsxref("Array.prototype.values()", "values")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>[Symbol.iterator]()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La première valeur fournie par {{jsxref("Array.prototype.values()","values()")}}. Si on utilise <code>arr[Symbol.iterator]</code> (sans les parenthèses) le navigateur renverra par défaut la fonction {{jsxref("Array.prototype.values()", "values()")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Parcourir_un_tableau_avec_une_boucle_for...of">Parcourir un tableau avec une boucle <code>for...of</code></h3>

<pre class="brush: js">var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr  = arr[Symbol.iterator]();
// il est nécessaire que l'environnement supporte
// les boucles for..of et les variables
// utilisées avec let ou const ou var
for (let letter of eArr) {
  console.log(letter);
}
</pre>

<h3 id="Parcourir_un_tableau_avec_next">Parcourir un tableau avec <code>next</code></h3>

<pre class="brush: js">var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p
</pre>

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
   <td>{{SpecName('ES2015', '#sec-array.prototype-@@iterator', 'Array.prototype[@@iterator]()')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype-@@iterator', 'Array.prototype[@@iterator]()')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.@@iterator")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.keys()")}}</li>
 <li>{{jsxref("Array.prototype.entries()")}}</li>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
 <li>{{jsxref("Array.prototype.every()")}}</li>
 <li>{{jsxref("Array.prototype.some()")}}</li>
 <li>{{jsxref("Array.prototype.values()")}}</li>
</ul>
