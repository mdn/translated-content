---
title: 'SyntaxError: "x" is not a legal ECMA-262 octal constant'
slug: Web/JavaScript/Reference/Errors/Bad_octal
translation_of: Web/JavaScript/Reference/Errors/Bad_octal
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Mensaje">Mensaje</h2>

<pre class="syntaxbox">Warning: SyntaxError: 08 is not a legal ECMA-262 octal constant.
Warning: SyntaxError: 09 is not a legal ECMA-262 octal constant.
</pre>

<h2 id="Tipo_de_Error">Tipo de Error</h2>

<p>{{jsxref("SyntaxError")}} warning in <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a> only.</p>

<h2 id="Que_salio_mal">Que salio mal ?</h2>

<p><span id="result_box" lang="es"><span>Los literales decimales pueden comenzar con un cero (0) seguido de otro dígito decimal, pero Si todos los dígitos después del 0 inicial son más pequeños que 8, el número se interpreta como un número octal.</span> <span>Pero este no es el caso con 08 y 09, JavaScript advierte sobre ello.</span></span></p>

<p><span id="result_box" lang="es"><span>Tenga en cuenta que las literales octales y las secuencias de escape octal están obsoletas y presentarán una advertencia de depreciación adicional.</span> <span>Con ECMAScript 6 y posteriores, la sintaxis utiliza un cero a la izquierda seguido de una letra latina en minúscula o mayúscula "O" (0o o 0O).</span> <span>Consulte la página sobre gramática léxica para obtener más información.</span></span></p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Numeros_octales_invalidos">Numeros octales invalidos</h3>

<pre class="brush: js example-bad">08;
09;
// SyntaxError: 08 is not a legal ECMA-262 octal constant
// SyntaxError: octal literals and octal escape sequences are deprecated</pre>

<h3 id="Números_octales_válidos"><span class="short_text" id="result_box" lang="es"><span>Números octales válidos</span></span></h3>

<p><span class="short_text" id="result_box" lang="es"><span>Utilice el cero inicialmente seguido de la letra "o";</span></span></p>

<pre class="brush: js example-good">0O755;
0o644;
</pre>

<h2 id="Ver_Tambien">Ver Tambien</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Octal">Gramatica lexica</a></li>
</ul>
