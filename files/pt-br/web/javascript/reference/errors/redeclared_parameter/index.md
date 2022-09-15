---
title: 'SyntaxError: redeclaration of formal parameter "x"'
slug: Web/JavaScript/Reference/Errors/Redeclared_parameter
tags:
  - Erros
translation_of: Web/JavaScript/Reference/Errors/Redeclared_parameter
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Mensagem">Mensagem</h2>

<pre class="syntaxbox">SyntaxError: Let/Const redeclaration (Edge)
SyntaxError: redeclaration of formal parameter "x" (Firefox)
SyntaxError: Identifier "x" has already been declared (Chrome)
</pre>

<h2 id="Tipo_de_Erro">Tipo de Erro</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="O_que_deu_errado">O que deu errado?</h2>

<p>O mesmo nome de variável ocorre como parâmetro da função e é então redeclarada atribuindo <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/let">let</a></code> no corpo da função. Redeclarando a mesma variável dentro da mesma função ou no escopo do bloco usando <code>let</code> não é permitido em JavaScript.</p>

<h2 id="Exemplos">Exemplos</h2>

<p>Neste caso, a variável "arg" redeclara o argumento.</p>

<pre class="brush: js example-bad">function f(arg) {
  let arg = 'foo';
}

// SyntaxError: redeclaration of formal parameter "arg"
</pre>

<p>Se você quiser mudar o valor de "arg" no corpo da função, você pode fazer, mas você não precisa declarar novamente a mesma variável. Em outras palavras: você pode omitir a palavra chave <code>let</code>. Se você quiser criar uma nova variável, você precisa renomea-la, pois isso conflita com o parâmetro da função.</p>

<pre class="brush: js example-good">function f(arg) {
  arg = 'foo';
}

function f(arg) {
  let bar = 'foo';
}
</pre>

<h2 id="Notas_de_compatibilidade">Notas de compatibilidade</h2>

<ul>
 <li>Antes do Firefox 49 {{geckoRelease(49)}}, isto foi lançado como um {{jsxref("TypeError")}} ({{bug(1275240)}}).</li>
</ul>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/let">let</a></code></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/const">const</a></code></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/var">var</a></code></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Declarations">Declaring variables</a> in the <a href="/en-US/docs/Web/JavaScript/Guide">JavaScript Guide</a></li>
</ul>
