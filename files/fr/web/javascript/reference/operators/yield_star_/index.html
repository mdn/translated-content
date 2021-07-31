---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
tags:
  - ECMAScript 2015
  - Generators
  - Iterable
  - Iterator
  - JavaScript
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/yield*
original_slug: Web/JavaScript/Reference/Opérateurs/yield*
---
<div>{{jsSidebar("Operators")}}</div>

<p>Une <strong>expression <code>yield*</code></strong> est utilisée afin de déléguer le mécanisme d'itération/génération à un autre {{jsxref("Instructions/function*", "générateur")}} ou à un autre objet itérable.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-yieldasterisk.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"> yield* [[expression]];</pre>

<dl>
 <dt><code>expression</code></dt>
 <dd>L'expression qui renvoie un objet itérable.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>L'expression <code>yield*</code> itère sur l'opérande et génère chaque valeur générée par l'opérande.</p>

<p>La valeur de l'expression <code>yield*</code> est la valeur renvoyée par l'itérateur lorsque celui est terminé (la propriété <code>done</code> vaut <code>true</code>).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Délégation_de_la_génération">Délégation de la génération</h3>

<p>Dans le code suivant, les valeurs générées par <code>g1()</code> sont renvoyées grâce aux appels à la fonction <code>next()</code>, comme pour celles renvoyées par <code>g2()</code>.</p>

<pre class="brush: js">function* g1() {
  yield 2;
  yield 3;
  yield 4;
}
function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

var iterator = g2();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
</pre>

<h3 id="Les_autres_objets_itérables">Les autres objets itérables</h3>

<p><code>yield*</code> peut également être utilisé avec d'autres sortes d'itérables (chaînes, tableaux ou arguments) :</p>

<pre class="brush: js">function* g3() {
  yield* [1, 2];
  yield* "34";
  yield* Array.from(arguments);
}

var iterator = g3(5, 6);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: "3", done: false }
console.log(iterator.next()); // { value: "4", done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: 6, done: false }
console.log(iterator.next()); // { value: undefined, done: true }</pre>

<h3 id="La_valeur_de_l'expression_yield*">La valeur de l'expression <code>yield*</code></h3>

<p><code>yield*</code> est une expression et non une instruction, elle est donc évaluée et fournit une valeur :</p>

<pre class="brush: js">function* g4() {
  yield* [1, 2, 3];
  return "toto";
}

var résultat;

function* g5() {
  résultat = yield* g4();
}

var iterator = g5();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true },
                              // g4() renvoie{ value: "toto", done: true } at this point

console.log(résultat);          // "toto"</pre>

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
   <td>{{SpecName('ES2015', '#sec-generator-function-definitions-runtime-semantics-evaluation', 'Yield')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-generator-function-definitions-runtime-semantics-evaluation', 'Yield')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.operators.yield_star")}}</p>

<h2 id="Notes_relatives_à_Firefox">Notes relatives à Firefox</h2>

<ul>
 <li>À partir de Gecko 33 {{geckoRelease(33)}}, l'analyse de l'expression <code>yield</code> a été mise à jour pour être conforme aux spécifications ES2015 ({{bug(981599)}}) :

  <ul>
   <li>La restriction concernant les terminateurs de lignes est désormais implémentée. Il n'est pas autorisé d'avoir un terminateur de ligne entre "yield" et "*". Le code suivant lèvera une exception {{jsxref("SyntaxError")}}:
    <pre class="brush: js">function* toto() {
  yield
  *[];
}</pre>
   </li>
  </ul>
 </li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Le_protocole_iterator">Le protocole itérateur</a></li>
 <li>L'instruction {{jsxref("Instruction/function*", "function*")}}</li>
 <li>L'expression {{jsxref("Opérateurs/function*", "function*")}}</li>
 <li>{{jsxref("Opérateurs/yield", "yield")}}</li>
</ul>
