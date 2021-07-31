---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/reduceRight
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>reduceRight()</strong></code> applique une fonction sur un accumulateur et chaque valeur d'un tableau (de la droite vers la gauche) de sorte à réduire le tableau en une seule valeur.</p>

<div>{{EmbedInteractiveExample("pages/js/array-reduce-right.html")}}</div>



<p>Voir également {{jsxref("Array.prototype.reduce()")}} pour une méthode qui réduit de gauche à droite.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>.reduceRight(<var>callback</var>[, valeurInitiale])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>La fonction à éxécuter sur chaque valeur de la liste. Elle utilise quatres arguments :
 <dl>
  <dt><code>accumulator</code></dt>
  <dd>La valeur précédemment retournée par le dernier appel de la fonction <code>callback</code>, ou <code>valeurInitial</code> si elle est fournie. (Voir ci-après.)</dd>
  <dt><code>valeurCourante</code></dt>
  <dd>La valeur de l'élément courant dans le tableau.</dd>
  <dt><code>index</code></dt>
  <dd>L'index de l'élément du tableau actuellement manipulé.</dd>
  <dt><code>array</code></dt>
  <dd>Le tableau sur lequel <code>reduceRight()</code> est appelée.</dd>
 </dl>
 </dd>
 <dt><code>valeurInitiale</code> {{optional_inline}}</dt>
 <dd>C'est l'objet à utiliser comme accumulateur/premier argument lors du premier appel de la fonction <code>callback</code>. Si aucune valeur n'est fournie, c'est le dernier élément du tableau qui sera utilisé. Si on appelle <code>reduce()</code> ou <code>reduceRight()</code> sur un tableau vide sans fournir de valeur initiale, on aura une exception {{jsxref("TypeError")}}.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La valeur obtenue grâce à la fonction de réduction.</p>

<h2 id="Description">Description</h2>

<p><code>reduceRight</code> exécute la fonction <code>callback</code> une fois pour chaque élément présent dans le tableau, les éléments vides sont ignorés. La fonction <code>callback</code> utilise quatre arguments : la valeur initiale (ou la valeur retournée par le précédent appel de la fonction<code> callback</code>), la valeur de l'élément courant, l'index de l'élément courant, et le tableau qui est parcouru.</p>

<p>L'usage de <code>reduceRight</code> avec définition d'un <code>callback</code> devrait ressembler à ceci :</p>

<pre class="brush: js">array.reduceRight(function(accumulator, valeurCourante, index, array) {
    // ...
});</pre>

<p>La première fois que la fonction de callback est appelée, <code>accumulator</code> et <code>valeurCourante</code> peuvent correspondre à un ou deux éléments. Si <code>valeurInitiale</code> est fournie lors de l'appel à <code>reduceRight</code>, alors <code>accumulator</code> sera égale à <code>valeurInitiale</code> et <code>valeurCourante</code> sera égale à la dernière valeur de la liste. Si <code>valeurInitiale</code> n'est pas fournie, alors <code>accumulator</code> sera égale à la dernière valeur de la liste, et <code>valeurCourante</code> sera alors égale à l'avant-dernière valeur du tableau.</p>

<p>Si on utilise la méthode <code>reduceRight</code> de la façon suivante :</p>

<pre class="brush: js">[0, 1, 2, 3, 4].reduceRight(function(accumulator, valeurCourante, index, array) {
    return accumulator + valeurCourante;
});
</pre>

<p>La fonction <code>callback</code> sera appelée quatre fois, avec les arguments et les valeurs de retour de chaque appel suivant :</p>

<table>
 <thead>
  <tr>
   <th scope="col"><code>callback</code></th>
   <th scope="col"><code>accumulator</code></th>
   <th scope="col"><code>valeurCourante</code></th>
   <th scope="col"><code>index</code></th>
   <th scope="col"><code>array</code></th>
   <th scope="col">Valeur renvoyée</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">premier appel</th>
   <td>4</td>
   <td>3</td>
   <td>3</td>
   <td><code>[0,1,2,3,4]</code></td>
   <td>7</td>
  </tr>
  <tr>
   <th scope="row">second appel</th>
   <td>7</td>
   <td><code>2</code></td>
   <td><code>2</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td>9</td>
  </tr>
  <tr>
   <th scope="row">troisième appel</th>
   <td>9</td>
   <td>1</td>
   <td>1</td>
   <td><code>[0,1,2,3,4]</code></td>
   <td>10</td>
  </tr>
  <tr>
   <th scope="row">quatrième appel</th>
   <td>10</td>
   <td>0</td>
   <td>0</td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>10</code></td>
  </tr>
 </tbody>
</table>

<p>La valeur retournée par <code>reduceRight</code> sera alors celle du dernier appel de la fonction <code>callback</code> (<code>10</code>).</p>

<p>Si vous fournissez une valeur initiale comme second argument à l'appel de <code>reduceRight</code>, le résultat sera alors le suivant :</p>

<pre class="brush: js">[0, 1, 2, 3, 4].reduceRight(function(accumulator, valeurCourante, index, array) {
    return accumulator + valeurCourante;
}, 10);
</pre>

<table>
 <thead>
  <tr>
   <th scope="col"></th>
   <th scope="col"><code>accumulator</code></th>
   <th scope="col"><code>valeurCourante</code></th>
   <th scope="col"><code>index</code></th>
   <th scope="col"><code>array</code></th>
   <th scope="col">Valeur renvoyée</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">premier appel</th>
   <td><code>10</code></td>
   <td>4</td>
   <td>4</td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>14</code></td>
  </tr>
  <tr>
   <th scope="row">second appel</th>
   <td>14</td>
   <td>3</td>
   <td>3</td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>17</code></td>
  </tr>
  <tr>
   <th scope="row">troisième appel</th>
   <td>17</td>
   <td><code>2</code></td>
   <td><code>2</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>19</code></td>
  </tr>
  <tr>
   <th scope="row">quatrième appel</th>
   <td>19</td>
   <td>1</td>
   <td>1</td>
   <td><code>[0,1,2,3,4]</code></td>
   <td>20</td>
  </tr>
  <tr>
   <th scope="row">cinquième appel</th>
   <td>20</td>
   <td>0</td>
   <td>0</td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>20</code></td>
  </tr>
 </tbody>
</table>

<p>La valeur renvoyée par <code>reduceRight</code> sera ici <code>20</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Additionner_toutes_les_valeurs_d'une_liste">Additionner toutes les valeurs d'une liste</h3>

<pre class="brush: js">var total = [0, 1, 2, 3].reduceRight(function(a, b) {
    return a + b;
});
// total == 6
</pre>

<h3 id="Aplatir_une_liste_de_listes">Aplatir une liste de listes</h3>

<pre class="brush: js">var aplati = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
// aplati [4, 5, 2, 3, 0, 1]
</pre>

<h3 id="Différence_entre_reduce_et_reduceRight">Différence entre <code>reduce</code> et <code>reduceRight</code></h3>

<pre class="brush: js">var a = ['1', '2', '3', '4','5']
var gauche = a.reduce(function(prev, cur) {
  return prev + cur;
});

var droite = a.reduceRight(function(prev, cur) {
  return prev + cur;
});

console.log(gauche); // "12345"
console.log(droite); // "54321"</pre>

<h3 id="Composition_de_fonctions_à_l'aide_de_reduce">Composition de fonctions à l'aide de <code>reduce</code></h3>

<p>La composition de fonctions consiste en l'enchaînement de n fonctions l'une après l'autre (où les appels sont généralement exécutés de droite à gauche.</p>

<pre class="brush: js">/**
 *
 * h(x) = f(g(x))
 *
 * https://fr.wikipedia.org/wiki/Composition_de_fonctions
 */

const compose = (...args) =&gt; (value) =&gt; args.reduceRight((acc, fn) =&gt; fn(acc), value)

// On incrémente un nombre passé en argument
const inc = (n) =&gt; n + 1

// On double la valeur passée en argument
const double = (n) =&gt; n * 2

// On compose double(inc(x))
compose(double, inc)(2) // 6

// On compose inc(double(x))
compose(inc, double)(2) // 5
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
   <td>{{SpecName('ES5.1', '#sec-15.4.4.22', 'Array.prototype.reduceRight')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.8.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.reduceright', 'Array.prototype.reduceRight')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.reduceright', 'Array.prototype.reduceRight')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.reduceRight")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.reduce()")}}</li>
</ul>
