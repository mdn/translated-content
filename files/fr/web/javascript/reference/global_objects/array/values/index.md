---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/values
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/values
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>values()</code></strong> renvoie un nouvel objet <strong><code>Array Iterator</code></strong> qui contient les valeurs pour chaque indice du tableau. Cette méthode est l'implémentation par défaut de <code>Array.prototype[Symbol.Iterator]</code>.</p>

<p>{{EmbedInteractiveExample("pages/js/array-values.html")}}</p>

<pre class="brush: js">var a = ['t', 'i', 't', 'o', 'u'];
var iterateur = a.values();

console.log(iterateur.next().value); // t
console.log(iterateur.next().value); // i
console.log(iterateur.next().value); // t
console.log(iterateur.next().value); // o
console.log(iterateur.next().value); // u
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>array</var>.values()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouvel objet itérateur sur {{jsxref("Array")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Itérer_avec_une_boucle_for...of">Itérer avec une boucle <code>for...of</code></h3>

<pre class="brush: js">var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr.values();
// votre navigateur doit supporter les boucles for..of
// et les variables définies avec let
for (let lettre of eArr) {
  console.log(lettre);
}
</pre>

<h3 id="Itérer_avec_next()">Itérer avec <code>next()</code></h3>

<pre class="brush: js">var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr.values();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p
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
   <td>{{SpecName('ES2015', '#sec-array.prototype.values', 'Array.prototype.values')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.values', 'Array.prototype.values')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.values")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.keys()")}}</li>
 <li>{{jsxref("Array.prototype.entries()")}}</li>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
 <li>{{jsxref("Array.prototype.every()")}}</li>
 <li>{{jsxref("Array.prototype.some()")}}</li>
</ul>
