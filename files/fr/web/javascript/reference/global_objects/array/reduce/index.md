---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/Reduce
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/Reduce
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/reduce
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>reduce()</strong></code> applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.</p>

<div>{{EmbedInteractiveExample("pages/js/array-reduce.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>.reduce(<var>callback</var>)
<var>arr</var>.reduce(<var>callback</var>, valeurInitiale)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>La fonction à exécuter sur chaque valeur de la liste (sauf le premier si aucune <code>valeurInitiale</code> n'est fournie), elle prend quatre arguments en entrée :
 <dl>
  <dt><code>accumulateur</code></dt>
  <dd>La valeur précédemment retournée par le dernier appel du callback, ou <code>valeurInitiale</code>, si elle est fournie (voir ci-après) (c'est la valeur « accumulée » au fur et à mesure des appels</dd>
  <dt><code>valeurCourante</code></dt>
  <dd>La valeur de l'élément courant actuellement manipulé dans le tableau.</dd>
  <dt><code>index</code>{{optional_inline}}</dt>
  <dd>L'index de l'élément courant actuellement manipulé dans le tableau.</dd>
  <dt><code>array</code>{{optional_inline}}</dt>
  <dd>Le tableau sur lequel on a appelé la méthode <code>reduce()</code>.</dd>
 </dl>
 </dd>
 <dt><code>valeurInitiale</code>{{optional_inline}}</dt>
 <dd>Une valeur utilisée comme premier argument lors du premier appel de la fonction <code>callback</code>. Si aucune valeur initiale n'est fournie, le premier élément du tableau est utilisé (et la boucle de traitement ne le parcourera pas). Si on appelle <code>reduce()</code> sur un tableau vide sans fournir de valeur initiale, on aura une erreur.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La valeur obtenue grâce à la fonction de réduction.</p>

<h2 id="Description">Description</h2>

<p><code>reduce()</code> exécute la fonction <code>callback</code> une fois pour chaque élément présent dans le tableau et ignore les éléments vides du tableau. La fonction <code>callback</code> utilise quatre arguments :</p>

<ol>
 <li>L'accumulateur (la valeur retournée par le précédent appel de la fonction <code>callback</code>), ou la valeur initiale s'il sagit du premier appel ;</li>
 <li>la valeur de l'élément courant ;</li>
 <li>l'index de l'élément courant ;</li>
 <li>le tableau parcouru par la méthode.</li>
</ol>

<p>La première fois que la fonction <code>callback</code> est appelée, <code>valeurInitiale</code> et <code>valeurCourante</code> peuvent correspondre à un ou deux éléments. Si <code>valeurInitiale</code> est fournie dans l'appel de <code>reduce()</code>, alors <code>accumulateur</code> sera égale à <code>valeurInitiale</code> et <code>valeurCourante</code> sera égale à la première valeur de la liste. Si <code>valeurInitiale</code> n'est pas fournie, alors <code>accumulateur</code> sera égale à la première valeur de la liste, et <code>valeurCourante</code> sera alors égale à la seconde.</p>

<p>Autrement dit, si <code>valeurInitiale</code> n'est pas fournie, <code>reduce</code> exécutera la fonction de rappel à partir de l'indice 1 et la première valeur du tableau (d'indice 0) sera utilisée pour <code>valeurInitiale</code>.</p>

<p>En considérant le code suivant :</p>

<pre class="brush:js">[0, 1, 2, 3, 4].reduce(function(accumulateur, valeurCourante, index, array){
  return accumulateur + valeurCourante;
});
</pre>

<p>La fonction <code>callback</code> sera appelée quatre fois, avec les arguments et les valeurs de retour de chaque appel suivant :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col"></th>
   <th scope="col"><code>accumulateur</code></th>
   <th scope="col"><code>valeurCourante</code></th>
   <th scope="col"><code>index</code></th>
   <th scope="col"><code>array</code></th>
   <th scope="col">valeur retournée</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">premier appel</th>
   <td><code>0</code></td>
   <td><code>1</code></td>
   <td><code>1</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>1</code></td>
  </tr>
  <tr>
   <th scope="row">deuxième appel</th>
   <td><code>1</code></td>
   <td><code>2</code></td>
   <td><code>2</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>3</code></td>
  </tr>
  <tr>
   <th scope="row">troisième appel</th>
   <td><code>3</code></td>
   <td><code>3</code></td>
   <td><code>3</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>6</code></td>
  </tr>
  <tr>
   <th scope="row">quatrième appel</th>
   <td><code>6</code></td>
   <td><code>4</code></td>
   <td><code>4</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>10</code></td>
  </tr>
 </tbody>
</table>

<p>La valeur retournée par <code>reduce()</code> sera alors celle du dernier appel de la callback (ici <code>10</code>).</p>

<p>Il est aussi possible d'utiliser une {{jsxref("Fonctions/Fonctions_fléchées","fonction fléchée","",1)}} au lieu d'une fonction classique. Le code suivant, par exemple, produit le même résultat que l'exemple précédent :</p>

<pre class="brush: js">[0, 1, 2, 3, 4].reduce(
  (accumulateur, valeurCourante) =&gt; accumulateur + valeurCourante;
);</pre>

<p>Si on fournit une valeur initiale comme second argument à l'appel de <code>reduce()</code>, le résultat sera alors le suivant :</p>

<pre class="brush:js">[0, 1, 2, 3, 4].reduce(function(accumulateur, valeurCourante, index, array){
  return accumulateur + valeurCourante;
}, 10);
</pre>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col"></th>
   <th scope="col"><code>accumulateur</code></th>
   <th scope="col"><code>valeurCourante</code></th>
   <th scope="col"><code>index</code></th>
   <th scope="col"><code>array</code></th>
   <th scope="col">valeur retournée</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">premier appel</th>
   <td><code>10</code></td>
   <td><code>0</code></td>
   <td><code>0</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>10</code></td>
  </tr>
  <tr>
   <th scope="row">deuxième appel</th>
   <td><code>10</code></td>
   <td><code>1</code></td>
   <td><code>1</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>11</code></td>
  </tr>
  <tr>
   <th scope="row">troisième appel</th>
   <td><code>11</code></td>
   <td><code>2</code></td>
   <td><code>2</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>13</code></td>
  </tr>
  <tr>
   <th scope="row">quatrième appel</th>
   <td><code>13</code></td>
   <td><code>3</code></td>
   <td><code>3</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>16</code></td>
  </tr>
  <tr>
   <th scope="row">cinquième appel</th>
   <td><code>16</code></td>
   <td><code>4</code></td>
   <td><code>4</code></td>
   <td><code>[0,1,2,3,4]</code></td>
   <td><code>20</code></td>
  </tr>
 </tbody>
</table>

<p>Ici, la valeur renvoyée par <code>reduce()</code> serait <code>20</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Additionner_toutes_les_valeurs_dun_tableau">Additionner toutes les valeurs d'un tableau</h3>

<pre class="brush:js">var total = [0, 1, 2, 3].reduce((a, b)=&gt; a + b,0);
// total == 6
</pre>

<h3 id="Additionner_les_valeurs_dune_propriétés_pour_un_tableau_dobjets">Additionner les valeurs d'une propriétés pour un tableau d'objets</h3>

<p>Pour additionner les valeurs d'une propriété donnée des objets d'un tableau, il sera nécessaire de fournir une valeur initiale afin que tous les éléments soient parcourus :</p>

<pre class="brush: js">var valeurInitiale = 0;
var somme = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulateur, valeurCourante) {
    return accumulateur + valeurCourante.x;
}, valeurInitiale);

console.log(somme); // affiche 6 dans la console
</pre>

<p>On peut également écrire une version plus concise avec les fonctions fléchées :</p>

<pre class="brush: js">var valeurInitiale = 0;
var somme = [{x: 1}, {x:2}, {x:3}].reduce(
    (accumulateur, valeurCourante) =&gt; accumulateur + valeurCourante.x
    , valeurInitiale
);

console.log(somme); // affiche 6 dans la console</pre>

<h3 id="Aplatir_une_liste_de_listes">Aplatir une liste de listes</h3>

<pre class="brush:js">var applati = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});
// applati vaut [0, 1, 2, 3, 4, 5]
</pre>

<h3 id="Utiliser_le_paramètre_valeurInitiale">Utiliser le paramètre <code>valeurInitiale</code></h3>

<pre class="brush: js">var amis = [
  { "nom": "Quentin", "livres": ["City Hall", "Harry Potter"]},
  { "nom": "Alice", "livres": ["L'Avare", "Les Fleurs du Mal"]}
]

var tousLivres = amis.reduce(function(prev, curr) {
  return [...prev, ...curr.livres];
}, ["Perceval"]);

// tousLivres = ["Perceval", "City Hall", "Harry Potter",
//               "L'Avare", "Les Fleurs du Mal"]</pre>

<h3 id="Exécuter_une_suite_de_promesses_stockées_dans_un_tableau">Exécuter une suite de promesses stockées dans un tableau</h3>

<pre class="brush: js">/**
 * Exécuter un enchaînement de promesses à partir d'un tableau
 *
 * @param {array} arr - un tableau de promesses
 * @return {Object} un objet Promise
 */
function runPromiseInSequense(arr) {
  return arr.reduce((promiseChain, currentPromise) =&gt; {
    return promiseChain.then((chainedResult) =&gt; {
      return currentPromise(chainedResult)
        .then((res) =&gt; res)
    })
  }, Promise.resolve());
}

// promise function 1
function p1() {
  return new Promise((resolve, reject) =&gt; {
    resolve(5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) =&gt; {
    resolve(a * 2);
  });
}

// promise function 3
function p3(a) {
  return new Promise((resolve, reject) =&gt; {
    resolve(a * 3);
  });
}

const promiseArr = [p1, p2, p3];
runPromiseInSequense(promiseArr)
  .then((res) =&gt; {
    console.log(res);   // 30
  });
</pre>

<h3 id="Regrouper_des_objets_selon_une_propriété">Regrouper des objets selon une propriété</h3>

<pre class="brush: js">var personnes = [
  { nom: "Alice", age: 21 },
  { nom: "Bob", age: 20 },
  { nom: "Charlie", age: 20 }
];

function groupBy(tableauObjets, propriete){
  return tableauObjets.reduce(function (acc, obj) {
    var cle = obj[propriete];
    if(!acc[cle]){
      acc[cle] = [];
    }
    acc[cle].push(obj);
    return acc;
  }, {});
}

var personnesParAge = groupBy(personnes, "age");
// personnesParAge aura la valeur :
// {
//    20: [
//       { nom: "Bob", age: 20 },
//       { nom: "Charlie", age: 20 }
//    ],
//    21: [{ nom: "Alice", age: 21 }]
// }
</pre>

<h3 id="Composition_de_fonctions">Composition de fonctions</h3>

<pre class="brush: js">// Les briques de base que nous allons composer
const double = x =&gt; x + x;
const triple = x =&gt; 3 * x;
const quadruple = x =&gt; 4 * x;

// Une fonction qui permet d'appliquer une composition
const pipe = (...functions) =&gt; input =&gt; functions.reduce(
    (acc, fn) =&gt; fn(acc),
    input
);

// On crée des fonctions pour multiplier par un facteur donné
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Utilisation
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
</pre>

<h3 id="Retirer_les_doublons_dun_tableau">Retirer les doublons d'un tableau</h3>

<h4 id="Avec_ECMAScript_2015_ES6">Avec ECMAScript 2015 (ES6)</h4>

<pre class="brush: js">let tableauAvecDoublons = [1, 2, 3, 1, 4, 5, 4, 6];
let tableauSansDoublon = Array.from(new Set(tableauAvecDoublons));
console.table(tableauSansDoublon); // [1, 2, 3, 4, 5, 6]</pre>

<h4 id="Avec_reduce">Avec <code>reduce()</code></h4>

<pre class="brush: js">var tableauAvecDoublons = [1, 2, 3, 1, 4, 5, 4, 6];
var tableauSansDoublon = tableauAvecDoublon.reduce(function (acc, valCourante) {
  if(acc.indexOf(valCourante) === -1) {
    acc.push(valCourante);
  }
  return acc
}, []);

console.log(tableauSansDoublon); // [1, 2, 3, 4, 5, 6]
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
   <td>{{SpecName('ES5.1', '#sec-15.4.4.21', 'Array.prototype.reduce()')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale.<br>
    Implémenté dans JavaScript 1.8</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.reduce', 'Array.prototype.reduce()')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.reduce', 'Array.prototype.reduce()')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.reduce")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.reduceRight()")}}</li>
</ul>
