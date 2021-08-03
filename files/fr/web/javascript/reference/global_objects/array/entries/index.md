---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Méthode
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/entries
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/entries
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>entries()</strong></code> renvoie un nouvel objet de type  <code><strong>Array Iterator</strong></code> qui contient le couple clef/valeur pour chaque éléments du tableau.</p>

<div>{{EmbedInteractiveExample("pages/js/array-entries.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>.entries()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouvel objet qui est un itérateur pour {{jsxref("Array")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Parcourir_un_tableau_avec_ses_index_et_éléments">Parcourir un tableau avec ses index et éléments</h3>

<pre class="brush:js">const arr = ["a", "b", "c"];
for (const [index, element] of arr.entries()) {
  console.log(index, element);
}
// 0 "a"
// 1 "b"
// 2 "c"
</pre>

<h3 id="Boucle_for...of">Boucle <code>for...of</code></h3>

<p>On peut avoir le même résultat en utilisant une boucle <a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...of">for...of</a> :</p>

<pre class="brush: js">var arr = ['a', 'b', 'c'];
var eArr = arr.entries();

for (let e of eArr) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
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
   <td>{{SpecName('ES2015', '#sec-array.prototype.entries', 'Array.prototype.entries')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.entries', 'Array.prototype.entries')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.entries")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.keys()")}}</li>
 <li>{{jsxref("Array.prototype.values()")}}</li>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
 <li>{{jsxref("Array.prototype.every()")}}</li>
 <li>{{jsxref("Array.prototype.some()")}}</li>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...of">for...of</a></code></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration">Les protocoles d'itération</a></li>
</ul>
