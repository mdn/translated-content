---
title: Décrémentation (--)
slug: Web/JavaScript/Reference/Operators/Decrement
tags:
  - Decrement
  - JavaScript
  - Language feature
  - Operator
browser-compat: javascript.operators.decrement
translation_of: Web/JavaScript/Reference/Operators/Decrement
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur de décrémentation (<code>--</code>) permet de décrémenter (c'est-à-dire de soustraire un) son opérande et renvoie une valeur qui est le résultat avant ou après la modification.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-decrement.html")}}</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
<strong>Opérateur :</strong> <var>x</var>-- ou --<var>x</var>
</pre>

<h2 id="description">Description</h2>

<p>Utilisé comme suffixe (l'opérateur étant placé après l'opérande), comme dans <code><var>x</var>--</code>, l'opérateur décrémentera la valeur et renverra la valeur avant l'incrément.</p>

<p>Utilisé comme préfixe (l'opérateur étant placé avant l'opérande), comme dans <code>--<var>x</var></code>, l'opérateur décrémentera la valeur et renverra la valeur après l'incrément.</p>

<h2 id="examples">Exemples</h2>

<h3 id="postfix_decrement">Décrément en suffixe</h3>

<pre class="brush: js">let x = 3;
let y = x--;

// y = 3
// x = 2
</pre>

<h3 id="prefix_decrement">Décrément en préfixe</h3>

<pre class="brush: js">let a = 2;
let b = --a;

// a = 1
// b = 1
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
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation">Opérateur de négation unaire</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus">Opérateur de plus unaire</a></li>
</ul>
