---
title: Affectation après division (/=)
slug: Web/JavaScript/Reference/Operators/Division_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.division_assignment
translation-of: Web/JavaScript/Reference/Operators/Division_assignment
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur de division et d'affectation (<code>/=</code>) divise la variable fournie par l'opérande gauche par la valeur indiquée par l'opérande droit puis affecte le résultat à la variable représentée par l'opérande gauche.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-division-assignment.html")}}</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
<strong>Opérateur :</strong> x /= y
<strong>Signification:</strong>  x  = x / y
</pre>

<h2 id="examples">Exemples</h2>

<h3 id="using_division_assignment">Utiliser l'opérateur de division et d'affectation</h3>

<pre class="brush: js">
let truc = 5;
truc /= 2;      // 2.5
truc /= 2;      // 1.25
truc /= 0;      // Infinity
truc /= 'toto'; // NaN
</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment">Les opérateurs d'affectation dans le guide JavaScript</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Division">L'opérateur de division</a></li>
</ul>
