---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
tags:
  - Erros
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Unexpected_type
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Mensagem">Mensagem</h2>

<pre class="syntaxbox">Tipo do erro: "x" é (não é) "y"

Exemplos:
Tipo do erro: "x" é indefinido
Tipo do erro: "x" é nulo
Tipo do erro: "x" indefinido" não é um objeto
Tipo do erro: "x" não é um objeto ou é nulo
Tipo do erro: "x" não é um símbolo
</pre>

<h2 id="Tipo_de_erro">Tipo de erro</h2>

<p>{{jsxref("TypeError")}}.</p>

<h2 id="O_que_deu_errado">O que deu errado?</h2>

<p>Houve um tipo inesperado. Isso ocorre muitas vezes com valores {{jsxref("undefined")}} ou {{jsxref("null")}}.</p>

<p>Além disso, certos métodos, tais como {{jsxref("Object.create()")}} ou {{jsxref("Symbol.keyFor()")}}, requerem um tipo específico, que deve ser fornecido.</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Casos_inválidos">Casos inválidos</h3>

<pre class="brush: js example-bad">// casos undefined e null nos quais o método substring não vai funcionar
var foo = undefined;
foo.substring(1); // TypeError: foo is undefined

var foo = null;
foo.substring(1); // TypeError: foo is null


// Certos métodos podem precisar de um tipo específico
var foo = {}
Symbol.keyFor(foo); // TypeError: foo is not a symbol

var foo = 'bar'
Object.create(foo); // TypeError: "foo" is not an object or null
</pre>

<h3 id="Consertando_o_problema">Consertando o problema</h3>

<p>Para consertar o pointeiro nulo para valores <code>undefined</code> ou <code>null</code>,  você pode utilizar o operador <a href="/en-US/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a> , por exemplo.</p>

<pre class="brush: js">if (typeof foo !== 'undefined') {
  // Agora nós sabemos que foo está definido, então podemos prosseguir.
}</pre>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("undefined")}}</li>
 <li>{{jsxref("null")}}</li>
</ul>
