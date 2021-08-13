---
title: Valeurs par défaut des arguments
slug: Web/JavaScript/Reference/Functions/Default_parameters
tags:
  - ECMAScript 2015
  - Fonctions
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Functions/Default_parameters
original_slug: Web/JavaScript/Reference/Fonctions/Valeurs_par_défaut_des_arguments
---
<div>{{jsSidebar("Functions")}}</div>

<p>Cette syntaxe permet d'initialiser des paramètres lors de l'appel de la fonction si aucune valeur n'est passée ou si c'est la valeur {{jsxref("undefined")}} qui est passée.</p>



<div>{{EmbedInteractiveExample("pages/js/functions-default.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">function [<em>nom</em>]([<em>param1</em>[ = valeurParDéfaut1 ][, ..., <em>paramN</em>[ = valeurParDéfautN ]]]) {
   instructions
}
</pre>

<h2 id="Description">Description</h2>

<p>En JavaScript, par défaut, la valeur des paramètres d'une fonction sera <code>undefined</code>. Malgré tout, il peut être assez utile de pouvoir définir d'autres valeurs par défaut.</p>

<p>Auparavant, pour définir une valeur par défaut pour un paramètre, il fallait tester s'il valait <code>undefined</code> et lui affecter une valeur choisie le cas échéant. Dans l'exemple qui suit, le paramètre <code>b</code> n'a pas de valeur fournie lors de l'appel, aussi si on avait utilisé <code>undefined</code> dans la multiplication, la valeur retournée aurait été <code>NaN</code>. Aussi, dans la deuxième ligne du code, on prévoit ce cas :</p>

<pre class="brush: js">function multiplier(a, b) {
  var b = (typeof b !== 'undefined') ? b : 1;

  return a * b;
}

multiplier(5, 2); // 10
multiplier(5, 1); // 5
multiplier(5);    // 5
</pre>

<p>Grâce aux paramètres par défaut qui existent depuis ECMAScript 2015 (ES6), on peut se passer de cette vérification et alléger le code de la fonction :</p>

<pre class="brush: js">function multiplier(a, b = 1) {
  return a * b;
}

multiplier(5, 2); // 10
multiplier(5, 1); // 5
multiplier(5, undefined); // 5
multiplier(5); // 5</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Passer_undefined_en_paramètre">Passer <code>undefined</code> en paramètre</h3>

<p>Dans l'exemple qui suit, le deuxième appel à la fonction fait explicitement appel à <code>undefined</code>. La valeur par défaut sera utilisée, y compris dans ce cas (en revanche, ce ne serait pas vrai pour <code>null</code> ou les autres valeurs équivalentes à <code>false</code> dans un contexte booléen).</p>

<pre class="brush: js">function test(num = 1) {
  console.log(typeof num);
}

test();           // number (num vaut 1)
test(undefined);  // number (num vaut 1 également)
test("");         // string (num vaut "")
test(null);       // object (num vaut null)
</pre>

<h3 id="Évaluation_à_l'appel">Évaluation à l'appel</h3>

<p>L'argument par défaut est évalué à l'instant de l'appel. Ainsi, à la différence d'autres langages comme Python, un nouvel objet est créé à chaque appel de la fonction.</p>

<pre class="brush: js">function append(valeur, tableau = []) {
  tableau.push(valeur);
  return tableau;
}

append(1); //[1]
append(2); //[2], et non [1, 2]

</pre>

<p>Cela est également valable pour les fonctions et les variables</p>

<pre class="brush: js">function appelQqc(truc = qqc()) { return truc }

appelQqc(); //lève une ReferenceError

let qqc = () =&gt; "machin"

appelQqc(); // "machin"
</pre>

<h3 id="Les_paramètres_par_défaut_sont_disponibles_à_la_suite">Les paramètres par défaut sont disponibles à la suite</h3>

<p>Les paramètres déjà rencontrés dans la définition peuvent être utilisés comme paramètres par défaut dans la suite de la définition :</p>

<pre class="brush: js">function salutation(nom, salut, message = salut + ' ' + nom){
    return [nom, salut, message];
}

salutation('David', 'Coucou');
// ["David", "Coucou", "Coucou David"]

salutation('David', 'Coucou', 'Bon anniversaire !');
// ["David", "Coucou", "Bon anniversaire !"]</pre>

<p>On peut utiliser cette fonctionnalité afin de gérer beaucoup de cas aux limites :</p>

<pre class="brush: js">function go() {
  return ":P"
}

function avecDéfaut(a, b = 5, c = b, d = go(), e = this,
                      f = arguments, g = this.value) {
  return [a,b,c,d,e,f,g];
}
function sansDéfaut(a, b, c, d, e, f, g){
  switch(arguments.length){
    case 0:
      a
    case 1:
      b = 5
    case 2:
      c = b
    case 3:
      d = go();
    case 4:
      e = this
    case 5:
      f = arguments
    case 6:
      g = this.value;
    default:
  }
  return [a,b,c,d,e,f,g];
}

avecDéfaut.call({value:"=^_^="});
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]


sansDéfaut.call({value:"=^_^="});
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
</pre>

<h3 id="Les_fonctions_définies_dans_le_corps_d'une_fonction">Les fonctions définies dans le corps d'une fonction</h3>

<p>À partir de Gecko 33 {{geckoRelease(33)}}. Les fonctions déclarées dans le corps de la fonction ne peuvent pas servir comme valeurs par défaut, cela lèvera une exception {{jsxref("ReferenceError")}} (plus précisément une {{jsxref("TypeError")}} avec SpiderMonkey, voir le {{bug(1022967)}}). Les paramètres par défaut sont exécutés en premier, les déclarations de fonctions présentes dans le corps de la fonction sont évaluées ensuite.</p>

<pre class="brush: js">// Ne fonctionnera pas, entraîne une ReferenceError.
function f(a = go()) {
  function go(){return ":P"}
}
</pre>

<h3 id="Utilisation_de_paramètres_sans_valeur_par_défaut_après_les_paramètres_par_défaut">Utilisation de paramètres sans valeur par défaut après les paramètres par défaut</h3>

<p>Avant Gecko 26 ({{geckoRelease(26)}}, le code suivant aurait entraîné une exception {{jsxref("SyntaxError")}}. Cela a été corrigé avec le bug {{bug(777060)}}. Les paramètres sont toujours ordonnés de gauche à droite et les valeurs par défaut sont surchargées s'ils viennent avant les autres paramètres :</p>

<pre class="brush: js">function f(x=1, y) {
  return [x, y];
}

f();  // [1, undefined]
f(2); // [2, undefined]
</pre>

<h3 id="Paramètre_par_défaut_et_décomposition_des_paramètres">Paramètre par défaut et décomposition des paramètres</h3>

<p>Il est possible d'utiliser les valeurs par défaut avec <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Affecter_par_décomposition">la syntaxe de décomposition</a> :</p>

<pre class="brush: js">function f([x, y] = [1, 2], {z: z} = {z: 3}) {
  return x + y + z;
}

f(); // 6</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-function-definitions', 'Function Definitions')}}</td>
   <td>{{Spec2('ES2015')}}</td>
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

<p>{{Compat("javascript.functions.default_parameters")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://wiki.ecmascript.org/doku.php?id=harmony:parameter_default_values">La proposition originale sur ecmascript.org</a></li>
</ul>
