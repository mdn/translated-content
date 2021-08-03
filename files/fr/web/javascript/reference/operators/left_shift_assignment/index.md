---
title: Affectation après décalage à gauche (<<=)
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
translation-of: Web/JavaScript/Reference/Operators/Left_shift_assignment
browser-compat: javascript.operators.left_shift_assignment
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur de décalage à gauche et d'affectation (<code>&lt;&lt;=</code>) décale la séquence de bits représentée par l'opérande gauche d'autant de bits qu'indiqué par l'opérande droit puis affecte le résultat obtenu à la variable représentée par l'opérande gauche.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-left-shift-assignment.html")}}</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
<strong>Opérateur :</strong> x &lt;&lt;= y
<strong>Signification :</strong>  x   = x &lt;&lt; y
</pre>

<h2 id="examples">Exemples</h2>

<h3 id="using_left_shift_assignment">Utiliser l'opérateur de décalage à gauche et d'affectation</h3>

<pre class="brush: js">
let a = 5;
// 00000000000000000000000000000101

a &lt;&lt;= 2; // 20
// 00000000000000000000000000010100
</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment">Les opérateurs d'affectation dans le guide JavaScript</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Left_shift">L'opérateur de décalage à gauche binaire</a></li>
</ul>
