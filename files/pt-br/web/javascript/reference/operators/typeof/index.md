---
title: typeof
slug: Web/JavaScript/Reference/Operators/typeof
tags:
  - JavaScript
  - Operador
  - unário
translation_of: Web/JavaScript/Reference/Operators/typeof
---
<div>{{jsSidebar("Operators")}}</div>

<h2 id="Sumário">Sumário</h2>

<p>O operador <code>typeof</code> retorna uma string indicando o tipo de um operando.</p>

<h2 id="Sintaxe">Sintaxe</h2>

<p>O operador <code>typeof</code> pode ser utilizado das seguintes maneiras:</p>

<pre class="syntaxbox"><code>typeof <code><em>operando</em></code></code></pre>

<h3 id="Parâmetros">Parâmetros</h3>

<p><code><em>operand</em></code>o é a string, variável, keyword, ou objeto para que o tipo do mesmo seja retornado. O uso de parênteses é opcional.</p>

<h2 id="Descrição">Descrição</h2>

<p>Esta tabela resume os possíveis valores que são retornados pelo <code>typeof</code>:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Tipo</th>
   <th scope="col">Resultado</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Undefined</td>
   <td><code>"undefined"</code></td>
  </tr>
  <tr>
   <td>Null</td>
   <td><code>"object"</code></td>
  </tr>
  <tr>
   <td>Boolean</td>
   <td><code>"boolean"</code></td>
  </tr>
  <tr>
   <td>Number</td>
   <td><code>"number"</code></td>
  </tr>
  <tr>
   <td>String</td>
   <td><code>"string"</code></td>
  </tr>
  <tr>
   <td>Host object (provided by the JS environment)</td>
   <td><em>Implementation-dependent</em></td>
  </tr>
  <tr>
   <td>Function object (implements [[Call]] in ECMA-262 terms)</td>
   <td><code>"function"</code></td>
  </tr>
  <tr>
   <td>E4X XML object</td>
   <td>"xml"</td>
  </tr>
  <tr>
   <td>E4X XMLList object</td>
   <td>"xml"</td>
  </tr>
  <tr>
   <td>Qualquer outro objeto</td>
   <td><code>"object"</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Casos_comuns">Casos comuns</h3>

<pre class="brush:js">// Números - Numéricos
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // Apesar de ser "Não-Numérico"
typeof Number(1) === 'number'; // mas nunca utilize desta forma!

// Strings - Seqüências de caracteres
typeof "" === 'string';
typeof "bla" === 'string';
typeof (typeof 1) === 'string'; // typeof sempre retorna uma string
typeof String("abc") === 'string'; // mas nunca utilize desta forma!

// Booleans - Lógicos booleanos
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // mas nunca utilize desta forma!

// Undefined - Indefinidos
typeof undefined === 'undefined';
typeof blabla === 'undefined'; // uma variável indefinida

// Objetos
typeof {a:1} === 'object';
typeof [1, 2, 4] === 'object'; // use Array.isArray ou Object.prototype.toString.call para diferenciar os objetos das arrays
typeof new Date() === 'object';

typeof new Boolean(true) === 'object'; // isto é confuso, portanto não use desta forma!
typeof new Number(1) === 'object'; // isto é confuso, portanto não use desta forma!
typeof new String("abc") === 'object';  // isso também é confuso, assim evite usar esta construção!

// Funções
typeof function(){} === 'function';
typeof Math.sin === 'function';
</pre>

<h3 id="null"><code>null</code></h3>

<pre class="brush:js">// Desde os primóridos do JavaScript
typeof null === 'object';
</pre>

<p>Na primeira implementação do JavaScript, valores em JavaScript foram representados com uma tag (etiqueta) de tipo e um valor. A tag de tipo para objetos foi 0. <code>null</code> foi representada com o ponteiro NULL (0x00 na maioria das plataformas). Consequentemente, null teve 0 como sua tag de tipo, portanto o <code>typeof</code> retorna esse valor. (necessário referência)</p>

<p>Está previsto <a class="external" href="http://wiki.ecmascript.org/doku.php?id=harmony:typeof_null">para ser corrigido na próxima versão do ECMAScript</a> (que estará disponível através de um opt-in). Isso resultará em um <code>typeof null === 'null'</code>.</p>

<h3 id="Expressões_regulares">Expressões regulares</h3>

<p>Expressões regulares que podem ser chamadas foram uma adição não-padrão em alguns browsers (necessidade de referência para dizer qual).</p>

<pre class="brush:js">typeof /s/ === 'function'; // Chrome 1-12 ... // Não-conforme no ECMAScript 5.1
typeof /s/ === 'object'; // Firefox 5+ ...    // Conforme no ECMAScript 5.1
</pre>

<h3 id="Outras_peculiaridades">Outras peculiaridades</h3>

<h4 id="alert_versões_antigas_do_Internet_Explorer"><code>alert</code> versões antigas do Internet Explorer</h4>

<p>No IE 6, 7 e 8, <code>typeof alert === 'object'</code></p>

<h2 id="Especificação">Especificação</h2>

<p><a class="external" href="http://ecma-international.org/ecma-262/5.1/#sec-11.4.3">ECMA-262 section 11.4.3</a></p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/JavaScript/Reference/Operators/instanceof" title="/en-US/docs/JavaScript/Reference/Operators/instanceof">instanceof</a></li>
</ul>
