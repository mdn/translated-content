---
title: Affectation après OU binaire (|=)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.bitwise_or_assignment
translation-of: Web/JavaScript/Reference/Operators/Bitwise_OR_assignment
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur d'affectation après OU binaire (<code>|=</code>) utilise la représentation binaire des deux opérandes et effectue un OU logique entre chaque puis affecte le résultat à la variable représentée par l'opérande gauche.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-bitwise-or-assignment.html")}}</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
<strong>Opérateur :</strong> x |= y
<strong>Signification :</strong>  x = x | y
</pre>

<h2 id="examples">Exemples</h2>

<h3 id="using_bitwise_or_assignment">Utiliser l'affectation après OU binaire</h3>

<pre class="brush: js">
let a = 5;
a |= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111
</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment">Les opérateurs d'affectation dans le guide JavaScript</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_OR">L'opérateur OU binaire</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment">L'opérateur d'affectation après OU logique (<code>||=</code>)</a></li>
</ul>
