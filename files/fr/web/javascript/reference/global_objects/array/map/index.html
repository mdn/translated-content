---
title: Array.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/map
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/map
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>map()</strong></code> crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.</p>

<div>{{EmbedInteractiveExample("pages/js/array-map.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>var nouveauTableau = arr</var>.map(<var>callback</var> [, <var>thisArg</var>])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>La fonction qui est utilisée pour créer un élément du nouveau tableau. Elle utilise trois arguments :
 <dl>
  <dt><code>valeurCourante</code></dt>
  <dd>La valeur de l'élément du tableau à traiter.</dd>
  <dt><code>index</code>{{optional_inline}}</dt>
  <dd>L'index de l'élément qui est traité par la fonction.</dd>
  <dt><code>tableau</code>{{optional_inline}}</dt>
  <dd>Le tableau sur lequel on a appelé la méthode <code>map</code>.</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code> {{optional_inline}}</dt>
 <dd>La valeur à utiliser pour <code>this</code> lors de l'exécution de <code>callback</code>. La valeur par défaut est l'objet global de l'environnement (<code>Window</code> pour un navigateur).</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouveau tableau composé des images de la fonction de rappel.</p>

<h2 id="Description">Description</h2>

<p>Lorsqu'on utilise <code>map</code>, la fonction <code>callback</code> fournie en argument est exécutée une fois pour chacun des éléments du tableau, dans l'ordre du tableau. Chaque résultat de l'opération sur un élément sera un élément du nouveau tableau. La fonction <code>callback</code> est appelée uniquement pour les indices du tableau pour lesquels il y a des valeurs affectées (y compris si cette valeur est {{jsxref("undefined")}}). Si les valeurs ont été supprimées ou qu'elles n'ont jamais été initialisées, la fonction ne sera pas appelée.</p>

<p><code>callback</code> est appelée avec trois arguments : la valeur de l'élément du tableau, l'index de cet élément et l'objet {{jsxref("Array")}} qui est parcouru.</p>

<div class="warning">
<p><strong>Attention :</strong> <code>map()</code> construit un nouveau tableau. Si on utilise cette méthode sans utiliser le résultat, mieux vaudra utiliser <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach">forEach</a></code> ou <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...of">for...of</a></code>.  Pour mieux décider si <code>map()</code>est adéquat, regardez si vous utilisez la valeur de retour et/ou si vous renvoyez une valeur avec la fonction <code>callback</code> : si ce n'est pas le cas, il ne faut pas utiliser <code>map()</code>.</p>
</div>

<p>Si le paramètre <code>thisArg</code> est utilisé, il sera utilisé en tant que <code>this</code> par la fonction <code>callback</code> lorsqu'elle sera appelée. S'il n'est pas utilisé, ce sera la valeur {{jsxref("undefined")}} qui sera utilisée pour définir <code>this</code>. La valeur <code>this</code> finalement prise en compte par la fonction <code>callback</code> est définie <a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this">selon les règles usuelles qui déterminent la valeur <code>this</code> observée par une fonction</a>.</p>

<p><code>map</code> ne modifie pas le tableau sur lequel elle est appelée (bien que la fonction <code>callback</code>, si elle est appelée, puisse modifier le tableau).</p>

<p>La liste des éléments à traiter lors de l'opération <code>map</code> est définie avant le premier appel à <code>callback</code>. Les éléments qui sont ajoutés au tableau après que l'appel à <code>map</code> ait été initié ne seront pas traités par la fonction <code>callback</code>. Si des éléments ont été modifiés, la valeur utilisée par la fonction <code>callback</code> sera celle au moment où <code>map</code> est utilisée. Les éléments qui sont supprimés ne sont pas traités. De la même façon, si on applique <code>map</code> sur un tableau dont certains éléments sont indéfinis, le résultat possèdera également les mêmes éléments indéfinis.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Créer_un_tableau_des_racines_carrées_d'un_tableau_de_nombre">Créer un tableau des racines carrées d'un tableau de nombre</h3>

<p>Dans l'exemple suivant, on crée un tableau composé des racines carrées des éléments d'un premier tableau :</p>

<pre class="brush: js">var nombres = [1, 4, 9];
var racines = nombres.map(Math.sqrt);
// racines vaut désormais [1, 2, 3]
// nombres vaut toujours [1, 4, 9]
</pre>

<h3 id="Créer_un_tableau_de_nombres_avec_une_fonction_à_un_argument">Créer un tableau de nombres avec une fonction à un argument</h3>

<p>Ici, on illustre le fonctionnement de <code>map</code> avec une fonction à un argument. Cet argument sera automatiquement remplacé par chaque élément du tableau au fur et à mesure que <code>map</code> parcourt le tableau :</p>

<pre class="brush: js">var nombres = [1, 4, 9];
var doubles = nombres.map(function(num) {
  return num * 2;
});
// doubles vaut désormais [2, 8, 18].
// nombres vaut toujours [1, 4, 9]
</pre>

<h3 id="Utiliser_map_pour_changer_le_format_d'objets_dans_un_tableau">Utiliser <code>map</code> pour changer le format d'objets dans un tableau</h3>

<p>Dans le code qui suit, on utilise un tableau d'objets pour créer un autre tableau contenant de nouveaux objets dans un autre format :</p>

<pre class="brush: js">var tableauOrig = [{clé:1, valeur:10}, {clé:2, valeur:20}, {clé:3, valeur: 30}];
var tableauFormaté = tableauOrig.map(obj =&gt; {
  var rObj = {};
  rObj[obj.clé] = obj.valeur;
  return rObj;
});
// tableauFormaté vaut maintenant [{1:10}, {2:20}, {3:30}],
// tableauOrig vaut toujours
// [{clé:1, valeur:10},
//  {clé:2, valeur:20},
//  {clé:3, valeur: 30}
// ]
</pre>

<h3 id="Utiliser_map_de_façon_générique">Utiliser <code>map</code> de façon générique</h3>

<p>Dans cet exemple, on voit comment utiliser la fonction <code>map</code> sur une chaîne de caractères pour obtenir un tableau contenant les codes ASCII des valeurs encodées :</p>

<pre class="brush: js">var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { return x.charCodeAt(0); });
// a vaut désormais [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
</pre>

<h3 id="Utiliser_map_avec_querySelectorAll">Utiliser <code>map</code> avec <code>querySelectorAll</code></h3>

<p>Dans cet exemple, on illustre comment utiliser la méthode map de façon générique, sur un tableau d'objets collectés grâce à <code>querySelectorAll</code> :</p>

<pre class="brush: js">var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});
</pre>

<p>On aurait également pu utiliser la méthode {{jsxref("Array.from()")}} qui permet de produire un tableau à partir d'un objet itérable.</p>

<h3 id="Un_résultat_inattendu">Un résultat inattendu</h3>

<p><a href="https://www.wirfs-brock.com/allen/posts/166">Exemple inspiré par ce billet</a> (en anglais)</p>

<p>Il est fréquent d'utiliser la fonction <code>callback</code> avec un seul argument (l'élément en cours). Certaines fonctions natives sont également souvent appelées avec un unique argument même si elles peuvent prendre en compte plusieurs arguments. En combinant ces deux « habitudes », on peut obtenir certains résultats inattendus :</p>

<pre class="brush: js">// Si on utilise :
['1', '2', '3'].map(parseInt);
// On s'attend à obtenir [1, 2, 3]
// Le résultat qu'on obtient est en fait [1, NaN, NaN]

// parseInt est souvent utilisé avec un argument mais il
// peut être utilisé avec deux arguments
// Le premier correspond à l'expression à parser et le second
// à la base dans laquelle convertir
// Array.prototype.map passe 3 arguments à callback :
// l'élément, l'index et le tableau
// Le troisième argument sera ignoré par parseInt mais pas le
// deuxième, ce qui donnera ce résultat étrange

function returnInt(element) {
  return parseInt(element, 10);
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// Le résultat qu'on obtient avec la fonction auxiliaire

['1', '2', '3'].map(parseInt);  // [1, NaN, NaN]
// car map passe trois argument à la fonction et que parseInt
// considère le second argument comme base.
// En détails :
// Premier élément :   "1" à l'indice 0 : parseInt("1",0); donne 1
// Deuxième élément :  "2" à l'indice 1 : parseInt("2",1); donne NaN
// Troisième élément : "3" à l'indice 2 : parseInt("3",2); donne NaN


// Formulation équivalente plus concise avec
// une fonction fléchée
['1', '2', '3'].map( str =&gt; parseInt(str));

// Une autre méthode, plus simple
['1', '2', '3'].map(Number); // [1, 2, 3]
// à la différence de parseInt, cela fonctionnera pour les
// nombres décimaux ou en notation exponentielle
['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]
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
   <td>{{SpecName('ES5.1', '#sec-15.4.4.19', 'Array.prototype.map')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.6.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.map', 'Array.prototype.map')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.map', 'Array.prototype.map')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.map")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
 <li>L'objet {{jsxref("Map")}}</li>
 <li>{{jsxref("Array.from()")}}</li>
</ul>
