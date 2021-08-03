---
title: Opérateur de groupement
slug: Web/JavaScript/Reference/Operators/Grouping
tags:
  - JavaScript
  - Operator
  - Primary Expressions
translation_of: Web/JavaScript/Reference/Operators/Grouping
original_slug: Web/JavaScript/Reference/Opérateurs/Groupement
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur de groupement <code>( )</code> contrôle la précédence de l'évaluation dans les expressions.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-groupingoperator.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"> ( )</pre>

<h2 id="Description">Description</h2>

<p>L'opérateur de groupement consiste en une paire de parenthèses encadrant une expression et permettant de surcharger la <a href="/fr/docs/JavaScript/Reference/Operateurs/Précédence_des_opérateurs">précédence normale des opérateurs </a>afin que les expressions dont la précédence est plus basse soient évaluées avant.</p>

<h2 id="Exemples">Exemples</h2>

<p>Normalement, la multiplication et la division sont prises en compte avant l'addition et la soustraction. On peut changer ce comportement avec l'opérateur de groupement.</p>

<pre class="brush:js">var a = 1;
var b = 2;
var c = 3;

// précédence normale
a + b * c     // 7
// l'évaluation est effectuée de cette façon
a + (b * c)   // 7

// précédence surchargée avec le groupement
// on additionne avant de multiplier
(a + b) * c   // 9

// mathématiquement, cela est équivalent à
a * c + b * c // 9
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-grouping-operator', 'The Grouping Operator')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-grouping-operator', 'L\'opérateur de groupement')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-11.1.6', 'L\'opérateur de groupement')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES1', '#sec-11.1.4','L\'opérateur de groupement')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale, implémentée avec JavaScript 1.0.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.operators.grouping")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/JavaScript/Reference/Operateurs/Précédence_des_opérateurs">Précédence des opérators</a></li>
 <li>{{jsxref("Operators/delete", "delete")}}</li>
 <li>{{jsxref("Operators/typeof", "typeof")}}</li>
</ul>
