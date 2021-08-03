---
title: Décalage binaire à gauche (<<)
slug: Web/JavaScript/Reference/Operators/Left_shift
tags:
  - Bitwise operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.left_shift
translation-of: Web/JavaScript/Reference/Operators/Left_shift
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur de <strong>décalage binaire à gauche (<code>&lt;&lt;</code>)</strong> décale la séquence de bits représentée par le premier opérande d'autant de bits vers la gauche que le nombre indiqué par le second opérande. Les bits en excès à gauche sont écartés et des bits à zéro sont introduits à droite.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-left-shift.html")}}</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
<var>a</var> &lt;&lt; <var>b</var>
</pre>

<h2 id="description">Description</h2>

<p>Cet opérateur décale les bits du premier opérande vers la gauche, d'autant que le nombre indiqué par le second opérande. Les bits qui dépassent à gauche sont abandonnés et des zéros sont introduits à droite.</p>

<p>Ainsi, <code>9 &lt;&lt; 2</code> donnera la valeur 36 (en base 10) :</p>

<pre class="brush: js">
       9 (base 10): 00000000000000000000000000001001 (base 2)
                    --------------------------------
  9 &lt;&lt; 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
</pre>

<p>Le décalage binaire de tout nombre <code>x</code> de <code>y</code> bits vers la gauche donnera comme résultat <code>x * 2 ** y</code>. Par exemple, <code>9 &lt;&lt; 3</code> pourra être reformulé en <code>9 * (2 ** 3) = 9 * (8) = 72</code>.</p>

<h2 id="examples">Exemples</h2>

<h3 id="using_left_shift">Utiliser le décalage binaire à gauche</h3>

<pre class="brush: js">
9 &lt;&lt; 3; // 72

// 9 * (2 ** 3) = 9 * (8) = 72
</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise">Les opérateurs binaires dans le guide JavaScript</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment">L'opérateur de décalage binaire à gauche et d'affectation</a></li>
</ul>
