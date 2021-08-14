---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
tags:
  - Array
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/flat
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/flat
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>flat()</strong></code> permet de créer un nouveau tableau contenant les éléments des sous-tableaux du tableau passé en argument, qui sont concaténés récursivement pour atteindre une profondeur donnée.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>var nouveauTableau = monTableau</var>.flat([<var>profondeur</var>]);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>profondeur</code> {{optional_inline}}</dt>
 <dd>Le niveau de profondeur en termes d'imbrication de tableau. Autrement dit, jusqu'à quel niveau d'imbrication un tableau imbriqué doit il être aplati. La valeur par défaut est 1.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouveau tableau qui contient la concaténation des éléments des sous-tableaux du tableau passé en argument.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Aplatir_des_tableaux_imbriqués">Aplatir des tableaux imbriqués</h3>

<pre class="brush: js">var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
</pre>

<h3 id="Aplatir_et_combler_les_trous">Aplatir et combler les trous</h3>

<p>La méthode <code>flat()</code> permet également de retirer les « trous » d'un tableau :</p>

<pre class="brush: js">var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]</pre>

<h2 id="Équivalent">Équivalent</h2>

<h3 id="reduce_et_concat"><code>reduce</code> et <code>concat</code></h3>

<pre class="brush: js">var arr = [1, 2, [3, 4]];

// pour un tableau avec un seul niveau de profondeur
arr.flat();
// est équivalent à
arr.reduce((acc, val) =&gt; acc.concat(val), []);
// [1, 2, 3, 4]

// avec la décomposition et les compositions flechées, on peut écrire :
const flat = arr =&gt; [].concat(...arr);
</pre>

<h3 id="reduce_concat_isArray_récursivité"><code>reduce</code> + <code>concat</code> + <code>isArray</code> + récursivité</h3>

<pre class="brush: js">var arr = [1, 2, [3, 4, [5, 6]]];

// Pour gérer plusieurs niveaux, on pourra utiliser
// une méthode récursive avec reduce et concat
function flatDeep(arr) {
   return arr.reduce((acc, val) =&gt; acc.concat(Array.isArray(val) ? flatDeep(val) : val), []);
};

flatDeep(arr);
// [1, 2, 3, 4, 5, 6]
</pre>

<h3 id="Utiliser_une_pile">Utiliser une pile</h3>

<pre class="brush: js">var arr = [1, 2, [3, 4]];

// Version non récursive utilisant une pile
function flatStack(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // On sort une valeur de la pile
    const next = stack.pop();
    if (Array.isArray(next)) {
      // On place les éléments qui sont des tableaux dans
      // la pile sans modifier l'entrée
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // On inverse le résultat pour revenir
  // à l 'ordre de l'entrée
  return res.reverse();
}

flatStack(arr);
// [1, 2, 3, 4]
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
   <td><a href="https://www.ecma-international.org/ecma-262/10.0/index.html#sec-array.prototype.flat">ECMAScript 2019</a></td>
   <td>Finalisé</td>
   <td>Proposition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.flat")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.flatMap()")}}</li>
 <li>{{jsxref("Array.prototype.map()")}}</li>
 <li>{{jsxref("Array.prototype.reduce()")}}</li>
 <li>{{jsxref("Array.prototype.concat()")}}</li>
</ul>
