---
title: 'ReferenceError: reference to undefined property "x"'
slug: Web/JavaScript/Reference/Errors/Undefined_prop
tags:
  - Erros
  - JavaScript
  - Modo Restrito
  - ReferenceError
translation_of: Web/JavaScript/Reference/Errors/Undefined_prop
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Mensagem">Mensagem</h2>

<pre class="syntaxbox">ReferenceError: reference to undefined property "x" (Firefox)
</pre>

<h2 id="Tipo_de_Erro">Tipo de Erro</h2>

<p>(Apenas no Firefox) O aviso {{jsxref("ReferenceError")}} é reportado somente se a preferência <code>javascript.options.strict</code> está definida como <code>true</code>.</p>

<h2 id="O_que_está_errado">O que está errado?</h2>

<p>O script tentou acessar uma propriedade de objeto que não existe. Existem duas maneiras de acessar propriedades; veja a página de referência {{jsxref ("Operators / Property_Accessors", "property accessors", 0, 1)}} para saber mais sobre eles.</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Errado">Errado</h3>

<p>Neste caso, a propriedade <code>bar</code> é uma propriedade não definida, assim, ocorrerá um <code>ReferenceError</code>.</p>

<pre class="brush: js example-bad">var foo = {};
foo.bar; // ReferenceError: reference to undefined property "bar"
</pre>

<h3 id="Certo">Certo</h3>

<p>Para evitar o erro, você precisa adicionar uma definição de <code>bar</code> ao objeto ou verificar a existência da propriedade <code>bar</code> antes de tentar acessá-la; Uma maneira de fazer isso é usar o método {{jsxref ("Object.prototype.hasOwnProperty ()")}}, desta forma:</p>

<pre class="brush: js example-good">var foo = {};

// Define a propriedade bar

foo.bar = 'moon';
console.log(foo.bar); // "moon"

// Teste para ter certeza se bar existe antes de acessa-lo

if (foo.hasOwnProperty('bar')) {
  console.log(foo.bar);
}</pre>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("Operators/Property_Accessors", "property accessors", 0, 1)}}</li>
</ul>
