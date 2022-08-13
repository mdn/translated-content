---
title: 'RangeError: argument is not a valid code point'
slug: Web/JavaScript/Reference/Errors/Not_a_codepoint
translation_of: Web/JavaScript/Reference/Errors/Not_a_codepoint
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">RangeError: {0} is not a valid code point (Firefox)
RangeError: Invalid code point {0} (Chrome)
</pre>

<h2 id="Tipo_de_error">Tipo de error</h2>

<p>{{jsxref("RangeError")}}</p>

<h2 id="¿Qué_estuvo_mal">¿Qué estuvo mal?</h2>

<p>El metodo {{jsxref("String.fromCodePoint()")}} acepta solamente <em><strong>code point</strong></em> validos.</p>

<p>Un <a href="https://en.wikipedia.org/wiki/Code_point">code point</a> es un valor en el conjunto de caracteres <a href="/es/docs/">Unicode</a>; esto es, un rango de enteros que va desde <code>0</code> a <code>0x10FFFF</code>.</p>

<p>Usando valores {{jsxref("NaN")}}, enteros negativos (<code>-1</code>), no enteros (<code>3.14</code>), o valores mayores a <code>0x10FFFF</code> (<code>1114111</code>) no trabajarian con este metodo.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Casos_invalidos">Casos invalidos</h3>

<pre class="brush: js example-bad">String.fromCodePoint('_');      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError</pre>

<h3 id="Casos_validos">Casos validos</h3>

<pre class="brush: js example-good">String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"
</pre>

<h2 id="Observe_tambien">Observe tambien</h2>

<ul>
 <li>{{jsxref("String.fromCodePoint()")}}</li>
</ul>
