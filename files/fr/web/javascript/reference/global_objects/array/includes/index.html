---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
tags:
  - Array
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/includes
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/includes
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>includes()</strong></code> permet de déterminer si un tableau contient une valeur et renvoie <code>true</code> si c'est le cas, <code>false</code> sinon.</p>

<div>{{EmbedInteractiveExample("pages/js/array-includes.html")}}</div>



<div class="note">
<p><strong>Note :</strong> Cette méthode utilise l'algorithme de comparaison <em><a href="/fr/docs/Web/JavaScript/Les_différents_tests_d_égalité#Un_modèle_pour_mieux_comprendre">SameValueZero</a></em> qui fonctionne comme l'égalité stricte, à la différence que <code>NaN</code> est ici égal à lui même.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">array.includes(élémentRecherché)
array.includes(élémentRecherché, indiceDépart)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>élémentRecherché</code></dt>
 <dd>La valeur qu'on souhaite trouver dans le tableau (lorsqu'on manipule des caractères et des chaînes, la comparaison est sensible à la casse).</dd>
 <dt><code>indiceDépart</code> {{optional_inline}}</dt>
 <dd>La position du tableau à partir de laquelle commencer à chercher <code>élémentRecherché</code>. Si on utilise une valeur négative, la recherche commencera à partir de la fin du tableau (autrement dit à l'indice <code>array.length - indiceDépart</code>). La valeur par défaut est 0.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un {{jsxref("Boolean","booléen","",1)}} qui vaut <code>true</code> si <code>élémentRecherché</code> est trouvé dans le tableau (à partir de l'<code>indiceDépart</code> si celui-ci est indiqué). Les valeurs -0, +0 et 0 sont considérées comme équivalentes mais <code>false</code> n'est pas considéré comme équivalent à 0.</p>

<div class="note">
<p><strong>Note :</strong> Pour être tout à fait précis, <code>includes()</code> utilise l'algorithme <em><a href="/fr/docs/Web/JavaScript/Les_différents_tests_d_égalité#Un_modèle_pour_mieux_comprendre">SameValueZero</a></em> afin de déterminer si un élément donné est trouvé.</p>
</div>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true

['a', 'b', 'c'].includes('c', 5);    // false
['a', 'b', 'c'].includes('c', -100); // true
</pre>

<h3 id="indiceDépart_supérieur_ou_égal_à_la_longueur_du_tableau"><code>indiceDépart</code> supérieur ou égal à la longueur du tableau</h3>

<p>SI <code>indiceDépart</code> est supérieur ou égal à la longueur du tableau, la méthode retourne <code>false</code>. Le tableau n'est pas parcouru.</p>

<pre class="brush: js">var arr = ['a', 'b', 'c'];

arr.includes('c', 3);   // false
arr.includes('c', 100); // false
</pre>

<h3 id="indiceDépart_strictement_négatif"><code>indiceDépart</code> strictement négatif</h3>

<p>Si <code>indiceDépart</code> est strictement négatif, l'indice de départ effectif est la somme entre la taille du tableau et <code>indiceDépart</code>. Si cette somme est toujours négative, le tableau est intégralement parcouru.</p>

<pre class="brush: js">// Le tableau a une taille de 3
// indiceDépart vaut -2
// L'indice de départ effectif vaut is 3 + (-2) = 1

var arr = ['a', 'b', 'c'];

arr.includes('a', -2); // false
arr.includes('b', -2); // true
arr.includes('c', -100); // true
</pre>

<h3 id="Utilisation_d'includes()_comme_méthode_générique">Utilisation d'<code>includes()</code> comme méthode générique</h3>

<p><code>includes()</code> est une méhtode générique : l'objet sur lequel elle est appelée ne doit pas nécessairement être un tableau. On peut l'utiliser sur des objets semblables à des tableaux (ex. <code><a href="/fr/docs/Web/JavaScript/Reference/Fonctions/arguments">arguments</a></code> ou des chaînes de caractères) :</p>

<pre class="brush: js">function argumentsContientA(){
  return [].includes.call(arguments, 'a');
}

console.log(argumentsContientA('a','b','c')); // true
console.log(argumentsContientA('d','e','f')); // false
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
   <td>{{SpecName('ES7', '#sec-array.prototype.includes', 'Array.prototype.includes')}}</td>
   <td>{{Spec2('ES7')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.includes', 'Array.prototype.includes')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.includes")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("TypedArray.prototype.includes()")}}</li>
 <li>{{jsxref("String.prototype.includes()")}}</li>
 <li>{{jsxref("Array.prototype.indexOf()")}}</li>
 <li>{{jsxref("Array.prototype.find()")}}</li>
 <li>{{jsxref("Array.prototype.findIndex()")}}</li>
</ul>
