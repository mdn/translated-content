---
title: Paramètres du reste (Rest parameters)
slug: Web/JavaScript/Reference/Functions/rest_parameters
tags:
  - ECMAScript 2015
  - Functions
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Functions/rest_parameters
original_slug: Web/JavaScript/Reference/Fonctions/paramètres_du_reste
---
<div>{{jsSidebar("Functions")}}</div>

<p>Cette syntaxe permet de représenter un nombre indéfini d'arguments sous forme d'un tableau.</p>

<div>{{EmbedInteractiveExample("pages/js/functions-restparameters.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">function f(a, b, ...lesArguments) {
  // ...
}
</pre>

<h2 id="Description">Description</h2>

<p>Si le dernier paramètre nommé fourni à la fonction est préfixé de <code>...</code> (trois points), il devient un tableau dont les éléments entre <code>0</code> (inclus) et <code>lesArguments.length</code> (exclus) sont fournis comme autres arguments à la fonction.</p>

<pre class="brush: js">function maFonction(a, b, ...plusDArguments) {
  console.log("a", a);
  console.log("b", b);
  console.log("plusDArguments", plusDArguments);
}

maFonction("un", "deux", "trois", "quatre", "cinq");
// affichera ceci dans la console :
// a, "un"
// b, "deux"
// plusDArguments, ["trois", "quatre", "cinq"]</pre>

<h3 id="Les_différences_entre_les_paramètres_du_reste_et_l'objet_arguments">Les différences entre les paramètres du reste et l'objet <code>arguments</code></h3>

<p>Il y a trois principales différences entre les paramètres du reste et l'objet {{jsxref("Fonctions/arguments","arguments")}} :</p>

<ul>
 <li>les paramètres du reste sont uniquement ceux qui ne possèdent pas de noms à part entière (autrement dit ceux qui ne sont pas formellement définis dans l'expression de fonction), l'objet <code>arguments</code> contient chaque argument passé à la fonction</li>
 <li>l'objet <code>arguments</code> n'est pas, à strictement parler, un tableau. Le paramètre représentant les arguments restant est une instance d'{{jsxref("Array","Array")}} à laquelle on peut appliquer directement des méthodes comme {{jsxref("Array/sort","sort")}}, {{jsxref("Array/map","map")}}, {{jsxref("Array/forEach","forEach")}} ou {{jsxref("Array/pop","pop")}}</li>
 <li>l'objet <code>arguments</code> possède des fonctionnalités spécifiques (comme, par exemple, la propriété <code>callee</code>)</li>
</ul>

<h3 id="Convertir_arguments_en_un_tableau">Convertir <code>arguments</code> en un tableau</h3>

<p>Ces paramètres ont été introduits afin de réduire le code passe-partout souvent induit par les arguments.</p>

<pre class="brush: js">// Avant les paramètres du reste, on observait souvent ce style de code :
function f(a, b){
  var args = Array.prototype.slice.call(arguments, f.length);
  // ou encore
  var args = [].slice.call(arguments);
  // ou encore
  var args = Array.from(arguments);

  // et on pouvait alors écrire
  var premier = args.shift(); // OK
  // mais pas
  var premier = arguments.shift(); // erreur car arguments n'est pas un tableau
}

// ce qui est l'équivalent de
function f(...args) {
  var tabNormal = args;
  var premier = tabNormal.shift();
}
</pre>

<h3 id="La_décomposition_sur_les_paramètres_du_reste">La décomposition sur les paramètres du reste</h3>

<p>On peut également décomposer les paramètres du reste en variables distinctes :</p>

<pre class="brush: js">function f(...[a, b, c]) {
  return a + b + c;
}

f(1);          // NaN (b et c valent undefined)
f(1, 2, 3);    // 6
f(1, 2, 3, 4); // 6, le dernier paramètre n'est pas décomposé
</pre>

<p>Vous pouvez également accéder aux éléments des paramètres du reste :</p>

<pre class="brush: js">function fun1(...lesArguments) {
    console.log("valeur", lesArguments[0][0]);
}

fun1([5, 2], [5, 4]); // 5
fun1([8, 2]); // 8
fun1([9, 6, 7]); // 9</pre>

<h2 id="Exemples">Exemples</h2>

<p>S'il n'y a qu'un seul argument qui est décomposé par la syntaxe, la valeur sera toujours un tableau :</p>

<pre class="brush: js">function maFonction(a, b, ...autres);
  console.log(a);
  console.log(b);
  console.log(autres);
}

maFonction("un", "deux", "trois");
// affichera ceci dans la console
// "un"
// "deux"
// ["trois"]
</pre>

<p>De même, s'il n'y a pas suffisamment d'arguments, ce sera un tableau vide :</p>

<pre class="brush: js">function maFonction(a, b, ...autres);
  console.log(a);
  console.log(b);
  console.log(autres);
}

maFonction("un", "deux");
// affichera ceci dans la console
// "un"
// "deux"
// []</pre>

<p><code>lesArguments</code> est un tableau et dispose donc d'une propriété <code>length</code> permettant de compter ses éléments :</p>

<pre class="brush: js">function fun1(...lesArguments) {
  console.log(lesArguments.length);
}

fun1();  // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
</pre>

<p>Dans l'exemple qui suit, on utilise le paramètre Rest pour collecter les arguments après le premier pour les multiplier par le premier :</p>

<pre class="brush: js">function multiplier(facteur, ...lesArguments) {
  return lesArguments.map(function (element) {
    return facteur * element;
  });
}

var arr = multiplier(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
</pre>

<p>L'exemple qui suit illustre comment on peut utiliser des méthodes de <code>Array</code> sur le paramètre Rest mais pas sur l'objet <code>arguments</code> :</p>

<pre class="brush: js">function trierParamRest(...lesArguments) {
  var argumentsTriés = lesArguments.sort();
  return argumentsTriés;
}

console.log(trierParamRest(5,3,7,1)); // shows 1,3,5,7

function trierArguments() {
  var argumentsTriés = arguments.sort();
  return argumentsTriés; // cela ne sera jamais appelé
}

// renvoie une exception TypeError: arguments.sort n'est pas une function
console.log(trierArguments(5,3,7,1));
</pre>

<p>Pour utiliser les méthodes propres aux instances d'<code>Array</code> sur l'objet <code>arguments</code>, il est nécessaire de le convertir.</p>

<pre class="brush: js">function trierAguments() {
  var args = Array.from(arguments);
  var argumentsTriés = args.sort();
  return argumentsTriés;
}
console.log(trierArguments(5, 3, 7, 1)); // [1, 3, 5, 7]
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
   <td>{{SpecName('ES6', '#sec-function-definitions', 'Function Definitions')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-function-definitions', 'Function Definitions')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.functions.rest_parameters")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'objet {{jsxref("Fonctions/arguments","arguments")}}</li>
 <li>{{jsxref("Array","Array")}}</li>
 <li>{{jsxref("Fonctions","Les fonctions et leurs portées","",1)}}</li>
 <li>{{jsxref("Opérateurs/Syntaxe_décomposition","L'opérateur de décomposition","",1)}}</li>
 <li><a class="external" href="https://wiki.ecmascript.org/doku.php?id=harmony:rest_parameters">Proposition originale sur ecmascript.org</a> (en anglais)</li>
 <li><a class="external" href="https://javascriptweblog.wordpress.com/2011/01/18/javascripts-arguments-object-and-beyond/">JavaScript arguments object and beyond</a> (article en anglais)</li>
</ul>
