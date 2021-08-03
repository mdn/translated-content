---
title: Plus unaire (+)
slug: Web/JavaScript/Reference/Operators/Unary_plus
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.unary_plus
translation_of: Web/JavaScript/Reference/Operators/Unary_plus
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur de plus unaire (<code>+</code>) précède son opérande et évalue son opérande en essayant de le convertir en nombre si ce n'est pas déjà une valeur numérique.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-unary-plus.html", "taller")}}</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
<strong>Opérateur :</strong> +<var>x</var>
</pre>

<h2 id="description">Description</h2>

<p>Bien que la négation unaire (<code>-</code>) puisse également être utilisée pour convertir des valeurs non-numérique, le plus unaire est plus rapide et plus conventionnel, car il n'effectue pas d'autres opérations que la conversion. Il peut être utilisé pour convertir les représentations textuelles d'entiers ou de flottants ainsi que les valeurs <code>true</code>, <code>false</code>, et <code>null</code>. Les représentations entières au format décimal ou hexadécimal sont toutes les deux prises en charge. Les nombres négatifs sont pris en charge (hors représentation hexadécimale). L'utilisation de cet opérateur sur les valeurs de type <code>BigInt</code> déclenchera une exception <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a>. Si l'analyse de valeur ne permet pas de déduire une valeur numérique, le résultat sera <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a>.</p>

<h2 id="examples">Exemples</h2>

<h3 id="usage_with_numbers">Avec des nombres</h3>

<pre class="brush: js">const x = 1;
const y = -1;

console.log(+x);
// 1
console.log(+y);
// -1</pre>

<h3 id="usage_with_non-numbers">Avec des valeurs non-numériques</h3>

<pre class="brush: js">+true  // 1
+false // 0
+null  // 0
+function(val){ return val } // NaN
+1n    // throws TypeError: Cannot convert BigInt value to number
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
</ul>
