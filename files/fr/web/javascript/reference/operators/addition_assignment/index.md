---
title: Affectation après addition (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
tags:
- Assignment operator
- JavaScript
- Language feature
- Operator
- Reference
translation-of: Web/JavaScript/Reference/Operators/Addition_assignment
browser-compat: javascript.operators.addition_assignment
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur d'addition et d'affectation (<code>+=</code>) calcule la somme ou la concaténation de ses deux opérandes puis affecte le résultat à la variable représentée par l'opérande gauche. C'est le type des opérandes qui détermine s'il y a somme ou concaténation.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-addition-assignment.html")}}</div>

<h2 id="syntax">Syntax</h2>

<pre class="brush: js">
<strong>Opérateur :</strong> x += y
<strong>Signification :</strong>  x  = x + y
</pre>

<h2 id="examples">Exemples</h2>

<h3 id="using_addition_assignment">Utiliser l'opérateur d'addition et d'affectation</h3>

<pre class="brush: js">
let toto = "toto";
let truc = 5;
let machin = true;

// nombre + nombre -&gt; addition
truc += 2; // 7

// booléen + nombre -&gt; addition
machin += 1; // 2

// booléen + booléen -&gt; addition
machin += false; // 1

// nombre + chaîne de caractères -&gt; concaténation
truc += 'toto'; // "5toto"

// chaîne de caractères + booléen -&gt; concaténation
toto += false // "totofalse"

// chaîne de caractères + chaîne de caractères -&gt; concaténation
toto += 'truc' // "tototruc"</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment">Les opérateurs d'affectation dans le guide JavaScript</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Addition">L'opérateur d'addition/concaténation</a></li>
</ul>
