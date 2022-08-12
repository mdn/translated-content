---
title: 'RangeError: invalid array length'
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
tags:
  - Errors
  - Erros
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Invalid_array_length
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Mensagem">Mensagem</h2>

<pre class="syntaxbox">RangeError: invalid array length (Firefox)
RangeError: Invalid array length (Chrome)
RangeError: Invalid array buffer length (Chrome)
</pre>

<h2 id="Tipo_de_erro">Tipo de erro</h2>

<p>{{jsxref("RangeError")}}</p>

<h2 id="O_que_houve_de_errado">O que houve de errado?</h2>

<p>Um comprimento inválido de array pode aparecer nas seguintes situações:</p>

<ul>
 <li>Quando criamos um {{jsxref("Array")}} ou um {{jsxref("ArrayBuffer")}} que tem um comprimento que ou é negativo ou é maior ou igual a 2<sup>32</sup>, ou</li>
 <li>quando configuramos a propriedade {{jsxref("Array.length")}} a um valor que é negativo, ou maior ou igual a 2<sup>32</sup>.</li>
</ul>

<p>Porque <code>Array</code> e <code>ArrayBuffer</code> tem um comprimento limitado? A propriedade <code>length</code> de um <code>Array</code> ou um <code>ArrayBuffer</code> é representado por um inteiro 32-bit unsigned, que pode apenas armazenar valores que estão no intervalo de 0 a 2<sup>32</sup>-1.</p>

<p>Se você está criando um <code>Array</code>, utilizando o construtor, você provavelmente quer usar a notação literal, onde o primeiro argumento é interpretado como o comprimento do <code>Array</code>.</p>

<p>Ao contrário, você poderia querer travar o comprimento antes de ajustar a propriedade do comprimento, ou utilizá-lo com um argumento do construtor.</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Casos_inválidos">Casos inválidos</h3>

<pre class="brush: js example-bad">new Array(Math.pow(2, 40))
new Array(-1)
new ArrayBuffer(Math.pow(2, 32))
new ArrayBuffer(-1)

let a = [];
a.length = a.length - 1;         // define -1 à propriedade length

let b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1;         // define 2^32 à propriedade length
</pre>

<h3 id="Casos_válidos">Casos válidos</h3>

<pre class="brush: js example-good">[ Math.pow(2, 40) ]                     // [ 1099511627776 ]
[ -1 ]                                  // [ -1 ]
new ArrayBuffer(Math.pow(2, 32) - 1)
new ArrayBuffer(0)

let a = [];
a.length = Math.max(0, a.length - 1);

let b = new Array(Math.pow(2, 32) - 1);
b.length = Math.min(0xffffffff, b.length + 1);

// 0xffffffff é a notação hexadecimal de 2^32 - 1
// que também pode ser escrito como (-1 &gt;&gt;&gt; 0)
</pre>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("Array")}}</li>
 <li>{{jsxref("Array.length")}}</li>
 <li>{{jsxref("ArrayBuffer")}}</li>
</ul>
