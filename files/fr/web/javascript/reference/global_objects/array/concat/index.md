---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
tags:
  - Array
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/concat
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/concat
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>concat()</strong></code> est utilisée afin de fusionner un ou plusieurs tableaux en les concaténant. Cette méthode ne modifie pas les tableaux existants, elle renvoie un nouveau tableau qui est le résultat de l'opération.</p>

<div>{{EmbedInteractiveExample("pages/js/array-concat.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">let <var>nouveau_tableau</var> = <var>ancien_tableau</var>.concat(<var>valeur1</var>[, <var>valeur2</var>[, ...[, <var>valeurN</var>]]])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>valeurN</code>{{optional_inline}}</dt>
 <dd>Des tableaux et/ou des valeurs à concaténer dans le nouveau tableau. Si tous les arguments <code>valeurN</code> valent <code>undefined</code>, <code>concat</code> renverra une copie superficielle du tableau sur lequel elle est appelée. Voir ci-après pour plus de détails.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une nouvelle instance de {{jsxref("Array")}}.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>concat</code> permet de créer un nouveau tableau constitué des éléments de l'objet <code>this</code> sur lequel elle a été appelée, suivis dans l'ordre par, pour chaque paramètre, les éléments de ce paramètre (s'il s'agit d'un tableau) ou le paramètre lui-même (s'il ne s'agit pas d'un tableau). La concaténation ne « déplie » pas les tableaux imbriqués.</p>

<p>La méthode <code>concat</code> ne modifie pas <code>this</code> ni aucun des tableaux passés en paramètres, mais renvoie une copie qui contient des copies des mêmes éléments combinées que ceux des tableaux originaux. Les éléments des tableaux originaux sont copiés dans le nouveau tableau comme suit :</p>

<ul>
 <li>Pour les références à des objets (et non les objets eux-mêmes) : <code>concat</code> copie ces références dans le nouveaux tableau. Le tableau original et le nouveau tableau feront référence au même objet. C'est-à-dire que si un objet référencé est modifié, ces changements seront visibles tant dans le nouveau que dans les tableaux originaux.</li>
</ul>

<ul>
 <li>Pour les chaînes, les booléens et les nombres « primitifs » (c'est-à-dire pas les objets {{jsxref("String", "String")}}, {{jsxref("Boolean")}} et {{jsxref("Number", "Number")}}) : <code>concat</code> copie les valeurs des chaînes et des nombres dans le nouveau tableau. (voir <a href="/fr/docs/Web/JavaScript/Structures_de_donn%C3%A9es#Les_types_de_donn%C3%A9es">Les types de données en JavaScript</a>).</li>
</ul>

<div class="note">
<p><strong>Note :</strong> La concaténation n'impactera pas les tableaux originaux. Par la suite, toute opération sur le nouveau tableau n'aura aucun effet sur les tableaux d'origine, et vice versa.</p>
</div>

<h2 id="Exemples">Exemples</h2>

<h3 id="Concaténer_deux_tableaux">Concaténer deux tableaux</h3>

<p>Le code qui suit concatène deux tableaux :</p>

<pre class="brush: js">let alpha = ["a", "b", "c"];
let numerique = [1, 2, 3];

alpha.concat(numerique);
// donne : ["a", "b", "c", 1, 2, 3]
</pre>

<h3 id="Concaténer_trois_tableaux">Concaténer trois tableaux</h3>

<p>Le code qui suit concatène trois tableaux :</p>

<pre class="brush: js">let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];

let nums = num1.concat(num2, num3);

console.log(nums);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
</pre>

<h3 id="Concaténer_des_valeurs_avec_un_tableau">Concaténer des valeurs avec un tableau</h3>

<p>Le code qui suit ajoute trois valeurs à un tableau :</p>

<pre class="brush: js">let alpha = ['a', 'b', 'c'];

let alphanumerique = alpha.concat(1, [2, 3]);

console.log(alphanumerique);
// ['a', 'b', 'c', 1, 2, 3]
</pre>

<h3 id="Concaténer_des_tableaux_imbriqués">Concaténer des tableaux imbriqués</h3>

<p>Dans le code qui suit, on concatène deux tableaux qui ont plusieurs dimensions et on illustre la conservation des références :</p>

<pre class="brush: js">let num1 = [[1]];
let num2 = [2, [3]];

let nums = num1.concat(num2);

console.log(nums);
// affichera [[1], 2, [3]]

// Ici, on modifie le premier élément de num1
num1[0].push(4);

console.log(nums);
// affichera [[1, 4], 2, [3]]</pre>

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
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.2.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.4.4', 'Array.prototype.concat')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.concat', 'Array.prototype.concat')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.concat', 'Array.prototype.concat')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.concat")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.push", "push")}} / {{jsxref("Array.pop", "pop")}} qui permettent d'ajouter/retirer des éléments à partir de la fin du tableau</li>
 <li>{{jsxref("Array.unshift", "unshift")}} / {{jsxref("Array.shift", "shift")}} qui permettent d'ajouter/retirer des éléments à partir du début du tableau</li>
 <li>{{jsxref("Array.splice", "splice")}} qui permet d'ajouter/retirer des éléments à un endroit donné du tableau</li>
 <li>{{jsxref("String.prototype.concat()")}}</li>
 <li>{{jsxref("Symbol.isConcatSpreadable")}} (permet de contrôler la façon dont un tableau est ramené à une valeur)</li>
</ul>
