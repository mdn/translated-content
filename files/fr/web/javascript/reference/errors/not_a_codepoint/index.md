---
title: 'RangeError: argument is not a valid code point'
slug: Web/JavaScript/Reference/Errors/Not_a_codepoint
tags:
  - Erreurs
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Not_a_codepoint
original_slug: Web/JavaScript/Reference/Erreurs/Not_a_codepoint
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">RangeError: Invalid code point {0} (Edge)
RangeError: {0} is not a valid code point (Firefox)
RangeError: Invalid code point {0} (Chrome)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("RangeError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>La méthode {{jsxref("String.fromCodePoint()")}} a été utilisée mais elle n'accepte que les points de code valides (<em>code points</em>) et la valeur fournie en argument n'est pas un point de code valide (ex. <code>NaN</code>, <code>-1</code>).</p>

<p>Un <a href="https://fr.wikipedia.org/wiki/Point_de_code">point de code</a> est une valeur de code Unicode et s'inscrit dans un intervalle allant de <code>0</code> à <code>0x10FFFF</code>.</p>

<p>Les valeurs {{jsxref("NaN")}}, les entiers négatifs (<code>-1</code>), les flottants (<code>3.14</code>) ou les valeur supérieures à <code>0x10FFFF</code> (<code>1114111</code>) ne peuvent pas être utilisées avec cette méthode.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Exemples_invalides">Exemples invalides</h3>

<pre class="brush: js example-bad">String.fromCodePoint('_');      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError</pre>

<h3 id="Exemples_valides">Exemples valides</h3>

<pre class="brush: js example-good">String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String.fromCodePoint()")}}</li>
</ul>
