---
title: Division (/)
slug: Web/JavaScript/Reference/Operators/Division
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.division
translation-of: Web/JavaScript/Reference/Operators/Division
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur de division (<code>/</code>) fournit le quotient de l'opérande gauche (le numérateur) divisé par l'opérande droite (le dénominateur).</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-division.html")}}</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
<strong>Opérateur :</strong> <var>x</var> / <var>y</var>
</pre>

<h2 id="examples">Exemples</h2>

<h3 id="basic_division">Divisions simples</h3>

<pre class="brush: js">
1 / 2             // 0.5
Math.floor(3 / 2) // 1
1.0 / 2.0         // 0.5
</pre>

<h3 id="division_by_zero">Division par zéro</h3>

<pre class="brush: js">
2.0 / 0     // Infinity
2.0 / 0.0   // Infinity, because 0.0 === 0
2.0 / -0.0  // -Infinity
</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Addition">Opérateur d'addition</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Subtraction">Opérateur de soustraction</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Division">Opérateur de division</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Multiplication">Opérateur de multiplication</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Remainder">Opérateur de reste</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation">Opérateur d'exponentiation</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Increment">Opérateur d'incrémentation</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Decrement">Opérateur de décrémentation</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation">Opérateur de négation unaire</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus">Opérateur plus unaire</a></li>
</ul>
