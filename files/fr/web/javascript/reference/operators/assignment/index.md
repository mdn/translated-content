---
title: Assignement (=)
slug: Web/JavaScript/Reference/Operators/Assignment
tags:
  - Fonctionnalités du language
  - JavaScript
  - Opérateur
  - Opérateur d'assignement
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Assignment
original_slug: Web/JavaScript/Reference/Opérateurs/Assignement
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur d'assignement simple (<code>=</code>) est utilisé pour définir la valeur d'une variable. Il est possible d'ajouter une valeur à plusieurs variables en chaînant les variables.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-assignment.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox notranslate"><strong>Opérateur :</strong> x = y
</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Assignement_simple_et_variables_en_chaînes">Assignement simple et variables en chaînes</h3>

<pre class="brush: js notranslate">// On considère les variables suivantes :
var x = 5;
var y = 10;
var z = 25;

x = y;
// x est égale à 10

x = y = z;
// x, y et z sont égales à 25</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-assignment-operators', 'Assignment operators')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("javascript.operators.assignment")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Opérateurs">Assignment operators in the JS guide</a></li>
</ul>
